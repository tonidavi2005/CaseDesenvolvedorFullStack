using CursoCase.Models;
using CursoCase.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Models.Dto;
using Models.Utils;
using System.Net.Http;
using System.Text.Json;
using System.Text;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.WebUtilities;
using System.Net.Http.Headers;
using System.Web;
using Models.CursoCase;
using System.Collections;

namespace CursoCase.Controllers
{
    public class AlunoController : Controller
    {
        private readonly ILogger<AlunoController> _logger;

        private readonly IConfiguration Configuration;

        public AlunoController(ILogger<AlunoController> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
        }

        public IActionResult Index()
        {
            try
            {
                AlunoFiltroDto alunoFiltroDto = new()
                {
                    PaginaAtual = 1,
                    TotalPorPagina = 20
                };

                return View(alunoFiltroDto);
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        [HttpPost]
        public IActionResult Index(AlunoFiltroDto alunoFiltroDto)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var uriBuilder = Parametros(new Uri($@"{Configuration.GetValue<string>("BaseAddress")}/api/aluno/lista"), alunoFiltroDto);
                    var responseMessage = client.GetAsync(uriBuilder.ToString()).Result;

                    if (responseMessage.IsSuccessStatusCode)
                    {
                        var readTask = responseMessage.Content.ReadAsStringAsync().Result;
                        var lista = JsonSerializer.Deserialize<PagedResult<AlunoDto>>(readTask, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                        TempData.Put("Filtro", alunoFiltroDto);
                        return View("Lista", lista);
                    }
                    else
                    {
                        ErrorViewModel errorViewModel = new();
                        return View("Error", errorViewModel);
                    }
                }
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        public IActionResult Alterar(int id)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var responseMessage = client.GetAsync($"/api/aluno?id={id}").Result;

                    if (responseMessage.IsSuccessStatusCode)
                    {
                        var readTask = responseMessage.Content.ReadAsStringAsync().Result;
                        var alunoDto = JsonSerializer.Deserialize<AlunoDto>(readTask, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                        return View("Alterar", alunoDto);
                    }
                    else
                    {
                        ErrorViewModel errorViewModel = new();
                        return View("Error", errorViewModel);
                    }
                }
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        [HttpPost]
        public IActionResult Alterar(AlunoDto alunoDto)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var resultado = client.PutAsync($"api/aluno/alterar?id={alunoDto.Id}", new StringContent(JsonSerializer.Serialize(alunoDto), Encoding.UTF8, "application/json")).Result;
                    var responseMessage = resultado;

                    if (responseMessage.IsSuccessStatusCode)
                    {
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        ErrorViewModel errorViewModel = new();
                        return View("Error", errorViewModel);
                    }
                }
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        public IActionResult Excluir(int id)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var responseMessage = client.DeleteAsync($"/api/aluno/Excluir?id={id}").Result;

                    if (responseMessage.IsSuccessStatusCode)
                    {
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        ErrorViewModel errorViewModel = new();
                        return View("Error", errorViewModel);
                    }
                }
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        private UriBuilder Parametros(Uri uri, AlunoFiltroDto alunoFiltroDto)
        {
            UriBuilder uriBuilder = new(uri);
            var query = HttpUtility.ParseQueryString(uriBuilder.Query);

            if (!string.IsNullOrEmpty(alunoFiltroDto.Nome) && !string.IsNullOrEmpty(alunoFiltroDto.Email) && alunoFiltroDto.DataNascimento.HasValue)
            {
                query.Add("Nome", alunoFiltroDto.Nome);
                query.Add("email", alunoFiltroDto.Email);
                query.Add("DataNascimento", alunoFiltroDto.DataNascimento.Value.ToString("yyyy-MM-dd"));
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }
            else if (!string.IsNullOrEmpty(alunoFiltroDto.Nome) && !string.IsNullOrEmpty(alunoFiltroDto.Email))
            {
                query.Add("Nome", alunoFiltroDto.Nome);
                query.Add("email", alunoFiltroDto.Email);
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }
            else if (!string.IsNullOrEmpty(alunoFiltroDto.Nome))
            {
                query.Add("Nome", alunoFiltroDto.Nome);
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }
            else if (!string.IsNullOrEmpty(alunoFiltroDto.Email))
            {
                query.Add("email", alunoFiltroDto.Email);
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }
            else if (alunoFiltroDto.DataNascimento.HasValue)
            {
                query.Add("DataNascimento", alunoFiltroDto.DataNascimento.Value.ToString("yyyy-MM-dd"));
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }
            else
            {
                query.Add("PaginaAtual", alunoFiltroDto.PaginaAtual.ToString());
                query.Add("TotalPorPagina", alunoFiltroDto.TotalPorPagina.ToString());
            }

            uriBuilder.Query = query.ToString();
            return uriBuilder;
        }
    }
}
