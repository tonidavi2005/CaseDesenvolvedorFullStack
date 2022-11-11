using CursoCaseApi.Contexto;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Models.CursoCase;
using Models.Utils;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CursoCaseApi.Repository.CursoCase
{
    public class AlunoRepository : IAlunoRepository
    {
        private readonly CursoCaseContext CursoCaseContext;

        public AlunoRepository(CursoCaseContext cursoCaseContext)
        {
            CursoCaseContext = cursoCaseContext;
        }

        public async Task<Aluno> CriarAlunoAsync(Aluno aluno)
        {
            try
            {
                EntityEntry<Aluno> entityEntry = await CursoCaseContext.Alunos.AddAsync(aluno);
                await CursoCaseContext.SaveChangesAsync();
                return entityEntry.Entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task AlterarAsync(int id, Aluno aluno)
        {
            try
            {
                Aluno alunoRastreado = await CursoCaseContext.Alunos.FindAsync(id);
                alunoRastreado.Nome = aluno.Nome;
                alunoRastreado.DataNascimento = aluno.DataNascimento;
                await CursoCaseContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task ExcluirAsync(int id)
        {
            try
            {
                Aluno alunoRastreado = await CursoCaseContext.Alunos.FindAsync(id);
                CursoCaseContext.Alunos.Remove(alunoRastreado);
                await CursoCaseContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public Task<Aluno> GetAlunoAsync(int id)
        {
            try
            {
                return CursoCaseContext.Alunos.Where(a => a.Id.Equals(id)).AsNoTracking().FirstOrDefaultAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public Task<Aluno> GetAlunoAsync(string email)
        {
            try
            {
                return CursoCaseContext.Alunos.Where(a => a.Email.Equals(email)).AsNoTracking().FirstOrDefaultAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public PagedResult<Aluno> GetAluno(string nome, string email, DateTime? dataNascimento, int paginaAtual, int totalPagina)
        {
            try
            {
                PagedResult<Aluno> lista = new();

                if (!string.IsNullOrEmpty(nome) && !string.IsNullOrEmpty(email) && dataNascimento.HasValue)
                {
                    lista = CursoCaseContext.Alunos.Where(a => a.Nome.Contains(nome) && a.Email.Equals(email) && a.DataNascimento.Equals(dataNascimento))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (!string.IsNullOrEmpty(nome) && !string.IsNullOrEmpty(email))
                {
                    lista = CursoCaseContext.Alunos.Where(a => a.Nome.Contains(nome) && a.Email.Equals(email))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (!string.IsNullOrEmpty(nome))
                {
                    lista = CursoCaseContext.Alunos.Where(a => a.Nome.Contains(nome))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (!string.IsNullOrEmpty(email))
                {
                    lista = CursoCaseContext.Alunos.Where(a => a.Email.Equals(email))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (dataNascimento.HasValue)
                {
                    lista = CursoCaseContext.Alunos.Where(a => a.DataNascimento.Equals(dataNascimento))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else
                {
                    lista = CursoCaseContext.Alunos
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }

                return lista;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }
    }
}
