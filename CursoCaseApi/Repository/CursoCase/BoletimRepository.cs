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
    public class BoletimRepository : IBoletimRepository
    {
        private readonly CursoCaseContext CursoCaseContext;

        public BoletimRepository(CursoCaseContext cursoCaseContext)
        {
            CursoCaseContext = cursoCaseContext;
        }

        public PagedResult<Boletim> GetBoletim(int? alunoId, DateTime? dataEntrega, int paginaAtual, int totalPagina)
        {
            try
            {
                PagedResult<Boletim> lista = new();

                if (alunoId.HasValue && dataEntrega.HasValue)
                {
                    lista = CursoCaseContext.Boletins.Where(a => a.AlunoId.Equals(alunoId) && a.DataEntrega.Equals(dataEntrega)).Include(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "AlunoId", false);
                }
                else if (alunoId.HasValue)
                {
                    lista = CursoCaseContext.Boletins.Where(a => a.AlunoId.Equals(alunoId)).Include(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "AlunoId", false);
                }
                else if (dataEntrega.HasValue)
                {
                    lista = CursoCaseContext.Boletins.Where(a => a.DataEntrega.Equals(dataEntrega)).Include(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "AlunoId", false);
                }
                else
                {
                    lista = CursoCaseContext.Boletins.Include(a => a.Aluno)
                        .AsNoTracking().GetPaged(paginaAtual, totalPagina, "AlunoId", false);
                }

                return lista;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task AlterarAsync(int id, Boletim boletim)
        {
            try
            {
                Boletim boletimRastreado = await CursoCaseContext.Boletins.FindAsync(id);
                boletimRastreado.DataEntrega = boletim.DataEntrega;
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
                Boletim boletimRastreado = await CursoCaseContext.Boletins.FindAsync(id);
                CursoCaseContext.Boletins.Remove(boletimRastreado);
                await CursoCaseContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message, ex.InnerException);
            }
        }

        public async Task<Boletim> CriarBoletimAsync(Boletim boletim)
        {
            try
            {
                EntityEntry<Boletim> entityEntry = CursoCaseContext.Boletins.Update(boletim);
                CursoCaseContext.Entry(boletim.Aluno).State = EntityState.Unchanged;
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
