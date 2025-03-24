"use strict";(self.webpackChunkrobin_fc_github_io=self.webpackChunkrobin_fc_github_io||[]).push([[8445],{8445:(t,e,r)=>{r.d(e,{diagram:()=>C});var i=r(3634),a=function(){var t=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},e=[1,3],r=[1,6],i=[1,4],a=[1,5],n=[2,5],c=[1,12],s=[5,7,13,19,21,23,24,26,28,31,37,40,47],o=[7,13,19,21,23,24,26,28,31,37,40],l=[7,12,13,19,21,23,24,26,28,31,37,40],h=[7,13,47],m=[1,42],y=[1,41],u=[7,13,29,32,35,38,47],p=[1,55],g=[1,56],b=[1,57],d=[7,13,32,35,42,47],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,i,a,n,c){var s=n.length-1;switch(a){case 2:return n[s];case 3:return n[s-1];case 4:return i.setDirection(n[s-3]),n[s-1];case 6:i.setOptions(n[s-1]),this.$=n[s];break;case 7:n[s-1]+=n[s],this.$=n[s-1];break;case 9:this.$=[];break;case 10:n[s-1].push(n[s]),this.$=n[s-1];break;case 11:this.$=n[s-1];break;case 16:this.$=n[s].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=n[s].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(n[s].substr(8)),this.$=n[s].substr(8);break;case 21:i.checkout(n[s]);break;case 22:i.branch(n[s]);break;case 23:i.branch(n[s-2],n[s]);break;case 24:i.cherryPick(n[s],"",void 0);break;case 25:i.cherryPick(n[s-2],"",void 0,n[s]);break;case 26:i.cherryPick(n[s-2],"",n[s]);break;case 27:i.cherryPick(n[s-4],"",n[s],n[s-2]);break;case 28:i.cherryPick(n[s-4],"",n[s-2],n[s]);break;case 29:i.cherryPick(n[s],"",n[s-2]);break;case 30:i.cherryPick(n[s],"","");break;case 31:i.cherryPick(n[s-2],"","");break;case 32:i.cherryPick(n[s-4],"","",n[s-2]);break;case 33:i.cherryPick(n[s-4],"","",n[s]);break;case 34:i.cherryPick(n[s-2],"",n[s-4],n[s]);break;case 35:i.cherryPick(n[s-2],"","",n[s]);break;case 36:i.merge(n[s],"","","");break;case 37:i.merge(n[s-2],n[s],"","");break;case 38:i.merge(n[s-2],"",n[s],"");break;case 39:i.merge(n[s-2],"","",n[s]);break;case 40:i.merge(n[s-4],n[s],"",n[s-2]);break;case 41:i.merge(n[s-4],"",n[s],n[s-2]);break;case 42:i.merge(n[s-4],"",n[s-2],n[s]);break;case 43:i.merge(n[s-4],n[s-2],n[s],"");break;case 44:i.merge(n[s-4],n[s-2],"",n[s]);break;case 45:i.merge(n[s-4],n[s],n[s-2],"");break;case 46:i.merge(n[s-6],n[s-4],n[s-2],n[s]);break;case 47:i.merge(n[s-6],n[s],n[s-4],n[s-2]);break;case 48:i.merge(n[s-6],n[s-4],n[s],n[s-2]);break;case 49:i.merge(n[s-6],n[s-2],n[s-4],n[s]);break;case 50:i.merge(n[s-6],n[s],n[s-2],n[s-4]);break;case 51:i.merge(n[s-6],n[s-2],n[s],n[s-4]);break;case 52:i.commit(n[s]);break;case 53:i.commit("","",i.commitType.NORMAL,n[s]);break;case 54:i.commit("","",n[s],"");break;case 55:i.commit("","",n[s],n[s-2]);break;case 56:i.commit("","",n[s-2],n[s]);break;case 57:i.commit("",n[s],i.commitType.NORMAL,"");break;case 58:i.commit("",n[s-2],i.commitType.NORMAL,n[s]);break;case 59:i.commit("",n[s],i.commitType.NORMAL,n[s-2]);break;case 60:i.commit("",n[s-2],n[s],"");break;case 61:i.commit("",n[s],n[s-2],"");break;case 62:i.commit("",n[s-4],n[s-2],n[s]);break;case 63:i.commit("",n[s-4],n[s],n[s-2]);break;case 64:i.commit("",n[s-2],n[s-4],n[s]);break;case 65:i.commit("",n[s],n[s-4],n[s-2]);break;case 66:i.commit("",n[s],n[s-2],n[s-4]);break;case 67:i.commit("",n[s-2],n[s],n[s-4]);break;case 68:i.commit(n[s],"",i.commitType.NORMAL,"");break;case 69:i.commit(n[s],"",i.commitType.NORMAL,n[s-2]);break;case 70:i.commit(n[s-2],"",i.commitType.NORMAL,n[s]);break;case 71:i.commit(n[s-2],"",n[s],"");break;case 72:i.commit(n[s],"",n[s-2],"");break;case 73:i.commit(n[s],n[s-2],i.commitType.NORMAL,"");break;case 74:i.commit(n[s-2],n[s],i.commitType.NORMAL,"");break;case 75:i.commit(n[s-4],"",n[s-2],n[s]);break;case 76:i.commit(n[s-4],"",n[s],n[s-2]);break;case 77:i.commit(n[s-2],"",n[s-4],n[s]);break;case 78:i.commit(n[s],"",n[s-4],n[s-2]);break;case 79:i.commit(n[s],"",n[s-2],n[s-4]);break;case 80:i.commit(n[s-2],"",n[s],n[s-4]);break;case 81:i.commit(n[s-4],n[s],n[s-2],"");break;case 82:i.commit(n[s-4],n[s-2],n[s],"");break;case 83:i.commit(n[s-2],n[s],n[s-4],"");break;case 84:i.commit(n[s],n[s-2],n[s-4],"");break;case 85:i.commit(n[s],n[s-4],n[s-2],"");break;case 86:i.commit(n[s-2],n[s-4],n[s],"");break;case 87:i.commit(n[s-4],n[s],i.commitType.NORMAL,n[s-2]);break;case 88:i.commit(n[s-4],n[s-2],i.commitType.NORMAL,n[s]);break;case 89:i.commit(n[s-2],n[s],i.commitType.NORMAL,n[s-4]);break;case 90:i.commit(n[s],n[s-2],i.commitType.NORMAL,n[s-4]);break;case 91:i.commit(n[s],n[s-4],i.commitType.NORMAL,n[s-2]);break;case 92:i.commit(n[s-2],n[s-4],i.commitType.NORMAL,n[s]);break;case 93:i.commit(n[s-6],n[s-4],n[s-2],n[s]);break;case 94:i.commit(n[s-6],n[s-4],n[s],n[s-2]);break;case 95:i.commit(n[s-6],n[s-2],n[s-4],n[s]);break;case 96:i.commit(n[s-6],n[s],n[s-4],n[s-2]);break;case 97:i.commit(n[s-6],n[s-2],n[s],n[s-4]);break;case 98:i.commit(n[s-6],n[s],n[s-2],n[s-4]);break;case 99:i.commit(n[s-4],n[s-6],n[s-2],n[s]);break;case 100:i.commit(n[s-4],n[s-6],n[s],n[s-2]);break;case 101:i.commit(n[s-2],n[s-6],n[s-4],n[s]);break;case 102:i.commit(n[s],n[s-6],n[s-4],n[s-2]);break;case 103:i.commit(n[s-2],n[s-6],n[s],n[s-4]);break;case 104:i.commit(n[s],n[s-6],n[s-2],n[s-4]);break;case 105:i.commit(n[s],n[s-4],n[s-2],n[s-6]);break;case 106:i.commit(n[s-2],n[s-4],n[s],n[s-6]);break;case 107:i.commit(n[s],n[s-2],n[s-4],n[s-6]);break;case 108:i.commit(n[s-2],n[s],n[s-4],n[s-6]);break;case 109:i.commit(n[s-4],n[s-2],n[s],n[s-6]);break;case 110:i.commit(n[s-4],n[s],n[s-2],n[s-6]);break;case 111:i.commit(n[s-2],n[s-4],n[s-6],n[s]);break;case 112:i.commit(n[s],n[s-4],n[s-6],n[s-2]);break;case 113:i.commit(n[s-2],n[s],n[s-6],n[s-4]);break;case 114:i.commit(n[s],n[s-2],n[s-6],n[s-4]);break;case 115:i.commit(n[s-4],n[s-2],n[s-6],n[s]);break;case 116:i.commit(n[s-4],n[s],n[s-6],n[s-2]);break;case 117:this.$="";break;case 118:this.$=n[s];break;case 119:this.$=i.commitType.NORMAL;break;case 120:this.$=i.commitType.REVERSE;break;case 121:this.$=i.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:r,13:i,47:a},{1:[3]},{3:7,4:2,5:e,7:r,13:i,47:a},{6:8,7:n,8:[1,9],9:[1,10],10:11,13:c},t(s,[2,124]),t(s,[2,125]),t(s,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:n,10:11,13:c},{8:[1,15]},t(o,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:n,10:11,13:c},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(o,[2,10]),{4:37,7:r,13:i,47:a},t(o,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,46:y},t(h,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:m,46:y},{32:[1,50],35:[1,51]},{27:52,33:m,46:y},{1:[2,4]},t(o,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(u,[2,122]),t(u,[2,123]),t(h,[2,52]),{33:[1,53]},{39:54,43:p,44:g,45:b},{33:[1,58]},{33:[1,59]},t(h,[2,118]),t(h,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),t(h,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),t(d,[2,119]),t(d,[2,120]),t(d,[2,121]),t(h,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),t(h,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:p,44:g,45:b},{33:[1,81]},t(h,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:p,44:g,45:b},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:p,44:g,45:b},{33:[1,95]},{33:[1,96]},{39:97,43:p,44:g,45:b},{33:[1,98]},t(h,[2,37],{35:[1,100],38:[1,99]}),t(h,[2,38],{32:[1,102],35:[1,101]}),t(h,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},t(h,[2,23]),t(h,[2,55],{32:[1,110],42:[1,111]}),t(h,[2,59],{38:[1,112],42:[1,113]}),t(h,[2,69],{32:[1,115],38:[1,114]}),t(h,[2,56],{32:[1,116],42:[1,117]}),t(h,[2,61],{35:[1,118],42:[1,119]}),t(h,[2,72],{32:[1,121],35:[1,120]}),t(h,[2,58],{38:[1,122],42:[1,123]}),t(h,[2,60],{35:[1,124],42:[1,125]}),t(h,[2,73],{35:[1,127],38:[1,126]}),t(h,[2,70],{32:[1,129],38:[1,128]}),t(h,[2,71],{32:[1,131],35:[1,130]}),t(h,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:p,44:g,45:b},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:p,44:g,45:b},t(h,[2,25],{35:[1,140]}),t(h,[2,26],{34:[1,141]}),t(h,[2,31],{34:[1,142]}),t(h,[2,29],{34:[1,143]}),t(h,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:p,44:g,45:b},{33:[1,148]},{39:149,43:p,44:g,45:b},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:p,44:g,45:b},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:p,44:g,45:b},{33:[1,162]},{39:163,43:p,44:g,45:b},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:p,44:g,45:b},{33:[1,168]},t(h,[2,43],{35:[1,169]}),t(h,[2,44],{38:[1,170]}),t(h,[2,42],{32:[1,171]}),t(h,[2,45],{35:[1,172]}),t(h,[2,40],{38:[1,173]}),t(h,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},t(h,[2,66],{42:[1,181]}),t(h,[2,79],{32:[1,182]}),t(h,[2,67],{42:[1,183]}),t(h,[2,90],{38:[1,184]}),t(h,[2,80],{32:[1,185]}),t(h,[2,89],{38:[1,186]}),t(h,[2,65],{42:[1,187]}),t(h,[2,78],{32:[1,188]}),t(h,[2,64],{42:[1,189]}),t(h,[2,84],{35:[1,190]}),t(h,[2,77],{32:[1,191]}),t(h,[2,83],{35:[1,192]}),t(h,[2,63],{42:[1,193]}),t(h,[2,91],{38:[1,194]}),t(h,[2,62],{42:[1,195]}),t(h,[2,85],{35:[1,196]}),t(h,[2,86],{35:[1,197]}),t(h,[2,92],{38:[1,198]}),t(h,[2,76],{32:[1,199]}),t(h,[2,87],{38:[1,200]}),t(h,[2,75],{32:[1,201]}),t(h,[2,81],{35:[1,202]}),t(h,[2,82],{35:[1,203]}),t(h,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:p,44:g,45:b},{33:[1,207]},{33:[1,208]},{39:209,43:p,44:g,45:b},{33:[1,210]},t(h,[2,27]),t(h,[2,32]),t(h,[2,28]),t(h,[2,33]),t(h,[2,34]),t(h,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:p,44:g,45:b},{33:[1,215]},{39:216,43:p,44:g,45:b},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:p,44:g,45:b},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:p,44:g,45:b},{33:[1,229]},{39:230,43:p,44:g,45:b},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:p,44:g,45:b},t(h,[2,46]),t(h,[2,48]),t(h,[2,47]),t(h,[2,49]),t(h,[2,51]),t(h,[2,50]),t(h,[2,107]),t(h,[2,108]),t(h,[2,105]),t(h,[2,106]),t(h,[2,110]),t(h,[2,109]),t(h,[2,114]),t(h,[2,113]),t(h,[2,112]),t(h,[2,111]),t(h,[2,116]),t(h,[2,115]),t(h,[2,104]),t(h,[2,103]),t(h,[2,102]),t(h,[2,101]),t(h,[2,99]),t(h,[2,100]),t(h,[2,98]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,93]),t(h,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=[0],r=[],i=[null],a=[],n=this.table,c="",s=0,o=0,l=a.slice.call(arguments,1),h=Object.create(this.lexer),m={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(m.yy[y]=this.yy[y]);h.setInput(t,m.yy),m.yy.lexer=h,m.yy.parser=this,typeof h.yylloc>"u"&&(h.yylloc={});var u=h.yylloc;a.push(u);var p,g=h.options&&h.options.ranges;"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,d,f,$,k,x,_,T,w={};;){if(d=e[e.length-1],this.defaultActions[d]?f=this.defaultActions[d]:((null===b||typeof b>"u")&&(p=void 0,"number"!=typeof(p=r.pop()||h.lex()||1)&&(p instanceof Array&&(p=(r=p).pop()),p=this.symbols_[p]||p),b=p),f=n[d]&&n[d][b]),typeof f>"u"||!f.length||!f[0]){var E;for(k in T=[],n[d])this.terminals_[k]&&k>2&&T.push("'"+this.terminals_[k]+"'");E=h.showPosition?"Parse error on line "+(s+1)+":\n"+h.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(E,{text:h.match,token:this.terminals_[b]||b,line:h.yylineno,loc:u,expected:T})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+b);switch(f[0]){case 1:e.push(b),i.push(h.yytext),a.push(h.yylloc),e.push(f[1]),b=null,o=h.yyleng,c=h.yytext,s=h.yylineno,u=h.yylloc;break;case 2:if(x=this.productions_[f[1]][1],w.$=i[i.length-x],w._$={first_line:a[a.length-(x||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(x||1)].first_column,last_column:a[a.length-1].last_column},g&&(w._$.range=[a[a.length-(x||1)].range[0],a[a.length-1].range[1]]),typeof($=this.performAction.apply(w,[c,o,s,m.yy,f[1],i,a].concat(l)))<"u")return $;x&&(e=e.slice(0,-1*x*2),i=i.slice(0,-1*x),a=a.slice(0,-1*x)),e.push(this.productions_[f[1]][0]),i.push(w.$),a.push(w._$),_=n[e[e.length-2]][e[e.length-1]],e.push(_);break;case 3:return!0}}return!0}},$={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in a)this[n]=a[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),n=0;n<a.length;n++)if((r=this._input.match(this.rules[a[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 30:case 34:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}};function k(){this.yy={}}return f.lexer=$,k.prototype=f,f.Parser=k,new k}();a.parser=a;const n=a;let c=(0,i.c)().gitGraph.mainBranchName,s=(0,i.c)().gitGraph.mainBranchOrder,o={},l=null,h={};h[c]={name:c,order:s};let m={};m[c]=l;let y=c,u="LR",p=0;function g(){return(0,i.H)({length:7})}let b={};const d=function(t){if(t=i.f.sanitizeText(t,(0,i.c)()),void 0===m[t]){let e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{y=t;const e=m[y];l=o[e]}};function f(t,e,r){const i=t.indexOf(e);-1===i?t.push(r):t.splice(i,1,r)}function $(t){const e=t.reduce(((t,e)=>t.seq>e.seq?t:e),t[0]);let r="";t.forEach((function(t){r+=t===e?"\t*":"\t|"}));const a=[r,e.id,e.seq];for(let t in m)m[t]===e.id&&a.push(t);if(i.l.debug(a.join(" ")),e.parents&&2==e.parents.length){const r=o[e.parents[0]];f(t,e,r),t.push(o[e.parents[1]])}else{if(0==e.parents.length)return;{const r=o[e.parents];f(t,e,r)}}t=function(t){const e=Object.create(null);return t.reduce(((t,r)=>{const i=(t=>t.id)(r);return e[i]||(e[i]=!0,t.push(r)),t}),[])}(t),$(t)}const k=function(){const t=Object.keys(o).map((function(t){return o[t]}));return t.forEach((function(t){i.l.debug(t.id)})),t.sort(((t,e)=>t.seq-e.seq)),t},x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},_={getConfig:()=>(0,i.c)().gitGraph,setDirection:function(t){u=t},setOptions:function(t){i.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{b=JSON.parse(t)}catch(t){i.l.error("error while parsing gitGraph options",t.message)}},getOptions:function(){return b},commit:function(t,e,r,a){i.l.debug("Entering commit:",t,e,r,a),e=i.f.sanitizeText(e,(0,i.c)()),t=i.f.sanitizeText(t,(0,i.c)()),a=i.f.sanitizeText(a,(0,i.c)());const n={id:e||p+"-"+g(),message:t,seq:p++,type:r||x.NORMAL,tag:a||"",parents:null==l?[]:[l.id],branch:y};l=n,o[n.id]=n,m[y]=n.id,i.l.debug("in pushCommit "+n.id)},branch:function(t,e){if(t=i.f.sanitizeText(t,(0,i.c)()),void 0!==m[t]){let e=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}m[t]=null!=l?l.id:null,h[t]={name:t,order:e?parseInt(e,10):null},d(t),i.l.debug("in createBranch")},merge:function(t,e,r,a){t=i.f.sanitizeText(t,(0,i.c)()),e=i.f.sanitizeText(e,(0,i.c)());const n=o[m[y]],c=o[m[t]];if(y===t){let e=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0===n||!n){let e=new Error('Incorrect usage of "merge". Current branch ('+y+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}if(void 0===m[t]){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0===c||!c){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}if(n===c){let e=new Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==o[e]){let i=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw i.hash={text:"merge "+t+e+r+a,token:"merge "+t+e+r+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+r+" "+a]},i}const s={id:e||p+"-"+g(),message:"merged branch "+t+" into "+y,seq:p++,parents:[null==l?null:l.id,m[t]],branch:y,type:x.MERGE,customType:r,customId:!!e,tag:a||""};l=s,o[s.id]=s,m[y]=s.id,i.l.debug(m),i.l.debug("in mergeBranch")},cherryPick:function(t,e,r,a){if(i.l.debug("Entering cherryPick:",t,e,r),t=i.f.sanitizeText(t,(0,i.c)()),e=i.f.sanitizeText(e,(0,i.c)()),r=i.f.sanitizeText(r,(0,i.c)()),a=i.f.sanitizeText(a,(0,i.c)()),!t||void 0===o[t]){let r=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let n=o[t],c=n.branch;if(a&&(!Array.isArray(n.parents)||!n.parents.includes(a)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");if(n.type===x.MERGE&&!a)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!e||void 0===o[e]){if(c===y){let r=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}const s=o[m[y]];if(void 0===s||!s){let r=new Error('Incorrect usage of "cherry-pick". Current branch ('+y+")has no commits");throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}const h={id:p+"-"+g(),message:"cherry-picked "+n+" into "+y,seq:p++,parents:[null==l?null:l.id,n.id],branch:y,type:x.CHERRY_PICK,tag:r??`cherry-pick:${n.id}${n.type===x.MERGE?`|parent:${a}`:""}`};l=h,o[h.id]=h,m[y]=h.id,i.l.debug(m),i.l.debug("in cherryPick")}},checkout:d,prettyPrint:function(){i.l.debug(o),$([k()[0]])},clear:function(){o={},l=null;let t=(0,i.c)().gitGraph.mainBranchName,e=(0,i.c)().gitGraph.mainBranchOrder;m={},m[t]=null,h={},h[t]={name:t,order:e},y=t,p=0,(0,i.E)()},getBranchesAsObjArray:function(){return Object.values(h).map(((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)})).sort(((t,e)=>t.order-e.order)).map((({name:t})=>({name:t})))},getBranches:function(){return m},getCommits:function(){return o},getCommitsArray:k,getCurrentBranch:function(){return y},getDirection:function(){return u},getHead:function(){return l},setAccTitle:i.s,getAccTitle:i.g,getAccDescription:i.a,setAccDescription:i.b,setDiagramTitle:i.C,getDiagramTitle:i.D,commitType:x};let T={};let w={},E={},L=[],M=0,v="LR";const I=t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");let r=[];r="string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];for(const t of r){const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),r.setAttribute("class","row"),r.textContent=t.trim(),e.appendChild(r)}return e},A=(t,e,r)=>{const a=(0,i.c)().gitGraph,n=t.append("g").attr("class","commit-bullets"),c=t.append("g").attr("class","commit-labels");let s=0;"TB"===v&&(s=30);const o=Object.keys(e).sort(((t,r)=>e[t].seq-e[r].seq)),l=a.parallelCommits;o.forEach((t=>{const i=e[t];if(l)if(i.parents.length){const t=(t=>{let e="",r=0;return t.forEach((t=>{const i="TB"===v?E[t].y:E[t].x;i>=r&&(e=t,r=i)})),e||void 0})(i.parents);s="TB"===v?E[t].y+40:E[t].x+40}else s=0,"TB"===v&&(s=30);const o=s+10,h="TB"===v?o:w[i.branch].pos,m="TB"===v?w[i.branch].pos:o;if(r){let t,e=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(e){case 0:default:t="commit-normal";break;case 1:t="commit-reverse";break;case 2:t="commit-highlight";break;case 3:t="commit-merge";break;case 4:t="commit-cherry-pick"}if(2===e){const e=n.append("rect");e.attr("x",m-10),e.attr("y",h-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${i.id} commit-highlight${w[i.branch].index%8} ${t}-outer`),n.append("rect").attr("x",m-6).attr("y",h-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${w[i.branch].index%8} ${t}-inner`)}else if(4===e)n.append("circle").attr("cx",m).attr("cy",h).attr("r",10).attr("class",`commit ${i.id} ${t}`),n.append("circle").attr("cx",m-3).attr("cy",h+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),n.append("circle").attr("cx",m+3).attr("cy",h+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),n.append("line").attr("x1",m+3).attr("y1",h+1).attr("x2",m).attr("y2",h-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`),n.append("line").attr("x1",m-3).attr("y1",h+1).attr("x2",m).attr("y2",h-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`);else{const r=n.append("circle");if(r.attr("cx",m),r.attr("cy",h),r.attr("r",3===i.type?9:10),r.attr("class",`commit ${i.id} commit${w[i.branch].index%8}`),3===e){const e=n.append("circle");e.attr("cx",m),e.attr("cy",h),e.attr("r",6),e.attr("class",`commit ${t} ${i.id} commit${w[i.branch].index%8}`)}1===e&&n.append("path").attr("d",`M ${m-5},${h-5}L${m+5},${h+5}M${m-5},${h+5}L${m+5},${h-5}`).attr("class",`commit ${t} ${i.id} commit${w[i.branch].index%8}`)}}if(E[i.id]="TB"===v?{x:m,y:o}:{x:o,y:h},r){if(4!==i.type&&(i.customId&&3===i.type||3!==i.type)&&a.showCommitLabel){const t=c.append("g"),e=t.insert("rect").attr("class","commit-label-bkg"),r=t.append("text").attr("x",s).attr("y",h+25).attr("class","commit-label").text(i.id);let n=r.node().getBBox();if(e.attr("x",o-n.width/2-2).attr("y",h+13.5).attr("width",n.width+4).attr("height",n.height+4),"TB"===v&&(e.attr("x",m-(n.width+16+5)).attr("y",h-12),r.attr("x",m-(n.width+16)).attr("y",h+n.height-12)),"TB"!==v&&r.attr("x",o-n.width/2),a.rotateCommitLabel)if("TB"===v)r.attr("transform","rotate(-45, "+m+", "+h+")"),e.attr("transform","rotate(-45, "+m+", "+h+")");else{let e=-7.5-(n.width+10)/25*9.5,r=10+n.width/25*8.5;t.attr("transform","translate("+e+", "+r+") rotate(-45, "+s+", "+h+")")}}if(i.tag){const t=c.insert("polygon"),e=c.append("circle"),r=c.append("text").attr("y",h-16).attr("class","tag-label").text(i.tag);let a=r.node().getBBox();r.attr("x",o-a.width/2);const n=a.height/2,l=h-19.2;t.attr("class","tag-label-bkg").attr("points",`\n          ${s-a.width/2-2},${l+2}\n          ${s-a.width/2-2},${l-2}\n          ${o-a.width/2-4},${l-n-2}\n          ${o+a.width/2+4},${l-n-2}\n          ${o+a.width/2+4},${l+n+2}\n          ${o-a.width/2-4},${l+n+2}`),e.attr("cx",s-a.width/2+2).attr("cy",l).attr("r",1.5).attr("class","tag-hole"),"TB"===v&&(t.attr("class","tag-label-bkg").attr("points",`\n            ${m},${s+2}\n            ${m},${s-2}\n            ${m+10},${s-n-2}\n            ${m+10+a.width+4},${s-n-2}\n            ${m+10+a.width+4},${s+n+2}\n            ${m+10},${s+n+2}`).attr("transform","translate(12,12) rotate(45, "+m+","+s+")"),e.attr("cx",m+2).attr("cy",s).attr("transform","translate(12,12) rotate(45, "+m+","+s+")"),r.attr("x",m+5).attr("y",s+3).attr("transform","translate(14,14) rotate(45, "+m+","+s+")"))}}s+=50,s>M&&(M=s)}))},R=(t,e,r=0)=>{const i=t+Math.abs(t-e)/2;if(r>5)return i;if(L.every((t=>Math.abs(t-i)>=10)))return L.push(i),i;const a=Math.abs(t-e);return R(t,e-a/5,r+1)},O=(t,e)=>{const r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((t=>{const i=e[t];i.parents&&i.parents.length>0&&i.parents.forEach((t=>{((t,e,r,i)=>{const a=E[e.id],n=E[r.id],c=((t,e,r,i,a)=>{const n=("TB"===v?r.x<i.x:r.y<i.y)?e.branch:t.branch;return Object.values(a).some((r=>(r=>r.seq>t.seq&&r.seq<e.seq)(r)&&(t=>t.branch===n)(r)))})(e,r,a,n,i);let s,o="",l="",h=0,m=0,y=w[r.branch].index;if(3===r.type&&e.id!==r.parents[0]&&(y=w[e.branch].index),c){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10;const t=a.y<n.y?R(a.y,n.y):R(n.y,a.y),r=a.x<n.x?R(a.x,n.x):R(n.x,a.x);"TB"===v?a.x<n.x?s=`M ${a.x} ${a.y} L ${r-h} ${a.y} ${l} ${r} ${a.y+m} L ${r} ${n.y-h} ${o} ${r+m} ${n.y} L ${n.x} ${n.y}`:(y=w[e.branch].index,s=`M ${a.x} ${a.y} L ${r+h} ${a.y} ${o} ${r} ${a.y+m} L ${r} ${n.y-h} ${l} ${r-m} ${n.y} L ${n.x} ${n.y}`):a.y<n.y?s=`M ${a.x} ${a.y} L ${a.x} ${t-h} ${o} ${a.x+m} ${t} L ${n.x-h} ${t} ${l} ${n.x} ${t+m} L ${n.x} ${n.y}`:(y=w[e.branch].index,s=`M ${a.x} ${a.y} L ${a.x} ${t+h} ${l} ${a.x+m} ${t} L ${n.x-h} ${t} ${o} ${n.x} ${t-m} L ${n.x} ${n.y}`)}else o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,"TB"===v?(a.x<n.x&&(s=3===r.type&&e.id!==r.parents[0]?`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${o} ${a.x+m} ${n.y} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${n.x-h} ${a.y} ${l} ${n.x} ${a.y+m} L ${n.x} ${n.y}`),a.x>n.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,s=3===r.type&&e.id!==r.parents[0]?`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${l} ${a.x-m} ${n.y} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${n.x+h} ${a.y} ${o} ${n.x} ${a.y+m} L ${n.x} ${n.y}`),a.x===n.x&&(s=`M ${a.x} ${a.y} L ${n.x} ${n.y}`)):(a.y<n.y&&(s=3===r.type&&e.id!==r.parents[0]?`M ${a.x} ${a.y} L ${n.x-h} ${a.y} ${l} ${n.x} ${a.y+m} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${o} ${a.x+m} ${n.y} L ${n.x} ${n.y}`),a.y>n.y&&(s=3===r.type&&e.id!==r.parents[0]?`M ${a.x} ${a.y} L ${n.x-h} ${a.y} ${o} ${n.x} ${a.y-m} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${a.x} ${n.y+h} ${l} ${a.x+m} ${n.y} L ${n.x} ${n.y}`),a.y===n.y&&(s=`M ${a.x} ${a.y} L ${n.x} ${n.y}`));t.append("path").attr("d",s).attr("class","arrow arrow"+y%8)})(r,e[t],i,e)}))}))},C={parser:n,db:_,renderer:{draw:function(t,e,r,a){w={},E={},T={},M=0,L=[],v="LR";const n=(0,i.c)(),c=n.gitGraph;i.l.debug("in gitgraph renderer",t+"\n","id:",e,r),T=a.db.getCommits();const s=a.db.getBranchesAsObjArray();v=a.db.getDirection();const o=(0,i.j)(`[id="${e}"]`);let l=0;s.forEach(((t,e)=>{const r=I(t.name),i=o.append("g"),a=i.insert("g").attr("class","branchLabel"),n=a.insert("g").attr("class","label branch-label");n.node().appendChild(r);let s=r.getBBox();w[t.name]={pos:l,index:e},l+=50+(c.rotateCommitLabel?40:0)+("TB"===v?s.width/2:0),n.remove(),a.remove(),i.remove()})),A(o,T,!1),c.showBranches&&((t,e)=>{const r=(0,i.c)().gitGraph,a=t.append("g");e.forEach(((t,e)=>{const i=e%8,n=w[t.name].pos,c=a.append("line");c.attr("x1",0),c.attr("y1",n),c.attr("x2",M),c.attr("y2",n),c.attr("class","branch branch"+i),"TB"===v&&(c.attr("y1",30),c.attr("x1",n),c.attr("y2",M),c.attr("x2",n)),L.push(n);let s=t.name;const o=I(s),l=a.insert("rect"),h=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+i);h.node().appendChild(o);let m=o.getBBox();l.attr("class","branchLabelBkg label"+i).attr("rx",4).attr("ry",4).attr("x",-m.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-m.height/2+8).attr("width",m.width+18).attr("height",m.height+4),h.attr("transform","translate("+(-m.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(n-m.height/2-1)+")"),"TB"===v&&(l.attr("x",n-m.width/2-10).attr("y",0),h.attr("transform","translate("+(n-m.width/2-5)+", 0)")),"TB"!==v&&l.attr("transform","translate(-19, "+(n-m.height/2)+")")}))})(o,s),O(o,T),A(o,T,!0),i.A.insertTitle(o,"gitTitleText",c.titleTopMargin,a.db.getDiagramTitle()),(0,i.I)(void 0,o,c.diagramPadding,c.useMaxWidth??n.useMaxWidth)}},styles:t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((e=>`\n        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }\n        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }\n        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }\n        .label${e}  { fill: ${t["git"+e]}; }\n        .arrow${e} { stroke: ${t["git"+e]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`}}}]);