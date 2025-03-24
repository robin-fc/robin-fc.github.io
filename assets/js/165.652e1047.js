"use strict";(self.webpackChunkrobin_fc_github_io=self.webpackChunkrobin_fc_github_io||[]).push([[165],{165:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>u,c:()=>p,d:()=>f,e:()=>d,f:()=>x,g:()=>v,i:()=>s,s:()=>a});var r=n(6355),i=n(3634),o=n(6246),l=n(1065);function a(e){return"string"==typeof e?new i.S([document.querySelectorAll(e)],[document.documentElement]):new i.S([(0,i.x)(e)],i.v)}function s(e,t){return!!e.children(t).length}function d(e){return h(e.v)+":"+h(e.w)+":"+h(e.name)}var c=/:/g;function h(e){return e?String(e).replace(c,"\\:"):""}function g(e,t){t&&e.attr("style",t)}function f(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if((0,i.y)(n)){var r=n.transition;if((0,i.z)(r))return r(e)}return e}function u(e,t){var n=e.append("foreignObject").attr("width","100000"),r=n.append("xhtml:div");r.attr("xmlns","http://www.w3.org/1999/xhtml");var i=t.label;switch(typeof i){case"function":r.insert(i);break;case"object":r.insert((function(){return i}));break;default:r.html(i)}g(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap");var o=r.node().getBoundingClientRect();return n.attr("width",o.width).attr("height",o.height),n}const w={},b=async function(e,t,n,r,o,l){const a=r.select(`[id="${n}"]`),s=Object.keys(e);for(const n of s){const r=e[n];let s="default";r.classes.length>0&&(s=r.classes.join(" ")),s+=" flowchart-label";const d=(0,i.o)(r.styles);let c,h=void 0!==r.text?r.text:r.id;if(i.l.info("vertex",r,r.labelType),"markdown"===r.labelType)i.l.info("vertex",r,r.labelType);else if((0,i.p)((0,i.c)().flowchart.htmlLabels))c=u(a,{label:h}).node(),c.parentNode.removeChild(c);else{const e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=h.split(i.f.lineBreakRegex);for(const n of t){const t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}c=e}let g=0,f="";switch(r.type){case"round":g=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}const p=await(0,i.r)(h,(0,i.c)());t.setNode(r.id,{labelStyle:d.labelStyle,shape:f,labelText:p,labelType:r.labelType,rx:g,ry:g,class:s,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:l.db.getTooltip(r.id)||"",domId:l.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,i.c)().flowchart.padding}),i.l.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:f,labelText:p,rx:g,ry:g,class:s,style:d.style,id:r.id,domId:l.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,i.c)().flowchart.padding})}},y=async function(e,t,n){i.l.info("abc78 edges = ",e);let r,o,l=0,a={};if(void 0!==e.defaultStyle){const t=(0,i.o)(e.defaultStyle);r=t.style,o=t.labelStyle}for(const n of e){l++;const s="L-"+n.start+"-"+n.end;void 0===a[s]?(a[s]=0,i.l.info("abc78 new entry",s,a[s])):(a[s]++,i.l.info("abc78 new entry",s,a[s]));let d=s+"-"+a[s];i.l.info("abc78 new link id to be used is",s,d,a[s]);const c="LS-"+n.start,h="LE-"+n.end,g={style:"",labelStyle:""};switch(g.minlen=n.length||1,"arrow_open"===n.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let f="",p="";switch(n.stroke){case"normal":f="fill:none;",void 0!==r&&(f=r),void 0!==o&&(p=o),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,i.o)(n.style);f=e.style,p=e.labelStyle}g.style=g.style+=f,g.labelStyle=g.labelStyle+=p,void 0!==n.interpolate?g.curve=(0,i.q)(n.interpolate,i.n):void 0!==e.defaultInterpolate?g.curve=(0,i.q)(e.defaultInterpolate,i.n):g.curve=(0,i.q)(w.curve,i.n),void 0===n.text?void 0!==n.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=n.labelType,g.label=await(0,i.r)(n.text.replace(i.f.lineBreakRegex,"\n"),(0,i.c)()),void 0===n.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=d,g.classes="flowchart-link "+c+" "+h,t.setEdge(n.start,n.end,g,l)}},x={setConf:function(e){const t=Object.keys(e);for(const n of t)w[n]=e[n]},addVertices:b,addEdges:y,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,l){i.l.info("Drawing flowchart");let s=l.db.getDirection();void 0===s&&(s="TD");const{securityLevel:d,flowchart:c}=(0,i.c)(),h=c.nodeSpacing||50,g=c.rankSpacing||50;let f;"sandbox"===d&&(f=(0,i.j)("#i"+t));const p="sandbox"===d?(0,i.j)(f.nodes()[0].contentDocument.body):(0,i.j)("body"),u="sandbox"===d?f.nodes()[0].contentDocument:document,w=new r.G({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:h,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let x;const v=l.db.getSubGraphs();i.l.info("Subgraphs - ",v);for(let e=v.length-1;e>=0;e--)x=v[e],i.l.info("Subgraph - ",x),l.db.addVertex(x.id,{text:x.title,type:x.labelType},"group",void 0,x.classes,x.dir);const m=l.db.getVertices(),k=l.db.getEdges();i.l.info("Edges",k);let S=0;for(S=v.length-1;S>=0;S--){x=v[S],a("cluster").append("text");for(let e=0;e<x.nodes.length;e++)i.l.info("Setting up subgraphs",x.nodes[e],x.id),w.setParent(x.nodes[e],x.id)}await b(m,w,t,p,u,l),await y(k,w);const C=p.select(`[id="${t}"]`),T=p.select("#"+t+" g");if(await(0,o.r)(T,w,["point","circle","cross"],"flowchart",t),i.A.insertTitle(C,"flowchartTitleText",c.titleTopMargin,l.db.getDiagramTitle()),(0,i.t)(w,C,c.diagramPadding,c.useMaxWidth),l.db.indexNodes("subGraph"+S),!c.htmlLabels){const e=u.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=u.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(m).forEach((function(e){const n=m[e];if(n.link){const r=(0,i.j)("#"+t+' [id="'+e+'"]');if(r){const e=u.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),i=r.select(".label-container");i&&t.append((function(){return i.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},v=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .katex path {\n    fill: #000;\n    stroke: #000;\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${(e=>{const t=l.c,n=t(e,"r"),r=t(e,"g"),o=t(e,"b");return(0,i.B)(n,r,o,.5)})(e.edgeLabelBackground)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`},1065:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(3634);const i=(e,t)=>r.aI.lang.round(r.aJ.parse(e)[t])},3159:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(6355),i=4;function o(e){return(0,r.c)(e,i)}},6246:(e,t,n)=>{n.d(t,{r:()=>T});var r=n(6355),i=n(3573),o=n(3159),l=n(6698),a=n(3634),s=n(1539);function d(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:c(e),edges:h(e)};return(0,r.i)(e.graph())||(t.value=(0,o.c)(e.graph())),t}function c(e){return(0,i.m)(e.nodes(),(function(t){var n=e.node(t),i=e.parent(t),o={v:t};return(0,r.i)(n)||(o.value=n),(0,r.i)(i)||(o.parent=i),o}))}function h(e){return(0,i.m)(e.edges(),(function(t){var n=e.edge(t),i={v:t.v,w:t.w};return(0,r.i)(t.name)||(i.name=t.name),(0,r.i)(n)||(i.value=n),i}))}let g={},f={},p={};const u=(e,t)=>(a.l.trace("In isDescendant",t," ",e," = ",f[t].includes(e)),!!f[t].includes(e)),w=(e,t,n,r)=>{a.l.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const i=t.children(e)||[];e!==r&&i.push(e),a.l.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)w(i,t,n,r);else{const o=t.node(i);a.l.info("cp ",i," to ",r," with parent ",e),n.setNode(i,o),r!==t.parent(i)&&(a.l.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(a.l.debug("Setting parent",i,e),n.setParent(i,e)):(a.l.info("In copy ",e,"root",r,"data",t.node(e),r),a.l.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const l=t.edges(i);a.l.debug("Copying Edges",l),l.forEach((i=>{a.l.info("Edge",i);const o=t.edge(i.v,i.w,i.name);a.l.info("Edge data",o,r);try{((e,t)=>(a.l.info("Descendants of ",t," is ",f[t]),a.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(f[t]?f[t].includes(e.v)||u(e.v,t)||u(e.w,t)||f[t].includes(e.w):(a.l.debug("Tilt, ",t,",not in descendants"),!1))))(i,r)?(a.l.info("Copying as ",i.v,i.w,o,i.name),n.setEdge(i.v,i.w,o,i.name),a.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):a.l.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(e){a.l.error(e)}}))}a.l.debug("Removing node",i),t.removeNode(i)}))},b=(e,t)=>{const n=t.children(e);let r=[...n];for(const i of n)p[i]=e,r=[...r,...b(i,t)];return r},y=(e,t)=>{a.l.trace("Searching",e);const n=t.children(e);if(a.l.trace("Searching children of id ",e,n),n.length<1)return a.l.trace("This is a valid node",e),e;for(const r of n){const n=y(r,t);if(n)return a.l.trace("Found replacement for",e," => ",n),n}},x=e=>g[e]&&g[e].externalConnections&&g[e]?g[e].id:e,v=(e,t)=>{if(a.l.warn("extractor - ",t,d(e),e.children("D")),t>10)return void a.l.error("Bailing out");let n=e.nodes(),i=!1;for(const t of n){const n=e.children(t);i=i||n.length>0}if(i){a.l.debug("Nodes = ",n,t);for(const i of n)if(a.l.debug("Extracting node",i,g,g[i]&&!g[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),g[i])if(!g[i].externalConnections&&e.children(i)&&e.children(i).length>0){a.l.warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";g[i]&&g[i].clusterData&&g[i].clusterData.dir&&(n=g[i].clusterData.dir,a.l.warn("Fixing dir",g[i].clusterData.dir,n));const o=new r.G({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));a.l.warn("Old graph before copy",d(e)),w(i,e,o,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:g[i].clusterData,labelText:g[i].labelText,graph:o}),a.l.warn("New graph after copy node: (",i,")",d(o)),a.l.debug("Old graph after copy",d(e))}else a.l.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!g[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),a.l.debug(g);else a.l.debug("Not a cluster",i,t);n=e.nodes(),a.l.warn("New list of nodes",n);for(const r of n){const n=e.node(r);a.l.warn(" Now next level",r,n),n.clusterNode&&v(n.graph,t+1)}}else a.l.debug("Done, no node has children",e.nodes())},m=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const r=e.children(t),i=m(e,r);n=[...n,...i]})),n},k={rect:(e,t)=>{a.l.info("Creating subgraph rect for ",t.id,t);const n=(0,a.c)(),r=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),i=r.insert("rect",":first-child"),o=(0,a.p)(n.flowchart.htmlLabels),d=r.insert("g").attr("class","cluster-label"),c="markdown"===t.labelType?(0,s.a)(d,t.labelText,{style:t.labelStyle,useHtmlLabels:o}):d.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0));let h=c.getBBox();if((0,a.p)(n.flowchart.htmlLabels)){const e=c.children[0],t=(0,a.j)(c);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}const g=0*t.padding,f=g/2,p=t.width<=h.width+g?h.width+g:t.width;t.width<=h.width+g?t.diff=(h.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,a.l.trace("Data ",t,JSON.stringify(t)),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-p/2).attr("y",t.y-t.height/2-f).attr("width",p).attr("height",t.height+g);const{subGraphTitleTopMargin:u}=(0,l.g)(n);o?d.attr("transform",`translate(${t.x-h.width/2}, ${t.y-t.height/2+u})`):d.attr("transform",`translate(${t.x}, ${t.y-t.height/2+u})`);const w=i.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(e){return(0,l.i)(t,e)},r},roundedWithTitle:(e,t)=>{const n=(0,a.c)(),r=e.insert("g").attr("class",t.classes).attr("id",t.id),i=r.insert("rect",":first-child"),o=r.insert("g").attr("class","cluster-label"),s=r.append("rect"),d=o.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0));let c=d.getBBox();if((0,a.p)(n.flowchart.htmlLabels)){const e=d.children[0],t=(0,a.j)(d);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}c=d.getBBox();const h=0*t.padding,g=h/2,f=t.width<=c.width+t.padding?c.width+t.padding:t.width;t.width<=c.width+t.padding?t.diff=(c.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,i.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+h).attr("height",t.height+h),s.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+c.height-1).attr("width",f+h).attr("height",t.height+h-c.height-3);const{subGraphTitleTopMargin:p}=(0,l.g)(n);o.attr("transform",`translate(${t.x-c.width/2}, ${t.y-t.height/2-t.padding/3+((0,a.p)(n.flowchart.htmlLabels)?5:3)+p})`);const u=i.node().getBBox();return t.height=u.height,t.intersect=function(e){return(0,l.i)(t,e)},r},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,o=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-o).attr("y",t.y-t.height/2-o).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const a=r.node().getBBox();return t.width=a.width,t.height=a.height,t.intersect=function(e){return(0,l.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,o=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-o).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const a=r.node().getBBox();return t.width=a.width,t.height=a.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,l.i)(t,e)},n}};let S={};const C=async(e,t,n,r,o,s)=>{a.l.info("Graph in recursive render: XXX",d(t),o);const c=t.graph().rankdir;a.l.trace("Dir in recursive render - dir:",c);const h=e.insert("g").attr("class","root");t.nodes()?a.l.info("Recursive render XXX",t.nodes()):a.l.info("No nodes found for",t),t.edges().length>0&&a.l.trace("Recursive edges",t.edge(t.edges()[0]));const f=h.insert("g").attr("class","clusters"),p=h.insert("g").attr("class","edgePaths"),u=h.insert("g").attr("class","edgeLabels"),w=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const i=t.node(e);if(void 0!==o){const n=JSON.parse(JSON.stringify(o.clusterData));a.l.info("Setting data for cluster XXX (",e,") ",n,o),t.setNode(o.id,n),t.parent(e)||(a.l.trace("Setting parent",e,o.id),t.setParent(e,o.id,n))}if(a.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i&&i.clusterNode){a.l.info("Cluster identified",e,i.width,t.node(e));const o=await C(w,i.graph,n,r,t.node(e),s),d=o.elem;(0,l.u)(i,d),i.diff=o.diff||0,a.l.info("Node bounds (abc123)",e,i,i.width,i.x,i.y),(0,l.s)(d,i),a.l.warn("Recursive render complete ",d,i)}else t.children(e).length>0?(a.l.info("Cluster - the non recursive path XXX",e,i.id,i,t),a.l.info(y(i.id,t)),g[i.id]={id:y(i.id,t),node:i}):(a.l.info("Node - the non recursive path",e,i.id,i),await(0,l.e)(w,t.node(e),c))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),a.l.info("Fix",g,"ids:",e.v,e.w,"Translating: ",g[e.v],g[e.w]),(0,l.f)(u,n)})),t.edges().forEach((function(e){a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),a.l.info("#############################################"),a.l.info("###                Layout                 ###"),a.l.info("#############################################"),a.l.info(t),(0,i.l)(t),a.l.info("Graph after layout:",d(t));let b=0;const{subGraphTitleTotalMargin:x}=(0,l.g)(s);return(e=>m(e,e.children()))(t).forEach((function(e){const n=t.node(e);a.l.info("Position "+e+": "+JSON.stringify(t.node(e))),a.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=x,(0,l.p)(n)):t.children(e).length>0?(n.height+=x,((e,t)=>{a.l.trace("Inserting cluster");const n=t.shape||"rect";S[t.id]=k[n](e,t)})(f,n),g[n.id].node=n):(n.y+=x/2,(0,l.p)(n))})),t.edges().forEach((function(e){const i=t.edge(e);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach((e=>e.y+=x/2));const o=(0,l.h)(p,e,i,g,n,t,r);(0,l.j)(i,o)})),t.nodes().forEach((function(e){const n=t.node(e);a.l.info(e,n.type,n.diff),"group"===n.type&&(b=n.diff)})),{elem:h,diff:b}},T=async(e,t,n,r,i)=>{(0,l.a)(e,n,r,i),(0,l.b)(),(0,l.d)(),S={},f={},p={},g={},a.l.warn("Graph at first:",JSON.stringify(d(t))),(e=>{if(e){a.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(a.l.warn("Cluster identified",t," Replacement id in edges: ",y(t,e)),f[t]=b(t,e),g[t]={id:y(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),r=e.edges();n.length>0?(a.l.debug("Cluster identified",t,f),r.forEach((e=>{e.v!==t&&e.w!==t&&u(e.v,t)^u(e.w,t)&&(a.l.warn("Edge: ",e," leaves cluster ",t),a.l.warn("Descendants of XXX ",t,": ",f[t]),g[t].externalConnections=!0)}))):a.l.debug("Not a cluster ",t,f)}));for(let t of Object.keys(g)){const n=g[t].id,r=e.parent(n);r!==t&&g[r]&&!g[r].externalConnections&&(g[t].id=r)}e.edges().forEach((function(t){const n=e.edge(t);a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(a.l.warn("Fix XXX",g,"ids:",t.v,t.w,"Translating: ",g[t.v]," --- ",g[t.w]),g[t.v]&&g[t.w]&&g[t.v]===g[t.w]){a.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name);const o=t.w+"---"+t.v;e.setNode(o,{domId:o,id:o,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const l=structuredClone(n),s=structuredClone(n);l.label="",l.arrowTypeEnd="none",s.label="",l.fromCluster=t.v,s.toCluster=t.v,e.setEdge(r,o,l,t.name+"-cyclic-special"),e.setEdge(o,i,s,t.name+"-cyclic-special")}else if(g[t.v]||g[t.w]){if(a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){const i=e.parent(r);g[i].externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){const r=e.parent(i);g[r].externalConnections=!0,n.toCluster=t.w}a.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}})),a.l.warn("Adjusted Graph",d(e)),v(e,0),a.l.trace(g)}else a.l.debug("Opting out, no graph ")})(t),a.l.warn("Graph after:",JSON.stringify(d(t)));const o=(0,a.c)();await C(e,t,r,i,void 0,o)}}}]);