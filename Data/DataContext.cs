
using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employee> Employee { get; set; }
        public DbSet<MembershipTier> Membership_Tier { get; set; }
    }
}
