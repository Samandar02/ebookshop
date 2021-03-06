using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace application.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly IConfiguration configuration;

        public RegisterController(UserManager<IdentityUser> userManager,IConfiguration conf)
        {
            this.userManager = userManager;
            this.configuration = conf;
        }
        [HttpPost]
        public async Task<IActionResult> LoginAsync(Credentials credentials)
        {
            var user = await userManager.FindByNameAsync(credentials.UserName);
            if (user == null)
                return BadRequest("This user didn't match");
           
            var result = await userManager.CheckPasswordAsync(user,credentials.Passwrd);
            if (!result)
                return BadRequest("Password didnt match");

            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Sid, user.Id));
            claims.Add(new Claim(ClaimTypes.Name, user.UserName));

            return Ok(GenerateToken(claims));
        }
        [HttpPost]
        public async Task<IActionResult> Register(Credentials credentials)
        {
            var isExistUser = await userManager.FindByNameAsync(credentials.UserName);
            if (isExistUser != null)
                return BadRequest("This user has been alerady registered");
            IdentityUser user = new()
            {
                UserName = credentials.UserName,
                Email = credentials.Email,
                PhoneNumber = credentials.PhoneNumber
            };
            var result = await userManager.CreateAsync(user, credentials.Passwrd);
            if(!result.Succeeded)
                   return BadRequest(result.Errors);
            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Sid, user.Id));
            claims.Add(new Claim(ClaimTypes.Name, user.UserName));
            
            return Ok(GenerateToken(claims));
        }

        private string GenerateToken(List<Claim> claims)
        {
             var token = new JwtSecurityToken(
               audience: configuration["JwtConfiguration:ValidAudience"],
               issuer: configuration["JwtConfiguration:ValidIssuer"],
               claims: claims,
               expires: DateTime.Now.AddHours(2),
               signingCredentials: new SigningCredentials(
                   new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtConfiguration:SigningKey"])), SecurityAlgorithms.HmacSha256)
               );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
