using Models.CursoCase;
using Models.Utils;
using System;
using System.Threading.Tasks;

namespace CursoCaseApi.Repository.CursoCase
{
    public interface IBoletimRepository
    {
        PagedResult<Boletim> GetBoletim(int? alunoId, DateTime? dataEntrega, int paginaAtual, int totalPagina);

        Task AlterarAsync(int id, Boletim boletim);

        Task ExcluirAsync(int id);

        Task<Boletim> CriarBoletimAsync(Boletim boletim);
    }
}
