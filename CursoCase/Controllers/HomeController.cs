using CursoCase.Models;
using CursoCase.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Models.Dto;
using Models.Utils;
using System;
using System.Diagnostics;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace CursoCase.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IConfiguration Configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login()
        {
            AlunoDto alunoDto = new();
            return View(alunoDto);
        }

        [HttpPost]
        public IActionResult Login(AlunoDto alunoDto)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var resultado = client.PostAsync("api/aluno/login", new StringContent(JsonSerializer.Serialize(alunoDto), Encoding.UTF8, "application/json"));
                    resultado.Wait();
                    var responseMessage = resultado.Result;

                    if (responseMessage.IsSuccessStatusCode)
                    {
                        var readTask = responseMessage.Content.ReadAsStringAsync();
                        readTask.Wait();
                        var userToken = JsonSerializer.Deserialize<UserToken>(readTask.Result, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                        TempData["Token"] = userToken.Token;
                        TempData.Put("Logado", userToken.AlunoLogado);
                        return View("Index");
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

        public IActionResult Cadastrar()
        {
            AlunoDto alunoDto = new();
            return View(alunoDto);
        }

        [HttpPost]
        public IActionResult Cadastrar(AlunoDto alunoDto)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Configuration.GetValue<string>("BaseAddress"));
                    var resultado = client.PostAsync("api/aluno/criar", new StringContent(JsonSerializer.Serialize(alunoDto), Encoding.UTF8, "application/json"));
                    resultado.Wait();
                    var responseMessage = resultado.Result;

                    if (!responseMessage.IsSuccessStatusCode)
                    {
                        ErrorViewModel errorViewModel = new();
                        return View("Error", errorViewModel);
                    }
                }

                return View("Index");
            }
            catch (Exception)
            {
                ErrorViewModel errorViewModel = new();
                return View("Error", errorViewModel);
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
