using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.CursoCase
{
    [Table("Disciplina")]
    public class Disciplina
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required]
        public int CargaHoraria { get; set; }
    }
}
