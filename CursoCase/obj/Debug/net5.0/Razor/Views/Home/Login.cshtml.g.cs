#pragma checksum "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "99f9e2d41a97640f3c42b3f94fdf5cff3e52c31b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Login), @"mvc.1.0.view", @"/Views/Home/Login.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"99f9e2d41a97640f3c42b3f94fdf5cff3e52c31b", @"/Views/Home/Login.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e808205e6f6452338b740bb931e14e48d0255c99", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Home_Login : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Models.Dto.AlunoDto>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
  
    ViewData["Title"] = "Login";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<div class=""table-frame"" id=""main-featured-trending"">
    <div class=""table-frame-row"">
        <div class=""table-frame-col-100 featured"" id=""home-featured"">
            <div class=""table-frame"" id=""row3"">
                <div class=""table-frame-row"">
                    <div class=""table-frame-col-50 standardpromo "" id=""home-target-3-1"">
                        <div class=""eventpromo section"">
                            <div class=""events-promo expired-promo""></div>
                            <div class=""cmp-ev-promo-event cmp-ev-promo--standard"">
                                <div class=""cmp-ev-promo__header"">
                                    <div class=""cmp-ev-promo__date"">
                                        <strong class=""cmp-ev-promo__date-day"">");
#nullable restore
#line 16 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                                                          Write(DateTime.Now.Day);

#line default
#line hidden
#nullable disable
            WriteLiteral("</strong>\r\n                                        <span class=\"cmp-ev-promo__date-month\">");
#nullable restore
#line 17 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                                                          Write(DateTime.Now.ToString("MMM"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@".</span>
                                    </div>
                                </div>
                                <div class=""cmp-ev-promo__content"">
                                    <span class=""cmp-ev-promo__type"">Entrar</span>
                                    <h3 class=""cmp-ev-promo-event__title"">Seja bem-vindo!</h3>
                                    <div class=""gigya-screen v2 landscape"" id=""gigya-register-screen"">
");
#nullable restore
#line 24 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                         using (Html.BeginForm("Login", "Home", FormMethod.Post, new { @class = "gigya-login-form myD-login-form", @id = "gigya-register-form" }))
                                        {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                                            <div class=""gigya-layout-row""></div>
                                            <div class=""gigya-layout-row with-divider"">
                                                <div class=""gigya-layout-cell responsive with-site-login myD-registration-form-fields"" id=""register-site-login"">
                                                    <div class=""gigya-layout-row"">
                                                        <div class=""gigya-layout-row"">
                                                            <label class=""gigya-label"" for=""logindivjoin""> E-mail*</label>");
            WriteLiteral("\r\n                                                            <div class=\"gigya-composite-control gigya-composite-control-textbox form-field\">\r\n                                                                ");
#nullable restore
#line 33 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                                           Write(Html.TextBoxFor(m => m.Email, new { @class = "gigya-input-text valid-email-text", @onblur="ssojoin(this);", @onfocus="labelActive(this);", @id = "logindivjoin" }));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class=""gigya-layout-row"">
                                                        <div class=""gigya-layout-row"">
                                                            <label class=""gigya-label"" for=""Senha"">Senha* </label>");
            WriteLiteral("\r\n                                                            <div class=\"gigya-composite-control gigya-composite-control-textbox form-field\">\r\n                                                                ");
#nullable restore
#line 41 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                                           Write(Html.TextBoxFor(m => m.Senha, new { @class = "gigya-input-password", @type = "password" }));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class=""gigya-clear"">
                                                    </div>
                                                    <div class=""gigya-composite-control gigya-composite-control-submit"">
                                                        <input type=""submit"" class=""gigya-input-submit at-element-click-tracking"" tabindex=""0"" value=""Entrar"">
                                                    </div>
                                                </div>
                                            </div>
");
#nullable restore
#line 52 "C:\Users\tonid\Documentos\Projetos\CaseDesenvolvedorFullStack\CursoCase\Views\Home\Login.cshtml"
                                        }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Models.Dto.AlunoDto> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
