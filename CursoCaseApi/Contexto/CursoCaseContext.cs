using Microsoft.EntityFrameworkCore;
using Models.CursoCase;

namespace CursoCaseApi.Contexto
{
    public class CursoCaseContext : DbContext
    {
        private readonly DbContextOptions<CursoCaseContext> _options;

        public DbContextOptions<CursoCaseContext> Options
        {
            get
            {
                return _options;
            }
        }

        protected CursoCaseContext()
        {
        }

        public CursoCaseContext(DbContextOptions<CursoCaseContext> options)
            : base(options)
        {
            _options = options;
        }

        public DbSet<Aluno> Alunos { get; set; }

        public DbSet<Boletim> Boletins { get; set; }

        public DbSet<Disciplina> Disciplinas { get; set; }

        public DbSet<NotasBoletim> NotasBoletins { get; set; }
    }
}
