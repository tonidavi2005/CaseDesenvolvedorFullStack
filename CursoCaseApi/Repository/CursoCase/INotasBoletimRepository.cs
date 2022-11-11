using Models.CursoCase;
using Models.Utils;
using System.Threading.Tasks;

namespace CursoCaseApi.Repository.CursoCase
{
    public interface INotasBoletimRepository
    {
        PagedResult<NotasBoletim> GetNotasBoletim(int? boletimId, int? disciplinaId, decimal? nota, int paginaAtual, int totalPagina);

        Task AlterarAsync(int id, NotasBoletim notasBoletim);

        Task ExcluirAsync(int id);

        Task<NotasBoletim> CriarNotasBoletimAsync(NotasBoletim notasBoletim);
    }
}
