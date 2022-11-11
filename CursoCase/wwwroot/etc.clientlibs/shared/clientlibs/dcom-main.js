/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-bgpositionxy-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-checked-cssanimations-csscolumns-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssreflections-cssscrollbar-csstransforms-csstransforms3d-csstransitions-ellipsis-flash-flexbox-flexboxlegacy-fontface-forcetouch-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-lastchild-localizednumber-localstorage-microdata-multiplebgs-nthchild-opacity-placeholder-postmessage-rgba-sessionstorage-smil-supports-svg-svgasimg-svgclippaths-svgfilters-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-mq-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(P&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),P?_.className.baseVal=t:_.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):P?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(P?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,d,c,u="modernizr",f=a("div"),p=s();if(parseInt(r,10))for(;r--;)d=a("div"),d.id=o?o[r]:u+(r+1),f.appendChild(d);return i=a("style"),i.type="text/css",i.id="s"+u,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=c,_.offsetHeight):f.parentNode.removeChild(f),!!l}function d(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)W(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,i){function s(){u&&(delete D.style,delete D.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=h(e,o);if(!r(l,"undefined"))return l}for(var u,f,p,m,v,g=["modernizr","tspan"];!D.style;)u=!0,D.modElem=a(g.shift()),D.style=D.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=D.style[m],d(m,"-")&&(m=c(m)),D.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{D.style[m]=o}catch(b){}if(D.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+E.join(a+" ")+a).split(" "),p(s,t,n))}function b(e,t,r){return g(e,n,n,t,r)}var y=[],T=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var w="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",w||k),Modernizr.addTest("microdata","getItems"in t),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("webworkers","Worker"in e);var C=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=C;var S="Moz O ms Webkit",E=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=E;var _=t.documentElement,P="svg"===_.nodeName.toLowerCase();P||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,d(t)}function i(e){var t=k[e[x]];return t||(t={},w++,e[x]=w,k[w]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():T.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||y.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function d(e){e||(e=t);var r=i(e);return!C.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(E+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+E+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[E]&&s.add(E),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,d=[],u=l.length,p=Array(u);u--;)p[u]=l[u];for(;s=p.pop();)if(!s.disabled&&S.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(u=0;a>u;u++)p.push(i[u]);try{d.push(s.cssText)}catch(m){}}d=f(d.reverse().join("")),o=c(e),r=n(e,d)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",b=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",w=0,k={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var C={elements:b.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:b.shivCSS!==!1,supportsUnknownElements:v,shivMethods:b.shivMethods!==!1,type:"default",shivDocument:d,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,d(t);var S=/^$|\b(?:all|print)\b/,E="html5shiv",_=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();C.type+=" print",C.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var N=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=N,Modernizr.addTest("hashchange",function(){return N("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=C.length-1;i>o;o++)e=0===o?"to ":"",r+=t+C[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=z;var M=x.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");M(r,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("checked",function(){return M("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var j=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();j?Modernizr.addTest("fontface",!1):M('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("hairline",function(){return M("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),M("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),M("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),M("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+C.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)});var A=a("input"),R="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),B={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)B[t[n]]=!!(t[n]in A);return B.list&&(B.list=!(!a("datalist")||!e.HTMLDataListElement)),B}(R);var L="search tel url email datetime date month week time datetime-local number range color".split(" "),O={};Modernizr.inputtypes=function(e){for(var r,o,i,a=e.length,s="1)",l=0;a>l;l++)A.setAttribute("type",r=e[l]),i="text"!==A.type&&"style"in A,i&&(A.value=s,A.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&A.style.WebkitAppearance!==n?(_.appendChild(A),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(A,null).WebkitAppearance&&0!==A.offsetHeight,_.removeChild(A)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?A.checkValidity&&A.checkValidity()===!1:A.value!=s)),O[e[l]]=!!i;return O}(L),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")}),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',M("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r}),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),r=s(),o=function(){return _.insertBefore(r,_.firstElementChild||_.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var i=n.childNodes[0];o.appendChild(n),i.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(l){}return e="number"===i.type&&1.1===i.valueAsNumber&&i.checkValidity(),o.removeChild(n),r.fake&&o.parentNode.removeChild(o),e});var $={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test($.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test($.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var F=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=F;var W;!function(){var e={}.hasOwnProperty;W=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=u}),Modernizr.addAsyncTest(function(){var n,r,o=function(e){_.contains(e)||_.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},l=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),u("flash",function(){return n}),t&&m.contains(t)){for(;t.parentNode!==m;)t=t.parentNode;m.removeChild(t)}};try{r="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(d){}if(n=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||r),n||P)l(!1);else{var c,f,p=a("embed"),m=s();if(p.type="application/x-shockwave-flash",m.appendChild(p),!("Pan"in p||r))return o(m),l("blocked",p),void i(m);c=function(){return o(m),_.contains(m)?(_.contains(p)?(f=p.style.cssText,""!==f?l("blocked",p):l(!0,p)):l("blocked"),void i(m)):(m=t.body||m,p=a("embed"),p.type="application/x-shockwave-flash",m.appendChild(p),setTimeout(c,1e3))},setTimeout(c,10)}}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var q=function(t){var r,o=C.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=C[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=q;var H={elem:a("modernizr")};Modernizr._q.push(function(){delete H.elem});var D={style:H.elem.style};Modernizr._q.unshift(function(){delete D.style});var I=x.testProp=function(e,t,r){return v([e],n,t,r)};Modernizr.addTest("textshadow",I("textShadow","1px 1px")),x.testAllProps=g,x.testAllProps=b,Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",b("textOverflow","ellipsis")),Modernizr.addTest("flexbox",b("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),Modernizr.addAsyncTest(function(){function n(){function o(){try{var e=a("div"),n=a("span"),r=e.style,o=0,i=0,s=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=n.offsetHeight,i=n.offsetWidth,r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+C.join("hyphens:auto; "),s=n.offsetHeight!=o||n.offsetWidth!=i,t.body.removeChild(e),e.removeChild(n),s}catch(d){return!1}}function i(e,n){try{var r=a("div"),o=a("span"),i=r.style,s=0,l=!1,d=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",r.appendChild(o),t.body.insertBefore(r,u),o.innerHTML="mm",s=o.offsetHeight,o.innerHTML="m"+e+"m",d=o.offsetHeight>s,n?(o.innerHTML="m<br />m",s=o.offsetWidth,o.innerHTML="m"+e+"m",c=o.offsetWidth>s):c=!0,d===!0&&c===!0&&(l=!0),t.body.removeChild(r),r.removeChild(o),l}catch(f){return!1}}function s(n){try{var r,o=a("input"),i=a("div"),s="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;i.innerHTML=s+n+s,t.body.insertBefore(i,d),t.body.insertBefore(o,i),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(r=o.createTextRange(),r.collapse(!0),r.moveEnd("character",0),r.moveStart("character",0),r.select());try{e.find?l=e.find(s+s):(r=e.self.document.body.createTextRange(),l=r.findText(s+s))}catch(c){l=!1}return t.body.removeChild(i),t.body.removeChild(o),l}catch(c){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),u("softhyphens",function(){try{return i("&#173;",!0)&&i("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,r)}var r=300;setTimeout(n,r)}),Modernizr.addTest("cssreflections",b("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in _.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",M(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0));var V=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=c(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return N(V("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1});var U;try{U=V("indexedDB",e)}catch(G){}Modernizr.addTest("indexeddb",!!U),U&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in U),o(),i(y),delete x.addTest,delete x.addAsyncTest;for(var X=0;X<Modernizr._q.length;X++)Modernizr._q[X]();e.Modernizr=Modernizr}(window,document);
//This is the basis of the Page load framework.  It would live in a JS file
var PageLoadEventFramework = function(){

	//All of the functions stored in this array need to be JQuery Deferred objects. 
	//Most async methods in JQuery already return deferred (such as "get" and "ajax")
	var pageLoadEvents = [];
	
	//This array will contain an arry of functions that need to get called AFTER all of the above page load functions have COMPELETED
	var postLoadEvents = [];
	
	//Standard JavaScript object syntax.  "This" becomes confusing in sub-methods so "self" always refers to the parent object.
	var self = this;


	//A finally method is callback to which consumers can subscribe to be notified when the entire framework is complete.
	self.Done = $.Callbacks();

	//This method will convert a Deferred that might be resolved or rejected into a Deferred that will ALWAYS be resolved
	self.wrapDeferred = function(originalDeferred){
		//Make sure we are really dealing with a Deferred object
		if(typeof originalDeferred !== "undefined" && typeof originalDeferred.always === "function"){
			var wrapDeferred = $.Deferred();
			
			//It does not matter if our original is done() or fail().  
			// always() resolve our wrapped Deferred.
			originalDeferred.always(
					function() { wrapDeferred.resolve(); }
			);
			return wrapDeferred.promise();
		}else{
			return originalDeferred;
		}
	};


	//This method accepts a function that needs to be called after page has loaded.
	self.registerOnLoadEvent = function( pageLoadFunction ){
		if( typeof pageLoadFunction === "function"){
			pageLoadEvents.push(pageLoadFunction);
		}
	};

	//This method accepts a function that needs to be called after all of the "Load Events" have completed.
	self.registerPostLoadEvent = function( postLoadFunction ){
		if( typeof postLoadFunction === "function"){
			postLoadEvents.push(postLoadFunction);
		}
	};

	//This method should be called after the page has loaded and will begin the Event Framework chain of events.
	self.executePageLoadEvents = function(){


       //This array is used internally during the "execute" method.  After "execute" has called all of the functions in the "pageLoadEvents" this array
		//will store the deferred objects promise.
		var pageLoadPromises = [];

		//This is the same as pageLoadPromises but for Post Load deferred events.
		var postLoadPromises = [];		
	
		//This deferred means that the Page Load is complete
		var pageLoadDeferred = $.Deferred();
		
		//This deferred means that the Post Load is complete
		var postLoadDeferred = $.Deferred();

		//This means that EVERYTHING is complete
		var doneDeferred = $.Deferred();
		
		//The first thing to happen is to call each of the functions in the "pageLoadEvents" array
		//If the function returns a promise it is stored in the "pageLoadPromises" array.
		for(var iPre = 0; iPre < pageLoadEvents.length; iPre++){
			//We need to make sure that our Deferreds are always successful.  So, wrap it in a new Deferred that will be guaranteed to succeed
			var loadEvent = self.wrapDeferred(pageLoadEvents[iPre]());
			pageLoadPromises.push(loadEvent);
		}		


        //This "when" statement will evaulate all of the promises from the line above.
		//The "always" function will not execute until all of the promises have resolved.
		$.when.apply($, pageLoadPromises).always(
			function(){
				
				// At this point the Page Load deferred as all done. Now execute the Post Load events and capture their deferred events
				for(var iPost = 0; iPost < postLoadEvents.length; iPost++){
					//We need to make sure that our Deferreds are always successful.  So, wrap it in a new Deferred that will be guaranteed to succeed
					var loadEvent = self.wrapDeferred(postLoadEvents[iPost]());
					pageLoadPromises.push(loadEvent);
				}
				
				// Flag the Page Load as resolved
				pageLoadDeferred.resolve();
			}
		);

		pageLoadDeferred.done(
			function(){
			
				// Now wait for all of the Post Load deferreds to complete
				$.when.apply($, postLoadPromises).always(
					function(){
						//The sequence below must be maintained.
						//   1) Resolve the "Post Load" resolved 
						//   2) Resolve the "Don" resolved
						//   3) Fire the "pageReady" Custom Event
						//   4) Resolve the "Done" resolved
						postLoadDeferred.resolve();

						// At this point the Post Load deferred as all done. Now execute fire the Done subscribable and raise the "pageReady" Custom Event.
						doneDeferred.resolve();	
						//Now fire the Done callback.  
						//ALWAYS MAKE SURE THIS IS THE VERY LAST LINE OF THE FUNCTION.
						self.Done.fire();
                        $(document.body).trigger( "pageReady" );

						// If the page contains DTM, trigger a DTM Event.
						if(typeof _satellite !== "undefined"){
							try{
							}catch(e){}
						}

					}
				);
				
			}
		);

		return doneDeferred;
	};

};


//Create an instance of our framework.  This would get instantiated in the Head section either manaully in the HTML page or in a JS file.
var pageLoadFramework = new PageLoadEventFramework();	

//If Site Catalyst is being used directly, fire the CustomEvent
if(siteCatConfig) {
    pageLoadFramework.Done.add(function(){
		$(document.body).trigger("customevent");
	});
}

var getDmdb = function(){	
	var deferred = $.Deferred();
	if((typeof dataLayer !== "undefined") && (typeof dataLayer.careers !== "undefined") && (typeof dataLayer.careers.directCall !== "undefined")){
		var directCallRule = dataLayer.careers.directCall;
		if(typeof _satellite !== "undefined"){
			_satellite.track(directCallRule);
		}
	}
	deferred.resolve();
	return deferred;	
};


pageLoadFramework.registerOnLoadEvent(getDmdb );
window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-bgpositionxy-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-checked-cssanimations-csscolumns-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssreflections-cssscrollbar-csstransforms-csstransforms3d-csstransitions-ellipsis-flash-flexbox-flexboxlegacy-fontface-forcetouch-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-lastchild-localizednumber-localstorage-microdata-multiplebgs-nthchild-opacity-placeholder-postmessage-rgba-sessionstorage-smil-supports-svg-svgasimg-svgclippaths-svgfilters-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-mq-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(P&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),P?_.className.baseVal=t:_.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):P?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(P?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,d,c,u="modernizr",f=a("div"),p=s();if(parseInt(r,10))for(;r--;)d=a("div"),d.id=o?o[r]:u+(r+1),f.appendChild(d);return i=a("style"),i.type="text/css",i.id="s"+u,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=c,_.offsetHeight):f.parentNode.removeChild(f),!!l}function d(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)W(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,i){function s(){u&&(delete D.style,delete D.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=h(e,o);if(!r(l,"undefined"))return l}for(var u,f,p,m,v,g=["modernizr","tspan"];!D.style;)u=!0,D.modElem=a(g.shift()),D.style=D.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=D.style[m],d(m,"-")&&(m=c(m)),D.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{D.style[m]=o}catch(b){}if(D.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+E.join(a+" ")+a).split(" "),p(s,t,n))}function b(e,t,r){return g(e,n,n,t,r)}var y=[],T=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var w="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",w||k),Modernizr.addTest("microdata","getItems"in t),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("webworkers","Worker"in e);var C=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=C;var S="Moz O ms Webkit",E=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=E;var _=t.documentElement,P="svg"===_.nodeName.toLowerCase();P||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,d(t)}function i(e){var t=k[e[x]];return t||(t={},w++,e[x]=w,k[w]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():T.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||y.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function d(e){e||(e=t);var r=i(e);return!C.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(E+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+E+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[E]&&s.add(E),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,d=[],u=l.length,p=Array(u);u--;)p[u]=l[u];for(;s=p.pop();)if(!s.disabled&&S.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(u=0;a>u;u++)p.push(i[u]);try{d.push(s.cssText)}catch(m){}}d=f(d.reverse().join("")),o=c(e),r=n(e,d)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",b=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",w=0,k={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var C={elements:b.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:b.shivCSS!==!1,supportsUnknownElements:v,shivMethods:b.shivMethods!==!1,type:"default",shivDocument:d,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,d(t);var S=/^$|\b(?:all|print)\b/,E="html5shiv",_=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();C.type+=" print",C.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var N=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=N,Modernizr.addTest("hashchange",function(){return N("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=C.length-1;i>o;o++)e=0===o?"to ":"",r+=t+C[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=z;var M=x.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");M(r,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("checked",function(){return M("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var j=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();j?Modernizr.addTest("fontface",!1):M('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("hairline",function(){return M("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),M("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),M("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),M("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+C.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)});var A=a("input"),R="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),B={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)B[t[n]]=!!(t[n]in A);return B.list&&(B.list=!(!a("datalist")||!e.HTMLDataListElement)),B}(R);var L="search tel url email datetime date month week time datetime-local number range color".split(" "),O={};Modernizr.inputtypes=function(e){for(var r,o,i,a=e.length,s="1)",l=0;a>l;l++)A.setAttribute("type",r=e[l]),i="text"!==A.type&&"style"in A,i&&(A.value=s,A.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&A.style.WebkitAppearance!==n?(_.appendChild(A),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(A,null).WebkitAppearance&&0!==A.offsetHeight,_.removeChild(A)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?A.checkValidity&&A.checkValidity()===!1:A.value!=s)),O[e[l]]=!!i;return O}(L),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")}),Modernizr.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',M("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r}),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=a("div"),r=s(),o=function(){return _.insertBefore(r,_.firstElementChild||_.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var i=n.childNodes[0];o.appendChild(n),i.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(l){}return e="number"===i.type&&1.1===i.valueAsNumber&&i.checkValidity(),o.removeChild(n),r.fake&&o.parentNode.removeChild(o),e});var $={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test($.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test($.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var F=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=F;var W;!function(){var e={}.hasOwnProperty;W=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=u}),Modernizr.addAsyncTest(function(){var n,r,o=function(e){_.contains(e)||_.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},l=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),u("flash",function(){return n}),t&&m.contains(t)){for(;t.parentNode!==m;)t=t.parentNode;m.removeChild(t)}};try{r="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(d){}if(n=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||r),n||P)l(!1);else{var c,f,p=a("embed"),m=s();if(p.type="application/x-shockwave-flash",m.appendChild(p),!("Pan"in p||r))return o(m),l("blocked",p),void i(m);c=function(){return o(m),_.contains(m)?(_.contains(p)?(f=p.style.cssText,""!==f?l("blocked",p):l(!0,p)):l("blocked"),void i(m)):(m=t.body||m,p=a("embed"),p.type="application/x-shockwave-flash",m.appendChild(p),setTimeout(c,1e3))},setTimeout(c,10)}}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var q=function(t){var r,o=C.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=C[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=q;var H={elem:a("modernizr")};Modernizr._q.push(function(){delete H.elem});var D={style:H.elem.style};Modernizr._q.unshift(function(){delete D.style});var I=x.testProp=function(e,t,r){return v([e],n,t,r)};Modernizr.addTest("textshadow",I("textShadow","1px 1px")),x.testAllProps=g,x.testAllProps=b,Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",b("textOverflow","ellipsis")),Modernizr.addTest("flexbox",b("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),Modernizr.addAsyncTest(function(){function n(){function o(){try{var e=a("div"),n=a("span"),r=e.style,o=0,i=0,s=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=n.offsetHeight,i=n.offsetWidth,r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+C.join("hyphens:auto; "),s=n.offsetHeight!=o||n.offsetWidth!=i,t.body.removeChild(e),e.removeChild(n),s}catch(d){return!1}}function i(e,n){try{var r=a("div"),o=a("span"),i=r.style,s=0,l=!1,d=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",r.appendChild(o),t.body.insertBefore(r,u),o.innerHTML="mm",s=o.offsetHeight,o.innerHTML="m"+e+"m",d=o.offsetHeight>s,n?(o.innerHTML="m<br />m",s=o.offsetWidth,o.innerHTML="m"+e+"m",c=o.offsetWidth>s):c=!0,d===!0&&c===!0&&(l=!0),t.body.removeChild(r),r.removeChild(o),l}catch(f){return!1}}function s(n){try{var r,o=a("input"),i=a("div"),s="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;i.innerHTML=s+n+s,t.body.insertBefore(i,d),t.body.insertBefore(o,i),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(r=o.createTextRange(),r.collapse(!0),r.moveEnd("character",0),r.moveStart("character",0),r.select());try{e.find?l=e.find(s+s):(r=e.self.document.body.createTextRange(),l=r.findText(s+s))}catch(c){l=!1}return t.body.removeChild(i),t.body.removeChild(o),l}catch(c){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),u("softhyphens",function(){try{return i("&#173;",!0)&&i("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,r)}var r=300;setTimeout(n,r)}),Modernizr.addTest("cssreflections",b("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in _.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",M(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0));var V=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=c(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return N(V("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1});var U;try{U=V("indexedDB",e)}catch(G){}Modernizr.addTest("indexeddb",!!U),U&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in U),o(),i(y),delete x.addTest,delete x.addAsyncTest;for(var X=0;X<Modernizr._q.length;X++)Modernizr._q[X]();e.Modernizr=Modernizr}(window,document);
//This is the basis of the Page load framework.  It would live in a JS file
var PageLoadEventFramework = function(){

	//All of the functions stored in this array need to be JQuery Deferred objects. 
	//Most async methods in JQuery already return deferred (such as "get" and "ajax")
	var pageLoadEvents = [];
	
	//This array will contain an arry of functions that need to get called AFTER all of the above page load functions have COMPELETED
	var postLoadEvents = [];
	
	//Standard JavaScript object syntax.  "This" becomes confusing in sub-methods so "self" always refers to the parent object.
	var self = this;


	//A finally method is callback to which consumers can subscribe to be notified when the entire framework is complete.
	self.Done = $.Callbacks();

	//This method will convert a Deferred that might be resolved or rejected into a Deferred that will ALWAYS be resolved
	self.wrapDeferred = function(originalDeferred){
		//Make sure we are really dealing with a Deferred object
		if(typeof originalDeferred !== "undefined" && typeof originalDeferred.always === "function"){
			var wrapDeferred = $.Deferred();
			
			//It does not matter if our original is done() or fail().  
			// always() resolve our wrapped Deferred.
			originalDeferred.always(
					function() { wrapDeferred.resolve(); }
			);
			return wrapDeferred.promise();
		}else{
			return originalDeferred;
		}
	};


	//This method accepts a function that needs to be called after page has loaded.
	self.registerOnLoadEvent = function( pageLoadFunction ){
		if( typeof pageLoadFunction === "function"){
			pageLoadEvents.push(pageLoadFunction);
		}
	};

	//This method accepts a function that needs to be called after all of the "Load Events" have completed.
	self.registerPostLoadEvent = function( postLoadFunction ){
		if( typeof postLoadFunction === "function"){
			postLoadEvents.push(postLoadFunction);
		}
	};

	//This method should be called after the page has loaded and will begin the Event Framework chain of events.
	self.executePageLoadEvents = function(){


       //This array is used internally during the "execute" method.  After "execute" has called all of the functions in the "pageLoadEvents" this array
		//will store the deferred objects promise.
		var pageLoadPromises = [];

		//This is the same as pageLoadPromises but for Post Load deferred events.
		var postLoadPromises = [];		
	
		//This deferred means that the Page Load is complete
		var pageLoadDeferred = $.Deferred();
		
		//This deferred means that the Post Load is complete
		var postLoadDeferred = $.Deferred();

		//This means that EVERYTHING is complete
		var doneDeferred = $.Deferred();
		
		//The first thing to happen is to call each of the functions in the "pageLoadEvents" array
		//If the function returns a promise it is stored in the "pageLoadPromises" array.
		for(var iPre = 0; iPre < pageLoadEvents.length; iPre++){
			//We need to make sure that our Deferreds are always successful.  So, wrap it in a new Deferred that will be guaranteed to succeed
			var loadEvent = self.wrapDeferred(pageLoadEvents[iPre]());
			pageLoadPromises.push(loadEvent);
		}		


        //This "when" statement will evaulate all of the promises from the line above.
		//The "always" function will not execute until all of the promises have resolved.
		$.when.apply($, pageLoadPromises).always(
			function(){
				
				// At this point the Page Load deferred as all done. Now execute the Post Load events and capture their deferred events
				for(var iPost = 0; iPost < postLoadEvents.length; iPost++){
					//We need to make sure that our Deferreds are always successful.  So, wrap it in a new Deferred that will be guaranteed to succeed
					var loadEvent = self.wrapDeferred(postLoadEvents[iPost]());
					pageLoadPromises.push(loadEvent);
				}
				
				// Flag the Page Load as resolved
				pageLoadDeferred.resolve();
			}
		);

		pageLoadDeferred.done(
			function(){
			
				// Now wait for all of the Post Load deferreds to complete
				$.when.apply($, postLoadPromises).always(
					function(){
						//The sequence below must be maintained.
						//   1) Resolve the "Post Load" resolved 
						//   2) Resolve the "Don" resolved
						//   3) Fire the "pageReady" Custom Event
						//   4) Resolve the "Done" resolved
						postLoadDeferred.resolve();

						// At this point the Post Load deferred as all done. Now execute fire the Done subscribable and raise the "pageReady" Custom Event.
						doneDeferred.resolve();	
						//Now fire the Done callback.  
						//ALWAYS MAKE SURE THIS IS THE VERY LAST LINE OF THE FUNCTION.
						self.Done.fire();
                        $(document.body).trigger( "pageReady" );

						// If the page contains DTM, trigger a DTM Event.
						if(typeof _satellite !== "undefined"){
							try{
							}catch(e){}
						}

					}
				);
				
			}
		);

		return doneDeferred;
	};

};


//Create an instance of our framework.  This would get instantiated in the Head section either manaully in the HTML page or in a JS file.
var pageLoadFramework = new PageLoadEventFramework();	

//If Site Catalyst is being used directly, fire the CustomEvent
if(siteCatConfig) {
    pageLoadFramework.Done.add(function(){
		$(document.body).trigger("customevent");
	});
}

var getDmdb = function(){	
	var deferred = $.Deferred();
	if((typeof dataLayer !== "undefined") && (typeof dataLayer.careers !== "undefined") && (typeof dataLayer.careers.directCall !== "undefined")){
		var directCallRule = dataLayer.careers.directCall;
		if(typeof _satellite !== "undefined"){
			_satellite.track(directCallRule);
		}
	}
	deferred.resolve();
	return deferred;	
};


pageLoadFramework.registerOnLoadEvent(getDmdb );
window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));
var desktopExtn = ".desktop";
var tabletExtn = ".tablet";
var mobileExtn = ".mobile";
var renditionsPath = "/_jcr_content/renditions/cq5dam.web.";
var dataLoaded; // variable to check if See More is loaded or not
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
function setImage(JqueryObj, aspectRatio, extn, useBackgroundImage) {
    //TODO: update useBackgroundImage name/purpose/classcall in future use when new class structure available 
    //we override 4:1 featured promo images to mobile size regardless of client view size, except in cases where we're replacing the div background image because this is only done in top level images
    var isImage = JqueryObj.hasClass("topic-image") || (JqueryObj.attr('id')!='article-hero-img' && !useBackgroundImage && aspectRatio=='4:1' && JqueryObj.parents().hasClass('featured-promo'));
    if(isImage){
        extn=mobileExtn;
    }
    if(aspectRatio ==='4:1' && JqueryObj.parents().hasClass('video-promo')){
        extn=mobileExtn;
    }
    var deviceAr=aspectRatio+extn;
    var src = JqueryObj.attr("data-orgsrc") || '';
    var width=1400;
    var height=350;
    var suffix='';


    switch (deviceAr) {
        case "1:1.desktop":
            suffix = renditionsPath + "231.231.desktop.jpeg";
            width=231;
            height=231;
            break;
        case "4:1.desktop":
            suffix = renditionsPath + "1400.350.desktop.jpeg";
            break;
        case "2:1.desktop":
            suffix = renditionsPath + "700.350.desktop.jpeg";
            width=700;
            break;
        case "1:1.mobile":
            suffix = renditionsPath + "250.250.mobile.jpeg";
            width=250;
            height=250;
            break;
        case "4:1.mobile":
             if(JqueryObj.attr("data-orgsrc1"))
             {
             src=JqueryObj.attr("data-orgsrc1");
             }
            suffix = renditionsPath + "768.192.mobile.jpeg";
            width=768;
            height=192;
            break;
        case "2:1.mobile":
            suffix = renditionsPath + "400.200.mobile.jpeg";
            width=400;
            height=200;
            break;
        case "1:1.tablet":
            suffix = renditionsPath + "350.350.tablet.jpeg";
            width=350;
            break;
        case "4:1.tablet":
            suffix = renditionsPath + "1024.256.tablet.jpeg";
            width=1024;
            height=256;
            break;
        case "2:1.tablet":
            suffix = renditionsPath + "500.250.tablet.jpeg";
            width=500;
            height=250;
            break;
        default:
            if(src!=''){
                if(!JqueryObj.attr("src")){
                    JqueryObj.attr("src", src);
                }
                
                if(!JqueryObj.attr("height")){
                    JqueryObj.attr("height", JqueryObj[0].clientHeight);
                }
                if(!JqueryObj.attr("width")){
                    JqueryObj.attr("width", JqueryObj[0].clientWidth);
                }
            }
            return;
            break;
    }

    setImageConfiguration(JqueryObj,src,width,height,suffix,useBackgroundImage);
}
var setAllImgsRendition= function(dataLoaded){
    var desktopView = matchMedia('(min-width: 1024px)').matches;
    var tabletView = matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;
    var mobileView = matchMedia('(max-width: 767px)').matches;
    var extn = desktopExtn;
    if(tabletView){
        extn = tabletExtn;
    }else if(mobileView){
        extn = mobileExtn;
    }
    //replaces background-image in css
    var images = $(".topic-introduction");
    if (images !== null) {
        for ( var i = 0; i < images.length; i++) {
            var JqueryObj = $(images[i]);
            setImage(JqueryObj, '4:1', extn, true);
        }
    }


    //loops through img tags with data-orgsrc fields
    var images = $("img[data-orgsrc]");
    if (images !== null) {
        for ( var i = 0; i < images.length; i++) {
            var JqueryObj = $(images[i]);
            var aspectRatio = JqueryObj.attr("data-aspectratio");
            if (JqueryObj.parents('.promo-focus').length) {
                if (JqueryObj.parents('.promo-focus').attr('href').indexOf('/insights/') || JqueryObj.parents('.promo-focus').attr('href').indexOf('/insights.html'))
                    var ifInsights = 1;
            }
            else
                ifInsights = -1;
            if (mobileView && JqueryObj.parents('div.descriptive-featured-promo').length){
                aspectRatio='4:1';
            }
            if(mobileView && aspectRatio === "1:1" && (JqueryObj.parents('div.featuredpromo').length || JqueryObj.parents('div.video-promo').length)) {
                src = JqueryObj.attr("data-orgsrc1");
                //aspectRatio='4:1';
                JqueryObj.attr("data-aspectratio",'4:1');
                JqueryObj.attr("src", src);
                JqueryObj.attr("width", "768");
                JqueryObj.attr("height", "192");
            }
            else if(JqueryObj.parents('div.below-fold').length && dataLoaded !== 1){
                // Do not call image rendition funtion to avoid loading images for below the fold area
            }
            else if( ifInsights > -1){
                var src = JqueryObj.attr("data-orgsrc");
                JqueryObj.attr("src", src);
            }
            else {
                setImage(JqueryObj, aspectRatio,extn);
            }
        }
    }

    //replaces background-image for Images in IE 
    $(".featured-promo .article-image img").each(function() {
        if (images != null && msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                var JqueryObj = $(this);
                var src = JqueryObj.attr("data-orgsrc");
                JqueryObj.parent().css("background-image", "url(" + src + ")");
                JqueryObj.removeAttr("alt");
                JqueryObj.attr("src","");
        }
    });


}

function setAllDesktopImages() {
    var images = $("img[data-orgsrc]");
    if (images != null) {
        for ( var i = 0; i < images.length; i++) {
            var JqueryObj = $(images[i]);
            var aspectRatio = JqueryObj.attr("data-aspectratio");
            setImage(JqueryObj, aspectRatio,desktopExtn);
        }
    }

}

function setImageConfiguration(JqueryObj,src,width,height,suffix,useBackgroundImage){
    if(useBackgroundImage){
        //we set this data-orgsrc field because this function gets called twice and processes the same field, so we need to check for original value
        if(src==''){
            src = JqueryObj.css('background-image') || '';
            src = src.replace('url(','').replace(')','').replace(/\"/gi, "");
            JqueryObj.attr("data-orgsrc", src);
        }
        if(src!=''){ //double check value provided by background image if set in above
            JqueryObj.css('background-image', 'url('+src+suffix+')');
        }
    }
    else if(src!=''){
        JqueryObj.attr("src", src + suffix);
        JqueryObj.attr("width", width);
        JqueryObj.attr("height", height);
    }
    else{ //data-orgsrc not sent, just override height/width
        if(!JqueryObj.attr("height")){
            JqueryObj.attr("height", JqueryObj[0].clientHeight);
        }
        if(!JqueryObj.attr("width")){
            JqueryObj.attr("width", JqueryObj[0].clientWidth);
        }
    }
}
/*****
All D.com specific reusable function should be defined here so that they can be reused with $DCOM Namespace

*******/
var $DCOM = function(){
    /*Load external Script files and  caching them. Example to load youtube Player API only when you tube components exist on the page*/
    this.scriptLoadAndCache = function( url, options ) {
      options = $.extend( options || {}, {
        dataType: "script",
        cache: true,
        url: url
      });
      return jQuery.ajax( options );
    }


};

var $dcom =  new $DCOM();
	$("document").ready(function(){
		var desktopClick= function(){
			$("#profile_pic_id span, #subnav_profile_pic_id span").click(function(){
				var nodeSelector = '#' + this.parentElement.id;
				if($(nodeSelector + " ul.nav-content").hasClass("open")){
					$(nodeSelector + " ul.nav-content").removeClass("open");
					$("#profile_pic_id, #subnav_profile_pic_id").attr("aria-expanded","false");
					
				}
				else{
					$("#profile_pic_id, #subnav_profile_pic_id").attr("aria-expanded","true");
					$(nodeSelector + " ul.nav-content").addClass("open");
					adjustDropDownLocation();
				}
			})
			/* Function on check the event target and collpase the menu  */
			$(window).click(function(e){
				if(!($( e.target ).is( "#profile_pic_id span" )|| $( e.target ).is( "#profile_pic_id span img" )) && !($( e.target ).is( "#subnav_profile_pic_id span" )|| $( e.target ).is( "#subnav_profile_pic_id span img" ))){
					if($("ul.nav-content").hasClass("open")){
						$("ul.nav-content").removeClass("open");
						$("#profile_pic_id").attr("aria-expanded","false");
					}
				}
			})
		}
		var mobileTabPortraitClick= function(){
			if(matchMedia('(max-width: 1023px) and (orientation: portrait)').matches || matchMedia('(max-width: 767px)')){
                return true;
            }
			$(".header-button.mobile-register-button.logged-in").click(function(){
				event.preventDefault();
				
				
				
				if($("ul#mobile-nav-content.nav-content").hasClass("open")){
					$("ul#mobile-nav-content.nav-content").removeClass("open");
					$(".mobile-register-button.logged-in").attr("aria-expanded","false");
					
				}
				else{
					$(".mobile-register-button.logged-in").attr("aria-expanded","true");
					$("ul#mobile-nav-content.nav-content").addClass("open");
					adjustDropDownLocation();
				}
			})
			/* Function on check the event target and collpase the menu  */
			$(window).click(function(e){
				if(!($( e.target ).is( ".mobile-register-button.logged-in" ) || $( e.target ).is( ".mobile-register-button.logged-in img" )|| $( e.target ).is( ".mobile-register-button.logged-in span" ))){
						if($("ul#mobile-nav-content.nav-content").hasClass("open")){
							$("ul#mobile-nav-content.nav-content").removeClass("open");
							$(".mobile-register-button.logged-in").attr("aria-expanded","false");
						}
				}
				
			})
		}
		if (Modernizr.mq('(min-width: 768px)')) {
			desktopClick();
		}
		else{
			mobileTabPortraitClick();
		}
		
		
		
		
		var adjustDropDownLocation = function() {
			//var cookieHeight = $(".cookie-container").outerHeight(true);
			var regTextPosition, regTextHeight, positionTop, registerDropText;
			if(matchMedia('(max-width: 1023px) and (orientation: portrait)').matches || matchMedia('(max-width: 767px)').matches ){
				regTextPosition= $(".mobile-register-button.logged-in").position().top; 
				regTextHeight= $(".mobile-register-button.logged-in").outerHeight(true);
				registerDropText = $(".mobile-register-button.logged-in").position();
				positionTop = regTextPosition + regTextHeight + 10; //10 for triangle
						$("ul#mobile-nav-content.nav-content").css("top",positionTop);
			//	$("ul#mobile-nav-content.nav-content.open").css('right', $(window).width() - registerDropText.left - $('.mobile-register-button.logged-in').outerWidth(true)+4);
			}
			else if (matchMedia('(min-width: 768px)').matches) {
				
				 regTextPosition= $("#profile_pic_id").position().top; 
				 regTextHeight= $("#profile_pic_id").outerHeight(true);
				 
				 registerDropText = $("#profile_pic_id").position();
				 positionTop = regTextPosition + regTextHeight + 10; //10 for triangle
			}

		}

		// For hiding search icon on mobile if gigya enabled
		if (matchMedia('(max-width: 767px)').matches && !$(".mobile-search-button.gigya-enabled").length) {
	            $(".topline-nav-container .mobile-search-button").css({"display":"block", "visibility":"visible"});
	    }

	    if (matchMedia('(min-width: 768px)').matches && matchMedia('(max-width: 1024px)').matches) {
	            $(".topline-nav-container .mobile-search-button").css({"display":"block", "visibility":"visible"});
	    }
	});

$(window).resize(function() {
    if ($("ul.nav-content").hasClass("open")) {
        adjustDropDownLocation();
    }
});
var pageurl = encodeURIComponent(window.location.href);
var isIE11 = navigator.userAgent.indexOf(".NET CLR") > -1;
var isIE11orLess = isIE11 || navigator.appVersion.indexOf("MSIE") !== -1;

var launchShare = function(provider){

        var shareURL = '';
        var seconds = new Date().getTime();
        var servletUrl = window.location.pathname.substring(0,window.location.pathname.lastIndexOf(".html"))+ ".deloitte-dcomsocial.";
        if(isIE11orLess && isTMP) {
            shareURL = location.protocol + siteDomain + servletUrl + provider + '.html?p='+ pageurl + '&isTMP=' + isTMP + '&tmpPagePath=' + dataLayer.page.attributes.pagename + '&id='+seconds;
        } else if(isIE11orLess && !isTMP){
            shareURL = location.protocol + siteDomain + servletUrl + provider + '.html?p='+ pageurl+ '&id='+seconds;
        } else if(isTMP) {
			shareURL = location.protocol + siteDomain + servletUrl + provider + '.html?isTMP=' + isTMP + '&tmpPagePath=' + dataLayer.page.attributes.pagename + '&id='+seconds;
        } else {
			shareURL = servletUrl + provider + '.html?id='+seconds;
        }

        switch(provider)
        {
            case 'pinterest': windowOptions="menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=280,width=600";     break;
            case 'twitter': windowOptions="menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=280,width=600";     break;
            default : windowOptions="menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=480,width=600";
        }

    	window.open(shareURL, "Share",windowOptions);
}


 $( ".social-share-links a" ).click(function( event ) {
  event.preventDefault(); /* Reset Default anchor behavior */
});
;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module._resolving && !module.exports) {
    var mod = {};
    mod.exports = {};
    mod.client = mod.component = true;
    module._resolving = true;
    module.call(this, mod.exports, require.relative(resolved), mod);
    delete module._resolving;
    module.exports = mod.exports;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("component-classes/index.js", function(exports, require, module){
/**
 * Module dependencies.
 */

var index = require('indexof');

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el) throw new Error('A DOM element reference is required');
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var str = this.el.className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};

});
require.register("segmentio-extend/index.js", function(exports, require, module){

module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};
});
require.register("component-indexof/index.js", function(exports, require, module){
module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
});
require.register("component-event/index.js", function(exports, require, module){
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
});
require.register("timoxley-to-array/index.js", function(exports, require, module){
/**
 * Convert an array-like object into an `Array`.
 * If `collection` is already an `Array`, then will return a clone of `collection`.
 *
 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
 * @return {Array} Naive conversion of `collection` to a new `Array`.
 * @api public
 */

module.exports = function toArray(collection) {
  if (typeof collection === 'undefined') return []
  if (collection === null) return [null]
  if (collection === window) return [window]
  if (typeof collection === 'string') return [collection]
  if (isArray(collection)) return collection
  if (typeof collection.length != 'number') return [collection]
  if (typeof collection === 'function' && collection instanceof Function) return [collection]

  var arr = []
  for (var i = 0; i < collection.length; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
      arr.push(collection[i])
    }
  }
  if (!arr.length) return []
  return arr
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

});
require.register("javve-events/index.js", function(exports, require, module){
var events = require('event'),
  toArray = require('to-array');

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    events.bind(el[i], type, fn, capture);
  }
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    events.unbind(el[i], type, fn, capture);
  }
};

});
require.register("javve-get-by-class/index.js", function(exports, require, module){
/**
 * Find all elements with class `className` inside `container`.
 * Use `single = true` to increase performance in older browsers
 * when only one element is needed.
 *
 * @param {String} className
 * @param {Element} container
 * @param {Boolean} single
 * @api public
 */

module.exports = (function() {
  if (document.getElementsByClassName) {
    return function(container, className, single) {
      if (single) {
        return container.getElementsByClassName(className)[0];
      } else {
        return container.getElementsByClassName(className);
      }
    };
  } else if (document.querySelector) {
    return function(container, className, single) {
      className = '.' + className;
      if (single) {
        return container.querySelector(className);
      } else {
        return container.querySelectorAll(className);
      }
    };
  } else {
    return function(container, className, single) {
      var classElements = [],
        tag = '*';
      if (container == null) {
        container = document;
      }
      var els = container.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
      for (var i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          if (single) {
            return els[i];
          } else {
            classElements[j] = els[i];
            j++;
          }
        }
      }
      return classElements;
    };
  }
})();

});
require.register("javve-get-attribute/index.js", function(exports, require, module){
/**
 * Return the value for `attr` at `element`.
 *
 * @param {Element} el
 * @param {String} attr
 * @api public
 */

module.exports = function(el, attr) {
  var result = (el.getAttribute && el.getAttribute(attr)) || null;
  if( !result ) {
    var attrs = el.attributes;
    var length = attrs.length;
    for(var i = 0; i < length; i++) {
      if (attr[i] !== undefined) {
        if(attr[i].nodeName === attr) {
          result = attr[i].nodeValue;
        }
      }
    }
  }
  return result;
}
});
require.register("javve-natural-sort/index.js", function(exports, require, module){
/*
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 */

module.exports = function(a, b, options) {
  var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
    sre = /(^[ ]*|[ ]*$)/g,
    dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
    hre = /^0x[0-9a-f]+$/i,
    ore = /^0/,
    options = options || {},
    i = function(s) { return options.insensitive && (''+s).toLowerCase() || ''+s },
    // convert all to strings strip whitespace
    x = i(a).replace(sre, '') || '',
    y = i(b).replace(sre, '') || '',
    // chunk/tokenize
    xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
    yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
    // numeric, hex or date detection
    xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
    yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
    oFxNcL, oFyNcL,
    mult = options.desc ? -1 : 1;
  // first try and sort Hex codes or Dates
  if (yD)
    if ( xD < yD ) return -1 * mult;
    else if ( xD > yD ) return 1 * mult;
  // natural sorting through split numeric strings and default strings
  for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
    // find floats not starting with '0', string or 0 if not defined (Clint Priest)
    oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
    oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
    // handle numeric vs string comparison - number < string - (Kyle Adams)
    if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
    // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
    else if (typeof oFxNcL !== typeof oFyNcL) {
      oFxNcL += '';
      oFyNcL += '';
    }
    if (oFxNcL < oFyNcL) return -1 * mult;
    if (oFxNcL > oFyNcL) return 1 * mult;
  }
  return 0;
};

/*
var defaultSort = getSortFunction();

module.exports = function(a, b, options) {
  if (arguments.length == 1) {
    options = a;
    return getSortFunction(options);
  } else {
    return defaultSort(a,b);
  }
}
*/
});
require.register("javve-to-string/index.js", function(exports, require, module){
module.exports = function(s) {
    s = (s === undefined) ? "" : s;
    s = (s === null) ? "" : s;
    s = s.toString();
    return s;
};

});
require.register("component-type/index.js", function(exports, require, module){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  return typeof val.valueOf();
};

});
require.register("list.js/index.js", function(exports, require, module){
/*
ListJS with beta 1.0.0
By Jonny Strömberg (www.jonnystromberg.com, www.listjs.com)
*/
(function( window, undefined ) {
"use strict";

var document = window.document,
    getByClass = require('get-by-class'),
    extend = require('extend'),
    indexOf = require('indexof');

var List = function(id, options, values) {

    var self = this,
		init,
        Item = require('./src/item')(self),
        addAsync = require('./src/add-async')(self),
        parse = require('./src/parse')(self);

    init = {
        start: function() {
            self.listClass      = "channel-site";// ul class
            self.searchClass    = "gsc-input"; // search box class
            self.sortClass      = "sort";
            self.page           = 200;
            self.i              = 1;
            self.items          = [];
            self.visibleItems   = [];
            self.matchingItems  = [];
            self.searched       = false;
            self.filtered       = false;
            self.handlers       = { 'updated': [] };
            self.plugins        = {};
            self.helpers        = {
                getByClass: getByClass,
                extend: extend,
                indexOf: indexOf
            };

            extend(self, options);

            self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;
            if (!self.listContainer) { return; }
            self.list           = getByClass(self.listContainer, self.listClass, true);

            self.templater      = require('./src/templater')(self);
            self.search         = require('./src/search')(self);
            self.filter         = require('./src/filter')(self);
            self.sort           = require('./src/sort')(self);

            this.items();
            self.update();
            this.plugins();
        },
        items: function() {
            parse(self.list);
            if (values !== undefined) {
                self.add(values);
            }
        },
        plugins: function() {
            for (var i = 0; i < self.plugins.length; i++) {
                var plugin = self.plugins[i];
                self[plugin.name] = plugin;
                plugin.init(self);
            }
        }
    };


    /*
    * Add object to list
    */
    this.add = function(values, callback) {
        if (callback) {
            addAsync(values, callback);
            return;
        }
        var added = [],
            notCreate = false;
        if (values[0] === undefined){
            values = [values];
        }
        for (var i = 0, il = values.length; i < il; i++) {
            var item = null;
            if (values[i] instanceof Item) {
                item = values[i];
                item.reload();
            } else {
                notCreate = (self.items.length > self.page) ? true : false;
                item = new Item(values[i], undefined, notCreate);
            }
            self.items.push(item);
            added.push(item);
        }
        self.update();
        return added;
    };

	this.show = function(i, page) {
		this.i = i;
		this.page = page;
		self.update();
        return self;
	};

    /* Removes object from list.
    * Loops through the list and removes objects where
    * property "valuename" === value
    */
    this.remove = function(valueName, value, options) {
        var found = 0;
        for (var i = 0, il = self.items.length; i < il; i++) {
            if (self.items[i].values()[valueName] == value) {
                self.templater.remove(self.items[i], options);
                self.items.splice(i,1);
                il--;
                i--;
                found++;
            }
        }
        self.update();
        return found;
    };

    /* Gets the objects in the list which
    * property "valueName" === value
    */
    this.get = function(valueName, value) {
        var matchedItems = [];
        for (var i = 0, il = self.items.length; i < il; i++) {
            var item = self.items[i];
            if (item.values()[valueName] == value) {
                matchedItems.push(item);
            }
        }
        return matchedItems;
    };

    /*
    * Get size of the list
    */
    this.size = function() {
        return self.items.length;
    };

    /*
    * Removes all items from the list
    */
    this.clear = function() {
        self.templater.clear();
        self.items = [];
        return self;
    };

    this.on = function(event, callback) {
        self.handlers[event].push(callback);
        return self;
    };

    this.off = function(event, callback) {
        var e = self.handlers[event];
        var index = indexOf(e, callback);
        if (index > -1) {
            e.splice(index, 1);
        }
        return self;
    };

    this.trigger = function(event) {
        var i = self.handlers[event].length;
        while(i--) {
            self.handlers[event][i](self);
        }
        return self;
    };

    this.reset = {
        filter: function() {
            var is = self.items,
                il = is.length;
            while (il--) {
                is[il].filtered = false;
            }
            return self;
        },
        search: function() {
            var is = self.items,
                il = is.length;
            while (il--) {
                is[il].found = false;
            }
            return self;
        }
    };

    this.update = function() {
        var is = self.items,
			il = is.length;

        self.visibleItems = [];
        self.matchingItems = [];
        self.templater.clear();
        for (var i = 0; i < il; i++) {
            if (is[i].matching() && ((self.matchingItems.length+1) >= self.i && self.visibleItems.length < self.page)) {
                is[i].show();
                self.visibleItems.push(is[i]);
                self.matchingItems.push(is[i]);
			} else if (is[i].matching()) {
                self.matchingItems.push(is[i]);
                is[i].hide();
			} else {
                is[i].hide();
			}
        }
        self.trigger('updated');
        return self;
    };

    init.start();
};

module.exports = List;

})(window);

});
require.register("list.js/src/search.js", function(exports, require, module){
var events = require('events'),
    getByClass = require('get-by-class'),
    toString = require('to-string');

module.exports = function(list) {
    var item,
        text,
        columns,
        searchString,
        customSearch;

    var prepare = {
        resetList: function() {
            list.i = 1;
            list.templater.clear();
            customSearch = undefined;
        },
        setOptions: function(args) {
            if (args.length == 2 && args[1] instanceof Array) {
                columns = args[1];
            } else if (args.length == 2 && typeof(args[1]) == "function") {
                customSearch = args[1];
            } else if (args.length == 3) {
                columns = args[1];
                customSearch = args[2];
            }
        },
        setColumns: function() {
            columns = (columns === undefined) ? prepare.toArray(list.items[0].values()) : columns;
        },
        setSearchString: function(s) {
            s = toString(s).toLowerCase();
            s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"); // Escape regular expression characters
            searchString = s;
        },
        toArray: function(values) {
            var tmpColumn = [];
            for (var name in values) {
                tmpColumn.push(name);
            }
            return tmpColumn;
        }
    };
    var search = {
        list: function() {
            for (var k = 0, kl = list.items.length; k < kl; k++) {
                search.item(list.items[k]);
            }
        },
        item: function(item) {
            item.found = false;
            for (var j = 0, jl = columns.length; j < jl; j++) {
                if (search.values(item.values(), columns[j])) {
                    item.found = true;
                    return;
                }
            }
        },
        values: function(values, column) {
            if (values.hasOwnProperty(column)) {
                text = toString(values[column]).toLowerCase();
                if ((searchString !== "") && (text.search(searchString) > -1)) {
                    return true;
                }
            }
            return false;
        },
        reset: function() {
            list.reset.search();
            list.searched = false;
        }
    };

    var searchMethod = function(str) {
        list.trigger('searchStart');

        prepare.resetList();
        prepare.setSearchString(str);
        prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction
        prepare.setColumns();

        if (searchString === "" ) {
            search.reset();
        } else {
            list.searched = true;
            if (customSearch) {
                customSearch(searchString, columns);
            } else {
                search.list();
            }
        }

        list.update();
        list.trigger('searchComplete');
        return list.visibleItems;
    };

    list.handlers.searchStart = list.handlers.searchStart || [];
    list.handlers.searchComplete = list.handlers.searchComplete || [];

    events.bind(getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {
        var target = e.target || e.srcElement, // IE have srcElement
            alreadyCleared = (target.value === "" && !list.searched);
        if (!alreadyCleared) { // If oninput already have resetted the list, do nothing
            searchMethod(target.value);
        }
    });

    // Used to detect click on HTML5 clear button
    events.bind(getByClass(list.listContainer, list.searchClass), 'input', function(e) {
        var target = e.target || e.srcElement;
        if (target.value === "") {
            searchMethod('');
        }
    });

    list.helpers.toString = toString;
    return searchMethod;
};

});
require.register("list.js/src/sort.js", function(exports, require, module){
var naturalSort = require('natural-sort'),
    classes = require('classes'),
    events = require('events'),
    getByClass = require('get-by-class'),
    getAttribute = require('get-attribute');

module.exports = function(list) {
    list.sortFunction = list.sortFunction || function(itemA, itemB, options) {
        options.desc = options.order == "desc" ? true : false; // Natural sort uses this format
        return naturalSort(itemA.values()[options.valueName], itemB.values()[options.valueName], options);
    };

    var buttons = {
        els: undefined,
        clear: function() {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
                classes(buttons.els[i]).remove('asc');
                classes(buttons.els[i]).remove('desc');
            }
        },
        getOrder: function(btn) {
            var predefinedOrder = getAttribute(btn, 'data-order');
            if (predefinedOrder == "asc" || predefinedOrder == "desc") {
                return predefinedOrder;
            } else if (classes(btn).has('desc')) {
                return "asc";
            } else if (classes(btn).has('asc')) {
                return "desc";
            } else {
                return "asc";
            }
        },
        getInSensitive: function(btn, options) {
            var insensitive = getAttribute(btn, 'data-insensitive');
            if (insensitive === "true") {
                options.insensitive = true;
            } else {
                options.insensitive = false;
            }
        },
        setOrder: function(options) {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
                var btn = buttons.els[i];
                if (getAttribute(btn, 'data-sort') !== options.valueName) {
                    continue;
                }
                var predefinedOrder = getAttribute(btn, 'data-order');
                if (predefinedOrder == "asc" || predefinedOrder == "desc") {
                    if (predefinedOrder == options.order) {
                        classes(btn).add(options.order);
                    }
                } else {
                    classes(btn).add(options.order);
                }
            }
        }
    };
    var sort = function() {
        list.trigger('sortStart');
        options = {};

        var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;

        if (target) {
            options.valueName = getAttribute(target, 'data-sort');
            buttons.getInSensitive(target, options);
            options.order = buttons.getOrder(target);
        } else {
            options = arguments[1] || options;
            options.valueName = arguments[0];
            options.order = options.order || "asc";
            options.insensitive = (typeof options.insensitive == "undefined") ? true : options.insensitive;
        }
        buttons.clear();
        buttons.setOrder(options);

        options.sortFunction = options.sortFunction || list.sortFunction;
        list.items.sort(function(a, b) {
            return options.sortFunction(a, b, options);
        });
        list.update();
        list.trigger('sortComplete');
    };

    // Add handlers
    list.handlers.sortStart = list.handlers.sortStart || [];
    list.handlers.sortComplete = list.handlers.sortComplete || [];

    buttons.els = getByClass(list.listContainer, list.sortClass);
    events.bind(buttons.els, 'click', sort);
    list.on('searchStart', buttons.clear);
    list.on('filterStart', buttons.clear);

    // Helpers
    list.helpers.classes = classes;
    list.helpers.naturalSort = naturalSort;
    list.helpers.events = events;
    list.helpers.getAttribute = getAttribute;

    return sort;
};

});
require.register("list.js/src/item.js", function(exports, require, module){
module.exports = function(list) {
    return function(initValues, element, notCreate) {
        var item = this;

        this._values = {};

        this.found = false; // Show if list.searched == true and this.found == true
        this.filtered = false;// Show if list.filtered == true and this.filtered == true

        var init = function(initValues, element, notCreate) {
            if (element === undefined) {
                if (notCreate) {
                    item.values(initValues, notCreate);
                } else {
                    item.values(initValues);
                }
            } else {
                item.elm = element;
                var values = list.templater.get(item, initValues);
                item.values(values);
            }
        };
        this.values = function(newValues, notCreate) {
            if (newValues !== undefined) {
                for(var name in newValues) {
                    item._values[name] = newValues[name];
                }
                if (notCreate !== true) {
                    list.templater.set(item, item.values());
                }
            } else {
                return item._values;
            }
        };
        this.show = function() {
            list.templater.show(item);
        };
        this.hide = function() {
            list.templater.hide(item);
        };
        this.matching = function() {
            return (
                (list.filtered && list.searched && item.found && item.filtered) ||
                (list.filtered && !list.searched && item.filtered) ||
                (!list.filtered && list.searched && item.found) ||
                (!list.filtered && !list.searched)
            );
        };
        this.visible = function() {
            return (item.elm.parentNode == list.list) ? true : false;
        };
        init(initValues, element, notCreate);
    };
};

});
require.register("list.js/src/templater.js", function(exports, require, module){
var getByClass = require('get-by-class');

var Templater = function(list) {
    var itemSource = getItemSource(list.item),
        templater = this;

    function getItemSource(item) {
        if (item === undefined) {
            var nodes = list.list.childNodes,
                items = [];

            for (var i = 0, il = nodes.length; i < il; i++) {
                // Only textnodes have a data attribute
                if (nodes[i].data === undefined) {
                    return nodes[i];
                }
            }
            return null;
        } else if (item.indexOf("<") !== -1) { // Try create html element of list, do not work for tables!!
            var div = document.createElement('div');
            div.innerHTML = item;
            return div.firstChild;
        } else {
            return document.getElementById(list.item);
        }
    }

    /* Get values from element */
    this.get = function(item, valueNames) {
        templater.create(item);
        var values = {};
        for(var i = 0, il = valueNames.length; i < il; i++) {
            var elm = getByClass(item.elm, valueNames[i], true);
            values[valueNames[i]] = elm ? elm.innerHTML : "";
        }
        return values;
    };

    /* Sets values at element */
    this.set = function(item, values) {
        if (!templater.create(item)) {
            for(var v in values) {
                if (values.hasOwnProperty(v)) {
                    // TODO speed up if possible
                    var elm = getByClass(item.elm, v, true);
                    if (elm) {
                        /* src attribute for image tag & text for other tags */
                        if (elm.tagName === "IMG" && values[v] !== "") {
                            elm.src = values[v];
                        } else {
                            elm.innerHTML = values[v];
                        }
                    }
                }
            }
        }
    };

    this.create = function(item) {
        if (item.elm !== undefined) {
            return false;
        }
        /* If item source does not exists, use the first item in list as
        source for new items */
        var newItem = itemSource.cloneNode(true);
        newItem.removeAttribute('id');
        item.elm = newItem;
        templater.set(item, item.values());
        return true;
    };
    this.remove = function(item) {
        list.list.removeChild(item.elm);
    };
    this.show = function(item) {
        templater.create(item);
        list.list.appendChild(item.elm);
    };
    this.hide = function(item) {
        if (item.elm !== undefined && item.elm.parentNode === list.list) {
            list.list.removeChild(item.elm);
        }
    };
    this.clear = function() {
        /* .innerHTML = ''; fucks up IE */
        if (list.list.hasChildNodes()) {
            while (list.list.childNodes.length >= 1)
            {
                list.list.removeChild(list.list.firstChild);
            }
        }
    };
};

module.exports = function(list) {
    return new Templater(list);
};

});
require.register("list.js/src/filter.js", function(exports, require, module){
module.exports = function(list) {

    // Add handlers
    list.handlers.filterStart = list.handlers.filterStart || [];
    list.handlers.filterComplete = list.handlers.filterComplete || [];

    return function(filterFunction) {
        list.trigger('filterStart');
        list.i = 1; // Reset paging
        list.reset.filter();
        if (filterFunction === undefined) {
            list.filtered = false;
        } else {
            list.filtered = true;
            var is = list.items;
            for (var i = 0, il = is.length; i < il; i++) {
                var item = is[i];
                if (filterFunction(item)) {
                    item.filtered = true;
                } else {
                    item.filtered = false;
                }
            }
        }
        list.update();
        list.trigger('filterComplete');
        return list.visibleItems;
    };
};

});
require.register("list.js/src/add-async.js", function(exports, require, module){
module.exports = function(list) {
    return function(values, callback, items) {
        var valuesToAdd = values.splice(0, 100);
        items = items || [];
        items = items.concat(list.add(valuesToAdd));
        if (values.length > 0) {
            setTimeout(function() {
                addAsync(values, callback, items);
            }, 10);
        } else {
            list.update();
            callback(items);
        }
    };
};
});
require.register("list.js/src/parse.js", function(exports, require, module){
module.exports = function(list) {

    var Item = require('./item')(list);

    var getChildren = function(parent) {
        var nodes = parent.childNodes,
            items = [];
        for (var i = 0, il = nodes.length; i < il; i++) {
            // Only textnodes have a data attribute
            if (nodes[i].data === undefined) {
                items.push(nodes[i]);
            }
        }
        return items;
    };

    var parse = function(itemElements, valueNames) {
        for (var i = 0, il = itemElements.length; i < il; i++) {
            list.items.push(new Item(valueNames, itemElements[i]));
        }
    };
    var parseAsync = function(itemElements, valueNames) {
        var itemsToIndex = itemElements.splice(0, 100); // TODO: If < 100 items, what happens in IE etc?
        parse(itemsToIndex, valueNames);
        if (itemElements.length > 0) {
            setTimeout(function() {
                init.items.indexAsync(itemElements, valueNames);
            }, 10);
        } else {
            list.update();
            // TODO: Add indexed callback
        }
    };

    return function() {
        var itemsToIndex = getChildren(list.list),
            valueNames = list.valueNames;

        if (list.indexAsync) {
            parseAsync(itemsToIndex, valueNames);
        } else {
            parse(itemsToIndex, valueNames);
        }
    };
};

});




















require.alias("component-classes/index.js", "list.js/deps/classes/index.js");
require.alias("component-classes/index.js", "classes/index.js");
require.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js");

require.alias("segmentio-extend/index.js", "list.js/deps/extend/index.js");
require.alias("segmentio-extend/index.js", "extend/index.js");

require.alias("component-indexof/index.js", "list.js/deps/indexof/index.js");
require.alias("component-indexof/index.js", "indexof/index.js");

require.alias("javve-events/index.js", "list.js/deps/events/index.js");
require.alias("javve-events/index.js", "events/index.js");
require.alias("component-event/index.js", "javve-events/deps/event/index.js");

require.alias("timoxley-to-array/index.js", "javve-events/deps/to-array/index.js");

require.alias("javve-get-by-class/index.js", "list.js/deps/get-by-class/index.js");
require.alias("javve-get-by-class/index.js", "get-by-class/index.js");

require.alias("javve-get-attribute/index.js", "list.js/deps/get-attribute/index.js");
require.alias("javve-get-attribute/index.js", "get-attribute/index.js");

require.alias("javve-natural-sort/index.js", "list.js/deps/natural-sort/index.js");
require.alias("javve-natural-sort/index.js", "natural-sort/index.js");

require.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
require.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
require.alias("javve-to-string/index.js", "to-string/index.js");
require.alias("javve-to-string/index.js", "javve-to-string/index.js");
require.alias("component-type/index.js", "list.js/deps/type/index.js");
require.alias("component-type/index.js", "type/index.js");
if (typeof exports == "object") {
  module.exports = require("list.js");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("list.js"); });
} else {
  this["List"] = require("list.js");
}})();
/*US 231730 Global siteselector optimization*/
var countryJsonData = {};
var locale = sc_language + "_" + sc_country.toUpperCase();
$(document).ready(function() {
  if (typeof wcmMode === "undefined") {
     wcmMode = "DISABLED";
  }
  /* Attempt to fetch JSON from local cache */
  if (
    Modernizr.localstorage &&
    localStorage.getItem(locale) !== null &&
    localStorage.getItem(locale) !== "undefined"
  ) {
    var currentTimestamp = Math.round(new Date().getTime()) / 10000;
    var storedTimestamp = 0;

    var localJSON = {};

    var tempLocalJSON = JSON.parse(localStorage.getItem(locale));
    //validate the local JSON
    if (checkTempJson(tempLocalJSON)) {
      localJSON = tempLocalJSON;
      storedTimestamp = localJSON.createdAt / 10000;
    }

    if (currentTimestamp - storedTimestamp <= 86400) {
      countryJsonData = localJSON;
    }
  }

  //If do not have a valid JSON (from cache) make a JSON request
  if (
    "undefined" === typeof countryJsonData.countries ||
    countryJsonData.countries.length <= 0
  ) {
    callJson();
  } else {
    renderControl();
  }
});

function checkTempJson(tempLocalJSON){
  if (typeof tempLocalJSON.createdAt !== "undefined" &&
    tempLocalJSON.createdAt > 0 &&
    typeof tempLocalJSON.countries !== "undefined" &&
    tempLocalJSON.countries.length > 0) {
    return true;
  } else return false;
}

 /* Function to process the json and call renderControl Function */
 function processJson (data) {
  if ("undefined" !== typeof data.countries && data.countries.length > 0) {
    var nowTime = new Date();
    countryJsonData = data;
    countryJsonData.aemMode = wcmMode;
    countryJsonData.createdAt = nowTime.getTime();
    if (Modernizr.localstorage) {
      localStorage.setItem(locale, JSON.stringify(countryJsonData));
    }
    renderControl();
  } else {
    console.debug("Invalid JSON for SS");
  }
 };

   /*Function to make json call and get response*/
  function callJson() {
    var cacheBustDate = new Date();
    var jsUrl =
      siteDomain +
      "/content/dam/Deloitte/resources/sitesel/" +
      locale +
      ".js?x=" +
      cacheBustDate.getTime();
    $.ajax({
      url: jsUrl,
      dataType: "json",
      success: function(responseJson) {
        processJson(responseJson);
      }
    });
   };
  
     /* Function to render the json*/
 function renderControl() {
    $.each(countryJsonData.countries, function(i, j) {
      var countryLocale =
        j.locale.split("/")[0] + "_" + j.locale.split("/")[1].substring(0, 2);
      var siteUl = $(
        "#site-selector ul.channel-site,#site-selector-global ul.channel-site"
      );
      if (j.redirectLink != undefined) {
          link =  countryJsonData.aemMode === "EDIT" ? "/" + j.locale: j.redirectLink ;
      } else {
        link = "/" + j.locale;
      }
      var link;
      if (
        link
          .trim()
          .substring(0, 4)
          .localeCompare("http") !== 0
      ) {
        link = siteDomain + link;
      }
      if (
        !(j.activateStatus === "false" && countryJsonData.aemMode === "DISABLED")
      ) {
        $(siteUl).append(
          "<li ><a href=" +
            link +
            " class='site_" +
            countryLocale +
            "'> " +
            "<span class='site-locale'>" +
            j.localeLanguageTranslation +
            "</span><span class='site-trans'>" +
            j.memberFirmLanguageTranslation +
            "</span><span class='site-abbr' style='display:none'  >" +
            j.abbr +
            "</span></a></li>"
        );
      }
      /* Event to check expiy date of cookie data*/
      $(".site_" + countryLocale).click(function() {
        var c_name = "CountryLocale";
        var exDays = 90;
        var date = new Date();
        date.setTime(date.getTime() + exDays * 24 * 60 * 60 * 1000);
        var c_value = countryLocale;
        if (
          (document.cookie =
            c_name +
            "=" +
            c_value +
            "; expires=" +
            date.toGMTString() +
            "; path=/" +
            "; domain=" + ".deloitte.com" +
            "; secure")
        ) {
          checkCookie(c_name, c_value, date);
          return true;
        } else {
          return false;
        }
      });
    });

    if (
      countryJsonData.aemMode === "DISABLED" ||
      window.location.href.indexOf("careers-deloitte-com") !== -1
    ) {
      $.each(countryJsonData.count, function(m, n) {
        $(
          "div.site-selector__container__site-info,div.site-info-global"
        ).append("<span >" + n.sitesPublish + "</span>");
      });
    } else {
      $.each(countryJsonData.count, function(m, n) {
        $(
          "div.site-selector__container__site-info,div.site-info-global"
        ).append("<span >" + n.sitesAuthor + "</span>");
      });
    }

                    $("body").css("overflow", "visible");
    /*Function to navigate the dropdown with keyboard*/
    $(".gsc-input").keydown(function(e) {
      if (e.keyCode === 40) {
        $("a[class^='site_']:first")
          .focus()
          .closest("li");
      }
    });
};
  
 /* Function to get data from cookie */
 function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
 }

   /* Function to check cookie data is not empty */
function checkCookie(c_name, c_value, date) {
    var countryLocaleCookie = getCookie("CountryLocale");
    if (countryLocaleCookie !== "" && countryLocaleCookie != null) {
      document.cookie =
        c_name +
        "=" +
        c_value +
        "; expires=" +
        date.toGMTString() +  
        "; path=/" +
        "; domain=" + ".deloitte.com" +
        "; secure";
    }
  }
$(window).load(function() {
  var site = new siteSelector();

  // ... pointing to new site selector ...
  $('[data-toggle="siteSelector"]').on("click", function(event) {
    site.open(event);
  });

  try {
    // init list
    var options = {
      valueNames: ["site-locale", "site-trans", "site-abbr"]
    };
    var siteList = new List("site-options", options);
    siteList.search();
  } catch (e) {
    console.log("listjs init falied",e);
  }
});



/* ===========================================================
 * siteSelector.js v1.0.0
 * ===========================================================
 */

(function($) {
  this.siteSelector = function() {
    if ($ === "undefined") {
      console.log("jQuery is required to use siteSelector");
    } else {
      console.log("siteSelector using:::", $.fn.jquery);
    }

    // CONSTANTS
    this.NAME = "siteSelector";
    this.VERSION = "1.0.0";

    var DATA_KEY = "siteSelector";
    var EVENT_KEY = "." + DATA_KEY;
    var ESCAPE_KEYCODE = 27;

    var Selector = {
      LOCATION_LINK: ".location-link",
      COUNTRY_SELECTOR_SPAN: ".desk-countrySelector",
      SITESELECTOR: ".site-selector__container",
      SITESELECTOR_ALIGN_LEFT: ".site-selector__container--align-left",
      BACKDROP: ".modal-backdrop",
      SITE_SEARCH: "#siteSearch",
      BODY: 'body'
    };

    var ClassName = {
      OPEN: "siteselector-open",
      HIDDEN: "visibility-hidden"
    };

    // ...add if any events...
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      BACKDROP_DISMISS: "backdrop.dismiss" + EVENT_KEY
    };

    var JQUERY_Event = {
      CLICK: "click",
      HOVER: "hover",
      FOCUS: "focus"
    };

    var Overflow = {
      VISIBLE: 'visible',
      HIDDEN: 'hidden'
    }

    // ...global elements...
    this.data = null;
    this._isVisible = false;

    var __proto__ = siteSelector.prototype;

    // toggle siteselector modal
    __proto__.toggle = function(targetElement) {
      return this._isVisible ? this.close : this.open(targetElement);
    };

    // open siteselector modal
    __proto__.open = function(event) {
      var _this = this;
      if (!this._isVisible) {
        $(Selector.SITESELECTOR)
          .removeClass(ClassName.HIDDEN)
          .show();

        $(Selector.SITESELECTOR)
          .parent()
          .show();

        this._isVisible = true;

        this.positionSelector(event);
      } else {
        this.close();
      }

      this.setEscapeEvent();
      this.toggleBackdrop();
      this.updateAriaLabels();

      // register event for backdrop click
      $(Selector.BACKDROP).on(JQUERY_Event.CLICK, function() {
        // custom event didn't work, using jquery events
        _this.close();
      });

      // trigger events
      $(Selector.SITESELECTOR).trigger(Event.SHOW);
    };

    // adjust box and position selector to viewport
    __proto__.positionSelector = function(event) {
      if (this._isVisible) {
        targetElement = $(event.target).closest(Selector.LOCATION_LINK);
        $(Selector.SITESELECTOR).one(Event.SHOW, function(e) {
          var targetElementOffset = $(targetElement).offset();
          var POSX = targetElementOffset.left - $(Selector.SITESELECTOR).outerWidth() + 40;
          var POSY = targetElementOffset.top - $(window).scrollTop() + 40;


          // check for viewport width
          // if(POSX < documentWidth/2){
          //   //pass
          //   console.log('aligned left');
          // }
          // else{
          //   $(Selector.SITESELECTOR).addClass(Selector.SITESELECTOR_ALIGN_LEFT);
          // }

          // set the css and position for desktop
          if (window.matchMedia('(max-width: 767px)').matches) {
            var siteselector_container_parent = $(Selector.SITESELECTOR).parent();
            var location_link_parent = $(targetElement).closest((Selector.LOCATION_LINK)).parent();
            siteselector_container_parent
              .detach()
              .appendTo(
                location_link_parent
              );
          } else {
            $(Selector.SITESELECTOR).css({
              left: POSX,
              top: POSY
            });
          }
          // setting focus to input box
          $(Selector.SITE_SEARCH).focus();
        });
      } else if (!this._isVisible) {
        $(Selector.SITESELECTOR).off(Event.SHOW);
      }
    };

    // toggle backdrop
    __proto__.toggleBackdrop = function() {
      this._isVisible ? this.addBackdrop() : this.removeBackdrop();
    };

    // add backdrop
    __proto__.addBackdrop = function() {
      $(Selector.BACKDROP).removeClass(ClassName.HIDDEN);
      $(Selector.BODY).css('overflow', Overflow.HIDDEN);
    };

    // remove backdrop
    __proto__.removeBackdrop = function() {
      $(Selector.BACKDROP).addClass(ClassName.HIDDEN);
      $(Selector.BODY).css('overflow', Overflow.VISIBLE);
    };

    // register escape Keydown event
    __proto__.setEscapeEvent = function() {
      var _that = this;
      if (this._isVisible) {
        $(document).on(Event.KEYDOWN_DISMISS, function(e) {
          if (e.which === ESCAPE_KEYCODE) {
            _that.close();
          }
        });
      } else if (!this._isVisible) {
        $(document).off(Event.KEYDOWN_DISMISS);
      }
    };

    // update aria labels
    __proto__.updateAriaLabels = function() {
      $(Selector.LOCATION_LINK).attr({
        "aria-expanded": this._isVisible
      });
    }

    // close siteselector
    __proto__.close = function() {
      if (this._isVisible) {
        $(Selector.SITESELECTOR)
          .addClass(ClassName.HIDDEN)
          .hide();

        $(Selector.SITESELECTOR)
          .parent()
          .hide();
        this._isVisible = false;
      }
      this.toggleBackdrop();
      this.updateAriaLabels();
      $(Selector.LOCATION_LINK).css("z-index", "");
      $(Selector.COUNTRY_SELECTOR_SPAN).css("z-index", "");
    };

    __proto__.dispose = function() {
      this.data = null;
      this._isVisible = null;
      __proto__ = null;
    };

    // ...setters...
    this.setData = function(_data) {
      this.data = _data;
    };

    // ...getters...
    this.getData = function(_data) {
      return this.data;
    };
  };
})(window.jQuery);
if(ccm_enabled != true){
var dcomCookies = function() {
	var that = this;
	this.cookieOnResize = function() {
		var dCookie = new dcomCookies();
		that.CookiePopup();

	};

	this.CookiePopup = function() {
		var that = this;
		var cookie = that.getCookie("overlayDismissed_" + dataLayer.page.attributes.urlCountry);
		if (cookie == null) {
			if(!cookieMsgAvailable){
				var servletUrl = window.location.pathname.substring(0,window.location.pathname.lastIndexOf(".html"))+".deloitte-cookie.";
			$.getJSON(siteDomain + servletUrl + sc_country + "." + sc_language + ".json",
					function(data) {
					}).done(function(data) {
					cookieMsgAvailable = true;
					cookieData = data;
					if (data.overlayEnabled) {
						that.setupCookieMessage(data.overlayMessage);
					}
				});
			}else{
				if (cookieData.overlayEnabled) {
					that.setupCookieMessage(cookieData.overlayMessage);
				}
			}
		}
	};

	this.setupCookieMessage = function(msg) {

		//create layout on dom
		var cookieContainer = document.createElement('div');
		$(cookieContainer).addClass('cookie-container').attr('role', 'alertdialog').attr('aria-label', cookieLabel);


		var form = document.createElement('form');
		$(form).attr('id', 'cookieoptinform').attr('name', 'cookieoptinform');

		var cookiepopup = document.createElement('div');
		$(cookiepopup).addClass('cookie-popup');

		var cookiemsg = document.createElement('div');
		$(cookiemsg).addClass('cookie-msg').html(msg);

		var acptBtn = document.createElement('div');
		$(acptBtn).addClass('accept-btn');

		var acptBtnString = '<a class="button btn-white cookie-accept button-small" id="cookieaccept" role="button" href="#" ><i class="icon-check-square-o" ></i>'
				+ buttonText + '</a>';

		$(acptBtn).append(acptBtnString);
		$(cookiepopup).append(cookiemsg);
		$(cookiepopup).append(acptBtn);
		$(form).append(cookiepopup);
		$(cookieContainer).append(form);
		$(cookieContainer).css({
			'top' : '-9999px',
			'display' : 'block'
		}); //setting block to calculate the widths
		$('body').prepend(cookieContainer);
		
		var pushHeight = $('.cookie-container').outerHeight(true);
		var cookiepop = $('.cookie-popup');
		var pushPutton = ((pushHeight > 60) ? (pushHeight / 2) - 30 : 0);
		$(cookieContainer).css({
			'top' : '',
			'display' : 'none'
		}); //setting back hidded to start the animation with easing

		if ($('.cookie-container')) {
			$('body').animate({
				marginTop : pushHeight
			}, 'slow');
			$('.cookie-container').slideDown('slow', function(){
				cookieBannerDeferred.resolve();

			});
			$('.accept-btn').css({
				'margin-top' : pushPutton
			});
			cookieRendered = true;
			cookieHeight = pushHeight;
			if($(".alert-show").length){
				$(".mydeloitte-alert").css("top",pushHeight);
			}
		}
	};
	
	this.getCookie = function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for ( var i = 0; i < ca.length; i++) {
			var c = $.trim(ca[i]);
			if (c.indexOf(name) == 0)
				return c.substring(name.length, c.length);
		}
		return null;
	};
	
	this.createCookie = function() {
		var c_name = "overlayDismissed_" + dataLayer.page.attributes.urlCountry;
		var exDays = 90;
		var date = new Date();
		date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + date.toGMTString();
		var c_value = "accept";
		var domainValue = (/([^:]*)(:[0-9]{0,5})?/)
				.exec(document.location.host)[1];
		var regEx = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
		if (!regEx.exec(domainValue)) {
			var domainArray = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/)
					.exec(domainValue);
			if (domainArray) {
				domainValue = domainArray[0];
			}
		}

		domain = domainValue ? domainValue : "";
		if (document.cookie = c_name + "=accept; domain="
				+domainValue+"; expires="
				+ date.toGMTString() + "; path=/") {
				return true;
			} else {
				return false;
			}
	};

};

var dCookie = new dcomCookies();
var cookieRendered = false;
var cookieMsgAvailable = false;
var cookieData, cookieHeight, domain;

var cookieBannerDeferred = $.Deferred();

$(document).ready(function() {
	if ((isEditMode == 'false')) {
		$(document).on("click", "#cookieaccept", function(e) {
			var isCookie = dCookie.createCookie();
			if (isCookie) {
				$('body').animate({
					marginTop : 0
				}, 'slow');
				$('.cookie-container').slideUp('slow');
				$('.cookie-container').remove();
				cookieRendered = false;
				if($('.content-page .left-content').length){
					cookieHeightRemoved();
				}
                if($(".alert-show").length){
                    $('.mydeloitte-alert').animate({
						top : 0
					}, 'slow');
				}
			}
		});
        setTimeout(function(){
			dCookie.CookiePopup();	
        }, 2000); 
	}
});
/*Start Defect 153443*/
$(window).load(function(){
	
		 if(navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)){
			 if ((isEditMode == 'false')) {
			$(document).on("touchstart" , "#cookieaccept", function(e) {
	    	var isCookie = dCookie.createCookie();
	    	if (isCookie) {
	                    $('body').animate({
	                        marginTop : 0
	                    }, 'slow');
	               $('.cookie-container').slideUp('slow');
	                    $('.cookie-container').remove();
	                    cookieRendered = false;
	                    if($('.content-page .left-content').length){
	                        cookieHeightRemoved();
	                    }
	                    if ($(".alert-show").length){
		                    $('.mydeloitte-alert').animate({
								top : 0
							}, 'slow');
						}
	    	}
	       });
		}
		dCookie.CookiePopup();
	}
});
/*End Defect 153443*/
if((isEditMode === false)&&(!(/MSIE (8\.[\.0-9]{0,})/i.test(navigator.userAgent)))) {
	var lap = false;
	$(window).resize(function() {
		if (lap !== false) {
			clearTimeout(lap);
		}
		if (!($('.ie').length)) {
			$('body').css({
				marginTop : 0
			});
			$('.cookie-container').remove();
			lap = setTimeout(dCookie.cookieOnResize, 300);
		}

	});
	
}

}
$(document).ready(function(){
    $('.social-icon').hover(
    function(){
        var color= $(this).attr('data-color');
        $(this).css('background-color',color);
    },
    function () {
           $(this).css({"background-color":"#9a9a9a"});
         });
  });
$(document).ready(function(){
	//Script for OOTB Search Field
	$("#searchform").append('<a href="#" class="submit-button" title="Search"><i class="icon-search"></i></a>');
	$("#searchform > input:last-of-type").attr("value"," ");
	//fallbacks();
	$("#searchform .icon-search").click(function(){$('header .search #searchform').submit();});
});
/*$(window).resize(function() {
  if (matchMedia('(max-width: 1200px)').matches) {
       // $('.search-input').attr('placeholder', 'Search for resources, people, jobs, etc.');
      //  fallbacks();
    } else if (matchMedia('(max-width: 767px)').matches) {
       // $('.search-input').attr('placeholder', 'Search');
      //  $('.header-button').removeClass('active'); Fix for DE582
      //  fallbacks();
    }
});*/
$(document).ready(function(){
	//Script for OOTB Search Field
	$("#searchform").append('<a href="#" class="submit-button" title="Search"><i class="icon-search"></i></a>');
	$("#searchform > input:last-of-type").attr("value"," ");
	//fallbacks();
	$("#searchform .icon-search").click(function(){$('header .search #searchform').submit();});
});
/*$(window).resize(function() {
  if (matchMedia('(max-width: 1200px)').matches) {
       // $('.search-input').attr('placeholder', 'Search for resources, people, jobs, etc.');
      //  fallbacks();
    } else if (matchMedia('(max-width: 767px)').matches) {
       // $('.search-input').attr('placeholder', 'Search');
      //  $('.header-button').removeClass('active'); Fix for DE582
      //  fallbacks();
    }
});*/
$(document).ready(function(){
    if( $(".simple-form-page").length) {
        $(".field-column .section").each(function(){
            if($(" *",this).hasClass("mobile-hidden")){
                $(this).addClass("mobile-hidden");
            }
            if($(" *",this).hasClass("form_error")){
                $(" .form_field_text,select,textarea",this).addClass("custom-form-error");
            }
        });

    	var servletUrl=window.location.pathname.substring(0,window.location.pathname.lastIndexOf(".html"))+"/jcr:content";
        var selector=".deloitte-formtoken";
        var extension=".json";
        
        // fetches the encoded randomID_timestamp and puts in a hidden field
        $.ajax({
            type : "GET",
            async : "false",
            url : servletUrl + selector + extension,
            success : function(response) {
                        //var json = $.parseJSON(response);
            			var json = response;
                        var tokenst = json.tokenstr;
                        var formReferenceId = json.formreferenceid;
                        var errMsg = json.errorMessage;
                        $('<input>').attr({type: 'hidden', id: ':submit-id', name: ':submit-id'}).appendTo('form[method="POST"]');
                        if (errMsg != null) {
                            $(".form").html(
                                "<p class='form_error_title'>" + errMsg
                                + "</p>")
                            }
                            $("#\\:submit-id").val(tokenst);
                            $("#FormReferenceId").val(formReferenceId);
                        },
                        error : function() {
                        },
                        complete : function() {
                        }
                    });
        if($(".form_error").length){
        var errorTop = $('.form_error:first').position().top;
        $('html, body').stop().animate({scrollTop: errorTop-150}, 500, 'swing');
        $('.form_error:first').parent().prevAll().find('.form_rightcol .form_field').focus();
        }
    }
	$('div.section.dropdown').each(function(){
		if($(this).find('div.form_rightcol select').attr('multiple')){
			$(this).find('.form_field').parent().addClass('clear-dropdown');
			
		}
	});
	
});

$(document).ready(function(){
    var privacynoticeheight = $(".privacynotice-container").outerHeight(true);
    $("body").css("margin-top",privacynoticeheight);
    }

);
//This is the script which will enable and disable the image fields in the dialog of the topic page banner.
 $(window).load(function() {
 $('form').submit(function(){
    $('input[type=submit]', this).attr('disabled', 'disabled');
	 var textToBeUpdated = $('.form_button_submit');
     textToBeUpdated.val(submitValueI18nVal);
});
});

(function ($) {
    'use strict';
    $(document).on('dialog-loaded', function (e) {
        setTimeout(() => {
            //set the position of special chars dialog box
            $('.rte-toolbar-item.disabled.rte--trigger._coral-ActionButton._coral-ActionButton--quiet').click(function () {
                var specialChars = $(".rte-toolbar-item.disabled.rte--trigger._coral-ActionButton._coral-ActionButton--quiet");
                if (specialChars.hasClass("is-selected")) {
                    $(".rte-dialog.rte-dialog--specialchars").addClass("left-110");
                    $(".coral-Form--vertical coral-dialog-content").on('scroll', function () {
                        $(".rte-dialog.rte-dialog--specialchars._coral-Overlay._coral-Popover._coral-Popover--bottom.is-open.is-selected").addClass("left-110");
                    });
                }
            });
            //set the position of paste-as-text and paste-from-word dialog box
            $('.rte-toolbar-item.disabled._coral-ActionButton._coral-ActionButton--quiet').click(function () {
                var rte = $(".rte-toolbar-item.disabled._coral-ActionButton._coral-ActionButton--quiet");
                if (rte.hasClass("is-selected")) {
                    $(".rte-dialog.rte-dialog--pasteplaintext").addClass("rte-custom-class");
                    $(".rte-dialog--pasteplaintext ._coral-Textfield._coral-Textfield--multiline").addClass("rte-text-area");

					$(".rte-dialog.rte-dialog--pastewordhtml").addClass("rte-custom-class");
                    $(".rte-dialog.rte-dialog--pastewordhtml .rte-dialog-columnContainer .rte-dialog-column iframe").addClass("rte-pasteword");

                    $(".coral-Form--vertical coral-dialog-content").on('scroll', function () {
                        $(".rte-dialog.rte-dialog--pasteplaintext._coral-Overlay._coral-Popover._coral-Popover--bottom.is-open").addClass("rte-custom-class");
                        $(".rte-dialog--pasteplaintext ._coral-Textfield._coral-Textfield--multiline").addClass("rte-text-area");

                        $(".rte-dialog.rte-dialog--pastewordhtml").addClass("rte-custom-class");
                        $(".rte-dialog.rte-dialog--pastewordhtml .rte-dialog-columnContainer .rte-dialog-column iframe").addClass("rte-pasteword");
                    });
                }
            });
        }, 1000);
    });
})(jQuery);
$(window).load(function () {
  setTimeout(function () {
    var loggedin = localStorage.getItem("userLoggedInIs");
    if ($("#cmp-modal__exclusive-overlay").length) {
      if (loggedin === null || loggedin !== "true") {
        $("body").css("overflow", "hidden");
        //  append icid parameter for analytics tracking of gated registration/login
        window.history.pushState({}, null, "?icid=gatedContent");
        $("#cmp-modal__exclusive-overlay").show();
      } else {
        $("#cmp-modal__exclusive-overlay").hide();
      }
    }

    $("#exclusive-signin").click(function () {
      $("#cmp-modal__exclusive-overlay").hide();
      $("button.close").hide();
      $("#Dcom-signin-modal").modal("show");
      showLogin();
    });
  }, 2500);
  $(".cmp-modal.cmp-modal--overlay .cmp-modal__content").css(
    "top",
    $(".cookie-container").outerHeight() +
      $(".optanon-alert-box-wrapper").outerHeight() +
      $("#header").outerHeight() +
      100
  );
});

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics</code> library contains all analytics component classes and utilities.
 * @static
 * @class CQ_Analytics
 */

if( !window.CQ_Analytics ) {
    window.CQ_Analytics = {};
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.Operator</code> object is a singleton providing the most common operator names and
 * utils around the operators.
 * @singleton
 * @deprecated since 6.2, use ContextHub instead
 * @class CQ_Analytics.Operator
 */
CQ_Analytics.Operator = (function() {
    return function () {
    };
})();

/**
 * Operator "is".
 * @static
 * @type String
 */
CQ_Analytics.Operator.IS = "is";

/**
 * Operator "equals".
 * @static
 * @type String
 */
CQ_Analytics.Operator.EQUALS = "equals";

/**
 * Operator "not equals".
 * @static
 * @type String
 */
CQ_Analytics.Operator.NOT_EQUAL = "notequal";

/**
 * Operator "greater than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.GREATER = "greater";

/**
 * Operator "equals or greater than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.GREATER_OR_EQUAL = "greaterorequal";

/**
 * Operator "older than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.OLDER = "older";

/**
 * Operator "equals or older than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.OLDER_OR_EQUAL = "olderorequal";

/**
 * Operator "less than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.LESS = "less";

/**
 * Operator "equals or less than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.LESS_OR_EQUAL = "lessorequal";

/**
 * Operator "younger than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.YOUNGER = "younger";

/**
 * Operator "equals or younger than".
 * @static
 * @type String
 */
CQ_Analytics.Operator.YOUNGER_OR_EQUAL = "youngerorequal";

/**
 * Operator "contains".
 * @static
 * @type String
 */
CQ_Analytics.Operator.CONTAINS = "contains";

/**
 * Operator "begins with".
 * @static
 * @type String
 */
CQ_Analytics.Operator.BEGINS_WITH = "beginswith";

/**
 * Operator "exists".
 * @static
 * @type String
 */
CQ_Analytics.Operator.EXISTS= "exists";

/**
 * Operator "does not exists".
 * @static
 * @type String
 */
CQ_Analytics.Operator.DOES_NOT_EXIST= "doesnotexist";

/**
 * In order to compare two IP addresses using native js comparisons, octets have to be padded with zeros if needed,
 * for example: "1.2.3.4" -> "001.002.003.004".
 *
 * @param {String} ip
 * @return {String} padded ip
 */
CQ_Analytics.Operator.formatIP = function(ip) {
    var chunks = String(ip).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)$/);
    var result = ip;

    if (chunks && chunks.length === 5) {
        chunks.shift();
        result = [];

        while (chunks.length) {
            result.push(('00' + chunks.shift()).slice(-3));
        }

        result = result.join('.');
    }

    return result;
};

/**
 * The <code>CQ_Analytics.OperatorActions</code> object is a singleton providing utilities to resolve operations
 * containing operators (type of <code>CQ_Analytics.Operators</code>).
 * @deprecated
 */
CQ_Analytics.OperatorActions = function() {
    var mapping = {};

    var addOperator = function(name, text, operation) {
        mapping[name] = [text, operation];
    };

    addOperator(CQ_Analytics.Operator.EQUALS, "equals", "==");
    addOperator(CQ_Analytics.Operator.IS, "is", "==");

    addOperator(CQ_Analytics.Operator.NOT_EQUAL, "is not equal to", "!=");

    addOperator(CQ_Analytics.Operator.GREATER, "is greater than", ">");
    addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL, "is equal to or greater than", ">=");

    addOperator(CQ_Analytics.Operator.OLDER, "is older than", ">");
    addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL, "is equal to or older than", ">=");

    addOperator(CQ_Analytics.Operator.LESS, "is less than", "<");
    addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL, "is equal to or less than", "<=");

    addOperator(CQ_Analytics.Operator.YOUNGER, "is younger than", "<");
    addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL, "is equal to or younger than", "<=");

    addOperator(CQ_Analytics.Operator.CONTAINS, "contains", function(s1, s2) {
        if (s1) {
            if (s2) {
                s1 = "" + s1;
                s2 = "" + s2;
                return s1.toLowerCase().indexOf(s2.toLowerCase()) != -1;
            }
            return true;
        }
        return false;
    });

    addOperator(CQ_Analytics.Operator.BEGINS_WITH, "begins with", function(s1, s2) {
        if (s1) {
            if (s2) {
                s1 = "" + s1;
                s2 = "" + s2;
                return s1.toLowerCase().indexOf(s2.toLowerCase()) == 0;
            }
            return true;
        }
        return false;
    });

    addOperator(CQ_Analytics.Operator.EXISTS, "exists", function(s1) {
        return !!s1;
    });

    addOperator(CQ_Analytics.Operator.DOES_NOT_EXIST, "does not exist", function(s1) {
        return !s1;
    });

    var getByIndex = function(op, index) {
        if (mapping[op] && mapping[op][index]) {
            return mapping[op][index];
        }
        return "";
    };

    var escapeQuote = function(str) {
        if (str) {
            str = str.replace(new RegExp("\\'", "ig"), str);
        }
        return str;
    };

    return {
        /**
         * Returns operator friendly name.
         * @param {CQ_Analytics.Operator} operator
         * @return {String} text if defined, empty string otherwise.
         */
        getText: function(operator) {
            return getByIndex(operator, 0);
        },

        /**
         * Set operator friendly name.
         * @param {CQ_Analytics.Operator} operator
         * @param {String} newText The next text
         */
        setText: function(operator, newText) {
            if (mapping[operator] && mapping[operator][0]) {
                mapping[operator][0] = newText;
            }
        },

        /**
         * Returns operator operation, which can be either:<ul>
         * <li>String: mathematical JS operator like ==, <, <=, > ... </li>
         * <li>Function: function requiring 2 parameters, the 2 values to operate and which returns true if operation
         * success, false otherwise.
         * Example: contains operator function.<code>
         function(s1, s2) {
        if (s1) {
            if (s2) {
                s1 = "" + s1;
                s2 = "" + s2;
                return s1.toLowerCase().indexOf(s2.toLowerCase()) != -1;
            }
            return true;
        }
        return false;
    }
         * </code></li>
         * </ul>
         * @param {CQ_Analytics.Operator} operator
         * @return {String/Function} Operator string or function if operator is defined, empty string otherwise.
         */
        getOperation: function(operator) {
            return getByIndex(operator, 1);
        },

        /**
         * Operates a property value and a value with an operator. Sample: <code>
           var obj = {};
           obj["age"] = 30;
           CQ_Analytics.OperatorActions.operate(obj, "age", CQ_Analytics.Operator.IS, "30", "parseInt"); //returns true
           CQ_Analytics.OperatorActions.operate(obj, "age", CQ_Analytics.Operator.GREATER_THAN, "40", "parseInt"); //returns false
         * </code>
         *
         * @param {Object} object Value container.
         * @param {String} property Name of the property to operate.
         * @param {CQ_Analytics.Operator} operator
         * @param {String} value The second value of the operation
         * @param {String} valueFormat (optional) An optional value formatter (parseInt, parseFloat, toString...)
         * @return {Boolean} true if operation success, false otherwise.
         */
        operate: function(object, property, operator, value, valueFormat) {
            var op = this.getOperation(operator);
            op = op ? op : operator;

            /* we need to set formatter if it's not provided, but value is a number and operator is one of: <, <=, >, >= */
            if ((!valueFormat || valueFormat === '') && (op in { '<': 1, '<=': 1, '>': 1, '>=': 1 }) && !isNaN(parseFloat(value - 0))) {
                valueFormat = 'parseFloat';
            }

            try {
                if (object) {
                    var toEval = "";
                    var objectValue = CQ.shared.XSS.getXSSTablePropertyValue(object, property);
                    if (typeof op == "function") {
                        return op.call(this, objectValue, value, valueFormat);
                    } else {
                        if (valueFormat) {
                            toEval = valueFormat + "('" + objectValue + "') " + op + " " + valueFormat + "('" + value + "')";
                        } else {
                            var s1 = escapeQuote(objectValue);
                            var s2 = escapeQuote(value);
                            toEval = "'" + s1 + "' " + op + " '" + s2 + "'";
                        }
                        var b = eval(toEval);
                        return b;
                    }

                }
            } catch(e) {
                //console.log("Error in Operator resolution", e, toEval);
            }
            return false;
        }
    };
}();
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * A helper class providing a set of utility methods.
 * <br>
 * @class CQ_Analytics.Utils
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.Utils = new function() {
    return {
        /**
         * Attaches an event handler while properly considering (aka chaining) an existing one
         * @static
         * @param {Object} event Event
         * @param {Function} func Function
         */
        registerDocumentEventHandler: function(event, func) {
            var oldHandler = window.document[event];
            if (typeof window.document[event] != 'function') {
                window.document[event] = func;
            } else {
                // chain old with new func
                window.document[event] = function(e) {
                    if (oldHandler) {
                        oldHandler(e);
                    }
                    func(e);
                };
            }
        },

        /**
         * Creates a event wraping function of a parameter function. Available parameters are:<ul>
         *        <li><b>event</b> : Object<div class="sub-desc">Event</div></li>
         *        <li><b>keyCode</b> : Number<div class="sub-desc">Key code</div></li>
         *        </ul>
         * @static
         * @param {Function} func The function to wrap
         * @return {Function} Wrapping function
         */
        eventWrapper: function(func) {
            return function(e) {
                var keyCode, event;
                if (document.all) {
                    keyCode = window.event.keyCode;
                    event = window.event;
                } else {
                    keyCode = (typeof(e.which) != 'undefined') ? e.which : 0;
                    event = e;
                }
                if (event) {
                    func(event, keyCode);
                }
            };
        },

        /**
         * Loads the HTML returned by a GET request into a DOM element.
         * @static
         * @param {String} url URL to request
         * @param {String} elemId Id of the DOM element where HTML is inserted.
         */
        loadElement: function(url, elemId) {
            $CQ("#" + elemId).load(url);
        },

        /**
         * Loads the HTML returned by a GET request into a DOM element. Teasers smooth loading.
         * @static
         * @param {String} url URL to request
         * @param {String} elemId Id of the DOM element where HTML is inserted.
         */
        loadTeaserElement: function(url, elemId) {
            var hbckup = $CQ("#" + elemId).css("height");
            var h = $CQ("#" + elemId).height();
            if (h > 0) {
                //force height to avoid flickering
                $CQ("#" + elemId).css("height", h);
            }

            var showTeaser = function(text) {
                if (text && text != "") {
                    var toInject = $CQ(text).css("display", "none");
                    var targetElement = $CQ("#" + elemId)[0];
                    $CQ("#" + elemId).empty().append(toInject);

                    if (targetElement
                        && targetElement.parentElement) {
                        $CQ(targetElement.parentElement).trigger('target-dom-loaded');
                    }

                    toInject.fadeIn(/*"fast", */function() {
                        if (hbckup && hbckup != "0px") {
                            $CQ("#" + elemId).css("height", hbckup);
                        }
                    });
                } else {
                    if (hbckup && hbckup != "0px") {
                        $CQ("#" + elemId).css("height", hbckup);
                    }
                }
            };

            var cacheTeaser = function(url, text) {
                if (!CQ_Analytics.Utils.teasersCache) {
                    CQ_Analytics.Utils.teasersCache = {};
                }

                CQ_Analytics.Utils.teasersCache[url] = text;
            };


            var handleTeaser = function() {
                if (CQ_Analytics.Utils.teasersCache && CQ_Analytics.Utils.teasersCache[url]) {
                    showTeaser(CQ_Analytics.Utils.teasersCache[url]);
                } else {
                    CQ_Analytics.Utils.teasersLoading = CQ_Analytics.Utils.teasersLoading || {};
                    //teaser might be alreading being loaded
                    if( CQ_Analytics.Utils.teasersLoading[url]) {
                        //"come back" in some few ms
                        window.setTimeout(function() {
                            CQ_Analytics.Utils.loadTeaserElement(url, elemId);
                        }, 100);
                    } else {
                        CQ_Analytics.Utils.teasersLoading[url] = true;
                        loadTeaser();
                    }
                }
            };

            var loadTeaser = function() {
                // the WCM mode might have been changed using a parameter, in such cases
                // we need to proxy the parameter to the teaser paragraph to avoid JS
                // errors that originate from the parameter rendered in the wrong mode
                // (for example, rendered for edit mode when the WCM mode is actually
                // disabled); also ensure that a "overridden URL" (for example, provided
                // by the portal adapter) takes precedence over the actual URL
                var requestURL = url;
                var baseUrl = location.href;
                if (typeof CQ_CONTENT_PATH != "undefined") {
                    baseUrl = CQ_CONTENT_PATH;
                }
                var wcmMode = CQ.shared.HTTP.getParameter(baseUrl, "wcmmode");
                if (wcmMode) {
                    requestURL += (requestURL.indexOf("?") > 0 ? "&" : "?") + "wcmmode=" + wcmMode;
                }

                CQ.shared.HTTP.get(requestURL, function(o, success, response) {
                    if (success) {
                        var text = response.body;
                        if (text) {
                            //filter response because following fadeOut cannot be applied to
                            //empty text nodes
                            text = text.replace(new RegExp("\\n", "ig"), "");
                            text = text.replace(new RegExp("\\r", "ig"), "");

                            cacheTeaser(url, text);

                            delete CQ_Analytics.Utils.teasersLoading[url];

                            handleTeaser();
                        }
                    } else {
                        cacheTeaser(url, "");
                    }
                });
            };

            var length = $CQ("#" + elemId).children().length;
            if (length > 0) {
                var item = 0;
                $CQ("#" + elemId).children().fadeOut(/*"fast",*/ function() {
                    var child = $CQ(this);
                    window.setTimeout(function() {
                        child.remove();
                        item ++;
                        if (item >= length) {
                            handleTeaser();
                        }
                    }, 50);
                });
            } else {
                handleTeaser();
            }


        },

        /**
         * Clears in the inner HTML content of a DOM element.
         * @static
         * @param {String} elemId Id of the DOM element to clear.
         */
        clearElement: function(elemId) {
            if (elemId) {
                $CQ("#" + elemId).html("");
            }
        },

        /**
         * Checks whether or not the specified object exists in the array.
         * @static
         * @param {Object} o The object to check for
         * @return {Number} The index of o in the array (or -1 if it is not found)
         */
            //Copied from CQ.Ext
        indexOf : function(array, o) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] == o) {
                    return i;
                }
            }
            return -1;
        },

        /**
         * Requests the specified URL from the server using GET. The request
         * will be synchronous, unless a callback function is specified.
         * @static
         * @param {String} url The URL to request
         * @param {Function} callback (optional) The callback function which is
         *        called regardless of success or failure and is passed the following
         *        parameter:<ul>
         *        <li><b>xhr</b> : Object<div class="sub-desc">The XMLHttpRequest object containing the response data.
         *        See <a href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</a> for details about
         *        accessing elements of the response.</div></li>
         *        </ul>
         */
        load: function(url, callback, scope) {
            return CQ.shared.HTTP.get(url, callback, scope);
        },

        /**
         * Requests the specified URL from the server using POST. The request
         * will be synchronous, unless a callback function is specified.
         * The returned response object looks like this:
         * <pre><code>{ headers: { "Status": 200, ... } }</code></pre>
         * See constants above for all supported headers.
         * @static
         * @param {String} url The URL to request
         * @param {Function} callback (optional) The callback function which is
         *        called regardless of success or failure and is passed the following
         *        parameter:<ul>
         *        <li><b>xhr</b> : Object<div class="sub-desc">The XMLHttpRequest object containing the response data.
         *        See <a href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</a> for details about
         *        accessing elements of the response.</div></li>
         *        </ul>
         * @param {Object} params The parameters
         * @param {Object} scope The scope
         */
        post: function(url, callback, params, scope) {
            return CQ.shared.HTTP.post(url, callback, params, scope);
        },

        /**
         * Returns the current page path.
         * @static
         * @return {String} Page path
         */
        getPagePath: function() {
            return CQ.shared.HTTP.getPath();
        },

        /**
         * Removes all parts but the path from the specified URL.
         * <p>Examples:<pre><code>
         /x/y.sel.html?param=abc => /x/y
         </code></pre>
         * <pre><code>
         http://www.day.com/foo/bar.html => /foo/bar
         </code></pre><p>
         * @static
         * @param {String} url The URL
         * @return {String} The path
         */
        getPath: function(url) {
            return CQ.shared.HTTP.getPath(url);
        },

        /**
         * Adds a parameter to the specified URL. The parameter name and
         * value will be URL-endcoded.
         * @static
         * @param {String} url The URL
         * @param {String} name The name of the parameter
         * @param {String/String[]} value The value of the parameter.
         *        Since 5.3, an array of strings can be passed
         * @return {String} The URL with the new parameter
         */
        addParameter: function(url, name, value) {
            return CQ.shared.HTTP.addParameter(url, name, value);
        },

        /**
         * Removes all parameter from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without parameters
         */
        removeParameters: function(url) {
            return CQ.shared.HTTP.removeParameters(url);
        },

        /**
         * Removes the anchor from the specified URL.
         * @static
         * @param {String} url The URL
         * @return {String} The URL without anchor
         * Copied from CQ.HTTP
         */
        removeAnchor: function(url) {
            return CQ.shared.HTTP.removeAnchor(url);
        },

        /**
         * Returns the scheme and authority (user, hostname, port) part of
         * the specified URL or an empty string if the URL does not include
         * that part.
         * @static
         * @param {String} url The URL
         * @return {String} The scheme and authority part
         */
            //Copied from CQ.HTTP
        getSchemeAndAuthority: function(url) {
            return CQ.shared.HTTP.getSchemeAndAuthority(url);
        },

        /**
         * Removes scheme, authority and context path from the specified
         * absolute URL if it has the same scheme and authority as the
         * specified document (or the current one).
         * @static
         * @param {String} url The URL
         * @param {String} doc (optional) The document
         * @return {String} The internalized URL
         */
        internalize: function(url, doc) {
            return CQ.shared.HTTP.internalize(doc);
        },

        /**
         * Makes sure the specified relative URL starts with the context path
         * used on the server. If an absolute URL is passed, it will be returned
         * as-is.
         * @static
         * @param {String} url The URL
         * @param {boolean} encode true to encode the path of the URL (optional)
         * @return {String} The externalized URL
         * @since 5.3
         */
        externalize: function(url, encode) {
            return CQ.shared.HTTP.externalize(url, encode);
        },

        /**
         * Encodes the path of the specified URL if it is not already encoded.
         * Path means the part of the URL before the first question mark or
         * hash sign.<br>
         * See {@link CQ.shared.HTTP#encodePath} for details about the encoding.<br>
         * Sample:<br>
         * <code>/x/y+z.png?path=/x/y+z >> /x/y%2Bz.png?path=x/y+z</code><br>
         * Note that the sample would not work because the "+" in the request
         * parameter would be interpreted as a space. Parameters must be encoded
         * separately.
         * @static
         * @param {String} url The URL to encoded
         * @return {String} The encoded URL
         * @since 5.3
         */
        encodePathOfURI: function(url) {
            return CQ.shared.HTTP.encodePathOfURI(url);
        },

        /**
         * Encodes the specified path using encodeURI. Additionally <code>+</code>,
         * <code>#</code> and <code>?</code> are encoded.<br>
         * The following characters are not encoded:<br>
         * <code>0-9 a-z A-Z</code><br>
         * <code>- _ . ! ~ * ' ( )</code><br>
         * <code>; / : @ & = $ ,</code><br>
         * @static
         * @param {String} path The path to encode
         * @return {String} The encoded path
         * @since 5.3
         */
        encodePath: function(path) {
            return CQ.shared.HTTP.encodePath(path);
        },

        /**
         * Returns the context path used on the server.
         * @static
         * @return {String} The context path
         * @since 5.3
         */
        getContextPath: function() {
            return CQ.shared.HTTP.getContextPath();
        },

        /**
         * Detects the context path used on the server.
         * @private
         * @static
         * @since 5.3
         */
        detectContextPath: function() {
            return CQ.shared.HTTP.detectContextPath();
        },

        /**
         * Takes an object and converts it to an encoded URL. e.g. <code>CQ.Ext.urlEncode({foo: 1, bar: 2});</code>
         * would return "foo=1&bar=2".  Optionally, property values can be arrays, instead of keys and the resulting
         * string that's returned will contain a name/value pair for each array value.
         * @static
         * @param {Object} o
         * @return {String}
         */
            //Copied from CQ.HTTP
        urlEncode : function(o) {
            if (!o) {
                return "";
            }
            if (typeof o == 'string') {
                return o;
            }
            var buf = [];
            for (var key in o) {
                var ov = o[key], k = encodeURIComponent(key);
                var type = typeof ov;
                if (type == 'undefined') {
                    buf.push(k, "=&");
                } else if (type != "function" && type != "object") {
                    buf.push(k, "=", encodeURIComponent(ov), "&");
                } else if (typeof ov == "array") {
                    if (ov.length) {
                        for (var i = 0, len = ov.length; i < len; i++) {
                            buf.push(k, "=", encodeURIComponent(ov[i] === undefined ? '' : ov[i]), "&");
                        }
                    } else {
                        buf.push(k, "=&");
                    }
                }
            }
            buf.pop();
            return buf.join("");
        },

        /**
         * Returns a base 16 encoded UID based on a timestamp and a random number.
         * @static
         * @return {String} UID
         */
        getUID: function() {
            //concatenate a timestamp + a 42 bits number ( 2^42- 1)
            var r = Math.floor(Math.random() * (Math.pow(2, 42) - 1));
            return this.getTimestamp().toString(16) + r.toString(16);
        },

        /**
         * Returns a timestamp.
         * @static
         * @return {Number} Timestamp
         */
        getTimestamp: function() {
            var d = new Date();
            return d.getTime();
        },

        /**
         * Inserts a string every x character into another string.
         * @static
         * @param {String} str Source string
         * @param {Number} every Inserts <b>every</b> x characters
         * @param {String} separator String to insert
         * @return {String} The string with inserted separators
         */
        insert: function(str, every, separator) {
            if (!str || isNaN(every) || !separator) return str;
            var res = "";
            var from = 0;
            var to = every;
            while (to < str.length) {
                res += str.substring(from, to) + separator;
                from += every;
                to += every;
            }
            if (from < str.length) {
                res += str.substring(from);
            }
            return res;
        },

        /**
         * @private
         */
        addListener: function () {
            if (window.addEventListener) {
                return function(el, eventName, fn, capture) {
                    el.addEventListener(eventName, fn, (capture));
                };
            } else if (window.attachEvent) {
                return function(el, eventName, fn, capture) {
                    el.attachEvent("on" + eventName, fn);
                };
            } else {
                return function() {
                };
            }
        },

        /**
         * @private
         */
        removeListener: function() {
            if (window.removeEventListener) {
                return function (el, eventName, fn, capture) {
                    el.removeEventListener(eventName, fn, (capture));
                };
            } else if (window.detachEvent) {
                return function (el, eventName, fn) {
                    el.detachEvent("on" + eventName, fn);
                };
            } else {
                return function() {
                };
            }
        }
    };
};

/**
 * A helper class providing a set of clickstream cloud rendering utility methods.
 * <br>
 * @class CQ_Analytics.ClickstreamcloudRenderingUtils
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.ClickstreamcloudRenderingUtils = new function() {
    return {
        /**
         * Creates a link DOM element.
         * @static
         * @param {String} text Text
         * @param {Function} func Onclick method
         * @param {Object} props Tag attributes
         * @return {Element} Link DOM element.
         */
        createLink: function(text, func, props, anchor) {
            var link = document.createElement("a");
            link.href = anchor;
            link.onclick = func;
            link.innerHTML = text;
            if (props) {
                for (var p in props) {
                    if (props.hasOwnProperty(p)) {
                        link[p] = props[p];
                    }
                }
            }
            return link;
        },

        /**
         * Creates a link DOM element.
         * @static
         * @param {String} text Text
         * @param {String} href Href
         * @param {Object} title Title
         * @return {Element} Link DOM element.
         */
        createStaticLink: function(text, href, title) {
            var link = document.createElement("a");
            link.href = href;
            link.innerHTML = text;
            link.title = title;
            link.alt = title;
            return link;
        },

        /**
         * Creates a span DOM element with format "property = value"
         * @static
         * @param {String} label Property label
         * @param {String} value Value
         * @param {String} cssClass CSS class name
         * @param {String} title Span title
         * @return {Element} Span DOM element.
         */
        createNameValue: function(label, value, cssClass, title) {
            var span = document.createElement("span");
            span.className = cssClass || "ccl-data";
            span.innerHTML = label + " = " + value;
            span.title = title;
            span.alt = title;
            return span;
        },

        /**
         * Creates a span DOM element
         * @static
         * @param {String} text Span inner HTML
         * @param {String} cssClass CSS class name
         * @param {String} title Span title
         * @return {Element} Span DOM element.
         */
        createText: function(text, cssClass, title) {
            var span = document.createElement("span");
            span.className = cssClass || "ccl-data";
            if (text && text.indexOf && (
                (text.indexOf("/home") != -1 && text.indexOf("/image") != -1)
                    || (text.indexOf("/") != -1 && text.indexOf(".png") != -1))) {
                //image
                span.innerHTML = "<img src=\"" + text + ".prof.thumbnail.png\" border=\"0\">";
            }
            else if (text && text.indexOf && text.indexOf("www.gravatar.com") != -1) {
                span.innerHTML = "<img src=\"" + text + "\">";
            }
            else {
                span.innerHTML = text;
            }
            span.title = title;
            span.alt = title;
            return span;
        },

        /**
         * Creates a span DOM element with format "property = value" and transforms
         * it to a text input field on click.
         * @static
         * @param {String} name Property label
         * @param {String} value Value
         * @return {Element} Span DOM element.
         */
        createEditablePropertySpan: function(name, value) {
            //TODO generalize css classes
            var onclick = "var editSpan = this.nextSibling; " +
                "this.style.display = 'none'; " +
                "editSpan.style.display = 'block';";
            var onblur = "var editSpan = this.parentNode; " +
                "var readSpan = this.parentNode.previousSibling;" +
                "var newValue = this.value;" +
                "editSpan.style.display = 'none'; " +
                "readSpan.innerHTML = '" + name + " = '+value; " +
                "readSpan.style.display = 'block';";
            var span = document.createElement("span");
            span.innerHTML = "<span class=\"ccl-data\" onclick=\"" + onclick + "\">" + name + " = " + value + "</span>";
            span.innerHTML += "<span class=\"ccl-data\" style=\"display: none;\">" + name + " = <input class=\"ccl-input\" type=\"text\" value=\"" + value + "\" onblur=\"" + onblur + "\"></span>";
            span.className = "ccl-data";
            return span;
        }
    }
};

/**
 * Signs given url if needed.
 *
 * @param {String} url - url to sign (only http://maps.googleapis.com/* will be signed).
 * @param {Function} onSuccess - success handler
 * @param {Function} [onFailure] - failure handler
 */
var generateURLSignature = function(url, onSuccess, onFailure) {
    /* need to generate signature? */
    if (url && url.match(/^https?:\/\/maps\.googleapis\.com\//)) {
        /* remove hostname */
        var toBeSigned = url.replace(/^https?:\/\/[^/]*/, '').replace(/&amp;/g, '&');

        /* sign url asynchronously */
        $CQ.ajax({
            url: CQ.shared.HTTP.externalize('/etc/cloudsettings/default/contexthub/geolocation.signature.json'),
            method: 'get',
            dataType: 'json',
            cache: false,
            data: {
                url: toBeSigned
            }
        }).done(function(data, textStatus, xhr) {
            if (xhr && xhr.responseJSON) {
                var signedURL = this.baseURL.replace(/&amp;/g, '&');

                signedURL += '&client=' + xhr.responseJSON.client;
                signedURL += '&channel=' + xhr.responseJSON.channel;
                signedURL += '&signature=' + xhr.responseJSON.signature;

                /* call success handler */
                onSuccess(signedURL);
            } else {
                if (typeof onFailure === 'function') {
                    onFailure();
                }
            }
        }.bind({ baseURL: url })).fail(onFailure);
    } else {
        /* no need to generate signature */
        onSuccess(url);
    }
};

/**
 * A helper class providing a set of ClientContext utility methods.
 * <br>
 * @class CQ_Analytics.ClientContextUtils
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.ClientContextUtils = new function() {
    return {
        /**
         * Renders a store property value into the DOM. On store update, rendering will be updated.
         * @static
         * @param {String} id Id of the DOM element that will contain the property rendering
         * @param {String} storeName Name of the store
         * @param {String} propertyName Name of the property
         * @param {String} prefix (Optional) Fixed prefix to prepend to property value
         * @param {String} suffix (Optional) Fixed suffix to append to property value
         * @param {String} defaultValue (Optional) Default value to render if property is not in the store
         */
        renderStoreProperty: function(id, storeName, propertyName, prefix, suffix, defaultValue) {
            if (CQ_Analytics && CQ_Analytics.CCM) {
                CQ_Analytics.CCM.onReady(function() {
                    var init = function() {
                        var store = CQ_Analytics.StoreRegistry.getStore(storeName);
                        if (store) {
                            var renderer = function() {
                                var value = store.getProperty(propertyName) || defaultValue;
                                var el = $CQ("#" + id);

                                if (el.attr("contenteditable") &&
                                    /* test needed for IE7 */
                                    el.attr("contenteditable") != "inherit") return;

                                if (typeof(value) == "string" &&
                                    (
                                        (value.indexOf("/") == 0 &&
                                            (value.toLowerCase().indexOf(".png") != -1
                                                || value.toLowerCase().indexOf(".jpg") != -1
                                                || value.toLowerCase().indexOf(".gif") != -1)
                                            || value.toLowerCase().indexOf("http") == 0)
                                        )
                                    ) {
                                    if (!value || value == "") {
                                        el.children().remove();
                                        if( CQ_Analytics.isUIAvailable) {
                                            el.html(CQ.I18n.getMessage("No", null, "Ex: No address, No keywords") + " " + propertyName);
                                        } else {
                                            el.html("No " + propertyName);
                                        }
                                    } else {
                                        var url = "";
                                        if (el.parents(".cq-cc-thumbnail").length == 0 ||
                                            value.toLowerCase().indexOf("http") == 0 ||
                                            value.indexOf("/libs/wcm/mobile") == 0) {
                                            url = value.replace(new RegExp("&amp;", "g"), "&");
                                        } else {
                                            url = "/etc/clientcontext/shared/thumbnail/content.png";
                                            url = CQ.shared.HTTP.addParameter(url, "path", CQ_Analytics.Variables.replaceVariables(value));
                                        }
                                        url = CQ_Analytics.Variables.replaceVariables(url);
                                        /* as some browsers updates url() by host:port, we can't simply check if urls are equal, have to check if current contains proposed path instead */
                                        var previousUrl = el.find("div").css("background-image") || "";
                                        if (previousUrl.indexOf(url + ")") === -1) {
                                            if (store.fireEvent("beforepropertyrender", store, id) !== false) {
                                                /* sign url if needed */
                                                generateURLSignature(CQ.shared.HTTP.externalize(url), function(processedURL) {
                                                    //image
                                                    el.html("");
                                                    el.children().remove();

                                                    $CQ("<div>")
                                                        .addClass("cq-cc-thumbnail-img")
                                                        .css("background-image", "url(" + processedURL + ")")
                                                        .appendTo(el);

                                                    store.fireEvent("propertyrender", store, id);
                                                });
                                            }
                                        }
                                    }
                                } else {
                                    value = CQ_Analytics.Variables.replaceVariables(value);
                                    if( CQ_Analytics.isUIAvailable) {
                                        value = (!value || value == "") ?
                                            CQ.I18n.getMessage("No", null, "Ex: No address, No keywords") + " " + propertyName :
                                            value = prefix + value + suffix;
                                    } else {
                                        value = (!value || value == "") ?
                                            "No " + propertyName :
                                            value = prefix + value + suffix;
                                    }
                                    if (el.html() != value) {
                                        if (store.fireEvent("beforepropertyrender", store, id) !== false) {
                                            el.html(value);
                                            store.fireEvent("propertyrender", store, id);
                                        }
                                    }
                                }
                            };

                            if (store.fireEvent("beforeinitialpropertyrender", store, id) !== false) {
                                renderer();

                                if (store.addListener) {
                                    store.addListener('update', function() {
                                        renderer();
                                    });
                                }

                                store.fireEvent("initialpropertyrender", store, id);
                            }
                        }
                    };

                    CQ_Analytics.ClientContextUtils.onStoreRegistered(storeName, init);
                });
            }
        },

        /**
         * Renders a store into the DOM. On store update, rendering will be updated. Rendering is done by calling the
         * <code>renderer</code> method of the store.
         * @static
         * @param {String} id Id of the DOM element that will contain the property rendering
         * @param {String} storeName Name of the store
         */
        renderStore: function(id, storeName) {
            if (CQ_Analytics && CQ_Analytics.CCM && id && storeName) {
                CQ_Analytics.CCM.onReady(function() {
                    var init = function() {
                        var store = CQ_Analytics.StoreRegistry.getStore(storeName);
                        if (store) {
                            store.divId = id;
                            var renderer = function() {
                                if (store.fireEvent("beforerender", store, store.divId) !== false) {
                                    store.renderer(store, store.divId);
                                    store.fireEvent("render", store, store.divId);
                                }
                            };

                            if (store.fireEvent("beforeinitialrender", store, id) !== false) {
                                renderer();

                                if (store.addListener) {
                                    store.addListener('update', function() {
                                        renderer();
                                    });
                                }

                                store.fireEvent("initialrender", store, id);
                            }
                        }
                    };

                    CQ_Analytics.ClientContextUtils.onStoreRegistered(storeName, init);
                });
            }
        },

        /**
         * Returns a list of options: list of stores registered in the {@link CQ_Analytics.StoreRegistry}.
         * @static
         * @return {Object[]} Computed options
         */
        storesOptionsProvider: function() {
            var options = [];
            var stores = CQ_Analytics.StoreRegistry.getStores();
            for (var name in stores) {
                options.push({
                    value: name
                });
            }
            return options;
        },

        /**
         * Returns a list of options: list of properties of a store.
         * @static
         * @param {String} storeName Name of the store
         * @param {Boolean} showValue (Optional) True to add value to the options (defaults to false)
         * @return {Object[]} Computed options
         */
        storePropertiesOptionsProvider: function(storeName, showValue) {
            var options = [];
            var store = CQ_Analytics.StoreRegistry.getStore(storeName);
            if (store) {
                var names = store.getPropertyNames();
                for (var i = 0; i < names.length; i++) {
                    var value = names[i];
                    if (!CQ.shared.XSS.KEY_REGEXP.test(value)) {
                        var o = {
                            value: value
                        };

                        if (showValue) {
                            o["text"] = value + " - " + store.getProperty(value);
                        }
                        options.push(o);
                    }
                }
            }
            return options;
        },

        /**
         * Executes a callback function when a store is registered.
         * @static
         * @param {String} storeName Name of the store
         * @param {Function} callback Function to execute
         */
        onStoreRegistered: function(storeName, callback) {
            if (callback) {
                var store = CQ_Analytics.StoreRegistry.getStore(storeName);
                if (store) {
                    callback.call(store, store);
                } else {
                    CQ_Analytics.CCM.addListener('storeregister', function(e, sessionstore) {
                        if (sessionstore.getName() == storeName) {
                            callback.call(sessionstore, sessionstore);
                        }
                    });
                }
            }
        },

        /**
         * Executes a callback function when a store is initialized. Some store might be initialized several times
         * (default init + asynchronous data loading): use delay parameter to try to get only one call of the callback.
         * A timeout is defined before every init event, next init event kills all previous calls. Latest one execute
         * the callback. WARNING: if time between 2 init events is bigger than timeout, callback is called several
         * times.
         * @static
         * @param {String} storeName Name of the store
         * @param {Function} callback Function to execute
         * @param {Boolean/Number} delay True to enable a default delay
         * (value is {@link #ClientContextUtils.DEFAULT_INIT_DELAY DEFAULT_INIT_DELAY} or a number of milliseconds (defaults
         * false).
         */
        onStoreInitialized: function(storeName, callback, delay) {
            if( delay === true) {
                delay = CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY;
            }

            var internal_callback = function() {
                var store = CQ_Analytics.StoreRegistry.getStore(storeName);
                if( store.DELAYED_INIT_TIMEOUT ) {
                    window.clearTimeout(store.DELAYED_INIT_TIMEOUT);
                    store.DELAYED_INIT_TIMEOUT = null;
                }

                if( delay > 0 ) {
                    store.DELAYED_INIT_TIMEOUT = window.setTimeout(function() {
                        store.DELAYED_INIT_TIMEOUT = null;
                        callback.call(store, "initialize", store);
                    }, delay);
                } else {
                    callback.call(store, "initialize", store);
                }
            };

            var store = CQ_Analytics.StoreRegistry.getStore(storeName);
            if (store) {
                if( store.isInitialized()) {
                    internal_callback.call(store);
                    store.addListener("initialize",function(event, store) {
                        internal_callback.call(store);
                    });
                } else {
                    store.addListener("initialize",function(event, store) {
                        internal_callback.call(store);
                    });
                }
            } else {
                    CQ_Analytics.CCM.addListener('storeregister', function(e, sessionstore) {
                        if (sessionstore.getName() == storeName) {
                            CQ_Analytics.ClientContextUtils.onStoreInitialized(storeName, callback, delay);
                        }
                    });
                }
        },

        /**
         * Inits the ClientContext.
         * @static
         * @param {String} ccPath ClientContext path
         * @param {String} pagePath Current page path
         */
        init: function(ccPath, pagePath, options) {
            CQ_Analytics.ClientContextMgr.PATH = ccPath;
            CQ_Analytics.ClientContextMgr.loadConfig(options, true);

            //jquery will do the eval
            $CQ.ajax({
                url: CQ.shared.HTTP.externalize(ccPath + "/content/jcr:content/stores.init.js"),
                cache: false,
                async: true,
                dataType: 'script',
                data: {
                    path: pagePath
                }
            });
        },

        /**
         * Inits the ClientContext UI.
         * @static
         * @param {String} ccPath ClientContext path
         * @param {String} pagePath Current page path
         */
        initUI: function(ccPath, pagePath, editMode) {
            CQ_Analytics.ClientContextUI.create(ccPath, pagePath, editMode);
        }

    }
};

/**
 * Default init delay. See {@link #onStoreInitialized}.
 * @static
 * @type Number
 */
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY = 200;

/**
 * A helper class providing a set of ClientContext utility methods to handle variables: a variable is a marker used
 * in a store property value to referenced the value of another property. Format: ${/storeName/propertyName}
 * <br>
 * @class CQ_Analytics.Variables
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.Variables = new function() {
    return {
        /**
         * Returns if a value contains a variable of not.
         * @static
         * @param {String} value The value to test
         */
        containsVariable: function(value) {
            return CQ_Analytics.Variables.getVariables(value).length > 0;
        },

        /**
         * Returns the variables contained into a value.
         * @static
         * @param {String} value The value
         */
        getVariables: function(value) {
            if (!value || typeof(value) != "string") return [];
            var res = value.match(new RegExp("\\$\\{([\\w/]*)\\}", "ig"));
            return res ? res : [];
        },

        /**
         * Replaces the variables into a value by their corresponding values in the ClientContext and returns
         * the result.
         * @static
         * @param {String} value The value
         * @return {String} The result of the replacement
         */
        replaceVariables: function(value) {
            if (!value) return value;
            //keep history to avoid infinite loops
            var history = "";
            var res = value;
            var variables = CQ_Analytics.Variables.getVariables(value);
            while (variables.length > 0 && history.indexOf(variables.join()) == -1) {
                for (var i = 0; i < variables.length; i++) {
                    //current format should ${store/property}
                    //extract store/property
                    var vName = CQ_Analytics.Variables.getPropertyPath(variables[i]);
                    var v = CQ_Analytics.ClientContext.get(vName) || "";
                    res = CQ_Analytics.Variables.replace(res,vName,v);
                }
                history += variables.join();
                variables = CQ_Analytics.Variables.getVariables(res);
            }
            return res;
        },

        /**
         * Returns the path to the property contained in the provided variable.
         * @static
         * @param {String} variable The variable
         * @return The path to the property. Null if no path available.
         */
        getPropertyPath: function(variable) {
            if( !variable || variable.length < 2 ) return null;
            return variable.substring(2, variable.length - 1);
        },

        /**
         * Returns the name of the property contained in the provided variable.
         * @static
         * @param {String} variable The variable
         * @return The name of the property. Null if no property name available.
         */
        getPropertyName: function(variable) {
            var p = CQ_Analytics.Variables.getPropertyPath(variable);
            if( p ) {
                var s = p.split("/");
                if(s.length == 3) {
                    return s[2];
                }
            }
            return null;
        },

        /**
         * Returns the name of the store contained in the provided variable.
         * @static
         * @param {String} variable The variable
         * @return The name of the store. Null if no store name available.
         */
        getStoreName: function(variable) {
            var p = CQ_Analytics.Variables.getPropertyPath(variable);
            if( p ) {
                var s = p.split("/");
                if(s.length > 1) {
                    return s[1];
                }
            }
            return null;
        },

        /**
         * Replaces all instances of the variable <code>${key}</code> by <code>value</code>
         * in the provided <code>string</code> and returns the result.
         * @static
         * @param {String} string The string
         * @param {String} key The variable key
         * @param {String} value The replacement value
         * @return {String} The result of the replacement
         */
        replace: function(string, key, value) {
            return string.replace(new RegExp("\\\$\\{" + key + "\\}", "ig"), value);
        }
    }
};

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.SessionPersistence = CQ.shared.ClientSidePersistence;

/**
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.Cookie = CQ.shared.ClientSidePersistence.CookieHelper;

/**
 * @class CQ_Analytics.Observable
 * An Observable adds the observable design pattern to an object: this object fires events and allows other objects to
 * listen to these events and react.
 * @constructor
 * @deprecated since 6.2, use ContextHub instead
 * Creates a new Observable.
 */
CQ_Analytics.Observable = function() {
    this.fireEvent = function(event) {
        if (event && this.listeners && !this.suppressEvents) {
            event = event.toLowerCase();
            var args = Array.prototype.slice.call(arguments, 0);

            // Listeners which refresh their WCM.editables remove themselves before refresh since
            // the refresh will replace them.  We therefore have to make a copy of the listeners
            // array or we'll skip some listeners as the array moves around underneath us.
            var listenersCopy = this.listeners.slice(0);

            for (var i = 0; i < listenersCopy.length; i++) {
                var l = listenersCopy[i];
                if (event == l.event) {
                    if (l.fireFn.apply(l.scope || this || window, args) === false) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
};

/**
 * Appends an event handler to the current Observable.
 * @param {String} event Event name.
 * @param {Function} fct The method the event invokes.
 * @param {Object} scope (optional) The scope in which to execute the handler
 * function. The handler function's "this" context.
 */
CQ_Analytics.Observable.prototype.addListener = function(event, fct, scope) {
    this.listeners = this.listeners || new Array();
    if (event && fct) {
        this.listeners.push({
            "event": event.toLowerCase(),
            "fireFn": fct,
            "scope": scope
        });
    }
};

/**
 * Removes an event handler from the current Observable.
 * @param {String} event Event name.
 * @param {Function} fct The method the event invokes.
 */
CQ_Analytics.Observable.prototype.removeListener = function(event, fct) {
    this.listeners = this.listeners || new Array();
    if (event && fct) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i].event == event &&
                    this.listeners[i].fireFn == fct) {
                this.listeners.splice(i, 1);
            }
        }
    }
};

/**
 * Sets the value of the <tt>suppressEvents</tt> property
 * 
 * @param {Boolean} suppressEvents
 */
CQ_Analytics.Observable.prototype.setSuppressEvents = function(suppressEvents) {
	this.suppressEvents = suppressEvents;
}

/**
 * Array of listeners objects.
 * @private
 */
CQ_Analytics.Observable.prototype.listeners = null;

/**
 * Flag which controls suppression of event delivery
 * 
 * <p>If set to <tt>true</tt>, listeners will not be notified of events. Default to <tt>false</tt>.</p>
 * 
 * @private
 */
CQ_Analytics.Observable.prototype.suppressEvents = false;

if( !CQ_Analytics.StoreRegistry ) {
    /**
     * Registery that contain a list of {@link CQ_Analytics.SessionStore}.
     * <br>
     * @static
     * @singleton
     * @class CQ_Analytics.StoreRegistry
     * @since 5.5
     * @deprecated since 6.2, use ContextHub instead
     */
    CQ_Analytics.StoreRegistry = new function() {
        var stores = {};
        return {
            /**
             * Registers a store into the registery
             * @param {Array} store
             */
            register: function(store) {
                if( store["STORENAME"] ) {
                    stores[store.STORENAME] = store;
                }
            },

            /**
             * Returns all registered stores.
             * @return Object
             */
            getStores: function() {
                return stores;
            },

            /**
             * Returns the store of the given name.
             * @param {String} name
             * @return Object
             */
            getStore: function(name) {
                return stores[name];
            }
        }
    }();
}

/**
 * @class CQ_Analytics.SessionStore
 * @extends CQ_Analytics.Observable
 * A SessionStore is a container of properties/values.
 * @constructor
 * @deprecated since 6.2, use ContextHub instead
 * Creates a new SessionStore.
 */
CQ_Analytics.SessionStore = function() {};

CQ_Analytics.SessionStore.prototype = new CQ_Analytics.Observable();

/**
 * Sets the value of a property.
 * @param {String} name Property name.
 * @param {String} value Property value.
 */
CQ_Analytics.SessionStore.prototype.setProperty = function(name, value) {
    if (this.data == null) {
        this.init();
    }
    this.data[name] = value;
    this.fireEvent("update", name);
};

/**
 * Sets the value of multiple properties
 * @param {Object} values The key-value store of values to set
 */
CQ_Analytics.SessionStore.prototype.setProperties = function( properties ) {
	if (this.data == null) {
		this.init();
	}

    var names = [];

	for ( var name in properties ) {
		if ( properties.hasOwnProperty (name) ) {

            names.push(name);
			var value = properties[name];

            this.data[name] = value;
		}
	}

	if (names.length > 0) {
        this.fireEvent("update", names);
    }
};

CQ_Analytics.SessionStore.prototype.initialized = false;

/**
 * Initializes the store.
 */
CQ_Analytics.SessionStore.prototype.init = function() {
    this.initialized = true;
    this.fireEvent("initialize",this);
};

/**
 * Returns a store property friendly label.
 * @param {String} name Property name.
 * @return {String} the label.
 */
CQ_Analytics.SessionStore.prototype.getLabel = function(name) { return name; };

/**
 * Returns a store property in a link format.
 * @param {String} name Property name.
 * @return {String} the link value.
 */
CQ_Analytics.SessionStore.prototype.getLink = function(name) { return name; };

/**
 * Removes a property from the store.
 * @param {String} name Property name.
 */
CQ_Analytics.SessionStore.prototype.removeProperty = function(name) {
    if (this.data == null) {
        this.init();
    }
    if (this.data[name]) {
        delete this.data[name];
    }

    this.fireEvent("update", name);
};

/**
 * Returns all store property names.
 * @param {String[]} excluded (Optional) Array of excluded properties (not returned).
 * @return {String[]} Array of the property names.
 */
CQ_Analytics.SessionStore.prototype.getPropertyNames = function(excluded) {
    if (this.data == null) {
        this.init();
    }

    excluded = excluded ? excluded : [];

    var res = new Array();
    for (var p in this.data) {
        if (CQ_Analytics.Utils.indexOf(excluded, p) == -1) {
            res.push(p);
        }
    }
    return res;
};

/**
 * Returns the session store attached to the current object (returns this).
 * @return {CQ_Analytics.SessionStore} Session store.
 */
CQ_Analytics.SessionStore.prototype.getSessionStore = function() {
    return this;
};

/**
 * Clears the store.
 */
CQ_Analytics.SessionStore.prototype.clear = function() {
    this.data = null;
};

/**
 * Returns the store data.
 * @param {String[]} excluded Property names to exclude from the result.
 * @return {Object} Object containing the store data (obj["property"] = value).
 */
CQ_Analytics.SessionStore.prototype.getData = function(excluded) {
    if (this.data == null) {
        this.init();
    }

    if (excluded) {
        var ret = {};
        for (var p in this.data) {
            if (CQ_Analytics.Utils.indexOf(excluded, p) == -1) {
                ret[p] = this.data[p];
            }
        }
        return ret;
    } else {
        return this.data;
    }
};

/**
 * Resets the store: restores initial values.
 */
CQ_Analytics.SessionStore.prototype.reset = function() {
    if (this.data != null) {
        this.data = null;
        this.fireEvent("update");
    }
};

/**
 * Returns the value of a store property (XSS filtered value).
 * @param {String} name Property name.
 * @param {Boolean} raw Raw value, no XSS filtering
 * @return {String} the value.
 */
CQ_Analytics.SessionStore.prototype.getProperty = function(name, raw) {
    if (this.data == null) {
        this.init();
    }
    var value = this.data[name];
    if( !raw ) {
        var xssValue = CQ.shared.XSS.getXSSValue(value);
        return xssValue;
    }
    return value;
};

/**
 * Returns the store name.
 */
CQ_Analytics.SessionStore.prototype.getName = function() {
    return this.STORENAME;
};

/**
 * Adds an initial property to the store.
 * @param {String} name Property name.
 * @param {String} value Property value.
 */
CQ_Analytics.SessionStore.prototype.addInitProperty = function(name, value) {
    if (! this.initProperty) this.initProperty = {};
    this.initProperty[name] = value;
};

/**
 * Returns the value of an initial property.
 * @param {String} name Property name.
 * @return {String} The value.
 */
CQ_Analytics.SessionStore.prototype.getInitProperty = function(name) {
    return this.initProperty ? this.initProperty[name] : null;
};

/**
 * Loads initial properties from an object.
 * @param {Object} obj Object containing the initial store data (obj["property"] = value).
 * @param {Boolean} setValues True to set the value in the store IF property does is not already present
 */
CQ_Analytics.SessionStore.prototype.loadInitProperties = function(obj, setValues) {
    if (obj) {
        for (var p in obj) {
            this.addInitProperty(p, obj[p]);
            if( setValues && this.data && this.data[p] === undefined) {
                this.setProperty(p, obj[p]);
            }
        }
    }
};

/**
 * Returns true if the store is initialized. False otherwise.
 */
CQ_Analytics.SessionStore.prototype.isInitialized = function() {
    return this.initialized;
};

/**
 * @class CQ_Analytics.PersistedSessionStore
 * @extends CQ_Analytics.SessionStore
 * A PersistedSessionStore is a persisted container of properties/values. The persistence is done
 * with {@link CQ_Analytics.SessionPersistence}.
 * @constructor
 * @deprecated since 6.2, use ContextHub instead
 * Creates a new PersistedSessionStore.
 */
CQ_Analytics.PersistedSessionStore = function () {};

CQ_Analytics.PersistedSessionStore.prototype = new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY = "key";

/**
 * Defines a property as non persited. By default all properties are persisted.
 * @param {String} name Property name
 */
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted = function(name) {
    if (!this.nonPersisted) this.nonPersisted = {};
    this.nonPersisted[name] = true;
};

CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX = "^generated*";

/**
 * Returns if a property in persisted or not.
 * @param {String} name Property name.
 * @return {Boolean} true if persisted, false otherwise.
 */
CQ_Analytics.PersistedSessionStore.prototype.isPersisted = function(name) {
    if (!this.nonPersisted) this.nonPersisted = {};
    return this.nonPersisted[name] !== true &&
        !new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX, "ig").test(name) &&
        !$CQ.isFunction(this.data[name]) &&
        (typeof this.data[name]) != "object";
};

/**
 * Returns the store key name used by persistence.
 * @return {String} The key name.
 */
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey = function() {
    return this.STOREKEY;
};

/**
 * Persists the store. All properties will be persisted as property=value using a {@link CQ_Analytics.SessionPersistence}.
 */
CQ_Analytics.PersistedSessionStore.prototype.persist = function() {
    if (this.fireEvent("beforepersist") !== false) {
        var store = new CQ_Analytics.SessionPersistence({'container': 'ClientContext'});
        store.set(this.getStoreKey(), this.toString());
        this.fireEvent("persist");
    }
};

//inheritDoc
CQ_Analytics.PersistedSessionStore.prototype.setProperty = function(name, value) {
    if (this.data == null) {
        this.init();
    }
    this.data[name] = value;
    if (this.isPersisted(name)) {
        this.persist();
    }
    this.fireEvent("update", name);
};


//inheritDoc
CQ_Analytics.PersistedSessionStore.prototype.setProperties = function( properties ) {
    if (this.data == null) {
        this.init();
    }

    var names = [];
    var shouldPersist = false;

    for ( var name in properties ) {
        if ( properties.hasOwnProperty (name) ) {

            names.push(name);
            var value = properties[name];

            this.data[name] = value;
            if (this.isPersisted(name)) {
                shouldPersist = true;
            }
        }
    }

    if (shouldPersist) {
        this.persist();
    }

    if (names.length > 0) {
        this.fireEvent("update", names);
    }
};

/**
 * Transforms the current store of paris (name,value) to a string.
 * @return {String} The stringified store.
 * @private
 */
CQ_Analytics.PersistedSessionStore.prototype.toString = function() {
    var list = null;
    if (this.data) {

        var encodeCommandChars = function(value) {
            if( !value || typeof(value) != "string") return value;
            var ret = value;
            ret = ret.replace(new RegExp(",","g"),"&#44;");
            ret = ret.replace(new RegExp("=","g"),"&#61;");
            ret = ret.replace(new RegExp("\\|","g"),"&#124;");
            return ret;
        };

        for (var p in this.data) {
            if (this.isPersisted(p)
                && this.data.hasOwnProperty(p)) {
                list = (list === null ? "" : list + ",");
                list += (p + "=" + encodeCommandChars(this.data[p]));
            }
        }
    }
    return list;
};

/**
 * Parses the given string to fill the store.
 * @param {String} str Stringified store.
 * @return {Object} Parsed object.
 * @private
 */
CQ_Analytics.PersistedSessionStore.prototype.parse = function(str) {
    var decodeCommandChars = function(value) {
        if( !value || typeof(value) != "string") return value;
        var ret = value;
        ret = ret.replace(new RegExp("&#44;","g"),",");
        ret = ret.replace(new RegExp("&#61;","g"),"=");
        ret = ret.replace(new RegExp("&#124;","g"),"|");
        return ret;
    };

    var obj = {};
    var array = str.split(",");
    for (var t in array) {
        if (array.hasOwnProperty(t)) {
            var entry = array[t].split("=");
            if (entry.length == 2) {
                obj[entry[0]] = decodeCommandChars(entry[1]);
            }
        }
    }
    return obj;
};

//inheritDoc
CQ_Analytics.PersistedSessionStore.prototype.reset = function(deferEvent) {
    if (this.data != null) {
        this.data = {};
        this.persist();
        this.data = null;
        if (!deferEvent) {
            this.fireEvent("update");
        }
    }
};

//inheritDoc
CQ_Analytics.PersistedSessionStore.prototype.removeProperty = function(name) {
    if (this.data == null) {
        this.init();
    }
    if (this.data[name]) {
        delete this.data[name];
        if (this.isPersisted(name)) {
            this.persist();
        }
    }
    this.fireEvent("update", name);
};

//inheritDoc
CQ_Analytics.PersistedSessionStore.prototype.clear = function() {
    var store = new CQ_Analytics.SessionPersistence({'container': 'ClientContext'});
    store.remove(this.getStoreKey());
    this.data = null;
};
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered int\o
 * with Day.
 */
/**
 * The <code>CQ_Analytics.ClientContextMgr</code> object is a singleton providing methods for registration,
 * persistence and management of different session stores linked to the clientcontext.<br>
 * Each store is basically a set of pairs (key,value) and will be used by segmentation (see {@link CQ_Analytics.SegmentMgr})
 * and displayed by clientcontext UI (see {@link CQ_Analytics.ClientContextUI}).
 * @singleton
 * @deprecated since 6.2, use ContextHub instead
 * @class CQ_Analytics.ClientContextMgr
 * @extends CQ_Analytics.PersistedSessionStore
 */
if (!CQ_Analytics.ClientContextMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.ClientContextMgr = function() {
        this.clientcontext = null;
        this.clientcontextToServer = null;
        this.stores = {};
        this.data = null;
        this.config = null;
        this.isConfigLoaded = false;
        this.areStoresLoaded = false;
    };

    CQ_Analytics.ClientContextMgr.prototype = new CQ_Analytics.PersistedSessionStore();

    /**
     * Store internal key (used by persistence).
     * @final
     * @private
     */
    CQ_Analytics.ClientContextMgr.prototype.STOREKEY = "CLIENTCONTEXT";

    /**
     * Store internal name
     * @final
     * @private
     */
    CQ_Analytics.ClientContextMgr.prototype.STORENAME = "clientcontext";

    /**
     * Number of milliseconds between the last store gets registered and the event storesinitialize
     * gets fired.
     * @final
     * @private
     */
    CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER = 1000;

    /**
     * Location of the config.
     * @static
     * @type String
     */
     CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH = CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);

    //inheritDoc
    CQ_Analytics.ClientContextMgr.prototype.init = function() {
        if( !this.initialized) {
            this.clientcontext = {};
            this.clientcontextToServer = {};
        }

        var store = new CQ_Analytics.SessionPersistence({'container': 'ClientContext'});
        var value = store.get(this.getStoreKey());
        if (value) {
            this.data = this.parse(value);
        } else {
            this.data = {};
        }

        this.initialized = true;
        this.fireEvent("initialize",this);

    };

    /**
     * Returns the unique session ID.
     * @return {String} the session ID.
     */
    CQ_Analytics.ClientContextMgr.prototype.getSessionId = function() {
        if (!this.data["sessionId"]) {
            this.setSessionId(CQ_Analytics.Utils.getUID());
        }
        return this.data["sessionId"];
    };

    /**
     * Sets the session ID.
     * @param {String} id the session ID.
     * @private
     */
    CQ_Analytics.ClientContextMgr.prototype.setSessionId = function(id) {
        if (id) {
            this.setProperty("sessionId", id);
        }
    };

    /**
     * Returns the visitor ID if defined.
     * @return {String} the visitor ID, <code>undefined</code> if not defined.
     */
    CQ_Analytics.ClientContextMgr.prototype.getVisitorId = function() {
        return this.data["visitorId"];
    };

    /**
     * Sets the visitor ID.
     * @param {String} id the visitor ID.
     */
    CQ_Analytics.ClientContextMgr.prototype.setVisitorId = function(id) {
        this.setProperty("visitorId", id);
    };

    /**
     * Returns the current clientcontext ID. Can be either: <ul>
     * <li>visitor ID if defined</li>
     * <li>session unique ID in other case.</li>
     * </ul>
     * If visitor ID is not defined, clientcontext is considered as anonymous.
     * @return {String} the ID.
     */
    CQ_Analytics.ClientContextMgr.prototype.getId = function() {
        var id = this.getVisitorId();
        if (!id) {
            return this.getSessionId();
        }
        return id;
    };

    /**
     * Returns if manager is still defined in anonymous mode (no visitor id defined).
     * @return {Boolean} true if anonymous.
     */
    CQ_Analytics.ClientContextMgr.prototype.isAnonymous = function() {
        var id = this.getVisitorId();
        return (!id);
    };

    /**
     * Returns if mode is defined.
     * @param {Number} mode Mode to check.
     * @return {Boolean} true if mode is defined.
     */
    CQ_Analytics.ClientContextMgr.prototype.isMode = function(mode) {
        return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(mode);
    };

    /**
     * Returns the current clientcontext object. Object can contain the non server persited data.
     * @param {Boolean} toServer true to exclue non server persisted data.
     * @return {Object} object representing the clientcontext.
     */
    CQ_Analytics.ClientContextMgr.prototype.get = function(toServer) {
        if (this.clientcontext == null) {
            this.init();
        }
        if (toServer) {
            return this.clientcontextToServer;
        }
        return this.clientcontext;
    };

    /**
     * Registers a session store. The current ClickstreamcloudManager will handle its own persistence store
     * depending on updates done into the registred session store.
     * @param {CQ_Analytics.SessionStore} sessionstore The session store
     */
    CQ_Analytics.ClientContextMgr.prototype.register = function(sessionstore) {
        if (this.clientcontext == null) {
            this.init();
        }
        var ccm = this;
        
        this.clientcontext[sessionstore.getName()] = sessionstore.getData();
        this.stores[sessionstore.getName()] = sessionstore;
        CQ_Analytics.StoreRegistry.register(sessionstore);

        var config = this.getStoreConfig(sessionstore.getName());
        if (config["stats"] !== false && config["stats"] != "false") {
            this.clientcontextToServer[sessionstore.getName()] = sessionstore.getData(config["excludedFromStats"]);
        }

        if( this.initTimer ) {
            window.clearTimeout(this.initTimer);
            this.initTimer = null;
        }
        
        var timeout = this.isConfigLoaded && typeof this.config['initializationEventTimer'] !== 'undefined' ? 
                this.config['initializationEventTimer'] : this.INITIALIZATION_EVENT_TIMER ;
                
        this.initTimer = window.setTimeout(function() {
            ccm.fireEvent("storesinitialize");
            ccm.areStoresInitialized = true;
        }, timeout);

        //auto update current obj if sessionstore is updated
        sessionstore.addListener("update", function() {
            ccm.update(sessionstore);
        });

        CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(sessionstore);

        //clear sessionstore if clientcontext is cleared
        this.addListener("clear", function() {
            sessionstore.clear();
        });

        this.fireEvent("storeregister", sessionstore);
        this.fireEvent("storeupdate", sessionstore);
    };

    /**
     * Updates a session store. The current registred session store with the same name is updated by the given one.
     * @param {CQ_Analytics.SessionStore} sessionstore The session store
     */
    CQ_Analytics.ClientContextMgr.prototype.update = function(sessionstore) {
        if (this.clientcontext == null) {
            this.init();
        }
        this.clientcontext[sessionstore.getName()] = sessionstore.getData();

        var config = this.getStoreConfig(sessionstore.getName());
        if (config["stats"] !== false && config["stats"] != "false") {
            this.clientcontextToServer[sessionstore.getName()] = sessionstore.getData(config["excludedFromStats"]);
        }
        this.fireEvent("storeupdate", sessionstore);
    };

    /**
     * Starts the posting.
     */
    CQ_Analytics.ClientContextMgr.prototype.startPosting = function() {
        return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting();
    };

    /**
     * Stops the posting.
     */
    CQ_Analytics.ClientContextMgr.prototype.stopPosting = function() {
        return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting();
    };

    /**
     * Posts the current clientcontext object to the server (occurs only if posting is started).
     */
    CQ_Analytics.ClientContextMgr.prototype.post = function() {
        return CQ_Analytics.ClientContextMgr.ServerStorage.post();
    };

    /**
     * Returns the current clientcontext object in "JCR style"
     * o.property = value --> ./property = value
     * o.level1.property = value --> ./level1/property = value
     * 2 levels only
     * @return {Object} object representing the clientcontext in "JCR style"
     * @private
     */
    CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR = function() {
        return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR();
    };

    //inheritDoc
    CQ_Analytics.ClientContextMgr.prototype.getName = function() {
        return this.STORENAME;
    };

    //inheritDoc
    CQ_Analytics.ClientContextMgr.prototype.clear = function() {
        this.clientcontext = null;
        this.clientcontextToServer = null;
        this.fireEvent("clear");
    };

    /**
     * Returns the registered store looked up by name.
     * @param {String} name Name of the store to retrieve
     * @return {CQ_Analytics.SessionStore} The registered store or null.
     * @since 5.5
     */
    CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore = function(name) {
        return this.stores && this.stores[name] ? this.stores[name] : null;
    };

    /**
     * Loads the config and fires <code>configloaded</code> and <code>storesloaded</code> events.
     */
    CQ_Analytics.ClientContextMgr.prototype.loadConfig = function(c, autoConfig) {
        var setConfig = function(ccm, config) {
            if ( typeof config === "undefined" ) {
                config = {};
            }
            ccm.config = config;

            ccm.isConfigLoaded = true;
            ccm.fireEvent("configloaded");
            ccm.fireEvent("storesloaded");
            ccm.areStoresLoaded = true;
            
        };
        
        if( c ) {
            setConfig(this, c);
        } else {
            if( !autoConfig ) {
                //asynchronous load
                var params = {};
                params["path"] = CQ_Analytics.Utils.getPagePath();
                params["cq_ck"] = new Date().valueOf();
                var url = this.CONFIG_PATH;
                url += "?" + CQ_Analytics.Utils.urlEncode(params);

                CQ_Analytics.Utils.load(url, function(data, status, response) {
                    var config = {};
                    try {
                        config = eval("config = " + response.responseText);
                    } catch(error) {}
                    setConfig(this, config);
                }, this);
            } else {
                setConfig(this, {});
            }
        }
    };

    /**
     * Returns the config object.
     * @return {Object} config object if loaded, null otherwise.
     */
    CQ_Analytics.ClientContextMgr.prototype.getConfig = function() {
        return this.config;
    };

    /**
     * Returns the store config object for the give store name.
     * Shortcut to <code>config["configs"][storename]["store"]</code>.
     * @param {String} storename Request config store name.
     * @return {Object} config object if loaded, {} otherwise.
     */
    CQ_Analytics.ClientContextMgr.prototype.getStoreConfig = function(storename) {
        if (this.config &&
            this.config["configs"] &&
            this.config["configs"][storename] &&
            this.config["configs"][storename]["store"]) {
            return this.config["configs"][storename]["store"];
        }
        return {};
    };

    /**
     * Returns the edit config object for the give store name.
     * Shortcut to <code>config["configs"][storename]["edit"]</code>.
     * @param {String} storename Request config store name.
     * @return {Object} config object if loaded, {} otherwise.
     */
    CQ_Analytics.ClientContextMgr.prototype.getEditConfig = function(storename) {
        if (this.config &&
            this.config["configs"] &&
            this.config["configs"][storename] &&
            this.config["configs"][storename]["edit"]) {
            return this.config["configs"][storename]["edit"];
        }
        return {};
    };

    /**
     * Returns the UI config object for the give store name.
     * Shortcut to <code>config["configs"][storename]["ui"]</code>.
     * @param {String} storename Request config store name.
     * @return {Object} config object if loaded, {} otherwise.
     */
    CQ_Analytics.ClientContextMgr.prototype.getUIConfig = function(storename) {
        if (this.config &&
            this.config["configs"] &&
            this.config["configs"][storename] &&
            this.config["configs"][storename]["ui"]) {
            return this.config["configs"][storename]["ui"];
        }
        return {};
    };

    /**
     * Returns the initial data for the give store name.
     * Shortcut to <code>config["data"][storename]</code>.
     * @param {String} storename Request config store name.
     * @return {Object} data object if loaded, {} otherwise.
     */
    CQ_Analytics.ClientContextMgr.prototype.getInitialData = function(storename) {
        if (this.config &&
            this.config["data"] &&
            this.config["data"][storename]) {
            return this.config["data"][storename];
        }
        return {};
    };

    /**
     * Returns the registered stores.
     * @return {Object} All registered stores
     * @since 5.5
     */
    CQ_Analytics.ClientContextMgr.prototype.getStores = function() {
        return this.stores;
    };

    /**
     * Executes the callback when the current ClientContextMgr is ready, i.e. when all stores are loaded.
     * @param {Function} callback Function to execute on ready
     * @param {Object} scope (optional) The execution scope; window object if null
     * @since 5.5
     */
    CQ_Analytics.ClientContextMgr.prototype.onReady = function(callback, scope) {
        if( callback ) {
            if( this.areStoresLoaded) {
                callback.call(scope);
            } else {
                this.addListener("storesloaded", callback, scope);
            }
        }
    };

    /**
     * @deprecated since 6.2, use ContextHub instead
     */
    CQ_Analytics.ClientContextMgr = new CQ_Analytics.ClientContextMgr();

    /**
     * @type {CQ_Analytics.CCM}
     * @deprecated since 6.2, use ContextHub instead
     */
    CQ_Analytics.CCM = CQ_Analytics.ClientContextMgr;

    //backward compatibility
    /**
     * @deprecated since 6.2, use ContextHub instead
     */
    CQ_Analytics.ClickstreamcloudMgr = CQ_Analytics.CCM;

    //just kept for compatibility with internal name during 5.5 dev
    /**
     * @deprecated since 6.2, use ContextHub instead
     */
    CQ_Analytics.ContextCloudMgr = CQ_Analytics.CCM;

    //Path to the clientcontext on the server. To be defined in app.
    CQ_Analytics.ClientContextMgr.PATH = null;

    /**
     * Prepends the client context path to the provided url.
     * @param {String} url URL to prepend
     * @return {String} the computed url
     * @since 5.5
     */
    CQ_Analytics.ClientContextMgr.getClientContextURL = function(url) {
        return CQ_Analytics.ClientContextMgr.PATH + url;
    };

    //inits the CCM store in a different thread.
    window.setTimeout(function() {
        CQ_Analytics.CCM.init();
    }, 1);

    CQ_Analytics.Utils.addListener(window, "unload", function() {
        try {
            for(var p in CQ_Analytics.ClientContextMgr) {
                delete CQ_Analytics.ClientContextMgr[p];
            }
            CQ_Analytics.ClientContextMgr = null;
        } catch(error) {}
        CQ_Analytics.CCM = null;
    });
}
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2011 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
/**
 * @class CQ_Analytics.ClientContextMgr.ServerStorage
 */
if( window.CQ_Analytics
    && window.CQ_Analytics.ClientContextMgr && ! window.CQ_Analytics.ClientContextMgr.ServerStorage ) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.ClientContextMgr.ServerStorage = function() {
        //posting is by default set false: no stats by default. CQ_Analytics.CCM.startPosting() is required.
        this.posting = false;
        this.initialized = false;
    };

    /**
     * @cfg {Number} POST_MODE_PAGELOAD
     * Page load mode constant: POST on every page load.
     * @final
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD = 0x1;

    /**
     * @cfg {Number} POST_MODE_TIMER
     * Timer mode constant: POST defined by an time interval.
     * @final
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER = 0x2;

    /**
     * @cfg {Number} POST_MODE_DATAUPDATE
     * Data update mode constant: POST if one session store data is updated.
     * @final
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE = 0x4;

    /**
     * @cfg {Number} POST_TIMER
     * Interval in seconds to POST in POST_MODE_TIMER mode (defaults to 600s).
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER = 600;

    /**
     * @cfg {Number} POST_PROCESS_TIMER
     * Interval in seconds to check if POST is needed in POST_MODE_TIMER mode (defaults to 60s).
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER = 60;

    /**
     * @cfg {Number} POST_MODE
     * The POST mode of the clickstreamcloud. Must be a & value of the following properties:<ul>
     * <li>POST_MODE_PAGELOAD: POST on page load</li>
     * <li>POST_MODE_TIMER: POST on timer interval</li>
     * <li>POST_MODE_DATAUPDATE: POST when one session store data is updated</li>
     * </ul>
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE = 0x6;

    /**
     * @cfg {Number} POST_PATH
     * Beginning of the path used by post.
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH = "/var/statistics/";

    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init = function() {
        if (this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)) {
            var currentObj = this;
            var func = function() {
                currentObj.timer = window.setInterval(function() {
                    try {
                        var lastPost = parseInt(currentObj.data["lastPost"]);
                        var doPost = false;
                        if (isNaN(lastPost)) {
                            doPost = true;
                        } else {
                            var currentTime = new Date().getTime();
                            if (currentTime > lastPost + CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER * 1000) {
                                doPost = true;
                            }
                        }
                    } catch(error) {
                    }
                    if (doPost) {
                        currentObj.post();
                    }
                }, CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER * 1000);
            };

            func.call(this);
        }
        this.initialized = true;
    };

    /**
     * Returns if mode is defined.
     * @param {Number} mode Mode to check.
     * @return {Boolean} true if mode is defined.
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode = function(mode) {
        return (CQ_Analytics.CCM.POST_MODE & mode) > 0;
    };

    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration = function(sessionstore) {
        if( ! this.initialized ) {
            this.init();
        }
        if (this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)) {
            sessionstore.addListener("persist", function() {
                //if a store has been persisted, call current persist
                CQ_Analytics.ClientContextMgr.ServerStorage.post(sessionstore);
            });
        }
    };

    /**
     * Starts the posting.
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting = function() {
        this.posting = true;
    };

    /**
     * Stops the posting.
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting = function() {
        this.posting = false;
    };

    /**
     * Posts the current clientcontext object to the server (occurs only if posting is started).
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post = function(storeName, forced) {
        if (this.posting || forced) {
            try {
                var obj = this.getCCMToJCR(storeName);
                var currentTime = CQ_Analytics.Utils.getTimestamp();
                obj["./jcr:primaryType"] = "nt:unstructured";
                obj["./sessionId"] = CQ_Analytics.CCM.getSessionId();
                var url = this.POST_PATH + "clientcontext/";
                if (CQ_Analytics.CCM.isAnonymous()) {
                    var sessionSplit = CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(), 2, "/");
                    url += "anonymous/" + sessionSplit + "/" + currentTime;
                } else {
                    url += "users/" + CQ_Analytics.CCM.getId() + "/" + currentTime;
                }
                CQ_Analytics.Utils.post(url, null, obj);
                this.lastPost = currentTime;
            } catch(error) {
            }
        }
    };

    /**
     * Returns the current clientcontext object in "JCR style"
     * o.property = value --> ./property = value
     * o.level1.property = value --> ./level1/property = value
     * 2 levels only
     * @return {Object} object representing the clientcontext  in "JCR style"
     * @private
     */
    CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR = function(storeName) {
        var obj = CQ_Analytics.CCM.get(true);

        var resObj = {};
        for (var key in obj) {
            if( !storeName || key == storeName ) {
                var ov = obj[key], k = encodeURIComponent(key);
                var type = typeof ov;
                if (type == 'object') {
                    for (var l2key in ov) {
                        var v = ov[l2key];
                        //trick for tags
                        l2key = l2key.replace(":", "/");
                        resObj[ "./" + key + "/./" + l2key ] = v;
                    }
                } else {
                    resObj[ "./" + key] = ov;
                }
            }
        }

        return resObj;
    };

    CQ_Analytics.ClientContextMgr.ServerStorage = new CQ_Analytics.ClientContextMgr.ServerStorage();
    
    //support backward compatibility
    
    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD = CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER = CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE = CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_TIMER = CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER = CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_MODE = CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;

    /**
     * @deprecated
     * @see CQ_Analytics.ClientContextMgr.ServerStorage
     */
    CQ_Analytics.ClickstreamcloudMgr.POST_PATH = CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH;
}


/*
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2012 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
/**
 * The <code>CQ_Analytics.Percentile</code> object is a singleton providing utility functions
 * for matching users to percentiles.
 * @singleton
 * @class CQ_Analytics.Percentile
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.Percentile = {};

CQ_Analytics.Percentile.matchesPercentiles = function(percentiles) {
    
    var percentileValue = ClientContext.get("/surferinfo/percentile");
    if ( !percentileValue ) {
        percentileValue = Math.round(Math.random() * 100);
        ClientContext.set("/surferinfo/percentile", percentileValue);
    } else {
        percentileValue = Number(percentileValue);
    }
    
    for ( var i = 0 ; i < percentiles.length ; i++ ) {
        var percentile = percentiles[i];
        if (( Number(percentile.start) <= percentileValue ) && ( percentileValue < Number(percentile.end)))
            return true;
    }
    
    return false;
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.SegmentMgr</code> object is a singleton providing methods for registration and resolution
 * of different segments.
 * @singleton
 * @deprecated since 6.2, use ContextHub instead
 * @class CQ_Analytics.SegmentMgr
 * @extends CQ_Analytics.SessionStore
 */
if (!CQ_Analytics.SegmentMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.SegmentMgr = function() {
        this.SEGMENTATION_ROOT = "/etc/segmentation";
        this.SEGMENT_SELECTOR = ".segment.js";
        this.SEGMENTATION_SCRIPT_LOADER = "cq-segmentation-loader";

        this.segments = {};
        this.boosts = {};

        var currentObj = this;
        this.fireUpdate = function() {
            currentObj.fireEvent("update");
        };

        this.init();
    };

    CQ_Analytics.SegmentMgr.prototype = new CQ_Analytics.SessionStore();

    /**
     * @cfg {String} STORENAME
     * Store internal name
     * @final
     * @private
     */
    CQ_Analytics.SegmentMgr.prototype.STORENAME = "segments";

    /**
     * Registers a segment.
     * @param {String} segmentPath Path to the segment.
     * @param {String} rule Boolean JS expression defining the segment.
     * @param {Number} boost (Optional) Segment boost (defaults to 0).
     */
    CQ_Analytics.SegmentMgr.prototype.register = function(segmentPath, rule, boost) {
        this.segments[segmentPath] = rule;
        if ( this.rulesCache && this.rulesCache[segmentPath] ) {
            this.rulesCache[segmentPath] = false;
        }
        this.boosts[segmentPath] = !isNaN(boost) ? parseInt(boost) : 0;
        this.fireUpdate();
    };

    /**
     * Resolves an array of segments. Resolution depends on operator:<ul>
     * <li>operator is AND: success if all segments of array resolve.</li>
     * <li>operator is OR: success when finding one segment of array resolving.</li>
     * </ul>
     * @param {String[]} segmentPaths Array of segment paths.
     * @param {Object} clientcontext  Object containing values to try to resolve segments.
     * @param {String} operator (Optional) Operator: "OR" / "AND" (defaults to "OR").
     * @return {Boolean/String} True if resolution success, false otherwise. String containing error description
     * if any execption occurs during resolution.
     */
    CQ_Analytics.SegmentMgr.prototype.resolveArray = function(segmentPaths, clientcontext, operator) {
        clientcontext = clientcontext || CQ_Analytics.ClientContextMgr.get();

        if (!(segmentPaths instanceof Array)) {
            return this.resolve(segmentPaths, clientcontext);
        }

        operator = ( operator == "AND" ? "AND" : "OR");

        var finalRes = ( operator == "AND");
        for (var i = 0; i < segmentPaths.length; i++) {
            var s = segmentPaths[i];
            var res = this.resolve(s, clientcontext);
            if (operator == "AND") {
                if (res !== true) return res;
            } else {
                if (res === true) return true;
            }
        }
        return finalRes;
    };

    /**
     * Resolves a segment. Tries to eval the rule of the segment the given clientcontext object.
     * @param {String} segmentPath Segment path.
     * @param {Object} clientcontext  Object containing values to try to resolve segments.
     * @return {Boolean/String} True if resolution success, false otherwise. String containing error description
     * if any execption occurs during resolution.
     */
    CQ_Analytics.SegmentMgr.prototype.resolve = function(segmentPath, clientcontext) {
        clientcontext = clientcontext || CQ_Analytics.ClientContextMgr.get();

        // argument check
        if (!segmentPath) return false;

        // support arrays -> looping and aggregation handled over in resolveArray()
        if (segmentPath instanceof Array) return this.resolveArray(segmentPath, clientcontext);

        // only support segments under /etc/segmentation
        if (segmentPath.indexOf(this.SEGMENTATION_ROOT) != 0) return false;

        // the root segment always matches
        if (segmentPath == this.SEGMENTATION_ROOT) return true;

        // match if there is NO rule registered for this segment
        if (!this.segments[segmentPath]) return true;

        //first resolve parents
        var parent = segmentPath.substring(0, segmentPath.lastIndexOf("/"));
        if (parent.indexOf(this.SEGMENTATION_ROOT) == 0) {
            var pres = this.resolve(parent, clientcontext);
            if (pres !== true) return pres;
        }

        //keep old names for backward compatibility
        var rules = "function(clientcontext, contextcloud, clickstreamcloud) { return true ";
        rules += " && ( " + this.segments[segmentPath] + " ) ";
        rules += ";}";

        var res = true;
        try {
            var f = null;
            this.rulesCache = this.rulesCache || {};
            if ( this.rulesCache[segmentPath] ) {
                f = this.rulesCache[segmentPath];
            } else {
                eval("f = " + rules + "");
                this.rulesCache[segmentPath] = f;
            }
            var e = (f == null || f(clientcontext,clientcontext,clientcontext));
            res = res && (e === true);
        } catch(error) {
            return "Unresolved - Error while evaluating segment " + segmentPath + " : " + error.message;
        }
        return res;
    };

    /**
     * Returns all resolving segments for the given clientcontext.
     * @param {Object} clientcontext  Object containing values to try to resolve segments.
     * @return {String[]} Array of resolving segments.
     */
    CQ_Analytics.SegmentMgr.prototype.getResolved = function(clientcontext) {
        clientcontext = clientcontext || CQ_Analytics.ClientContextMgr.get();
        var res = new Array();
        for (var path in this.segments) {
            if (this.resolve(path, clientcontext) === true) {
                res.push(path);
            }
        }
        return res;
    };

    /**
     * Returns the max boost of an array of segments. Segment must resolve the given clientcontext.
     * @param {String[]} segmentPaths Array of segment paths.
     * @param {Object} clientcontext  Object containing values to try to resolve segments.
     * @return {Number} The max boost of the resolving segments.
     */

    CQ_Analytics.SegmentMgr.prototype.getMaxBoost = function(segmentPaths, clientcontext) {
        if (!(segmentPaths instanceof Array)) {
            return this.getBoost(segmentPaths);
        }
        var boost = 0;
        for (var i = 0; i < segmentPaths.length; i++) {
            var s = segmentPaths[i];
            if (this.resolve(s, clientcontext) === true) {
                var b = this.boosts[s] || 0;
                if (b > boost) {
                    boost = b;
                }
            }
        }
        return boost;
    };

    /**
     * Returns the boost of a segment.
     * @param {Array} segmentPath Path of the segment
     * @return {Number} Boost of the segment.
     */
    CQ_Analytics.SegmentMgr.prototype.getBoost = function(segmentPath) {
        if (!(segmentPath instanceof Array)) {
            segmentPath = [segmentPath];
        }
        return this.boosts[segmentPath] || 0;
    };

    /**
     * Reloads the given segment.
     * @param {String} path Path to the segment.
     */
    CQ_Analytics.SegmentMgr.prototype.reload = function(path) {
        var url = path;
        if( !url ) {
            url = this.SEGMENTATION_ROOT;
        }

        if(url) {
            if(url.indexOf(this.SEGMENT_SELECTOR) == -1) url += this.SEGMENT_SELECTOR;
            try {
                /* adding cache killer parameter as we are reloading segments */
                url += (url.indexOf('?') === -1 ? '?' : '&') + '_=' + (new Date().getTime());
                CQ_Analytics.Utils.load(url,function(config, status, response) {
                    if(response && response.responseText) {
                        eval(response.responseText);
                    }
                },this);
                var response = CQ.HTTP.get(scripts[i].src);
            } catch(err) {}
        }
    };

    CQ_Analytics.SegmentMgr.prototype.getSessionStore = function() {
        return this;
    };

    //inheritDoc
    CQ_Analytics.SegmentMgr.prototype.getProperty = function(name) {
        return name;
    };

    //inheritDoc
    CQ_Analytics.SegmentMgr.prototype.getLink = function(name) {
        return name + ".html";
    };

    //inheritDoc
    CQ_Analytics.SegmentMgr.prototype.getLabel = function(name) {
        if (name) {
            var label = name;
            var index = label.lastIndexOf("/");
            if (index != -1) {
                label = label.substring(index + 1, label.length);
            }
            var res = this.resolve(name);
            if (res === true) {
                return label;
            } else {
                if (res !== true) {
                    return "<span class=\"invalid\" title=\"" + res + "\" alt=\"" + res + "\">" + label + "</span>";
                }
            }
        }
        return name;
    };

    //inheritDoc
    CQ_Analytics.SegmentMgr.prototype.getPropertyNames = function() {
        return this.getResolved();
    };

    CQ_Analytics.SegmentMgr = new CQ_Analytics.SegmentMgr();

    /**
     * Loads the segments at URL: path + ".segment.js".
     * Fires "segmentsload" event.
     * @param {String} path Path from where segments are loaded
     * @static
     * @since 5.5
     */
    CQ_Analytics.SegmentMgr.loadSegments = function(path) {
        CQ_Analytics.SegmentMgr.areSegmentsLoaded = false;

        /* do not request for segments if path is not set */
        if (!path || (path.length === 0)) {
            /* announce that segments are loaded so event handlers can be executed */
            CQ_Analytics.SegmentMgr.areSegmentsLoaded = true;
            CQ_Analytics.SegmentMgr.fireEvent("segmentsload");
        } else {
            //jquery will do the eval
            $CQ.ajax({
                url: CQ.shared.HTTP.externalize(path + this.SEGMENT_SELECTOR),
                dataType: 'script',
                async: true,
                cache: true
            }).complete(function() {
                CQ_Analytics.SegmentMgr.areSegmentsLoaded = true;
                CQ_Analytics.SegmentMgr.fireEvent("segmentsload");
            });
        }
    };

    /**
     * Renders the current segments found in the SegmentMgr store. Rendering is appended to the provided
     * target id.
     * @param {CQ_Analytics.SessionStore} store The SegmentMgr store
     * @param {String} targetId The target id
     * @static
     * @since 5.5
     */
    CQ_Analytics.SegmentMgr.renderer = function(store, targetId) {
        if( store && store.STORENAME == CQ_Analytics.SegmentMgr.STORENAME ) {
            var props = store.getPropertyNames();
            var elements=[];
            elements.push("<div>");
            for(var i = 0; i < props.length; i++) {
                var name = props[i];
                elements.push("<span title=\""+store.getProperty(name)+"\" >"
                          + "<a href=\""+CQ.shared.HTTP.externalize(store.getLink(name))+"\" "
                          + " title=\""+store.getProperty(name)+"\" >"
                          + store.getLabel(name)
                          + "</a>"
                          + "</span>");
            }
            elements.push("</div>");
            $CQ("#" + targetId).children().remove();
            $CQ("#" + targetId).append(elements.join(""));
        }
    };

    CQ_Analytics.ClientContextMgr.addListener("storeupdate", CQ_Analytics.SegmentMgr.fireUpdate);

    CQ_Analytics.Utils.addListener(window, "unload", function() {
        try {
            for(var p in CQ_Analytics.SegmentMgr) {
                delete CQ_Analytics.SegmentMgr[p];
            }
        } catch(error) {}
        CQ_Analytics.SegmentMgr = null;
    });
}

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.StrategyMgr</code> object is a singleton managing registration of different selection
 * strategies and selection of teasers
 * @class CQ_Analytics.StrategyMgr
 * @singleton
 * @deprecated since 6.2, use ContextHub instead
 */
if (!CQ_Analytics.StrategyMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.StrategyMgr = function() {
        this.strategies = {};
    };

    CQ_Analytics.StrategyMgr.prototype = {};

    /**
     * Returns if a strategy is registered or not.
     * @param {String} strategy Strategy name
     * @return {Boolean} true if strategy registred. False otherwise.
     */
    CQ_Analytics.StrategyMgr.prototype.isRegistered = function(strategy) {
        return !!this.strategies[strategy];
    };

    /**
     * Registers a selection strategy. Selection function must return true or false,
     * and has one Array parameter: list of all teasers.
     * @param {String} strategy Strategy name
     * @param {Function} func Selection function
     */
    CQ_Analytics.StrategyMgr.prototype.register = function(strategy, func) {
        if (typeof func == 'function') {
            this.strategies[strategy] = func;
        }
    };

    /**
     * Chooses one teaser if the teasers list depending on the specified strategy.
     * @param {String} strategy Strategy name
     * @param {Array} teasers List of teasers
     * @return {Object} The selected teaser
     */
    CQ_Analytics.StrategyMgr.prototype.choose = function(strategy, teasers) {
        //no need to apply a strategy to choose in a list of one item!
        if (teasers.length == 1) return teasers[0];

        if (this.strategies[strategy]) {
            return this.strategies[strategy].call(this, teasers);
        }

        return null;
    };

    CQ_Analytics.StrategyMgr = new CQ_Analytics.StrategyMgr();
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
// Strategy which selects a teaser depending on the current surfer clickstream score
CQ_Analytics.StrategyMgr.register("clickstream-score", function(teasers) {
    //no need to apply a complex logic choose one item in a set of one!
    if( teasers.length == 1) {
        return teasers[0];
    }

    var selectedTeasers = [];
    if (window.CQ_Analytics
        && window.CQ_Analytics.TagCloudMgr) {
        var tags = CQ_Analytics.TagCloudMgr.getTags();
        tags = tags || {};
        var selectedTeasersWeight =  -1;
        for(var i = 0;i < teasers.length; i++) {
            var currentTeaserWeight = 0;
            var teaserTags = teasers[i].tags;
            if( teaserTags ) {
                for(var j = 0;j<teaserTags.length; j++) {
                    var tagID = teaserTags[j].tagID;
                    currentTeaserWeight += parseInt(tags[tagID]) || 0;
                }
            }

            if( currentTeaserWeight == selectedTeasersWeight) {
                selectedTeasers.push(teasers[i]);
            } else {
                if( currentTeaserWeight > selectedTeasersWeight) {
                    //new max weight, clear list, add current teaser and change max weight
                    selectedTeasers = [];
                    selectedTeasers.push(teasers[i]);
                    selectedTeasersWeight = currentTeaserWeight;
                }
            }
        }
    } else {
        //fallback: random
        selectedTeasers = teasers;
    }

    if( selectedTeasers.length == 1) {
        return selectedTeasers[0];
    }

    //at this point 2 cases:
    // - no tagcloud manager, selected teasers are all resolved teasers
    // - can have several teasers with same max weight

    // ==> random choose
    var random = null;
    if (window.CQ_Analytics
        && window.CQ_Analytics.PageDataMgr) {
        random = CQ_Analytics.PageDataMgr.getProperty("random");
    }
    if( ! random ) {
        random = window.CQ_StrategyRandom;
    }
    if( ! random ) {
        random = window.CQ_StrategyRandom = Math.random();
    }

    if( parseFloat(random) > 1) {
        random = 1 / random;
    }

    if( parseFloat(random) == 1) {
        random = 0;
    }
    var ranNum = Math.floor(random*selectedTeasers.length);
    return selectedTeasers[ranNum];
});
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
// Strategy which selects the first teaser
CQ_Analytics.StrategyMgr.register("first", function(teasers) {
    return teasers[0];
});
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
// Strategy which random selects a teaser
CQ_Analytics.StrategyMgr.register("random", function(teasers) {
    var random = null;
    if (window.CQ_Analytics
        && window.CQ_Analytics.PageDataMgr) {
        random = CQ_Analytics.PageDataMgr.getProperty("random");
    }
    if( ! random ) {
        random = window.CQ_StrategyRandom;
    }
    if( ! random ) {
        random = window.CQ_StrategyRandom = Math.random();
    }

    if( parseFloat(random) > 1) {
        random = 1 / random;
    }

    if( parseFloat(random) == 1) {
        random = 0;
    }

    var ranNum = Math.floor(random*teasers.length);
    return teasers[ranNum];
});
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.PageDataMgr</code> object is a store providing page data information.
 * @class CQ_Analytics.PageDataMgr
 * @extends CQ_Analytics.SessionStore
 * @deprecated since 6.2, use ContextHub instead
 */
if (!CQ_Analytics.PageDataMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.PageDataMgr = function() {};

    CQ_Analytics.PageDataMgr.prototype = new CQ_Analytics.SessionStore();

    /**
     * @cfg {String} STORENAME
     * Store internal name
     * @final
     * @private
     */
    CQ_Analytics.PageDataMgr.prototype.STORENAME = "pagedata";
    
    /**
     * internal name for the setExperience etc cookie.
     * @final
     * @private
     */
    CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE = "cq-forceexperience";

    //inheritDoc
    CQ_Analytics.PageDataMgr.prototype.init = function() {
        this.data = {};
        for (var p in this.initProperty) {
            this.data[p] = this.initProperty[p];
        }
        this.initialized = true;
        this.fireEvent("initialize",this);
        this.fireEvent("update");
    };

    //inheritDoc
    CQ_Analytics.PageDataMgr.prototype.getLabel = function(name) {
        return name;
    };

    //inheritDoc
    CQ_Analytics.PageDataMgr.prototype.getLink = function(name) {
        return "";
    };

    
    /**
     * Sets a cookie that forces the display of a specific teaser page in a
     * teaser when loading the next page.
     * @param {String} path Path to the teaserpage to show.
     */
    CQ_Analytics.PageDataMgr.prototype.setExperience = function(path) {
        CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE, path, "/");
    };
    
    /**
     * Retrieves the content of the force experience cookie. See {@link #setExperience}.
     * If no cookie is set null or "" is returned.
     * @return {Object}
     */
    CQ_Analytics.PageDataMgr.prototype.getExperience = function() {
        return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE, "/");
    };
    
    /**
     * Removes the force experience cookie. See {@link #setExperience}.
     */
    CQ_Analytics.PageDataMgr.prototype.clearExperience = function() {
        CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE, "/");
    };
    
    CQ_Analytics.PageDataMgr = new CQ_Analytics.PageDataMgr();

    CQ_Analytics.CCM.addListener("configloaded", function() {
        this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
        this.init();

        //registers Page Data to clickstreamcloud manager
        CQ_Analytics.CCM.register(this);

    }, CQ_Analytics.PageDataMgr);
}

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>BrowserInfoInstance</code> object is a singleton providing utility methods to retrieve client browser information.
 * @class CQ_Analytics.BrowserInfoInstance
 * @singleton
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.BrowserInfo = function() {
    var ua = navigator.userAgent.toLowerCase();
    var check = function(r) {
        return r.test(ua);
    };

    var getBrowser = function() {
        if (check(/opera/)) {
            return {
                browserFamily: "Opera",
                browserVersion: ""
            };
        }

        if (check(/trident/)) {
            var versions = {
                '7.0': '11',
                '6.0': '10',
                '5.0': '9',
                '4.0': '8'
            };
            var match = ua.match(/trident\/([0-9\.]*)/);
            var version = '';

            if (match && match.length > 1) {
                version = versions[match[1]];
            }

            return {
                browserFamily: "IE",
                browserVersion: version
            };
        }

        if (check(/edge/)) {
            var match = ua.match(/edge\/([0-9]*)/);
            var version = '';

            if (match && match.length > 1) {
                version = match[1];
            }

            return {
                browserFamily: "Edge",
                browserVersion: version
            };
        }

        if (check(/chrome/)) {
            return {
                browserFamily: "Chrome",
                browserVersion: ""
            };
        }

        if (check(/safari/)) {
            if (check(/applewebkit\/4/)) { // unique to Safari 2
                return {
                    browserFamily: "Safari",
                    browserVersion: "2"
                };
            }

            if (check(/version\/3/)) {
                return {
                    browserFamily: "Safari",
                    browserVersion: "3"
                };
            }

            if (check(/version\/4/)) {
                return {
                    browserFamily: "Safari",
                    browserVersion: "4"
                };
            }

            if (check(/version\/5/)) {
                return {
                    browserFamily: "Safari",
                    browserVersion: "5"
                };
            }

            if (check(/version\/6/)) {
                return {
                    browserFamily: "Safari",
                    browserVersion: "6"
                };
            }

            return {
                browserFamily: "Safari",
                browserVersion: "7 or higher"
            };
        }

        if (check(/webkit/)) {
            return {
                browserFamily: "WebKit",
                browserVersion: ""
            };
        }

        if (check(/msie/)) {
            if (check(/msie 6/)) {
                return {
                    browserFamily: "IE",
                    browserVersion: "6"
                };
            }

            if (check(/msie 7/)) {
                return {
                    browserFamily: "IE",
                    browserVersion: "7"
                };
            }

            if (check(/msie 8/)) {
                return {
                    browserFamily: "IE",
                    browserVersion: "8"
                };
            }

            if (check(/msie 9/)) {
                return {
                    browserFamily: "IE",
                    browserVersion: "9"
                };
            }

            if (check(/msie 10/)) {
                return {
                    browserFamily: "IE",
                    browserVersion: "10"
                };
            }

            return {
                browserFamily: "IE",
                browserVersion: "11 or higher"
            };
        }

        if (check(/gecko/)) {
            if (check(/rv:1\.8/)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "2"
                };
            }

            if (check(/rv:1\.9/)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "3"
                };
            }

            if (check(/rv:2.0/)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "4"
                };
            }

            if (check(/rv:5./)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "5"
                };
            }

            if (check(/rv:6./)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "6"
                };
            }

            if (check(/rv:7./)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "7"
                };
            }

            if (check(/rv:8./)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "8"
                };
            }

            if (check(/rv:9./)) {
                return {
                    browserFamily: "Firefox",
                    browserVersion: "9"
                };
            }

            return {
                browserFamily: "Firefox",
                browserVersion: "10 or higher"
            };
        }

        var isAir = check(/adobeair/);
        if (isAir) {
            return {
                browserFamily: "Adobe AIR",
                browserVersion: ""
            };
        }

        return {
            browserFamily: "Unresolved",
            browserVersion: "Unresolved"
        };
    };

    var getOS = function() {
        if (check(/windows 98|win98/)) {
            return "Windows 98";
        }

        if (check(/windows nt 5.0|windows 2000/)) {
            return "Windows 2000";
        }

        if (check(/windows nt 5.1|windows xp/)) {
            return "Windows XP";
        }

        if (check(/windows nt 5.2/)) {
            return "Windows Server 2003";
        }

        if (check(/windows nt 6.0/)) {
            return "Windows Vista";
        }

        if (check(/windows nt 6.1/)) {
            return "Windows 7";
        }

        if (check(/windows nt 6.2/)) {
            return "Windows 8";
        }

        if (check(/windows nt 6.3/)) {
            return "Windows 8.1";
        }

        if (check(/windows nt 10.0/)) {
            return "Windows 10";
        }

        if (check(/windows nt 4.0|winnt4.0|winnt/)) {
            return "Windows NT 4.0";
        }

        if (check(/windows me/)) {
            return "Windows ME";
        }

        if (check(/mac os x/)) {
            if (check(/ipad/) || check(/iphone/)) {
                return "iOS";
            }
            return "Mac OS X";
        }

        if (check(/macintosh|mac os/)) {
            return "Mac OS";
        }

        if (check(/android/)) {
            return "Android";
        }

        if (check(/linux/)) {
            return "Linux";
        }

        return "Unresolved";
    };

    var getDeviceType = function() {
        if (check(/ipad/)) {
            return "iPad";
        }

        if (check(/iphone/)) {
            return "iPhone";
        }

        if (check(/mobi/)) {
            return "Mobile";
        }

        return "Desktop";
    };

    var b = getBrowser.call();
    this.browserFamily = b.browserFamily;
    this.browserVersion = b.browserVersion;

    this.OSName = getOS.call();
    this.deviceType = getDeviceType.call();
    this.ua = ua;

    //protocol
    var isSecure = /^https/i.test(window.location.protocol);

    //resolution
    this.screenResolution = screen.width + "x" + screen.height;
};

CQ_Analytics.BrowserInfo.prototype = {
    /**
     * Returns the browser name.
     * @return {String} Browser name.
     */
    getBrowserName: function() {
        return this.browserFamily + " " + this.browserVersion;
    },

    /**
     * Returns the browser family.
     * @return {String} Browser family.
     */
    getBrowserFamily: function() {
        return this.browserFamily;
    },

    /**
     * Returns the browser version.
     * @return {String} Browser version.
     */
    getBrowserVersion: function() {
        return this.browserVersion;
    },

    /**
     * Returns the operating system name.
     * @return {String} OS name.
     */
    getOSName: function() {
        return this.OSName;
    },

    /**
     * Returns the screen resolution.
     * @return {String} Screen resolution.
     */
    getScreenResolution: function() {
        return this.screenResolution;
    },

    /**
     * Returns the device type.
     * @return {String} Device type.
     */
    getDeviceType: function() {
        return this.deviceType;
    },

    /**
     * Returns the user agent.
     * @return {String} User agent.
     */
    getUserAgent: function() {
        return this.ua;
    },

    /**
     * Returns if the device is a mobile device.
     * @return {Boolean} <code>true</code> if the device is a mobile device.
     */
    isMobile: function(deviceType) {
        if (!deviceType) {
            deviceType = this.getDeviceType();
        }
        deviceType = deviceType ? deviceType.toLowerCase() : "desktop";
        return deviceType != "desktop";
    },

    /**
     * Returns if the browser is Internet Explorer.
     * @return {Boolean}.
     */
    isIE: function(version) {
        return this.getBrowserFamily() == "IE" &&
            (version ? this.getBrowserVersion() == version : true);
    },

    /**
     * Returns if the browser is Internet Explorer 6.
     * @return {Boolean}.
     */
    isIE6: function() {
        return this.isIE("6");
    },

    /**
     * Returns if the browser is Internet Explorer 7.
     * @return {Boolean}.
     */
    isIE7: function() {
        return this.isIE("7");
    },

    /**
     * Returns if the browser is Internet Explorer 8.
     * @return {Boolean}.
     */
    isIE8: function() {
        return this.isIE("8");
    },

    /**
     * Returns if the browser is Internet Explorer 9.
     * @return {Boolean}.
     */
    isIE9: function() {
        return this.isIE("9");
    }
};

CQ_Analytics.BrowserInfoInstance = new CQ_Analytics.BrowserInfo();
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.MousePositionMgr</code> object is a singleton providing utility methods to retrieve
 * te current mouse position.
 * @class CQ_Analytics.MousePositionMgr
 * @singleton
 * @extends CQ_Analytics.SessionStore
 * @deprecated since 6.2, use ContextHub instead
 */
if (!CQ_Analytics.MousePositionMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.MousePositionMgr = function() {
        this.position = {
            "x": 0,
            "y": 0
        };

        this.getPageX = function(ev) {
            var x = ev.pageX;
            if (!x && 0 !== x) {
                x = ev.clientX || 0;
            }
            return x;
        };

        this.getPageY = function(ev) {
            var y = ev.pageY;
            if (!y && 0 !== y) {
                y = ev.clientY || 0;
            }
            return y;
        };

        var currentObj = this;

        this.timer = null;

        $CQ(document).bind("mousemove", function(event, a, b, c) {
            var e = event || window.event;
            if (e) {
                //update coordinates only every 500ms.
                if (!currentObj.timer) {
                    var x = currentObj.getPageX(e);
                    var y = currentObj.getPageY(e);
                    currentObj.timer = setTimeout(function() {
                        currentObj.setPosition(x, y);
                        currentObj.timer = null;
                    }, 500);
                }
            }
        });

        this.init();
    };

    CQ_Analytics.MousePositionMgr.prototype = new CQ_Analytics.SessionStore();

    /**
     * @cfg {String} STORENAME
     * Store internal name
     * @final
     * @private
     */
    CQ_Analytics.MousePositionMgr.prototype.STORENAME = "mouseposition";

    /**
     * Sets the current mouse position.
     * @param {Number} x X mouse position
     * @param {Number} y Y mouse position
     * @private
     */
    CQ_Analytics.MousePositionMgr.prototype.setPosition = function(x, y) {
        this.position["x"] = x;
        this.position["y"] = y;
        this.fireEvent("update");
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getProperty = function(name) {
        return this.position[name];
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getLabel = function(name) {
        return name;
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getLink = function(name) {
        return "";
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getPropertyNames = function() {
        var res = new Array();
        for (var p in this.position) {
            res.push(p);
        }
        return res;
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getSessionStore = function() {
        return this;
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.getData = function(excluded) {
        return this.position;
    };

    //inheritDoc
    CQ_Analytics.MousePositionMgr.prototype.clear = function() {
        this.position = {};
    };

    CQ_Analytics.MousePositionMgr = new CQ_Analytics.MousePositionMgr();
    CQ_Analytics.CCM.register(CQ_Analytics.MousePositionMgr);
}
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * The <code>CQ_Analytics.EventDataMgr</code> object is a store providing page data information.
 * @class CQ_Analytics.EventDataMgr
 * @extends CQ_Analytics.SessionStore
 * @deprecated since 6.2, use ContextHub instead
 */
if (!CQ_Analytics.EventDataMgr) {
    /**
     * @deprecated since 6.2, use ContextHub instead
     * @constructor
     */
    CQ_Analytics.EventDataMgr = function() {};

    CQ_Analytics.EventDataMgr.prototype = new CQ_Analytics.SessionStore();

    /**
     * @cfg {String} STORENAME
     * Store internal name
     * @final
     * @private
     */
    CQ_Analytics.EventDataMgr.prototype.STORENAME = "eventdata";

    //inheritDoc
    CQ_Analytics.EventDataMgr.prototype.init = function() {
        this.data = {};
        for (var p in this.initProperty) {
            this.data[p] = this.initProperty[p];
        }
        this.initialized = true;
        this.fireEvent("initialize",this);

        if (typeof(this.initProperty) != 'undefined') {
            this.fireEvent("update");
        }
    };

    //inheritDoc
    CQ_Analytics.EventDataMgr.prototype.getLabel = function(name) {
        return name;
    };

    //inheritDoc
    CQ_Analytics.EventDataMgr.prototype.getLink = function(name) {
        return "";
    };

    CQ_Analytics.EventDataMgr = new CQ_Analytics.EventDataMgr();

    /* initialization and registration */
    CQ_Analytics.EventDataMgr.init();
    CQ_Analytics.CCM.register(CQ_Analytics.EventDataMgr);
}
/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @deprecated since 6.2, use ContextHub instead
 */
if (!window.CQ_Context) {
    window.CQ_Context = function() {};
    window.CQ_Context.prototype = new CQ_Analytics.Observable();

    window.CQ_Context.prototype.getProfile = function() {
        return (function() {
            return {
                /**
                 *
                 */
                getUserId: function() {
                    return this.getProperty("authorizableId");
                },

                /**
                 *
                 */
                getDisplayName: function() {
                    var fn = this.getProperty("formattedName");
                    if( fn ) return fn;

                    fn = this.getProperty("displayName");
                    if( fn ) return fn;

                    //fallback
                    return this.getUserId();
                },

                /**
                 *
                 */
                getFirstname: function() {
                    return this.getProperty("givenName");
                },

                /**
                 *
                 */
                getLastname: function() {
                    return this.getProperty("familyName");
                },

                /**
                 *
                 */
                getEmail: function() {
                    return this.getProperty("email");
                },

                /**
                 *
                 * @param {String} name
                 */
                getProperty: function(name) {
                    if (window.CQ_Analytics && window.CQ_Analytics.ProfileDataMgr) {
                        return CQ_Analytics.ProfileDataMgr.getProperty(name);
                    }
                    return "";
                },

                /**
                 *
                 */
                getProperties: function() {
                    if (window.CQ_Analytics && window.CQ_Analytics.ProfileDataMgr) {
                        return CQ_Analytics.ProfileDataMgr.getData();
                    }
                    return {};
                },

                /**
                 *
                 */
                getAvatar: function() {
                    return this.getProperty("avatar");
                },

                /**
                 *
                 * @param {Function} fct
                 * @param {Object} scope
                 */
                onUpdate: function(fct, scope) {
                    if (fct && CQ_Analytics && CQ_Analytics.ProfileDataMgr) {
                        CQ_Analytics.ProfileDataMgr.addListener("update",fct,scope || this);
                    }
                }
            }
        })();
    };

    window.CQ_Context = new window.CQ_Context();
}


/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/**
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.Engine = function() {

    window.CQ_trackTeasersStats = true;

    function isEditMode() {
        // ensure boolean return value
        return !!( window.CQ && CQ.WCM && CQ.WCM.isEditMode() );
    }

    function isPreviewMode() {
        return !!(window.CQ && CQ.WCM && CQ.WCM.isPreviewMode())
    }

    /**
     * Returns a jQuery promise for an editable given its path.
     * During page load, editables might not be available right away, or it is
     * known that this editable will be created and one wants to listen for it.
     * This promise will resolve when the editable is present, with the editable
     * as argument.
     *
     * @param path the editable path
     * @returns {*} jQuery promise object - use promise.done(function(editable) {...}) to handle it
     */
    function getEditablePromise(path) {
        var deferred = $CQ.Deferred();
        var editable = CQ.WCM.getEditable(path);
        if (editable) {
            // already available, can resolve right away
            deferred.resolve(editable);
        } else {
            // not ready yet, extjs still loading, need to hook into editableready event
            CQ.WCM.onEditableReady(path, function(editable) {
                deferred.resolve(editable);
            });
        }
        return deferred.promise();
    }

    function initTracking(teaser, trackingURL) {
        if (!CQ_Analytics.loadedTeasersStack) {
            // store in loadedTeasersStack the list of teasers shown in the page.
            CQ_Analytics.loadedTeasersStack = [];
            // on window unload, post
            $CQ(window).unload(function() {
                try {
                    var loadedTeasers = CQ_Analytics.loadedTeasersStack;
                    if (loadedTeasers) {
                        delete CQ_Analytics.loadedTeasersStack;
                        //build the URL : trackingURL + paths
                        var url = trackingURL;
                        for (var i=0; i < loadedTeasers.length; i++) {
                            url = CQ.shared.HTTP.addParameter(url, "path", loadedTeasers[i]);
                        }
                        //run get in asynch mode.
                        CQ.shared.HTTP.get(url, function() {});
                    }
                } catch(error) {}
            });
        }
        CQ_Analytics.loadedTeasersStack.push(teaser.path);
    }

    /**
     * Gives an HTML text describing how selection was done based on the decisionInfo etc.
     */
    function buildDecisionHTML(decisionInfo, winnerPath, strategy) {
        var html = "", text;

        function getHTML(text, url, thumbnail, match) {
            return '<a href="' + url + '" class="cq-teaser-segment-link">' +
                       '<img src="' + thumbnail + '" class="cq-teaser-decision-thumbnail ' + (match ? 'cq-teaser-decision-match' : 'cq-teaser-decision-nomatch') + '">' +
                   '</a>' + text + '<br>';
        }

        for (var i = 0; i < decisionInfo.length; i++) {
            var info = decisionInfo[i];

            var path = CQ.shared.HTTP.externalize(info.teaser.path + ".html");

            if (info.hasOwnProperty("boost")) {
                // match
                if (info.noSegment) {
                    text = CQ.I18n.getMessage("Experience: {0} - match (no segments, boost = {1})", [info.teaser.title, info.boost]);
                } else {
                    text = CQ.I18n.getMessage("Experience: {0} - match (boost = {1})", [info.teaser.title, info.boost]);
                }
                var item = getHTML(text, path, info.teaser.thumbnail, true);
                if (winnerPath === info.teaser.path) {
                    html += "<b>" + item + "</b>";
                } else {
                    html += item;
                }
            } else {
                // no match
                if (info.unknownSegment) {
                    text = CQ.I18n.getMessage("Experience: {0} - no match (unknown segment)", [info.teaser.title]);
                } else {
                    text = CQ.I18n.getMessage("Experience: {0} - no match", [info.teaser.title]);
                }
                html += getHTML(text, path, info.teaser.thumbnail, false);
            }
        }

        html += "<br>";

        if (strategy) {
            html += CQ.I18n.getMessage("Strategy <b>{0}</b> selected current teaser.", strategy );
        } else {
            html += CQ.I18n.getMessage("No strategy configured, used the first match.");
        }

        html += "<br>";

        return html;
    }

    /**
     * Sets up the tooltip explaining the teaser selection.
     */
    function setDecisionTooltip(editablePromise, decisionInfo, winnerPath, strategy) {
        editablePromise.done(function(editable) {
            if ( editable.teaserToolTip ) {
                editable.teaserToolTip.hide();
                editable.teaserToolTip.remove();
            }

            editable.teaserToolTip = new CQ.Ext.Tip({
                "html": buildDecisionHTML(decisionInfo, winnerPath, strategy),
                "title": CQ.I18n.getMessage("Selection decision"),
                "width": 450,
                "autoHide": false,
                "closable": true,
                "height": 300,
                "floating": true,
                "autoHeight": false,
                "bodyStyle": "overflow-y: scroll;"
            });

            editable.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT, function(highlight) {
                if ( !this.teaserInfoButton ) {
                    this.teaserInfoButton = CQ.Ext.DomHelper.append('CQ',{
                        tag: 'div',
                        cls: 'x-tool x-tool-help cq-teaser-tooltip-tool'
                    }, true);
                    this.teaserInfoButton.position("absolute");
                    this.teaserInfoButton.on("click", function() {
                        var pos = this.getXY();
                        editable.teaserToolTip.setPosition(pos[0] - 460, pos[1] - 100);
                        editable.teaserToolTip.show();
                    });
                }
                this.teaserInfoButton.anchorTo(
                    highlight.frameBottom.getEl(),
                    "tr",
                    [-26, -15]);
                this.teaserInfoButton.show();
            });

            editable.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT, function(highlight) {
                if (this.teaserInfoButton) {
                    this.teaserInfoButton.hide();
                }
            });
        });
    }

    /**
     * Removes the tooltip explaining the teaser selection.
     */
    function removeDecisionTooltip(editablePromise) {
        editablePromise.done(function(editable) {
            if ( editable.teaserToolTip ) {
                editable.teaserToolTip.hide();
                editable.teaserToolTip.remove();
                editable.teaserToolTip = null;
            }
        });
    }

    function resolveTeaserCandidates(teasers, decisionInfo) {
        var candidates = [];
        var lastBoost = 0;

        for (var i = 0; i < teasers.length; i++) {
            var teaser = teasers[i],
                segments = teaser.segments;

            var info;
            if (decisionInfo) {
                info = {
                    teaser: teaser
                };
                decisionInfo.push(info);
            }

            // teaser becomes a candidate if:
            // - it does not specify a segment (= applies to everyone)
            // - its segments can be resolved (= are currently active)
            // - at least one of its segments has the highest boost overall
            var match = !segments || segments.length === 0;

            if (match && info) {
                info.noSegment = true;
            }

            // check if segment(s) evaluate
            if (!match && CQ_Analytics.SegmentMgr.resolve(segments)) {
                match = true;
                // HACK: to avoid changing SegmentMgr.resolve()
                // if segment is unkown (= outside configured segmentPath), SegmentMgr currently
                // sees it as a match, but we don't want this here, it's very confusing, because
                // this gives a lot of false matches
                if (segments && segments.length > 0) {
                    if (!CQ_Analytics.SegmentMgr.segments[segments[0]]) {
                        match = false;
                        if (info) {
                            info.unknownSegment = true;
                        }
                    }
                }
            }

            if (match) {
                // handle boost
                var boost = CQ_Analytics.SegmentMgr.getMaxBoost(segments);

                if (info) {
                    info.boost = boost;
                }

                if (boost === lastBoost) {
                    // same boost, add to list
                    candidates.push(teaser);
                } else {
                    if (boost > lastBoost) {
                        // better boost, clear list and keep only this one
                        candidates = [];
                        candidates.push(teaser);
                        lastBoost = boost;
                    }
                }
            }

        }
        return candidates;
    }

    // stores functions by editable path
    var teaserListeners = {};

    function trackTeaserLoader(editablePath, fn) {
        // first make make sure an existing one is gone (precautious)
        CQ_Analytics.Engine.stopTeaserLoader(editablePath);

        teaserListeners[editablePath] = fn;
    }

    /**
     * Small utility function that checks the equality between two arrays
     * @param arr1
     * @param arr2
     */
    function arrayEquals(arr1, arr2) {
        if (!arr1 || !arr2) {
            return false;
        }
        if (arr1.length !== arr2.length) {
            return false;
        }
        // sort the arrays first
        arr1.sort();
        arr2.sort();
        for (var idx = 0; idx < arr1.length; idx++) {
            if (arr1[idx] !== arr2[idx]) {
                return false;
            }
        }
        return true;
    }

    var teasersCache = {};

    return {

        /**
         * Stops the teaser loader for the given editable (or editable path) to run
         * (it runs continuously when client context simulation is active).
         * @param editable editable object or path
         */
        stopTeaserLoader: function(editable) {
            var editablePath = editable.path || editable;

            if (!editablePath) {
                return;
            }
            var listener = teaserListeners[editablePath];
            if (listener) {
                CQ_Analytics.SegmentMgr.removeListener("update", listener);
                delete teaserListeners[editablePath];
            }
        },

        /**
         * Resolves a teaser to display.
         * @param {Array} teasers all teaser candidates
         * @param {String} strategy name of a strategy (optional)
         * @param {Array} decisionInfo empty array that will be filled with the list of teaser candidates and their evaluated boost (optional)
         * @returns {Object} the resolved teaser or null
         */
        resolveTeaser: function(teasers, strategy, decisionInfo) {
            // select the candidates based on the segments and boost
            var candidates = resolveTeaserCandidates(teasers, decisionInfo);
            if (candidates.length === 0) {
                return null;
            }
            // let strategy find the final teaser or fall back to first
            return CQ_Analytics.StrategyMgr.choose(strategy, candidates) || candidates[0];
        },

        /**
         * Initializes the teaser loader for a given element. Selects a teaser from a list
         * (dependending on the given strategy) and will to load choosen teaser content into a DOM element.
         * Also allows for overriding the automatic teaser selection for simulation purposes.
         *
         * @param {Object} options map of options
         * @param {String} options.targetID       ID of DOM element on which to insert choosen teaser
         * @param {Array}  options.teasers        Complete list of available teasers
         * @param {String} [options.strategy]     Name of the selection strategy (must be availabe in CQ_Analytics.StrategyManager)
         * @param {String} [options.trackingURL]  URL of the tracking service for teaser impressions (if window.CQ_trackTeasersStats)
         */
        loadTeaser: function(options) {
            // in wcm authoring mode, we need to get our editable
            var editable, editablePath;
            if (isEditMode()) {
                editablePath = CQ.WCM.getEditablePathFromDOM(document.getElementById(options.targetID));
                editable = getEditablePromise(editablePath);
            }

            var campaignStore = ClientContext.get("campaign");
            if (campaignStore && campaignStore.isCampaignSelected() && !isPreviewMode) {
                return;
            }

            var toExecute = function() {
                // Simulation: Override the normal teaser display if
                // the PageDataMgr has an experience set.
                var forceExp = CQ_Analytics.PageDataMgr.getExperience();
                if (forceExp) {
                    CQ_Analytics.PageDataMgr.clearExperience();
                    var TEASER_SUFFIX = "/_jcr_content/par.html";
                    if ( isEditMode() ) {
                        TEASER_SUFFIX += "?wcmmode=disabled";
                    }
                    CQ_Analytics.Utils.loadElement(forceExp + TEASER_SUFFIX, options.targetID);
                    return;
                }

                var currentTeaser = null;

                // function which chooses and loads a teaser.
                var loadTeasers = function() {
                    var decisionInfo = null;
                    if (isEditMode()) {
                        decisionInfo = [];
                    }
                    var campaignStore = ClientContext.get("campaign"),
                        teaserToShow;

                    if (campaignStore && campaignStore.isCampaignSelected()) {
                        // make the target component react to the changes in campaign store: CQ-10513
                        // determine the current segments based on selected experience
                        var campaignPath = campaignStore.data["path"],
                            experience = campaignStore.data["recipe/path"],
                            campaignList = campaignStore.data["campaigns"] || [],
                            currentSegments = {},
                            teasers = options.teasers,
                            defaultTeaser;

                        for (var i = 0; i < teasers.length; i++) {
                            if (teasers[i].name === "default") {
                                defaultTeaser = teasers[i];
                            }
                        }

                        // check the cache first:
                        if (teasersCache[options.targetID] && teasersCache[options.targetID][experience]) {
                            teaserToShow = teasersCache[options.targetID][experience];
                        } else {
                            // shortcut for default
                            if (experience === "DEFAULT") {
                                // just choose the default teaser
                                teaserToShow = defaultTeaser;
                            } else {
                                // collect the segments for this experience
                                // by looking into the campaign store
                                for (var i = 0; i < campaignList.length; i++) {
                                    var campaign = campaignList[i];
                                    if (campaignList[i]["path"] === campaignPath) {
                                        var ex = campaign["experiences"];
                                        for (var j = 0; j < ex.length; j++) {
                                            if (ex[j]["path"] === experience) {
                                                if (ex[j].hasOwnProperty("segments")) {
                                                    var segments = ex[j]["segments"];
                                                    for (var k = 0; k < segments.length; k++) {
                                                        currentSegments[segments[k]] = currentSegments;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                // check if the collected segments match one of the teasers and show that teaser
                                for (var i = 0; i < teasers.length; i++) {
                                    var teaser = teasers[i];
                                    if (teaser.hasOwnProperty("segments")
                                        && (teaser["segments"].length === segments.length)) {
                                        if (arrayEquals(segments, teaser["segments"])) {
                                            teaserToShow = teasers[i];
                                            break;
                                        }
                                    }
                                }
                            }
                            // last resort = no teaser - show the default
                            if (!teaserToShow) {
                                teaserToShow = defaultTeaser;
                            }
                            // add the teaser to the cache
                            teasersCache[options.targetID] = { experience: teaserToShow };
                        }
                    } else {
                        teaserToShow = CQ_Analytics.Engine.resolveTeaser(options.teasers, options.strategy, decisionInfo);
                    }


                    if (teaserToShow) {
                        if (!currentTeaser || currentTeaser.path !== teaserToShow.path) {
                            currentTeaser = teaserToShow;

                            CQ_Analytics.SegmentMgr.fireEvent('teaser-loaded', {
                                campaignPath: teaserToShow.campaignPath || '',
                                campaignName: teaserToShow.campainName || '',
                                experiencePath: teaserToShow.path || '',
                                segmentName: teaserToShow.title || '',
                                segments: teaserToShow.segments || [],
                                targetElement: options.targetID
                            });

                            var url = teaserToShow.url;
                            if ( isEditMode() ) {
                                url += "?wcmmode=disabled";
                            }
                            CQ_Analytics.Utils.loadTeaserElement(url, options.targetID);

                            if (window.CQ_trackTeasersStats && options.trackingURL) {
                                initTracking(teaserToShow, options.trackingURL);
                            }

                            if ( editable ) {
                                setDecisionTooltip(editable, decisionInfo, currentTeaser.path, options.strategy);
                            }
                        }
                    } else {
                        if ( editable ) {
                            removeDecisionTooltip(editable);
                        }
                        CQ_Analytics.Utils.clearElement(options.targetID);
                        currentTeaser = null;
                    }
                };

                loadTeasers.call();

                //loaded teaser might change everytime a segment resolution state changes
                if (CQ_Analytics.SegmentMgr) {
                    if (editablePath) {
                        // keep track of the listener to allow the TargetEditor to disable it
                        // when it takes over control of teaser/experience display
                        trackTeaserLoader(editablePath, loadTeasers);
                    }
                    CQ_Analytics.SegmentMgr.addListener("update", loadTeasers);
                }
                // also listen to campaign store
                if (CQ_Analytics.CampaignMgr) {
                    if (CQ_Analytics.CampaignMgr) {
                        CQ_Analytics.CampaignMgr.addListener("update", loadTeasers);
                    }
                }
            };

            // first teaser load is done when all stores are loaded
            if (CQ_Analytics.CCM.areStoresInitialized) {
                toExecute.call(this);
            } else {
                CQ_Analytics.CCM.addListener("storesinitialize", toExecute);
            }
        }
    };
}();

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
window.CQ_trackTeasersStats = true;

/**
 * Initializes every needed to select a teaser from a list (dependending on the given strategy) and
 * to load choosen teaser content into a DOM element.
 * Also allows for overriding the automatic teaser selection for simulation purposes.
 * @param {Array} allTeasers Teasers list
 * @param {String} strategyName Name of the selection strategy (must be availabe in CQ_Analytics.StrategyManager)
 * @param {DOMElement} targetElementId DOM element to insert choosen teaser
 * @param {Boolean} isEditMode True if edit mode is enabled
 * @param {String} trackingURL (optional) URL of the tracking service for teaser impressions (if window.CQ_trackTeasersStats)
 * @deprecated since 6.2, use ContextHub instead
 */
function initializeTeaserLoader(allTeasers, strategyName, targetElementId, isEditMode, trackingURL, editablePath) {
    isEditMode = !!(CQ.Ext && (isEditMode == "true" || isEditMode === true));
    if( window.CQ_Analytics ) {
        var toExecute = function() {
            var TEASER_SUFFIX = "/_jcr_content/par.html";
            if( isEditMode ) {
                TEASER_SUFFIX += "?wcmmode=disabled";
            }

            // Simulation: Override the normal teaser display if
            // the PageDataMgr has an experience set.
            var forceExp = CQ_Analytics.PageDataMgr.getExperience();
            if (forceExp) {
                CQ_Analytics.PageDataMgr.clearExperience();
                CQ_Analytics.Utils.loadElement(forceExp + TEASER_SUFFIX, targetElementId);
                return;
            }

            //function which computes an HTML text describing how selection is done.
            var computeDecisionHTML = function(teaserPath) {
                var html = "";

                var teasers = new Array();
                if (CQ_Analytics.SegmentMgr) {
                    var lastBoost = 0;
                    for (var i = 0; i < allTeasers.length; i++) {
                        var p = CQ.shared.HTTP.externalize(allTeasers[i].path + ".html");
                        if (!allTeasers[i]["segments"] ||
                            allTeasers[i]["segments"].length == 0 ||
                            CQ_Analytics.SegmentMgr.resolveArray(allTeasers[i]["segments"]) === true) {
                            var boost = CQ_Analytics.SegmentMgr.getMaxBoost(allTeasers[i]["segments"]);
                            var params = [allTeasers[i]["title"], boost, allTeasers[i].thumbnail, p];
                            if (teaserPath == allTeasers[i].path) {
                                html += CQ.I18n.getMessage("<b><a href=\"{3}\" class=\"cq-teaser-segment-link\"><img src=\"{2}\" class=\"cq-teaser-decision-thumbnail cq-teaser-decision-match\"></a>Experience: {0} - match ( boost = {1} )</b><br>", params);
                            } else {
                                html += CQ.I18n.getMessage("<a href=\"{3}\" class=\"cq-teaser-segment-link\"><img src=\"{2}\" class=\"cq-teaser-decision-thumbnail cq-teaser-decision-match\"></a>Experience: {0} - match ( boost = {1} )<br>", params);
                            }

                            if (boost == lastBoost) {
                                //same boost, add to list
                                teasers.push(allTeasers[i]);
                            } else {
                                if (boost > lastBoost) {
                                    //better boost, clear list and keep only this one
                                    teasers = new Array();
                                    teasers.push(allTeasers[i]);
                                    lastBoost = boost;
                                }
                            }
                        } else {
                            var params = [allTeasers[i]["title"], allTeasers[i].thumbnail, p];
                            html += CQ.I18n.getMessage("<a href=\"{2}\" class=\"cq-teaser-segment-link\"><img src=\"{1}\" class=\"cq-teaser-decision-thumbnail cq-teaser-decision-nomatch\"></a>Experience: {0} - no match<br>", params);
                        }
                    }
                }
                html += CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>", strategyName);
                return html;
            };

            var currentVisibleTeaser = null;
            var ttip = null;
            //function which chooses and loads a teaser.
            var loadTeasers = function() {
                var teasers = new Array();
                if (CQ_Analytics.SegmentMgr) {
                    var lastBoost = 0;
                    for (var i = 0; i < allTeasers.length; i++) {
                        if (!allTeasers[i]["segments"] ||
                            allTeasers[i]["segments"].length == 0 ||
                            CQ_Analytics.SegmentMgr.resolveArray(allTeasers[i]["segments"]) === true) {
                            var boost = CQ_Analytics.SegmentMgr.getMaxBoost(allTeasers[i]["segments"]);
                            if (boost == lastBoost) {
                                //same boost, add to list
                                teasers.push(allTeasers[i]);
                            } else {
                                if (boost > lastBoost) {
                                    //better boost, clear list and keep only this one
                                    teasers = new Array();
                                    teasers.push(allTeasers[i]);
                                    lastBoost = boost;
                                }
                            }
                        }
                    }
                }
                if (teasers.length > 0) {
                    // fallback: display first
                    var teaserToShow = teasers[0];
                    if (CQ_Analytics.StrategyMgr) {
                        var teas = CQ_Analytics.StrategyMgr.choose(strategyName, teasers);
                        if (teas != null) {
                            teaserToShow = teas;
                        }
                    }
                    if (!currentVisibleTeaser || currentVisibleTeaser.path != teaserToShow.path) {
                        currentVisibleTeaser = teaserToShow;
                        var url = teaserToShow.path + TEASER_SUFFIX;
                        url = CQ.shared.HTTP.addSelectors(url, CQ.shared.HTTP.getSelectors(window.location.href));
                        CQ_Analytics.Utils.loadTeaserElement(url, targetElementId);

                        if(window.CQ_trackTeasersStats && trackingURL) {
                            if( !CQ_Analytics.loadedTeasersStack) {
                                //store in loadedTeasersStack the list of teasers shown in the page.
                                CQ_Analytics.loadedTeasersStack = [];
                                //on window unload, post
                                $CQ(window).unload(function() {
                                    try {
                                        var loadedTeasers = CQ_Analytics.loadedTeasersStack;
                                        if( loadedTeasers ) {
                                            delete CQ_Analytics.loadedTeasersStack;
                                            //build the URL : trackingURL + paths
                                            var url = trackingURL;
                                            for(var i=0;i<loadedTeasers.length; i++) {
                                                url = CQ.shared.HTTP.addParameter(url,"path",loadedTeasers[i]);
                                            }
                                            //run get in asynch mode.
                                            CQ.shared.HTTP.get(url, function() {});
                                        }
                                    } catch(error) {}
                                });
                            }
                            CQ_Analytics.loadedTeasersStack.push(teaserToShow.path);
                        }

                        if( isEditMode ) {
                            if( editablePath ) {
                                var editable = CQ.WCM.getEditable(editablePath);
                                if( editable) {
                                    if( editable && editable.teaserToolTip ) {
                                        editable.teaserToolTip.hide();
                                        editable.teaserToolTip.remove();
                                        editable.teaserToolTip = null;
                                    } else {
                                        editable.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT, function(highlight) {
                                            if( ! this.teaserInfoButton ) {
                                                this.teaserInfoButton = CQ.Ext.DomHelper.append('CQ',{
                                                    tag: 'div',
                                                    cls: 'x-tool x-tool-help cq-teaser-tooltip-tool'
                                                }, true);
                                                this.teaserInfoButton.position("absolute");
                                                this.teaserInfoButton.on("click", function() {
                                                    if( !editable.teaserToolTip ) {
                                                        editable.teaserToolTip = new CQ.Ext.Tip({
                                                            "html": computeDecisionHTML(currentVisibleTeaser.path),
                                                            "title": CQ.I18n.getMessage("Selection decision"),
                                                            "width": 450,
                                                            "autoHide": false,
                                                            "closable": true,
                                                            "height": 300,
                                                            "floating": true,
                                                            "autoHeight": false,
                                                            "bodyStyle": "overflow-y: scroll;"
                                                        });
                                                    }
                                                    var pos = this.getXY();
                                                    editable.teaserToolTip.setPosition(pos[0] - 460,pos[1] - 100);
                                                    editable.teaserToolTip.show();
                                                });
                                            }
                                            this.teaserInfoButton.anchorTo(
                                                highlight.frameBottom.getEl(),
                                                "tr",
                                                [-26, -15]);
                                            this.teaserInfoButton.show();
                                        });

                                        editable.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT, function(highlight) {
                                            if( this.teaserInfoButton) {
                                                this.teaserInfoButton.hide();
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if( isEditMode ) {
                        var editable = CQ.WCM.getEditable(editablePath);
                        if( editable && editable.teaserToolTip ) {
                            editable.teaserToolTip.hide();
                            editable.teaserToolTip.remove();
                            editable.teaserToolTip = null;
                        }
                    }
                    CQ_Analytics.Utils.clearElement(targetElementId);
                    currentVisibleTeaser = null;
                }
            };

            loadTeasers.call();

            //loaded teaser might change everytime a segment resolution state changes
            if (CQ_Analytics.SegmentMgr) {
                CQ_Analytics.SegmentMgr.addListener("update", loadTeasers);
            }
        };

        //first teaser load is done when all stores are loaded
        if( CQ_Analytics.CCM.areStoresInitialized) {
            toExecute.call(this);
        } else {
            CQ_Analytics.CCM.addListener("storesinitialize",toExecute);
        }
    }
}

/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

window.CQ_trackLandingPagesStats = true;

/**
 * @deprecated since 6.2, use ContextHub instead
 */
function initializeLandingPageLoader(allLandingPages, strategyName, targetElementId, isEditMode, trackingURL) {
    isEditMode = CQ.Ext && (isEditMode == "true" || isEditMode === true);

    if( window.CQ_Analytics ) {
        var LANDINGPAGE_SUFFIX = ".html";

        var toExecute = function() {
            var currentVisibleLandingPage = null;
            //function which chooses and loads a landingPage.
            var loadLandingPages = function() {
                var landingPages = new Array();
                if (window.CQ_Analytics
                    && window.CQ_Analytics.SegmentMgr) {
                    var lastBoost = 0;
                    for (var i = 0; i < allLandingPages.length; i++) {
                        if (!allLandingPages[i]["segments"] ||
                            allLandingPages[i]["segments"].length == 0 ||
                            CQ_Analytics.SegmentMgr.resolveArray(allLandingPages[i]["segments"]) === true) {
                            var boost = CQ_Analytics.SegmentMgr.getMaxBoost(allLandingPages[i]["segments"]);
                            if (boost == lastBoost) {
                                //same boost, add to list
                                landingPages.push(allLandingPages[i]);
                            } else {
                                if (boost > lastBoost) {
                                    //better boost, clear list and keep only this one
                                    landingPages = new Array();
                                    landingPages.push(allLandingPages[i]);
                                    lastBoost = boost;
                                }
                            }
                        }
                    }
                }
                if (landingPages.length > 0) {
                    // fallback: display first
                    var landingPageToShow = landingPages[0];
                    if (window.CQ_Analytics
                        && window.CQ_Analytics.StrategyMgr) {
                        var lp = CQ_Analytics.StrategyMgr.choose(strategyName, landingPages);
                        if (lp != null) {
                            landingPageToShow = lp;
                        }
                    }
                    if (!currentVisibleLandingPage || currentVisibleLandingPage.path != landingPageToShow.path) {
                        var previousLandingPage = currentVisibleLandingPage;
                        currentVisibleLandingPage = landingPageToShow;

                        var request = CQ.shared.HTTP.get(landingPageToShow.path + LANDINGPAGE_SUFFIX);
                        var text = request.responseText;

                        var extractDiv = function(text, id) {
                            var ret = "";
                            if( text && text.indexOf("id=\"" + id + "\"") != -1) {
                                var index = text.indexOf("id=\"" + id + "\"");
                                var oDivIndex = text.substring(0, index).lastIndexOf("<div");
                                var tmp = text.substring(oDivIndex);
                                var split = tmp.split(new RegExp("<div", "ig"));
                                var opened = 0;
                                for(var i=0;i<split.length;i++) {
                                    opened++;
                                    var split2 = split[i].split(new RegExp("</div", "ig"));
                                    for(var j=1; j < split2.length; j++) {
                                        opened--;

                                        if(opened == 1) {
                                            var cDivIndex = split[i].lastIndexOf("</div") + 6;

                                            cDivIndex = tmp.indexOf(split[i]) + cDivIndex;
                                            tmp = tmp.substring(0, cDivIndex);

                                            tmp = tmp.substring(tmp.indexOf(">") + 1, tmp.lastIndexOf("</div"));
                                            return tmp;
                                        }
                                    }
                                }
                             }
                             return "";
                        };

                        text = extractDiv(text, targetElementId);

                        var target = $CQ("#" + targetElementId)[0];

                        var removeEditables = function(filter, show) {
                            if( isEditMode ) {
                                var editables = CQ.WCM.getEditables();
                                for(var epath in editables) {
                                    var editable = editables[epath];
                                    if( !filter || editable.path.indexOf(filter) != -1) {
                                        editable.hide();
                                        editable.remove();
                                    }
                                }
                            }
                        };

                        var node = document.createElement("div");
                        node.innerHTML = text;

                        if( previousLandingPage ) {
                            $CQ("object", target).parent().fadeOut("slow");
                            $CQ("img", target).fadeOut("slow");
                            $CQ(target).slideUp("slow", function() {
                                removeEditables(previousLandingPage.path, false);
                                $CQ(target).children().remove();

                                var toInject = target.insertBefore(node,target.firstChild);

                                $CQ(target).slideDown("slow", function() {
                                    if( isEditMode ) {
                                        CQ.DOM.executeScripts(CQ.Ext.get(node));
                                    }
                                });
                            });
                        } else {
                            var toInject = target.insertBefore(node,target.firstChild);
                            $CQ(target).slideDown("slow", function() {
                                if( isEditMode ) {
                                    CQ.DOM.executeScripts(CQ.Ext.get(node));
                                }
                            });
                        }

                        try {
                            if(window.CQ_trackLandingPagesStats && trackingURL) {
                                if( !CQ_Analytics.loadedLandingPagesStack) {
                                    //store in loadedLandingPagesStack the list of landingPages shown in the page.
                                    CQ_Analytics.loadedLandingPagesStack = [];
                                    //on window unload, post
                                    $CQ(window).unload(function() {
                                        try {
                                            var loadedLandingPages = CQ_Analytics.loadedLandingPagesStack;
                                            if( loadedLandingPages ) {
                                                delete CQ_Analytics.loadedLandingPagesStack;
                                                //build the URL : trackingURL + paths
                                                var url = trackingURL;
                                                for(var i=0;i<loadedLandingPages.length; i++) {
                                                    url = CQ.shared.HTTP.addParameter(url,"path",loadedLandingPages[i]);
                                                }
                                                //run get in asynch mode.
                                                CQ.shared.HTTP.get(url, function() {});
                                            }
                                        } catch(error) {}
                                    });
                                }
                                CQ_Analytics.loadedLandingPagesStack.push(landingPageToShow.path);
                            }
                        } catch(error) {}
                    }
                } else {
                    CQ_Analytics.Utils.clearElement(targetElementId);
                    currentVisibleLandingPage = null;
                }
            };

            loadLandingPages.call();

            //loaded landingPage might change everytime a segment resolution state changes
            if (window.CQ_Analytics
                && window.CQ_Analytics.SegmentMgr) {
                CQ_Analytics.SegmentMgr.addListener("update", loadLandingPages);
            }
        };

        //first landingPage load is done when all stores are loaded
        if (window.CQ_Analytics
            && window.CQ_Analytics.ClickstreamcloudMgr ) {
            if( CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded ) {
                toExecute.call(this);
            } else {
                CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",toExecute);
            }
        }
    }
    }

/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

/**
 * @class CQ_Analytics.PersistedJSONStore
 * @extends CQ_Analytics.PersistedSessionStore
 * A PersistedJSONStore is a persisted container of a JSON object.
 * @constructor
 * Creates a new PersistedJSONStore.
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.PersistedJSONStore = function() {};

CQ_Analytics.PersistedJSONStore.prototype = new CQ_Analytics.PersistedSessionStore();

/**
 * @cfg {String} STOREKEY
 * Store internal key
 * @final
 * @private
 */
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY = "";

/**
 * @cfg {String} STORENAME
 * Store internal name
 * @final
 * @private
 */
CQ_Analytics.PersistedJSONStore.prototype.STORENAME = "";

//inheritDoc
CQ_Analytics.PersistedJSONStore.prototype.init = function() {
    var store = new CQ_Analytics.SessionPersistence({'container': 'ClientContext'});
    var value = store.get(this.getStoreKey());
    if (!value || value == "") {
        this.data = {};
        for (var p in this.initProperty) {
            this.data[p] = this.initProperty[p];
        }
    } else {
        this.data = this.parse(value);
    }
    this.persist();

    this.initialized = true;
    this.fireEvent("initialize",this);
    this.fireEvent("update");
};

//inheritDoc
CQ_Analytics.PersistedJSONStore.prototype.clear = function() {
    var store = new CQ_Analytics.SessionPersistence({'container': 'ClientContext'});
    store.remove(this.getStoreKey());
    this.data = null;
    this.initProperty = {};
};

/**
 * Sets the store data with the specified JSON object. Note that inside the store, properties are stored based
 * on property path in the store.
 * <code>{
 * A: "valueA",
 * B: {
 *  B1: "valueBB1"
 * }</code>
 * will be accessed in the store as:
 * <code>A: "valueA"
 * B/B1: "valueBB1"</code>
 *
 * @param {Object} jsonData The JSON object containing the data.
 */
CQ_Analytics.PersistedJSONStore.prototype.initJSON = function(jsonData, doNotClear) {
    if( !doNotClear ) {
        this.initProperty = {};
    }

    var propertyToPaths= function(target, prefix, obj) {
        for(var p in obj) {
            if( typeof obj[p]  == "object") {
                propertyToPaths(target, prefix ? prefix + "/" + p : p, obj[p]);
            } else {
                target[prefix ? prefix + "/" + p : p] = obj[p];
            }
        }
    };

    propertyToPaths(this.initProperty, null, jsonData);
};

/**
 * Returns the store data as a JSON object.
 * @return {Object} The JSON object.
 */
CQ_Analytics.PersistedJSONStore.prototype.getJSON = function() {
    var data = this.getData();
    var res = {};

    for(var longProp in data) {
        var s = longProp.split("/");
        var level = res;
        for(var i = 0; i < s.length; i++) {
            var propLevel = s[i];
            if( i == s.length - 1) {
                level[propLevel] = data[longProp];
            } else {
                level[propLevel] = level[propLevel] || {};
                level = level[propLevel];
            }
        }
    }

    return res;
};

/**
 * Returns a new instance of a CQ_Analytics.PersistedJSONStore instance is initialized with the JSON object.
 * @param {String} storeName The name of the new store
 * @param {Object} jsonData The initial data as JSON object
 * @return {CQ_Analytics.PersistedJSONStore} The new store instance
 * @static
 */
CQ_Analytics.PersistedJSONStore.getInstance = function(storeName, jsonData) {
    var s = new CQ_Analytics.PersistedJSONStore();
    s.STOREKEY = storeName.toUpperCase();
    s.STORENAME = storeName;

    s.initJSON(jsonData);

    return s;
};

/**
 * Creates, registers in the ClientContext and returns a new instance of a CQ_Analytics.PersistedJSONStore
 * instance initialized with the JSON object.
 * @param {String} storeName The name of the new store
 * @param {Object} jsonData The initial data as JSON object
 * @return {CQ_Analytics.PersistedJSONStore} The new store instance
 * @static
 */
CQ_Analytics.PersistedJSONStore.registerNewInstance = function(storeName, jsonData) {
    var jsonStore = CQ_Analytics.PersistedJSONStore.getInstance(storeName, jsonData);
    jsonStore.init();
    //registers new store to clickstreamcloud manager
    CQ_Analytics.CCM.register(jsonStore);

    return jsonStore;
};


/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

/**
 * @class CQ_Analytics.JSONStore
 * @extends CQ_Analytics.SessionStore
 * A JSONStore is a container of a JSON object.
 * @constructor
 * Creates a new JSONStore.
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.JSONStore = function() {};

CQ_Analytics.JSONStore.prototype = new CQ_Analytics.SessionStore();

/**
 * @cfg {String} STOREKEY
 * Store internal key
 * @final
 * @private
 */
CQ_Analytics.JSONStore.prototype.STOREKEY = "";

/**
 * @cfg {String} STORENAME
 * Store internal name
 * @final
 * @private
 */
CQ_Analytics.JSONStore.prototype.STORENAME = "";

//inheritDoc
CQ_Analytics.JSONStore.prototype.init = function() {
    this.data = {};
    for (var p in this.initProperty) {
        this.data[p] = this.initProperty[p];
    }

    this.initialized = true;
    this.fireEvent("initialize",this);
    this.fireEvent("update");
};

//inheritDoc
CQ_Analytics.JSONStore.prototype.clear = function() {
    this.data = null;
    this.initProperty = {};
};

/**
 * Sets the store data with the specified JSON object. Note that inside the store, properties are stored based
 * on property path in the store.
 * <code>{
 * A: "valueA",
 * B: {
 *  B1: "valueBB1"
 * }</code>
 * will be accessed in the store as:
 * <code>A: "valueA"
 * B/B1: "valueBB1"</code>
 *
 * @param {Object} jsonData The JSON object containing the data.
 */
CQ_Analytics.JSONStore.prototype.initJSON = function(jsonData, doNotClear) {
    if( !doNotClear ) {
        this.initProperty = {};
    }

    var propertyToPaths= function(target, prefix, obj) {
        for(var p in obj) {
            if( typeof obj[p]  == "object") {
                propertyToPaths(target, prefix ? prefix + "/" + p : p, obj[p]);
            } else {
                target[prefix ? prefix + "/" + p : p] = obj[p];
            }
        }
    };

    propertyToPaths(this.initProperty, null, jsonData);
};

/**
 * Returns the store data as a JSON object.
 * @return {Object} The JSON object.
 */
CQ_Analytics.JSONStore.prototype.getJSON = function() {
    var data = this.getData();
    var res = {};

    for(var longProp in data) {
        var s = longProp.split("/");
        var level = res;
        for(var i = 0; i < s.length; i++) {
            var propLevel = s[i];
            if( i == s.length - 1) {
                level[propLevel] = data[longProp];
            } else {
                level[propLevel] = level[propLevel] || {};
                level = level[propLevel];
            }
        }
    }

    return res;
};

/**
 * Returns a new instance of a CQ_Analytics.JSONStore instance is initialized with the JSON object.
 * @param {String} storeName The name of the new store
 * @param {Object} jsonData The initial data as JSON object
 * @return {CQ_Analytics.JSONStore} The new store instance
 */
CQ_Analytics.JSONStore.getInstance = function(storeName, jsonData) {
    var s = new CQ_Analytics.JSONStore();
    s.STOREKEY = storeName.toUpperCase();
    s.STORENAME = storeName;

    s.initJSON(jsonData);

    return s;
};

/**
 * Creates, registers in the ClientContext and returns a new instance of a CQ_Analytics.JSONStore
 * instance initialized with the JSON object.
 * @param {String} storeName The name of the new store
 * @param {Object} jsonData The initial data as JSON object
 * @return {CQ_Analytics.JSONStore} The new store instance
 */
CQ_Analytics.JSONStore.registerNewInstance = function(storeName, jsonData) {
    var jsonStore = CQ_Analytics.JSONStore.getInstance(storeName, jsonData);
    jsonStore.init();
    //registers new store to clickstreamcloud manager
    CQ_Analytics.CCM.register(jsonStore);

    return jsonStore;
};


/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

/**
 * @class CQ_Analytics.PersistedJSONPStore
 * @extends CQ_Analytics.PersistedJSONStore
 * A PersistedJSONPStore is a persisted container of a JSON object retrieved from a remote JSONP service.
 * @constructor
 * Creates a new PersistedJSONPStore.
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.PersistedJSONPStore = function() {};

CQ_Analytics.PersistedJSONPStore.prototype = new CQ_Analytics.PersistedJSONStore();

/**
 * Sets a new service URL.
 * @param {String} serviceURL The service URL
 */
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL = function(serviceURL) {
    this.serviceURL = serviceURL;
};

/**
 * Returns the service URL of the store.
 * @return {String} The service URL if defined. Null otherwise
 */
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL = function() {
    return this.serviceURL;
};

/**
 * Loads in the store the data from the remote JSONP service.
 * @param {String} serviceURL (Optional) Defines a new service URL
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Function} callback (Optional) Function to execute after data loading
 */
CQ_Analytics.PersistedJSONPStore.prototype.load = function(serviceURL, dynamicData, callback) {
    var storeName = this.getName();
    if( ! CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]) {
        CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[storeName] = function(data) {
            var s = CQ_Analytics.CCM.getRegisteredStore(storeName);
            if( s ) {
                s.initJSON(data);
                if( dynamicData ) {
                    s.initJSON(dynamicData, true);
                }

            }
            if( callback ) {
                callback.call(s);
            }
        };
    }

    if( serviceURL ) {
        this.setServiceURL(serviceURL);
    }

    var url = this.serviceURL;
    url = url.replace("\$\{callback\}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks." + storeName);
    $CQ.getScript(url);
};

/**
 * Used as storage for JSONP callbacks (one callback per unique store name).
 */
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks = {};

/**
 * Returns a new instance of a CQ_Analytics.PersistedJSONPStore instance.
 * @param {String} storeName The name of the new store
 * @param {String} serviceURL (Optional) The service URL of the JSONP store
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Boolean} deferLoading (Optional) True to defer the store loading
 * @param {Function} loadingCallback (Optional) Function to execute after data loading
 * @return {CQ_Analytics.PersistedJSONPStore} The new store instance
 * @static
 */
CQ_Analytics.PersistedJSONPStore.getInstance = function(storeName, serviceURL, dynamicData, deferLoading, loadingCallback) {
    if( storeName && serviceURL) {
        try {
            var jsonpStore = new CQ_Analytics.PersistedJSONPStore();
            jsonpStore.STOREKEY = storeName.toUpperCase();
            jsonpStore.STORENAME = storeName;

            if( serviceURL ) {
                jsonpStore.setServiceURL(serviceURL);
            }

            if( !deferLoading ) {
                jsonpStore.load(serviceURL, dynamicData, loadingCallback);
            }

            return jsonpStore;
        } catch(error) {
            console.log("Cannot create the JSONP store",storeName, serviceURL,error);
        }
    }
    return null;
};

/**
 * Creates, registers in the ClientContext and returns a new instance of a CQ_Analytics.PersistedJSONPStore instance.
 * @param {String} storeName The name of the new store
 * @param {String} serviceURL The service URL of the JSONP store
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Function} callback (Optional) Function to execute after data loading
 * @return {CQ_Analytics.PersistedJSONPStore} The new store instance
 * @static
 */
CQ_Analytics.PersistedJSONPStore.registerNewInstance = function(storeName, serviceURL, dynamicData, callback) {
    if( !serviceURL ) {
        return null;
    }

    if( !storeName ) {
        //try to extract a name from service url

        var sa = CQ.shared.HTTP.getSchemeAndAuthority(serviceURL);
        if( sa ) {
            if(sa.indexOf(".") !=-1) {
                sa = sa.substring(0, sa.lastIndexOf("."));
                storeName = sa.substring(sa.lastIndexOf(".") + 1);
            } else {
                storeName = sa.substring(sa.lastIndexOf("/") + 1);
            }
        } else {
            //weird case, should never happen
            storeName = serviceURL;
        }

    }

    var store = CQ_Analytics.PersistedJSONPStore.getInstance(storeName, serviceURL, dynamicData, false, function() {
        this.init();
        this.reset();
        if( callback ) {
            callback.call(this);
        }
    });
    if( store != null ) {
        //registers new store to clickstreamcloud manager
        CQ_Analytics.CCM.register(store);
        return store;
    }
    return null;
};
/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

/**
 * @class CQ_Analytics.JSONPStore
 * @extends CQ_Analytics.JSONStore
 * A JSONPStore is a container of a JSON object retrieved from a remote JSONP service.
 * @constructor
 * Creates a new JSONPStore.
 * @since 5.5
 * @deprecated since 6.2, use ContextHub instead
 */
CQ_Analytics.JSONPStore = function() {};

CQ_Analytics.JSONPStore.prototype = new CQ_Analytics.JSONStore();

/**
 * Sets a new service URL.
 * @param {String} serviceURL The service URL
 */
CQ_Analytics.JSONPStore.prototype.setServiceURL = function(serviceURL) {
    this.serviceURL = serviceURL;
};

/**
 * Returns the service URL of the store.
 * @return {String} The service URL if defined. Null otherwise
 */
CQ_Analytics.JSONPStore.prototype.getServiceURL = function() {
    return this.serviceURL;
};

/**
 * Loads in the store the data from the remote JSONP service.
 * @param {String} serviceURL (Optional) Defines a new service URL
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Function} callback (Optional) Function to execute after data loading
 */
CQ_Analytics.JSONPStore.prototype.load = function(serviceURL, dynamicData, callback) {
    var storeName = this.getName();
    if( ! CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]) {
        CQ_Analytics.JSONPStore.JSONPCallbacks[storeName] = function(data) {
            var s = CQ_Analytics.CCM.getRegisteredStore(storeName);
            if( s ) {
                s.initJSON(data);
                if( dynamicData ) {
                    s.initJSON(dynamicData, true);
                }

            }
            if( callback ) {
                callback.call(s);
            }
        };
    }

    if( serviceURL ) {
        this.setServiceURL(serviceURL);
    }

    var url = this.serviceURL;
    url = url.replace("\$\{callback\}","CQ_Analytics.JSONPStore.JSONPCallbacks." + storeName);
    $CQ.getScript(url);
};

/**
 * Used as storage for JSONP callbacks (one callback per unique store name).
 */
CQ_Analytics.JSONPStore.JSONPCallbacks = {};

/**
 * Returns a new instance of a CQ_Analytics.JSONPStore instance.
 * @param {String} storeName The name of the new store
 * @param {String} serviceURL (Optional) The service URL of the JSONP store
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Boolean} deferLoading (Optional) True to defer the store loading
 * @param {Function} loadingCallback (Optional) Function to execute after data loading
 * @return {CQ_Analytics.JSONPStore} The new store instance
 */
CQ_Analytics.JSONPStore.getInstance = function(storeName, serviceURL, dynamicData, deferLoading, loadingCallback) {
    if( storeName ) {
        try {
            var jsonpStore = new CQ_Analytics.JSONPStore();
            jsonpStore.STOREKEY = storeName.toUpperCase();
            jsonpStore.STORENAME = storeName;

            if( serviceURL ) {
                jsonpStore.setServiceURL(serviceURL);
                if( !deferLoading ) {
                    jsonpStore.load(serviceURL, dynamicData, loadingCallback);
                }
            }

            return jsonpStore;
        } catch(error) {
            console.log("Cannot create the JSONP store",storeName, serviceURL,error);
        }
    }
    return null;
};

/**
 * Creates, registers in the ClientContext and returns a new instance of a CQ_Analytics.JSONPStore instance.
 * @param {String} storeName The name of the new store
 * @param {String} serviceURL The service URL of the JSONP store
 * @param {Object} dynamicData (Optional) Data that will be appended to the store
 * @param {Function} callback (Optional) Function to execute after data loading
 * @return {CQ_Analytics.JSONPStore} The new store instance
 */
CQ_Analytics.JSONPStore.registerNewInstance = function(storeName, serviceURL, dynamicData, callback) {
    if( !storeName && serviceURL) {
        //try to extract a name from service url

        var sa = CQ.shared.HTTP.getSchemeAndAuthority(serviceURL);
        if( sa ) {
            if(sa.indexOf(".") !=-1) {
                sa = sa.substring(0, sa.lastIndexOf("."));
                storeName = sa.substring(sa.lastIndexOf(".") + 1);
            } else {
                storeName = sa.substring(sa.lastIndexOf("/") + 1);
                storeName = storeName.replace(new RegExp(":", "ig"),"_");
            }
        } else {
            //weird case, should never happen
            storeName = serviceURL;
        }

    }

    var store = CQ_Analytics.JSONPStore.getInstance(storeName, serviceURL, dynamicData, false, function() {
        this.init();
        this.reset();
        if( callback ) {
            callback.call(this);
        }
    });
    if( store != null ) {
        //registers new store to clickstreamcloud manager
        CQ_Analytics.CCM.register(store);
        return store;
    }
    return null;
};