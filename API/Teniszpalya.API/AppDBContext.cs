using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        {
        }

        public DbSet<Court> Courts { get; set; }
    }
}
