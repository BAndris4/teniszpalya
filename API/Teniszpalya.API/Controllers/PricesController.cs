using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class PricesController : ControllerBase
    {
        public readonly AppDBContext _context;

        public PricesController(AppDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<CourtPrice>> GetPrices()
        {
            return await _context.CourtPrices.ToListAsync();
        }
    }
}