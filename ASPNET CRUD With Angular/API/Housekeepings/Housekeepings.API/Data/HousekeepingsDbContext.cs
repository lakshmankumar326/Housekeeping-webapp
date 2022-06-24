using Housekeepings.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Housekeepings.API.Data
{
    public class HousekeepingsDbContext : DbContext
    {
        public HousekeepingsDbContext(DbContextOptions options) : base(options)
        {
        }

        //Dbset
        public DbSet<Housekeeping> Housekeepings { get; set; }
    }
}
