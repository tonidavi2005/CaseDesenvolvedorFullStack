using System;

namespace Models.Dto
{
    public class AlunoFiltroDto
    {
        public string Nome { get; set; }

        public string Email { get; set; }

        public DateTime? DataNascimento { get; set; }

        public int PaginaAtual { get; set; }

        public int TotalPorPagina { get; set; }
    }
}
