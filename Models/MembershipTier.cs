using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class MembershipTier
    {
        [Key]
        public int Tier_code
        {
            get; set;
        }
        public string Tier_name
        {
            get; set;
        }
        public double Tier_price
        {
            get; set;
        }
    }
}