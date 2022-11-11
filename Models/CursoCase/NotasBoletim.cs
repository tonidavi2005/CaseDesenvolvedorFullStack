using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.CursoCase
{
    [Table("NotasBoletim")]
    public class NotasBoletim
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Boletim")]
        public int BoletimId { get; set; }

        public Boletim Boletim { get; set; }

        [ForeignKey("Disciplina")]
        public int DisciplinaId { get; set; }

        public Disciplina Disciplina { get; set; }

        [Required]
        public decimal Nota { get; set; }
    }
}
