import{_ as u}from"./preload-helper-a2192bf4.js";let _,c,d,p=(async()=>{const f=new Set(["Module","__esModule","default","_export_sfc"]);let i={"./config":()=>(_(["App-40981bc6.css"]),h("./__federation_expose_Config-d42ce11a.js").then(e=>Object.keys(e).every(t=>f.has(t))?()=>e.default:()=>e))},s;s={},_=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const r=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(a=>{const n=r+a;if(n in s)return;s[n]=!0;const o=document.head.appendChild(document.createElement("link"));o.href=n,o.rel="stylesheet"})};async function h(e){return u(()=>import(e).then(async t=>(await t.__tla,t)),[],import.meta.url)}c=e=>{if(!i[e])throw new Error("Can not find remote module "+e);return i[e]()},d=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,r])=>{const a=Object.keys(r)[0],n=Object.values(r)[0],o=n.scope||"default";globalThis.__federation_shared__[o]=globalThis.__federation_shared__[o]||{};const l=globalThis.__federation_shared__[o];(l[t]=l[t]||{})[a]=n})}})();export{p as __tla,_ as dynamicLoadingCss,c as get,d as init};
