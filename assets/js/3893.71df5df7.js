"use strict";(self.webpackChunkrobin_fc_github_io=self.webpackChunkrobin_fc_github_io||[]).push([[3893],{1348:(t,n,e)=>{e.d(n,{d:()=>i});const i=function(t){for(var n=new Array(10),e=0;e<10;)n[e]="#"+t.slice(6*e,6*++e);return n}("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab")},3893:(t,n,e)=>{e.d(n,{diagram:()=>K});var i=e(3634),s=e(4250),r=e(1348),o=function(){var t=function(t,n,e,i){for(e=e||{},i=t.length;i--;e[t[i]]=n);return e},n=[1,9],e=[1,10],i=[1,5,10,12],s={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,n,e,i,s,r,o){var c=r.length-1;switch(s){case 7:const t=i.findOrCreateNode(r[c-4].trim().replaceAll('""','"')),n=i.findOrCreateNode(r[c-2].trim().replaceAll('""','"')),e=parseFloat(r[c].trim());i.addLink(t,n,e);break;case 8:case 9:case 11:this.$=r[c];break;case 10:this.$=r[c-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:e},{1:[2,6],7:11,10:[1,12]},t(e,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(i,[2,8]),t(i,[2,9]),{19:[1,16]},t(i,[2,11]),{1:[2,1]},{1:[2,5]},t(e,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:e},{15:18,16:7,17:8,18:n,20:e},{18:[1,19]},t(e,[2,3]),{12:[1,20]},t(i,[2,10]),{15:21,16:7,17:8,18:n,20:e},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,n){if(!n.recoverable){var e=new Error(t);throw e.hash=n,e}this.trace(t)},parse:function(t){var n=[0],e=[],i=[null],s=[],r=this.table,o="",c=0,l=0,h=s.slice.call(arguments,1),a=Object.create(this.lexer),u={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(u.yy[f]=this.yy[f]);a.setInput(t,u.yy),u.yy.lexer=a,u.yy.parser=this,typeof a.yylloc>"u"&&(a.yylloc={});var y=a.yylloc;s.push(y);var d,p=a.options&&a.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,k,x,m,v,b,w,E={};;){if(_=n[n.length-1],this.defaultActions[_]?k=this.defaultActions[_]:((null===g||typeof g>"u")&&(d=void 0,"number"!=typeof(d=e.pop()||a.lex()||1)&&(d instanceof Array&&(d=(e=d).pop()),d=this.symbols_[d]||d),g=d),k=r[_]&&r[_][g]),typeof k>"u"||!k.length||!k[0]){var A;for(m in w=[],r[_])this.terminals_[m]&&m>2&&w.push("'"+this.terminals_[m]+"'");A=a.showPosition?"Parse error on line "+(c+1)+":\n"+a.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(A,{text:a.match,token:this.terminals_[g]||g,line:a.yylineno,loc:y,expected:w})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+g);switch(k[0]){case 1:n.push(g),i.push(a.yytext),s.push(a.yylloc),n.push(k[1]),g=null,l=a.yyleng,o=a.yytext,c=a.yylineno,y=a.yylloc;break;case 2:if(v=this.productions_[k[1]][1],E.$=i[i.length-v],E._$={first_line:s[s.length-(v||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(v||1)].first_column,last_column:s[s.length-1].last_column},p&&(E._$.range=[s[s.length-(v||1)].range[0],s[s.length-1].range[1]]),typeof(x=this.performAction.apply(E,[o,l,c,u.yy,k[1],i,s].concat(h)))<"u")return x;v&&(n=n.slice(0,-1*v*2),i=i.slice(0,-1*v),s=s.slice(0,-1*v)),n.push(this.productions_[k[1]][0]),i.push(E.$),s.push(E._$),b=r[n[n.length-2]][n[n.length-1]],n.push(b);break;case 3:return!0}}return!0}},r={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===i.length?this.yylloc.first_column:0)+i[i.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"},test_match:function(t,n){var e,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,n,e,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((e=this._input.match(this.rules[s[r]]))&&(!n||e[0].length>n[0].length)){if(n=e,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,s[r])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,n,e,i){switch(e){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function o(){this.yy={}}return s.lexer=r,o.prototype=s,s.Parser=o,new o}();o.parser=o;const c=o;let l=[],h=[],a={};class u{constructor(t,n,e=0){this.source=t,this.target=n,this.value=e}}class f{constructor(t){this.ID=t}}const y={nodesMap:a,getConfig:()=>(0,i.c)().sankey,getNodes:()=>h,getLinks:()=>l,getGraph:()=>({nodes:h.map((t=>({id:t.ID}))),links:l.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))}),addLink:(t,n,e)=>{l.push(new u(t,n,e))},findOrCreateNode:t=>(t=i.f.sanitizeText(t,(0,i.c)()),a[t]||(a[t]=new f(t),h.push(a[t])),a[t]),getAccTitle:i.g,setAccTitle:i.s,getAccDescription:i.a,setAccDescription:i.b,getDiagramTitle:i.D,setDiagramTitle:i.C,clear:()=>{l=[],h=[],a={},(0,i.E)()}};function d(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e<s||void 0===e&&s>=s)&&(e=s)}return e}function p(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}return e}function g(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let i=-1;for(let s of t)(s=+n(s,++i,t))&&(e+=s)}return e}function _(t){return t.target.depth}function k(t,n){return t.sourceLinks.length?t.depth:n-1}function x(t){return function(){return t}}function m(t,n){return b(t.source,n.source)||t.index-n.index}function v(t,n){return b(t.target,n.target)||t.index-n.index}function b(t,n){return t.y0-n.y0}function w(t){return t.value}function E(t){return t.index}function A(t){return t.nodes}function L(t){return t.links}function S(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function M({nodes:t}){for(const n of t){let t=n.y0,e=t;for(const e of n.sourceLinks)e.y0=t+e.width/2,t+=e.width;for(const t of n.targetLinks)t.y1=e+t.width/2,e+=t.width}}var I=Math.PI,T=2*I,O=1e-6,C=T-O;function D(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function P(){return new D}function j(t){return function(){return t}}function N(t){return t[0]}function $(t){return t[1]}D.prototype=P.prototype={constructor:D,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,s,r){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+s)+","+(this._y1=+r)},arcTo:function(t,n,e,i,s){t=+t,n=+n,e=+e,i=+i,s=+s;var r=this._x1,o=this._y1,c=e-t,l=i-n,h=r-t,a=o-n,u=h*h+a*a;if(s<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(u>O)if(Math.abs(a*c-l*h)>O&&s){var f=e-r,y=i-o,d=c*c+l*l,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),k=s*Math.tan((I-Math.acos((d+u-p)/(2*g*_)))/2),x=k/_,m=k/g;Math.abs(x-1)>O&&(this._+="L"+(t+x*h)+","+(n+x*a)),this._+="A"+s+","+s+",0,0,"+ +(a*f>h*y)+","+(this._x1=t+m*c)+","+(this._y1=n+m*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,i,s,r){t=+t,n=+n,r=!!r;var o=(e=+e)*Math.cos(i),c=e*Math.sin(i),l=t+o,h=n+c,a=1^r,u=r?i-s:s-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+h:(Math.abs(this._x1-l)>O||Math.abs(this._y1-h)>O)&&(this._+="L"+l+","+h),e&&(u<0&&(u=u%T+T),u>C?this._+="A"+e+","+e+",0,1,"+a+","+(t-o)+","+(n-c)+"A"+e+","+e+",0,1,"+a+","+(this._x1=l)+","+(this._y1=h):u>O&&(this._+="A"+e+","+e+",0,"+ +(u>=I)+","+a+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};var z=Array.prototype.slice;function F(t){return t.source}function U(t){return t.target}function W(t,n,e,i,s){t.moveTo(n,e),t.bezierCurveTo(n=(n+i)/2,e,n,s,i,s)}function G(t){return[t.source.x1,t.y0]}function V(t){return[t.target.x0,t.y1]}const X=class t{static next(n){return new t(n+ ++t.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};X.count=0;let q=X;const Q={left:function(t){return t.depth},right:function(t,n){return n-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?p(t.sourceLinks,_)-1:0},justify:k},Y={draw:function(t,n,e,o){const{securityLevel:c,sankey:l}=(0,i.c)(),h=i.ar.sankey;let a;"sandbox"===c&&(a=(0,i.j)("#i"+n));const u="sandbox"===c?(0,i.j)(a.nodes()[0].contentDocument.body):(0,i.j)("body"),f="sandbox"===c?u.select(`[id="${n}"]`):(0,i.j)(`[id="${n}"]`),y=(null==l?void 0:l.width)??h.width,_=(null==l?void 0:l.height)??h.width,I=(null==l?void 0:l.useMaxWidth)??h.useMaxWidth,T=(null==l?void 0:l.nodeAlignment)??h.nodeAlignment,O=(null==l?void 0:l.prefix)??h.prefix,C=(null==l?void 0:l.suffix)??h.suffix,D=(null==l?void 0:l.showValues)??h.showValues,X=o.db.getGraph(),Y=Q[T];(function(){let t,n,e,i=0,s=0,r=1,o=1,c=24,l=8,h=E,a=k,u=A,f=L,y=6;function _(){const _={nodes:u.apply(null,arguments),links:f.apply(null,arguments)};return function({nodes:t,links:n}){for(const[n,e]of t.entries())e.index=n,e.sourceLinks=[],e.targetLinks=[];const i=new Map(t.map(((n,e)=>[h(n,e,t),n])));for(const[t,e]of n.entries()){e.index=t;let{source:n,target:s}=e;"object"!=typeof n&&(n=e.source=S(i,n)),"object"!=typeof s&&(s=e.target=S(i,s)),n.sourceLinks.push(e),s.targetLinks.push(e)}if(null!=e)for(const{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(_),function({nodes:t}){for(const n of t)n.value=void 0===n.fixedValue?Math.max(g(n.sourceLinks,w),g(n.targetLinks,w)):n.fixedValue}(_),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.depth=s;for(const{target:n}of t.sourceLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(_),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.height=s;for(const{source:n}of t.targetLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(_),function(e){const h=function({nodes:t}){const e=d(t,(t=>t.depth))+1,s=(r-i-c)/(e-1),o=new Array(e);for(const n of t){const t=Math.max(0,Math.min(e-1,Math.floor(a.call(null,n,e))));n.layer=t,n.x0=i+t*s,n.x1=n.x0+c,o[t]?o[t].push(n):o[t]=[n]}if(n)for(const t of o)t.sort(n);return o}(e);t=Math.min(l,(o-s)/(d(h,(t=>t.length))-1)),function(n){const e=p(n,(n=>(o-s-(n.length-1)*t)/g(n,w)));for(const i of n){let n=s;for(const s of i){s.y0=n,s.y1=n+s.value*e,n=s.y1+t;for(const t of s.sourceLinks)t.width=t.value*e}n=(o-n+t)/(i.length+1);for(let t=0;t<i.length;++t){const e=i[t];e.y0+=n*(t+1),e.y1+=n*(t+1)}j(i)}}(h);for(let t=0;t<y;++t){const n=Math.pow(.99,t),e=Math.max(1-n,(t+1)/y);T(h,n,e),I(h,n,e)}}(_),M(_),_}function I(t,e,i){for(let s=1,r=t.length;s<r;++s){const r=t[s];for(const t of r){let n=0,i=0;for(const{source:e,value:s}of t.targetLinks){let r=s*(t.layer-e.layer);n+=N(e,t)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,P(t)}void 0===n&&r.sort(b),O(r,i)}}function T(t,e,i){for(let s=t.length-2;s>=0;--s){const r=t[s];for(const t of r){let n=0,i=0;for(const{target:e,value:s}of t.sourceLinks){let r=s*(e.layer-t.layer);n+=$(t,e)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,P(t)}void 0===n&&r.sort(b),O(r,i)}}function O(n,e){const i=n.length>>1,r=n[i];D(n,r.y0-t,i-1,e),C(n,r.y1+t,i+1,e),D(n,o,n.length-1,e),C(n,s,0,e)}function C(n,e,i,s){for(;i<n.length;++i){const r=n[i],o=(e-r.y0)*s;o>1e-6&&(r.y0+=o,r.y1+=o),e=r.y1+t}}function D(n,e,i,s){for(;i>=0;--i){const r=n[i],o=(r.y1-e)*s;o>1e-6&&(r.y0-=o,r.y1-=o),e=r.y0-t}}function P({sourceLinks:t,targetLinks:n}){if(void 0===e){for(const{source:{sourceLinks:t}}of n)t.sort(v);for(const{target:{targetLinks:n}}of t)n.sort(m)}}function j(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(v),e.sort(m)}function N(n,e){let i=n.y0-(n.sourceLinks.length-1)*t/2;for(const{target:s,width:r}of n.sourceLinks){if(s===e)break;i+=r+t}for(const{source:t,width:s}of e.targetLinks){if(t===n)break;i-=s}return i}function $(n,e){let i=e.y0-(e.targetLinks.length-1)*t/2;for(const{source:s,width:r}of e.targetLinks){if(s===n)break;i+=r+t}for(const{target:t,width:s}of n.sourceLinks){if(t===e)break;i-=s}return i}return _.update=function(t){return M(t),t},_.nodeId=function(t){return arguments.length?(h="function"==typeof t?t:x(t),_):h},_.nodeAlign=function(t){return arguments.length?(a="function"==typeof t?t:x(t),_):a},_.nodeSort=function(t){return arguments.length?(n=t,_):n},_.nodeWidth=function(t){return arguments.length?(c=+t,_):c},_.nodePadding=function(n){return arguments.length?(l=t=+n,_):l},_.nodes=function(t){return arguments.length?(u="function"==typeof t?t:x(t),_):u},_.links=function(t){return arguments.length?(f="function"==typeof t?t:x(t),_):f},_.linkSort=function(t){return arguments.length?(e=t,_):e},_.size=function(t){return arguments.length?(i=s=0,r=+t[0],o=+t[1],_):[r-i,o-s]},_.extent=function(t){return arguments.length?(i=+t[0][0],r=+t[1][0],s=+t[0][1],o=+t[1][1],_):[[i,s],[r,o]]},_.iterations=function(t){return arguments.length?(y=+t,_):y},_})().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10+(D?15:0)).nodeAlign(Y).extent([[0,0],[y,_]])(X);const B=(0,s.o)(r.d);f.append("g").attr("class","nodes").selectAll(".node").data(X.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=q.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>B(t.id))),f.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(X.nodes).join("text").attr("x",(t=>t.x0<y/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy",(D?"0":"0.35")+"em").attr("text-anchor",(t=>t.x0<y/2?"start":"end")).text((({id:t,value:n})=>D?`${t}\n${O}${Math.round(100*n)/100}${C}`:t));const K=f.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(X.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),R=(null==l?void 0:l.linkColor)||"gradient";if("gradient"===R){const t=K.append("linearGradient").attr("id",(t=>(t.uid=q.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>B(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>B(t.target.id)))}let Z;switch(R){case"gradient":Z=t=>t.uid;break;case"source":Z=t=>B(t.source.id);break;case"target":Z=t=>B(t.target.id);break;default:Z=R}K.append("path").attr("d",function(t){var n=F,e=U,i=N,s=$,r=null;function o(){var o,c=z.call(arguments),l=n.apply(this,c),h=e.apply(this,c);if(r||(r=o=P()),t(r,+i.apply(this,(c[0]=l,c)),+s.apply(this,c),+i.apply(this,(c[0]=h,c)),+s.apply(this,c)),o)return r=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(i="function"==typeof t?t:j(+t),o):i},o.y=function(t){return arguments.length?(s="function"==typeof t?t:j(+t),o):s},o.context=function(t){return arguments.length?(r=t??null,o):r},o}(W).source(G).target(V)).attr("stroke",Z).attr("stroke-width",(t=>Math.max(1,t.width))),(0,i.t)(void 0,f,0,I)}},B=c.parse.bind(c);c.parse=t=>B((t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim())(t));const K={parser:c,db:y,renderer:Y}},4250:(t,n,e)=>{e.d(n,{o:()=>l});var i=e(8923);class s extends Map{constructor(t,n=o){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,e]of t)this.set(n,e)}get(t){return super.get(r(this,t))}has(t){return super.has(r(this,t))}set(t,n){return super.set(function({_intern:t,_key:n},e){const i=n(e);return t.has(i)?t.get(i):(t.set(i,e),e)}(this,t),n)}delete(t){return super.delete(function({_intern:t,_key:n},e){const i=n(e);return t.has(i)&&(e=t.get(i),t.delete(i)),e}(this,t))}}function r({_intern:t,_key:n},e){const i=n(e);return t.has(i)?t.get(i):e}function o(t){return null!==t&&"object"==typeof t?t.valueOf():t}const c=Symbol("implicit");function l(){var t=new s,n=[],e=[],r=c;function o(i){let s=t.get(i);if(void 0===s){if(r!==c)return r;t.set(i,s=n.push(i)-1)}return e[s%e.length]}return o.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new s;for(const i of e)t.has(i)||t.set(i,n.push(i)-1);return o},o.range=function(t){return arguments.length?(e=Array.from(t),o):e.slice()},o.unknown=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return l(n,e).unknown(r)},i.i.apply(o,arguments),o}},8923:(t,n,e)=>{function i(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}e.d(n,{i:()=>i})}}]);