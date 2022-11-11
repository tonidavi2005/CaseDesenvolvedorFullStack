using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Models.Utils
{
    public static class PagedResultExtension
    {
        public static PagedResult<T> GetPaged<T>(this IQueryable<T> query, int page, int pageSize, string orderBy, bool orderByDesc) where T : class
        {
            try
            {
                var result = new PagedResult<T>();
                result.CurrentPage = page;
                result.PageSize = pageSize;
                result.RowCount = query.Count();

                var pageCount = (double)result.RowCount / pageSize;
                result.PageCount = (int)Math.Ceiling(pageCount);
            
                var skip = (page - 1) * pageSize;
                var props = typeof(T).GetProperties();
                var orderByProperty = props.Where(p => p.Name.Equals(orderBy)).FirstOrDefault();

                if (orderByProperty == null)
                {
                    throw new Exception($"Propriedade: '{orderBy}' não encontrado");
                }

                Func<T, object> expressao = (x => orderByProperty.GetValue(x, null));

                if (orderByDesc)
                {
                    result.Results = query.OrderByDescending(expressao).Skip(skip).Take(pageSize).ToList();
                }
                else
                {
                    result.Results = query.OrderBy(expressao).Skip(skip).Take(pageSize).ToList();
                }
            
                return result;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public static PagedResult<T> GetPaged<T>(this IEnumerable<T> query, int page, int pageSize, string orderBy, bool orderByDesc) where T : class
        {
            try
            {
                var result = new PagedResult<T>();
                result.CurrentPage = page;
                result.PageSize = pageSize;
                result.RowCount = query.Count();

                var pageCount = (double)result.RowCount / pageSize;
                result.PageCount = (int)Math.Ceiling(pageCount);

                var skip = (page - 1) * pageSize;
                var props = typeof(T).GetProperties();
                var orderByProperty = props.Where(p => p.Name.Equals(orderBy)).FirstOrDefault();

                if (orderByProperty == null)
                {
                    throw new Exception($"Propriedade: '{orderBy}' não encontrado");
                }

                Func<T, object> expressao = (x => orderByProperty.GetValue(x, null));

                if (orderByDesc)
                {
                    result.Results = query.OrderByDescending(expressao).Skip(skip).Take(pageSize).ToList();
                }
                else
                {
                    result.Results = query.OrderBy(expressao).Skip(skip).Take(pageSize).ToList();
                }

                return result;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }
    }
}