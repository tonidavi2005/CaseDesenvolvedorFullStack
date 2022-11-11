using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Dto
{
    public class AlunoDto
    {
        public int? Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? DataNascimento { get; set; }
    }
}
