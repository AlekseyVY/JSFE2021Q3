(()=>{let e;self.onmessage=o=>{e=o.data,console.log(e);const l=n(o.data);"github"===e.source?s(l):t(l)};const s=e=>{fetch(e).then((e=>e.blob())).then((e=>{postMessage(e)}))},t=e=>{fetch(e).then((e=>e.json())).then((e=>{console.log(e.links),fetch(e.links.html).then((e=>(console.log(e),e.blob()))).then((e=>{postMessage(e)}))}))},n=e=>{let s=null;const t=e.num<10?`0${e.num}`:e.num,n=(new Date).toLocaleTimeString("ru-RU",{hour12:!1}),[o]=String(n).split(":");return o>=6&&o<=11&&(s="morning"),o>=12&&o<=17&&(s="afternoon"),o>=18&&o<=23&&(s="evening"),o>=0&&o<=5&&(s="night"),"github"===e.source?`https://raw.githubusercontent.com/AlekseyVY/stage1-tasks/assets/images/${s}/${t}.jpg`:"unsplash"===e.source?(console.log("uniplash"),`https://api.unsplash.com/photos/random?query=${s}&client_id=x3eswxPzWXmGDQU4DxczZ4dGoyhUSiyaHKKMJeaP-Fg`):void 0}})();