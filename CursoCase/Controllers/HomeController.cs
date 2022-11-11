using CursoCase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Models.Dto;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Text;
using System.Threading.Tasks;
using Models.Utils;

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
            return View();
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

                return View("Login");
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
