using System;
using System.Collections.Generic;

namespace application.Models
{
    public partial class Book
    {
        public Book()
        {
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Authors { get; set; }
        public string? Publisher { get; set; }
        public int? Pages { get; set; }
        public string? Website { get; set; }
        public int? Price { get; set; }
        public string? Img { get; set; }
        public int? CatigorieId { get; set; }

        public virtual Catigory? Catigorie { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
