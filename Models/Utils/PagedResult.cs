using System.Collections.Generic;

namespace Models.Utils
{
    public class PagedResult<T> : PagedResultBase where T : class
    {
        public IList<T> Results { get; set; }
 
        public PagedResult()
        {
            Results = new List<T>();
        }
    }
}