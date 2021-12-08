import{V as t,W as e,C as n}from"./vendor.4bb7507c.js";function r(t){const e=t-1;return e*e*e+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */const[o,a]=function(n){var{fallback:o}=n,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(n,["fallback"]);const c=new Map,i=new Map;function s(n,c,i){return(s,l)=>(n.set(l.key,{rect:s.getBoundingClientRect()}),()=>{if(c.has(l.key)){const{rect:n}=c.get(l.key);return c.delete(l.key),function(n,o,c){const{delay:i=0,duration:s=(t=>30*Math.sqrt(t)),easing:l=r}=e(e({},a),c),f=o.getBoundingClientRect(),p=n.left-f.left,u=n.top-f.top,y=n.width/f.width,d=n.height/f.height,g=Math.sqrt(p*p+u*u),b=getComputedStyle(o),h="none"===b.transform?"":b.transform,m=+b.opacity;return{delay:i,duration:t(s)?s(g):s,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*m};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${e*p}px,${e*u}px) scale(${t+(1-t)*y}, ${t+(1-t)*d});\n\t\t\t`}}(n,s,l)}return n.delete(l.key),o&&o(s,l,i)})}return[s(i,c,!1),s(c,i,!0)]}({}),c=n({send:o,receive:a});export{c as t};
