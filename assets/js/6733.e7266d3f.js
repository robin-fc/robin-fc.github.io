"use strict";(self.webpackChunkrobin_fc_github_io=self.webpackChunkrobin_fc_github_io||[]).push([[6733],{3159:(e,t,n)=>{n.d(t,{c:()=>l});var i=n(6355),r=4;function l(e){return(0,i.c)(e,r)}},6246:(e,t,n)=>{n.d(t,{r:()=>T});var i=n(6355),r=n(3573),l=n(3159),a=n(6698),o=n(3634),d=n(1539);function s(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:c(e),edges:g(e)};return(0,i.i)(e.graph())||(t.value=(0,l.c)(e.graph())),t}function c(e){return(0,r.m)(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),l={v:t};return(0,i.i)(n)||(l.value=n),(0,i.i)(r)||(l.parent=r),l}))}function g(e){return(0,r.m)(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return(0,i.i)(t.name)||(r.name=t.name),(0,i.i)(n)||(r.value=n),r}))}let h={},f={},u={};const p=(e,t)=>(o.l.trace("In isDescendant",t," ",e," = ",f[t].includes(e)),!!f[t].includes(e)),w=(e,t,n,i)=>{o.l.warn("Copying children of ",e,"root",i,"data",t.node(e),i);const r=t.children(e)||[];e!==i&&r.push(e),o.l.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach((r=>{if(t.children(r).length>0)w(r,t,n,i);else{const l=t.node(r);o.l.info("cp ",r," to ",i," with parent ",e),n.setNode(r,l),i!==t.parent(r)&&(o.l.warn("Setting parent",r,t.parent(r)),n.setParent(r,t.parent(r))),e!==i&&r!==e?(o.l.debug("Setting parent",r,e),n.setParent(r,e)):(o.l.info("In copy ",e,"root",i,"data",t.node(e),i),o.l.debug("Not Setting parent for node=",r,"cluster!==rootId",e!==i,"node!==clusterId",r!==e));const a=t.edges(r);o.l.debug("Copying Edges",a),a.forEach((r=>{o.l.info("Edge",r);const l=t.edge(r.v,r.w,r.name);o.l.info("Edge data",l,i);try{((e,t)=>(o.l.info("Descendants of ",t," is ",f[t]),o.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(f[t]?f[t].includes(e.v)||p(e.v,t)||p(e.w,t)||f[t].includes(e.w):(o.l.debug("Tilt, ",t,",not in descendants"),!1))))(r,i)?(o.l.info("Copying as ",r.v,r.w,l,r.name),n.setEdge(r.v,r.w,l,r.name),o.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):o.l.info("Skipping copy of edge ",r.v,"--\x3e",r.w," rootId: ",i," clusterId:",e)}catch(e){o.l.error(e)}}))}o.l.debug("Removing node",r),t.removeNode(r)}))},y=(e,t)=>{const n=t.children(e);let i=[...n];for(const r of n)u[r]=e,i=[...i,...y(r,t)];return i},b=(e,t)=>{o.l.trace("Searching",e);const n=t.children(e);if(o.l.trace("Searching children of id ",e,n),n.length<1)return o.l.trace("This is a valid node",e),e;for(const i of n){const n=b(i,t);if(n)return o.l.trace("Found replacement for",e," => ",n),n}},v=e=>h[e]&&h[e].externalConnections&&h[e]?h[e].id:e,x=(e,t)=>{if(o.l.warn("extractor - ",t,s(e),e.children("D")),t>10)return void o.l.error("Bailing out");let n=e.nodes(),r=!1;for(const t of n){const n=e.children(t);r=r||n.length>0}if(r){o.l.debug("Nodes = ",n,t);for(const r of n)if(o.l.debug("Extracting node",r,h,h[r]&&!h[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),h[r])if(!h[r].externalConnections&&e.children(r)&&e.children(r).length>0){o.l.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";h[r]&&h[r].clusterData&&h[r].clusterData.dir&&(n=h[r].clusterData.dir,o.l.warn("Fixing dir",h[r].clusterData.dir,n));const l=new i.G({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));o.l.warn("Old graph before copy",s(e)),w(r,e,l,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:h[r].clusterData,labelText:h[r].labelText,graph:l}),o.l.warn("New graph after copy node: (",r,")",s(l)),o.l.debug("Old graph after copy",s(e))}else o.l.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!h[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),o.l.debug(h);else o.l.debug("Not a cluster",r,t);n=e.nodes(),o.l.warn("New list of nodes",n);for(const i of n){const n=e.node(i);o.l.warn(" Now next level",i,n),n.clusterNode&&x(n.graph,t+1)}}else o.l.debug("Done, no node has children",e.nodes())},m=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const i=e.children(t),r=m(e,i);n=[...n,...r]})),n},E={rect:(e,t)=>{o.l.info("Creating subgraph rect for ",t.id,t);const n=(0,o.c)(),i=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=i.insert("rect",":first-child"),l=(0,o.p)(n.flowchart.htmlLabels),s=i.insert("g").attr("class","cluster-label"),c="markdown"===t.labelType?(0,d.a)(s,t.labelText,{style:t.labelStyle,useHtmlLabels:l}):s.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let g=c.getBBox();if((0,o.p)(n.flowchart.htmlLabels)){const e=c.children[0],t=(0,o.j)(c);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}const h=0*t.padding,f=h/2,u=t.width<=g.width+h?g.width+h:t.width;t.width<=g.width+h?t.diff=(g.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,o.l.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f).attr("width",u).attr("height",t.height+h);const{subGraphTitleTopMargin:p}=(0,a.g)(n);l?s.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2+p})`):s.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);const w=r.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(e){return(0,a.i)(t,e)},i},roundedWithTitle:(e,t)=>{const n=(0,o.c)(),i=e.insert("g").attr("class",t.classes).attr("id",t.id),r=i.insert("rect",":first-child"),l=i.insert("g").attr("class","cluster-label"),d=i.append("rect"),s=l.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let c=s.getBBox();if((0,o.p)(n.flowchart.htmlLabels)){const e=s.children[0],t=(0,o.j)(s);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}c=s.getBBox();const g=0*t.padding,h=g/2,f=t.width<=c.width+t.padding?c.width+t.padding:t.width;t.width<=c.width+t.padding?t.diff=(c.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-f/2-h).attr("y",t.y-t.height/2-h).attr("width",f+g).attr("height",t.height+g),d.attr("class","inner").attr("x",t.x-f/2-h).attr("y",t.y-t.height/2-h+c.height-1).attr("width",f+g).attr("height",t.height+g-c.height-3);const{subGraphTitleTopMargin:u}=(0,a.g)(n);l.attr("transform",`translate(${t.x-c.width/2}, ${t.y-t.height/2-t.padding/3+((0,o.p)(n.flowchart.htmlLabels)?5:3)+u})`);const p=r.node().getBBox();return t.height=p.height,t.intersect=function(e){return(0,a.i)(t,e)},i},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,l=r/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-l).attr("y",t.y-t.height/2-l).attr("width",t.width+r).attr("height",t.height+r).attr("fill","none");const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return(0,a.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,l=r/2;i.attr("class","divider").attr("x",t.x-t.width/2-l).attr("y",t.y-t.height/2).attr("width",t.width+r).attr("height",t.height+r);const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.i)(t,e)},n}};let N={};const S=async(e,t,n,i,l,d)=>{o.l.info("Graph in recursive render: XXX",s(t),l);const c=t.graph().rankdir;o.l.trace("Dir in recursive render - dir:",c);const g=e.insert("g").attr("class","root");t.nodes()?o.l.info("Recursive render XXX",t.nodes()):o.l.info("No nodes found for",t),t.edges().length>0&&o.l.trace("Recursive edges",t.edge(t.edges()[0]));const f=g.insert("g").attr("class","clusters"),u=g.insert("g").attr("class","edgePaths"),p=g.insert("g").attr("class","edgeLabels"),w=g.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const r=t.node(e);if(void 0!==l){const n=JSON.parse(JSON.stringify(l.clusterData));o.l.info("Setting data for cluster XXX (",e,") ",n,l),t.setNode(l.id,n),t.parent(e)||(o.l.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(o.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){o.l.info("Cluster identified",e,r.width,t.node(e));const l=await S(w,r.graph,n,i,t.node(e),d),s=l.elem;(0,a.u)(r,s),r.diff=l.diff||0,o.l.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),(0,a.s)(s,r),o.l.warn("Recursive render complete ",s,r)}else t.children(e).length>0?(o.l.info("Cluster - the non recursive path XXX",e,r.id,r,t),o.l.info(b(r.id,t)),h[r.id]={id:b(r.id,t),node:r}):(o.l.info("Node - the non recursive path",e,r.id,r),await(0,a.e)(w,t.node(e),c))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),o.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),o.l.info("Fix",h,"ids:",e.v,e.w,"Translating: ",h[e.v],h[e.w]),(0,a.f)(p,n)})),t.edges().forEach((function(e){o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),o.l.info("#############################################"),o.l.info("###                Layout                 ###"),o.l.info("#############################################"),o.l.info(t),(0,r.l)(t),o.l.info("Graph after layout:",s(t));let y=0;const{subGraphTitleTotalMargin:v}=(0,a.g)(d);return(e=>m(e,e.children()))(t).forEach((function(e){const n=t.node(e);o.l.info("Position "+e+": "+JSON.stringify(t.node(e))),o.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=v,(0,a.p)(n)):t.children(e).length>0?(n.height+=v,((e,t)=>{o.l.trace("Inserting cluster");const n=t.shape||"rect";N[t.id]=E[n](e,t)})(f,n),h[n.id].node=n):(n.y+=v/2,(0,a.p)(n))})),t.edges().forEach((function(e){const r=t.edge(e);o.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r),r.points.forEach((e=>e.y+=v/2));const l=(0,a.h)(u,e,r,h,n,t,i);(0,a.j)(r,l)})),t.nodes().forEach((function(e){const n=t.node(e);o.l.info(e,n.type,n.diff),"group"===n.type&&(y=n.diff)})),{elem:g,diff:y}},T=async(e,t,n,i,r)=>{(0,a.a)(e,n,i,r),(0,a.b)(),(0,a.d)(),N={},f={},u={},h={},o.l.warn("Graph at first:",JSON.stringify(s(t))),(e=>{if(e){o.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(o.l.warn("Cluster identified",t," Replacement id in edges: ",b(t,e)),f[t]=y(t,e),h[t]={id:b(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),i=e.edges();n.length>0?(o.l.debug("Cluster identified",t,f),i.forEach((e=>{e.v!==t&&e.w!==t&&p(e.v,t)^p(e.w,t)&&(o.l.warn("Edge: ",e," leaves cluster ",t),o.l.warn("Descendants of XXX ",t,": ",f[t]),h[t].externalConnections=!0)}))):o.l.debug("Not a cluster ",t,f)}));for(let t of Object.keys(h)){const n=h[t].id,i=e.parent(n);i!==t&&h[i]&&!h[i].externalConnections&&(h[t].id=i)}e.edges().forEach((function(t){const n=e.edge(t);o.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),o.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let i=t.v,r=t.w;if(o.l.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h[t.v]," --- ",h[t.w]),h[t.v]&&h[t.w]&&h[t.v]===h[t.w]){o.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),o.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=v(t.v),r=v(t.w),e.removeEdge(t.v,t.w,t.name);const l=t.w+"---"+t.v;e.setNode(l,{domId:l,id:l,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const a=structuredClone(n),d=structuredClone(n);a.label="",a.arrowTypeEnd="none",d.label="",a.fromCluster=t.v,d.toCluster=t.v,e.setEdge(i,l,a,t.name+"-cyclic-special"),e.setEdge(l,r,d,t.name+"-cyclic-special")}else if(h[t.v]||h[t.w]){if(o.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=v(t.v),r=v(t.w),e.removeEdge(t.v,t.w,t.name),i!==t.v){const r=e.parent(i);h[r].externalConnections=!0,n.fromCluster=t.v}if(r!==t.w){const i=e.parent(r);h[i].externalConnections=!0,n.toCluster=t.w}o.l.warn("Fix Replacing with XXX",i,r,t.name),e.setEdge(i,r,n,t.name)}})),o.l.warn("Adjusted Graph",s(e)),x(e,0),o.l.trace(h)}else o.l.debug("Opting out, no graph ")})(t),o.l.warn("Graph after:",JSON.stringify(s(t)));const l=(0,o.c)();await S(e,t,i,r,void 0,l)}},6733:(e,t,n)=>{n.d(t,{diagram:()=>h});var i=n(4277),r=n(3634),l=n(6355),a=n(6246);const o=e=>r.f.sanitizeText(e,(0,r.c)());let d={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const s=function(e,t,n,i,l){const a=Object.keys(e);r.l.info("keys:",a),r.l.info(e),a.filter((t=>e[t].parent==l)).forEach((function(n){var a,d;const s=e[n],c=s.cssClasses.join(" "),g=(0,r.o)(s.styles),h=s.label??s.id,f={labelStyle:g.labelStyle,shape:"class_box",labelText:o(h),classData:s,rx:0,ry:0,class:c,style:g.style,id:s.id,domId:s.domId,tooltip:i.db.getTooltip(s.id,l)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(a=(0,r.c)().flowchart)?void 0:a.padding)??(null==(d=(0,r.c)().class)?void 0:d.padding)};t.setNode(s.id,f),l&&t.setParent(s.id,l),r.l.info("setNode",f)}))};function c(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const g={setConf:function(e){d={...d,...e}},draw:async function(e,t,n,i){r.l.info("Drawing class - ",t);const g=(0,r.c)().flowchart??(0,r.c)().class,h=(0,r.c)().securityLevel;r.l.info("config:",g);const f=(null==g?void 0:g.nodeSpacing)??50,u=(null==g?void 0:g.rankSpacing)??50,p=new l.G({multigraph:!0,compound:!0}).setGraph({rankdir:i.db.getDirection(),nodesep:f,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),w=i.db.getNamespaces(),y=i.db.getClasses(),b=i.db.getRelations(),v=i.db.getNotes();let x;r.l.info(b),function(e,t,n,i){const l=Object.keys(e);r.l.info("keys:",l),r.l.info(e),l.forEach((function(n){var l,a;const d=e[n],c={shape:"rect",id:d.id,domId:d.domId,labelText:o(d.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(l=(0,r.c)().flowchart)?void 0:l.padding)??(null==(a=(0,r.c)().class)?void 0:a.padding)};t.setNode(d.id,c),s(d.classes,t,0,i,d.id),r.l.info("setNode",c)}))}(w,p,0,i),s(y,p,0,i),function(e,t){const n=(0,r.c)().flowchart;let i=0;e.forEach((function(e){var l;i++;const a={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${i}`,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:c(e.relation.type1),arrowTypeEnd:c(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.q)(null==n?void 0:n.curve,r.n)};if(r.l.info(a,e),void 0!==e.style){const t=(0,r.o)(e.style);a.style=t.style,a.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(a.arrowheadStyle="fill: #333"):(a.arrowheadStyle="fill: #333",a.labelpos="c",(null==(l=(0,r.c)().flowchart)?void 0:l.htmlLabels)??(0,r.c)().htmlLabels?(a.labelType="html",a.label='<span class="edgeLabel">'+e.text+"</span>"):(a.labelType="text",a.label=e.text.replace(r.f.lineBreakRegex,"\n"),void 0===e.style&&(a.style=a.style||"stroke: #333; stroke-width: 1.5px;fill:none"),a.labelStyle=a.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,a,i)}))}(b,p),function(e,t,n,i){r.l.info(e),e.forEach((function(e,l){var a,s;const c=e,g=c.text,h={labelStyle:"",shape:"note",labelText:o(g),noteData:c,rx:0,ry:0,class:"",style:"",id:c.id,domId:c.id,tooltip:"",type:"note",padding:(null==(a=(0,r.c)().flowchart)?void 0:a.padding)??(null==(s=(0,r.c)().class)?void 0:s.padding)};if(t.setNode(c.id,h),r.l.info("setNode",h),!c.class||!(c.class in i))return;const f=n+l,u={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.q)(d.curve,r.n)};t.setEdge(c.id,c.class,u,f)}))}(v,p,b.length+1,y),"sandbox"===h&&(x=(0,r.j)("#i"+t));const m="sandbox"===h?(0,r.j)(x.nodes()[0].contentDocument.body):(0,r.j)("body"),E=m.select(`[id="${t}"]`),N=m.select("#"+t+" g");if(await(0,a.r)(N,p,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),r.A.insertTitle(E,"classTitleText",(null==g?void 0:g.titleTopMargin)??5,i.db.getDiagramTitle()),(0,r.t)(p,E,null==g?void 0:g.diagramPadding,null==g?void 0:g.useMaxWidth),null==g||!g.htmlLabels){const e="sandbox"===h?x.nodes()[0].contentDocument:document,n=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of n){const n=t.getBBox(),i=e.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("rx",0),i.setAttribute("ry",0),i.setAttribute("width",n.width),i.setAttribute("height",n.height),t.insertBefore(i,t.firstChild)}}}},h={parser:i.p,db:i.d,renderer:g,styles:i.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,i.d.clear()}}}}]);