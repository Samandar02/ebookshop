using System;
using System.Collections.Generic;

namespace application.Models
{
    public partial class Comment
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public int? Raiting { get; set; }
        public int? BookId { get; set; }
        public string? UserId { get; set; }

        public virtual Book? Book { get; set; }
    }
}
