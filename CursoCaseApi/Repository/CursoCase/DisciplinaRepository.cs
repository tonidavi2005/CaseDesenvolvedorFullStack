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
    public class DisciplinaRepository : IDisciplinaRepository
    {
        private readonly CursoCaseContext CursoCaseContext;

        public DisciplinaRepository(CursoCaseContext cursoCaseContext)
        {
            CursoCaseContext = cursoCaseContext;
        }

        public PagedResult<Disciplina> GetDisciplina(string nome, int? cargaHoraria, int paginaAtual, int totalPagina)
        {
            try
            {
                PagedResult<Disciplina> lista = new();

                if (!string.IsNullOrEmpty(nome) && cargaHoraria.HasValue)
                {
                    lista = CursoCaseContext.Disciplinas.Where(a => a.Nome.Contains(nome) && a.CargaHoraria.Equals(cargaHoraria))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (!string.IsNullOrEmpty(nome))
                {
                    lista = CursoCaseContext.Disciplinas.Where(a => a.Nome.Contains(nome))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else if (cargaHoraria.HasValue)
                {
                    lista = CursoCaseContext.Disciplinas.Where(a => a.CargaHoraria.Equals(cargaHoraria))
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }
                else
                {
                    lista = CursoCaseContext.Disciplinas
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "Nome", false);
                }

                return lista;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task AlterarAsync(int id, Disciplina disciplina)
        {
            try
            {
                Disciplina disciplinaRastreado = await CursoCaseContext.Disciplinas.FindAsync(id);
                disciplinaRastreado.Nome = disciplina.Nome;
                disciplinaRastreado.CargaHoraria = disciplina.CargaHoraria;
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
                Disciplina disciplinaRastreado = await CursoCaseContext.Disciplinas.FindAsync(id);
                CursoCaseContext.Disciplinas.Remove(disciplinaRastreado);
                await CursoCaseContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task<Disciplina> CriarDisciplinaAsync(Disciplina disciplina)
        {
            try
            {
                EntityEntry<Disciplina> entityEntry = await CursoCaseContext.Disciplinas.AddAsync(disciplina);
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
