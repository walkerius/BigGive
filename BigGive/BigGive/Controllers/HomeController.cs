using BigGive.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Hosting.Server;
using System.Xml.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace BigGive.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult SubmitForm()
        {
            SubmitForm formModel = new SubmitForm { Name = "Bobby Joe" };
            return View(formModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}