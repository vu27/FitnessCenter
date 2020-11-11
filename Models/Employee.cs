using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Employee
    {
        [Key]
        public int Emp_id
        {
            get; set;
        }
        public string Emp_fname
        {
            get; set;
        }
        public string Emp_lname
        {
            get; set;
        }
        public string Emp_phone
        {
            get; set;
        }
        public int Fac_id
        {
            get; set;
        }
    }
}