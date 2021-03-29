using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SynonymController : ControllerBase
    {

        private readonly Project1Context _context;

        public SynonymController(Project1Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Synonym> Get()
        {

            var synonyms = _context.Synonym.ToList();
            return synonyms;

        }

        [HttpPost]
        public async Task<ActionResult<Synonym>> PostSynonym(Synonym synonym)
        {
            _context.Synonym.Add(synonym);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSynonym", new { id = synonym.Id }, synonym);
        }

    }
}
