using System;
using System.Collections.Generic;

namespace application.Models
{
    public partial class Catigory
    {
        public Catigory()
        {
            Books = new HashSet<Book>();
        }

        public int Id { get; set; }
        public string? CatigorieName { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
