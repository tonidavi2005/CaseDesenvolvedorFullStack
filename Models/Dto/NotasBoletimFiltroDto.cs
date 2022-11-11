namespace Models.Dto
{
    public class NotasBoletimFiltroDto
    {
        public int? BoletimId { get; set; }

        public int? DisciplinaId { get; set; }

        public decimal? Nota { get; set; }

        public int PaginaAtual { get; set; }

        public int TotalPorPagina { get; set; }
    }
}
