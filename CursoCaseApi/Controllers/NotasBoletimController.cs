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
    public class NotasBoletimController : ControllerBase
    {
        private IMapper Mapper;

        private INotasBoletimRepository NotasBoletimRepository;

        public NotasBoletimController(IMapper mapper, INotasBoletimRepository notasBoletimRepository)
        {
            Mapper = mapper;
            NotasBoletimRepository = notasBoletimRepository;
        }

        [HttpGet("Lista")]
        public ActionResult<PagedResult<NotasBoletimDto>> Lista([FromQuery] NotasBoletimFiltroDto notasBoletimFiltroDto)
        {
            try
            {
                NotasBoletimDto notasBoletimDto = Mapper.Map<NotasBoletimDto>(notasBoletimFiltroDto);

                PagedResult<NotasBoletim> listaAux = NotasBoletimRepository.GetNotasBoletim(notasBoletimDto.BoletimId.HasValue ? notasBoletimDto.BoletimId : null,
                    notasBoletimDto.DisciplinaId.HasValue ? notasBoletimDto.DisciplinaId : null,
                    notasBoletimDto.Nota.HasValue ? notasBoletimDto.Nota : null,
                    notasBoletimFiltroDto.PaginaAtual, notasBoletimFiltroDto.TotalPorPagina);

                PagedResult<NotasBoletimDto> lista = new()
                {
                    CurrentPage = listaAux.CurrentPage,
                    PageCount = listaAux.PageCount,
                    PageSize = listaAux.PageSize,
                    Results = Mapper.Map<IList<NotasBoletimDto>>(listaAux.Results),
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
        public async Task<ActionResult<RespostaApi>> Alterar(int id, [FromBody] NotasBoletimDto notasBoletimDto)
        {
            try
            {
                NotasBoletim notasBoletim = Mapper.Map<NotasBoletim>(notasBoletimDto);
                await NotasBoletimRepository.AlterarAsync(id, notasBoletim);

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
                await NotasBoletimRepository.ExcluirAsync(id);

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
        public async Task<ActionResult<RespostaApi>> Criar([FromBody] NotasBoletimDto notasBoletimDto)
        {
            try
            {
                NotasBoletim notasBoletim = Mapper.Map<NotasBoletim>(notasBoletimDto);
                await NotasBoletimRepository.CriarNotasBoletimAsync(notasBoletim);

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
