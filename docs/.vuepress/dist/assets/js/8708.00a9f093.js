"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8325,8708],{3760:(t,e,s)=>{s.d(e,{h:()=>r});var i=s(8988),o=s(7459);class r{#t;src=(0,i.O)("");referrerPolicy=null;get iframe(){return this.#t}constructor(t){this.#t=t,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&t.setAttribute("referrerpolicy",this.referrerPolicy)}setup(){(0,i.k6)(window,"message",this.#e.bind(this)),(0,i.k6)(this.#t,"load",this.onLoad.bind(this)),(0,i.QZ)(this.#s.bind(this))}#s(){const t=this.src();if(!t.length)return void this.#t.setAttribute("src","");const e=(0,i.se)((()=>this.buildParams()));this.#t.setAttribute("src",(0,o.xF)(t,e))}postMessage(t,e){this.#t.contentWindow?.postMessage(JSON.stringify(t),e??"*")}#e(t){const e=this.getOrigin();if(!(null!==t.source&&t.source!==this.#t?.contentWindow||(0,i.Kg)(e)&&e!==t.origin)){try{const e=JSON.parse(t.data);return void(e&&this.onMessage(e,t))}catch(t){}t.data&&this.onMessage(t.data,t)}}}},8325:(t,e,s)=>{s.d(e,{findYouTubePoster:()=>n,resolveYouTubeVideoId:()=>a});const i=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,o=new Map,r=new Map;function a(t){return t.match(i)?.[1]}async function n(t,e){if(o.has(t))return o.get(t);if(r.has(t))return r.get(t);const s=new Promise((async s=>{const i=["maxresdefault","sddefault","hqdefault"];for(const r of i)for(const i of[!0,!1]){const a=c(t,r,i);if((await fetch(a,{mode:"no-cors",signal:e.signal})).status<400)return o.set(t,a),void s(a)}})).catch((()=>"")).finally((()=>r.delete(t)));return r.set(t,s),s}function c(t,e,s){return`https://i.ytimg.com/${s?"vi_webp":"vi"}/${t}/${e}.${s?"webp":"jpg"}`}},8708:(t,e,s)=>{s.r(e),s.d(e,{YouTubeProvider:()=>c});var i=s(8988),o=s(5148),r=s(7459),a=s(3760),n=s(8325);class c extends a.h{$$PROVIDER_TYPE="YOUTUBE";scope=(0,i.Ds)();#i;#o=(0,i.O)("");#r=-1;#a=null;#n=-1;#c=!1;#d=new Map;constructor(t,e){super(t),this.#i=e}language="en";color="red";cookies=!1;get currentSrc(){return this.#a}get type(){return"youtube"}get videoId(){return this.#o()}preconnect(){(0,r.kZ)(this.getOrigin())}setup(){super.setup(),(0,i.QZ)(this.#h.bind(this)),this.#i.notify("provider-setup",this)}destroy(){this.#u();for(const t of this.#d.values())for(const{reject:e}of t)e("provider destroyed");this.#d.clear()}async play(){return this.#l("playVideo")}#p(t){this.#g("playVideo")?.reject(t)}async pause(){return this.#l("pauseVideo")}#m(t){this.#g("pauseVideo")?.reject(t)}setMuted(t){t?this.#l("mute"):this.#l("unMute")}setCurrentTime(t){this.#l("seekTo",t),this.#i.notify("seeking",t)}setVolume(t){this.#l("setVolume",100*t)}setPlaybackRate(t){this.#l("setPlaybackRate",t)}async loadSource(t){if(!(0,i.Kg)(t.src))return this.#a=null,void this.#o.set("");const e=(0,n.resolveYouTubeVideoId)(t.src);this.#o.set(e??""),this.#a=t}getOrigin(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}#h(){this.#u();const t=this.#o();t?(this.src.set(`${this.getOrigin()}/embed/${t}`),this.#i.notify("load-start")):this.src.set("")}buildParams(){const{keyDisabled:t}=this.#i.$props,{muted:e,playsInline:s,nativeControls:i}=this.#i.$state,o=i();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:o?1:void 0,color:this.color,controls:o?1:0,disablekb:!o||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:o?1:3,mute:e()?1:0,playsinline:s()?1:0}}#l(t,e){let s=(0,i.vI)(),o=this.#d.get(t);return o||this.#d.set(t,o=[]),o.push(s),this.postMessage({event:"command",func:t,args:e?[e]:void 0}),s.promise}onLoad(){window.setTimeout((()=>this.postMessage({event:"listening"})),100)}#y(t){this.#i.notify("loaded-metadata"),this.#i.notify("loaded-data"),this.#i.delegate.ready(void 0,t)}#f(t){this.#g("pauseVideo")?.resolve(),this.#i.notify("pause",void 0,t)}#v(t,e){const{duration:s,realCurrentTime:i}=this.#i.$state,o=0===this.#r,r=o?s():t;this.#i.notify("time-change",r,e),!o&&Math.abs(r-i())>1&&this.#i.notify("seeking",r,e)}#b(t,e,s){const i={buffered:new o.zJ(0,t),seekable:e};this.#i.notify("progress",i,s);const{seeking:r,realCurrentTime:a}=this.#i.$state;r()&&t>a()&&this.#k(s)}#k(t){const{paused:e,realCurrentTime:s}=this.#i.$state;window.clearTimeout(this.#n),this.#n=window.setTimeout((()=>{this.#i.notify("seeked",s(),t),this.#n=-1}),e()?100:0)}#w(t){const{seeking:e}=this.#i.$state;e()&&this.#k(t),this.#i.notify("pause",void 0,t),this.#i.notify("end",void 0,t)}#x(t,e){const{paused:s,seeking:i}=this.#i.$state,o=1===t,r=3===t,a=this.#P("playVideo"),n=s()&&(r||o);if(r&&this.#i.notify("waiting",void 0,e),i()&&o&&this.#k(e),this.#c&&o)return this.pause(),this.#c=!1,void this.setMuted(this.#i.$state.muted());if(!a&&n)return this.#c=!0,void this.setMuted(!0);switch(n&&(this.#g("playVideo")?.resolve(),this.#i.notify("play",void 0,e)),t){case 5:this.#y(e);break;case 1:this.#i.notify("playing",void 0,e);break;case 2:this.#f(e);break;case 0:this.#w(e)}this.#r=t}onMessage({info:t},e){if(!t)return;const{title:s,intrinsicDuration:r,playbackRate:a}=this.#i.$state;if((0,i.Gv)(t.videoData)&&t.videoData.title!==s()&&this.#i.notify("title-change",t.videoData.title,e),(0,i.Et)(t.duration)&&t.duration!==r()){if((0,i.Et)(t.videoLoadedFraction)){const s=t.progressState?.loaded??t.videoLoadedFraction*t.duration,i=new o.zJ(0,t.duration);this.#b(s,i,e)}this.#i.notify("duration-change",t.duration,e)}if((0,i.Et)(t.playbackRate)&&t.playbackRate!==a()&&this.#i.notify("rate-change",t.playbackRate,e),t.progressState){const{current:s,seekableStart:i,seekableEnd:a,loaded:n,duration:c}=t.progressState;this.#v(s,e),this.#b(n,new o.zJ(i,a),e),c!==r()&&this.#i.notify("duration-change",c,e)}if((0,i.Et)(t.volume)&&(0,i.Lm)(t.muted)&&!this.#c){const s={muted:t.muted,volume:t.volume/100};this.#i.notify("volume-change",s,e)}(0,i.Et)(t.playerState)&&t.playerState!==this.#r&&this.#x(t.playerState,e)}#u(){this.#r=-1,this.#n=-1,this.#c=!1}#g(t){return this.#d.get(t)?.shift()}#P(t){return Boolean(this.#d.get(t)?.length)}}}}]);