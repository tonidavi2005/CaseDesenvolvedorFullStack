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
    public class NotasBoletimRepository : INotasBoletimRepository
    {
        private readonly CursoCaseContext CursoCaseContext;

        public NotasBoletimRepository(CursoCaseContext cursoCaseContext)
        {
            CursoCaseContext = cursoCaseContext;
        }

        public PagedResult<NotasBoletim> GetNotasBoletim(int? boletimId, int? disciplinaId, decimal? nota, int paginaAtual, int totalPagina)
        {
            try
            {
                PagedResult<NotasBoletim> lista = new();

                if (boletimId.HasValue && disciplinaId.HasValue && nota.HasValue)
                {
                    lista = CursoCaseContext.NotasBoletins.Where(a => a.BoletimId.Equals(boletimId) && a.DisciplinaId.Equals(disciplinaId) && a.Nota.Equals(nota)).Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }
                else if (boletimId.HasValue && disciplinaId.HasValue)
                {
                    lista = CursoCaseContext.NotasBoletins.Where(a => a.BoletimId.Equals(boletimId) && a.DisciplinaId.Equals(disciplinaId)).Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }
                else if (boletimId.HasValue)
                {
                    lista = CursoCaseContext.NotasBoletins.Where(a => a.BoletimId.Equals(boletimId)).Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }
                else if (disciplinaId.HasValue)
                {
                    lista = CursoCaseContext.NotasBoletins.Where(a => a.DisciplinaId.Equals(disciplinaId)).Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }
                else if (nota.HasValue)
                {
                    lista = CursoCaseContext.NotasBoletins.Where(a => a.Nota.Equals(nota)).Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }
                else
                {
                    lista = CursoCaseContext.NotasBoletins.Include(a => a.Disciplina).Include(a => a.Boletim).ThenInclude(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "BoletimId", false);
                }

                return lista;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task AlterarAsync(int id, NotasBoletim notasBoletim)
        {
            try
            {
                NotasBoletim notasBoletimRastreado = await CursoCaseContext.NotasBoletins.FindAsync(id);
                notasBoletimRastreado.Nota = notasBoletim.Nota;
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
                NotasBoletim notasBoletimRastreado = await CursoCaseContext.NotasBoletins.FindAsync(id);
                CursoCaseContext.NotasBoletins.Remove(notasBoletimRastreado);
                await CursoCaseContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task<NotasBoletim> CriarNotasBoletimAsync(NotasBoletim notasBoletim)
        {
            try
            {
                EntityEntry<NotasBoletim> entityEntry = CursoCaseContext.NotasBoletins.Update(notasBoletim);
                CursoCaseContext.Entry(notasBoletim.Disciplina).State = EntityState.Unchanged;
                CursoCaseContext.Entry(notasBoletim.Boletim).State = EntityState.Unchanged;
                CursoCaseContext.Entry(notasBoletim.Boletim.Aluno).State = EntityState.Unchanged;
                await CursoCaseContext.SaveChangesAsync();
                return entityEntry.Entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }
    }
}
