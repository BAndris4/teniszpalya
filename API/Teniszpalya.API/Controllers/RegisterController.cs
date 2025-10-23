using Microsoft.AspNetCore.Mvc;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly AppDBContext _context;

        public RegisterController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserDTO userDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new User
            {
                FirstName = userDTO.FirstName.Trim(),
                LastName = userDTO.LastName.Trim(),
                Email = userDTO.Email.Trim(),
                PhoneNumber = userDTO.PhoneNumber.Trim(),
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(userDTO.Password.Trim()),
                RoleID = 1
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Register), new { id = user.ID }, user);
        }
    }
}