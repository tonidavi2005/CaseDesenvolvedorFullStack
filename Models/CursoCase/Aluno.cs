using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models.CursoCase
{
    [Table("Aluno")]
    public class Aluno
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required]
        [StringLength(60)]
        public string Email { get; set; }

        [Required]
        public string Senha { get; set; }

        [Required]
        public DateTime DataNascimento { get; set; }
    }
}
