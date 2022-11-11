namespace Models.Dto
{
    public class DisciplinaFiltroDto
    {
        public string Nome { get; set; }

        public int? CargaHoraria { get; set; }

        public int PaginaAtual { get; set; }

        public int TotalPorPagina { get; set; }
    }
}
