/* JS */ gapi.loaded_2(function(_){var window=this;
_.Hk=function(a){_.Oh.call(this,a.wb);this.oE=a;this.v1=null};_.J(_.Hk,_.Qh);_.Hk.prototype.open=function(){this.Qa.targetPos=this.Qa.targetPos||"top-start";this.Qa.anchorPos=this.Qa.anchorPos||"bottom-start";var a=this.oA(),c=this.wb.V();c?(c.style.visibility="hidden",c.style.position="absolute",a.parentNode.appendChild(c)):this.oE.open()};_.Hk.prototype.open=_.Hk.prototype.open;
_.Hk.prototype.Sk=function(){if(this.Qa.closeClickDetection){var a=this,c=function(h){_.Th(a.wb.V(),h)||(a.wb.close(),a.v1=null)};document.Gda?(document.Gda("click",c),this.v1=function(){document.removeEventListener("click",c,!1)}):document.attachEvent&&(document.attachEvent("onclick",c),this.v1=function(){document.detachEvent("onclick",c)})}var f=document.getElementById(this.wb.id),g=this.wb.V();f.style.height=this.wb.height+"px";(f=this.oA())&&_.Vh(g,this.Qa.targetPos,f,this.Qa.anchorPos,{x:this.Qa.leftOffset||
0,y:this.Qa.topOffset||0});g.style.visibility="visible"};_.Hk.prototype.onready=_.Hk.prototype.Sk;_.Hk.prototype.close=function(){this.oE.close();this.v1&&this.v1()};_.Hk.prototype.close=_.Hk.prototype.close;
_.Ik=function(a){_.Oh.call(this,a)};_.J(_.Ik,_.Qh);var aI=["transition","WebkitTransition","MozTransition","OTranstion","msTransition"];_.Ik.prototype.create=function(a){this.vb=document.createElement("div");var c={position:"absolute",top:"-10000px",zIndex:_.Uh(this)};this.Qa.width&&(c.width=this.Qa.width+"px");for(var f in c)this.vb.style[f]=c[f];(a||document.body).appendChild(this.vb)};
_.Ik.prototype.open=function(a){this.wb.fg("updateContainer",(0,_.H)(this.rZ,this));this.create(a);this.wb.Pa(this.vb);this.wb.qc(this.vb)};_.Ik.prototype.open=_.Ik.prototype.open;_.Ik.prototype.Sk=function(){var a=qw(this);if(a){var c=document.getElementById(this.wb.getId());c.style.height=a.height+"px";c.style.width=a.width+"px";this.wb.width=a.width;this.wb.height=a.height;c.style.boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"}};_.Ik.prototype.onready=_.Ik.prototype.Sk;
_.Ik.prototype.close=function(){this.vb.parentNode&&this.vb.parentNode.removeChild(this.vb)};_.Ik.prototype.close=_.Ik.prototype.close;_.Ik.prototype.rZ=function(a,c,f){var g=this.wb.V();g&&(a?(this.gq(c,f),g.style.opacity=0,g.style.display="",window.setTimeout((0,_.H)(function(){dI(g,!0);g.style.opacity=1},this),0)):(g.style.display="none",dI(g,!1),g.style.opacity=0))};var dI=function(a,c){for(var f=0;f<aI.length;f++)a.style[aI[f]]=c?"opacity .13s linear":""};
_.Ik.prototype.gq=function(a,c){var f=this.wb.ua();a+=10;c+=10;if(_.V.util&&(f&&(f=_.tg(f.V(),window),a+=f.x,c+=f.y),f=qw(this))){var g=_.ig(window),h=_.Jf(document);g.width&&(a=Math.min(a,g.width+h.x-f.width-8),c+f.height>g.height+h.y-8&&(c-=20+f.height,c=Math.max(c,Math.min(h.y+1,_.JH()-f.height))))}f=this.wb.V();f.style.left=a+"px";f.style.top=c+"px"};
var qw=function(a){return a.wb.width&&a.wb.height?{width:a.wb.width,height:a.wb.height}:(a=a.wb.rb())&&a.offsetWidth&&a.offsetHeight?{width:a.offsetWidth,height:a.offsetHeight}:null};
_.Jk=function(a){_.Oh.call(this,a)};_.J(_.Jk,_.Qh);_.Jk.prototype.H4=null;_.Jk.prototype.e8=null;_.Jk.prototype.zZ=null;var Lk={end:"start",left:"right",right:"left",start:"end"},Mk={top:"bottom",bottom:"top"};_.Jk.prototype.open=function(){var a=document.createElement("div");_.Mg(a,{top:"-10000px",position:"absolute",zIndex:_.Uh(this)});this.oA().parentNode.appendChild(a);this.wb.qc(a);this.wb.Pa(a)};_.Jk.prototype.open=_.Jk.prototype.open;
_.Jk.prototype.Sk=function(){var a=document.getElementById(this.wb.id);a.style.height=this.wb.height+"px";a.style.width=this.wb.width+"px";a.style.boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)";var c=this.wb.V();c.style.lineHeight=0;var f=this.oA(),g=this.Qa.targetPos||"top-start",h=this.Qa.anchorPos||"bottom-start",l=this.Qa.leftOffset||0,n=this.Qa.topOffset||0;_.Vh(c,g,f,h,{x:l,y:n});var q=_.ig(window),t=_.Jf(document),v=c.offsetLeft<t.x||c.offsetLeft+c.offsetWidth>q.width+t.x;q=c.offsetTop<t.y||c.offsetTop+
c.offsetHeight>q.height+t.y;g=Kk(g,v,q);h=Kk(h,v,q);_.Vh(c,g,f,h,{x:l*(v?-1:1),y:n*(q?-1:1)});c.style.visibility="visible";this.H4=_.ph(document,"mouseover",(0,_.H)(function(w){w.target===a&&this.zZ&&(window.clearTimeout(this.zZ),this.zZ=null)},this));this.e8=_.ph(document,"mouseout",(0,_.H)(function(w){w.target===a&&(this.zZ=window.setTimeout((0,_.H)(this.wb.close,this.wb),1E3))},this))};_.Jk.prototype.onready=_.Jk.prototype.Sk;
var Kk=function(a,c,f){a=a.split("-");for(var g=0;2>g;g++)c&&Lk[a[g]]&&(a[g]=Lk[a[g]]),f&&Mk[a[g]]&&(a[g]=Mk[a[g]]);return a.join("-")};_.Jk.prototype.close=function(){this.H4&&(_.Ch(this.H4),_.Ch(this.e8),this.e8=this.H4=null);this.zZ&&(window.clearTimeout(this.zZ),this.zZ=null);_.Jk.T.close.call(this)};_.Jk.prototype.close=_.Jk.prototype.close;

_.hA.hover=function(a){var c=new _.Ik(_.FC(a));c.create(a.where);a.where=c.vb;a.onClose=function(){c.close()};a.onRestyle=function(f){if(f.updateContainer){var g=f.updateContainer;c.rZ(g.visible,g.x,g.y)}f.width&&(c.wb.width=f.width);f.height&&(c.wb.height=f.height)};a.onCreate=function(f){c.wb=f;f.ua=function(){return a.openerIframe};f.register("_ready",(0,_.H)(c.Sk,c),_.Vz);f.updateContainer=function(g,h,l){c.rZ(g,h,l)}}};

var $k=function(a,c){this.ll=a;this.Dc=c};$k.prototype.P4=function(a){this.ll.or(this.Dc,a)};$k.prototype.YZ=function(){this.ll.oh(this.Dc)};$k.prototype.N4=function(){this.ll.oc(this.Dc)};$k.prototype.uk=function(a,c,f,g,h){this.ll.oe(this.Dc,a,c,f,g,h)};
_.bl=function(a){this.w=this.Ac=a;this.n=null;this.slf=0;this.ssh=!1;this.sen=!0;this.shl=this.itm=null};_.bl.prototype.sm=function(a,c){this.Ac.Pm(new $k(a,this));this.n=c};_.bl.prototype.sh=function(){this.Ac.show()};_.bl.prototype.hi=function(){this.Ac.Gl()};_.bl.prototype.cl=function(){this.Ac.close()};_.bl.prototype.en=function(){this.Ac.enable()};_.bl.prototype.di=function(){this.Ac.disable()};_.bl.prototype.hl=function(a){this.Ac.Nk(a)};_.bl.prototype.vr=function(a,c){this.Ac.Vk(a,c)};

_.Sf=function(a,c){c.parentNode&&c.parentNode.insertBefore(a,c.nextSibling)};_.Si="StopIteration"in _.D?_.D.StopIteration:{message:"StopIteration",stack:""};_.Mi=function(){};_.Mi.prototype.next=function(){throw _.Si;};_.Mi.prototype.xc=function(){return this};

_.Pi=function(a,c){this.Ka={};this.Ye=[];this.IE=this.Kf=0;var f=arguments.length;if(1<f){if(f%2)throw Error("q");for(var g=0;g<f;g+=2)this.set(arguments[g],arguments[g+1])}else a&&this.addAll(a)};_.k=_.Pi.prototype;_.k.Da=function(){return this.Kf};_.k.Va=function(){Qi(this);for(var a=[],c=0;c<this.Ye.length;c++)a.push(this.Ka[this.Ye[c]]);return a};_.k.$b=function(){Qi(this);return this.Ye.concat()};_.k.YR=function(a){return _.Ri(this.Ka,a)};_.k.zn=_.b(4);
_.k.equals=function(a,c){if(this===a)return!0;if(this.Kf!=a.Da())return!1;c=c||kA;Qi(this);for(var f,g=0;f=this.Ye[g];g++)if(!c(this.get(f),a.get(f)))return!1;return!0};var kA=function(a,c){return a===c};_.Pi.prototype.isEmpty=function(){return 0==this.Kf};_.Pi.prototype.clear=function(){this.Ka={};this.IE=this.Kf=this.Ye.length=0};_.Pi.prototype.remove=function(a){return _.Ri(this.Ka,a)?(delete this.Ka[a],this.Kf--,this.IE++,this.Ye.length>2*this.Kf&&Qi(this),!0):!1};
var Qi=function(a){if(a.Kf!=a.Ye.length){for(var c=0,f=0;c<a.Ye.length;){var g=a.Ye[c];_.Ri(a.Ka,g)&&(a.Ye[f++]=g);c++}a.Ye.length=f}if(a.Kf!=a.Ye.length){var h={};for(f=c=0;c<a.Ye.length;)g=a.Ye[c],_.Ri(h,g)||(a.Ye[f++]=g,h[g]=1),c++;a.Ye.length=f}};_.k=_.Pi.prototype;_.k.get=function(a,c){return _.Ri(this.Ka,a)?this.Ka[a]:c};_.k.set=function(a,c){_.Ri(this.Ka,a)||(this.Kf++,this.Ye.push(a),this.IE++);this.Ka[a]=c};
_.k.addAll=function(a){if(a instanceof _.Pi)for(var c=a.$b(),f=0;f<c.length;f++)this.set(c[f],a.get(c[f]));else for(c in a)this.set(c,a[c])};_.k.forEach=function(a,c){for(var f=this.$b(),g=0;g<f.length;g++){var h=f[g],l=this.get(h);a.call(c,l,h,this)}};_.k.clone=function(){return new _.Pi(this)};_.k.xc=function(a){Qi(this);var c=0,f=this.IE,g=this,h=new _.Mi;h.next=function(){if(f!=g.IE)throw Error("z");if(c>=g.Ye.length)throw _.Si;var l=g.Ye[c++];return a?l:g.Ka[l]};return h};
_.Ri=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};

_.ah=function(a,c){var f={},g;for(g in a)c.call(void 0,a[g],g,a)&&(f[g]=a[g]);return f};

_.xR=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};_.BR=!_.W&&!_.GY();

var al=function(a){a.ll.os(a.Dc)},cl=function(a){this.Dc=a;this.$a=0;this.wf=!1;this.Ak=!0;this.AN=null},dl=function(a){return 5==a.$a||4==a.$a};cl.prototype.isEnabled=function(){return this.Ak};cl.prototype.jn=function(a){this.Ak=a};
var el=function(a,c,f){this.h5=a||{};this.C7=c||0;this.$fa=f||0;a={};c=(0,_.H)(this.Lk,this);a.fc=c;c=(0,_.H)(this.Qg,this);a.rc=c;c=(0,_.H)(this.Zg,this);a.sc=c;c=(0,_.H)(this.fe,this);a.hc=c;c=(0,_.H)(this.Qd,this);a.cc=c;c=(0,_.H)(this.Cl,this);a.os=c;c=(0,_.H)(this.Bl,this);a.or=c;c=(0,_.H)(this.zl,this);a.oh=c;c=(0,_.H)(this.xl,this);a.oc=c;c=(0,_.H)(this.yl,this);a.oe=c;c=(0,_.H)(this.Al,this);a.oi=c;this.ll=a};_.k=el.prototype;
_.k.Qg=function(a,c,f){try{a+=null!=c?"_"+c:"",f.sm(this.ll,a),this.h5[a]=new cl(f)}catch(g){return!1}return!0};_.k.Lk=function(a,c){return(a=this.h5[a+(null!=c?"_"+c:"")])?a.Dc:null};_.k.Zg=function(a){var c=jl(this,a);if(c&&(2==c.$a||3==c.$a)&&c.isEnabled()&&!c.wf){try{a.sh()}catch(f){}c.wf=!0}};_.k.fe=function(a){var c=jl(this,a);if(c&&(2==c.$a||3==c.$a||dl(c))&&c.wf){try{a.hi()}catch(f){}c.wf=!1}};_.k.Qd=function(a){var c=jl(this,a);if(c&&5!=c.$a){try{this.fe(a),a.cl()}catch(f){}il(this,c)}};
_.k.Cl=function(a){(a=jl(this,a))&&0==a.$a&&(fl(this,a),a.$a=1)};var fl=function(a,c){a.C7?(a=setTimeout((0,_.H)(function(){dl(c)||gl(this,c)},a),a.C7),c.AN=a):gl(a,c)},gl=function(a,c){var f=a.$fa-a.C7;0<f&&(a=setTimeout((0,_.H)(function(){dl(c)||(c.$a=4,this.Qd(c.Dc))},a),f),c.AN=a)},hl=function(a){null!=a.AN&&(clearTimeout(a.AN),a.AN=null)};_.k=el.prototype;_.k.Bl=function(a){(a=jl(this,a))&&!dl(a)&&1==a.$a&&(hl(a),a.$a=3)};_.k.zl=function(a){(a=jl(this,a))&&!dl(a)&&(a.wf=!1)};
_.k.xl=function(a){var c=jl(this,a);if(c&&!dl(c)){try{this.fe(a)}catch(f){}il(this,c)}};_.k.yl=function(a){(a=jl(this,a))&&!dl(a)&&(a.$a=4,this.Qd(a.Dc))};_.k.Al=function(a,c){(a=jl(this,a))&&!dl(a)&&2<=c&&4>=c&&!dl(a)&&(hl(a),a.$a=2)};var il=function(a,c){hl(c);c.$a=5;a=a.h5;for(var f in a)a[f]==c&&delete a[f]},jl=function(a,c){return a.h5[c.n]},kl=function(){this.ll=window.gbar.wg};_.k=kl.prototype;_.k.Qg=function(a,c,f){return this.ll.rc(a,c,f)};_.k.Lk=function(a,c){return this.ll.fc(a,c)};
_.k.Zg=function(a){this.ll.sc(a)};_.k.fe=function(a){this.ll.hc(a)};_.k.Qd=function(a){this.ll.cc(a)};_.k.Cl=function(a){this.ll.os(a)};_.k.Bl=function(a,c){this.ll.or(a,c)};_.k.zl=function(a){this.ll.oh(a)};_.k.xl=function(a){this.ll.oc(a)};_.k.yl=function(a,c,f,g,h,l){this.ll.oe(a,c,f,g,h,l)};_.k.Al=function(a,c,f,g){this.ll.oi(a,c,f,g)};var ll=function(){el.call(this)};_.J(ll,el);
var ml=function(a){if(window.___jsl.man)a(window.___jsl.man);else{var c=function(){var g=new ll;window.___jsl.man=g;a(g)};if(window.gbar){var f=function(){if(window.gbar.wg){var g=new kl;window.___jsl.man=g;a(g)}else c()};window.gbar.wg?f():window.gbar.qm?window.gbar.qm(f):c()}else c()}},nl=function(){return window.___jsl.man},qO=function(a){this.Fka=a;a.then((0,_.H)(function(){},this));this.vu=null},CO=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];
h=BO(a,c).then(function(l){return l.apply(null,g)});return new qO(h)},lP={},BO=function(a,c){var f=lP[c];if(f)return f;f=(f=_.fh(c))?_.Nu(f):(new _.C(function(g,h){var l=(new _.yf(document)).createElement("SCRIPT");l.async=!0;_.fv(l,_.nq(a));l.onload=l.onreadystatechange=function(){l.readyState&&"loaded"!=l.readyState&&"complete"!=l.readyState||g()};l.onerror=h;(document.head||document.getElementsByTagName("head")[0]).appendChild(l)})).then(function(){var g=_.fh(c);if(!g)throw Error("Aa`"+c+"`"+a);
return g});return lP[c]=f},zP=function(a,c){a.Fka.then(function(f){var g=f.startFeedback;if(!g)throw Error("Ma`startFeedback");return g.apply(f,c)})};
var BP=function(a){this.tja=a},VP=_.Nq("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");BP.prototype.Xka=function(a){zP(this.tja,arguments)};BO(VP,"help.service.Lazy.create");
var Fl={contactid:!0,cdu:!0,cmp:!0,email:!0,hl:!0,n:!0,m:!0,p:!0,src:!0,userid:!0,sp:!0,ytid:!0};_.sf({nm:!0,s:!0,pr:!0,v:!0},Fl);
var PY=function(){this.j9=_.Su();this.j9.promise.then(function(a){_.Mg(a.rb(),{border:"none","margin-bottom":"-4px"});_.Mg(a.V(),{"border-radius":"4px",overflow:"hidden","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 16px"})})};_.k=PY.prototype;_.k.aca=function(a){_.Sm.open(a,this.j9.resolve)};_.k.oca=function(){this.j9.promise.then(function(a){return a.close()})};_.k.P$=function(a,c,f,g){this.j9.promise.then(function(h){return h.send(a,f,g,c)})};
_.k.i$=function(a,c,f){this.j9.promise.then(function(g){return g.sD({updateContainer:{visible:a,x:c,y:f}})})};_.k.a1=function(a,c,f){_.Sm.a1(a,f,c)};
var Ll=/(?:^|\s)g-(?:hovercard|profile)(?:$|\s)/,Nl={loadDelay:400,hoverDelay:500,closeDelay:500},Jl=0,Hl=function(a){return document.body==a?"body":a.__cardid||null},Il=function(a){var c=Hl(a);c||(c=a.__cardid=Jl++);return c},Kl=function(a){var c=a.className||"getAttribute"in a&&a.getAttribute("class");!(c=c&&Ll.test(c))&&(c=a.getAttribute)&&(c=/-[a-z]/.test("hovercardId")?!1:_.BR&&a.dataset?"hovercardId"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+_.xR("hovercardId")):!!a.getAttribute("data-"+
_.xR("hovercardId")));return c||"getAttribute"in a&&a.getAttribute("oid")&&36==_.P("card/p")?!0:"G:HOVERCARD"==a.tagName.toUpperCase()},Ml=function(a,c){var f={};_.sf(f,Nl,_.P("iframes/card")||{},_.P("card")||{});for(var g=[],h=a;h;h=h.parentNode){var l=Hl(h);l&&c[l]&&g.push(c[l])}(0,_.Be)(g.reverse(),function(n){_.sf(f,n)});c="G:HOVERCARD"==a.tagName.toUpperCase()?"":"data-";g=a.attributes;for(h=0;h<g.length;h++)_.Xg(g[h].name,c)&&(f[g[h].name.substring(c.length)]=g[h].value);"getAttribute"in a&&
a.getAttribute("oid")&&36==_.P("card/p")&&(f.ytid=a.getAttribute("oid"));!f.userid&&"A"==a.tagName.toUpperCase()&&a.pathname&&(c=a.pathname.match(/^\/?(\d+)$/),/\.google\.com$/.test(a.hostname)&&c&&(f.userid=c[1]));f.hl||(f.hl=_.P("lang")||_.R.getUrlParameters().hl||void 0);f.m=f.entity;f.src=f.source;delete f.entity;delete f.source;return f},Ol=function(a,c){c=c[a];"number"!==typeof c&&(c=Nl[a]);return 0>c?0:c};
var Pl=function(a){this.j1=a;this.Dc=new _.bl(this);this.Wa=null;this.y4=!1;this.dba=0;this.Gia=!1};_.k=Pl.prototype;
_.k.load=function(a){al(this.Yf);a=_.ah(a,function(l,n){return Fl[n]&&null!=l});a.origin=window.location.protocol+"//"+window.location.host;var c=this,f=this.j1,g={_event:function(l){if(!(l.timestamp<f.N7)){if("sgcp_ams"==l.event)f.x4=!0,f.I4=!1;else if(f.x4&&"mouseover"==l.event)f.I4=!0;else if(f.x4&&"mouseout"==l.event)f.I4=!1;else if("sgcp_amh"==l.event)f.x4=!1,f.I4||Vl(f);else{var n=!1;switch(l.event){case "calendar":n=f.I9.scheduleEventHandler;break;case "chat":n=f.I9.sendChatHandler;break;case "email":n=
f.I9.sendEmailHandler;break;case "feedback":n=f.I9.feedbackHandler;break;case "videoChat":n=f.I9.videoChatHandler}n&&n(f.I9["hovercard-id"]||f.I9.userid||f.I9.email)}if("mouseover"==l.event||"sgcp_ams"==l.event)window.clearTimeout(f.fS),f.fS=null;if(l.cpid){for(n=document.getElementById(l.cpid);n&&"BODY"!=n.parentNode.tagName;)n=n.parentNode;f.O7=n}l.fromCard&&"mouseout"==l.event&&Vl(f)}},_ready:(0,_.H)(this.Sk,this),version:function(l){f.xx(f.gX,{type:"circles_changed",version:l.v})},loaded:function(l){l.ri==
c.dba&&c.oga()},rendered:function(){var l=c.j1.WZ,n=_.Jf(document);c.Gia&&(c.rZ(!0,l.x+n.x,l.y+n.y),c.Gia=!1,l=c.j1,l.xx(l.gX,{type:"show",frame:c.Wa}))},renderfailed:function(){c.Gia=!1;c.rZ(!1,0,0)},disposed:function(){c.Wa.close()},cardAction:function(l){JN(f,l)}},h=":card";!_.P("iframes/card/url")&&_.P("iframes/hovercard/url")&&(h=":hovercard");a=_.CN(_.AN(_.BN(new _.BB({disableMultiLevelParentRelay:!0,hover:!0}),g),_.Vz),a).rl("hover").setUrl(h);_.P("card/relayOpenTop")&&(_.Ko(a,-1),_.Du(a).N2("_default"));
_.Sm.open(a.value(),(0,_.H)(function(l){this.Wa=l;_.Mg(l.rb(),{border:"none","margin-bottom":"-4px"});_.Mg(l.V(),{"border-radius":"4px",overflow:"hidden","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 16px"})},this))};_.k.Sk=function(){this.y4=!0;this.rZ(!1,0,0);this.Yf.P4({});var a=this.j1;a.Li&&a.Si(a.Li)};_.k.Pm=function(a){this.Yf=a};_.k.Nk=function(a){this.Wa.send("getHealthc",void 0,a,_.Vz)};_.k.Vk=function(a,c){this.Wa.send("getVarc",a,c,_.Vz)};
_.k.rZ=function(a,c,f){this.Wa.updateContainer?this.Wa.updateContainer(a,c,f):this.Wa.sD({updateContainer:{visible:a,x:c,y:f}})};_.k.show=function(){this.rZ(!0,0,-1E4);this.Wa.send("render",void 0,void 0,_.Vz);this.Gia=!0};_.k.Gl=function(){this.Wa.send("hide",void 0,void 0,_.Vz);this.rZ(!1,0,0);var a=this.j1;a.xx(a.gX,{type:"hide"});a.gX=null;a.I9=null;this.Gia=!1};_.k.close=function(){this.Wa.send("dispose",void 0,void 0,_.Vz)};_.k.enable=function(){};_.k.disable=function(){};
var Ql=function(){this.Aba=0;this.l7=[];this.PU={};this.t6={};this.hg={};this.N7=this.fS=this.Sx=this.a0=this.I9=this.gX=this.VE=this.Li=this.gz=null;this.WZ={x:0,y:0};this.I4=this.x4=!1;this.O7=null;this.l6=new Map;_.fh("gapi.load")("gapi.iframes.style.slide-menu")},Xl=0,LN=function(a,c,f,g){var h=Il(c);h=a.hg[h]||(a.hg[h]={});h[f]||(h[f]=g=(0,_.H)(g,a),c.addEventListener?c.addEventListener(f,g,"focus"==f||"blur"==f):("focus"==f?f="focusin":"blur"==f&&(f="focusout"),c.attachEvent("on"+f,g)))},MN=
function(a,c,f){(a=a.hg[Il(c)])&&a[f]&&(c.addEventListener?c.removeEventListener(f,a[f],"focus"==f||"blur"==f):c.detachEvent("focus"==f?"onfocusin":"blur"==f?"onfocusout":"on"+f,a[f]),delete a[f])},NN=function(a,c){var f=a.hg[c.id];if(f)for(var g in f)f.hasOwnProperty(g)&&MN(a,c,g)};_.k=Ql.prototype;
_.k.vT=function(a,c,f){if(a=a||document.body){this.Aba++;var g=Il(a);c&&(this.PU[g]=c);f&&(this.t6[g]=f);LN(this,a,"mouseover",this.U1);LN(this,a,"mouseout",this.aA);LN(this,a,"mousedown",this.KZ);LN(this,a,"focus",this.U1);LN(this,a,"blur",this.aA);LN(this,document.body,"mouseout",this.aA);LN(this,document.body,"mousedown",this.KZ);f&&f.preload&&(c=this.Li=document.createElement("div"),this.VE=Ml(c,this.t6),BZ(this))}else window.setTimeout((0,_.H)(this.vT,this),100)};
_.k.HT=function(a){if(a=a||document.body)if(Vl(this,0),a!=document.body?NN(this,a):MN(this,document.body,"mouseover"),a=Il(a),delete this.PU[a],delete this.t6[a],!(0<--this.Aba)){NN(this,document.body);var c=this.gz;this.x7();this.gz=null;window.setTimeout(function(){var f=nl();f&&c&&f.Qd(c.Dc)},100)}};_.k.zh=function(a){this.l7.push(a)};_.k.Ub=function(a){_.xe(this.l7,a)};
_.k.xx=function(a,c){for(var f=[];a;){var g=Hl(a);g&&this.PU[g]&&f.push(this.PU[g]);a=a.parentNode}_.Gl(f,this.l7);(0,_.Be)(f,function(h){h(c)})};
_.k.U1=function(a){this.N7=(0,_.pa)();var c=a.target||a.srcElement;if(c&&"IFRAME"!=c.tagName){for(;c&&!Kl(c);)if(c=c.parentNode,!c||1!=c.nodeType)return;if(c)if(this.gX==c||this.Li==c)this.fS&&(window.clearTimeout(this.fS),this.fS=null);else{this.Li=c;LN(this,c,"mousemove",this.zJ);"focus"==a.type||"focusin"==a.type?(a=_.ug(c),this.WZ.x=a.x,this.WZ.y=a.y+c.offsetHeight):(this.WZ.x=a.clientX,this.WZ.y=a.clientY);this.a0=(0,_.pa)();a=this.VE=Ml(c,this.t6);var f=Ol("hoverDelay",a);this.gz?this.gz.y4&&
(window.clearTimeout(this.Sx),this.Sx=window.setTimeout((0,_.H)(this.Si,this,c),f-Ol("loadDelay",a))):BZ(this)}}};_.k.aA=function(a){this.N7=(0,_.pa)();if("blur"!=a.type||a.target==this.gX||a.target==this.Li){if(a=a.relatedTarget||a.toElement){if("IFRAME"==a.tagName)return;if(this.O7)for(;a&&"BODY"!=a.tagName;){if(a==this.O7)return;a=a.parentNode}}Vl(this)}};_.k.KZ=function(){Vl(this,0)};_.k.zJ=function(a){this.WZ.x=a.clientX;this.WZ.y=a.clientY};
var BZ=function(a){a.Sx&&(window.clearTimeout(a.Sx),a.Sx=null);if(a.Li&&(a.xx(a.Li,{type:"hover",config:a.VE}),!a.gz)){var c=a.gz=new Pl(a);ml((0,_.H)(function(f){f.Qg("card",Xl++,c.Dc)&&c.load(this.VE)},a))}};
Ql.prototype.Si=function(a){this.Sx&&(window.clearTimeout(this.Sx),this.Sx=null);if(this.Li==a){var c=Ol("hoverDelay",this.VE)-Ol("loadDelay",this.VE)-(0,_.pa)()+this.a0;if(0<c)this.Sx=window.setTimeout((0,_.H)(this.Si,this,a),c);else{this.xx(a,{type:"hover",config:this.VE});this.VE.feedbackHandler||(this.VE.feedbackHandler=this.Yka);this.VE.overrideFeedback=!0;this.VE.scheduleEventHandler&&(this.VE.overrideCalendar=!0);this.VE.sendChatHandler&&(this.VE.overrideChat=!0);this.VE.sendEmailHandler&&
(this.VE.overrideEmail=!0);this.VE.videoChatHandler&&(this.VE.overrideVideoChat=!0);c=this.gz;var f=this.VE;a=(0,_.H)(this.sF,this,a);c.y4&&(c.oga=a,f.ri=++c.dba,c.Wa.send("loadData",f,void 0,_.Vz))}}};
Ql.prototype.Yka=function(){var a={};a={apiKey:a.apiKey||a.apiKey,environment:a.gla||a.environment,helpCenterPath:a.hla||a.helpCenterPath,locale:a.locale||a.locale||"en".replace(/-/g,"_"),nonce:a.nonce||a.nonce,productData:a.productData||a.productData,receiverUri:a.jla||a.receiverUri,renderApiUri:a.kla||a.renderApiUri,theme:a.lla||a.theme,window:a.window||a.window};a=CO(VP,"help.service.Lazy.create","5003140",a);(new BP(a)).Xka({productVersion:"gapi",customZIndex:2000000002})};
Ql.prototype.sF=function(a){if(this.Li===a&&this.gz&&this.gz.y4&&this.a0){var c=Ol("hoverDelay",this.VE)-(0,_.pa)()+this.a0;0<c?window.setTimeout((0,_.H)(this.sF,this,a),c):(this.x7(),this.gX=this.Li,this.I9=this.VE,MN(this,this.Li,"mousemove"),this.a0=this.VE=this.Li=null,nl().Zg(this.gz.Dc))}};
var Vl=function(a,c){a.Li&&MN(a,a.Li,"mousemove");a.Li=null;a.VE=null;a.a0=null;a.Sx&&(window.clearTimeout(a.Sx),a.Sx=null);!a.fS&&a.gX&&(a.fS=window.setTimeout((0,_.H)(a.x7,a),"number"===typeof c?c:Ol("closeDelay",a.I9)))};Ql.prototype.x7=function(){this.fS&&(window.clearTimeout(this.fS),this.fS=null);this.gX&&nl().fe(this.gz.Dc)};var JN=function(a,c){a.xx(null,c);a.w8&&a.w8.send("cardAction",c,void 0,a.v8)};
Ql.prototype.cz=function(a,c,f){var g={};g.frame=a;g.filter=c||_.Uz;g.callback=f||_.gh;this.l6.set(String(_.oe(a)),g);a.register("cardAction",(0,_.H)(function(h){JN(this,h);g.callback(h)},this),g.filter)};Ql.prototype.bX=function(a){this.v8=a||_.Uz;_.Sm.a1((0,_.H)(function(c){this.w8=c;this.w8.register("cardAction",(0,_.H)(this.GW,this),this.v8)},this),void 0,this.v8)};
Ql.prototype.GW=function(a){this.l6.forEach(function(c){return c.frame.send("cardAction",a,void 0,c.filter)});this.gz&&this.gz.Wa.send("cardAction",a,void 0,_.Vz)};
_.El=function(){var a={},c=new Ql,f=new PY;a.vT=function(g,h,l){c.vT(g,h,l)};a.HT=function(g){c.HT(g)};a.zh=function(g){c.zh(g)};a.Ub=function(g){c.Ub(g)};a.cz=function(g,h,l){c.cz(g,h,l)};a.bX=function(g){c.bX(g)};a.GW=function(g){c.GW(g)};a.S=function(g,h){h.origin=window.location.protocol+"//"+window.location.host;var l=_.Sm.Nf({url:":card",where:document.getElementById(g),queryParams:h,messageHandlers:{_ready:function(){l.send("loadData",h,void 0,_.Vz)},loaded:function(){l.send("render",void 0,
void 0,_.Vz)}},messageHandlersFilter:_.Vz})};a.oca=function(){f.oca()};a.i$=function(g,h,l){f.i$(g,h,l)};a.P$=function(g,h,l,n){f.P$(g,h,l,n)};a.aca=function(g){f.aca(g)};a.qca=function(g,h,l){f.a1(g,h,l)};a.mha=function(){return _.Vz};a.rha=function(){return _.Uz};return a}();
_.Mu("gapi.card.watch",_.El.vT);_.Mu("gapi.card.unwatch",_.El.HT);_.Mu("gapi.card.addCallback",_.El.zh);_.Mu("gapi.card.removeCallback",_.El.Ub);_.Mu("gapi.card.render",_.El.S);_.Mu("gapi.card.connectChild",_.El.cz);_.Mu("gapi.card.connectOpener",_.El.bX);_.Mu("gapi.card.broadcast",_.El.GW);_.Mu("gapi.card.iframeClose",_.El.close);_.Mu("gapi.card.iframeRestyle",_.El.i$);_.Mu("gapi.card.iframeSend",_.El.P$);_.Mu("gapi.card.iframeSetup",_.El.aca);_.Mu("gapi.card.iframeAddOnOpenerHandler",_.El.qca);
_.Mu("gapi.card.iframeGetCrossOriginFilter",_.El.mha);_.Mu("gapi.card.iframeGetSameOriginFilter",_.El.rha);

var mB,lB=function(){mB||(_.Fa("card/source","webmentions"),mB=!0,_.El.vT())};_.Sc("profile",lB);_.Mu("gapi.profile.watch",lB);

});
// Google Inc.