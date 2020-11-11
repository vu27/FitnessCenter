using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace FitnessCenter
{
    [Route("api/[controller]")]
    [ApiController]
    public class SQLController : ControllerBase
    {
        private readonly DataContext _context;

        public SQLController(DataContext context)
        {
            _context = context;
        }

        // GET: api/sql
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        {
            return await _context.ToListAsync();
        }


    }
}
