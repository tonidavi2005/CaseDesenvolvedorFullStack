using AutoMapper;
using CursoCaseApi.Repository.CursoCase;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System;
using Models.Dto;
using Models.Utils;
using Models.CursoCase;
using Microsoft.Extensions.Configuration;

namespace CursoCaseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class AlunoController : ControllerBase
    {
        private IMapper Mapper;

        private IAlunoRepository AlunoRepository;

        private IConfiguration Configuration;

        public AlunoController(IMapper mapper, IConfiguration configuration, IAlunoRepository alunoRepository)
        {
            Mapper = mapper;
            Configuration = configuration;
            AlunoRepository = alunoRepository;
        }

        [HttpGet("Lista")]
        public ActionResult<PagedResult<AlunoDto>> Lista([FromQuery] AlunoFiltroDto alunoFiltroDto)
        {
            try
            {
                AlunoDto alunoDto = Mapper.Map<AlunoDto>(alunoFiltroDto);
                PagedResult<Aluno> listaAux = AlunoRepository.GetAluno(!string.IsNullOrEmpty(alunoDto.Nome) ? alunoDto.Nome : null,
                    !string.IsNullOrEmpty(alunoDto.Email) ? alunoDto.Email : null,
                    alunoDto.DataNascimento.HasValue ? alunoDto.DataNascimento : null,
                    alunoFiltroDto.PaginaAtual, alunoFiltroDto.TotalPorPagina);
                
                PagedResult<AlunoDto> lista = new()
                {
                    CurrentPage = listaAux.CurrentPage,
                    PageCount = listaAux.PageCount,
                    PageSize = listaAux.PageSize,
                    Results = Mapper.Map<IList<AlunoDto>>(listaAux.Results),
                    RowCount = listaAux.RowCount
                };
                
                return Ok(lista);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut("Alterar")]
        public async Task<ActionResult<RespostaApi>> Alterar(int id, [FromBody] AlunoDto alunoDto)
        {
            try
            {
                Aluno aluno = Mapper.Map<Aluno>(alunoDto);
                await AlunoRepository.AlterarAsync(id, aluno);

                RespostaApi resposta = new()
                {
                    Sucesso = true
                };

                return Ok();
            }
            catch (Exception ex)
            {
                RespostaApi respostaApi = new()
                {
                    Sucesso = false,
                    Erro = ex.Message
                };

                return BadRequest(respostaApi);
            }
        }

        [HttpDelete("Excluir")]
        public async Task<ActionResult<RespostaApi>> Excluir(int id)
        {
            try
            {
                await AlunoRepository.ExcluirAsync(id);

                RespostaApi resposta = new()
                {
                    Sucesso = true
                };

                return Ok();
            }
            catch (Exception ex)
            {
                RespostaApi respostaApi = new()
                {
                    Sucesso = false,
                    Erro = ex.Message
                };

                return BadRequest(respostaApi);
            }
        }

        [AllowAnonymous]
        [HttpPost("Criar")]
        public async Task<ActionResult<RespostaApi>> Criar([FromBody] AlunoDto alunoDto)
        {
            try
            {
                Aluno aluno = Mapper.Map<Aluno>(alunoDto);
                byte[] bytes = Encoding.UTF8.GetBytes(aluno.Senha);
                HashAlgorithm hashAlgorithm = new SHA512Managed();
                aluno.Senha = Convert.ToBase64String(hashAlgorithm.ComputeHash(bytes));
                
                await AlunoRepository.CriarAlunoAsync(aluno);

                RespostaApi resposta = new()
                {
                    Sucesso = true
                };

                return Ok(resposta);
            }
            catch (Exception ex)
            {
                RespostaApi respostaApi = new()
                {
                    Sucesso = false,
                    Erro = ex.Message
                };

                return BadRequest(respostaApi);
            }
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<UserToken>> Login([FromBody] AlunoDto alunoDto)
        {
            try
            {
                Aluno aluno = await AlunoRepository.GetAlunoAsync(alunoDto.Email);

                if (aluno is null)
                {
                    return BadRequest();
                }

                byte[] bytes = Encoding.UTF8.GetBytes(alunoDto.Senha);
                HashAlgorithm hashAlgorithm = new SHA512Managed();
                string aux = Convert.ToBase64String(hashAlgorithm.ComputeHash(bytes));

                if (aluno.Senha.Equals(aux))
                {
                    List<Claim> listaClaim = new List<Claim>()
                    {
                        new Claim(JwtRegisteredClaimNames.UniqueName, aluno.Id.ToString()),
                        new Claim(ClaimTypes.Sid, aluno.Nome),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                    };

                    SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["jwt:key"]));
                    SigningCredentials signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);
                    DateTime expiration = DateTime.UtcNow.AddHours(24);
                    string message = "Token JWT criado com sucesso";

                    JwtSecurityToken token = new JwtSecurityToken(null, null, listaClaim, null, expiration, signingCredentials);
                    UserToken userToken = new UserToken()
                    {
                        Expiration = expiration,
                        Message = message,
                        Token = new JwtSecurityTokenHandler().WriteToken(token)
                    };

                    return Ok(userToken);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
