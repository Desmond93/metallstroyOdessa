var simplebox=function(){function G(){t.style.display="none";n.onerror=n.onload=null}function V(){r||(r=!0,G(),r=!1)}function W(){simplebox.start({content:"Sorry! the request cann't be reached"},{transitionIn:"none",transitionOut:"none"})}function A(){var b=function(){d.innerHTML=m.innerHTML="";Box.fadeOut(u,"fast",function(){r=!1})};if(!r)if(r=!0,G(),Box.removeEvent(document,"keydown",P),Box.removeEvent(window,"resize",Q),B.style.display="none",w.style.display="none",x.style.display="none",d.style.overflow=
"hidden",g&&(g.parentNode.removeChild(g),g=null),"fade"==a.transitionOut)Box.fadeOut(k,b);else if("elastic"==a.transitionOut){var c=e;e=h;h=c;new Animate(H,"fx",{from:0,to:1,step:I,time:a.speedOut,callback:function(){k.style.display="none";b()}})}else k.style.display="none",b()}function E(){if(!r){r=!0;G();a=Box.extend({},y);var b=p[q],c=a.orig,l,f;"string"==typeof c&&(c=document.querySelector(c));b.getElementsByTagName&&!c&&(a.orig=c=b.getElementsByTagName("img")[0]);a.title=b.title||c&&(c.title||
c.alt)||"";b=a.href||b.href||null;if(a.type){var z=a.type;"html"==z&&(b=a.content)}else if(b&&(b.match(J)?z="image":b.match(X)&&(z="swf")),"undefined"!==typeof a.content)z="html",b=a.content;else if((l=a.video)&&(f=l.split(";"))&&0<f.length){var k={mp4:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',webm:'video/webm; codecs="vp8, vorbis"',ogv:'video/ogg; codecs="theora, vorbis"',ogg:'video/ogg; codecs="theora, vorbis"'},e=[],d=null;z="h5video";var g=document.createElement("video");document.body.appendChild(g);
f.forEach(function(b,a,c){a=b.slice(-3);if("flv"!=a&&(l=k[a])){if("mp4"==a&&(e.push(b),!g.play)){e.push(b);return}a=g.canPlayType(l);"probably"!=a&&"maybe"!=a||d||(d='<source src="'+b+"\" type='"+l+"'>")}else e.push(b)});0<e.length&&(b=e[0]);d&&(b=d)}if(b&&z){a.href=b;a.type=z;c=f="";var h;switch(z){case "image":r=!1;clearInterval(K);t.style.display="block";K=setInterval(Y,66);n=new Image;n.onload=function(){n.onerror=null;n.onload=null;r=!0;m.innerHTML="";a.width=n.width;a.height=n.height;n.alt=
a.title;n.id="simple-img";m.appendChild(n);F()};n.onerror=W;n.src=b;break;case "h5video":if(g.play&&d){f+='<video id="simple-video" ';for(h in a.h5video)f+=h+"="+a.h5video[h]+" ";f+='width="'+a.width+'" height="'+a.height+'">';m.innerHTML=f+d+"</video>";document.body.removeChild(g);F();break}0<e.length&&(document.body.removeChild(g),a.swf.flashvars=Z(),a.href=a.flashPlayer);case "swf":f+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+a.width+'" height="'+a.height+'"><param name="movie" value="'+
a.href+'"></param>';for(h in a.swf)f+='<param name="'+h+"\" value='"+a.swf[h]+"'></param>",c+=" "+h+"='"+a.swf[h]+"'";f+='<embed src="'+a.href+'" type="application/x-shockwave-flash" width="'+a.width+'" height="'+a.height+'"'+c+"></embed></object>";m.innerHTML=f;F();break;case "html":m.innerHTML=a.href,a.autoDimension&&(Box.extend(m.style,{display:"block",position:"absolute"}),a.width=parseInt(Box.getComputedStyleValue(m,"width")),a.height=parseInt(Box.getComputedStyleValue(m,"height")),Box.extend(m.style,
{display:"none",position:"auto"})),F()}}else r=!1}}function Z(){var b={},c;var l=b.playlist=[];(c=a.h5video.poster)&&l.push(c);c={};c.url=a.href;c.autoPlay=a.h5video.autoplay;c.autoBuffering="none"!==a.h5video.preload;l.push(c);return"config="+JSON.stringify(b)}function F(){var b=a.fadeSpeed;t.style.display="none";var c=Box.extend({},e);e=R();aa();var l=e.width-2*a.padding;var f=e.height-2*a.padding-v;"none"!=Box.getComputedStyleValue(k,"display")?(B.style.display="none",w.style.display="none",x.style.display=
"none",Box.fadeOut(d,b,function(){d.style.overflow="hidden";d.innerHTML=m.innerHTML;h={width:parseInt(d.style.width),height:parseInt(d.style.height)};h.width==l&&h.height==f?Box.fadeIn(d,b,function(){Box.extendStyle(k,e);D()}):(h=c,new Animate(H,"fx",{from:0,to:1,time:a.changeSpeed,step:I,callback:function(a){Box.fadeIn(d,b,D)}}))})):(h=S(),d.innerHTML=m.innerHTML,a.overlayShow&&(u.style.backgroundColor=a.overlayColor,u.style.opacity=a.overlayOpacity,u.style.display="block"),"elastic"==a.transitionIn?
(Box.extend(d.style,{top:a.padding+"px",left:a.padding+"px",width:Math.max(h.width-2*a.padding,1)+"px",height:Math.max(h.height-2*a.padding,1)+"px"}),Box.extendStyle(k,h),k.style.opacity=1,k.style.display="block",new Animate(H,"fx",{from:0,to:1,step:I,time:a.speedIn,callback:D})):(Box.extendStyle(k,e),Box.extend(d.style,{top:a.padding+"px",left:a.padding+"px",width:Math.max(e.width-2*a.padding,1)+"px",height:Math.max(e.height-2*a.padding-v,1)+"px"}),"fade"==a.transitionIn?Box.fadeIn(k,b,D):(k.style.opacity=
1,k.style.display="block",D())))}function D(){var b=a.scrolling;b="auto"==b?"html"==a.type?"auto":"hidden":"yes"==b?"auto":"visible";d.style.overflow=b;g&&(g.style.display="block");a.showCloseButton&&(B.style.display="block");a.hideOnContentClick&&(Box.removeEvent(d,"click",A),Box.addEvent(d,"click",A));a.hideOnOverlayClick&&a.overlayShow&&(Box.removeEvent(u,"click",A),Box.addEvent(u,"click",A));if(1<p.length&&(b=navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",Box.addEvent(document,
"keydown",P),a.enableMouseWheel&&(Box.removeEvent(k,b,T),Box.addEvent(k,b,T)),a.showNavArrows)){if(a.cyclic&&1<p.length||0!=q)w.style.display="block";if(a.cyclic&&1<p.length||q!=p.length-1)x.style.display="block"}a.enableCenter&&Box.addEvent(window,"resize",Q);r=!1;var c,l=p.length;b=q+1;for(c=q+a.preloadIndent;b<=c&&!(b>l-1);++b){var f=p[b].href;"undefined"!==typeof f&&!C[b]&&f.match(J)&&(f=new Image,f.src=p[b].href,C[b]=f)}for(b=c+1;b<l-1;++b)delete C[b];b=q-1;for(c=q-a.preloadIndent;b>=c&&!(0>
b);b--)f=p[b].href,"undefined"!==typeof f&&!C[b]&&f.match(J)&&(f=new Image,f.src=p[b].href,C[b]=f);for(b=0;b<c;++b)delete C[b]}function I(b){var c=Math.round(h.width+(e.width-h.width)*b),l=Math.round(h.height+(e.height-h.height)*b);Box.extendStyle(k,{width:c,height:l,left:Math.round(h.left+(e.left-h.left)*b),top:Math.round(h.top+(e.top-h.top)*b)});c=Math.max(c-2*a.padding,0);l=Math.max(l-(2*a.padding+v*b),0);d.style.width=c+"px";d.style.height=l+"px"}function L(){var b=document.documentElement;return[window.innerWidth||
b&&b.clientWidth||document.body.clientWidth,window.innerHeight||b&&b.clientHeight||document.body.clientHeight,document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]}function S(){var b=a.orig;var c=a.padding;if(b){var l=0,f=0;var e=b.offsetHeight;var d=b.offsetWidth;do f+=b.offsetLeft,l+=b.offsetTop;while(b=b.offsetParent);c={width:d+2*c,height:e+2*c,top:l-c,left:f-c}}else c=L(),c={width:1,height:1,top:c[3]+.5*c[1],left:c[2]+.5*c[0]};
return c}function R(){var b=L(),c={},e=a.margin,f=a.autoScale,d=2*a.padding,h=2*(a.margin+20),g=2*(a.margin+20);-1<a.width.toString().indexOf("%")?(c.width=b[0]*parseFloat(a.width)/100-40,f=!1):c.width=a.width+d;-1<a.height.toString().indexOf("%")?(c.height=b[1]*parseFloat(a.height)/100-40,f=!1):c.height=a.height+d;f&&(c.width>b[0]-h||c.height>b[1]-g)&&("image"==a.type?(f=Math.min(Math.min(b[0]-(h+d),a.width)/a.width,Math.min(b[1]-(g+d),a.height)/a.height),c.width=Math.round(f*(c.width-d))+d,c.height=
Math.round(f*(c.height-d))+d):(c.width=Math.min(c.width,b[0]-h),c.height=Math.min(c.height,b[1]-g)));c.left=b[2]+.5*(b[0]-c.width);c.top=b[3]+.5*(b[1]-c.height);0==a.autoScale&&(c.top=Math.max(b[3]+e,c.top),c.left=Math.max(b[2]+e,c.left));return c}function aa(){var b=a.title,c=a.padding;g&&(g.parentNode.removeChild(g),g=null);v=0;if(a.titleShow&&b){if("function"===typeof a.titleFormat)var d=a.titleFormat(b,p,q,a);else if(d=!1,b&&b.length)switch(a.titlePosition){case "over":d='<span id="simple-title-over">'+
b+"</span>";break;default:d=b}b=Math.max(e.width-2*c,1);g=Box.createElement("div",{id:"simple-title",innerHTML:d,className:"simple-title-"+a.titlePosition});Box.extend(g.style,{width:b+"px",paddingLeft:c+"px",paddingRight:c+"px"});document.body.appendChild(g);switch(a.titlePosition){case "over":g.style.bottom=c+"px";break;default:v=g.offsetHeight-a.padding,e.height+=v}k.appendChild(g);g.style.display="none"}}function T(b){b=b||window.event;0>(b.wheelDelta?b.wheelDelta/120:-b.detail/3)?M():N();b.preventDefault()}
function Q(){console.log(L());h=S();e=R();g&&(g.style.width=e.width-2*a.padding+"px","inside"==a.titlePosition&&(v=g.offsetHeight-a.padding,e.height+=v));Box.extendStyle(k,e);Box.extend(d.style,{top:a.padding+"px",left:a.padding+"px",width:Math.max(e.width-2*a.padding,1)+"px",height:Math.max(e.height-2*a.padding-v,1)+"px"})}function P(b){27==b.keyCode&&a.enableEscapeButton?(b.preventDefault(),A()):37==b.keyCode?(b.preventDefault(),N()):39==b.keyCode&&(b.preventDefault(),M())}function N(){return U(q-
1)}function M(){return U(q+1)}function U(b){r||(-1<b&&p.length>b&&(q=b,E()),a.cyclic&&1<p.length&&0>b&&(q=p.length-1,E()),a.cyclic&&1<p.length&&b>=p.length&&(q=0,E()))}function Y(){"block"!=t.style.display?clearInterval(K):(t.childNodes[0].style.top=-40*O+"px",O=(O+1)%12)}var u,m,k,d,t,B,w,x,g=null,r=!1,p,q,y,a,K,O=1,n=new Image,H={style:{}},h,e,v,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,X=/[^\.]\.(swf)\s*$/i,C=[],ba={padding:10,margin:20,width:560,height:340,cyclic:!1,overlayShow:!0,hideOnOverlayClick:!0,
hideOnContentClick:!1,swf:{wmode:"opaque"},h5video:{controls:"controls",preload:"metadata",autoplay:!1},flashPlayer:"http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf",titlePosition:"inside",titleShow:!0,titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:500,speedOut:500,changeSpeed:500,changeFade:500,scrolling:"auto",autoScale:!0,autoDimension:!0,enableCenter:!0,enableMouseWheel:!0,showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,overlayColor:"#666",overlayOpacity:"0.3",
preloadIndent:1};return{init:function(){var b=document.createDocumentFragment(),a=Box.createElement("div",{id:"simplebox"});b.appendChild(a);m=Box.createElement("div",{id:"simple-tmp"});a.appendChild(m);t=m.cloneNode(!1);t.id="simple-loading";t.appendChild(document.createElement("div"));a.appendChild(t);u=m.cloneNode(!1);u.id="simple-overlay";a.appendChild(u);k=m.cloneNode(!1);k.id="simple-outer";a.appendChild(k);d=m.cloneNode(!1);d.id="simple-inner";k.appendChild(d);B=Box.createElement("a",{id:"simple-close"});
k.appendChild(B);w=Box.createElement("a",{id:"simple-left"});a=Box.createElement("span",{id:"simple-left-ico",className:"simple-ico"});w.appendChild(a);k.appendChild(w);x=w.cloneNode(!0);x.id="simple-right";x.querySelector("span").id="simple-right-ico";k.appendChild(x);document.body.appendChild(b);Box.addEvent(B,"click",A);Box.addEvent(w,"click",N);Box.addEvent(x,"click",M);Box.addEvent(t,"click",V)},start:function(b,a,d){function c(c,d){p=d;q=c;y=Box.extend({},ba);var e=b.attributes;if(e)for(var f=
0,h=e.length;f<h;++f){var g=e[f].nodeName;if(0==g.indexOf("data-")){g=g.split("-");var k=g.pop();for(var l=1,m=g.length,n=y;l<m;++l)n[g[l]]&&(n=n[g[l]]);n[k]=e[f].nodeValue}}a&&Box.extend(y,a);y.width=parseInt(y.width);y.height=parseInt(y.height);E()}if("string"===typeof b){var e=document.querySelectorAll(b);e=Array.prototype.slice.call(e,0)}else e=!Array.isArray(b)&&[b];2==arguments.length&&"boolean"==typeof arguments[1]&&(d=a,a=null);0!=e.length&&(d?(b=e[0],c(0,e)):e.forEach(function(a,d,e){Box.addEvent(a,
"click",function(f){b=a;f.preventDefault();c(d,e)})}))}}}();
