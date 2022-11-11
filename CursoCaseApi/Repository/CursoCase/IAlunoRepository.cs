using Models.CursoCase;
using Models.Utils;
using System;
using System.Threading.Tasks;

namespace CursoCaseApi.Repository.CursoCase
{
    public interface IAlunoRepository
    {
        Task<Aluno> CriarAlunoAsync(Aluno aluno);

        Task AlterarAsync(int id, Aluno aluno);

        Task ExcluirAsync(int id);

        Task<Aluno> GetAlunoAsync(int id);

        Task<Aluno> GetAlunoAsync(string email);

        PagedResult<Aluno> GetAluno(string nome, string email, DateTime? dataNascimento, int paginaAtual, int totalPagina);
    }
}
