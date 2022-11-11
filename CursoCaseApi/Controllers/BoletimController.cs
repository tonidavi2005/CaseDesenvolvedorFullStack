using AutoMapper;
using CursoCaseApi.Repository.CursoCase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.CursoCase;
using Models.Dto;
using Models.Utils;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace CursoCaseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class BoletimController : ControllerBase
    {
        private IMapper Mapper;

        private IBoletimRepository BoletimRepository;

        public BoletimController(IMapper mapper, IBoletimRepository boletimRepository)
        {
            Mapper = mapper;
            BoletimRepository = boletimRepository;
        }

        [HttpGet("Lista")]
        public ActionResult<PagedResult<BoletimDto>> Lista([FromQuery] BoletimFiltroDto boletimFiltroDto)
        {
            try
            {
                BoletimDto boletimDto = Mapper.Map<BoletimDto>(boletimFiltroDto);

                PagedResult<Boletim> listaAux = BoletimRepository.GetBoletim(boletimDto.AlunoId.HasValue ? boletimDto.AlunoId : null,
                    boletimDto.DataEntrega.HasValue ? boletimDto.DataEntrega : null,
                    boletimFiltroDto.PaginaAtual, boletimFiltroDto.TotalPorPagina);

                PagedResult<BoletimDto> lista = new()
                {
                    CurrentPage = listaAux.CurrentPage,
                    PageCount = listaAux.PageCount,
                    PageSize = listaAux.PageSize,
                    Results = Mapper.Map<IList<BoletimDto>>(listaAux.Results),
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
        public async Task<ActionResult<RespostaApi>> Alterar(int id, [FromBody] BoletimDto boletimDto)
        {
            try
            {
                Boletim boletim = Mapper.Map<Boletim>(boletimDto);
                await BoletimRepository.AlterarAsync(id, boletim);

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
                await BoletimRepository.ExcluirAsync(id);

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
        public async Task<ActionResult<RespostaApi>> Criar([FromBody] BoletimDto boletimDto)
        {
            try
            {
                Boletim boletim = Mapper.Map<Boletim>(boletimDto);
                await BoletimRepository.CriarBoletimAsync(boletim);

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
