(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={basename:"gplus-archive"}},21:function(e,t,a){e.exports=a.p+"static/media/logo.5942d6fb.svg"},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(20),c=a.n(l),s=(a(29),a(2)),i=a(3),m=a(5),o=a(4),u=a(6),p=a(42),h=a(38),d=a(41),g=a(17),b=a(21),f=a.n(b),E=(a(31),a(8)),v=a.n(E),y=a(11),N=a(40),j=a(13),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=void 0===e?{}:e,a=t.profilePageUrl,r=t.avatarImageUrl,l=t.displayName;return n.a.createElement("a",{className:"mr-2",href:a},n.a.createElement("img",{src:r,alt:l,width:"36",height:"36",style:{borderRadius:"50%"}}))}}]),t}(n.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=void 0===e?{}:e,a=t.profilePageUrl,r=t.displayName;return n.a.createElement("a",{href:a,className:"text-body mr-2"},r)}}]),t}(n.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.community,t=void 0===e?{}:e,a=t.resourceName,r=t.displayName;return n.a.createElement("a",{href:"https://plus.google.com/".concat(a),className:"text-secondary"},r)}}]),t}(n.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}))}}]),t}(n.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=void 0===t?{}:t,r=e.canClose,l=void 0===r||r,c=a||{},s=c.heading,i=c.message;return s||i?n.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},s?n.a.createElement("h6",{className:"alert-heading"},s):null,n.a.createElement("p",{className:"mb-0"},i),l&&n.a.createElement("button",{onClick:this.props.clearError,type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):null}}],[{key:"getResponseError",value:function(){var e=Object(y.a)(v.a.mark(function e(t){var a,r,n,l,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return a=null,r=null,e.prev=4,e.next=7,t.text();case 7:(n=e.sent)&&((l=JSON.parse(n))&&l.message&&(a=l.message),l&&l.messages&&(r=l.messages)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:if(c=null,422!==t.status||a||!r){e.next=17;break}return c="".concat(t.status," ").concat(t.statusText),e.abrupt("return",{response:t,heading:c,message:null,messages:r});case 17:return t&&t.status&&t.statusText&&(c="".concat(t.status," ").concat(t.statusText)),a||(a="".concat(t.status," ").concat(t.statusText)),c===a&&(c=null),e.abrupt("return",{response:t,heading:c,message:a,messages:r});case 21:case"end":return e.stop()}},e,this,[[4,11]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(r.Component),S=a(12),P=a(43),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.total,r=e.per_page,l=e.hrefBuilder,c=e.onPageChange;if(!a||a<1)return null;var s=t||1,i=s-1,m=s+1,o=Math.ceil(a/r),u=(s-1)*r+1,p=Math.min(s*r,a),h=p+1-u,d=1===h?"":"s";if(1===o)return n.a.createElement("nav",{"aria-label":"Page Navigation"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item disabled"},n.a.createElement("span",{className:"page-link"},h," item",d))));var g=s>1?"page-item":"page-item disabled",b=s>1?"page-item":"page-item disabled",f=s*r<a?"page-item":"page-item disabled";return n.a.createElement("nav",{"aria-label":"Page Navigation"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:g},n.a.createElement(P.a,{className:"page-link",to:l(1),onClick:function(){return c(1)},title:"First Page"},n.a.createElement("i",{title:"First Page",className:"fas fa-step-backward"}))),n.a.createElement("li",{className:b},n.a.createElement(P.a,{className:"page-link",to:l(i),onClick:function(){return c(i)},title:"Previous Page"},n.a.createElement("i",{title:"Prevous Page",className:"fas fa-chevron-left"}))),n.a.createElement("li",{className:"page-item disabled"},n.a.createElement("span",{className:"page-link"},"Page ",s," of ",o.toLocaleString())),n.a.createElement("li",{className:f},n.a.createElement(P.a,{className:"page-link",to:l(m),onClick:function(){return c(m)},title:"Next Page"},n.a.createElement("i",{title:"Next Page",className:"fas fa-chevron-right"}))),n.a.createElement("li",{className:f},n.a.createElement(P.a,{className:"page-link",to:l(o),onClick:function(){return c(o)},title:"Last Page"},n.a.createElement("i",{title:"Last Page",className:"fas fa-step-forward"})))),n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item disabled"},n.a.createElement("span",{className:"page-link"},"Showing ",h," item",d," (",u.toLocaleString()," - ",p.toLocaleString()," of ",a.toLocaleString()," total)"))))}}]),t}(r.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var r=a.state.search,n=a.props.location,l="/"+t.getPagedSearchQueryString(r);l!==n.pathname+n.search?a.props.history.push(l):a.performSearch(r)},a.handlePageChange=function(){var e=Object(y.a)(v.a.mark(function e(r){var n,l,c,s,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state,l=n.search,c=n.page,s=r.selected+1,c!==s){e.next=4;break}return e.abrupt("return");case 4:i="/"+t.getPagedSearchQueryString(l,s),a.props.history.push(i),window.scrollTo(0,0);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.buildPageHref=function(e){var r=a.state.search;return"/"+t.getPagedSearchQueryString(r,e)},a.state={index:null,search:"",isFetching:!1,error:null,per_page:10,page:1},a.isUpdating=!1,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,r,n,l,c,s,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({error:null,isFetching:!0}),t="/posts/index.json",""!==(a=S.basename)&&(t="/".concat(a,"/").concat(t)),r=null,e.prev=5,e.next=8,fetch(t);case 8:if((r=e.sent).ok){e.next=17;break}return e.t0=this,e.next=13,F.getResponseError(r);case 13:return e.t1=e.sent,e.t2={error:e.t1,isFetching:!1},e.t0.setState.call(e.t0,e.t2),e.abrupt("return");case 17:e.next=23;break;case 19:return e.prev=19,e.t3=e.catch(5),this.setState({error:e.t3,isFetching:!1}),e.abrupt("return");case 23:return e.next=25,r.json();case 25:n=e.sent,l=this.props.location,c=new URLSearchParams(l.search),s=c.get("search"),i=parseInt(c.get("page"),10),this.setState({index:n,search:s||"",page:i,isFetching:!1,error:null}),this.performSearch(s,i);case 32:case"end":return e.stop()}},e,this,[[5,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(y.a)(v.a.mark(function e(t){var a,r,n,l,c,s,i,m,o,u,p;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isUpdating){e.next=2;break}return e.abrupt("return");case 2:this.isUpdating=!0;try{a=t.location,r=t.isFetching,n=new URLSearchParams(a.search),l=n.get("search"),c=(c=n.get("page"))?parseInt(c,10):null,s=this.props,i=s.location,m=s.isFetching,o=new URLSearchParams(i.search),u=o.get("search"),p=(p=o.get("page"))?parseInt(p,10):null,m!==r&&this.setState({isFetching:m}),u===l&&p===c&&n.toString()===o.toString()||this.performSearch(u,p)}finally{this.isUpdating=!1}case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"performSearch",value:function(e,t){var a=this.state.index,r=void 0===a?{}:a,n=(r||{}).posts,l=void 0===n?[]:n,c=e&&e.toLowerCase(),s=0;l.forEach(function(t){t.hidden=e&&(!t.content||!t.content.toLowerCase().includes(c)),t.hidden||s++}),this.setState({index:r,search:e||"",page:t,matchingPostCount:s,isFetching:!1,error:null})}},{key:"renderPagination",value:function(){var e=this,t=this.state,a=t.index,r=void 0===a?{}:a,l=t.page,c=t.matchingPostCount,s=(r||{}).posts,i=((void 0===s?[]:s)||[]).length;return(void 0===i?0:i)<1?null:n.a.createElement(C,{page:l,total:c,per_page:10,hrefBuilder:this.buildPageHref,onPageChange:function(t){return e.handlePageChange(t)}})}},{key:"render",value:function(){var e=this,a=this.state,l=a.index,c=void 0===l?{}:l,s=a.search,i=void 0===s?"":s,m=a.isFetching,o=a.error,u=a.page,p=void 0===u?1:u,d=a.per_page,g=void 0===d?10:d,b=(c||{}).posts,f=void 0===b?[]:b;f.sort(Object(j.firstBy)("creationTime",-1));var E=0,v=0,y=(p-1)*g,N=f.map(function(e){if(e.hidden)return null;if(E>=g)return null;if(v<y)return v++,null;E++;var a=new Date(e.creationTime),l="/posts/".concat(e.id),c=e.author,s=e.postAcl,i=e.media,m=e.album,o=e.link,u=e.poll,p=e.resharedPost,d=(s||{}).communityAcl,b=((void 0===d?{}:d)||{}).community,f=e.title;return p&&(e.media||(e.media=p.media)),e.content&&(f=e.content),n.a.createElement("div",{key:l,className:"card mb-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},n.a.createElement(O,{user:c}),n.a.createElement(k,{user:c}),b&&b.displayName&&n.a.createElement(r.Fragment,null,n.a.createElement("i",{className:"fas fa-caret-right mr-1"}),n.a.createElement(w,{community:b})),n.a.createElement("small",{className:"text-muted ml-5 text-secondary"},n.a.createElement(h.a,{to:l,className:"text-secondary"},a.toLocaleString()))),p&&n.a.createElement("p",{className:"card-text"},n.a.createElement(h.a,{to:l},"Originally shared by ",p.author.displayName)),n.a.createElement("p",{className:"card-text"},n.a.createElement(h.a,{to:l,className:"text-body",dangerouslySetInnerHTML:{__html:f},style:{textDecoration:"none"}})),i&&t.renderMediaPreview(i,l),m&&t.renderAlbumPreview(m,l),o&&t.renderLinkPreview(o,l),u&&n.a.createElement("p",{className:"card-text"},n.a.createElement(h.a,{to:l},"View Poll"))))});return n.a.createElement(r.Fragment,null,n.a.createElement("form",{className:"form-inline mb-1",onSubmit:this.handleSubmit},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:i,onChange:function(t){return e.setState({search:t.target.value})}}),n.a.createElement("button",{className:"btn btn-primary my-2 my-sm-0",type:"submit"},"Search")),m&&n.a.createElement(x,null),n.a.createElement(F,{error:o,canClose:!1}),N,this.renderPagination())}}],[{key:"getQueryString",value:function(e){var t=Object.keys(e).filter(function(t){return t&&e[t]&&""!==e[t]}).map(function(t){var a=e[t];return a&&""!==a?[t,e[t]].map(encodeURIComponent).join("="):null}),a="";return t&&t.length>0&&(a="?"+t.join("&")),a}},{key:"getPagedSearchQueryString",value:function(e,a){return a<2&&(a=null),t.getQueryString({search:e,page:a})}},{key:"renderMediaPreview",value:function(e,t){var a=e.url,l=void 0===a?"":a;if(!l)return null;if(l.startsWith("http://www.youtube.com/watch?v=")){var c=l.substring(31,43);return n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t},n.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(c,"/0.jpg"),alt:e.description,height:"360"})),n.a.createElement("br",null),n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," YouTube"))}if(l.startsWith("https://www.youtube.com/watch?v=")){var s=l.substring(32,43);return n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t},n.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(s,"/0.jpg"),alt:e.description,height:"360"})),n.a.createElement("br",null),n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," YouTube"))}return l.startsWith("https://plus.google.com")?n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," View Media")):"video/*"===e.contentType&&null!=l?n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," View Media")):"image/*"===e.contentType&&null!=l?n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t},n.a.createElement("img",{src:l,alt:e.description,height:"360"}))):null}},{key:"renderAlbumPreview",value:function(e,t){if(!e)return null;var a=e.media;if(!a)return null;var l=a.map(function(e){return"image/*"===e.contentType&&e.url?n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t},n.a.createElement("img",{src:e.url,height:"120",alt:"media"}))):"video/*"===e.contentType&&e.url?n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:t},n.a.createElement("i",{className:"far fa-play-circle"})," Media")):null});return n.a.createElement(r.Fragment,null,l[0],l.length>1&&n.a.createElement(r.Fragment,null,n.a.createElement("br",null),n.a.createElement("a",{href:t},"View ",l.length-1," more item",l.length>2?"s":"")))}},{key:"renderLinkPreview",value:function(e,t){var a=null;return e.title&&(a=n.a.createElement(r.Fragment,null,n.a.createElement("a",{href:e.url},e.title),e.imageUrl&&n.a.createElement(r.Fragment,null,n.a.createElement("br",null),n.a.createElement("a",{href:t},n.a.createElement("img",{src:e.imageUrl,alt:e.title,height:"120"}))))),a}}]),t}(r.Component),L=Object(N.a)(T),U=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.plusOnes;return!e||e.length<1?n.a.createElement(r.Fragment,null):n.a.createElement(r.Fragment,null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h5",null,"Likes"),n.a.createElement("ul",{className:"list-unstyled"},e.map(function(e,t){var a=e.plusOner;return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"mt-0 mb-2"},n.a.createElement(O,{user:a}),n.a.createElement(k,{user:a})))})))}}]),t}(r.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.comments;if(!e||e.length<1)return n.a.createElement(r.Fragment,null);var t=this.props.location.hash;return n.a.createElement(r.Fragment,null,n.a.createElement("hr",null),n.a.createElement("h6",{className:"mt-3"},"Comments"),n.a.createElement("hr",null),n.a.createElement("ul",{className:"list-unstyled"},e.map(function(e,a){var r=e.author,l=e.creationTime,c=e.content,s=e.media,i=e.link,m=new Date(l),o=null;s&&s.url&&"image/*"===s.contentType&&(o=n.a.createElement("a",{href:s.url},n.a.createElement("img",{src:s.url,alt:"",height:"205"})));var u=null;i&&i.url&&(i.imageUrl?u=n.a.createElement("a",{href:i.url},n.a.createElement("img",{src:i.imageUrl,alt:i.title,height:"72",className:"mr-1"}),i.title):i.title&&(u=n.a.createElement("a",{href:i.url},i.title)));var p="comment-".concat(a),h="media mb-2 p-1",d=null,g=t==="#"+p;return g&&(h+=" bg-light",d="1px solid"),n.a.createElement("li",{key:a,id:p,className:h,style:{border:d,borderRadius:"18px"}},n.a.createElement(O,{user:r}),n.a.createElement("div",{className:"media-body"},n.a.createElement("h6",{className:"mt-0 mb-1"},n.a.createElement(k,{user:r}),n.a.createElement("small",{className:"text-muted ml-5 text-secondary"},n.a.createElement("a",{href:"#".concat(p),className:"text-secondary"},m.toLocaleString())),g&&n.a.createElement("i",{className:"fas fa-star ml-3"})),e.content&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),o,u))})))}}]),t}(r.Component),A=Object(N.a)(M),D=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.media;if(!e)return n.a.createElement(r.Fragment,null);var t=e.url;if(!t)return n.a.createElement(r.Fragment,null);if(t.startsWith("http://www.youtube.com/watch?v=")){var a=t.substring(31,43);return n.a.createElement(r.Fragment,null,n.a.createElement("iframe",{width:"480",height:"360",title:e.description,src:"http://www.youtube.com/embed/".concat(a),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),n.a.createElement("br",null),n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," Media"))}if(t.startsWith("https://www.youtube.com/watch?v=")){var l=t.substring(32,43);return n.a.createElement(r.Fragment,null,n.a.createElement("iframe",{width:"480",height:"360",title:e.description,src:"https://www.youtube.com/embed/".concat(l),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," Media"))}return"video/*"===e.contentType&&null!=t?n.a.createElement(r.Fragment,null,n.a.createElement("br",null),n.a.createElement("a",{href:t,className:"mb-3"},n.a.createElement("i",{className:"far fa-play-circle"})," Media")):"image/*"===e.contentType&&null!=t?n.a.createElement("a",{href:t},n.a.createElement("img",{src:t,alt:e.description,height:"360"})):n.a.createElement(r.Fragment,null)}}]),t}(r.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.album,t=(void 0===e?{}:e).media;return t?t.map(function(e){return"image/*"===e.contentType&&e.url?n.a.createElement("div",{key:e.url,className:"my-2"},n.a.createElement("a",{href:e.url},n.a.createElement("img",{src:e.url,height:"360",alt:"media"}))):"video/*"===e.contentType&&e.url?n.a.createElement("div",{key:e.url,className:"my-3"},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:"far fa-play-circle"})," Media")):null}):n.a.createElement(r.Fragment,null)}}]),t}(r.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.link;return e&&e.url?n.a.createElement(r.Fragment,null,n.a.createElement("hr",null),n.a.createElement("h4",null,n.a.createElement("a",{href:e.url},e.title)),e.imageUrl&&n.a.createElement("a",{href:e.url},n.a.createElement("img",{src:e.imageUrl,alt:e.title,height:"360"}))):n.a.createElement(r.Fragment,null)}}]),t}(r.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.poll,t=(void 0===e?{}:e)||{},a=t.choices,l=t.totalVotes,c=void 0===l?0:l;return a?n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"mb-2"},c.toLocaleString()," votes ",n.a.createElement("span",{className:"text-secondary"}," - votes visible to Public")),n.a.createElement("ul",{className:"list-unstyled mt-1"},a.map(function(e,t){var a=e.voteCount,r=e.imageUrl,l=e.description,s=e.votes,i=void 0===s?[]:s;i.sort(Object(j.firstBy)(function(e,t){return e.voter.displayName.localeCompare(t.voter.displayName)}));var m=a/c*100;return n.a.createElement("li",{key:t,className:"media"},r&&n.a.createElement("img",{src:r,className:"mr-3",alt:"",width:94,height:94}),n.a.createElement("div",{className:"media-body"},n.a.createElement("h5",{className:"mt-0 mb-1"},n.a.createElement("a",{"data-toggle":"collapse",href:"#choiceDetails".concat(t),role:"button","aria-expanded":"false","aria-controls":"choiceDetails".concat(t)},l)),n.a.createElement("div",{className:"progress",style:{height:"40px"}},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(m,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},m.toFixed(0),"% ",n.a.createElement("span",null,a))),n.a.createElement("div",{className:"collapse multi-collapse",id:"choiceDetails".concat(t)},n.a.createElement("div",{className:"card card-body"},n.a.createElement("ul",{className:"list-unstyled mt-1"},i.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"mt-0 mb-2"},n.a.createElement(O,{user:e.voter}),n.a.createElement(k,{user:e.voter})))}))))))}))):n.a.createElement(r.Fragment,null)}}]),t}(r.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={post:{},isFetching:!1,error:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,r,n,l,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,this.setState({error:null,isFetching:!0}),a=this.props.match.params.id,e.next=6,this.getIndex();case 6:if(!(r=e.sent)){e.next=22;break}if(!(t=r.posts.find(function(e){return e.id===a}))){e.next=22;break}return n="/posts/".concat(t.date," - ").concat(t.title,".json"),""!==(l=S.basename)&&(n="/".concat(l,"/").concat(n)),e.next=15,fetch(n);case 15:if((c=e.sent).ok){e.next=19;break}return this.setState({error:"Cannot fetch post at ".concat(n),isFetching:!1}),e.abrupt("return");case 19:return e.next=21,c.json();case 21:t=e.sent;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),this.setState({error:e.t0,isFetching:!1});case 27:this.setState({post:t,isFetching:!1,error:null});case 28:case"end":return e.stop()}},e,this,[[1,24]])}));return function(){return e.apply(this,arguments)}}()},{key:"getIndex",value:function(){var e=Object(y.a)(v.a.mark(function e(){var t,a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="/posts/index.json",""!==(a=S.basename)&&(t="/".concat(a,"/").concat(t)),r=null,e.prev=4,e.next=7,fetch(t);case 7:if((r=e.sent).ok){e.next=16;break}return e.t0=this,e.next=12,F.getResponseError(r);case 12:return e.t1=e.sent,e.t2={error:e.t1,isFetching:!1},e.t0.setState.call(e.t0,e.t2),e.abrupt("return",null);case 16:return e.next=18,r.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t3=e.catch(4),this.setState({error:e.t3,isFetching:!1});case 24:return e.abrupt("return",null);case 25:case"end":return e.stop()}},e,this,[[4,21]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.post,a=void 0===t?{}:t,l=e.isFetching,c=void 0===l||l,s=e.error,i=void 0===s?null:s,m=a||{},o=m.creationTime,u=void 0===o?"":o,p=m.author,h=void 0===p?{}:p,d=m.content,g=void 0===d?"":d,b=m.media,f=m.url,E=m.link,v=void 0===E?{}:E,y=m.album,N=void 0===y?{}:y,j=m.postAcl,S=void 0===j?{}:j,P=m.poll,C=m.resharedPost,T=m.comments,L=void 0===T?[]:T,M=m.plusOnes,B=void 0===M?[]:M,H=(S||{}).communityAcl,W=((void 0===H?{}:H)||{}).community,G=new Date(u);return C&&(b||(b=C.media),g||(g=C.content)),n.a.createElement(r.Fragment,null,c&&n.a.createElement(x,null),n.a.createElement(F,{error:i,canClose:!1}),n.a.createElement(O,{user:h}),n.a.createElement(k,{user:h}),W&&W.displayName&&n.a.createElement(r.Fragment,null,n.a.createElement("i",{className:"fas fa-caret-right mr-1"}),n.a.createElement(w,{community:W})),n.a.createElement("small",{className:"text-muted ml-5 text-secondary"},G.toLocaleString()),n.a.createElement("hr",null),C&&n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:C.url},"Originally shared by ",C.author.displayName)),n.a.createElement("div",{className:"mt-3",dangerouslySetInnerHTML:{__html:g}}),n.a.createElement("br",null),n.a.createElement(D,{media:b}),n.a.createElement(R,{link:v}),n.a.createElement(I,{album:N}),n.a.createElement(_,{poll:P}),n.a.createElement("br",null),n.a.createElement("a",{href:f},"View Original G+ Post"),n.a.createElement(A,{comments:L}),n.a.createElement(U,{plusOnes:B}))}}]),t}(r.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("h3",null,"About"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/evilgeniuslabs/gplus-archive"},"G+ Archiver")," is a project for generating a completely client-side archive of exported G+ posts. The archive can be hosted publicly for free on ",n.a.createElement("a",{href:"https://pages.github.com"},"GitHub Pages")," using the instructions at ",n.a.createElement("a",{href:"https://github.com/gitname/react-gh-pages"},"react-gh-pages")),n.a.createElement("p",null,"This project was bootstrapped with ",n.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App"),"."))}}]),t}(r.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=S.basename;return n.a.createElement(p.a,{basename:e},n.a.createElement(r.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-2",style:{paddingTop:".25rem",paddingBottom:".25rem"}},n.a.createElement(h.a,{to:"/",className:"navbar-brand"},n.a.createElement("img",{className:"navbar-brand-logo",style:{width:"32px"},alt:"Logo",src:f.a})," G+ Post Archive"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"}),n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"https://github.com/evilgeniuslabs/gplus-archive",className:"nav-link"},n.a.createElement("i",{className:"fab fa-github"})," Fork me on GitHub")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(h.a,{to:"/about",className:"nav-link"},n.a.createElement("i",{className:"fas fa-info-circle"})," About"))))),n.a.createElement("main",{role:"main",className:"container-fluid"},n.a.createElement(d.a,null,n.a.createElement(g.a,{exact:!0,path:"/about",component:H}),n.a.createElement(g.a,{exact:!0,path:"/",component:L}),n.a.createElement(g.a,{path:"/posts/:id",component:B})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.ac845ea4.chunk.js.map