using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using application.Models;

namespace application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatigoriesController : ControllerBase
    {
        private readonly amaliyotContext _context;

        public CatigoriesController(amaliyotContext context)
        {
            _context = context;
        }

        // GET: api/Catigories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catigory>>> GetCatigories()
        {
          if (_context.Catigories == null)
          {
              return NotFound();
          }
            return await _context.Catigories.ToListAsync();
        }

        // GET: api/Catigories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Catigory>> GetCatigory(int id)
        {
          if (_context.Catigories == null)
          {
              return NotFound();
          }
            var catigory = await _context.Catigories.FindAsync(id);

            if (catigory == null)
            {
                return NotFound();
            }

            return catigory;
        }


        #region ForAdminDashbord
        // POST: api/Catigories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Catigory>> PostCatigory(Catigory catigory)
        {
          if (_context.Catigories == null)
          {
              return Problem("Entity set 'amaliyotContext.Catigories'  is null.");
          }
            _context.Catigories.Add(catigory);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CatigoryExists(catigory.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCatigory", new { id = catigory.Id }, catigory);
        }

        // DELETE: api/Catigories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatigory(int id)
        {
            if (_context.Catigories == null)
            {
                return NotFound();
            }
            var catigory = await _context.Catigories.FindAsync(id);
            if (catigory == null)
            {
                return NotFound();
            }

            _context.Catigories.Remove(catigory);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion

        private bool CatigoryExists(int id)
        {
            return (_context.Catigories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
