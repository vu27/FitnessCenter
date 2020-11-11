using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Member
    {
        [Key]
        public int Mem_id
        {
            get; set;
        }
        public string Mem_fname
        {
            get; set;
        }
        public string Mem_lname
        {
            get; set;
        }
        public string Mem_email
        {
            get; set;
        }
        public bool Mem_is_active
        {
            get; set;
        }
        public double Mem_total_paid
        {
            get; set;
        }
        public int Tier_code
        {
            get; set;
        }
    }
}