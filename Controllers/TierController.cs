using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Models;

namespace FitnessCenter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TierController : ControllerBase
    {
        private readonly DataContext _context;

        public TierController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Tier
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MembershipTier>>> GetMembership_Tier()
        {
            return await _context.Membership_Tier.ToListAsync();
        }

        // GET: api/Tier/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MembershipTier>> GetMembershipTier(int id)
        {
            var membershipTier = await _context.Membership_Tier.FindAsync(id);

            if (membershipTier == null)
            {
                return NotFound();
            }

            return membershipTier;
        }

        // PUT: api/Tier/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMembershipTier(int id, MembershipTier membershipTier)
        {
            if (id != membershipTier.Tier_code)
            {
                return BadRequest();
            }

            _context.Entry(membershipTier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MembershipTierExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tier
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MembershipTier>> PostMembershipTier(MembershipTier membershipTier)
        {
            _context.Membership_Tier.Add(membershipTier);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMembershipTier", new { id = membershipTier.Tier_code }, membershipTier);
        }

        // DELETE: api/Tier/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MembershipTier>> DeleteMembershipTier(int id)
        {
            var membershipTier = await _context.Membership_Tier.FindAsync(id);
            if (membershipTier == null)
            {
                return NotFound();
            }

            _context.Membership_Tier.Remove(membershipTier);
            await _context.SaveChangesAsync();

            return membershipTier;
        }

        private bool MembershipTierExists(int id)
        {
            return _context.Membership_Tier.Any(e => e.Tier_code == id);
        }
    }
}
