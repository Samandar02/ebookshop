using System;
using System.Collections.Generic;

namespace application.Models
{
    public partial class SavedBook
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public int? BookId { get; set; }
    }
}
