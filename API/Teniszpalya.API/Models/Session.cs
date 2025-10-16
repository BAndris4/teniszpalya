using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class Session
    {
        [Key]
        public int ID { get; set; }
        public required int UserID { get; set; }
        public required string Token { get; set; }
        public required long CreatedAt { get; set; }
        public required long ExpiresAt { get; set; } 
    }
}