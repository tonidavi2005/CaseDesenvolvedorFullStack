using AutoMapper;
using Models.CursoCase;
using Models.Dto;

namespace CursoCaseApi.AutoMapper.CursoCase
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<AlunoDto, Aluno>()
                .ForMember(a => a.Id, a => a.MapFrom(a => a.Id.HasValue ? a.Id : 0))
                .ForMember(a => a.Nome, a => a.MapFrom(a => a.Nome))
                .ForMember(a => a.Email, a => a.MapFrom(a => a.Email))
                .ForMember(a => a.Senha, a => a.MapFrom(a => a.Senha))
                .ForMember(a => a.DataNascimento, a => a.MapFrom(a => a.DataNascimento.HasValue ? a.DataNascimento : System.DateTime.MinValue))
                .ReverseMap();

            CreateMap<AlunoFiltroDto, AlunoDto>()
                .ForMember(a => a.Nome, a => a.MapFrom(a => a.Nome))
                .ForMember(a => a.Email, a => a.MapFrom(a => a.Email))
                .ForMember(a => a.DataNascimento, a => a.MapFrom(a => a.DataNascimento))
                .ReverseMap();

            CreateMap<DisciplinaDto, Disciplina>()
                .ForMember(a => a.Id, a => a.MapFrom(a => a.Id.HasValue ? a.Id : 0))
                .ForMember(a => a.Nome, a => a.MapFrom(a => a.Nome))
                .ForMember(a => a.CargaHoraria, a => a.MapFrom(a => a.CargaHoraria.HasValue ? a.CargaHoraria : 0))
                .ReverseMap();

            CreateMap<DisciplinaFiltroDto, DisciplinaDto>()
                .ForMember(a => a.Nome, a => a.MapFrom(a => a.Nome))
                .ForMember(a => a.CargaHoraria, a => a.MapFrom(a => a.CargaHoraria))
                .ReverseMap();

            CreateMap<BoletimDto, Boletim>()
                .ForMember(a => a.Id, a => a.MapFrom(a => a.Id.HasValue ? a.Id : 0))
                .ForMember(a => a.AlunoId, a => a.MapFrom(a => a.AlunoId.HasValue ? a.AlunoId : 0))
                .ForMember(a => a.DataEntrega, a => a.MapFrom(a => a.DataEntrega))
                .ForMember(a => a.Aluno, a => a.MapFrom(a => a.Aluno))
                .ReverseMap();

            CreateMap<BoletimFiltroDto, BoletimDto>()
                .ForMember(a => a.AlunoId, a => a.MapFrom(a => a.AlunoId))
                .ForMember(a => a.DataEntrega, a => a.MapFrom(a => a.DataEntrega))
                .ReverseMap();

            CreateMap<NotasBoletimDto, NotasBoletim>()
                .ForMember(a => a.Id, a => a.MapFrom(a => a.Id.HasValue ? a.Id : 0))
                .ForMember(a => a.BoletimId, a => a.MapFrom(a => a.BoletimId.HasValue ? a.BoletimId : 0))
                .ForMember(a => a.DisciplinaId, a => a.MapFrom(a => a.DisciplinaId.HasValue ? a.DisciplinaId : 0))
                .ForMember(a => a.Nota, a => a.MapFrom(a => a.Nota.HasValue ? a.Nota : 0))
                .ForMember(a => a.Boletim, a => a.MapFrom(a => a.Boletim))
                .ForMember(a => a.Disciplina, a => a.MapFrom(a => a.Disciplina))
                .ReverseMap();

            CreateMap<NotasBoletimFiltroDto, NotasBoletimDto>()
                .ForMember(a => a.BoletimId, a => a.MapFrom(a => a.BoletimId))
                .ForMember(a => a.DisciplinaId, a => a.MapFrom(a => a.DisciplinaId))
                .ForMember(a => a.Nota, a => a.MapFrom(a => a.Nota))
                .ReverseMap();
        }
    }
}
