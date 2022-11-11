using Models.CursoCase;

namespace Models.Dto
{
    public class NotasBoletimDto
    {
        public int? Id { get; set; }

        public int? BoletimId { get; set; }

        public Boletim Boletim { get; set; }

        public int? DisciplinaId { get; set; }

        public Disciplina Disciplina { get; set; }

        public decimal? Nota { get; set; }
    }
}
