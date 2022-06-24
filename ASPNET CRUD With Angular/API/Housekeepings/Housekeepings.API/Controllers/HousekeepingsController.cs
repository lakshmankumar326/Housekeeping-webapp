using Housekeepings.API.Data;
using Housekeepings.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Housekeepings.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HousekeepingsController : Controller
    {
        private readonly HousekeepingsDbContext housekeepingsDbContext;

        public HousekeepingsController(HousekeepingsDbContext housekeepingsDbContext)
        {
            this.housekeepingsDbContext = housekeepingsDbContext;
        }

        //Get All Housekeepings 
        [HttpGet]
        public async Task<IActionResult> GetAllHousekeepings()
        {
            var housekeepings = await housekeepingsDbContext.Housekeepings.ToListAsync();
            return Ok(housekeepings);
        }

        //Get single Housekeeping
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetHousekeeping")]
        public async Task<IActionResult> GetHousekeeping([FromRoute] Guid id)
        {
            var housekeeping = await housekeepingsDbContext.Housekeepings.FirstOrDefaultAsync(x => x.Id == id);
            if (housekeeping != null)
            {
                return Ok(housekeeping);
            }

            return NotFound("Housekeeping not found");
        }

        //Get Housekeeping
        [HttpPost]
        public async Task<IActionResult> AddHousekeeping([FromBody] Housekeeping housekeeping)
        {
            housekeeping.Id = Guid.NewGuid();
            await housekeepingsDbContext.Housekeepings.AddAsync(housekeeping);
            await housekeepingsDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetHousekeeping), new { id = housekeeping.Id }, housekeeping);
        }


        //Updating A Housekeeping
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateHousekeeping([FromRoute] Guid id, [FromBody] Housekeeping housekeeping)
        {
            var existingHousekeeping = await housekeepingsDbContext.Housekeepings.FirstOrDefaultAsync(x => x.Id == id);
            if (housekeeping!= null)
            {
                existingHousekeeping.Name = housekeeping.Name;
                existingHousekeeping.Date = housekeeping.Date;
                existingHousekeeping.TimeReq = housekeeping.TimeReq;
                existingHousekeeping.TimeIn = housekeeping.TimeIn;
                existingHousekeeping.TimeOut = housekeeping.TimeOut;
                existingHousekeeping.Feedback = housekeeping.Feedback;
                existingHousekeeping.Complaint = housekeeping.Complaint;
                existingHousekeeping.ServiceIsApproved = housekeeping.ServiceIsApproved;
                existingHousekeeping.ServiceRequest = housekeeping.ServiceRequest;
                await housekeepingsDbContext.SaveChangesAsync();
                return Ok(existingHousekeeping);
            }

            return NotFound("Housekeeping not found");
        }


        //Delete A Housekeeping
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteHousekeeping([FromRoute] Guid id)
        {
            var existingHousekeeping = await housekeepingsDbContext.Housekeepings.FirstOrDefaultAsync(x => x.Id == id);
            if (existingHousekeeping != null)
            {
                housekeepingsDbContext.Remove(existingHousekeeping);
                await housekeepingsDbContext.SaveChangesAsync();
                return Ok(existingHousekeeping);
            }

            return NotFound("Housekeeping not found");
        }
    }
}
