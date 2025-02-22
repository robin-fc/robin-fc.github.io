"use strict";(self.webpackChunkvictor_small_world=self.webpackChunkvictor_small_world||[]).push([[6153],{6153:(e,t,s)=>{s.r(t),s.d(t,{SSAParser:()=>p,default:()=>b});var a=s(9776);const r=/^Format:[\s\t]*/,i=/^Style:[\s\t]*/,l=/^Dialogue:[\s\t]*/,n=/[\s\t]*,[\s\t]*/,c=/\{[^}]+\}/g,h=/\\N/g,o=/^\[(.*)[\s\t]?Styles\]$/,u=/^\[(.*)[\s\t]?Events\]$/;class p{h;O=0;c=null;l=[];m=[];N=null;f;P={};async init(e){this.h=e,e.errors&&(this.f=(await s.e(6705).then(s.bind(s,6705))).ParseErrorBuilder)}parse(e,t){if(this.O)switch(this.O){case 1:if(""===e)this.O=0;else if(i.test(e))if(this.N){const t=e.replace(i,"").split(n);this.S(t)}else this.g(this.f?.T("Style",t));else r.test(e)?this.N=e.replace(r,"").split(n):u.test(e)&&(this.N=null,this.O=2);break;case 2:if(""===e)this.Q();else if(l.test(e))if(this.Q(),this.N){const s=e.replace(l,"").split(n),a=this.U(s,t);a&&(this.c=a)}else this.g(this.f?.T("Dialogue",t));else this.c?this.c.text+="\n"+e.replace(c,"").replace(h,"\n"):r.test(e)?this.N=e.replace(r,"").split(n):o.test(e)?(this.N=null,this.O=1):u.test(e)&&(this.N=null)}else""===e||(o.test(e)?(this.N=null,this.O=1):u.test(e)&&(this.N=null,this.O=2))}done(){return{metadata:{},cues:this.l,regions:[],errors:this.m}}Q(){this.c&&(this.l.push(this.c),this.h.onCue?.(this.c),this.c=null)}S(e){let t,s,a,r,i="Default",l={},n="center",c="bottom",h=1.2,o=3,u=[];for(let p=0;p<this.N.length;p++){const f=this.N[p],b=e[p];switch(f){case"Name":i=b;break;case"Fontname":l["font-family"]=b;break;case"Fontsize":l["font-size"]=`calc(${b} / var(--overlay-height))`;break;case"PrimaryColour":const e=g(b);e&&(l["--cue-color"]=e);break;case"BorderStyle":o=parseInt(b,10);break;case"BackColour":r=g(b);break;case"OutlineColour":const p=g(b);p&&(a=p);break;case"Bold":parseInt(b)&&(l["font-weight"]="bold");break;case"Italic":parseInt(b)&&(l["font-style"]="italic");break;case"Underline":parseInt(b)&&(l["text-decoration"]="underline");break;case"StrikeOut":parseInt(b)&&(l["text-decoration"]="line-through");break;case"Spacing":l["letter-spacing"]=b+"px";break;case"AlphaLevel":l.opacity=parseFloat(b);break;case"ScaleX":u.push(`scaleX(${parseFloat(b)/100})`);break;case"ScaleY":u.push(`scaleY(${parseFloat(b)/100})`);break;case"Angle":u.push(`rotate(${b}deg)`);break;case"Shadow":h=1.2*parseInt(b,10);break;case"MarginL":l["--cue-width"]="auto",l["--cue-left"]=parseFloat(b)+"px";break;case"MarginR":l["--cue-width"]="auto",l["--cue-right"]=parseFloat(b)+"px";break;case"MarginV":s=parseFloat(b);break;case"Outline":t=parseInt(b,10);break;case"Alignment":const f=parseInt(b,10);switch(f>=4&&(c=f>=7?"top":"center"),f%3){case 1:n="start";break;case 2:n="center";break;case 3:n="end"}}}if(l.R=c,l["--cue-white-space"]="normal",l["--cue-line-height"]="normal",l["--cue-text-align"]=n,"center"===c?(l["--cue-top"]="50%",u.push("translateY(-50%)")):l[`--cue-${c}`]=(s||0)+"px",1===o&&(l["--cue-padding-y"]="0"),(1===o||r)&&(l["--cue-bg-color"]=1===o?"none":r),3===o&&a&&(l["--cue-outline"]=`${t}px solid ${a}`),1===o&&"number"==typeof t){const e=r??"#000";l["--cue-text-shadow"]=[a&&f(1.2*t,1.2*h,a),a?f(t*(t/2),h*(t/2),e):f(t,h,e)].filter(Boolean).join(", ")}u.length&&(l["--cue-transform"]=u.join(" ")),this.P[i]=l}U(e,t){const s=this.V(e),r=this.q(s.Start,s.End,t);if(!r)return;const i=new a.b(r[0],r[1],""),l={...this.P[s.Style]||{}},n=s.Name?`<v ${s.Name}>`:"",o=l.R,u=s.MarginL&&parseFloat(s.MarginL),p=s.MarginR&&parseFloat(s.MarginR),g=s.MarginV&&parseFloat(s.MarginV);return u&&(l["--cue-width"]="auto",l["--cue-left"]=u+"px"),p&&(l["--cue-width"]="auto",l["--cue-right"]=p+"px"),g&&"center"!==o&&(l[`--cue-${o}`]=g+"px"),i.text=n+e.slice(this.N.length-1).join(", ").replace(c,"").replace(h,"\n"),delete l.R,Object.keys(l).length&&(i.style=l),i}V(e){const t={};for(let s=0;s<this.N.length;s++)t[this.N[s]]=e[s];return t}q(e,t,s){const r=(0,a.p)(e),i=(0,a.p)(t);if(null!==r&&null!==i&&i>r)return[r,i];null===r&&this.g(this.f?.s(e,s)),null===i&&this.g(this.f?.t(t,s)),null!=r&&null!==i&&i>r&&this.g(this.f?.u(r,i,s))}g(e){if(e){if(this.m.push(e),this.h.strict)throw this.h.cancel(),e;this.h.onError?.(e)}}}function g(e){const t=parseInt(e.replace("&H",""),16);return t>=0?"rgba("+[255&t,t>>8&255,t>>16&255,(t>>24&255^255)/255].join(",")+")":null}function f(e,t,s){const a=Math.ceil(2*Math.PI*e);let r="";for(let i=0;i<a;i++){const l=2*Math.PI*i/a;r+=e*Math.cos(l)+"px "+t*Math.sin(l)+"px 0 "+s+(i==a-1?"":",")}return r}function b(){return new p}}}]);