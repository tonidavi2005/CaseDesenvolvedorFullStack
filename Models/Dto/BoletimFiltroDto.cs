using System;

namespace Models.Dto
{
    public class BoletimFiltroDto
    {
        public int? AlunoId { get; set; }

        public DateTime? DataEntrega { get; set; }

        public int PaginaAtual { get; set; }

        public int TotalPorPagina { get; set; }
    }
}
