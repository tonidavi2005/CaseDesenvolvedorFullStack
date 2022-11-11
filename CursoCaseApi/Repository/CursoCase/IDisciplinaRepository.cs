using Models.CursoCase;
using Models.Utils;
using System.Threading.Tasks;

namespace CursoCaseApi.Repository.CursoCase
{
    public interface IDisciplinaRepository
    {
        PagedResult<Disciplina> GetDisciplina(string nome, int? cargaHoraria, int paginaAtual, int totalPagina);

        Task AlterarAsync(int id, Disciplina disciplina);

        Task ExcluirAsync(int id);

        Task<Disciplina> CriarDisciplinaAsync(Disciplina disciplina);
    }
}
