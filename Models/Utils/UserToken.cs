using Models.Dto;
using System;

namespace Models.Utils
{
    public class UserToken
    {
        public string Token { get; set; }

        public DateTime Expiration { get; set; }

        public string Message { get; set; }

        public AlunoDto AlunoLogado { get; set; }
    }
}