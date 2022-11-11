using Models.CursoCase;
using System;

namespace Models.Dto
{
    public class BoletimDto
    {
        public int? Id { get; set; }

        public int? AlunoId { get; set; }

        public Aluno Aluno { get; set; }

        public DateTime? DataEntrega { get; set; }
    }
}
