
using Microsoft.EntityFrameworkCore;
using Models;

namespace FitnessCenter
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employee> Employee { get; set; }
        public DbSet<Member> Member { get; set; }
        public DbSet<MembershipTier> Membership_Tier { get; set; }
    }
}
