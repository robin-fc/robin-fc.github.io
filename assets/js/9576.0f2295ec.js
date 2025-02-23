"use strict";(self.webpackChunkfc_small_world=self.webpackChunkfc_small_world||[]).push([[4804,9576],{6525:(e,t,s)=>{s.d(t,{h:()=>o});var i=s(7933),r=s(4630);class o{#e;src=(0,i.O)("");referrerPolicy=null;get iframe(){return this.#e}constructor(e){this.#e=e,e.setAttribute("frameBorder","0"),e.setAttribute("aria-hidden","true"),e.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&e.setAttribute("referrerpolicy",this.referrerPolicy)}setup(){(0,i.k6)(window,"message",this.#t.bind(this)),(0,i.k6)(this.#e,"load",this.onLoad.bind(this)),(0,i.QZ)(this.#s.bind(this))}#s(){const e=this.src();if(!e.length)return void this.#e.setAttribute("src","");const t=(0,i.se)((()=>this.buildParams()));this.#e.setAttribute("src",(0,r.xF)(e,t))}postMessage(e,t){this.#e.contentWindow?.postMessage(JSON.stringify(e),t??"*")}#t(e){const t=this.getOrigin();if(!(null!==e.source&&e.source!==this.#e?.contentWindow||(0,i.Kg)(t)&&t!==e.origin)){try{const t=JSON.parse(e.data);return void(t&&this.onMessage(t,e))}catch(e){}e.data&&this.onMessage(e.data,e)}}}},6421:(e,t,s)=>{s.d(t,{e:()=>r});var i=s(7933);class r{#i;#r;constructor(e){this.#r=e}start(){(0,i.b0)(this.#i)&&this.#o()}stop(){(0,i.Et)(this.#i)&&window.cancelAnimationFrame(this.#i),this.#i=void 0}#o(){this.#i=window.requestAnimationFrame((()=>{(0,i.b0)(this.#i)||(this.#r(),this.#o())}))}}},4804:(e,t,s)=>{s.d(t,{getVimeoVideoInfo:()=>n,resolveVimeoVideoId:()=>a});const i=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:(?:\?hash=|\?h=|\/)(.*))?/,r=new Map,o=new Map;function a(e){const t=e.match(i);return{videoId:t?.[1],hash:t?.[2]}}async function n(e,t,s){if(r.has(e))return r.get(e);if(o.has(e))return o.get(e);let i=`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${e}`;s&&(i=i.concat(`?h=${s}`));const a=window.fetch(i,{mode:"cors",signal:t.signal}).then((e=>e.json())).then((t=>{const s=t?.thumbnail_url?.match(/vimeocdn.com\/video\/(.*)?_/)?.[1],i=s?`https://i.vimeocdn.com/video/${s}_1920x1080.webp`:"",o={title:t?.title??"",duration:t?.duration??0,poster:i,pro:"basic"!==t.account_type};return r.set(e,o),o})).finally((()=>o.delete(e)));return o.set(e,a),a}},9576:(e,t,s)=>{s.r(t),s.d(t,{VimeoProvider:()=>p});var i=s(7933),r=s(3632),o=s(4473),a=s(9289),n=s(1864),h=s(6421),c=s(4630),d=s(6525),l=s(4804);const u=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];class p extends d.h{$$PROVIDER_TYPE="VIMEO";scope=(0,i.Ds)();fullscreen;#a;#n=(0,i.O)("");#h=(0,i.O)(!1);#c=null;#d=null;#l=!1;#u=new o.zJ(0,0);#p=new h.e(this.#m.bind(this));#f=null;#g=null;#y=new Map;#v=null;constructor(e,t){super(e),this.#a=t;const s=this;this.fullscreen={get active(){return s.#l},supported:!0,enter:()=>this.#b("requestFullscreen"),exit:()=>this.#b("exitFullscreen")}}cookies=!1;title=!0;byline=!0;portrait=!0;color="00ADEF";get type(){return"vimeo"}get currentSrc(){return this.#d}get videoId(){return this.#n()}get hash(){return this.#c}get isPro(){return this.#h()}preconnect(){(0,c.kZ)(this.getOrigin())}setup(){super.setup(),(0,i.QZ)(this.#k.bind(this)),(0,i.QZ)(this.#x.bind(this)),(0,i.QZ)(this.#w.bind(this)),this.#a.notify("provider-setup",this)}destroy(){this.#P(),this.fullscreen=void 0;for(const e of this.#y.values())for(const{reject:t}of e)t("provider destroyed");this.#y.clear(),this.#b("destroy")}async play(){return this.#b("play")}async pause(){return this.#b("pause")}setMuted(e){this.#b("setMuted",e)}setCurrentTime(e){this.#b("seekTo",e),this.#a.notify("seeking",e)}setVolume(e){this.#b("setVolume",e),this.#b("setMuted",(0,i.se)(this.#a.$state.muted))}setPlaybackRate(e){this.#b("setPlaybackRate",e)}async loadSource(e){if(!(0,i.Kg)(e.src))return this.#d=null,this.#c=null,void this.#n.set("");const{videoId:t,hash:s}=(0,l.resolveVimeoVideoId)(e.src);this.#n.set(t??""),this.#c=s??null,this.#d=e}#k(){this.#P();const e=this.#n();e?(this.src.set(`${this.getOrigin()}/video/${e}`),this.#a.notify("load-start")):this.src.set("")}#x(){const e=this.#n();if(!e)return;const t=(0,i.vI)(),s=new AbortController;return this.#v=t,(0,l.getVimeoVideoInfo)(e,s,this.#c).then((e=>{t.resolve(e)})).catch((e=>{t.reject()})),()=>{t.reject(),s.abort()}}#w(){const e=this.#h(),{$state:t,qualities:s}=this.#a;if(t.canSetPlaybackRate.set(e),s[n.j.setReadonly](!e),e)return(0,i.k6)(s,"change",(()=>{if(s.auto)return;const e=s.selected?.id;e&&this.#b("setQuality",e)}))}getOrigin(){return"https://player.vimeo.com"}buildParams(){const{keyDisabled:e}=this.#a.$props,{playsInline:t,nativeControls:s}=this.#a.$state,i=s();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:i,h:this.hash,keyboard:i&&!e(),transparent:!0,playsinline:t(),dnt:!this.cookies}}#m(){this.#b("getCurrentTime")}#C=!1;#I(e,t){if(this.#C&&0===e)return;const{realCurrentTime:s,paused:i,bufferedEnd:r,seekableEnd:o,live:a}=this.#a.$state;if(s()===e)return;const n=s();this.#a.notify("time-change",e,t),Math.abs(n-e)>1.5&&(this.#a.notify("seeking",e,t),!i()&&r()<e&&this.#a.notify("waiting",void 0,t)),!a()&&o()-e<.01&&(this.#a.notify("end",void 0,t),this.#C=!0,setTimeout((()=>{this.#C=!1}),500))}#T(e,t){this.#a.notify("seeked",e,t)}#V(e){const t=this.#n();this.#v?.promise.then((t=>{if(!t)return;const{title:s,poster:i,duration:r,pro:o}=t;this.#h.set(o),this.#a.notify("title-change",s,e),this.#a.notify("poster-change",i,e),this.#a.notify("duration-change",r,e),this.#A(r,e)})).catch((()=>{t===this.#n()&&(this.#b("getVideoTitle"),this.#b("getDuration"))}))}#A(e,t){const{nativeControls:s}=this.#a.$state,i=s();this.#u=new o.zJ(0,e);const r={buffered:new o.zJ(0,0),seekable:this.#u,duration:e};this.#a.delegate.ready(r,t),i||this.#b("_hideOverlay"),this.#b("getQualities"),this.#b("getChapters")}#R(e,t,s){switch(e){case"getVideoTitle":const e=t;this.#a.notify("title-change",e,s);break;case"getDuration":const r=t;this.#a.$state.canPlay()?this.#a.notify("duration-change",r,s):this.#A(r,s);break;case"getCurrentTime":this.#I(t,s);break;case"getBuffered":(0,i.cy)(t)&&t.length&&this.#$(t[t.length-1][1],s);break;case"setMuted":this.#M((0,i.se)(this.#a.$state.volume),t,s);break;case"getChapters":this.#E(t);break;case"getQualities":this.#S(t,s)}this.#Q(e)?.resolve()}#F(){for(const e of u)this.#b("addEventListener",e)}#O(e){this.#p.stop(),this.#a.notify("pause",void 0,e)}#q(e){this.#p.start(),this.#a.notify("play",void 0,e)}#j(e){const{paused:t}=this.#a.$state;t()||this.#C||this.#a.notify("playing",void 0,e)}#$(e,t){const s={buffered:new o.zJ(0,e),seekable:this.#u};this.#a.notify("progress",s,t)}#L(e){this.#a.notify("waiting",void 0,e)}#_(e){const{paused:t}=this.#a.$state;t()||this.#a.notify("playing",void 0,e)}#J(e){const{paused:t}=this.#a.$state;t()&&this.#a.notify("play",void 0,e),this.#a.notify("waiting",void 0,e)}#M(e,t,s){const i={volume:e,muted:t};this.#a.notify("volume-change",i,s)}#E(e){if(this.#B(),!e.length)return;const t=new a.to({kind:"chapters",default:!0}),{seekableEnd:s}=this.#a.$state;for(let i=0;i<e.length;i++){const r=e[i],o=e[i+1];t.addCue(new window.VTTCue(r.startTime,o?.startTime??s(),r.title))}this.#g=t,this.#a.textTracks.add(t)}#B(){this.#g&&(this.#a.textTracks.remove(this.#g),this.#g=null)}#S(e,t){this.#a.qualities[r.k.enableAuto]=e.some((e=>"auto"===e.id))?()=>this.#b("setQuality","auto"):void 0;for(const s of e){if("auto"===s.id)continue;const e=+s.id.slice(0,-1);isNaN(e)||this.#a.qualities[n.j.add]({id:s.id,width:e*(16/9),height:e,codec:"avc1,h.264",bitrate:-1},t)}this.#U(e.find((e=>e.active)),t)}#U({id:e}={},t){if(!e)return;const s="auto"===e,i=this.#a.qualities.getById(e);s?(this.#a.qualities[r.k.setAuto](s,t),this.#a.qualities[n.j.select](void 0,!0,t)):this.#a.qualities[n.j.select](i??void 0,!0,t)}#z(e,t,s){switch(e){case"ready":this.#F();break;case"loaded":this.#V(s);break;case"play":this.#q(s);break;case"playProgress":this.#j(s);break;case"pause":this.#O(s);break;case"loadProgress":this.#$(t.seconds,s);break;case"waiting":this.#J(s);break;case"bufferstart":this.#L(s);break;case"bufferend":this.#_(s);break;case"volumechange":this.#M(t.volume,(0,i.se)(this.#a.$state.muted),s);break;case"durationchange":this.#u=new o.zJ(0,t.duration),this.#a.notify("duration-change",t.duration,s);break;case"playbackratechange":this.#a.notify("rate-change",t.playbackRate,s);break;case"qualitychange":this.#U(t,s);break;case"fullscreenchange":this.#l=t.fullscreen,this.#a.notify("fullscreen-change",t.fullscreen,s);break;case"enterpictureinpicture":this.#a.notify("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.#a.notify("picture-in-picture-change",!1,s);break;case"ended":this.#a.notify("end",void 0,s);break;case"error":this.#D(t,s);break;case"seek":case"seeked":this.#T(t.seconds,s)}}#D(e,t){const{message:s,method:i}=e;"setPlaybackRate"===i&&this.#h.set(!1),i&&this.#Q(i)?.reject(s)}onMessage(e,t){e.event?this.#z(e.event,e.data,t):e.method&&this.#R(e.method,e.value,t)}onLoad(){}async#b(e,t){let s=(0,i.vI)(),r=this.#y.get(e);return r||this.#y.set(e,r=[]),r.push(s),this.postMessage({method:e,value:t}),s.promise}#P(){this.#p.stop(),this.#u=new o.zJ(0,0),this.#v=null,this.#f=null,this.#h.set(!1),this.#B()}#Q(e){return this.#y.get(e)?.shift()}}}}]);