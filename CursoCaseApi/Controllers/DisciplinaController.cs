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
    public class DisciplinaController : ControllerBase
    {
        private IMapper Mapper;

        private IDisciplinaRepository DisciplinaRepository;

        public DisciplinaController(IMapper mapper, IDisciplinaRepository disciplinaRepository)
        {
            Mapper = mapper;
            DisciplinaRepository = disciplinaRepository;
        }

        [HttpGet("Lista")]
        public ActionResult<PagedResult<DisciplinaDto>> Lista([FromQuery] DisciplinaFiltroDto disciplinaFiltroDto)
        {
            try
            {
                DisciplinaDto disciplinaDto = Mapper.Map<DisciplinaDto>(disciplinaFiltroDto);

                PagedResult<Disciplina> listaAux = DisciplinaRepository.GetDisciplina(!string.IsNullOrEmpty(disciplinaDto.Nome) ? disciplinaDto.Nome : null,
                    disciplinaDto.CargaHoraria.HasValue ? disciplinaDto.CargaHoraria : null,
                    disciplinaFiltroDto.PaginaAtual, disciplinaFiltroDto.TotalPorPagina);

                PagedResult<DisciplinaDto> lista = new()
                {
                    CurrentPage = listaAux.CurrentPage,
                    PageCount = listaAux.PageCount,
                    PageSize = listaAux.PageSize,
                    Results = Mapper.Map<IList<DisciplinaDto>>(listaAux.Results),
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
        public async Task<ActionResult<RespostaApi>> Alterar(int id, [FromBody] DisciplinaDto disciplinaDto)
        {
            try
            {
                Disciplina disciplina = Mapper.Map<Disciplina>(disciplinaDto);
                await DisciplinaRepository.AlterarAsync(id, disciplina);

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
                await DisciplinaRepository.ExcluirAsync(id);

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

        [HttpPost("Criar")]
        public async Task<ActionResult<RespostaApi>> Criar([FromBody] DisciplinaDto disciplinaDto)
        {
            try
            {
                Disciplina disciplina = Mapper.Map<Disciplina>(disciplinaDto);
                await DisciplinaRepository.CriarDisciplinaAsync(disciplina);

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
    }
}
