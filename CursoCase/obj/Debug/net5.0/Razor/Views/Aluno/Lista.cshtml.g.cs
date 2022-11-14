#pragma checksum "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b4b93ccedc66502540f541504c657b4b6e90c888"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Aluno_Lista), @"mvc.1.0.view", @"/Views/Aluno/Lista.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\_ViewImports.cshtml"
using CursoCase;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\_ViewImports.cshtml"
using CursoCase.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b4b93ccedc66502540f541504c657b4b6e90c888", @"/Views/Aluno/Lista.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e808205e6f6452338b740bb931e14e48d0255c99", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Aluno_Lista : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Models.Utils.PagedResult<Models.Dto.AlunoDto>>
    #nullable disable
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-primary mr-2"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Aluno", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Index", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
  
    ViewData["Title"] = "Alunos";

#line default
#line hidden
#nullable disable
            WriteLiteral("<div class=\"row mt-4\">\r\n    <div class=\"col-sm-10 col-md-10 col-lg-10\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n");
#nullable restore
#line 9 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                 if (Model.Results.Count > 0)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                    <table class=""table table-striped"">
                        <thead>
                            <tr>
                                <th scope=""col"">Código</th>
                                <th scope=""col"">Nome</th>
                                <th scope=""col"">E-Mail</th>
                                <th scope=""col"">Data Nascimento</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
");
#nullable restore
#line 22 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                             foreach (var aluno in Model.Results)
                            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                <tr>\r\n                                    <th scope=\"row\">");
#nullable restore
#line 25 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                               Write(Html.DisplayFor(a => aluno.Id));

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n                                    <td>");
#nullable restore
#line 26 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                   Write(Html.DisplayFor(a => aluno.Nome));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                    <td>");
#nullable restore
#line 27 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                   Write(Html.DisplayFor(a => aluno.Email));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                    <td>");
#nullable restore
#line 28 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                   Write(Html.DisplayFor(a => aluno.DataNascimento));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                    <td>\r\n                                        ");
#nullable restore
#line 30 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                   Write(Html.ActionLink("Alterar", "Alterar", new { id = aluno.Id }, new { @class="card-link" }));

#line default
#line hidden
#nullable disable
            WriteLiteral(" |\r\n                                        ");
#nullable restore
#line 31 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                                   Write(Html.ActionLink("Excluir", "Excluir", new { id = aluno.Id }, new { @class="card-link" }));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                                    </td>\r\n                                </tr>\r\n");
#nullable restore
#line 34 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                            }

#line default
#line hidden
#nullable disable
            WriteLiteral("                        </tbody>\r\n                    </table>\r\n");
#nullable restore
#line 37 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Aluno\Lista.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("            </div>\r\n            <div class=\"card-footer\">\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b4b93ccedc66502540f541504c657b4b6e90c8888581", async() => {
                WriteLiteral("\r\n                    Voltar\r\n                ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Controller = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Models.Utils.PagedResult<Models.Dto.AlunoDto>> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
