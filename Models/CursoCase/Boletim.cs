using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.CursoCase
{
    [Table("Boletim")]
    public class Boletim
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Aluno")]
        public int AlunoId { get; set; }

        public Aluno Aluno { get; set; }

        public DateTime? DataEntrega { get; set; }
    }
}
