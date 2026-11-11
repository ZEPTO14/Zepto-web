(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const lf=document.querySelector("#penguji-screen"),Ut=i=>lf.querySelector("#"+i),Vd="zepto_penguji_v1";let jn=[],Gd=!1;const Sl=["nama","peran","institusi","bio"];function ac(i){if(!Array.isArray(i))throw Error();return i.filter(e=>e&&typeof e.nama=="string"&&e.nama.trim()).map(e=>Object.fromEntries(Sl.map(t=>[t,typeof e[t]=="string"?e[t]:""])))}function Ko(){const i=Ut("pj-list");if(i.replaceChildren(),!jn.length){i.textContent="Belum ada profil dosen penguji.";return}jn.forEach((e,t)=>{const n=document.createElement("article");n.className="pj-card";for(const[s,a]of[["small",e.peran||"Dosen penguji"],["h3",e.nama],["p",e.institusi],["p",e.bio]])if(a){const r=document.createElement(s);r.textContent=a,n.append(r)}for(const[s,a]of[["Edit",()=>jd(t)],["Hapus",()=>{confirm("Hapus profil "+e.nama+" dari perangkat ini?")&&Wd(jn.filter((r,o)=>o!==t))&&El()}]]){const r=document.createElement("button");r.type="button",r.textContent=s,r.onclick=a,n.append(r)}i.append(n)})}function Wd(i){try{return localStorage.setItem(Vd,JSON.stringify(i)),jn=i,Gd=!0,Ko(),Ut("pj-status").textContent="Perubahan tersimpan di perangkat ini.",!0}catch{return Ut("pj-status").textContent="Gagal menyimpan. Periksa izin penyimpanan perangkat.",!1}}let Er=-1;function jd(i){var e;Er=i,Ut("pj-form").hidden=!1,Ut("pj-title").textContent=i<0?"Tambah profil":"Edit profil";for(const t of Sl)Ut("pj-"+t).value=((e=jn[i])==null?void 0:e[t])||"";Ut("pj-nama").focus()}function El(){Er=-1,Ut("pj-form").hidden=!0,Ut("pj-form").reset()}Ut("pj-add").onclick=()=>jd(-1);Ut("pj-cancel").onclick=El;Ut("pj-form").onsubmit=i=>{i.preventDefault();const e=Object.fromEntries(Sl.map(n=>[n,Ut("pj-"+n).value.trim()]));if(!e.nama){Ut("pj-status").textContent="Isi nama dosen terlebih dahulu.",Ut("pj-nama").focus();return}const t=jn.slice();Er<0?t.push(e):t[Er]=e,Wd(t)&&El()};Ut("pj-export").onclick=()=>{const i=URL.createObjectURL(new Blob([JSON.stringify(jn,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=i,e.download="penguji.json",document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(i),2e3)};async function cf(){try{const i=localStorage.getItem(Vd);if(i!==null){jn=ac(JSON.parse(i)),Ko();return}}catch{}try{const i=await fetch("./penguji.json",{cache:"no-store"});if(!i.ok)throw Error();const e=ac(await i.json());Gd||(jn=e)}catch{Ut("pj-status").textContent="Daftar awal tidak dapat dimuat."}Ko()}var xr,Hd;(Hd=(xr=window.Capacitor)==null?void 0:xr.isNativePlatform)!=null&&Hd.call(xr)&&(Ut("pj-export").hidden=!0);cf();const rc=["zepto_v1","progresAstronaut_v2","kuisStats","planetFavorit"];function uf(i=localStorage){var n;const e=new Map(rc.map(s=>[s,i.getItem(s)]));let t;try{t=(n=JSON.parse(e.get("progresAstronaut_v2")||"{}"))==null?void 0:n.pengaturan}catch{}try{for(const s of rc)i.removeItem(s);t&&typeof t=="object"&&i.setItem("progresAstronaut_v2",JSON.stringify({pengaturan:t}))}catch(s){for(const[a,r]of e)try{r===null?i.removeItem(a):i.setItem(a,r)}catch{}throw s}}function df({stopAudio:i,reload:e=()=>window.location.reload()}){const t=document.getElementById("z-reset-dialog"),n=document.getElementById("z-reset-confirm"),s=document.getElementById("z-reset-error"),a=()=>{s.hidden=!0,n.disabled=!1,t.open||t.showModal()};document.getElementById("btn-reset-belajar").addEventListener("click",a),window.addEventListener("zepto-request-reset",a),document.getElementById("z-reset-cancel").addEventListener("click",()=>t.close()),n.addEventListener("click",async()=>{n.disabled=!0;try{uf(),window.dispatchEvent(new Event("zepto-navigation")),window.dispatchEvent(new Event("zepto-leave-solar"));try{await i()}catch{}e()}catch{n.disabled=!1,s.textContent="Reset belum berhasil karena penyimpanan perangkat tidak tersedia. Coba lagi.",s.hidden=!1}})}const $t=[["Mercury","Merkurius","🪨","Planet terdekat dari Matahari. Permukaannya berbatu dan penuh kawah.","mercurymap.jpg",.38,"Panas saat siang, sangat dingin saat malam","59 hari","88 hari","Tidak memiliki satelit"],["Venus","Venus","🟡","Planet terpanas. Udara tebalnya memerangkap panas Matahari.","venusmap.jpg",.95,"Sangat panas","243 hari","225 hari","Tidak memiliki satelit"],["Earth","Bumi","🌍","Rumah kita. Bumi memiliki air cair dan udara yang mendukung kehidupan.","earth_daymap.jpg",1,"Mendukung kehidupan","24 jam","365 hari","Bulan"],["Mars","Mars","🔴","Disebut planet merah karena permukaannya mengandung karat besi.","marsmap.jpg",.53,"Dingin","Sekitar 24 jam","687 hari","Phobos dan Deimos"],["Jupiter","Jupiter","🟤","Planet terbesar di Tata Surya. Jupiter termasuk planet raksasa gas.","jupiter.jpg",11.2,"Awan bagian atas dingin","10 jam","12 tahun","Banyak, termasuk Ganymede"],["Saturn","Saturnus","🪐","Terkenal dengan cincin yang terbuat dari es dan batuan.","saturnmap.jpg",9.45,"Awan bagian atas dingin","11 jam","29 tahun","Banyak, termasuk Titan"],["Uranus","Uranus","🔵","Planet biru kehijauan. Uranus berputar dengan posisi sangat miring.","uranus.jpg",4,"Sangat dingin","17 jam","84 tahun","Banyak, termasuk Titania"],["Neptune","Neptunus","🔷","Planet kedelapan dan terjauh dari Matahari. Anginnya sangat kencang.","neptune.jpg",3.88,"Sangat dingin","16 jam","165 tahun","Beberapa, termasuk Triton"]].map(([i,e,t,n,s,a,r,o,l,c],d)=>({id:i,name:e,icon:t,text:n,texture:s,size:a,temp:r,rotation:o,revolution:l,moons:c,order:d+1})),br=[{id:"Sun",name:"Matahari",icon:"☀️",text:"Matahari adalah bintang yang menjadi pusat Tata Surya. Matahari memberikan cahaya dan panas bagi Bumi.",texture:"sun.jpg"},{id:"Moon",name:"Bulan",icon:"🌕",text:"Bulan adalah satelit alami Bumi. Bulan mengelilingi Bumi. Bulan tidak menghasilkan cahaya sendiri, tetapi memantulkan cahaya Matahari.",texture:"moonmap.jpg"},{id:"Asteroid",name:"Sabuk Asteroid",icon:"🪨",text:"Sabuk asteroid berisi banyak batuan angkasa. Letaknya di antara orbit Mars dan Jupiter."},{id:"Comet",name:"Komet",icon:"☄️",text:"Komet tersusun dari es, debu, dan batuan. Ketika mendekati Matahari, komet dapat memiliki ekor. Ekor gasnya menjauhi Matahari."},{id:"Meteor",name:"Meteor dan Meteoroid",icon:"🌠",text:"Meteoroid adalah batuan kecil di luar angkasa. Meteor adalah gejala cahaya saat meteoroid memasuki atmosfer Bumi. Sisa batu yang mencapai tanah disebut meteorit."},{id:"Pluto",name:"Pluto",icon:"⚪",text:"Pluto pernah dianggap sebagai planet kesembilan. Sekarang Pluto dikelompokkan sebagai planet katai. Pluto tidak termasuk delapan planet utama.",texture:"plutomap.jpg"}],gs=[...$t,...br],hs=[{id:"solar",name:"Pengertian Tata Surya",icon:"🌌",text:"Tata Surya terdiri dari Matahari dan benda langit yang mengelilinginya. Ada delapan planet. Orbit adalah jalur yang dilalui benda langit saat mengelilingi benda lain."},br[0],...$t,br[1],{id:"rotation",name:"Rotasi Bumi",icon:"🌗",text:"Rotasi adalah gerakan Bumi berputar pada porosnya. Satu putaran membutuhkan sekitar 24 jam. Bagian yang menghadap Matahari mengalami siang. Bagian yang membelakangi Matahari mengalami malam."},{id:"revolution",name:"Revolusi Bumi",icon:"🌍",text:"Revolusi adalah gerakan Bumi mengelilingi Matahari. Satu kali mengelilingi Matahari membutuhkan sekitar 365 hari atau satu tahun."},{id:"solar-eclipse",name:"Gerhana Matahari",icon:"🌘",text:"Gerhana Matahari terjadi ketika Bulan berada di antara Matahari dan Bumi. Bayangan Bulan jatuh pada sebagian permukaan Bumi."},{id:"lunar-eclipse",name:"Gerhana Bulan",icon:"🌒",text:"Gerhana Bulan terjadi ketika Bumi berada di antara Matahari dan Bulan. Bulan masuk ke dalam bayangan Bumi."},...br.slice(2)],Xd=[{id:"home",name:"Rumah Kita",text:"Temukan Bumi di antara planet lainnya!",targets:["Earth"]},{id:"giant",name:"Planet Terbesar",text:"Temukan Jupiter!",targets:["Jupiter"]},{id:"rings",name:"Planet Bercincin",text:"Temukan Saturnus!",targets:["Saturn"]},{id:"neighbors",name:"Tetangga Bumi",text:"Temukan planet tepat sebelum dan sesudah Bumi: Venus dan Mars.",targets:["Venus","Mars"]},{id:"rocks",name:"Pemburu Asteroid",text:"Temukan sabuk asteroid di antara Mars dan Jupiter.",targets:["Asteroid"]},{id:"moon",name:"Temukan Bulan",text:"Cari satelit alami Bumi.",targets:["Moon"]},{id:"comet",name:"Pemburu Komet",text:"Temukan komet yang melintas.",targets:["Comet"]}],Na=[["Pusat Tata Surya adalah …","Benda langit yang menjadi pusat orbit delapan planet adalah …",["Matahari","Bulan","Bumi","Mars"],0],["Berapa jumlah planet utama di Tata Surya?","Tata Surya memiliki … planet utama.",["Enam","Tujuh","Delapan","Sembilan"],2],["Planet paling dekat dengan Matahari adalah …","Planet pertama dalam urutan dari Matahari adalah …",["Bumi","Venus","Merkurius","Mars"],2],["Planet terbesar di Tata Surya adalah …","Di antara planet berikut, manakah yang paling besar?",["Jupiter","Bumi","Mars","Neptunus"],0],["Planet yang terkenal dengan cincinnya adalah …","Planet dengan cincin es dan batuan yang sangat jelas adalah …",["Merkurius","Saturnus","Venus","Bumi"],1],["Satelit alami Bumi adalah …","Benda langit yang secara alami mengelilingi Bumi adalah …",["Matahari","Mars","Komet","Bulan"],3],["Gerakan Bumi berputar pada porosnya disebut …","Siang dan malam terjadi karena gerakan … Bumi.",["Revolusi","Rotasi","Gerhana","Orbit Bulan"],1],["Gerakan Bumi mengelilingi Matahari disebut …","Gerakan Bumi yang membutuhkan sekitar satu tahun adalah …",["Rotasi","Revolusi","Gerhana","Meteor"],1],["Saat gerhana Matahari, benda di antara Matahari dan Bumi adalah …","Bayangan benda apa yang jatuh pada Bumi saat gerhana Matahari?",["Mars","Jupiter","Bulan","Komet"],2],["Saat gerhana Bulan, benda di antara Matahari dan Bulan adalah …","Bayangan benda apa yang dimasuki Bulan saat gerhana Bulan?",["Venus","Bumi","Mars","Saturnus"],1]].map(([i,e,t,n],s)=>({id:"q"+(s+1),pre:i,post:e,options:t,answer:n})),Tl=i=>Xd.find(e=>e.id===i),qd="zepto_v1",oc=()=>({profile:null,pretest:null,posttest:null,attempt:null,read:[],explored:[],missions:[],games:[],rewards:{},stars:0,badges:[],level:"Astronaut Pemula",tutorial:!1,activeMission:null,found:[]});function mt(){try{return{...oc(),...JSON.parse(localStorage.getItem(qd)||"{}")}}catch{return oc()}}function hf(i){return i>=250?"Master Tata Surya":i>=150?"Kapten ZEPTO":i>=75?"Penjelajah Planet":"Astronaut Pemula"}function bn(i){var t,n;i.level=hf(i.stars);const e=[];i.explored.includes("Earth")&&e.push("🌍 Penjelajah Bumi"),i.explored.includes("Moon")&&e.push("🌕 Sahabat Bulan"),i.explored.includes("Sun")&&e.push("☀️ Sahabat Matahari"),["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"].every(s=>i.explored.includes(s))&&e.push("🪐 Ahli Planet"),i.explored.includes("Comet")&&e.push("☄️ Pemburu Komet"),i.missions.length===7&&e.push("🚀 Penjelajah ZEPTO"),((t=i.posttest)==null?void 0:t.score)>=80&&e.push("🧠 Jago Tata Surya"),i.missions.length===7&&i.games.length>=4&&((n=i.posttest)==null?void 0:n.score)>=80&&e.push("🏆 Master ZEPTO"),i.badges=e;try{localStorage.setItem(qd,JSON.stringify(i))}catch{return window.dispatchEvent(new CustomEvent("zepto-toast",{detail:"Penyimpanan penuh atau tidak tersedia. Progres belum tersimpan."})),!1}return window.dispatchEvent(new Event("zepto-progress")),!0}function Tr(i,e,t=mt()){return t.rewards[i]?(bn(t),!1):(t.rewards[i]=e,t.stars+=e,bn(t),window.dispatchEvent(new CustomEvent("zepto-toast",{detail:`+${e} Bintang ZEPTO ⭐`})),!0)}function ci(i,e,t){const n=mt();n[i].includes(e)||n[i].push(e),Tr(i+":"+e,t,n)}function ff(i){const e=i.filter(t=>t.choice===t.correct).length;return{score:Math.round(e/i.length*100),correct:e,wrong:i.length-e,total:i.length}}function $d(i=mt()){return!!i.pretest&&i.read.length>=1&&i.explored.length>=1}function _s(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Es;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(Es||(Es={}));class no extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const pf=i=>{var e,t;return i!=null&&i.androidBridge?"android":!((t=(e=i==null?void 0:i.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},mf=i=>{const e=i.CapacitorCustomPlatform||null,t=i.Capacitor||{},n=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:pf(i),a=()=>s()!=="web",r=u=>{const h=c.get(u);return!!(h!=null&&h.platforms.has(s())||o(u))},o=u=>{var h;return(h=t.PluginHeaders)===null||h===void 0?void 0:h.find(m=>m.name===u)},l=u=>i.console.error(u),c=new Map,d=(u,h={})=>{const m=c.get(u);if(m)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),m.proxy;const g=s(),_=o(u);let f;const p=async()=>(!f&&g in h?f=typeof h[g]=="function"?f=await h[g]():f=h[g]:e!==null&&!f&&"web"in h&&(f=typeof h.web=="function"?f=await h.web():f=h.web),f),y=(B,b)=>{var E,N;if(_){const z=_==null?void 0:_.methods.find(W=>b===W.name);if(z)return z.rtype==="promise"?W=>t.nativePromise(u,b.toString(),W):(W,I)=>t.nativeCallback(u,b.toString(),W,I);if(B)return(E=B[b])===null||E===void 0?void 0:E.bind(B)}else{if(B)return(N=B[b])===null||N===void 0?void 0:N.bind(B);throw new no(`"${u}" plugin is not implemented on ${g}`,Es.Unimplemented)}},x=B=>{let b;const E=(...N)=>{const z=p().then(W=>{const I=y(W,B);if(I){const F=I(...N);return b=F==null?void 0:F.remove,F}else throw new no(`"${u}.${B}()" is not implemented on ${g}`,Es.Unimplemented)});return B==="addListener"&&(z.remove=async()=>b()),z};return E.toString=()=>`${B.toString()}() { [capacitor code] }`,Object.defineProperty(E,"name",{value:B,writable:!1,configurable:!1}),E},M=x("addListener"),C=x("removeListener"),A=(B,b)=>{const E=M({eventName:B},b),N=async()=>{const W=await E;C({eventName:B,callbackId:W},b)},z=new Promise(W=>E.then(()=>W({remove:N})));return z.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await N()},z},R=new Proxy({},{get(B,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?A:M;case"removeListener":return C;default:return x(b)}}});return n[u]=R,c.set(u,{name:u,proxy:R,platforms:new Set([...Object.keys(h),..._?[g]:[]])}),R};return t.convertFileSrc||(t.convertFileSrc=u=>u),t.getPlatform=s,t.handleError=l,t.isNativePlatform=a,t.isPluginAvailable=r,t.registerPlugin=d,t.Exception=no,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},gf=i=>i.Capacitor=mf(i),Ts=gf(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Hr=Ts.registerPlugin;class wl{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a),n&&this.sendRetainedArgumentsForEvent(e);const r=async()=>this.removeListener(e,t);return Promise.resolve({remove:r})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const s=this.listeners[e];if(!s){if(n){let a=this.retainedEventArguments[e];a||(a=[]),a.push(t),this.retainedEventArguments[e]=a}return}s.forEach(a=>a(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new Ts.Exception(e,Es.Unimplemented)}unavailable(e="not available"){return new Ts.Exception(e,Es.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const s=n.indexOf(t);s!==-1&&this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const lc=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),cc=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class _f extends wl{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[s,a]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=cc(s).trim(),a=cc(a).trim(),t[s]=a}),t}async setCookie(e){try{const t=lc(e.key),n=lc(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",a=(e.path||"/").replace("path=",""),r=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${s}; path=${a}; ${r};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Hr("CapacitorCookies",{web:()=>new _f});const vf=async i=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const s=n.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},n.onerror=s=>t(s),n.readAsDataURL(i)}),xf=(i={})=>{const e=Object.keys(i);return Object.keys(i).map(s=>s.toLocaleLowerCase()).reduce((s,a,r)=>(s[a]=i[e[r]],s),{})},bf=(i,e=!0)=>i?Object.entries(i).reduce((n,s)=>{const[a,r]=s;let o,l;return Array.isArray(r)?(l="",r.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${a}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(r):r,l=`${a}=${o}`),`${n}&${l}`},"").substr(1):null,yf=(i,e={})=>{const t=Object.assign({method:i.method||"GET",headers:i.headers},e),s=xf(i.headers)["content-type"]||"";if(typeof i.data=="string")t.body=i.data;else if(s.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[r,o]of Object.entries(i.data||{}))a.set(r,o);t.body=a.toString()}else if(s.includes("multipart/form-data")||i.data instanceof FormData){const a=new FormData;if(i.data instanceof FormData)i.data.forEach((o,l)=>{a.append(l,o)});else for(const o of Object.keys(i.data))a.append(o,i.data[o]);t.body=a;const r=new Headers(t.headers);r.delete("content-type"),t.headers=r}else(s.includes("application/json")||typeof i.data=="object")&&(t.body=JSON.stringify(i.data));return t};class Mf extends wl{async request(e){const t=yf(e,e.webFetchExtra),n=bf(e.params,e.shouldEncodeUrlParams),s=n?`${e.url}?${n}`:e.url,a=await fetch(s,t),r=a.headers.get("content-type")||"";let{responseType:o="text"}=a.ok?e:{};r.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await a.blob(),l=await vf(c);break;case"json":l=await a.json();break;case"document":case"text":default:l=await a.text()}const d={};return a.headers.forEach((u,h)=>{d[h]=u}),{data:l,headers:d,status:a.status,url:a.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Hr("CapacitorHttp",{web:()=>new Mf});var uc;(function(i){i.Dark="DARK",i.Light="LIGHT",i.Default="DEFAULT"})(uc||(uc={}));var dc;(function(i){i.StatusBar="StatusBar",i.NavigationBar="NavigationBar"})(dc||(dc={}));class Sf extends wl{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Hr("SystemBars",{web:()=>new Sf});const Ef="modulepreload",Tf=function(i,e){return new URL(i,e).href},hc={},wf=function(e,t,n){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=Tf(a,n),a in hc)return;hc[a]=!0;const r=a.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(!!n)for(let d=s.length-1;d>=0;d--){const u=s[d];if(u.href===a&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Ef,r||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),r)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})};var fc;(function(i){i[i.Flush=0]="Flush",i[i.Add=1]="Add"})(fc||(fc={}));const wr=Hr("TextToSpeech",{web:()=>wf(()=>import("./web-4426f8d5.js"),[],import.meta.url).then(i=>new i.TextToSpeechWeb)}),Yd="progresAstronaut_v2",Af="kuisStats",Rf="planetFavorit",Cf=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];function pc(){return{stempelPlanet:{},misiSelesai:{},lencana:[],riwayatKuis:[],sudahMulai:!1,pengaturan:{musik:!0,efekSuara:!0,narasi:!0,grafis:"tinggi",kurangiAnimasi:!1}}}function hi(){try{const e=localStorage.getItem(Yd);if(e)return{...pc(),...JSON.parse(e)}}catch{}const i=pc();try{const e=JSON.parse(localStorage.getItem(Af)||"null");e&&e.percobaan&&i.riwayatKuis.push({tanggal:new Date().toISOString(),skor:e.skorTerbaik||0,total:e.totalSoalTerakhir||10});const t=JSON.parse(localStorage.getItem(Rf)||"null");Array.isArray(t)&&t.forEach(n=>{i.stempelPlanet[n]=!0})}catch{}return Pi(i),i}function Pi(i){try{localStorage.setItem(Yd,JSON.stringify(i))}catch{}}function Vr(){return hi()}function Lf(){const i=hi();i.sudahMulai=!0,Pi(i)}function Pf(i){const e=hi();return e.stempelPlanet[i]=!0,Pi(e),Al(e),e}function If(i){const e=hi(),t=!e.misiSelesai[i];return e.misiSelesai[i]=!0,Pi(e),Al(e),{progres:e,baruSelesai:t}}function Df(){return Object.keys(hi().misiSelesai).length}function Uf(i,e){const t=hi();return t.riwayatKuis.unshift({tanggal:new Date().toISOString(),skor:i,total:e}),t.riwayatKuis=t.riwayatKuis.slice(0,20),Pi(t),Al(t)}const Kd=[{id:"pemula",ikon:"🥉",nama:"Pemula Antariksa",syarat:i=>i.riwayatKuis.length>=1},{id:"rajin",ikon:"🥈",nama:"Penjelajah Rajin",syarat:i=>i.riwayatKuis.length>=3},{id:"gigih",ikon:"🥇",nama:"Astronom Gigih",syarat:i=>i.riwayatKuis.length>=5},{id:"sempurna",ikon:"🏆",nama:"Master Tata Surya",syarat:i=>i.riwayatKuis.some(e=>e.skor===e.total)},{id:"penjelajah8",ikon:"🪐",nama:"Penjelajah 8 Planet",syarat:i=>Object.keys(i.stempelPlanet).length>=8},{id:"misionaris",ikon:"🚀",nama:"Penuntas Misi",syarat:i=>Object.keys(i.misiSelesai).length>=4}];function Al(i){const e=new Set(i.lencana),t=Kd.filter(s=>s.syarat(i)),n=t.filter(s=>!e.has(s.id));return i.lencana=t.map(s=>s.id),Pi(i),{semua:t,baru:n}}function kf(){return Kd}function _a(i){const e=hi();return e.pengaturan={...e.pengaturan,...i},Pi(e),e.pengaturan}function pn(){return hi().pengaturan}function Nf(){return Cf}const ls=60/92,mc=[[48,52,55],[45,48,52],[53,57,60],[43,47,50]],gc=[[[0,64],[1,67],[2,69],[3,67]],[[0,64],[1.5,62],[2.5,60]],[[0,65],[1,69],[2,67],[3,65]],[[0,62],[1,64],[2,67]],[[0,67],[1,72],[2,71],[3,67]],[[0,69],[1.5,67],[2.5,64]],[[0,65],[1,64],[2,62],[3,65]],[[0,62],[1,67],[2,60]]];function io(i,e,t,n,s,a,r=!1){const o=i.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(a,n+.025),o.gain.exponentialRampToValueAtTime(1e-4,n+s),o.connect(e);const l=i.createOscillator();if(l.type="sine",l.frequency.value=440*2**((t-69)/12),l.connect(o),l.start(n),l.stop(n+s+.03),l.onended=()=>{l.disconnect(),o.disconnect()},!r){const c=i.createOscillator(),d=i.createGain();c.frequency.value=l.frequency.value*2,d.gain.value=.12,c.connect(d),d.connect(o),c.start(n),c.stop(n+s*.65),c.onended=()=>{c.disconnect(),d.disconnect()}}}function Of(i,e,t,n){const s=mc[t%mc.length];s.forEach((r,o)=>io(i,e,r+12,n+o*ls,ls*1.5,.045,!0)),io(i,e,s[0],n,ls*2.6,.065,!0);const a=gc[t%gc.length];for(const[r,o]of a)io(i,e,o,n+r*ls,ls*1.25,.13)}let St=null,vs=null,xs=null,Ar=!1,Rr=null,cs=0,Bf=0;const Zo=new Set;function yr(){const i=pn().volumeMusik;return Number.isFinite(i)?Math.min(100,Math.max(0,i)):35}function Rl(){if(!St){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;St=new i}return St.state==="suspended"&&!document.hidden&&St.resume().catch(()=>{}),St}function Gr(){if(!St||!vs)return;const i=va()?yr()/100*(Zo.size?.16:.7):0;vs.gain.setTargetAtTime(i,St.currentTime,.15)}function Cr(){if(!(!St||St.state!=="running"||document.hidden))for(cs<St.currentTime&&(cs=St.currentTime+.05);cs<St.currentTime+.15;)Of(St,vs,Bf++,cs),cs+=ls*4}function Wr(){const i=Rl();return i?(Ar||(Ar=!0,vs=i.createGain(),vs.gain.value=0,vs.connect(i.destination),xs=i.createGain(),xs.gain.value=Gf()?.4:0,xs.connect(i.destination),cs=i.currentTime+.08,Gr(),Cr(),Rr=setInterval(Cr,100)),!0):!1}function Ff(){Wr()}function Zd(i){_a({musik:i}),Wr(),Gr(),window.dispatchEvent(new Event("zepto-audio-change"))}function zf(){return Zd(!va()),va()}function Hf(i){_a({volumeMusik:Math.min(100,Math.max(0,Number(i)||0))}),Wr(),Gr()}function Ei(i,e){e?Zo.add(i):Zo.delete(i),Gr()}function Vf(i){_a({efekSuara:i}),xs&&(xs.gain.value=i?.4:0)}function va(){return pn().musik}function Gf(){return pn().efekSuara}document.addEventListener("visibilitychange",()=>{St&&(document.hidden?St.suspend().catch(()=>{}):Ar&&St.resume().then(Cr).catch(()=>{}))});window.addEventListener("pagehide",()=>{clearInterval(Rr),St==null||St.suspend().catch(()=>{})});window.addEventListener("pageshow",i=>{i.persisted&&Ar&&(clearInterval(Rr),Rr=setInterval(Cr,100),Rl())});function ri(i){if(!pn().efekSuara||!Wr())return;const e=Rl(),t=xs||e.destination,n=e.currentTime;if(i==="benar")[523.25,659.25].forEach((s,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=s,o.gain.value=0,r.connect(o),o.connect(t);const l=n+a*.12;o.gain.linearRampToValueAtTime(.25,l+.02),o.gain.exponentialRampToValueAtTime(.001,l+.35),r.start(l),r.stop(l+.4)});else if(i==="salah"){const s=e.createOscillator(),a=e.createGain();s.type="sine",s.frequency.setValueAtTime(320,n),s.frequency.exponentialRampToValueAtTime(220,n+.3),a.gain.value=0,s.connect(a),a.connect(t),a.gain.linearRampToValueAtTime(.18,n+.03),a.gain.exponentialRampToValueAtTime(.001,n+.4),s.start(n),s.stop(n+.45)}else if(i==="stempel")[392,523.25,659.25].forEach((s,a)=>{const r=e.createOscillator(),o=e.createGain();r.type="triangle",r.frequency.value=s,o.gain.value=0,r.connect(o),o.connect(t);const l=n+a*.1;o.gain.linearRampToValueAtTime(.2,l+.02),o.gain.exponentialRampToValueAtTime(.001,l+.3),r.start(l),r.stop(l+.35)});else{const s=e.createOscillator(),a=e.createGain();s.type="sine",s.frequency.value=440,a.gain.value=0,s.connect(a),a.connect(t),a.gain.linearRampToValueAtTime(.12,n+.01),a.gain.exponentialRampToValueAtTime(.001,n+.12),s.start(n),s.stop(n+.15)}}let Jo=0;async function La(){var i;if(Jo++,Ei("lesson",!1),Ts.isNativePlatform())try{await wr.stop()}catch{}else(i=window.speechSynthesis)==null||i.cancel()}async function Pa(i){if(!pn().narasi)return;await La();const e=++Jo,t=()=>{e===Jo&&Ei("lesson",!1)};Ei("lesson",!0);try{if(Ts.isNativePlatform())await wr.speak({text:i,lang:"id-ID",rate:.85}),t();else if(window.speechSynthesis){const n=new SpeechSynthesisUtterance(i);n.lang="id-ID",n.rate=.85,n.onend=t,n.onerror=t,window.speechSynthesis.speak(n)}else throw Error("unsupported")}catch{t(),window.dispatchEvent(new CustomEvent("zepto-toast",{detail:"Suara belum tersedia di perangkat ini. Kamu tetap bisa membaca penjelasan."}))}}const Wf=""+new URL("1-56423a2a.jpg",import.meta.url).href,jf=""+new URL("2-7887ba5b.jpg",import.meta.url).href,Xf=""+new URL("3-d416039e.jpg",import.meta.url).href,qf=""+new URL("4-65e36d4d.jpg",import.meta.url).href,$f=""+new URL("earth_atmosphere-36b03b01.jpg",import.meta.url).href,Yf=""+new URL("earth_daymap-855c57d9.jpg",import.meta.url).href,Kf=""+new URL("earth_nightmap-17350462.jpg",import.meta.url).href,Zf=""+new URL("earth_normalmap-f4a036e9.jpg",import.meta.url).href,Jf=""+new URL("earth_specularmap-cf28522c.jpg",import.meta.url).href,Qf=""+new URL("jup1vuu2-78951049.jpg",import.meta.url).href,ep=""+new URL("jupiter-37c5ee13.jpg",import.meta.url).href,tp=""+new URL("jupiterCallisto-25ce669c.jpg",import.meta.url).href,np=""+new URL("jupiterEuropa-39fd3c21.jpg",import.meta.url).href,ip=""+new URL("jupiterGanymede-4f777e55.jpg",import.meta.url).href,sp=""+new URL("jupiterIo-a1ab9c10.jpg",import.meta.url).href,ap=""+new URL("marsbump-dbf776bf.jpg",import.meta.url).href,rp=""+new URL("marsmap-34ffa876.jpg",import.meta.url).href,op=""+new URL("mercury-d024b83d.jpg",import.meta.url).href,lp=""+new URL("mercurybump-1b3eb45b.jpg",import.meta.url).href,cp=""+new URL("mercurymap-7dcb6a51.jpg",import.meta.url).href,up=""+new URL("moon-8dbbdd92.jpg",import.meta.url).href,dp=""+new URL("moonbump-fd4a8511.jpg",import.meta.url).href,hp=""+new URL("moonmap-b0a2f57c.jpg",import.meta.url).href,fp=""+new URL("neptune-8e23832f.jpg",import.meta.url).href,pp=""+new URL("plutobump2k-0ca5abea.jpg",import.meta.url).href,mp=""+new URL("plutomap-84c9aba4.jpg",import.meta.url).href,gp=""+new URL("saturnmap-d0fe54db.jpg",import.meta.url).href,_p=""+new URL("sun-0a3182c6.jpg",import.meta.url).href,vp=""+new URL("uranus-b3c407c7.jpg",import.meta.url).href,xp=""+new URL("venus_atmosphere-2cba2e0e.jpg",import.meta.url).href,bp=""+new URL("venusbump-ef1d9576.jpg",import.meta.url).href,yp=""+new URL("venusmap-11f97521.jpg",import.meta.url).href;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="160",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mp=0,_c=1,Sp=2,Jd=1,Ep=2,Fn=3,Xn=0,Qt=1,Gt=2,yn=0,bs=1,xa=2,vc=3,xc=4,Tp=5,Mi=100,wp=101,Ap=102,bc=103,yc=104,Rp=200,Cp=201,Lp=202,Pp=203,Qo=204,el=205,Ip=206,Dp=207,Up=208,kp=209,Np=210,Op=211,Bp=212,Fp=213,zp=214,Hp=0,Vp=1,Gp=2,Lr=3,Wp=4,jp=5,Xp=6,qp=7,Ll=0,$p=1,Yp=2,oi=0,Kp=1,Zp=2,Jp=3,Qd=4,Qp=5,em=6,Mc="attached",tm="detached",eh=300,ws=301,As=302,tl=303,nl=304,jr=306,Rs=1e3,un=1001,Pr=1002,It=1003,il=1004,Mr=1005,Zt=1006,th=1007,Ri=1008,li=1009,nm=1010,im=1011,Pl=1012,nh=1013,ii=1014,Hn=1015,qt=1016,ih=1017,sh=1018,Ti=1020,sm=1021,dn=1023,am=1024,rm=1025,wi=1026,Cs=1027,om=1028,ah=1029,lm=1030,rh=1031,oh=1033,so=33776,ao=33777,ro=33778,oo=33779,Sc=35840,Ec=35841,Tc=35842,wc=35843,lh=36196,Ac=37492,Rc=37496,Cc=37808,Lc=37809,Pc=37810,Ic=37811,Dc=37812,Uc=37813,kc=37814,Nc=37815,Oc=37816,Bc=37817,Fc=37818,zc=37819,Hc=37820,Vc=37821,lo=36492,Gc=36494,Wc=36495,cm=36283,jc=36284,Xc=36285,qc=36286,ba=2300,Ls=2301,co=2302,$c=2400,Yc=2401,Kc=2402,um=2500,dm=0,ch=1,sl=2,uh=3e3,Ai=3001,hm=3200,dh=3201,Il=0,fm=1,hn="",ht="srgb",Ot="srgb-linear",Dl="display-p3",Xr="display-p3-linear",Ir="linear",dt="srgb",Dr="rec709",Ur="p3",Hi=7680,Zc=519,pm=512,mm=513,gm=514,hh=515,_m=516,vm=517,xm=518,bm=519,al=35044,Jc="300 es",rl=1035,Vn=2e3,kr=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const da=Math.PI/180,Ps=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mm(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function Sm(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function Em(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Am(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rm(i,e){return i+Math.random()*(e-i)}function Cm(i){return i*(.5-Math.random())}function Lm(i){i!==void 0&&(Qc=i);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(i){return i*da}function Im(i){return i*Ps}function ol(i){return(i&i-1)===0&&i!==0}function Dm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Um(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),d=r((e+n)/2),u=a((e-n)/2),h=r((e-n)/2),m=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fh={DEG2RAD:da,RAD2DEG:Ps,generateUUID:Mn,clamp:Et,euclideanModulo:Ul,mapLinear:ym,inverseLerp:Mm,lerp:ha,damp:Sm,pingpong:Em,smoothstep:Tm,smootherstep:wm,randInt:Am,randFloat:Rm,randFloatSpread:Cm,seededRandom:Lm,degToRad:Pm,radToDeg:Im,isPowerOfTwo:ol,ceilPowerOfTwo:Dm,floorPowerOfTwo:Nr,setQuaternionFromProperEuler:Um,normalize:it,denormalize:An};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,a,r,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],m=n[5],g=n[8],_=s[0],f=s[3],p=s[6],y=s[1],x=s[4],M=s[7],C=s[2],A=s[5],R=s[8];return a[0]=r*_+o*y+l*C,a[3]=r*f+o*x+l*A,a[6]=r*p+o*M+l*R,a[1]=c*_+d*y+u*C,a[4]=c*f+d*x+u*A,a[7]=c*p+d*M+u*R,a[2]=h*_+m*y+g*C,a[5]=h*f+m*x+g*A,a[8]=h*p+m*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*a*d+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*r-o*c,h=o*l-d*a,m=c*a-r*l,g=t*u+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-d*n)*_,e[2]=(o*n-s*r)*_,e[3]=h*_,e[4]=(d*t-s*l)*_,e[5]=(s*a-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Xe;function ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function km(){const i=ya("canvas");return i.style.display="block",i}const eu={};function fa(i){i in eu||(eu[i]=!0,console.warn(i))}const tu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Ot]:{transfer:Ir,primaries:Dr,toReference:i=>i,fromReference:i=>i},[ht]:{transfer:dt,primaries:Dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xr]:{transfer:Ir,primaries:Ur,toReference:i=>i.applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu)},[Dl]:{transfer:dt,primaries:Ur,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nu),fromReference:i=>i.applyMatrix3(tu).convertLinearToSRGB()}},Nm=new Set([Ot,Xr]),Qe={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Oa[e].toReference,s=Oa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Oa[i].primaries},getTransfer:function(i){return i===hn?Ir:Oa[i].transfer}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=ya("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ys(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(fo(s[r].image)):a.push(fo(s[r]))}else a=fo(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class kt extends Ii{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=un,s=un,a=Zt,r=Ri,o=dn,l=li,c=kt.DEFAULT_ANISOTROPY,d=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Mn(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ai?ht:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Ai:uh}set encoding(e){fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?ht:hn}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=eh;kt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(m+1)/2,C=(p+1)/2,A=(d+h)/4,R=(u+_)/4,B=(g+f)/4;return x>M&&x>C?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=A/n,a=R/n):M>C?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=A/s,a=B/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=R/a,s=B/a),this.set(n,s,a,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(h-d)/y,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fm extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?ht:hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dt extends Fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _h extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zm extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=a[r+0],m=a[r+1],g=a[r+2],_=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==h||c!==m||d!==g){let f=1-o;const p=l*h+c*m+d*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,p*y);f=Math.sin(f*A)/C,o=Math.sin(o*A)/C}const M=o*y;if(l=l*f+h*M,c=c*f+m*M,d=d*f+g*M,u=u*f+_*M,f===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=a[r],h=a[r+1],m=a[r+2],g=a[r+3];return e[t]=o*g+d*u+l*m-c*h,e[t+1]=l*g+d*h+c*u-o*m,e[t+2]=c*g+d*m+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(a/2),h=l(n/2),m=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*d*u+c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u-h*m*g;break;case"YXZ":this._x=h*d*u+c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u+h*m*g;break;case"ZXY":this._x=h*d*u-c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u-h*m*g;break;case"ZYX":this._x=h*d*u-c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u+h*m*g;break;case"YZX":this._x=h*d*u+c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u-h*m*g;break;case"XZY":this._x=h*d*u-c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(d-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+s*c-a*l,this._y=s*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-s*o,this._w=r*d-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=r*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=a*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),d=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*d,this.y=n+l*d+o*c-a*u,this.z=s+l*u+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new P,iu=new Rn;class qn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,_n):_n.fromBufferAttribute(a,r),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Fa.subVectors(this.max,Ks),Gi.subVectors(e.a,Ks),Wi.subVectors(e.b,Ks),ji.subVectors(e.c,Ks),Yn.subVectors(Wi,Gi),Kn.subVectors(ji,Wi),gi.subVectors(Gi,ji);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!mo(t,Gi,Wi,ji,Fa)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Gi,Wi,ji,Fa))?!1:(za.crossVectors(Yn,Kn),t=[za.x,za.y,za.z],mo(t,Gi,Wi,ji,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Ba=new qn,Gi=new P,Wi=new P,ji=new P,Yn=new P,Kn=new P,gi=new P,Ks=new P,Fa=new P,za=new P,_i=new P;function mo(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){_i.fromArray(i,a);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),d=n.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Hm=new qn,Zs=new P,go=new P;class Cn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(go)),this.expandByPoint(Zs.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,_o=new P,Ha=new P,Zn=new P,vo=new P,Va=new P,xo=new P;class Os{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_o.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(_o);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ha),o=Zn.dot(this.direction),l=-Zn.dot(Ha),c=Zn.lengthSq(),d=Math.abs(1-r*r);let u,h,m,g;if(d>0)if(u=r*l-o,h=r*o-l,g=a*d,u>=0)if(h>=-g)if(h<=g){const _=1/d;u*=_,h*=_,m=u*(u+r*h+2*o)+h*(r*u+h+2*l)+c}else h=a,u=Math.max(0,-(r*h+o)),m=-u*u+h*(h+2*l)+c;else h=-a,u=Math.max(0,-(r*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-r*a+o)),h=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(u=Math.max(0,-(r*a+o)),h=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+h*(h+2*l)+c);else h=r>0?-a:a,u=Math.max(0,-(r*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(Ha,h),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,a){vo.subVectors(t,e),Va.subVectors(n,e),xo.crossVectors(vo,Va);let r=this.direction.dot(xo),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(Zn,Va));if(l<0)return null;const c=o*this.direction.dot(vo.cross(Zn));if(c<0||l+c>r)return null;const d=-o*Zn.dot(xo);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,s,a,r,o,l,c,d,u,h,m,g,_,f){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,d,u,h,m,g,_,f)}set(e,t,n,s,a,r,o,l,c,d,u,h,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),a=1/Xi.setFromMatrixColumn(e,1).length(),r=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=r*d,m=r*u,g=o*d,_=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*d,m=l*u,g=c*d,_=c*u;t[0]=h+_*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*d,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=r*l}else if(e.order==="ZXY"){const h=l*d,m=l*u,g=c*d,_=c*u;t[0]=h-_*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*d,t[9]=_-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const h=r*d,m=r*u,g=o*d,_=o*u;t[0]=l*d,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*d,t[4]=_-h*u,t[8]=g*u+m,t[1]=u,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=r*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Gm)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),Ga.crossVectors(tn,Jn),s[0]=Jn.x,s[4]=Ga.x,s[8]=tn.x,s[1]=Jn.y,s[5]=Ga.y,s[9]=tn.y,s[2]=Jn.z,s[6]=Ga.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],M=n[11],C=n[15],A=s[0],R=s[4],B=s[8],b=s[12],E=s[1],N=s[5],z=s[9],W=s[13],I=s[2],F=s[6],j=s[10],Z=s[14],$=s[3],q=s[7],se=s[11],oe=s[15];return a[0]=r*A+o*E+l*I+c*$,a[4]=r*R+o*N+l*F+c*q,a[8]=r*B+o*z+l*j+c*se,a[12]=r*b+o*W+l*Z+c*oe,a[1]=d*A+u*E+h*I+m*$,a[5]=d*R+u*N+h*F+m*q,a[9]=d*B+u*z+h*j+m*se,a[13]=d*b+u*W+h*Z+m*oe,a[2]=g*A+_*E+f*I+p*$,a[6]=g*R+_*N+f*F+p*q,a[10]=g*B+_*z+f*j+p*se,a[14]=g*b+_*W+f*Z+p*oe,a[3]=y*A+x*E+M*I+C*$,a[7]=y*R+x*N+M*F+C*q,a[11]=y*B+x*z+M*j+C*se,a[15]=y*b+x*W+M*Z+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+a*l*u-s*c*u-a*o*h+n*c*h+s*o*m-n*l*m)+_*(+t*l*m-t*c*h+a*r*h-s*r*m+s*c*d-a*l*d)+f*(+t*c*u-t*o*m-a*r*u+n*r*m+a*o*d-n*c*d)+p*(-s*o*d-t*l*u+t*o*h+s*r*u-n*r*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],y=u*f*c-_*h*c+_*l*m-o*f*m-u*l*p+o*h*p,x=g*h*c-d*f*c-g*l*m+r*f*m+d*l*p-r*h*p,M=d*_*c-g*u*c+g*o*m-r*_*m-d*o*p+r*u*p,C=g*u*l-d*_*l-g*o*h+r*_*h+d*o*f-r*u*f,A=t*y+n*x+s*M+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*h*a-u*f*a-_*s*m+n*f*m+u*s*p-n*h*p)*R,e[2]=(o*f*a-_*l*a+_*s*c-n*f*c-o*s*p+n*l*p)*R,e[3]=(u*l*a-o*h*a-u*s*c+n*h*c+o*s*m-n*l*m)*R,e[4]=x*R,e[5]=(d*f*a-g*h*a+g*s*m-t*f*m-d*s*p+t*h*p)*R,e[6]=(g*l*a-r*f*a-g*s*c+t*f*c+r*s*p-t*l*p)*R,e[7]=(r*h*a-d*l*a+d*s*c-t*h*c-r*s*m+t*l*m)*R,e[8]=M*R,e[9]=(g*u*a-d*_*a-g*n*m+t*_*m+d*n*p-t*u*p)*R,e[10]=(r*_*a-g*o*a+g*n*c-t*_*c-r*n*p+t*o*p)*R,e[11]=(d*o*a-r*u*a-d*n*c+t*u*c+r*n*m-t*o*m)*R,e[12]=C*R,e[13]=(d*_*s-g*u*s+g*n*h-t*_*h-d*n*f+t*u*f)*R,e[14]=(g*o*s-r*_*s-g*n*l+t*_*l+r*n*f-t*o*f)*R,e[15]=(r*u*s-d*o*s+d*n*l-t*u*l-r*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*r,0,c*l-s*o,d*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,u=o+o,h=a*c,m=a*d,g=a*u,_=r*d,f=r*u,p=o*u,y=l*c,x=l*d,M=l*u,C=n.x,A=n.y,R=n.z;return s[0]=(1-(_+p))*C,s[1]=(m+M)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(h+p))*A,s[6]=(f+y)*A,s[7]=0,s[8]=(g+x)*R,s[9]=(f-y)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Xi.set(s[0],s[1],s[2]).length();const r=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/a,d=1/r,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Vn){const l=this.elements,c=2*a/(t-e),d=2*a/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let m,g;if(o===Vn)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===kr)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Vn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(r-a),h=(t+e)*c,m=(n+s)*d;let g,_;if(o===Vn)g=(r+a)*u,_=-2*u;else if(o===kr)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new P,vn=new Ve,Vm=new P(0,0,0),Gm=new P(1,1,1),Jn=new P,Ga=new P,tn=new P,su=new Ve,au=new Rn;class qr{constructor(e=0,t=0,n=0,s=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const ru=new P,qi=new Rn,kn=new Ve,Wa=new P,Js=new P,jm=new P,Xm=new Rn,ou=new P(1,0,0),lu=new P(0,1,0),cu=new P(0,0,1),qm={type:"added"},$m={type:"removed"};class et extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new P,t=new qr,n=new Rn,s=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Js,Wa,this.up):kn.lookAt(Wa,Js,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(kn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++){const o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),u=r(e.shapes),h=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}et.DEFAULT_UP=new P(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,Nn=new P,bo=new P,On=new P,$i=new P,Yi=new P,uu=new P,yo=new P,Mo=new P,So=new P;let ja=!1;class cn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){xn.subVectors(s,t),Nn.subVectors(n,t),bo.subVectors(e,t);const r=xn.dot(xn),o=xn.dot(Nn),l=xn.dot(bo),c=Nn.dot(Nn),d=Nn.dot(bo),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const h=1/u,m=(c*l-o*d)*h,g=(r*d-o*l)*h;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,s,a,r,o,l){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),this.getInterpolation(e,t,n,s,a,r,o,l)}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,On.x),l.addScaledVector(r,On.y),l.addScaledVector(o,On.z),l)}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Nn.subVectors(e,t),xn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),xn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}getInterpolation(e,t,n,s,a){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;$i.subVectors(s,n),Yi.subVectors(a,n),yo.subVectors(e,n);const l=$i.dot(yo),c=Yi.dot(yo);if(l<=0&&c<=0)return t.copy(n);Mo.subVectors(e,s);const d=$i.dot(Mo),u=Yi.dot(Mo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector($i,r);So.subVectors(e,a);const m=$i.dot(So),g=Yi.dot(So);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yi,o);const f=d*g-m*u;if(f<=0&&u-d>=0&&m-g>=0)return uu.subVectors(a,s),o=(u-d)/(u-d+(m-g)),t.copy(s).addScaledVector(uu,o);const p=1/(f+_+h);return r=_*p,o=h*p,t.copy(n).addScaledVector($i,r).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Ul(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Eo(r,a,e+1/3),this.g=Eo(r,a,e),this.b=Eo(r,a,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Et(Ht.r*255,0,255))*65536+Math.round(Et(Ht.g*255,0,255))*256+Math.round(Et(Ht.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,a=Ht.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=d<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ht){Qe.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Xa);const n=ha(Qn.h,Xa.h,t),s=ha(Qn.s,Xa.s,t),a=ha(Qn.l,Xa.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new Ae;Ae.NAMES=vh;let Ym=0;class sn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=bs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jt extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,qa=new fe;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class xh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Km=0;const on=new Ve,To=new et,Ki=new P,nn=new qn,Qs=new qn,Pt=new P;class _t extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?bh:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(nn.min,Qs.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Qs.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Qs.min),nn.expandByPoint(Qs.max))}nn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Pt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pt.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(e,c),Pt.add(Ki)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,a=t.normal.array,r=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<o;E++)c[E]=new P,d[E]=new P;const u=new P,h=new P,m=new P,g=new fe,_=new fe,f=new fe,p=new P,y=new P;function x(E,N,z){u.fromArray(s,E*3),h.fromArray(s,N*3),m.fromArray(s,z*3),g.fromArray(r,E*2),_.fromArray(r,N*2),f.fromArray(r,z*2),h.sub(u),m.sub(u),_.sub(g),f.sub(g);const W=1/(_.x*f.y-f.x*_.y);isFinite(W)&&(p.copy(h).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(W),y.copy(m).multiplyScalar(_.x).addScaledVector(h,-f.x).multiplyScalar(W),c[E].add(p),c[N].add(p),c[z].add(p),d[E].add(y),d[N].add(y),d[z].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,N=M.length;E<N;++E){const z=M[E],W=z.start,I=z.count;for(let F=W,j=W+I;F<j;F+=3)x(n[F+0],n[F+1],n[F+2])}const C=new P,A=new P,R=new P,B=new P;function b(E){R.fromArray(a,E*3),B.copy(R);const N=c[E];C.copy(N),C.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(B,N);const W=A.dot(d[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=W}for(let E=0,N=M.length;E<N;++E){const z=M[E],W=z.start,I=z.count;for(let F=W,j=W+I;F<j;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,d=new P,u=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,f),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let p=0;p<d;p++)h[g++]=c[m++]}return new Wt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],u=a[c];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new Ve,vi=new Os,$a=new Cn,hu=new P,Zi=new P,Ji=new P,Qi=new P,wo=new P,Ya=new P,Ka=new fe,Za=new fe,Ja=new fe,fu=new P,pu=new P,mu=new P,Qa=new P,er=new P;class st extends et{constructor(e=new _t,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Ya.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],u=a[l];d!==0&&(wo.fromBufferAttribute(u,e),r?Ya.addScaledVector(wo,d):Ya.addScaledVector(wo.sub(t),d))}t.add(Ya)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(a),vi.copy(e.ray).recast(e.near),!($a.containsPoint(vi.origin)===!1&&(vi.intersectSphere($a,hu)===null||vi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(du.copy(a).invert(),vi.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=r[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,C=x;M<C;M+=3){const A=o.getX(M),R=o.getX(M+1),B=o.getX(M+2);s=tr(this,p,e,n,c,d,u,A,R,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const y=o.getX(f),x=o.getX(f+1),M=o.getX(f+2);s=tr(this,r,e,n,c,d,u,y,x,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const f=h[g],p=r[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,C=x;M<C;M+=3){const A=M,R=M+1,B=M+2;s=tr(this,p,e,n,c,d,u,A,R,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const y=f,x=f+1,M=f+2;s=tr(this,r,e,n,c,d,u,y,x,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Zm(i,e,t,n,s,a,r,o){let l;if(e.side===Qt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===Xn,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:i}}function tr(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Zi),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Qi);const d=Zm(i,e,t,n,Zi,Ji,Qi,Qa);if(d){s&&(Ka.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,c),d.uv=cn.getInterpolation(Qa,Zi,Ji,Qi,Ka,Za,Ja,new fe)),a&&(Ka.fromBufferAttribute(a,o),Za.fromBufferAttribute(a,l),Ja.fromBufferAttribute(a,c),d.uv1=cn.getInterpolation(Qa,Zi,Ji,Qi,Ka,Za,Ja,new fe),d.uv2=d.uv1),r&&(fu.fromBufferAttribute(r,o),pu.fromBufferAttribute(r,l),mu.fromBufferAttribute(r,c),d.normal=cn.getInterpolation(Qa,Zi,Ji,Qi,fu,pu,mu,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};cn.getNormal(Zi,Ji,Qi,u.normal),d.face=u}return d}class Ia extends _t{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(u,2));function g(_,f,p,y,x,M,C,A,R,B,b){const E=M/R,N=C/B,z=M/2,W=C/2,I=A/2,F=R+1,j=B+1;let Z=0,$=0;const q=new P;for(let se=0;se<j;se++){const oe=se*N-W;for(let ve=0;ve<F;ve++){const X=ve*E-z;q[_]=X*y,q[f]=oe*x,q[p]=I,c.push(q.x,q.y,q.z),q[_]=0,q[f]=0,q[p]=A>0?1:-1,d.push(q.x,q.y,q.z),u.push(ve/R),u.push(1-se/B),Z+=1}}for(let se=0;se<B;se++)for(let oe=0;oe<R;oe++){const ve=h+oe+F*se,X=h+oe+F*(se+1),te=h+(oe+1)+F*(se+1),ge=h+(oe+1)+F*se;l.push(ve,X,ge),l.push(X,te,ge),$+=6}o.addGroup(m,$,b),m+=$,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Is(i[t]);for(const s in n)e[s]=n[s]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}const Ma={clone:Is,merge:Xt};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mh extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Mh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(da*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class tg extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(es,ts,e,t);s.layers=this.layers,this.add(s);const a=new Vt(es,ts,e,t);a.layers=this.layers,this.add(a);const r=new Vt(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new Vt(es,ts,e,t);o.layers=this.layers,this.add(o);const l=new Vt(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Vt(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends kt{constructor(e,t,n,s,a,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,s,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?ht:hn),this.texture=new Nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ia(5,5,5),a=new Tt({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:yn});a.uniforms.tEquirect.value=t;const r=new st(s,a),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Zt),new tg(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Ao=new P,ig=new P,sg=new Xe;class ti{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ao.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sg.getNormalMatrix(e),s=this.coplanarPoint(Ao).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Cn,nr=new P;class Ol{constructor(e=new ti,t=new ti,n=new ti,s=new ti,a=new ti,r=new ti){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],m=s[8],g=s[9],_=s[10],f=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-a,h-c,f-m,M-p).normalize(),n[1].setComponents(l+a,h+c,f+m,M+p).normalize(),n[2].setComponents(l+r,h+d,f+g,M+y).normalize(),n[3].setComponents(l-r,h-d,f-g,M-y).normalize(),n[4].setComponents(l-o,h-u,f-_,M-x).normalize(),t===Vn)n[5].setComponents(l+o,h+u,f+_,M+x).normalize();else if(t===kr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(nr.x=s.normal.x>0?e.max.x:e.min.x,nr.y=s.normal.y>0?e.max.y:e.min.y,nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ag(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,d){const u=c.array,h=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,u,h),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,u){const h=d.array,m=d._updateRange,g=d.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,h),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];t?i.bufferSubData(u,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(u,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,c,d),u.version=c.version}}return{get:r,remove:o,update:l}}class Bl extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,m=[],g=[],_=[],f=[];for(let p=0;p<d;p++){const y=p*h-r;for(let x=0;x<c;x++){const M=x*u-a;g.push(M,-y,0),_.push(0,0,1),f.push(x/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,M=y+c*(p+1),C=y+1+c*(p+1),A=y+1+c*p;m.push(x,M,A),m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:rg,alphahash_pars_fragment:og,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:hg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:bg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Eg,color_fragment:Tg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Dg,emissivemap_fragment:Ug,emissivemap_pars_fragment:kg,colorspace_fragment:Ng,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:Fg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:jg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_fragment:$g,lightmap_pars_fragment:Yg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:a_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:h_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphcolor_vertex:x_,morphnormal_vertex:b_,morphtarget_pars_vertex:y_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:E_,normal_pars_fragment:T_,normal_pars_vertex:w_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:I_,opaque_fragment:D_,packing:U_,premultiplied_alpha_fragment:k_,project_vertex:N_,dithering_fragment:O_,dithering_pars_fragment:B_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:j_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:$_,specularmap_fragment:Y_,specularmap_pars_fragment:K_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:sv,background_vert:av,background_frag:rv,backgroundCube_vert:ov,backgroundCube_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:dv,depth_frag:hv,distanceRGBA_vert:fv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:_v,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:bv,meshlambert_vert:yv,meshlambert_frag:Mv,meshmatcap_vert:Sv,meshmatcap_frag:Ev,meshnormal_vert:Tv,meshnormal_frag:wv,meshphong_vert:Av,meshphong_frag:Rv,meshphysical_vert:Cv,meshphysical_frag:Lv,meshtoon_vert:Pv,meshtoon_frag:Iv,points_vert:Dv,points_frag:Uv,shadow_vert:kv,shadow_frag:Nv,sprite_vert:Ov,sprite_frag:Bv},pe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wn={basic:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Xt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Xt([pe.lights,pe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};wn.physical={uniforms:Xt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ir={r:0,b:0,g:0};function Fv(i,e,t,n,s,a,r){const o=new Ae(0);let l=a===!0?0:1,c,d,u=null,h=0,m=null;function g(f,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===jr)?(d===void 0&&(d=new st(new Ia(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Is(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(x.colorSpace)!==dt,(u!==x||h!==x.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=x,h=x.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new st(new Bl(2,2),new Tt({name:"BackgroundMaterial",uniforms:Is(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(ir,yh(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function zv(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||a!==null,o={},l=f(null);let c=l,d=!1;function u(I,F,j,Z,$){let q=!1;if(r){const se=_(Z,j,F);c!==se&&(c=se,m(c.object)),q=p(I,Z,j,$),q&&y(I,Z,j,$)}else{const se=F.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==se)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=se,q=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,B(I,F,j,Z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):a.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function _(I,F,j){const Z=j.wireframe===!0;let $=o[I.id];$===void 0&&($={},o[I.id]=$);let q=$[F.id];q===void 0&&(q={},$[F.id]=q);let se=q[Z];return se===void 0&&(se=f(h()),q[Z]=se),se}function f(I){const F=[],j=[],Z=[];for(let $=0;$<s;$++)F[$]=0,j[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:Z,object:I,attributes:{},index:null}}function p(I,F,j,Z){const $=c.attributes,q=F.attributes;let se=0;const oe=j.getAttributes();for(const ve in oe)if(oe[ve].location>=0){const te=$[ve];let ge=q[ve];if(ge===void 0&&(ve==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),ve==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),te===void 0||te.attribute!==ge||ge&&te.data!==ge.data)return!0;se++}return c.attributesNum!==se||c.index!==Z}function y(I,F,j,Z){const $={},q=F.attributes;let se=0;const oe=j.getAttributes();for(const ve in oe)if(oe[ve].location>=0){let te=q[ve];te===void 0&&(ve==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),ve==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const ge={};ge.attribute=te,te&&te.data&&(ge.data=te.data),$[ve]=ge,se++}c.attributes=$,c.attributesNum=se,c.index=Z}function x(){const I=c.newAttributes;for(let F=0,j=I.length;F<j;F++)I[F]=0}function M(I){C(I,0)}function C(I,F){const j=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;j[I]=1,Z[I]===0&&(i.enableVertexAttribArray(I),Z[I]=1),$[I]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),$[I]=F)}function A(){const I=c.newAttributes,F=c.enabledAttributes;for(let j=0,Z=F.length;j<Z;j++)F[j]!==I[j]&&(i.disableVertexAttribArray(j),F[j]=0)}function R(I,F,j,Z,$,q,se){se===!0?i.vertexAttribIPointer(I,F,j,$,q):i.vertexAttribPointer(I,F,j,Z,$,q)}function B(I,F,j,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=Z.attributes,q=j.getAttributes(),se=F.defaultAttributeValues;for(const oe in q){const ve=q[oe];if(ve.location>=0){let X=$[oe];if(X===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const te=X.normalized,ge=X.itemSize,Re=t.get(X);if(Re===void 0)continue;const Ee=Re.buffer,Ne=Re.type,Be=Re.bytesPerElement,Pe=n.isWebGL2===!0&&(Ne===i.INT||Ne===i.UNSIGNED_INT||X.gpuType===nh);if(X.isInterleavedBufferAttribute){const qe=X.data,H=qe.stride,xt=X.offset;if(qe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ve.locationSize;Ce++)C(ve.location+Ce,qe.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ce=0;Ce<ve.locationSize;Ce++)M(ve.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Ce=0;Ce<ve.locationSize;Ce++)R(ve.location+Ce,ge/ve.locationSize,Ne,te,H*Be,(xt+ge/ve.locationSize*Ce)*Be,Pe)}else{if(X.isInstancedBufferAttribute){for(let qe=0;qe<ve.locationSize;qe++)C(ve.location+qe,X.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let qe=0;qe<ve.locationSize;qe++)M(ve.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let qe=0;qe<ve.locationSize;qe++)R(ve.location+qe,ge/ve.locationSize,Ne,te,ge*Be,ge/ve.locationSize*qe*Be,Pe)}}else if(se!==void 0){const te=se[oe];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(ve.location,te);break;case 3:i.vertexAttrib3fv(ve.location,te);break;case 4:i.vertexAttrib4fv(ve.location,te);break;default:i.vertexAttrib1fv(ve.location,te)}}}}A()}function b(){z();for(const I in o){const F=o[I];for(const j in F){const Z=F[j];for(const $ in Z)g(Z[$].object),delete Z[$];delete F[j]}delete o[I]}}function E(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const j in F){const Z=F[j];for(const $ in Z)g(Z[$].object),delete Z[$];delete F[j]}delete o[I.id]}function N(I){for(const F in o){const j=o[F];if(j[I.id]===void 0)continue;const Z=j[I.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete j[I.id]}}function z(){W(),d=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Hv(i,e,t,n){const s=n.isWebGL2;let a;function r(d){a=d}function o(d,u){i.drawArrays(a,d,u),t.update(u,a,1)}function l(d,u,h){if(h===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,d,u,h),t.update(u,a,h)}function c(d,u,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(d[g],u[g]);else{m.multiDrawArraysWEBGL(a,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];t.update(g,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Vv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=r||e.has("OES_texture_float"),C=x&&M,A=r?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:A}}function Gv(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new ti,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||s;return s=h,n=u.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!f)a?d(null):c();else{const y=a?0:n,x=y*4;let M=p.clippingState||null;l.value=M,M=d(g,h,x,m);for(let C=0;C!==x;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)r.copy(u[x]).applyMatrix4(y,o),r.normal.toArray(f,M),f[M+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Wv(i){let e=new WeakMap;function t(r,o){return o===tl?r.mapping=ws:o===nl&&(r.mapping=As),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===tl||o===nl)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ng(l.height/2);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class $r extends Mh{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,gu=[.125,.215,.35,.446,.526,.582],Si=20,Ro=new $r,_u=new Ae;let Co=null,Lo=0,Po=0;const yi=(1+Math.sqrt(5))/2,ns=1/yi,vu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yi,ns),new P(0,yi,-ns),new P(ns,0,yi),new P(-ns,0,yi),new P(yi,ns,0),new P(-yi,ns,0)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Co=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Lo,Po),e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:qt,format:dn,colorSpace:Ot,depthBuffer:!1},s=bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(a)),this._blurMaterial=Xv(a,e,t)}return s}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,s){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(_u),d.toneMapping=oi,d.autoClear=!1;const m=new Jt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new st(new Ia,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(_u),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;sr(s,y*x,p>2?x:0,x,x),d.setRenderTarget(s),_&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ws||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new st(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=vu[(s-1)%vu.length];this._blur(e,s-1,s,a,r)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new st(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=a/g,f=isFinite(a)?1+Math.floor(d*_):Si;f>Si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const p=[];let y=0;for(let R=0;R<Si;++R){const B=R/_,b=Math.exp(-B*B/2);p.push(b),R===0?y+=b:R<f&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[s],C=3*M*(s>x-fs?s-x+fs:0),A=4*(this._cubeSize-M);sr(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(u,Ro)}}function jv(i){const e=[],t=[],n=[];let s=i;const a=i-fs+1+gu.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-fs?l=gu[r-i+fs-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,B=A>2?0:-1,b=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];y.set(b,_*g*A),x.set(h,f*g*A);const E=[A,A,A,A,A,A];M.set(E,p*g*A)}const C=new _t;C.setAttribute("position",new Wt(y,_)),C.setAttribute("uv",new Wt(x,f)),C.setAttribute("faceIndex",new Wt(M,p)),e.push(C),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bu(i,e,t){const n=new Dt(i,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xv(i,e,t){const n=new Float32Array(Si),s=new P(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function yu(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mu(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===tl||l===nl,d=l===ws||l===As;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new xu(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new xu(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function $v(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yv(i,e,t,n){const s={},a=new WeakMap;function r(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}h.removeEventListener("dispose",r),delete s[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(u){const h=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,M=y.length;x<M;x+=3){const C=y[x+0],A=y[x+1],R=y[x+2];h.push(C,A,A,R,R,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const C=x+0,A=x+1,R=x+2;h.push(C,A,A,R,R,C)}}else return;const f=new(ph(h)?bh:xh)(h,1);f.version=_;const p=a.get(u);p&&e.remove(p),a.set(u,f)}function d(u){const h=a.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Kv(i,e,t,n){const s=n.isWebGL2;let a;function r(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,g){i.drawElements(a,g,o,m*l),t.update(g,a,1)}function u(m,g,_){if(_===0)return;let f,p;if(s)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,g,o,m*l,_),t.update(g,a,_)}function h(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(a,g,0,o,m,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,a,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function Zv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jv(i,e){return i[0]-e[0]}function Qv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function e0(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,r=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=a.get(d);if(_===void 0||_.count!==g){let I=function(){z.dispose(),a.delete(d),d.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let B=0;y===!0&&(B=1),x===!0&&(B=2),M===!0&&(B=3);let b=d.attributes.position.count*B,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const N=new Float32Array(b*E*4*g),z=new _h(N,b,E,g);z.type=Hn,z.needsUpdate=!0;const W=B*4;for(let F=0;F<g;F++){const j=C[F],Z=A[F],$=R[F],q=b*E*4*F;for(let se=0;se<j.count;se++){const oe=se*W;y===!0&&(r.fromBufferAttribute(j,se),N[q+oe+0]=r.x,N[q+oe+1]=r.y,N[q+oe+2]=r.z,N[q+oe+3]=0),x===!0&&(r.fromBufferAttribute(Z,se),N[q+oe+4]=r.x,N[q+oe+5]=r.y,N[q+oe+6]=r.z,N[q+oe+7]=0),M===!0&&(r.fromBufferAttribute($,se),N[q+oe+8]=r.x,N[q+oe+9]=r.y,N[q+oe+10]=r.z,N[q+oe+11]=$.itemSize===4?r.w:1)}}_={count:g,texture:z,size:new fe(b,E)},a.set(d,_),d.addEventListener("dispose",I)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const p=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",h),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=h===void 0?0:h.length;let g=n[d.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[d.id]=g}for(let x=0;x<m;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(Qv);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Jv);const _=d.morphAttributes.position,f=d.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],C=M[0],A=M[1];C!==Number.MAX_SAFE_INTEGER&&A?(_&&d.getAttribute("morphTarget"+x)!==_[C]&&d.setAttribute("morphTarget"+x,_[C]),f&&d.getAttribute("morphNormal"+x)!==f[C]&&d.setAttribute("morphNormal"+x,f[C]),s[x]=A,p+=A):(_&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),f&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),s[x]=0)}const y=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function t0(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Eh extends kt{constructor(e,t,n,s,a,r,o,l,c,d){if(d=d!==void 0?d:wi,d!==wi&&d!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===wi&&(n=ii),n===void 0&&d===Cs&&(n=Ti),super(null,s,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Th=new kt,wh=new Eh(1,1);wh.compareFunction=hh;const Ah=new _h,Rh=new zm,Ch=new Nl,Su=[],Eu=[],Tu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Su[s];if(a===void 0&&(a=new Float32Array(s),Su[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),At(t,n)}}function o0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),At(t,n)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),At(t,n)}}function c0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function _0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?wh:Th;t.setTexture2D(e||a,s)}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rh,s)}function x0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ch,s)}function b0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ah,s)}function y0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return a0;case 35674:return r0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return h0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return b0}}function M0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function E0(i,e){const t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function T0(i,e){const t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function w0(i,e){const t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A0(i,e){const t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R0(i,e){const t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C0(i,e){i.uniform1iv(this.addr,e)}function L0(i,e){i.uniform2iv(this.addr,e)}function P0(i,e){i.uniform3iv(this.addr,e)}function I0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function U0(i,e){i.uniform2uiv(this.addr,e)}function k0(i,e){i.uniform3uiv(this.addr,e)}function N0(i,e){i.uniform4uiv(this.addr,e)}function O0(i,e,t){const n=this.cache,s=e.length,a=Yr(t,s);wt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Th,a[r])}function B0(i,e,t){const n=this.cache,s=e.length,a=Yr(t,s);wt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Rh,a[r])}function F0(i,e,t){const n=this.cache,s=e.length,a=Yr(t,s);wt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ch,a[r])}function z0(i,e,t){const n=this.cache,s=e.length,a=Yr(t,s);wt(n,a)||(i.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Ah,a[r])}function H0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return E0;case 35666:return T0;case 35674:return w0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return L0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return k0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return z0}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Ru(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){const n=i.name,s=n.length;for(Io.lastIndex=0;;){const a=Io.exec(n),r=Io.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Ru(t,c===void 0?new V0(o,i,e):new G0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new W0(o),Ru(t,u)),t=u}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);j0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Cu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X0=37297;let q0=0;function $0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Y0(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let n;switch(e===t?n="":e===Ur&&t===Dr?n="LinearDisplayP3ToLinearSRGB":e===Dr&&t===Ur&&(n="LinearSRGBToLinearDisplayP3"),i){case Ot:case Xr:return[n,"LinearTransferOETF"];case ht:case Dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+$0(i.getShaderSource(e),r)}else return s}function K0(i,e){const t=Y0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z0(i,e){let t;switch(e){case Kp:t="Linear";break;case Zp:t="Reinhard";break;case Jp:t="OptimizedCineon";break;case Qd:t="ACESFilmic";break;case em:t="AgX";break;case Qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function ex(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ps(i){return i!==""}function Pu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(nx,sx)}const ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sx(i,e){let t=Ge[e];if(t===void 0){const n=ix.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(ax,rx)}function rx(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Uu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case As:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case $p:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hx(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=lx(t),d=cx(t),u=ux(t),h=dx(t),m=t.isWebGL2?"":J0(t),g=Q0(t),_=ex(a),f=s.createProgram();let p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),p.length>0&&(p+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ps).join(`
`),y.length>0&&(y+=`
`)):(p=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),y=[m,Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==oi?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,K0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),r=ll(r),r=Pu(r,t),r=Iu(r,t),o=ll(o),o=Pu(o,t),o=Iu(o,t),r=Du(r),o=Du(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=x+p+r,C=x+y+o,A=Cu(s,s.VERTEX_SHADER,M),R=Cu(s,s.FRAGMENT_SHADER,C);s.attachShader(f,A),s.attachShader(f,R),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function B(z){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(f).trim(),I=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(R).trim();let j=!0,Z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,A,R);else{const $=Lu(s,A,"vertex"),q=Lu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+$+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(I===""||F==="")&&(Z=!1);Z&&(z.diagnostics={runnable:j,programLog:W,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(A),s.deleteShader(R),b=new Sr(s,f),E=tx(s,f)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(f,X0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=R,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mx(e),t.set(e,n)),n}}class mx{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function gx(i,e,t,n,s,a,r){const o=new kl,l=new px,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function f(b,E,N,z,W){const I=z.fog,F=W.geometry,j=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),$=Z&&Z.mapping===jr?Z.image.height:null,q=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=se!==void 0?se.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let X,te,ge,Re;if(q){const Rt=wn[q];X=Rt.vertexShader,te=Rt.fragmentShader}else X=b.vertexShader,te=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);const Ee=i.getRenderTarget(),Ne=W.isInstancedMesh===!0,Be=W.isBatchedMesh===!0,Pe=!!b.map,qe=!!b.matcap,H=!!Z,xt=!!b.aoMap,Ce=!!b.lightMap,ke=!!b.bumpMap,ye=!!b.normalMap,Ye=!!b.displacementMap,ze=!!b.emissiveMap,T=!!b.metalnessMap,S=!!b.roughnessMap,G=b.anisotropy>0,ae=b.clearcoat>0,ne=b.iridescence>0,ee=b.sheen>0,_e=b.transmission>0,re=G&&!!b.anisotropyMap,me=ae&&!!b.clearcoatMap,Me=ae&&!!b.clearcoatNormalMap,Ie=ae&&!!b.clearcoatRoughnessMap,J=ne&&!!b.iridescenceMap,He=ne&&!!b.iridescenceThicknessMap,L=ee&&!!b.sheenColorMap,Y=ee&&!!b.sheenRoughnessMap,ue=!!b.specularMap,ie=!!b.specularColorMap,Te=!!b.specularIntensityMap,Oe=_e&&!!b.transmissionMap,We=_e&&!!b.thicknessMap,xe=!!b.gradientMap,he=!!b.alphaMap,k=b.alphaTest>0,ce=!!b.alphaHash,de=!!b.extensions,De=!!F.attributes.uv1,we=!!F.attributes.uv2,Ke=!!F.attributes.uv3;let Ze=oi;return b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:d,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:te,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Be,instancing:Ne,instancingColor:Ne&&W.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ot,map:Pe,matcap:qe,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:$,aoMap:xt,lightMap:Ce,bumpMap:ke,normalMap:ye,displacementMap:h&&Ye,emissiveMap:ze,normalMapObjectSpace:ye&&b.normalMapType===fm,normalMapTangentSpace:ye&&b.normalMapType===Il,metalnessMap:T,roughnessMap:S,anisotropy:G,anisotropyMap:re,clearcoat:ae,clearcoatMap:me,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ie,iridescence:ne,iridescenceMap:J,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:L,sheenRoughnessMap:Y,specularMap:ue,specularColorMap:ie,specularIntensityMap:Te,transmission:_e,transmissionMap:Oe,thicknessMap:We,gradientMap:xe,opaque:b.transparent===!1&&b.blending===bs,alphaMap:he,alphaTest:k,alphaHash:ce,combine:b.combine,mapUv:Pe&&_(b.map.channel),aoMapUv:xt&&_(b.aoMap.channel),lightMapUv:Ce&&_(b.lightMap.channel),bumpMapUv:ke&&_(b.bumpMap.channel),normalMapUv:ye&&_(b.normalMap.channel),displacementMapUv:Ye&&_(b.displacementMap.channel),emissiveMapUv:ze&&_(b.emissiveMap.channel),metalnessMapUv:T&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:re&&_(b.anisotropyMap.channel),clearcoatMapUv:me&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&_(b.sheenRoughnessMap.channel),specularMapUv:ue&&_(b.specularMap.channel),specularColorMapUv:ie&&_(b.specularColorMap.channel),specularIntensityMapUv:Te&&_(b.specularIntensityMap.channel),transmissionMapUv:Oe&&_(b.transmissionMap.channel),thicknessMapUv:We&&_(b.thicknessMap.channel),alphaMapUv:he&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||G),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:we,vertexUv3s:Ke,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(Pe||he),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(y(E,b),x(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function M(b){const E=g[b.type];let N;if(E){const z=wn[E];N=Ma.clone(z.uniforms)}else N=b.uniforms;return N}function C(b,E){let N;for(let z=0,W=c.length;z<W;z++){const I=c[z];if(I.cacheKey===E){N=I,++N.usedTimes;break}}return N===void 0&&(N=new hx(i,E,b,a),c.push(N)),N}function A(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function B(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:B}}function _x(){let i=new WeakMap;function e(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function t(a){i.delete(a)}function n(a,r,o){i.get(a)[r]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,h,m,g,_,f){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),e++,p}function o(u,h,m,g,_,f){const p=r(u,h,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(u,h,m,g,_,f){const p=r(u,h,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||vx),n.length>1&&n.sort(h||ku),s.length>1&&s.sort(h||ku)}function d(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:d,sort:c}}function xx(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Nu,i.set(n,[r])):s>=a.length?(r=new Nu,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ex(i,e){const t=new bx,n=yx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new P);const a=new P,r=new Ve,o=new Ve;function l(d,u){let h=0,m=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let _=0,f=0,p=0,y=0,x=0,M=0,C=0,A=0,R=0,B=0,b=0;d.sort(Sx);const E=u===!0?Math.PI:1;for(let z=0,W=d.length;z<W;z++){const I=d[z],F=I.color,j=I.intensity,Z=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*j*E,m+=F.g*j*E,g+=F.b*j*E;else if(I.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(I.sh.coefficients[q],j);b++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const se=I.shadow,oe=n.get(I);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,s.directionalShadow[_]=oe,s.directionalShadowMap[_]=$,s.directionalShadowMatrix[_]=I.shadow.matrix,M++}s.directional[_]=q,_++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(j*E),q.distance=Z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,s.spot[p]=q;const se=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,se.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[p]=se.matrix,I.castShadow){const oe=n.get(I);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,s.spotShadow[p]=oe,s.spotShadowMap[p]=$,A++}p++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(F).multiplyScalar(j),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=q,y++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*E),q.distance=I.distance,q.decay=I.decay,I.castShadow){const se=I.shadow,oe=n.get(I);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,oe.shadowCameraNear=se.camera.near,oe.shadowCameraFar=se.camera.far,s.pointShadow[f]=oe,s.pointShadowMap[f]=$,s.pointShadowMatrix[f]=I.shadow.matrix,C++}s.point[f]=q,f++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(j*E),q.groundColor.copy(I.groundColor).multiplyScalar(j*E),s.hemi[x]=q,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==_||N.pointLength!==f||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==C||N.numSpotShadows!==A||N.numSpotMaps!==R||N.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-B,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=b,N.directionalLength=_,N.pointLength=f,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=C,N.numSpotShadows=A,N.numSpotMaps=R,N.numLightProbes=b,s.version=Mx++)}function c(d,u){let h=0,m=0,g=0,_=0,f=0;const p=u.matrixWorldInverse;for(let y=0,x=d.length;y<x;y++){const M=d[y];if(M.isDirectionalLight){const C=s.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),h++}else if(M.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const C=s.hemi[f];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:s}}function Ou(i,e){const t=new Ex(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function r(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Tx(i,e){let t=new WeakMap;function n(a,r=0){const o=t.get(a);let l;return o===void 0?(l=new Ou(i,e),t.set(a,[l])):r>=o.length?(l=new Ou(i,e),o.push(l)):l=o[r],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lh extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wx extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cx(i,e,t){let n=new Ol;const s=new fe,a=new fe,r=new rt,o=new Lh({depthPacking:dh}),l=new wx,c={},d=t.maxTextureSize,u={[Xn]:Qt,[Qt]:Xn,[Gt]:Gt},h=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let p=this.type;this.render=function(A,R,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=p!==Fn&&this.type===Fn,I=p===Fn&&this.type!==Fn;for(let F=0,j=A.length;F<j;F++){const Z=A[F],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const q=$.getFrameExtents();if(s.multiply(q),a.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/q.x),s.x=a.x*q.x,$.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/q.y),s.y=a.y*q.y,$.mapSize.y=a.y)),$.map===null||W===!0||I===!0){const oe=this.type!==Fn?{minFilter:It,magFilter:It}:{};$.map!==null&&$.map.dispose(),$.map=new Dt(s.x,s.y,oe),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const se=$.getViewportCount();for(let oe=0;oe<se;oe++){const ve=$.getViewport(oe);r.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),z.viewport(r),$.updateMatrices(Z,oe),n=$.getFrustum(),M(R,B,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Fn&&y($,B),$.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(b,E,N)};function y(A,R){const B=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dt(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,B,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,B,m,_,null)}function x(A,R,B,b){let E=null;const N=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=B.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=E.uuid,W=R.uuid;let I=c[z];I===void 0&&(I={},c[z]=I);let F=I[W];F===void 0&&(F=E.clone(),I[W]=F,R.addEventListener("dispose",C)),E=F}if(E.visible=R.visible,E.wireframe=R.wireframe,b===Fn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=i.properties.get(E);z.light=B}return E}function M(A,R,B,b,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const W=e.update(A),I=A.material;if(Array.isArray(I)){const F=W.groups;for(let j=0,Z=F.length;j<Z;j++){const $=F[j],q=I[$.materialIndex];if(q&&q.visible){const se=x(A,q,b,E);A.onBeforeShadow(i,A,R,B,W,se,$),i.renderBufferDirect(B,null,W,se,A,$),A.onAfterShadow(i,A,R,B,W,se,$)}}}else if(I.visible){const F=x(A,I,b,E);A.onBeforeShadow(i,A,R,B,W,F,null),i.renderBufferDirect(B,null,W,F,A,null),A.onAfterShadow(i,A,R,B,W,F,null)}}const z=A.children;for(let W=0,I=z.length;W<I;W++)M(z[W],R,B,b,E)}function C(A){A.target.removeEventListener("dispose",C);for(const B in c){const b=c[B],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function Lx(i,e,t){const n=t.isWebGL2;function s(){let k=!1;const ce=new rt;let de=null;const De=new rt(0,0,0,0);return{setMask:function(we){de!==we&&!k&&(i.colorMask(we,we,we,we),de=we)},setLocked:function(we){k=we},setClear:function(we,Ke,Ze,vt,Rt){Rt===!0&&(we*=vt,Ke*=vt,Ze*=vt),ce.set(we,Ke,Ze,vt),De.equals(ce)===!1&&(i.clearColor(we,Ke,Ze,vt),De.copy(ce))},reset:function(){k=!1,de=null,De.set(-1,0,0,0)}}}function a(){let k=!1,ce=null,de=null,De=null;return{setTest:function(we){we?Be(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(we){ce!==we&&!k&&(i.depthMask(we),ce=we)},setFunc:function(we){if(de!==we){switch(we){case Hp:i.depthFunc(i.NEVER);break;case Vp:i.depthFunc(i.ALWAYS);break;case Gp:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Wp:i.depthFunc(i.EQUAL);break;case jp:i.depthFunc(i.GEQUAL);break;case Xp:i.depthFunc(i.GREATER);break;case qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=we}},setLocked:function(we){k=we},setClear:function(we){De!==we&&(i.clearDepth(we),De=we)},reset:function(){k=!1,ce=null,de=null,De=null}}}function r(){let k=!1,ce=null,de=null,De=null,we=null,Ke=null,Ze=null,vt=null,Rt=null;return{setTest:function(tt){k||(tt?Be(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!k&&(i.stencilMask(tt),ce=tt)},setFunc:function(tt,Ct,an){(de!==tt||De!==Ct||we!==an)&&(i.stencilFunc(tt,Ct,an),de=tt,De=Ct,we=an)},setOp:function(tt,Ct,an){(Ke!==tt||Ze!==Ct||vt!==an)&&(i.stencilOp(tt,Ct,an),Ke=tt,Ze=Ct,vt=an)},setLocked:function(tt){k=tt},setClear:function(tt){Rt!==tt&&(i.clearStencil(tt),Rt=tt)},reset:function(){k=!1,ce=null,de=null,De=null,we=null,Ke=null,Ze=null,vt=null,Rt=null}}}const o=new s,l=new a,c=new r,d=new WeakMap,u=new WeakMap;let h={},m={},g=new WeakMap,_=[],f=null,p=!1,y=null,x=null,M=null,C=null,A=null,R=null,B=null,b=new Ae(0,0,0),E=0,N=!1,z=null,W=null,I=null,F=null,j=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(se)[1]),$=q>=1):se.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),$=q>=2);let oe=null,ve={};const X=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ge=new rt().fromArray(X),Re=new rt().fromArray(te);function Ee(k,ce,de,De){const we=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(k,Ke),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<de;Ze++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ce+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ke}const Ne={};Ne[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(i.DEPTH_TEST),l.setFunc(Lr),ze(!1),T(_c),Be(i.CULL_FACE),ye(yn);function Be(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Pe(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function qe(k,ce){return m[k]!==ce?(i.bindFramebuffer(k,ce),m[k]=ce,n&&(k===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),k===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(k,ce){let de=_,De=!1;if(k)if(de=g.get(ce),de===void 0&&(de=[],g.set(ce,de)),k.isWebGLMultipleRenderTargets){const we=k.texture;if(de.length!==we.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,Ze=we.length;Ke<Ze;Ke++)de[Ke]=i.COLOR_ATTACHMENT0+Ke;de.length=we.length,De=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,De=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function xt(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const Ce={[Mi]:i.FUNC_ADD,[wp]:i.FUNC_SUBTRACT,[Ap]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[bc]=i.MIN,Ce[yc]=i.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Ce[bc]=k.MIN_EXT,Ce[yc]=k.MAX_EXT)}const ke={[Rp]:i.ZERO,[Cp]:i.ONE,[Lp]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[Up]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[kp]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Op]:i.CONSTANT_COLOR,[Bp]:i.ONE_MINUS_CONSTANT_COLOR,[Fp]:i.CONSTANT_ALPHA,[zp]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(k,ce,de,De,we,Ke,Ze,vt,Rt,tt){if(k===yn){p===!0&&(Pe(i.BLEND),p=!1);return}if(p===!1&&(Be(i.BLEND),p=!0),k!==Tp){if(k!==y||tt!==N){if((x!==Mi||A!==Mi)&&(i.blendEquation(i.FUNC_ADD),x=Mi,A=Mi),tt)switch(k){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,C=null,R=null,B=null,b.set(0,0,0),E=0,y=k,N=tt}return}we=we||ce,Ke=Ke||de,Ze=Ze||De,(ce!==x||we!==A)&&(i.blendEquationSeparate(Ce[ce],Ce[we]),x=ce,A=we),(de!==M||De!==C||Ke!==R||Ze!==B)&&(i.blendFuncSeparate(ke[de],ke[De],ke[Ke],ke[Ze]),M=de,C=De,R=Ke,B=Ze),(vt.equals(b)===!1||Rt!==E)&&(i.blendColor(vt.r,vt.g,vt.b,Rt),b.copy(vt),E=Rt),y=k,N=!1}function Ye(k,ce){k.side===Gt?Pe(i.CULL_FACE):Be(i.CULL_FACE);let de=k.side===Qt;ce&&(de=!de),ze(de),k.blending===bs&&k.transparent===!1?ye(yn):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const De=k.stencilWrite;c.setTest(De),De&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),G(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){z!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),z=k)}function T(k){k!==Mp?(Be(i.CULL_FACE),k!==W&&(k===_c?i.cullFace(i.BACK):k===Sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),W=k}function S(k){k!==I&&($&&i.lineWidth(k),I=k)}function G(k,ce,de){k?(Be(i.POLYGON_OFFSET_FILL),(F!==ce||j!==de)&&(i.polygonOffset(ce,de),F=ce,j=de)):Pe(i.POLYGON_OFFSET_FILL)}function ae(k){k?Be(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function ne(k){k===void 0&&(k=i.TEXTURE0+Z-1),oe!==k&&(i.activeTexture(k),oe=k)}function ee(k,ce,de){de===void 0&&(oe===null?de=i.TEXTURE0+Z-1:de=oe);let De=ve[de];De===void 0&&(De={type:void 0,texture:void 0},ve[de]=De),(De.type!==k||De.texture!==ce)&&(oe!==de&&(i.activeTexture(de),oe=de),i.bindTexture(k,ce||Ne[k]),De.type=k,De.texture=ce)}function _e(){const k=ve[oe];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){ge.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ge.copy(k))}function Oe(k){Re.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Re.copy(k))}function We(k,ce){let de=u.get(ce);de===void 0&&(de=new WeakMap,u.set(ce,de));let De=de.get(k);De===void 0&&(De=i.getUniformBlockIndex(ce,k.name),de.set(k,De))}function xe(k,ce){const De=u.get(ce).get(k);d.get(ce)!==De&&(i.uniformBlockBinding(ce,De,k.__bindingPointIndex),d.set(ce,De))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,ve={},m={},g=new WeakMap,_=[],f=null,p=!1,y=null,x=null,M=null,C=null,A=null,R=null,B=null,b=new Ae(0,0,0),E=0,N=!1,z=null,W=null,I=null,F=null,j=null,ge.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Be,disable:Pe,bindFramebuffer:qe,drawBuffers:H,useProgram:xt,setBlending:ye,setMaterial:Ye,setFlipSided:ze,setCullFace:T,setLineWidth:S,setPolygonOffset:G,setScissorTest:ae,activeTexture:ne,bindTexture:ee,unbindTexture:_e,compressedTexImage2D:re,compressedTexImage3D:me,texImage2D:ue,texImage3D:ie,updateUBOMapping:We,uniformBlockBinding:xe,texStorage2D:L,texStorage3D:Y,texSubImage2D:Me,texSubImage3D:Ie,compressedTexSubImage2D:J,compressedTexSubImage3D:He,scissor:Te,viewport:Oe,reset:he}}function Px(i,e,t,n,s,a,r){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return m?new OffscreenCanvas(T,S):ya("canvas")}function _(T,S,G,ae){let ne=1;if((T.width>ae||T.height>ae)&&(ne=ae/Math.max(T.width,T.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=S?Nr:Math.floor,_e=ee(ne*T.width),re=ee(ne*T.height);u===void 0&&(u=g(_e,re));const me=G?g(_e,re):u;return me.width=_e,me.height=re,me.getContext("2d").drawImage(T,0,0,_e,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+re+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function f(T){return ol(T.width)&&ol(T.height)}function p(T){return o?!1:T.wrapS!==un||T.wrapT!==un||T.minFilter!==It&&T.minFilter!==Zt}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==It&&T.minFilter!==Zt}function x(T){i.generateMipmap(T)}function M(T,S,G,ae,ne=!1){if(o===!1)return S;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=S;if(S===i.RED&&(G===i.FLOAT&&(ee=i.R32F),G===i.HALF_FLOAT&&(ee=i.R16F),G===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.R8UI),G===i.UNSIGNED_SHORT&&(ee=i.R16UI),G===i.UNSIGNED_INT&&(ee=i.R32UI),G===i.BYTE&&(ee=i.R8I),G===i.SHORT&&(ee=i.R16I),G===i.INT&&(ee=i.R32I)),S===i.RG&&(G===i.FLOAT&&(ee=i.RG32F),G===i.HALF_FLOAT&&(ee=i.RG16F),G===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RGBA){const _e=ne?Ir:Qe.getTransfer(ae);G===i.FLOAT&&(ee=i.RGBA32F),G===i.HALF_FLOAT&&(ee=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ee=_e===dt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(T,S,G){return y(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){return T===It||T===il||T===Mr?i.NEAREST:i.LINEAR}function R(T){const S=T.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&d.delete(S)}function B(T){const S=T.target;S.removeEventListener("dispose",B),N(S)}function b(T){const S=n.get(T);if(S.__webglInit===void 0)return;const G=T.source,ae=h.get(G);if(ae){const ne=ae[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(T),Object.keys(ae).length===0&&h.delete(G)}n.remove(T)}function E(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const G=T.source,ae=h.get(G);delete ae[S.__cacheKey],r.memory.textures--}function N(T){const S=T.texture,G=n.get(T),ae=n.get(S);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let ee=0;ee<G.__webglFramebuffer[ne].length;ee++)i.deleteFramebuffer(G.__webglFramebuffer[ne][ee]);else i.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)i.deleteFramebuffer(G.__webglFramebuffer[ne]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,ee=S.length;ne<ee;ne++){const _e=n.get(S[ne]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),r.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(T)}let z=0;function W(){z=0}function I(){const T=z;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function F(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const G=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,T,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function Z(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ge(G,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function $(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ge(G,T,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function q(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Re(G,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const se={[Rs]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},oe={[It]:i.NEAREST,[il]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[th]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ve={[pm]:i.NEVER,[bm]:i.ALWAYS,[mm]:i.LESS,[hh]:i.LEQUAL,[gm]:i.EQUAL,[xm]:i.GEQUAL,[_m]:i.GREATER,[vm]:i.NOTEQUAL};function X(T,S,G){if(G?(i.texParameteri(T,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[S.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==un||S.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(S.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==It&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===It||S.minFilter!==Mr&&S.minFilter!==Ri||S.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===qt&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(T,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function te(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const ae=S.source;let ne=h.get(ae);ne===void 0&&(ne={},h.set(ae,ne));const ee=F(S);if(ee!==T.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),ne[ee].usedTimes++;const _e=ne[T.__cacheKey];_e!==void 0&&(ne[T.__cacheKey].usedTimes--,_e.usedTimes===0&&E(S)),T.__cacheKey=ee,T.__webglTexture=ne[ee].texture}return G}function ge(T,S,G){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);const ne=te(T,S),ee=S.source;t.bindTexture(ae,T.__webglTexture,i.TEXTURE0+G);const _e=n.get(ee);if(ee.version!==_e.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);const re=Qe.getPrimaries(Qe.workingColorSpace),me=S.colorSpace===hn?null:Qe.getPrimaries(S.colorSpace),Me=S.colorSpace===hn||re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=p(S)&&f(S.image)===!1;let J=_(S.image,Ie,!1,s.maxTextureSize);J=ze(S,J);const He=f(J)||o,L=a.convert(S.format,S.colorSpace);let Y=a.convert(S.type),ue=M(S.internalFormat,L,Y,S.colorSpace,S.isVideoTexture);X(ae,S,He);let ie;const Te=S.mipmaps,Oe=o&&S.isVideoTexture!==!0&&ue!==lh,We=_e.__version===void 0||ne===!0,xe=C(S,J,He);if(S.isDepthTexture)ue=i.DEPTH_COMPONENT,o?S.type===Hn?ue=i.DEPTH_COMPONENT32F:S.type===ii?ue=i.DEPTH_COMPONENT24:S.type===Ti?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:S.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===wi&&ue===i.DEPTH_COMPONENT&&S.type!==Pl&&S.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ii,Y=a.convert(S.type)),S.format===Cs&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,S.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ti,Y=a.convert(S.type))),We&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ue,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ue,J.width,J.height,0,L,Y,null));else if(S.isDataTexture)if(Te.length>0&&He){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,xe,ue,Te[0].width,Te[0].height);for(let he=0,k=Te.length;he<k;he++)ie=Te[he],Oe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,ie.width,ie.height,L,Y,ie.data):t.texImage2D(i.TEXTURE_2D,he,ue,ie.width,ie.height,0,L,Y,ie.data);S.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,xe,ue,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,L,Y,J.data)):t.texImage2D(i.TEXTURE_2D,0,ue,J.width,J.height,0,L,Y,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ue,Te[0].width,Te[0].height,J.depth);for(let he=0,k=Te.length;he<k;he++)ie=Te[he],S.format!==dn?L!==null?Oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ie.width,ie.height,J.depth,L,ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ue,ie.width,ie.height,J.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ie.width,ie.height,J.depth,L,Y,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ue,ie.width,ie.height,J.depth,0,L,Y,ie.data)}else{Oe&&We&&t.texStorage2D(i.TEXTURE_2D,xe,ue,Te[0].width,Te[0].height);for(let he=0,k=Te.length;he<k;he++)ie=Te[he],S.format!==dn?L!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ie.width,ie.height,L,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,ie.width,ie.height,L,Y,ie.data):t.texImage2D(i.TEXTURE_2D,he,ue,ie.width,ie.height,0,L,Y,ie.data)}else if(S.isDataArrayTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ue,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,L,Y,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,L,Y,J.data);else if(S.isData3DTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_3D,xe,ue,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,L,Y,J.data)):t.texImage3D(i.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,L,Y,J.data);else if(S.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(i.TEXTURE_2D,xe,ue,J.width,J.height);else{let he=J.width,k=J.height;for(let ce=0;ce<xe;ce++)t.texImage2D(i.TEXTURE_2D,ce,ue,he,k,0,L,Y,null),he>>=1,k>>=1}}else if(Te.length>0&&He){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,xe,ue,Te[0].width,Te[0].height);for(let he=0,k=Te.length;he<k;he++)ie=Te[he],Oe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,L,Y,ie):t.texImage2D(i.TEXTURE_2D,he,ue,L,Y,ie);S.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,xe,ue,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,L,Y,J)):t.texImage2D(i.TEXTURE_2D,0,ue,L,Y,J);y(S,He)&&x(ae),_e.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Re(T,S,G){if(S.image.length!==6)return;const ae=te(T,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const ee=n.get(ne);if(ne.version!==ee.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const _e=Qe.getPrimaries(Qe.workingColorSpace),re=S.colorSpace===hn?null:Qe.getPrimaries(S.colorSpace),me=S.colorSpace===hn||_e===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,J=[];for(let he=0;he<6;he++)!Me&&!Ie?J[he]=_(S.image[he],!1,!0,s.maxCubemapSize):J[he]=Ie?S.image[he].image:S.image[he],J[he]=ze(S,J[he]);const He=J[0],L=f(He)||o,Y=a.convert(S.format,S.colorSpace),ue=a.convert(S.type),ie=M(S.internalFormat,Y,ue,S.colorSpace),Te=o&&S.isVideoTexture!==!0,Oe=ee.__version===void 0||ae===!0;let We=C(S,He,L);X(i.TEXTURE_CUBE_MAP,S,L);let xe;if(Me){Te&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ie,He.width,He.height);for(let he=0;he<6;he++){xe=J[he].mipmaps;for(let k=0;k<xe.length;k++){const ce=xe[k];S.format!==dn?Y!==null?Te?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,0,0,ce.width,ce.height,Y,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,ie,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,0,0,ce.width,ce.height,Y,ue,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,ie,ce.width,ce.height,0,Y,ue,ce.data)}}}else{xe=S.mipmaps,Te&&Oe&&(xe.length>0&&We++,t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ie,J[0].width,J[0].height));for(let he=0;he<6;he++)if(Ie){Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,J[he].width,J[he].height,Y,ue,J[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ie,J[he].width,J[he].height,0,Y,ue,J[he].data);for(let k=0;k<xe.length;k++){const de=xe[k].image[he].image;Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,0,0,de.width,de.height,Y,ue,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,ie,de.width,de.height,0,Y,ue,de.data)}}else{Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Y,ue,J[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ie,Y,ue,J[he]);for(let k=0;k<xe.length;k++){const ce=xe[k];Te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,0,0,Y,ue,ce.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,ie,Y,ue,ce.image[he])}}}y(S,L)&&x(i.TEXTURE_CUBE_MAP),ee.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ee(T,S,G,ae,ne,ee){const _e=a.convert(G.format,G.colorSpace),re=a.convert(G.type),me=M(G.internalFormat,_e,re,G.colorSpace);if(!n.get(S).__hasExternalTextures){const Ie=Math.max(1,S.width>>ee),J=Math.max(1,S.height>>ee);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,me,Ie,J,S.depth,0,_e,re,null):t.texImage2D(ne,ee,me,Ie,J,0,_e,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ne,n.get(G).__webglTexture,0,ke(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ne,n.get(G).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ae=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||ye(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Hn?ae=i.DEPTH_COMPONENT32F:ne.type===ii&&(ae=i.DEPTH_COMPONENT24));const ee=ke(S);ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,ae,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ae,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ae=ke(S);G&&ye(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,S.width,S.height):ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ae=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ae.length;ne++){const ee=ae[ne],_e=a.convert(ee.format,ee.colorSpace),re=a.convert(ee.type),me=M(ee.internalFormat,_e,re,ee.colorSpace),Me=ke(S);G&&ye(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,me,S.width,S.height):ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ae=n.get(S.depthTexture).__webglTexture,ne=ke(S);if(S.depthTexture.format===wi)ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Cs)ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const S=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Be(S.__webglFramebuffer,T)}else if(G){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ne(S.__webglDepthbuffer[ae],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ne(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(T,S,G){const ae=n.get(T);S!==void 0&&Ee(ae.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Pe(T)}function H(T){const S=T.texture,G=n.get(T),ae=n.get(S);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,r.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,_e=f(T)||o;if(ne){G.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[re]=[];for(let me=0;me<S.mipmaps.length;me++)G.__webglFramebuffer[re][me]=i.createFramebuffer()}else G.__webglFramebuffer[re]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)G.__webglFramebuffer[re]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){const re=T.texture;for(let me=0,Me=re.length;me<Me;me++){const Ie=n.get(re[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ye(T)===!1){const re=ee?S:[S];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const Me=re[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Ie=a.convert(Me.format,Me.colorSpace),J=a.convert(Me.type),He=M(Me.internalFormat,Ie,J,Me.colorSpace,T.isXRRenderTarget===!0),L=ke(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,He,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,_e);for(let re=0;re<6;re++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Ee(G.__webglFramebuffer[re][me],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,me);else Ee(G.__webglFramebuffer[re],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);y(S,_e)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const re=T.texture;for(let me=0,Me=re.length;me<Me;me++){const Ie=re[me],J=n.get(Ie);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),X(i.TEXTURE_2D,Ie,_e),Ee(G.__webglFramebuffer,T,Ie,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),y(Ie,_e)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ae.__webglTexture),X(re,S,_e),o&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Ee(G.__webglFramebuffer[me],T,S,i.COLOR_ATTACHMENT0,re,me);else Ee(G.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,re,0);y(S,_e)&&x(re),t.unbindTexture()}T.depthBuffer&&Pe(T)}function xt(T){const S=f(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0,ne=G.length;ae<ne;ae++){const ee=G[ae];if(y(ee,S)){const _e=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(ee).__webglTexture;t.bindTexture(_e,re),x(_e),t.unbindTexture()}}}function Ce(T){if(o&&T.samples>0&&ye(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,ae=T.height;let ne=i.COLOR_BUFFER_BIT;const ee=[],_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),me=T.isWebGLMultipleRenderTargets===!0;if(me)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){ee.push(i.COLOR_ATTACHMENT0+Me),T.depthBuffer&&ee.push(_e);const Ie=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ie===!1&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),me){const J=n.get(S[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,G,ae,0,0,G,ae,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const Ie=n.get(S[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function ke(T){return Math.min(s.maxSamples,T.samples)}function ye(T){const S=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ye(T){const S=r.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function ze(T,S){const G=T.colorSpace,ae=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===rl||G!==Ot&&G!==hn&&(Qe.getTransfer(G)===dt?o===!1?e.has("EXT_sRGB")===!0&&ae===dn?(T.format=rl,T.minFilter=Zt,T.generateMipmaps=!1):S=mh.sRGBToLinear(S):(ae!==dn||ne!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=I,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ye}function Ix(i,e,t){const n=t.isWebGL2;function s(a,r=hn){let o;const l=Qe.getTransfer(r);if(a===li)return i.UNSIGNED_BYTE;if(a===ih)return i.UNSIGNED_SHORT_4_4_4_4;if(a===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(a===nm)return i.BYTE;if(a===im)return i.SHORT;if(a===Pl)return i.UNSIGNED_SHORT;if(a===nh)return i.INT;if(a===ii)return i.UNSIGNED_INT;if(a===Hn)return i.FLOAT;if(a===qt)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===sm)return i.ALPHA;if(a===dn)return i.RGBA;if(a===am)return i.LUMINANCE;if(a===rm)return i.LUMINANCE_ALPHA;if(a===wi)return i.DEPTH_COMPONENT;if(a===Cs)return i.DEPTH_STENCIL;if(a===rl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===om)return i.RED;if(a===ah)return i.RED_INTEGER;if(a===lm)return i.RG;if(a===rh)return i.RG_INTEGER;if(a===oh)return i.RGBA_INTEGER;if(a===so||a===ao||a===ro||a===oo)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===so)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===so)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sc||a===Ec||a===Tc||a===wc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===lh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ac||a===Rc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Ac)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Rc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cc||a===Lc||a===Pc||a===Ic||a===Dc||a===Uc||a===kc||a===Nc||a===Oc||a===Bc||a===Fc||a===zc||a===Hc||a===Vc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Cc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Lc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Pc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ic)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Dc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Uc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===kc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Oc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vc)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lo||a===Gc||a===Wc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===lo)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Wc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cm||a===jc||a===Xc||a===qc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===lo)return o.COMPRESSED_RED_RGTC1_EXT;if(a===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ti?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class Dx extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kx extends Ii{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,m=null,g=null;const _=t.getContextAttributes();let f=null,p=null;const y=[],x=[],M=new fe;let C=null;const A=new Vt;A.layers.enable(1),A.viewport=new rt;const R=new Vt;R.layers.enable(2),R.viewport=new rt;const B=[A,R],b=new Dx;b.layers.enable(1),b.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=y[X];return te===void 0&&(te=new Do,y[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=y[X];return te===void 0&&(te=new Do,y[X]=te),te.getGripSpace()},this.getHand=function(X){let te=y[X];return te===void 0&&(te=new Do,y[X]=te),te.getHandSpace()};function z(X){const te=x.indexOf(X.inputSource);if(te===-1)return;const ge=y[te];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||r),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",I);for(let X=0;X<y.length;X++){const te=x[X];te!==null&&(x[X]=null,y[X].disconnect(te))}E=null,N=null,e.setRenderTarget(f),m=null,h=null,u=null,s=null,p=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Dt(m.framebufferWidth,m.framebufferHeight,{format:dn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,ge=null,Re=null;_.depth&&(Re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?Cs:wi,ge=_.stencil?Ti:ii);const Ee={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(Ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Dt(h.textureWidth,h.textureHeight,{format:dn,type:li,depthTexture:new Eh(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(p);Ne.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let te=0;te<X.removed.length;te++){const ge=X.removed[te],Re=x.indexOf(ge);Re>=0&&(x[Re]=null,y[Re].disconnect(ge))}for(let te=0;te<X.added.length;te++){const ge=X.added[te];let Re=x.indexOf(ge);if(Re===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=x.length){x.push(ge),Re=Ne;break}else if(x[Ne]===null){x[Ne]=ge,Re=Ne;break}if(Re===-1)break}const Ee=y[Re];Ee&&Ee.connect(ge)}}const F=new P,j=new P;function Z(X,te,ge){F.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const Re=F.distanceTo(j),Ee=te.projectionMatrix.elements,Ne=ge.projectionMatrix.elements,Be=Ee[14]/(Ee[10]-1),Pe=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],H=(Ee[9]-1)/Ee[5],xt=(Ee[8]-1)/Ee[0],Ce=(Ne[8]+1)/Ne[0],ke=Be*xt,ye=Be*Ce,Ye=Re/(-xt+Ce),ze=Ye*-xt;te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ze),X.translateZ(Ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Be+Ye,S=Pe+Ye,G=ke-ze,ae=ye+(Re-ze),ne=qe*Pe/S*T,ee=H*Pe/S*T;X.projectionMatrix.makePerspective(G,ae,ne,ee,T,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function $(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;b.near=R.near=A.near=X.near,b.far=R.far=A.far=X.far,(E!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,N=b.far);const te=X.parent,ge=b.cameras;$(b,te);for(let Re=0;Re<ge.length;Re++)$(ge[Re],te);ge.length===2?Z(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),q(X,b,te)};function q(X,te,ge){ge===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ps*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let se=null;function oe(X,te){if(d=te.getViewerPose(c||r),g=te,d!==null){const ge=d.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Re=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,Re=!0);for(let Ee=0;Ee<ge.length;Ee++){const Ne=ge[Ee];let Be=null;if(m!==null)Be=m.getViewport(Ne);else{const qe=u.getViewSubImage(h,Ne);Be=qe.viewport,Ee===0&&(e.setRenderTargetTextures(p,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(p))}let Pe=B[Ee];Pe===void 0&&(Pe=new Vt,Pe.layers.enable(Ee),Pe.viewport=new rt,B[Ee]=Pe),Pe.matrix.fromArray(Ne.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ne.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ee===0&&(b.matrix.copy(Pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Re===!0&&b.cameras.push(Pe)}}for(let ge=0;ge<y.length;ge++){const Re=x[ge],Ee=y[ge];Re!==null&&Ee!==void 0&&Ee.update(Re,te,c||r)}se&&se(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ve=new Sh;ve.setAnimationLoop(oe),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}function Nx(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,yh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(f,p):p.isMeshToonMaterial?(a(f,p),u(f,p)):p.isMeshPhongMaterial?(a(f,p),d(f,p)):p.isMeshStandardMaterial?(a(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(a(f,p),g(f,p)):p.isMeshDepthMaterial?a(f,p):p.isMeshDistanceMaterial?(a(f,p),_(f,p)):p.isMeshNormalMaterial?a(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,y,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const y=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,e,t,n){let s={},a={},r=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(g(y),M=d(y),s[y.id]=M,y.addEventListener("dispose",f));const C=x.program;n.updateUBOMapping(y,C);const A=e.render.frame;a[y.id]!==A&&(h(y),a[y.id]=A)}function d(y){const x=u();y.__bindingPointIndex=x;const M=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=M.length;A<R;A++){const B=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,E=B.length;b<E;b++){const N=B[b];if(m(N,A,b,C)===!0){const z=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let F=0;F<W.length;F++){const j=W[F],Z=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,z+I,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,M,C){const A=y.value,R=x+"_"+M;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const B=C[R];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return C[R]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function g(y){const x=y.uniforms;let M=0;const C=16;for(let R=0,B=x.length;R<B;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,N=b.length;E<N;E++){const z=b[E],W=Array.isArray(z.value)?z.value:[z.value];for(let I=0,F=W.length;I<F;I++){const j=W[I],Z=_(j),$=M%C;$!==0&&C-$<Z.boundary&&(M+=C-$),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Z.storage}}}const A=M%C;return A>0&&(M+=C-A),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:p}}class zl{constructor(e={}){const{canvas:t=km(),context:n=null,depth:s=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let M=!1,C=0,A=0,R=null,B=-1,b=null;const E=new rt,N=new rt;let z=null;const W=new Ae(0);let I=0,F=t.width,j=t.height,Z=1,$=null,q=null;const se=new rt(0,0,F,j),oe=new rt(0,0,F,j);let ve=!1;const X=new Ol;let te=!1,ge=!1,Re=null;const Ee=new Ve,Ne=new fe,Be=new P,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return R===null?Z:1}let H=n;function xt(v,w){for(let D=0;D<v.length;D++){const O=v[D],U=t.getContext(O,w);if(U!==null)return U}return null}try{const v={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ce,!1),H===null){const w=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&w.shift(),H=xt(w,v),H===null)throw xt(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ce,ke,ye,Ye,ze,T,S,G,ae,ne,ee,_e,re,me,Me,Ie,J,He,L,Y,ue,ie,Te,Oe;function We(){Ce=new $v(H),ke=new Vv(H,Ce,e),Ce.init(ke),ie=new Ix(H,Ce,ke),ye=new Lx(H,Ce,ke),Ye=new Zv(H),ze=new _x,T=new Px(H,Ce,ye,ze,ke,ie,Ye),S=new Wv(x),G=new qv(x),ae=new ag(H,ke),Te=new zv(H,Ce,ae,ke),ne=new Yv(H,ae,Ye,Te),ee=new t0(H,ne,ae,Ye),L=new e0(H,ke,T),Ie=new Gv(ze),_e=new gx(x,S,G,Ce,ke,Te,Ie),re=new Nx(x,ze),me=new xx,Me=new Tx(Ce,ke),He=new Fv(x,S,G,ye,ee,h,l),J=new Cx(x,ee,ke),Oe=new Ox(H,Ye,ke,ye),Y=new Hv(H,Ce,Ye,ke),ue=new Kv(H,Ce,Ye,ke),Ye.programs=_e.programs,x.capabilities=ke,x.extensions=Ce,x.properties=ze,x.renderLists=me,x.shadowMap=J,x.state=ye,x.info=Ye}We();const xe=new kx(x,H);this.xr=xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const v=Ce.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ce.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(v){v!==void 0&&(Z=v,this.setSize(F,j,!1))},this.getSize=function(v){return v.set(F,j)},this.setSize=function(v,w,D=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=v,j=w,t.width=Math.floor(v*Z),t.height=Math.floor(w*Z),D===!0&&(t.style.width=v+"px",t.style.height=w+"px"),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(F*Z,j*Z).floor()},this.setDrawingBufferSize=function(v,w,D){F=v,j=w,Z=D,t.width=Math.floor(v*D),t.height=Math.floor(w*D),this.setViewport(0,0,v,w)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(se)},this.setViewport=function(v,w,D,O){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,w,D,O),ye.viewport(E.copy(se).multiplyScalar(Z).floor())},this.getScissor=function(v){return v.copy(oe)},this.setScissor=function(v,w,D,O){v.isVector4?oe.set(v.x,v.y,v.z,v.w):oe.set(v,w,D,O),ye.scissor(N.copy(oe).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(v){ye.setScissorTest(ve=v)},this.setOpaqueSort=function(v){$=v},this.setTransparentSort=function(v){q=v},this.getClearColor=function(v){return v.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(v=!0,w=!0,D=!0){let O=0;if(v){let U=!1;if(R!==null){const Q=R.texture.format;U=Q===oh||Q===rh||Q===ah}if(U){const Q=R.texture.type,le=Q===li||Q===ii||Q===Pl||Q===Ti||Q===ih||Q===sh,be=He.getClearColor(),Se=He.getClearAlpha(),Le=be.r,Ue=be.g,Fe=be.b;le?(m[0]=Le,m[1]=Ue,m[2]=Fe,m[3]=Se,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=Le,g[1]=Ue,g[2]=Fe,g[3]=Se,H.clearBufferiv(H.COLOR,0,g))}else O|=H.COLOR_BUFFER_BIT}w&&(O|=H.DEPTH_BUFFER_BIT),D&&(O|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),Me.dispose(),ze.dispose(),S.dispose(),G.dispose(),ee.dispose(),Te.dispose(),Oe.dispose(),_e.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Rt),xe.removeEventListener("sessionend",tt),Re&&(Re.dispose(),Re=null),Ct.stop()};function he(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const v=Ye.autoReset,w=J.enabled,D=J.autoUpdate,O=J.needsUpdate,U=J.type;We(),Ye.autoReset=v,J.enabled=w,J.autoUpdate=D,J.needsUpdate=O,J.type=U}function ce(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function de(v){const w=v.target;w.removeEventListener("dispose",de),De(w)}function De(v){we(v),ze.remove(v)}function we(v){const w=ze.get(v).programs;w!==void 0&&(w.forEach(function(D){_e.releaseProgram(D)}),v.isShaderMaterial&&_e.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,D,O,U,Q){w===null&&(w=Pe);const le=U.isMesh&&U.matrixWorld.determinant()<0,be=mi(v,w,D,O,U);ye.setMaterial(O,le);let Se=D.index,Le=1;if(O.wireframe===!0){if(Se=ne.getWireframeAttribute(D),Se===void 0)return;Le=2}const Ue=D.drawRange,Fe=D.attributes.position;let at=Ue.start*Le,Bt=(Ue.start+Ue.count)*Le;Q!==null&&(at=Math.max(at,Q.start*Le),Bt=Math.min(Bt,(Q.start+Q.count)*Le)),Se!==null?(at=Math.max(at,0),Bt=Math.min(Bt,Se.count)):Fe!=null&&(at=Math.max(at,0),Bt=Math.min(Bt,Fe.count));const ut=Bt-at;if(ut<0||ut===1/0)return;Te.setup(U,O,be,D,Se);let Yt,Je=Y;if(Se!==null&&(Yt=ae.get(Se),Je=ue,Je.setIndex(Yt)),U.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*qe()),Je.setMode(H.LINES)):Je.setMode(H.TRIANGLES);else if(U.isLine){let je=O.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*qe()),U.isLineSegments?Je.setMode(H.LINES):U.isLineLoop?Je.setMode(H.LINE_LOOP):Je.setMode(H.LINE_STRIP)}else U.isPoints?Je.setMode(H.POINTS):U.isSprite&&Je.setMode(H.TRIANGLES);if(U.isBatchedMesh)Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Je.renderInstances(at,ut,U.count);else if(D.isInstancedBufferGeometry){const je=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,$s=Math.min(D.instanceCount,je);Je.renderInstances(at,ut,$s)}else Je.render(at,ut)};function Ke(v,w,D){v.transparent===!0&&v.side===Gt&&v.forceSinglePass===!1?(v.side=Qt,v.needsUpdate=!0,Ni(v,w,D),v.side=Xn,v.needsUpdate=!0,Ni(v,w,D),v.side=Gt):Ni(v,w,D)}this.compile=function(v,w,D=null){D===null&&(D=v),f=Me.get(D),f.init(),y.push(f),D.traverseVisible(function(U){U.isLight&&U.layers.test(w.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==D&&v.traverseVisible(function(U){U.isLight&&U.layers.test(w.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(x._useLegacyLights);const O=new Set;return v.traverse(function(U){const Q=U.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const be=Q[le];Ke(be,D,U),O.add(be)}else Ke(Q,D,U),O.add(Q)}),y.pop(),f=null,O},this.compileAsync=function(v,w,D=null){const O=this.compile(v,w,D);return new Promise(U=>{function Q(){if(O.forEach(function(le){ze.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){U(v);return}setTimeout(Q,10)}Ce.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ze=null;function vt(v){Ze&&Ze(v)}function Rt(){Ct.stop()}function tt(){Ct.start()}const Ct=new Sh;Ct.setAnimationLoop(vt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(v){Ze=v,xe.setAnimationLoop(v),v===null?Ct.stop():Ct.start()},xe.addEventListener("sessionstart",Rt),xe.addEventListener("sessionend",tt),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(w),w=xe.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,w,R),f=Me.get(v,y.length),f.init(),y.push(f),Ee.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),X.setFromProjectionMatrix(Ee),ge=this.localClippingEnabled,te=Ie.init(this.clippingPlanes,ge),_=me.get(v,p.length),_.init(),p.push(_),an(v,w,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,q),this.info.render.frame++,te===!0&&Ie.beginShadows();const D=f.state.shadowsArray;if(J.render(D,v,w),te===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(_,v),f.setupLights(x._useLegacyLights),w.isArrayCamera){const O=w.cameras;for(let U=0,Q=O.length;U<Q;U++){const le=O[U];Gs(_,v,le,le.viewport)}}else Gs(_,v,w);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(x,v,w),Te.resetDefaultState(),B=-1,b=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function an(v,w,D,O){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)D=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);const le=ee.update(v),be=v.material;be.visible&&_.push(v,le,be,D,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const le=ee.update(v),be=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Be.copy(le.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)),Array.isArray(be)){const Se=le.groups;for(let Le=0,Ue=Se.length;Le<Ue;Le++){const Fe=Se[Le],at=be[Fe.materialIndex];at&&at.visible&&_.push(v,le,at,D,Be.z,Fe)}}else be.visible&&_.push(v,le,be,D,Be.z,null)}}const Q=v.children;for(let le=0,be=Q.length;le<be;le++)an(Q[le],w,D,O)}function Gs(v,w,D,O){const U=v.opaque,Q=v.transmissive,le=v.transparent;f.setupLightsView(D),te===!0&&Ie.setGlobalState(x.clippingPlanes,D),Q.length>0&&Ws(U,Q,w,D),O&&ye.viewport(E.copy(O)),U.length>0&&ki(U,w,D),Q.length>0&&ki(Q,w,D),le.length>0&&ki(le,w,D),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ws(v,w,D,O){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;const Q=ke.isWebGL2;Re===null&&(Re=new Dt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?qt:li,minFilter:Ri,samples:Q?4:0})),x.getDrawingBufferSize(Ne),Q?Re.setSize(Ne.x,Ne.y):Re.setSize(Nr(Ne.x),Nr(Ne.y));const le=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(W),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const be=x.toneMapping;x.toneMapping=oi,ki(v,D,O),T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re);let Se=!1;for(let Le=0,Ue=w.length;Le<Ue;Le++){const Fe=w[Le],at=Fe.object,Bt=Fe.geometry,ut=Fe.material,Yt=Fe.group;if(ut.side===Gt&&at.layers.test(O.layers)){const Je=ut.side;ut.side=Qt,ut.needsUpdate=!0,js(at,D,O,Bt,ut,Yt),ut.side=Je,ut.needsUpdate=!0,Se=!0}}Se===!0&&(T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re)),x.setRenderTarget(le),x.setClearColor(W,I),x.toneMapping=be}function ki(v,w,D){const O=w.isScene===!0?w.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){const le=v[U],be=le.object,Se=le.geometry,Le=O===null?le.material:O,Ue=le.group;be.layers.test(D.layers)&&js(be,w,D,Se,Le,Ue)}}function js(v,w,D,O,U,Q){v.onBeforeRender(x,w,D,O,U,Q),v.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,w,D,O,v,Q),U.transparent===!0&&U.side===Gt&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,x.renderBufferDirect(D,w,O,U,v,Q),U.side=Xn,U.needsUpdate=!0,x.renderBufferDirect(D,w,O,U,v,Q),U.side=Gt):x.renderBufferDirect(D,w,O,U,v,Q),v.onAfterRender(x,w,D,O,U,Q)}function Ni(v,w,D){w.isScene!==!0&&(w=Pe);const O=ze.get(v),U=f.state.lights,Q=f.state.shadowsArray,le=U.state.version,be=_e.getParameters(v,U.state,Q,w,D),Se=_e.getProgramCacheKey(be);let Le=O.programs;O.environment=v.isMeshStandardMaterial?w.environment:null,O.fog=w.fog,O.envMap=(v.isMeshStandardMaterial?G:S).get(v.envMap||O.environment),Le===void 0&&(v.addEventListener("dispose",de),Le=new Map,O.programs=Le);let Ue=Le.get(Se);if(Ue!==void 0){if(O.currentProgram===Ue&&O.lightsStateVersion===le)return Xs(v,be),Ue}else be.uniforms=_e.getUniforms(v),v.onBuild(D,be,x),v.onBeforeCompile(be,x),Ue=_e.acquireProgram(be,Se),Le.set(Se,Ue),O.uniforms=be.uniforms;const Fe=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),Xs(v,be),O.needsLights=Pn(v),O.lightsStateVersion=le,O.needsLights&&(Fe.ambientLightColor.value=U.state.ambient,Fe.lightProbe.value=U.state.probe,Fe.directionalLights.value=U.state.directional,Fe.directionalLightShadows.value=U.state.directionalShadow,Fe.spotLights.value=U.state.spot,Fe.spotLightShadows.value=U.state.spotShadow,Fe.rectAreaLights.value=U.state.rectArea,Fe.ltc_1.value=U.state.rectAreaLTC1,Fe.ltc_2.value=U.state.rectAreaLTC2,Fe.pointLights.value=U.state.point,Fe.pointLightShadows.value=U.state.pointShadow,Fe.hemisphereLights.value=U.state.hemi,Fe.directionalShadowMap.value=U.state.directionalShadowMap,Fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Fe.spotShadowMap.value=U.state.spotShadowMap,Fe.spotLightMatrix.value=U.state.spotLightMatrix,Fe.spotLightMap.value=U.state.spotLightMap,Fe.pointShadowMap.value=U.state.pointShadowMap,Fe.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ue,O.uniformsList=null,Ue}function Oi(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=Sr.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function Xs(v,w){const D=ze.get(v);D.outputColorSpace=w.outputColorSpace,D.batching=w.batching,D.instancing=w.instancing,D.instancingColor=w.instancingColor,D.skinning=w.skinning,D.morphTargets=w.morphTargets,D.morphNormals=w.morphNormals,D.morphColors=w.morphColors,D.morphTargetsCount=w.morphTargetsCount,D.numClippingPlanes=w.numClippingPlanes,D.numIntersection=w.numClipIntersection,D.vertexAlphas=w.vertexAlphas,D.vertexTangents=w.vertexTangents,D.toneMapping=w.toneMapping}function mi(v,w,D,O,U){w.isScene!==!0&&(w=Pe),T.resetTextureUnits();const Q=w.fog,le=O.isMeshStandardMaterial?w.environment:null,be=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ot,Se=(O.isMeshStandardMaterial?G:S).get(O.envMap||le),Le=O.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Ue=!!D.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Fe=!!D.morphAttributes.position,at=!!D.morphAttributes.normal,Bt=!!D.morphAttributes.color;let ut=oi;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Yt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Je=Yt!==void 0?Yt.length:0,je=ze.get(O),$s=f.state.lights;if(te===!0&&(ge===!0||v!==b)){const rn=v===b&&O.id===B;Ie.setState(O,v,rn)}let ft=!1;O.version===je.__version?(je.needsLights&&je.lightsStateVersion!==$s.state.version||je.outputColorSpace!==be||U.isBatchedMesh&&je.batching===!1||!U.isBatchedMesh&&je.batching===!0||U.isInstancedMesh&&je.instancing===!1||!U.isInstancedMesh&&je.instancing===!0||U.isSkinnedMesh&&je.skinning===!1||!U.isSkinnedMesh&&je.skinning===!0||U.isInstancedMesh&&je.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&je.instancingColor===!1&&U.instanceColor!==null||je.envMap!==Se||O.fog===!0&&je.fog!==Q||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ie.numPlanes||je.numIntersection!==Ie.numIntersection)||je.vertexAlphas!==Le||je.vertexTangents!==Ue||je.morphTargets!==Fe||je.morphNormals!==at||je.morphColors!==Bt||je.toneMapping!==ut||ke.isWebGL2===!0&&je.morphTargetsCount!==Je)&&(ft=!0):(ft=!0,je.__version=O.version);let In=je.currentProgram;ft===!0&&(In=Ni(O,w,U));let Bi=!1,Ft=!1,mn=!1;const Lt=In.getUniforms(),gn=je.uniforms;if(ye.useProgram(In.program)&&(Bi=!0,Ft=!0,mn=!0),O.id!==B&&(B=O.id,Ft=!0),Bi||b!==v){Lt.setValue(H,"projectionMatrix",v.projectionMatrix),Lt.setValue(H,"viewMatrix",v.matrixWorldInverse);const rn=Lt.map.cameraPosition;rn!==void 0&&rn.setValue(H,Be.setFromMatrixPosition(v.matrixWorld)),ke.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,Ft=!0,mn=!0)}if(U.isSkinnedMesh){Lt.setOptional(H,U,"bindMatrix"),Lt.setOptional(H,U,"bindMatrixInverse");const rn=U.skeleton;rn&&(ke.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Lt.setValue(H,"boneTexture",rn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Lt.setOptional(H,U,"batchingTexture"),Lt.setValue(H,"batchingTexture",U._matricesTexture,T));const Ys=D.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&ke.isWebGL2===!0)&&L.update(U,D,In),(Ft||je.receiveShadow!==U.receiveShadow)&&(je.receiveShadow=U.receiveShadow,Lt.setValue(H,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(gn.envMap.value=Se,gn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Ft&&(Lt.setValue(H,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&qs(gn,mn),Q&&O.fog===!0&&re.refreshFogUniforms(gn,Q),re.refreshMaterialUniforms(gn,O,Z,j,Re),Sr.upload(H,Oi(je),gn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Sr.upload(H,Oi(je),gn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Lt.setValue(H,"center",U.center),Lt.setValue(H,"modelViewMatrix",U.modelViewMatrix),Lt.setValue(H,"normalMatrix",U.normalMatrix),Lt.setValue(H,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const rn=O.uniformsGroups;for(let to=0,of=rn.length;to<of;to++)if(ke.isWebGL2){const sc=rn[to];Oe.update(sc,In),Oe.bind(sc,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function qs(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function Pn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,w,D){ze.get(v.texture).__webglTexture=w,ze.get(v.depthTexture).__webglTexture=D;const O=ze.get(v);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=D===void 0,O.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,w){const D=ze.get(v);D.__webglFramebuffer=w,D.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,D=0){R=v,C=w,A=D;let O=!0,U=null,Q=!1,le=!1;if(v){const Se=ze.get(v);Se.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(H.FRAMEBUFFER,null),O=!1):Se.__webglFramebuffer===void 0?T.setupRenderTarget(v):Se.__hasExternalTextures&&T.rebindTextures(v,ze.get(v.texture).__webglTexture,ze.get(v.depthTexture).__webglTexture);const Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(le=!0);const Ue=ze.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[w])?U=Ue[w][D]:U=Ue[w],Q=!0):ke.isWebGL2&&v.samples>0&&T.useMultisampledRTT(v)===!1?U=ze.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[D]:U=Ue,E.copy(v.viewport),N.copy(v.scissor),z=v.scissorTest}else E.copy(se).multiplyScalar(Z).floor(),N.copy(oe).multiplyScalar(Z).floor(),z=ve;if(ye.bindFramebuffer(H.FRAMEBUFFER,U)&&ke.drawBuffers&&O&&ye.drawBuffers(v,U),ye.viewport(E),ye.scissor(N),ye.setScissorTest(z),Q){const Se=ze.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+w,Se.__webglTexture,D)}else if(le){const Se=ze.get(v.texture),Le=w||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Se.__webglTexture,D||0,Le)}B=-1},this.readRenderTargetPixels=function(v,w,D,O,U,Q,le){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ze.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(be=be[le]),be){ye.bindFramebuffer(H.FRAMEBUFFER,be);try{const Se=v.texture,Le=Se.format,Ue=Se.type;if(Le!==dn&&ie.convert(Le)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===qt&&(Ce.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ue!==li&&ie.convert(Ue)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Hn&&(ke.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-O&&D>=0&&D<=v.height-U&&H.readPixels(w,D,O,U,ie.convert(Le),ie.convert(Ue),Q)}finally{const Se=R!==null?ze.get(R).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(v,w,D=0){const O=Math.pow(2,-D),U=Math.floor(w.image.width*O),Q=Math.floor(w.image.height*O);T.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,D,0,0,v.x,v.y,U,Q),ye.unbindTexture()},this.copyTextureToTexture=function(v,w,D,O=0){const U=w.image.width,Q=w.image.height,le=ie.convert(D.format),be=ie.convert(D.type);T.setTexture2D(D,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,D.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,D.unpackAlignment),w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,O,v.x,v.y,U,Q,le,be,w.image.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,O,v.x,v.y,w.mipmaps[0].width,w.mipmaps[0].height,le,w.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,O,v.x,v.y,le,be,w.image),O===0&&D.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(v,w,D,O,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Q=v.max.x-v.min.x+1,le=v.max.y-v.min.y+1,be=v.max.z-v.min.z+1,Se=ie.convert(O.format),Le=ie.convert(O.type);let Ue;if(O.isData3DTexture)T.setTexture3D(O,0),Ue=H.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)T.setTexture2DArray(O,0),Ue=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);const Fe=H.getParameter(H.UNPACK_ROW_LENGTH),at=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Bt=H.getParameter(H.UNPACK_SKIP_PIXELS),ut=H.getParameter(H.UNPACK_SKIP_ROWS),Yt=H.getParameter(H.UNPACK_SKIP_IMAGES),Je=D.isCompressedTexture?D.mipmaps[U]:D.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Je.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,v.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,v.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,v.min.z),D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Ue,U,w.x,w.y,w.z,Q,le,be,Se,Le,Je.data):D.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ue,U,w.x,w.y,w.z,Q,le,be,Se,Je.data)):H.texSubImage3D(Ue,U,w.x,w.y,w.z,Q,le,be,Se,Le,Je),H.pixelStorei(H.UNPACK_ROW_LENGTH,Fe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Bt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ut),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt),U===0&&O.generateMipmaps&&H.generateMipmap(Ue),ye.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,ye.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Xr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Ai:uh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?ht:Ot}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Bx extends zl{}Bx.prototype.isWebGL1Renderer=!0;class Ph extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ih{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new P;class Sa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dh extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const ea=new P,ss=new P,as=new P,rs=new fe,ta=new fe,Uh=new Ve,ar=new P,na=new P,rr=new P,Bu=new fe,Uo=new fe,Fu=new fe;class Fx extends et{constructor(e=new Dh){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ih(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Sa(n,3,0,!1)),is.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Uh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;or(ar.set(-.5,-.5,0),as,r,ss,s,a),or(na.set(.5,-.5,0),as,r,ss,s,a),or(rr.set(.5,.5,0),as,r,ss,s,a),Bu.set(0,0),Uo.set(1,0),Fu.set(1,1);let o=e.ray.intersectTriangle(ar,na,rr,!1,ea);if(o===null&&(or(na.set(-.5,.5,0),as,r,ss,s,a),Uo.set(0,1),o=e.ray.intersectTriangle(ar,rr,na,!1,ea),o===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:cn.getInterpolation(ea,ar,na,rr,Bu,Uo,Fu,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function or(i,e,t,n,s,a){rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ta.x=a*rs.x-s*rs.y,ta.y=s*rs.x+a*rs.y):ta.copy(rs),i.copy(e),i.x+=ta.x,i.y+=ta.y,i.applyMatrix4(Uh)}const zu=new P,Hu=new rt,Vu=new rt,zx=new P,Gu=new Ve,lr=new P,ko=new Cn,Wu=new Ve,No=new Os;class Hx extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingBox.expandByPoint(lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingSphere.expandByPoint(lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(s),e.ray.intersectsSphere(ko)!==!1&&(Wu.copy(s).invert(),No.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&No.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,No)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Hu.fromBufferAttribute(s.attributes.skinIndex,e),Vu.fromBufferAttribute(s.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=Vu.getComponent(a);if(r!==0){const o=Hu.getComponent(a);Gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zx.copy(zu).applyMatrix4(Gu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class kh extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vx extends kt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=It,d=It,u,h){super(null,r,o,l,c,d,s,a,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new Ve,Gx=new Ve;class Hl{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:Gx;ju.multiplyMatrices(o,t[a]),ju.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vx(t,e,e,dn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new kh),this.bones.push(r),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class cl extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ve,Xu=new Ve,cr=[],qu=new qn,Wx=new Ve,ia=new st,sa=new Cn;class Nh extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),qu.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(qu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),sa.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,os),Xu.multiplyMatrices(n,os),ia.matrixWorld=Xu,ia.raycast(e,cr);for(let r=0,o=cr.length;r<o;r++){const l=cr[r];l.instanceId=a,l.object=this,t.push(l)}cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $u=new P,Yu=new P,Ku=new Ve,Oo=new Os,ur=new Cn;class Kr extends et{constructor(e=new _t,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)$u.fromBufferAttribute(t,s-1),Yu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$u.distanceTo(Yu);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=a,e.ray.intersectsSphere(ur)===!1)return;Ku.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(Ku);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,d=new P,u=new P,h=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let x=p,M=y-1;x<M;x+=m){const C=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(f,C),d.fromBufferAttribute(f,A),Oo.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),y=Math.min(f.count,r.start+r.count);for(let x=p,M=y-1;x<M;x+=m){if(c.fromBufferAttribute(f,x),d.fromBufferAttribute(f,x+1),Oo.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const Zu=new P,Ju=new P;class jx extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Zu.fromBufferAttribute(t,s),Ju.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zu.distanceTo(Ju);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zr extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vl extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new Ve,ul=new Os,dr=new Cn,hr=new P;class Oh extends et{constructor(e=new _t,t=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=a,e.ray.intersectsSphere(dr)===!1)return;Qu.copy(s).invert(),ul.copy(e.ray).applyMatrix4(Qu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=h,_=m;g<_;g++){const f=c.getX(g);hr.fromBufferAttribute(u,f),ed(hr,f,l,s,e,t,this)}}else{const h=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=h,_=m;g<_;g++)hr.fromBufferAttribute(u,g),ed(hr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ed(i,e,t,n,s,a,r){const o=ul.distanceSqToPoint(i);if(o<t){const l=new P;ul.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Xx extends kt{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const d=n[s],h=n[s+1]-d,m=(r-d)/h;return(s+m)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new fe:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,s=[],a=[],r=[],o=new P,l=new Ve;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Et(s[m-1].dot(s[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,g))}r[m].crossVectors(s[m],a[m])}if(t===!0){let m=Math.acos(Et(a[0].dot(a[e]),-1,1));m/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $x extends qx{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new fe,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*d-m*u+this.aX,c=h*u+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gl extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new P,d=new fe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[h]/e+1)/2,d.y=(r[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Da extends _t{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const d=[],u=[],h=[],m=[];let g=0;const _=[],f=n/2;let p=0;y(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(m,2));function y(){const M=new P,C=new P;let A=0;const R=(t-e)/n;for(let B=0;B<=a;B++){const b=[],E=B/a,N=E*(t-e)+e;for(let z=0;z<=s;z++){const W=z/s,I=W*l+o,F=Math.sin(I),j=Math.cos(I);C.x=N*F,C.y=-E*n+f,C.z=N*j,u.push(C.x,C.y,C.z),M.set(F,R,j).normalize(),h.push(M.x,M.y,M.z),m.push(W,1-E),b.push(g++)}_.push(b)}for(let B=0;B<s;B++)for(let b=0;b<a;b++){const E=_[b][B],N=_[b+1][B],z=_[b+1][B+1],W=_[b][B+1];d.push(E,N,W),d.push(N,z,W),A+=6}c.addGroup(p,A,0),p+=A}function x(M){const C=g,A=new fe,R=new P;let B=0;const b=M===!0?e:t,E=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,f*E,0),h.push(0,E,0),m.push(.5,.5),g++;const N=g;for(let z=0;z<=s;z++){const I=z/s*l+o,F=Math.cos(I),j=Math.sin(I);R.x=b*j,R.y=f*E,R.z=b*F,u.push(R.x,R.y,R.z),h.push(0,E,0),A.x=F*.5+.5,A.y=j*.5*E+.5,m.push(A.x,A.y),g++}for(let z=0;z<s;z++){const W=C+z,I=N+z;M===!0?d.push(I,I+1,W):d.push(I+1,I,W),B+=3}c.addGroup(p,B,M===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wl extends Da{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Wl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),c(n),d(),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(a.slice(),3)),this.setAttribute("uv",new ot(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,M=new P,C=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],M),m(t[A+2],C),l(x,M,C,y)}function l(y,x,M,C){const A=C+1,R=[];for(let B=0;B<=A;B++){R[B]=[];const b=y.clone().lerp(M,B/A),E=x.clone().lerp(M,B/A),N=A-B;for(let z=0;z<=N;z++)z===0&&B===A?R[B][z]=b:R[B][z]=b.clone().lerp(E,z/N)}for(let B=0;B<A;B++)for(let b=0;b<2*(A-B)-1;b++){const E=Math.floor(b/2);b%2===0?(h(R[B][E+1]),h(R[B+1][E]),h(R[B][E])):(h(R[B][E+1]),h(R[B+1][E+1]),h(R[B+1][E]))}}function c(y){const x=new P;for(let M=0;M<a.length;M+=3)x.x=a[M+0],x.y=a[M+1],x.z=a[M+2],x.normalize().multiplyScalar(y),a[M+0]=x.x,a[M+1]=x.y,a[M+2]=x.z}function d(){const y=new P;for(let x=0;x<a.length;x+=3){y.x=a[x+0],y.y=a[x+1],y.z=a[x+2];const M=f(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;r.push(M,1-C)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const x=r[y+0],M=r[y+2],C=r[y+4],A=Math.max(x,M,C),R=Math.min(x,M,C);A>.9&&R<.1&&(x<.2&&(r[y+0]+=1),M<.2&&(r[y+2]+=1),C<.2&&(r[y+4]+=1))}}function h(y){a.push(y.x,y.y,y.z)}function m(y,x){const M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){const y=new P,x=new P,M=new P,C=new P,A=new fe,R=new fe,B=new fe;for(let b=0,E=0;b<a.length;b+=9,E+=6){y.set(a[b+0],a[b+1],a[b+2]),x.set(a[b+3],a[b+4],a[b+5]),M.set(a[b+6],a[b+7],a[b+8]),A.set(r[E+0],r[E+1]),R.set(r[E+2],r[E+3]),B.set(r[E+4],r[E+5]),C.copy(y).add(x).add(M).divideScalar(3);const N=f(C);_(A,E+0,y,N),_(R,E+2,x,N),_(B,E+4,M,N)}}function _(y,x,M,C){C<0&&y.x===1&&(r[x]=y.x-1),M.x===0&&M.z===0&&(r[x]=C/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.vertices,e.indices,e.radius,e.details)}}class Ea extends jl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ea(e.radius,e.detail)}}class Jr extends _t{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,m=new P,g=new fe;for(let _=0;_<=s;_++){for(let f=0;f<=n;f++){const p=a+f/n*r;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let _=0;_<s;_++){const f=_*(n+1);for(let p=0;p<n;p++){const y=p+f,x=y,M=y+n+1,C=y+n+2,A=y+1;o.push(x,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wn extends _t{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],u=new P,h=new P,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let M=0;p===0&&r===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(s+A*a)*Math.sin(r+x*o),u.y=e*Math.cos(r+x*o),u.z=e*Math.sin(s+A*a)*Math.sin(r+x*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),f.push(A+M,1-x),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=d[p][y+1],M=d[p][y],C=d[p+1][y],A=d[p+1][y+1];(p!==0||r>0)&&m.push(x,M,A),(p!==n-1||l<Math.PI)&&m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fn extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bo extends sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function fr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kx(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function td(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let l=0;l!==e;++l)s[r++]=i[o+l]}return s}function Bh(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class Ua{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zx extends Ua{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:a=e,o=2*t-n;break;case Kc:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:r=e,l=2*n-t;break;case Kc:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,f=_*g,p=-h*f+2*h*_-h*g,y=(1+h)*f+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,M=m*f-m*_;for(let C=0;C!==o;++C)a[C]=p*r[d+C]+y*r[c+C]+x*r[l+C]+M*r[u+C];return a}}class Jx extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)a[h]=r[c+h]*u+r[l+h]*d;return a}}class Qx extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fr(t,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fr(e.times,Array),values:fr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&Yx(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===co,a=e.length-1;let r=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,h=u-n,m=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[h+g]||_!==t[m+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const u=o*n,h=r*n;for(let m=0;m!==n;++m)t[h+m]=t[u+m]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ls;class zs extends Ln{}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ba;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fh extends Ln{}Fh.prototype.ValueTypeName="color";class Ds extends Ln{}Ds.prototype.ValueTypeName="number";class eb extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let d=c+o;c!==d;c+=4)Rn.slerpFlat(a,0,r,c-o,r,c,l);return a}}class Ci extends Ln{InterpolantFactoryMethodLinear(e){return new eb(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=Ls;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends Ln{}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=ba;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Ln{}Us.prototype.ValueTypeName="vector";class tb{constructor(e,t=-1,n,s=um){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(ib(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(Ln.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const d=Kx(l);l=td(l,1,d),c=td(c,1,d),!s&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new Ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(a);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,m,g,_){if(m.length!==0){const f=[],p=[];Bh(m,f,p,g),f.length!==0&&_.push(new u(h,f,p))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)m[h[g].morphTargets[_]]=-1;for(const _ in m){const f=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const x=h[g];f.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new Ds(".morphTargetInfluence["+_+"]",f,p))}l=m.length*r}else{const m=".bones["+t[u].name+"]";n(Us,m+".position",h,"pos",s),n(Ci,m+".quaternion",h,"rot",s),n(Us,m+".scale",h,"scl",s)}}return s.length===0?null:new this(a,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return Fh;case"quaternion":return Ci;case"bool":case"boolean":return zs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ib(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nb(i.type);if(i.times===void 0){const t=[],n=[];Bh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sb{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,a===!1&&s.onStart!==void 0&&s.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,s.onProgress!==void 0&&s.onProgress(d,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const ab=new sb;class Di{constructor(e){this.manager=e!==void 0?e:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Di.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class rb extends Error{constructor(e,t){super(e),this.response=t}}class zh extends Di{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=si.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:s});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Bn[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let _=0;const f=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let A=0,R=d.length;A<R;A++){const B=d[A];B.onProgress&&B.onProgress(C)}p.enqueue(M),y()}})}}});return new Response(f)}else throw new rb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{si.add(e,c);const d=Bn[e];delete Bn[e];for(let u=0,h=d.length;u<h;u++){const m=d[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Bn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let u=0,h=d.length;u<h;u++){const m=d[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hh extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=si.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=ya("img");function l(){d(),si.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){d(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class ob extends Di{constructor(e){super(e)}load(e,t,n,s){const a=new Nl;a.colorSpace=ht;const r=new Hh(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let o=0;function l(c){r.load(e[c],function(d){a.images[c]=d,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return a}}class Xl extends Di{constructor(e){super(e)}load(e,t,n,s){const a=new kt,r=new Hh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Qr extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fo=new Ve,nd=new P,id=new P;class ql{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(nd),id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(id),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lb extends ql{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cb extends Qr{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new lb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sd=new Ve,aa=new P,zo=new P;class ub extends ql{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(aa),zo.copy(n.position),zo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zo),n.updateMatrixWorld(),s.makeTranslation(-aa.x,-aa.y,-aa.z),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}}class $l extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ub}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class db extends ql{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vh extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gh extends Qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hb extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=si.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),a.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(e,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){s&&s(c),si.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});si.add(e,l),a.manager.itemStart(e)}}class fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ad(){return(typeof performance>"u"?Date:performance).now()}const Yl="\\[\\]\\.:\\/",pb=new RegExp("["+Yl+"]","g"),Kl="[^"+Yl+"]",mb="[^"+Yl.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Kl),_b=/(WCOD+)?/.source.replace("WCOD",mb),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),bb=new RegExp("^"+gb+_b+vb+xb+"$"),yb=["material","materials","bones","map"];class Mb{constructor(e,t,n){const s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(e){const t=bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);yb.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[s];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Mb;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sb{constructor(e,t,n=0,s=1/0){this.ray=new Os(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return dl(e,this,n,t),n.sort(rd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)dl(e[s],this,n,t);return n.sort(rd),n}}function rd(i,e){return i.distance-e.distance}function dl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let a=0,r=s.length;a<r;a++)dl(s[a],e,t,!0)}}class od{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ld=new P;let pr,Ho;class cd extends et{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,s=16776960,a=n*.2,r=a*.2){super(),this.type="ArrowHelper",pr===void 0&&(pr=new _t,pr.setAttribute("position",new ot([0,0,0,0,1,0],3)),Ho=new Da(0,.5,1,5,1),Ho.translate(0,-.5,0)),this.position.copy(t),this.line=new Kr(pr,new Fs({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new st(Ho,new Jt({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,a,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ld.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ld,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const ud={type:"change"},Vo={type:"start"},dd={type:"end"},mr=new Os,hd=new ti,Eb=Math.cos(70*fh.DEG2RAD);class Wh extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ee),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),a=s.NONE},this.update=function(){const L=new P,Y=new Rn().setFromUnitVectors(e.up,new P(0,1,0)),ue=Y.clone().invert(),ie=new P,Te=new Rn,Oe=new P,We=2*Math.PI;return function(he=null){const k=n.object.position;L.copy(k).sub(n.target),L.applyQuaternion(Y),o.setFromVector3(L),n.autoRotate&&a===s.NONE&&N(b(he)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ce=n.minAzimuthAngle,de=n.maxAzimuthAngle;isFinite(ce)&&isFinite(de)&&(ce<-Math.PI?ce+=We:ce>Math.PI&&(ce-=We),de<-Math.PI?de+=We:de>Math.PI&&(de-=We),ce<=de?o.theta=Math.max(ce,Math.min(de,o.theta)):o.theta=o.theta>(ce+de)/2?Math.max(ce,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(ue),k.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let De=!1;if(n.zoomToCursor&&A){let we=null;if(n.object.isPerspectiveCamera){const Ke=L.length();we=q(Ke*c);const Ze=Ke-we;n.object.position.addScaledVector(M,Ze),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new P(C.x,C.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0;const Ze=new P(C.x,C.y,0);Ze.unproject(n.object),n.object.position.sub(Ze).add(Ke),n.object.updateMatrixWorld(),we=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(we).add(n.object.position):(mr.origin.copy(n.object.position),mr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mr.direction))<Eb?e.lookAt(n.target):(hd.setFromNormalAndCoplanarPoint(n.object.up,n.target),mr.intersectPlane(hd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0);return c=1,A=!1,De||ie.distanceToSquared(n.object.position)>r||8*(1-Te.dot(n.object.quaternion))>r||Oe.distanceToSquared(n.target)>0?(n.dispatchEvent(ud),ie.copy(n.object.position),Te.copy(n.object.quaternion),Oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",ze),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const r=1e-6,o=new od,l=new od;let c=1;const d=new P,u=new fe,h=new fe,m=new fe,g=new fe,_=new fe,f=new fe,p=new fe,y=new fe,x=new fe,M=new P,C=new fe;let A=!1;const R=[],B={};function b(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function E(L){const Y=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Y)}function N(L){l.theta-=L}function z(L){l.phi-=L}const W=function(){const L=new P;return function(ue,ie){L.setFromMatrixColumn(ie,0),L.multiplyScalar(-ue),d.add(L)}}(),I=function(){const L=new P;return function(ue,ie){n.screenSpacePanning===!0?L.setFromMatrixColumn(ie,1):(L.setFromMatrixColumn(ie,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ue),d.add(L)}}(),F=function(){const L=new P;return function(ue,ie){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;L.copy(Oe).sub(n.target);let We=L.length();We*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ue*We/Te.clientHeight,n.object.matrix),I(2*ie*We/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ue*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),I(ie*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L,Y){if(!n.zoomToCursor)return;A=!0;const ue=n.domElement.getBoundingClientRect(),ie=L-ue.left,Te=Y-ue.top,Oe=ue.width,We=ue.height;C.x=ie/Oe*2-1,C.y=-(Te/We)*2+1,M.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function se(L){u.set(L.clientX,L.clientY)}function oe(L){$(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function ve(L){g.set(L.clientX,L.clientY)}function X(L){h.set(L.clientX,L.clientY),m.subVectors(h,u).multiplyScalar(n.rotateSpeed);const Y=n.domElement;N(2*Math.PI*m.x/Y.clientHeight),z(2*Math.PI*m.y/Y.clientHeight),u.copy(h),n.update()}function te(L){y.set(L.clientX,L.clientY),x.subVectors(y,p),x.y>0?j(E(x.y)):x.y<0&&Z(E(x.y)),p.copy(y),n.update()}function ge(L){_.set(L.clientX,L.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),F(f.x,f.y),g.copy(_),n.update()}function Re(L){$(L.clientX,L.clientY),L.deltaY<0?Z(E(L.deltaY)):L.deltaY>0&&j(E(L.deltaY)),n.update()}function Ee(L){let Y=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Y=!0;break}Y&&(L.preventDefault(),n.update())}function Ne(L){if(R.length===1)u.set(L.pageX,L.pageY);else{const Y=He(L),ue=.5*(L.pageX+Y.x),ie=.5*(L.pageY+Y.y);u.set(ue,ie)}}function Be(L){if(R.length===1)g.set(L.pageX,L.pageY);else{const Y=He(L),ue=.5*(L.pageX+Y.x),ie=.5*(L.pageY+Y.y);g.set(ue,ie)}}function Pe(L){const Y=He(L),ue=L.pageX-Y.x,ie=L.pageY-Y.y,Te=Math.sqrt(ue*ue+ie*ie);p.set(0,Te)}function qe(L){n.enableZoom&&Pe(L),n.enablePan&&Be(L)}function H(L){n.enableZoom&&Pe(L),n.enableRotate&&Ne(L)}function xt(L){if(R.length==1)h.set(L.pageX,L.pageY);else{const ue=He(L),ie=.5*(L.pageX+ue.x),Te=.5*(L.pageY+ue.y);h.set(ie,Te)}m.subVectors(h,u).multiplyScalar(n.rotateSpeed);const Y=n.domElement;N(2*Math.PI*m.x/Y.clientHeight),z(2*Math.PI*m.y/Y.clientHeight),u.copy(h)}function Ce(L){if(R.length===1)_.set(L.pageX,L.pageY);else{const Y=He(L),ue=.5*(L.pageX+Y.x),ie=.5*(L.pageY+Y.y);_.set(ue,ie)}f.subVectors(_,g).multiplyScalar(n.panSpeed),F(f.x,f.y),g.copy(_)}function ke(L){const Y=He(L),ue=L.pageX-Y.x,ie=L.pageY-Y.y,Te=Math.sqrt(ue*ue+ie*ie);y.set(0,Te),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),j(x.y),p.copy(y);const Oe=(L.pageX+Y.x)*.5,We=(L.pageY+Y.y)*.5;$(Oe,We)}function ye(L){n.enableZoom&&ke(L),n.enablePan&&Ce(L)}function Ye(L){n.enableZoom&&ke(L),n.enableRotate&&xt(L)}function ze(L){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",S)),Me(L),L.pointerType==="touch"?_e(L):G(L))}function T(L){n.enabled!==!1&&(L.pointerType==="touch"?re(L):ae(L))}function S(L){Ie(L),R.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(dd),a=s.NONE}function G(L){let Y;switch(L.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Fi.DOLLY:if(n.enableZoom===!1)return;oe(L),a=s.DOLLY;break;case Fi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;ve(L),a=s.PAN}else{if(n.enableRotate===!1)return;se(L),a=s.ROTATE}break;case Fi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;se(L),a=s.ROTATE}else{if(n.enablePan===!1)return;ve(L),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Vo)}function ae(L){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;X(L);break;case s.DOLLY:if(n.enableZoom===!1)return;te(L);break;case s.PAN:if(n.enablePan===!1)return;ge(L);break}}function ne(L){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(L.preventDefault(),n.dispatchEvent(Vo),Re(L),n.dispatchEvent(dd))}function ee(L){n.enabled===!1||n.enablePan===!1||Ee(L)}function _e(L){switch(J(L),R.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;Ne(L),a=s.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;Be(L),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(L),a=s.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(L),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Vo)}function re(L){switch(J(L),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ce(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(L),n.update();break;default:a=s.NONE}}function me(L){n.enabled!==!1&&L.preventDefault()}function Me(L){R.push(L.pointerId)}function Ie(L){delete B[L.pointerId];for(let Y=0;Y<R.length;Y++)if(R[Y]==L.pointerId){R.splice(Y,1);return}}function J(L){let Y=B[L.pointerId];Y===void 0&&(Y=new fe,B[L.pointerId]=Y),Y.set(L.pageX,L.pageY)}function He(L){const Y=L.pointerId===R[0]?R[1]:R[0];return B[Y]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",ze),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}const Tb=Object.assign({"../images/1.jpg":Wf,"../images/2.jpg":jf,"../images/3.jpg":Xf,"../images/4.jpg":qf,"../images/earth_atmosphere.jpg":$f,"../images/earth_daymap.jpg":Yf,"../images/earth_nightmap.jpg":Kf,"../images/earth_normalmap.jpg":Zf,"../images/earth_specularmap.jpg":Jf,"../images/jup1vuu2.jpg":Qf,"../images/jupiter.jpg":ep,"../images/jupiterCallisto.jpg":tp,"../images/jupiterEuropa.jpg":np,"../images/jupiterGanymede.jpg":ip,"../images/jupiterIo.jpg":sp,"../images/marsbump.jpg":ap,"../images/marsmap.jpg":rp,"../images/mercury.jpg":op,"../images/mercurybump.jpg":lp,"../images/mercurymap.jpg":cp,"../images/moon.jpg":up,"../images/moonbump.jpg":dp,"../images/moonmap.jpg":hp,"../images/neptune.jpg":fp,"../images/plutobump2k.jpg":pp,"../images/plutomap.jpg":mp,"../images/saturnmap.jpg":gp,"../images/sun.jpg":_p,"../images/uranus.jpg":vp,"../images/venus_atmosphere.jpg":xp,"../images/venusbump.jpg":bp,"../images/venusmap.jpg":yp});let hl=()=>{};function ka(){hl(),hl=()=>{}}function jh(i,e,t={}){ka();const n=new Ph;n.background=new Ae("#07152d");const s=new Vt(42,1,.1,500);s.position.set(0,8,22);let a;try{a=new zl({antialias:!0,alpha:!1})}catch{return i.innerHTML='<p class="z-note">Perangkat ini belum dapat membuka 3D. Materi dan evaluasi tetap bisa dipakai.</p>',{}}a.setPixelRatio(Math.min(devicePixelRatio,pn().grafis==="hemat"?1:1.5)),a.outputColorSpace=ht,i.append(a.domElement);const r=new Wh(s,a.domElement);r.enableDamping=!0,r.minDistance=3,r.maxDistance=70,n.add(new Gh(16777215,.25));const o=new $l(16777215,180,100,1);o.position.set(-8,1,0),n.add(o);const l=new Vh(16777215,1.8);l.position.set(0,6,10),n.add(l);const c=new Xl,d=[],u=[];function h(b,E){const N=document.createElement("span");N.className="z-object-label",N.textContent=b,i.append(N),u.push({e:N,obj:E})}function m(b,E=1){const N=gs.find(I=>I.id===b),z=new fn({color:16777215,roughness:1});if(N!=null&&N.texture){const I=c.load(Tb["../images/"+N.texture]);I.colorSpace=ht,z.map=I,d.push(I)}b==="Sun"&&(z.emissive=new Ae("#fff0a0"),z.emissiveMap=z.map,z.emissiveIntensity=2);const W=new st(new Wn(E,40,24),z);if(W.userData.id=b,n.add(W),b==="Saturn"){const I=new st(new Jr(E*1.3,E*2,64),new fn({color:14073232,side:Gt,transparent:!0,opacity:.8}));I.rotation.x=Math.PI/2.5,W.add(I)}return t.labels!==!1&&!(e==="rotation"&&b==="Earth")&&h((N==null?void 0:N.name)||b,W),W}function g(b,E=new P){const N=Array.from({length:100},(W,I)=>new P(Math.cos(I/100*Math.PI*2)*b,0,Math.sin(I/100*Math.PI*2)*b).add(E)),z=new Zr(new _t().setFromPoints(N),new Fs({color:6332097}));return n.add(z),z}let _=()=>{},f=0,p=!pn().kurangiAnimasi,y=1;if(e==="rotation"){const b=m("Earth",2.8);m("Sun",.8).position.set(-8,0,0),l.intensity=0,o.intensity=90;const E=new et;E.position.set(-4.3,0,0),n.add(E),h("☀ Siang",E);const N=new et;N.position.set(4.3,0,0),n.add(N),h("☾ Malam",N),n.add(new cd(new P(0,0,-1),new P(3.4,0,0),2,7531217));const z=new st(new Wn(.12),new Jt({color:16765801}));z.position.set(2.8,0,0),b.add(z),_=W=>b.rotation.y=W*.4}else if(e==="revolution"||e==="earth-moon"){const b=e==="earth-moon",E=m(b?"Earth":"Sun",2),N=m(b?"Moon":"Earth",b?.6:1);g(6),n.add(new cd(new P(0,0,1),new P(6,0,0),2,7531217)),_=z=>{const W=z*.25;N.position.set(Math.cos(W)*6,0,Math.sin(W)*6),E.rotation.y=z*.12,N.rotation.y=z*.3}}else if(e==="solar-eclipse"||e==="lunar-eclipse"){const b=e==="solar-eclipse";m("Sun",2).position.set(-8,0,0),m("Earth",1.5).position.set(b?4:0,0,0);const N=m("Moon",.65),z=new st(new Da(b?.12:.85,b?.65:1.5,b?4:5,40,1,!0),new Jt({color:132886,transparent:!0,opacity:.65,side:Gt,depthWrite:!1}));z.rotation.z=Math.PI/2,n.add(z);const W=new st(new Gl(b?.35:.64,40),new Jt({color:526612,transparent:!0,opacity:.82,side:Gt}));W.rotation.y=-Math.PI/2,n.add(W),l.intensity=.7,_=I=>{var Z;const F=Math.sin(I*.35)*2.5;N.position.set(b?0:5,F,0),z.position.set(b?2:2.5,b?F:0,0),W.position.set(b?2.5:4.34,b?0:F,0);const j=Math.abs(F)<.65;z.visible=j,W.visible=j,(Z=t.onStatus)==null||Z.call(t,j?"Ketiga benda segaris: bayangan mengenai "+(b?"Bumi.":"Bulan."):"Amati Bulan bergerak menuju garis Matahari dan Bumi.")}}else if(e==="Meteor"){const b=m("Earth",2);b.position.x=4;const E=new st(new Wn(2.35,32,20),new Jt({color:6732031,transparent:!0,opacity:.18}));E.position.copy(b.position),n.add(E);const N=new st(new Ea(.2),new fn({color:11248795}));n.add(N),h("Meteoroid → Meteor",N);const z=new st(new Wl(.18,1.8,12),new Jt({color:16763746,transparent:!0,opacity:.8}));z.rotation.z=Math.PI/2,n.add(z),_=W=>{var F;const I=W%8/8;N.position.set(-6+I*9,2-I*1.5,0),z.position.copy(N.position).add(new P(-.8,0,0)),z.visible=N.position.distanceTo(b.position)<2.4,N.visible=I<.99,(F=t.onStatus)==null||F.call(t,z.visible?"Meteor: cahaya saat memasuki atmosfer.":"Meteoroid: batuan kecil di luar angkasa.")}}else if(e==="compare"){const b=$t.find(I=>I.id===t.a)||$t[2],E=$t.find(I=>I.id===t.b)||$t[4],N=Math.max(b.size,E.size),z=m(b.id,3*b.size/N),W=m(E.id,3*E.size/N);z.position.x=-4,W.position.x=4,_=I=>{z.rotation.y=W.rotation.y=I*.2}}else{const b=gs.find(N=>N.id===e)||$t[2],E=m(b.id,2.5);_=N=>E.rotation.y=N*.2}const x=()=>{const b=i.clientWidth,E=i.clientHeight;a.setSize(b,E),s.aspect=b/E,s.updateProjectionMatrix()},M=new ResizeObserver(x);M.observe(i),x();let C,A=performance.now(),R=!0;function B(b){if(!R)return;C=requestAnimationFrame(B);const E=Math.min((b-A)/1e3,.05);A=b,!(document.hidden||!i.closest(".active-screen"))&&(p&&(f+=E*y),_(f),r.update(),a.render(n,s),u.forEach(({e:N,obj:z})=>{const W=z.getWorldPosition(new P).project(s);N.style.left=(W.x*.5+.5)*i.clientWidth+"px",N.style.top=(-W.y*.5+.5)*i.clientHeight+22+"px",N.hidden=W.z>1}))}return B(A),hl=()=>{R=!1,cancelAnimationFrame(C),M.disconnect(),r.dispose(),n.traverse(b=>{var E;(E=b.geometry)==null||E.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(N=>N.dispose())}),d.forEach(b=>b.dispose()),a.dispose(),a.forceContextLoss(),i.replaceChildren()},{play(){p=!0},pause(){p=!1},reset(){f=0,_(0)},speed(b){y=b}}}let ui,pt;const Mt=i=>pt.querySelector(i),lt=(i,e)=>{var t;return(t=Mt(i))==null?void 0:t.addEventListener("click",e)},gt=(i,e)=>`<button class="z-btn" id="${i}">${e}</button>`;function en(i,e=""){return`<div class="z-heading"><p class="z-eyebrow">ZEPTO · KELAS VI</p><h1>${i}</h1><p>${e}</p></div>`}function Or(i,e,t,n){return`<button class="z-card" data-id="${i}"><span class="z-icon">${e}</span><strong>${t}</strong><span>${n}</span><b>Jelajahi →</b></button>`}function wb(i){ui=i,pt=document.querySelector("#zepto-content"),window.addEventListener("zepto-toast",e=>{const t=document.querySelector("#zepto-toast");t.textContent=e.detail,t.classList.add("show"),clearTimeout(t.timer),t.timer=setTimeout(()=>t.classList.remove("show"),3200)}),window.addEventListener("zepto-progress",fd),fd(),window.addEventListener("zepto-selected",e=>{const{key:t,source:n}=e.detail;ci("explored",t,3);const s=mt(),a=Tl(s.activeMission);!a||n!=="direct"||(a.targets.includes(t)?(s.found.includes(t)||s.found.push(t),a.targets.every(r=>s.found.includes(r))?(s.missions=[...new Set([...s.missions,a.id])],s.activeMission=null,s.found=[],Tr("mission:"+a.id,10,s),a.id==="home"&&ci("games","find",10),window.dispatchEvent(new CustomEvent("zepto-toast",{detail:"✨ MISI BERHASIL! +10 Bintang ZEPTO ⭐"}))):bn(s)):window.dispatchEvent(new CustomEvent("zepto-toast",{detail:"Belum tepat. "+a.text})),Br())}),document.querySelector("#z-cancel-mission").onclick=()=>{const e=mt();e.activeMission=null,e.found=[],bn(e),Br()}}function fd(){const i=mt();document.querySelector("#z-stars").textContent=`⭐ ${i.stars} Bintang ZEPTO`,document.querySelector("#z-level").textContent=i.level}function Br(){const i=Tl(mt().activeMission),e=document.querySelector("#z-mission-banner");e.hidden=!i,i&&(document.querySelector("#z-mission-text").textContent=i.text+" Ketuk objek 3D-nya.")}function Ab(i,e){ka(),La(),pt.innerHTML="",({belajar:Ta,evaluasi:Li,progres:Cb,misi:Lb,simulasi:wa,tebak:qh,petunjuk:Rb}[i]||Ta)(e)}function Rb(){pt.innerHTML=en("Mulai petualanganmu 🚀","Ikuti langkah singkat sebelum menjelajah.")+`<div class="z-panel"><h2>Petunjuk</h2><p>👆 Ketuk menu dan objek untuk belajar. 🔊 Dengarkan penjelasan jika kamu ingin dibacakan.</p><h2>Tujuan pembelajaran</h2><ul><li>Menyebutkan delapan planet dan urutannya.</li><li>Mengenali ciri Matahari, planet, dan Bulan.</li><li>Membedakan rotasi, revolusi, dan dua jenis gerhana.</li></ul><p>Isi nama dan kelas, lalu kerjakan pretest. Setelah itu, semua menu belajar dapat dijelajahi.</p>${gt("z-start-pre","Lanjut ke pretest →")}</div>`,lt("#z-start-pre",()=>Li())}function Ta(i){if(i){const e=hs.find(t=>t.id===i);pt.innerHTML=en(e.icon+" "+e.name,"Materi ZEPTO")+`<article class="z-panel z-lesson"><p class="z-large">${e.text}</p><div class="z-actions">${gt("z-list","← Daftar materi")}${gt("z-read","🔊 Dengarkan")}${gt("z-done",mt().read.includes(i)?"✅ Sudah dipelajari":"⭐ Sudah dipelajari · +2")}${gt("z-see","🪐 Lihat 3D")}</div></article>`,lt("#z-list",()=>Ta()),lt("#z-read",()=>Pa(e.name+". "+e.text)),lt("#z-done",()=>{ci("read",i,2),Mt("#z-done").textContent="✅ Sudah dipelajari"}),lt("#z-see",()=>{["rotation","revolution","solar-eclipse","lunar-eclipse"].includes(i)?wa(i):i==="Meteor"?wa("Meteor"):(ui("jelajah"),i!=="solar"&&window.dispatchEvent(new CustomEvent("zepto-focus",{detail:i})))});return}pt.innerHTML=en("📚 Belajar bersama ZEPTO","Baca, dengarkan, lalu amati dalam 3D.")+`<h2>Materi inti · ${mt().read.filter(e=>hs.slice(0,15).some(t=>t.id===e)).length}/15</h2><div class="z-grid">${hs.slice(0,15).map(e=>Or(e.id,e.icon,e.name,mt().read.includes(e.id)?"✅ Sudah dipelajari":"Pelajaran singkat · +2 ⭐")).join("")}</div><h2 class="z-space">Tahukah kamu?</h2><div class="z-grid">${hs.slice(15).map(e=>Or(e.id,e.icon,e.name,"Pengetahuan tambahan")).join("")}</div>`,pt.querySelectorAll("[data-id]").forEach(e=>e.onclick=()=>Ta(e.dataset.id))}function Li(){var e;const i=mt();if(i.attempt){Zl();return}if(!i.profile){pt.innerHTML=en("📝 Kenalan dulu, yuk!","Nama dan kelas digunakan untuk mencatat hasil belajarmu.")+'<form id="z-profile" class="z-panel"><label>Nama siswa<input name="name" maxlength="60" required autocomplete="name" placeholder="Tulis namamu"></label><label>Kelas<input name="className" maxlength="20" value="VI" required></label><p class="z-note">Progres disimpan di browser perangkat ini. Gunakan perangkat dan browser yang sama untuk melanjutkan.</p><button class="z-btn z-primary" type="submit">Simpan dan lanjutkan</button></form>',Mt("#z-profile").onsubmit=t=>{t.preventDefault();const n=new FormData(t.target),s=String(n.get("name")).trim(),a=String(n.get("className")).trim();if(!s||!a)return;const r=mt();r.profile={name:s,className:a},bn(r)&&Li()};return}if(!i.pretest){pt.innerHTML=en("Pretest ZEPTO","Apa yang sudah kamu ketahui tentang Tata Surya?")+`<div class="z-panel"><p>Halo, <strong>${_s(i.profile.name)}</strong>! Kerjakan 10 soal. Tidak ada batas waktu. Jawaban benar tidak ditampilkan selama tes.</p>${gt("z-pre","Mulai pretest →")}</div>`,lt("#z-pre",()=>pd("pre"));return}pt.innerHTML=en("📝 Evaluasi ZEPTO","Lihat perkembangan pengetahuanmu.")+`<div class="z-panel"><h2>${_s(i.profile.name)} · Kelas ${_s(i.profile.className)}</h2><div class="z-stats"><div>Pretest<strong>${i.pretest.score}</strong></div><div>Posttest<strong>${((e=i.posttest)==null?void 0:e.score)??"—"}</strong></div><div>Peningkatan<strong>${i.posttest?`${i.posttest.score-i.pretest.score>=0?"+":""}${i.posttest.score-i.pretest.score}`:"—"}</strong></div></div><p>${i.posttest?i.posttest.score>i.pretest.score?"Hebat! Pengetahuanmu tentang Tata Surya semakin meningkat! 🚀":"Terima kasih sudah belajar! Terus berlatih memahami materi yang belum dikuasai.":"Selesaikan setidaknya satu materi dan jelajahi satu objek 3D sebelum posttest."}</p><div class="z-actions">${i.posttest?gt("z-results","Lihat rincian hasil"):`<button id="z-post" class="z-btn z-primary" ${$d(i)?"":"disabled"}>Mulai posttest</button>`}${gt("z-go-learn","📚 Belajar")}${gt("z-practice","🧠 Kuis latihan")}</div></div>`,lt("#z-post",()=>pd("post")),lt("#z-go-learn",()=>Ta()),lt("#z-practice",()=>ui("bermain")),lt("#z-results",Xh)}function pd(i){const e=mt();i==="post"&&!$d(e)||(e.attempt={type:i,index:0,answers:[],startedAt:new Date().toISOString()},bn(e)&&Zl())}function Zl(){var r;const i=mt(),e=i.attempt;if(!e)return Li();const t=Na[e.index];let n=((r=e.answers[e.index])==null?void 0:r.choice)??null;const s=e.type==="post"?2:0,a=t.options.map((o,l)=>({text:o,index:l}));s&&a.push(...a.splice(0,s)),pt.innerHTML=en((e.type==="pre"?"Pretest":"Posttest")+" ZEPTO",`Soal ${e.index+1} dari ${Na.length}`)+`<div class="z-panel"><progress value="${e.index}" max="${Na.length}"></progress><h2>${t[e.type]}</h2><div class="z-options">${a.map(o=>`<button class="z-answer ${n===o.index?"selected":""}" data-choice="${o.index}">${o.text}</button>`).join("")}</div><p class="z-note">Pilih satu jawaban. Kamu dapat mengubah pilihan sebelum melanjutkan.</p><div class="z-actions">${gt("z-question-audio","🔊 Dengarkan soal")}<button class="z-btn z-primary" id="z-next" ${n===null?"disabled":""}>${e.index===9?"Selesaikan tes":"Soal berikutnya →"}</button></div></div>`,pt.querySelectorAll("[data-choice]").forEach(o=>o.onclick=()=>{n=Number(o.dataset.choice),pt.querySelectorAll("[data-choice]").forEach(c=>c.classList.toggle("selected",c===o)),Mt("#z-next").disabled=!1;const l=mt();l.attempt.answers[e.index]={id:t.id,choice:n,correct:t.answer},bn(l)}),lt("#z-question-audio",()=>Pa(t[e.type]+". "+a.map(o=>o.text).join(". "))),lt("#z-next",()=>{const o=mt();if(!(!o.attempt||n===null))if(o.attempt.index++,o.attempt.index===Na.length){const l={...ff(o.attempt.answers),answers:o.attempt.answers,profile:{...o.profile},date:new Date().toISOString(),startedAt:o.attempt.startedAt};o[e.type==="pre"?"pretest":"posttest"]=l,o.attempt=null,bn(o)&&(e.type==="post"?Xh():Li())}else bn(o)&&Zl()})}function Xh(){var e,t;const i=mt();pt.innerHTML=en("Hasil Belajar ZEPTO",_s(i.profile.name)+" · Kelas "+_s(i.profile.className))+`<div class="z-panel"><div class="z-stats"><div>Pretest<strong>${i.pretest.score}</strong></div><div>Posttest<strong>${((e=i.posttest)==null?void 0:e.score)??"—"}</strong></div><div>Peningkatan<strong>${i.posttest?`${i.posttest.score-i.pretest.score>=0?"+":""}${i.posttest.score-i.pretest.score}`:"—"}</strong></div></div><p>${((t=i.posttest)==null?void 0:t.score)>i.pretest.score?"Hebat! Pengetahuanmu tentang Tata Surya semakin meningkat! 🚀":"Yuk, lanjutkan petualangan dan latihanmu."}</p><div class="z-table-wrap"><table><thead><tr><th>Tes</th><th>Benar</th><th>Salah</th><th>Tanggal</th></tr></thead><tbody>${[["Pretest",i.pretest],["Posttest",i.posttest]].filter(([,n])=>n).map(([n,s])=>`<tr><td>${n}</td><td>${s.correct}</td><td>${s.wrong}</td><td>${new Date(s.date).toLocaleString("id-ID")}</td></tr>`).join("")}</tbody></table></div><div class="z-actions">${gt("z-print","🖨 Cetak hasil")}${gt("z-results-back","← Evaluasi")}</div></div>`,lt("#z-print",()=>window.print()),lt("#z-results-back",Li)}function Cb(){var s,a,r;const i=mt(),e=Vr(),t=Math.max(0,...e.riwayatKuis.map(o=>Math.round(o.skor/o.total*100))),n=[["Materi inti",i.read.filter(o=>hs.slice(0,15).some(l=>l.id===o)).length+"/15"],["Planet dijelajahi",$t.filter(o=>i.explored.includes(o.id)).length+"/8"],["Objek tambahan",gs.filter(o=>!$t.includes(o)&&o.id!=="Sun"&&i.explored.includes(o.id)).length+"/5"],["Misi",i.missions.length+"/7"],["Permainan",i.games.length+"/4"],["Kuis terbaik",t],["Pretest",((s=i.pretest)==null?void 0:s.score)??"—"],["Posttest",((a=i.posttest)==null?void 0:a.score)??"—"]];pt.innerHTML=en("📊 Progres Belajarku",`${_s(((r=i.profile)==null?void 0:r.name)||"Penjelajah")} · ${i.level}`)+`<div class="z-stats z-progress-stats">${n.map(([o,l])=>`<div>${o}<strong>${l}</strong></div>`).join("")}</div><div class="z-panel"><h2>⭐ ${i.stars} Bintang ZEPTO</h2><progress value="${Math.min(i.stars,250)}" max="250"></progress><p class="z-note">Astronaut Pemula: 0 · Penjelajah Planet: 75 · Kapten ZEPTO: 150 · Master Tata Surya: 250 bintang.</p><p>Materi +2 · Objek +3 · Misi +10 · Permainan +10 · Jawaban kuis benar +5.</p><p class="z-note">Hadiah diberikan sekali per pencapaian atau soal agar adil.</p><h2>Lencana</h2><div class="z-badges">${i.badges.length?i.badges.map(o=>`<span>${o}</span>`).join(""):"Mulai menjelajah untuk mendapatkan lencana pertamamu."}</div><div class="z-actions">${gt("z-old","🪪 Paspor & riwayat lama")}${gt("z-eval","📝 Hasil belajar")}</div></div>`,lt("#z-old",()=>ui("paspor")),lt("#z-eval",Li)}function Lb(){pt.innerHTML=en("🚀 Misi ZEPTO","Cari dan ketuk objek yang benar dalam Tata Surya 3D.")+`<div class="z-grid">${Xd.map((i,e)=>Or(i.id,"0"+(e+1),i.name,(mt().missions.includes(i.id)?"✅ Selesai · ":"")+i.text)).join("")}</div><div class="z-actions">${gt("z-old-missions","Buka misi cerita versi awal")}</div>`,pt.querySelectorAll("[data-id]").forEach(i=>i.onclick=()=>{const e=Tl(i.dataset.id),t=mt();t.activeMission=e.id,t.found=[],bn(t),ui("jelajah"),Br(),Pa(e.text)}),lt("#z-old-missions",()=>ui("misiLama"))}const md=[["earth-moon","🌍","Sistem Bumi dan Bulan","Amati Bulan mengelilingi Bumi."],["rotation","🌗","Rotasi Bumi","Satu putaran sekitar 24 jam."],["revolution","☀️","Revolusi Bumi","Satu putaran orbit sekitar 365 hari."],["solar-eclipse","🌘","Gerhana Matahari","Matahari → Bulan → Bumi."],["lunar-eclipse","🌒","Gerhana Bulan","Matahari → Bumi → Bulan."],["compare","📏","Perbandingan Planet 3D","Pilih dua planet dan amati ukurannya."],["Meteor","🌠","Meteor dan Meteoroid","Batuan angkasa memasuki atmosfer."]];function wa(i){var s;if(i==="Meteor"&&ci("explored","Meteor",3),!i){pt.innerHTML=en("🌘 Simulasi ZEPTO","Putar kamera, perbesar, dan amati gerakannya.")+`<div class="z-grid">${md.map(([a,r,o,l])=>Or(a,r,o,l)).join("")}</div><div class="z-actions">${gt("z-old-lab","🔬 Simulasi dan tabel perbandingan versi awal")}</div>`,pt.querySelectorAll("[data-id]").forEach(a=>a.onclick=()=>wa(a.dataset.id)),lt("#z-old-lab",()=>ui("labLama"));return}const e=md.find(a=>a[0]===i);pt.innerHTML=en(e[1]+" "+e[2],e[3])+`<div class="z-panel">${i==="compare"?`<div class="z-actions"><label>Planet pertama<select id="z-compare-a">${$t.map(a=>`<option value="${a.id}" ${a.id==="Earth"?"selected":""}>${a.name}</option>`).join("")}</select></label><label>Planet kedua<select id="z-compare-b">${$t.map(a=>`<option value="${a.id}" ${a.id==="Jupiter"?"selected":""}>${a.name}</option>`).join("")}</select></label></div>`:""}<div class="z-stage" id="z-stage"></div><p id="z-sim-status" aria-live="polite">${((s=hs.find(a=>a.id===i))==null?void 0:s.text)||"Geser untuk memutar kamera. Cubit atau scroll untuk memperbesar."}</p><div class="z-actions">${gt("z-play","▶ Mulai")}${gt("z-pause","⏸ Jeda")}${gt("z-reset","↻ Ulangi")}<label>Kecepatan<select id="z-speed"><option value="0.5">0.5× Lambat</option><option value="1" selected>1× Normal</option><option value="2">2× Cepat</option></select></label>${gt("z-narrate","🔊 Dengarkan")}${gt("z-sims-back","← Simulasi")}</div><p class="z-note">Model pembelajaran: jarak, ukuran, dan waktu disederhanakan.${i==="compare"?" Perbandingan diameter kedua planet mengikuti rasio yang sama.":""}</p><div id="z-comparison"></div></div>`;let t;const n=()=>{var a,r;if(t=jh(Mt("#z-stage"),i,{a:(a=Mt("#z-compare-a"))==null?void 0:a.value,b:(r=Mt("#z-compare-b"))==null?void 0:r.value,onStatus:o=>{Mt("#z-sim-status")&&(Mt("#z-sim-status").textContent=o)}}),i==="compare"){const o=$t.find(c=>c.id===Mt("#z-compare-a").value),l=$t.find(c=>c.id===Mt("#z-compare-b").value);Mt("#z-comparison").innerHTML=`<p>${o.size===l.size?"Kedua pilihan berukuran sama.":`${o.size>l.size?o.name:l.name} lebih besar daripada ${o.size>l.size?l.name:o.name}.`}</p><div class="z-table-wrap"><table><thead><tr><th>Ciri</th><th>${o.name}</th><th>${l.name}</th></tr></thead><tbody>${[["Ukuran (Bumi = 1)","size"],["Suhu","temp"],["Rotasi","rotation"],["Revolusi","revolution"],["Satelit","moons"]].map(([c,d])=>`<tr><td>${c}</td><td>${o[d]}</td><td>${l[d]}</td></tr>`).join("")}</tbody></table></div>`}};n(),lt("#z-play",()=>{var a;return(a=t.play)==null?void 0:a.call(t)}),lt("#z-pause",()=>{var a;return(a=t.pause)==null?void 0:a.call(t)}),lt("#z-reset",()=>{var a;return(a=t.reset)==null?void 0:a.call(t)}),Mt("#z-speed").onchange=a=>{var r;return(r=t.speed)==null?void 0:r.call(t,+a.target.value)},lt("#z-narrate",()=>{var a;return Pa(e[2]+". "+(((a=Mt("#z-sim-status"))==null?void 0:a.textContent)||e[3]))}),lt("#z-sims-back",()=>{ka(),wa()}),["#z-compare-a","#z-compare-b"].forEach(a=>{Mt(a)&&(Mt(a).onchange=n)})}function qh(){const i=[...$t].sort(()=>Math.random()-.5);let e=0,t=0;function n(){if(ka(),e===i.length){t===i.length&&ci("games","guess",10),pt.innerHTML=en("🎉 Tebak Planet selesai",`${t} dari ${i.length} jawaban benar.`)+`<div class="z-panel"><p>${t===i.length?"Semua planet berhasil dikenali!":"Coba lagi untuk mengenali semua planet dan mendapatkan 10 bintang."}</p>${gt("z-guess-retry","Main lagi")}${gt("z-guess-back","← Bermain")}</div>`,lt("#z-guess-retry",qh),lt("#z-guess-back",()=>ui("bermain"));return}const s=i[e],a=[s,...$t.filter(r=>r!==s).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);pt.innerHTML=en("🎮 Tebak Planet 3D",`Planet ${e+1} dari 8 · Amati bentuk dan teksturnya.`)+`<div class="z-panel"><div class="z-stage" id="z-stage"></div><h2>Planet apakah ini?</h2><div class="z-options">${a.map(r=>`<button class="z-answer" data-planet="${r.id}">${r.name}</button>`).join("")}</div><p id="z-guess-feedback" aria-live="polite"></p><button id="z-guess-next" class="z-btn" hidden>Lanjut →</button></div>`,jh(Mt("#z-stage"),s.id,{labels:!1}),pt.querySelectorAll("[data-planet]").forEach(r=>r.onclick=()=>{pt.querySelectorAll("[data-planet]").forEach(l=>l.disabled=!0);const o=r.dataset.planet===s.id;o&&t++,Mt("#z-guess-feedback").textContent=(o?"Betul! ":"Belum tepat. ")+s.name+". "+s.text,Mt("#z-guess-next").hidden=!1}),lt("#z-guess-next",()=>{e++,n()})}n()}function $h(i=!1){if(mt().tutorial&&!i)return;const e=document.querySelector("#z-tutorial");e.showModal(),document.querySelector("#z-understand").onclick=()=>{const t=mt();t.tutorial=!0,bn(t),e.close()}}function Pb(i,e,t,n){const s=new Nh(new Ea(1,0),new fn({color:10391943,roughness:1}),n?100:220),a=new et;for(let M=0;M<s.count;M++){const C=M*2.39996,A=132+M%19/19*28;a.position.set(Math.cos(C)*A,Math.sin(M)*3,Math.sin(C)*A),a.rotation.set(M*.4,M*.7,M),a.scale.setScalar(.6+M%5*.18),a.updateMatrix(),s.setMatrixAt(M,a.matrix)}s.instanceMatrix.needsUpdate=!0,i.add(s);const r=new et;r.position.set(145,0,0),s.add(r);const o=new Gn,l=new st(new Ea(2,1),new fn({color:14085880,emissive:3439774,emissiveIntensity:.35}));o.add(l);const c=new Float32Array(90*3);for(let M=0;M<90;M++){const C=M/90;c[M*3]=C*26,c[M*3+1]=Math.sin(M*9)*(1+C*3),c[M*3+2]=Math.cos(M*8)*(1+C*3)}const d=new _t;d.setAttribute("position",new Wt(c,3));const u=new Oh(d,new Vl({color:8052735,size:1.1,transparent:!0,opacity:.75,depthWrite:!1}));o.add(u),i.add(o);const h=e.moons[0].mesh,m=new Zr(new _t().setFromPoints(Array.from({length:100},(M,C)=>new P(Math.cos(C/100*Math.PI*2)*10+e.planet.position.x,0,Math.sin(C/100*Math.PI*2)*10))),new Fs({color:10734058,transparent:!0,opacity:.35}));e.planetSystem.add(m);const g=document.createElement("canvas");g.width=g.height=128;const _=g.getContext("2d"),f=_.createRadialGradient(64,64,0,64,64,64);f.addColorStop(0,"rgba(255,223,109,.65)"),f.addColorStop(.5,"rgba(255,166,60,.18)"),f.addColorStop(1,"rgba(255,166,60,0)"),_.fillStyle=f,_.fillRect(0,0,128,128);const p=new Fx(new Dh({map:new Xx(g),transparent:!0,blending:xa,depthWrite:!1}));p.scale.set(68,68,1),t.add(p);const y={Sun:{obj:{name:"Sun",planet:t},offset:65},Moon:{obj:{name:"Moon",planet:h},offset:9},Asteroid:{obj:{name:"Asteroid",planet:r},offset:48},Comet:{obj:{name:"Comet",planet:l},offset:45}};function x(M){s.rotation.y=M*4e-5;const C=M*7e-5;o.position.set(Math.cos(C)*230-50,25,Math.sin(C)*165),o.rotation.y=-Math.atan2(o.position.z,o.position.x)}return x(0),{entries:y,targets:[t,h,s,l],key(M){return M===t?"Sun":M===h?"Moon":M===s?"Asteroid":M===l?"Comet":null},tick:x,setVisible(M,C){M==="Moon"&&(h.visible=C,m.visible=C),M==="Asteroid"&&(s.visible=C),M==="Comet"&&(o.visible=C)},visible(M){return M==="Moon"?h.visible:M==="Asteroid"?s.visible:M==="Comet"?o.visible:!0}}}const Ib=""+new URL("phobos-75771210.glb",import.meta.url).href,Db=""+new URL("deimos-5d5da763.glb",import.meta.url).href;function Ub(i){if(i&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function ms(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),s=Math.round(i.g),a=Math.round(i.b),r=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var d=i.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(t==="CSS_RGB")return"rgb("+n+","+s+","+a+")";if(t==="CSS_RGBA")return"rgba("+n+","+s+","+a+","+r+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+s+","+a+"]";if(t==="RGBA_ARRAY")return"["+n+","+s+","+a+","+r+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+s+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+s+",b:"+a+",a:"+r+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var gd=Array.prototype.forEach,ra=Array.prototype.slice,K={BREAK:{},extend:function(e){return this.each(ra.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(t[s])||(e[s]=t[s])}).bind(this))},this),e},defaults:function(e){return this.each(ra.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(e[s])&&(e[s]=t[s])}).bind(this))},this),e},compose:function(){var e=ra.call(arguments);return function(){for(var t=ra.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(gd&&e.forEach&&e.forEach===gd)e.forEach(t,n);else if(e.length===e.length+0){var s=void 0,a=void 0;for(s=0,a=e.length;s<a;s++)if(s in e&&t.call(n,e[s],s)===this.BREAK)return}else for(var r in e)if(t.call(n,e[r],r)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var s=void 0;return function(){var a=this,r=arguments;function o(){s=null,n||e.apply(a,r)}var l=n||!s;clearTimeout(s),s=setTimeout(o,t),l&&e.apply(a,r)}},toArray:function(e){return e.toArray?e.toArray():ra.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},kb=[{litmus:K.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ms},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ms},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ms},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ms}}},{litmus:K.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:K.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:K.isObject,conversions:{RGBA_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)&&K.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)&&K.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],oa=void 0,gr=void 0,fl=function(){gr=!1;var e=arguments.length>1?K.toArray(arguments):arguments[0];return K.each(kb,function(t){if(t.litmus(e))return K.each(t.conversions,function(n,s){if(oa=n.read(e),gr===!1&&oa!==!1)return gr=oa,oa.conversionName=s,oa.conversion=n,K.BREAK}),K.BREAK}),gr},_d=void 0,Fr={hsv_to_rgb:function(e,t,n){var s=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),r=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=[[n,l,r],[o,n,r],[r,n,l],[r,o,n],[l,r,n],[n,r,o]][s];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var s=Math.min(e,t,n),a=Math.max(e,t,n),r=a-s,o=void 0,l=void 0;if(a!==0)l=r/a;else return{h:NaN,s:0,v:0};return e===a?o=(t-n)/r:t===a?o=2+(n-e)/r:o=4+(e-t)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(e,t,n){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,n),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(_d=t*8)|e&~(255<<_d)}},Nb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Sn=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},En=function(){function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),di=function i(e,t,n){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:i(a,t,n)}else{if("value"in s)return s.value;var r=s.get;return r===void 0?void 0:r.call(n)}},fi=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},pi=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},Nt=function(){function i(){if(Sn(this,i),this.__state=fl.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return En(i,[{key:"toString",value:function(){return ms(this)}},{key:"toHexString",value:function(){return ms(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Jl(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Nt.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(Nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function Ql(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Nt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Nt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=Fr.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")K.extend(i.__state,Fr.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};Nt.recalculateHSV=function(i){var e=Fr.rgb_to_hsv(i.r,i.g,i.b);K.extend(i.__state,{s:e.s,v:e.v}),K.isNaN(e.h)?K.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};Nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Jl(Nt.prototype,"r",2);Jl(Nt.prototype,"g",1);Jl(Nt.prototype,"b",0);Ql(Nt.prototype,"h");Ql(Nt.prototype,"s");Ql(Nt.prototype,"v");Object.defineProperty(Nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Fr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ui=function(){function i(e,t){Sn(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return En(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Ob={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Yh={};K.each(Ob,function(i,e){K.each(i,function(t){Yh[t]=e})});var Bb=/(\d+(\.\d+)?)px/;function Tn(i){if(i==="0"||K.isUndefined(i))return 0;var e=i.match(Bb);return K.isNull(e)?0:parseFloat(e[1])}var V={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var s=n,a=t;K.isUndefined(a)&&(a=!0),K.isUndefined(s)&&(s=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,s){var a=n||{},r=Yh[t];if(!r)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;K.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}K.defaults(o,s),e.dispatchEvent(o)},bind:function(e,t,n,s){var a=s||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n),V},unbind:function(e,t,n,s){var a=s||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n),V},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return V},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),s=n.indexOf(t);s!==-1&&(n.splice(s,1),e.className=n.join(" "))}else e.className=void 0;return V},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Tn(t["border-left-width"])+Tn(t["border-right-width"])+Tn(t["padding-left"])+Tn(t["padding-right"])+Tn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Tn(t["border-top-width"])+Tn(t["border-bottom-width"])+Tn(t["padding-top"])+Tn(t["padding-bottom"])+Tn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Kh=function(i){fi(e,i);function e(t,n){Sn(this,e);var s=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function r(){a.setValue(!a.__prev)}return V.bind(s.__checkbox,"change",r,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return En(e,[{key:"setValue",value:function(n){var s=di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ui),Fb=function(i){fi(e,i);function e(t,n,s){Sn(this,e);var a=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s,o=a;if(a.__select=document.createElement("select"),K.isArray(r)){var l={};K.each(r,function(c){l[c]=c}),r=l}return K.each(r,function(c,d){var u=document.createElement("option");u.innerHTML=d,u.setAttribute("value",c),o.__select.appendChild(u)}),a.updateDisplay(),V.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return En(e,[{key:"setValue",value:function(n){var s=di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return V.isActive(this.__select)?this:(this.__select.value=this.getValue(),di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Ui),zb=function(i){fi(e,i);function e(t,n){Sn(this,e);var s=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;function r(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),V.bind(s.__input,"keyup",r),V.bind(s.__input,"change",r),V.bind(s.__input,"blur",o),V.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return En(e,[{key:"updateDisplay",value:function(){return V.isActive(this.__input)||(this.__input.value=this.getValue()),di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ui);function vd(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Zh=function(i){fi(e,i);function e(t,n,s){Sn(this,e);var a=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s||{};return a.__min=r.min,a.__max=r.max,a.__step=r.step,K.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=vd(a.__impliedStep),a}return En(e,[{key:"setValue",value:function(n){var s=n;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=vd(n),this}}]),e}(Ui);function Hb(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var zr=function(i){fi(e,i);function e(t,n,s){Sn(this,e);var a=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,s));a.__truncationSuspended=!1;var r=a,o=void 0;function l(){var g=parseFloat(r.__input.value);K.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function d(){c()}function u(g){var _=o-g.clientY;r.setValue(r.getValue()+_*r.__impliedStep),o=g.clientY}function h(){V.unbind(window,"mousemove",u),V.unbind(window,"mouseup",h),c()}function m(g){V.bind(window,"mousemove",u),V.bind(window,"mouseup",h),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),V.bind(a.__input,"change",l),V.bind(a.__input,"blur",d),V.bind(a.__input,"mousedown",m),V.bind(a.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return En(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Hb(this.getValue(),this.__precision),di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Zh);function xd(i,e,t,n,s){return n+(s-n)*((i-e)/(t-e))}var pl=function(i){fi(e,i);function e(t,n,s,a,r){Sn(this,e);var o=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:s,max:a,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),V.bind(o.__background,"mousedown",c),V.bind(o.__background,"touchstart",h),V.addClass(o.__background,"slider"),V.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),V.bind(window,"mousemove",d),V.bind(window,"mouseup",u),d(_)}function d(_){_.preventDefault();var f=l.__background.getBoundingClientRect();return l.setValue(xd(_.clientX,f.left,f.right,l.__min,l.__max)),!1}function u(){V.unbind(window,"mousemove",d),V.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(_){_.touches.length===1&&(V.bind(window,"touchmove",m),V.bind(window,"touchend",g),m(_))}function m(_){var f=_.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(xd(f,p.left,p.right,l.__min,l.__max))}function g(){V.unbind(window,"touchmove",m),V.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return En(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",di(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Zh),Jh=function(i){fi(e,i);function e(t,n,s){Sn(this,e);var a=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=a;return a.__button=document.createElement("div"),a.__button.innerHTML=s===void 0?"Fire":s,V.bind(a.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),V.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return En(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Ui),ml=function(i){fi(e,i);function e(t,n){Sn(this,e);var s=pi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));s.__color=new Nt(s.getValue()),s.__temp=new Nt(0);var a=s;s.domElement=document.createElement("div"),V.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",V.bind(s.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),V.bind(s.__input,"blur",u),V.bind(s.__selector,"mousedown",function(){V.addClass(this,"drag").bind(window,"mouseup",function(){V.removeClass(a.__selector,"drag")})}),V.bind(s.__selector,"touchstart",function(){V.addClass(this,"drag").bind(window,"touchend",function(){V.removeClass(a.__selector,"drag")})});var r=document.createElement("div");K.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),K.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),K.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),K.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),K.extend(r.style,{width:"100%",height:"100%",background:"none"}),bd(r,"top","rgba(0,0,0,0)","#000"),K.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Gb(s.__hue_field),K.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),V.bind(s.__saturation_field,"mousedown",o),V.bind(s.__saturation_field,"touchstart",o),V.bind(s.__field_knob,"mousedown",o),V.bind(s.__field_knob,"touchstart",o),V.bind(s.__hue_field,"mousedown",l),V.bind(s.__hue_field,"touchstart",l);function o(_){m(_),V.bind(window,"mousemove",m),V.bind(window,"touchmove",m),V.bind(window,"mouseup",c),V.bind(window,"touchend",c)}function l(_){g(_),V.bind(window,"mousemove",g),V.bind(window,"touchmove",g),V.bind(window,"mouseup",d),V.bind(window,"touchend",d)}function c(){V.unbind(window,"mousemove",m),V.unbind(window,"touchmove",m),V.unbind(window,"mouseup",c),V.unbind(window,"touchend",c),h()}function d(){V.unbind(window,"mousemove",g),V.unbind(window,"touchmove",g),V.unbind(window,"mouseup",d),V.unbind(window,"touchend",d),h()}function u(){var _=fl(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}s.__saturation_field.appendChild(r),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var f=a.__saturation_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,y=p.clientX,x=p.clientY,M=(y-f.left)/(f.right-f.left),C=1-(x-f.top)/(f.bottom-f.top);return C>1?C=1:C<0&&(C=0),M>1?M=1:M<0&&(M=0),a.__color.v=C,a.__color.s=M,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var f=a.__hue_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,y=p.clientY,x=1-(y-f.top)/(f.bottom-f.top);return x>1?x=1:x<0&&(x=0),a.__color.h=x*360,a.setValue(a.__color.toOriginal()),!1}return s}return En(e,[{key:"updateDisplay",value:function(){var n=fl(this.getValue());if(n!==!1){var s=!1;K.each(Nt.COMPONENTS,function(o){if(!K.isUndefined(n[o])&&!K.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return s=!0,{}},this),s&&K.extend(this.__color.__state,n)}K.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,r=255-a;K.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,bd(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),K.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),e}(Ui),Vb=["-moz-","-o-","-webkit-","-ms-",""];function bd(i,e,t,n){i.style.background="",K.each(Vb,function(s){i.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function Gb(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Wb={load:function(e,t){var n=t||document,s=n.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,n.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var n=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var a=n.getElementsByTagName("head")[0];try{a.appendChild(s)}catch{}}},jb=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Xb=function(e,t){var n=e[t];return K.isArray(arguments[2])||K.isObject(arguments[2])?new Fb(e,t,arguments[2]):K.isNumber(n)?K.isNumber(arguments[2])&&K.isNumber(arguments[3])?K.isNumber(arguments[4])?new pl(e,t,arguments[2],arguments[3],arguments[4]):new pl(e,t,arguments[2],arguments[3]):K.isNumber(arguments[4])?new zr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new zr(e,t,{min:arguments[2],max:arguments[3]}):K.isString(n)?new zb(e,t):K.isFunction(n)?new Jh(e,t,""):K.isBoolean(n)?new Kh(e,t):null};function qb(i){setTimeout(i,1e3/60)}var $b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||qb,Yb=function(){function i(){Sn(this,i),this.backgroundElement=document.createElement("div"),K.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),V.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),K.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;V.bind(this.backgroundElement,"click",function(){e.hide()})}return En(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),K.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",V.unbind(t.domElement,"webkitTransitionEnd",s),V.unbind(t.domElement,"transitionend",s),V.unbind(t.domElement,"oTransitionEnd",s)};V.bind(this.domElement,"webkitTransitionEnd",n),V.bind(this.domElement,"transitionend",n),V.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-V.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-V.getHeight(this.domElement)/2+"px"}}]),i}(),Kb=Ub(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Wb.inject(Kb);var yd="dg",Md=72,Sd=20,Aa="Default",ca=function(){try{return!!window.localStorage}catch{return!1}}(),ma=void 0,Ed=!0,us=void 0,Go=!1,Qh=[],ct=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),V.addClass(this.domElement,yd),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=K.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=K.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),K.isUndefined(n.load)?n.load={preset:Aa}:n.preset&&(n.load.preset=n.preset),K.isUndefined(n.parent)&&n.hideable&&Qh.push(this),n.resizable=K.isUndefined(n.parent)&&n.resizable,n.autoPlace&&K.isUndefined(n.scrollable)&&(n.scrollable=!0);var s=ca&&localStorage.getItem(ds(this,"isLocal"))==="true",a=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(h){t.parent?t.getRoot().preset=h:n.load.preset=h,ey(this),t.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,vl(t,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,r&&(r.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?V.addClass(t.__ul,i.CLASS_CLOSED):V.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return s},set:function(h){ca&&(s=h,h?V.bind(window,"unload",a):V.unbind(window,"unload",a),localStorage.setItem(ds(t,"isLocal"),h))}}}),K.isUndefined(n.parent)){if(this.closed=n.closed||!1,V.addClass(this.domElement,i.CLASS_MAIN),V.makeSelectable(this.domElement,!1),ca&&s){t.useLocalStorage=!0;var o=localStorage.getItem(ds(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,V.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(V.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(V.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),V.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);V.addClass(l,"controller-name"),r=ec(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};V.addClass(this.__ul,i.CLASS_CLOSED),V.addClass(r,"title"),V.bind(r,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(K.isUndefined(n.parent)&&(Ed&&(us=document.createElement("div"),V.addClass(us,yd),V.addClass(us,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(us),Ed=!1),us.appendChild(this.domElement),V.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||vl(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},V.bind(window,"resize",this.__resizeHandler),V.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),V.bind(this.__ul,"transitionend",this.__resizeHandler),V.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Qb(this),a=function(){ca&&localStorage.getItem(ds(t,"isLocal"))==="true"&&localStorage.setItem(ds(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function d(){var u=t.getRoot();u.width+=1,K.defer(function(){u.width-=1})}n.parent||d()};ct.toggleHide=function(){Go=!Go,K.each(Qh,function(i){i.domElement.style.display=Go?"none":""})};ct.CLASS_AUTO_PLACE="a";ct.CLASS_AUTO_PLACE_CONTAINER="ac";ct.CLASS_MAIN="main";ct.CLASS_CONTROLLER_ROW="cr";ct.CLASS_TOO_TALL="taller-than-window";ct.CLASS_CLOSED="closed";ct.CLASS_CLOSE_BUTTON="close-button";ct.CLASS_CLOSE_TOP="close-top";ct.CLASS_CLOSE_BOTTOM="close-bottom";ct.CLASS_DRAG="drag";ct.DEFAULT_WIDTH=245;ct.TEXT_CLOSED="Close Controls";ct.TEXT_OPEN="Open Controls";ct._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Md||i.keyCode===Md)&&ct.toggleHide()};V.bind(window,"keydown",ct._keydownHandler,!1);K.extend(ct.prototype,{add:function(e,t){return ga(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return ga(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;K.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&us.removeChild(this.domElement);var e=this;K.each(this.__folders,function(t){e.removeFolder(t)}),V.unbind(window,"keydown",ct._keydownHandler,!1),Td(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ct(t);this.__folders[e]=n;var s=ec(this,n.domElement);return V.addClass(s,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Td(e);var t=this;K.each(e.__folders,function(n){e.removeFolder(n)}),K.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=V.getOffset(e.__ul).top,n=0;K.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(n+=V.getHeight(s))}),window.innerHeight-t-Sd<n?(V.addClass(e.domElement,ct.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Sd+"px"):(V.removeClass(e.domElement,ct.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:K.debounce(function(){this.onResize()},50),remember:function(){if(K.isUndefined(ma)&&(ma=new Yb,ma.domElement.innerHTML=jb),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Jb(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&vl(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_r(this)),e.folders={},K.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_r(this),gl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Aa]=_r(this,!0)),this.load.remembered[e]=_r(this),this.preset=e,_l(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K.each(this.__controllers,function(t){this.getRoot().load.remembered?ef(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),K.each(this.__folders,function(t){t.revert(t)}),e||gl(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&tf(this.__listening)},updateDisplay:function(){K.each(this.__controllers,function(e){e.updateDisplay()}),K.each(this.__folders,function(e){e.updateDisplay()})}});function ec(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Td(i){V.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&V.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function gl(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Zb(i,e,t){if(t.__li=e,t.__gui=i,K.extend(t,{options:function(r){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),ga(i,t.object,t.property,{before:o,factoryArgs:[K.toArray(arguments)]})}if(K.isArray(r)||K.isObject(r)){var l=t.__li.nextElementSibling;return t.remove(),ga(i,t.object,t.property,{before:l,factoryArgs:[r]})}},name:function(r){return t.__li.firstElementChild.firstElementChild.innerHTML=r,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof pl){var n=new zr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});K.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var r=t[a],o=n[a];t[a]=n[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),r.apply(t,l)}}),V.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof zr){var s=function(r){if(K.isNumber(t.__min)&&K.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=ga(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return r};t.min=K.compose(s,t.min),t.max=K.compose(s,t.max)}else t instanceof Kh?(V.bind(e,"click",function(){V.fakeEvent(t.__checkbox,"click")}),V.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof Jh?(V.bind(e,"click",function(){V.fakeEvent(t.__button,"click")}),V.bind(e,"mouseover",function(){V.addClass(t.__button,"hover")}),V.bind(e,"mouseout",function(){V.removeClass(t.__button,"hover")})):t instanceof ml&&(V.addClass(e,"color"),t.updateDisplay=K.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=K.compose(function(a){return i.getRoot().__preset_select&&t.isModified()&&gl(i.getRoot(),!0),a},t.setValue)}function ef(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var s=t.__rememberedObjectIndecesToControllers[n];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[n]=s),s[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,r=void 0;if(a[i.preset])r=a[i.preset];else if(a[Aa])r=a[Aa];else return;if(r[n]&&r[n][e.property]!==void 0){var o=r[n][e.property];e.initialValue=o,e.setValue(o)}}}}function ga(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(n.color)s=new ml(e,t);else{var a=[e,t].concat(n.factoryArgs);s=Xb.apply(i,a)}n.before instanceof Ui&&(n.before=n.before.__li),ef(i,s),V.addClass(s.domElement,"c");var r=document.createElement("span");V.addClass(r,"property-name"),r.innerHTML=s.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(s.domElement);var l=ec(i,o,n.before);return V.addClass(l,ct.CLASS_CONTROLLER_ROW),s instanceof ml?V.addClass(l,"color"):V.addClass(l,Nb(s.getValue())),Zb(i,l,s),i.__controllers.push(s),s}function ds(i,e){return document.location.href+"."+e}function _l(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function wd(i,e){e.style.display=i.useLocalStorage?"block":"none"}function Jb(i){var e=i.__save_row=document.createElement("li");V.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),V.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",V.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",V.addClass(n,"button"),V.addClass(n,"save");var s=document.createElement("span");s.innerHTML="New",V.addClass(s,"button"),V.addClass(s,"save-as");var a=document.createElement("span");a.innerHTML="Revert",V.addClass(a,"button"),V.addClass(a,"revert");var r=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?K.each(i.load.remembered,function(u,h){_l(i,h,h===i.preset)}):_l(i,Aa,!1),V.bind(r,"change",function(){for(var u=0;u<i.__preset_select.length;u++)i.__preset_select[u].innerHTML=i.__preset_select[u].value;i.preset=this.value}),e.appendChild(r),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(a),ca){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(ds(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),wd(i,o),V.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,wd(i,o)})}var d=document.getElementById("dg-new-constructor");V.bind(d,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&ma.hide()}),V.bind(t,"click",function(){d.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),ma.show(),d.focus(),d.select()}),V.bind(n,"click",function(){i.save()}),V.bind(s,"click",function(){var u=prompt("Enter a new preset name.");u&&i.saveAs(u)}),V.bind(a,"click",function(){i.revert()})}function Qb(i){var e=void 0;i.__resize_handle=document.createElement("div"),K.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),i.width+=e-a.clientX,i.onResize(),e=a.clientX,!1}function n(){V.removeClass(i.__closeButton,ct.CLASS_DRAG),V.unbind(window,"mousemove",t),V.unbind(window,"mouseup",n)}function s(a){return a.preventDefault(),e=a.clientX,V.addClass(i.__closeButton,ct.CLASS_DRAG),V.bind(window,"mousemove",t),V.bind(window,"mouseup",n),!1}V.bind(i.__resize_handle,"mousedown",s),V.bind(i.__closeButton,"mousedown",s),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function vl(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function _r(i,e){var t={};return K.each(i.__rememberedObjects,function(n,s){var a={},r=i.__rememberedObjectIndecesToControllers[s];K.each(r,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[s]=a}),t}function ey(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function tf(i){i.length!==0&&$b.call(window,function(){tf(i)}),K.each(i,function(e){e.updateDisplay()})}var ty=ct;const tc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ny=new $r(-1,1,1,-1,0,1);class iy extends _t{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const sy=new iy;class nc{constructor(e){this._mesh=new st(sy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ny)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ay extends Vs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ma.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends Vs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class ry extends Vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ay(tc),this.copyPass.material.blending=yn,this.clock=new fb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(r instanceof Ad?n=!0:r instanceof ry&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ly={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ks extends Vs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(a,r,{type:qt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Dt(a,r,{type:qt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Dt(a,r,{type:qt});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),r=Math.round(r/2)}const o=ly;this.highPassUniforms=Ma.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=tc;this.copyUniforms=Ma.clone(d.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:xa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Jt,this.fsQuad=new nc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ks.BlurDirectionX=new fe(1,0);ks.BlurDirectionY=new fe(0,1);class cy extends Vs{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}function Rd(i,e){if(e===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sl||e===ch){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===sl)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class uy extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new my(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ry(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=pa.extractUrlBase(e);r=pa.resolveURL(c,this.path)}else r=pa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new zh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(d){t(d),a.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===nf){try{r[$e.KHR_BINARY_GLTF]=new Cy(e)}catch(u){s&&s(u);return}a=JSON.parse(r[$e.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vy(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const u=a.extensionsUsed[d],h=a.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:r[u]=new fy;break;case $e.KHR_DRACO_MESH_COMPRESSION:r[u]=new Ly(a,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:r[u]=new Py;break;case $e.KHR_MESH_QUANTIZATION:r[u]=new Iy;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function dy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let c;const d=new Ae(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ot);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vh(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $l(d),c.distance=u;break;case"spot":c=new cb(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class fy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){const s=[];e.color=new Ae(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Ot),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,ht))}return Promise.all(s)}}class py{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class my{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(a)}}class gy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class _y{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ht)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class vy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class xy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Ot),Promise.all(a)}}class by{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class yy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Ot),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,ht)),Promise.all(a)}}class My{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class Sy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class Ey{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class Ty{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ay{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(d*u);return r.decodeGltfBuffer(new Uint8Array(m),d,u,h,s.mode,s.filter),m})})}else return null}}class Ry{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,m=[];for(const g of u){const _=new Ve,f=new P,p=new Rn,y=new P(1,1,1),x=new Nh(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(f,p,y));for(const M in l)if(M==="_COLOR_0"){const C=l[M];x.instanceColor=new cl(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);et.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),m.push(x)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const nf="glTF",la=12,Cd={JSON:1313821514,BIN:5130562};class Cy{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-la,a=new DataView(e,la);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const l=a.getUint32(r,!0);if(r+=4,l===Cd.JSON){const c=new Uint8Array(e,la+r,o);this.content=n.decode(c)}else if(l===Cd.BIN){const c=la+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ly{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const d in r){const u=xl[d]||d.toLowerCase();o[u]=r[d]}for(const d in e.attributes){const u=xl[d]||d.toLowerCase();if(r[d]!==void 0){const h=n.accessors[e.attributes[d]],m=Ms[h.componentType];c[u]=m.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",a).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(m){for(const g in m.attributes){const _=m.attributes[g],f=l[g];f!==void 0&&(_.normalized=f)}u(m)},o,c,Ot,h)})})}}class Py{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Iy{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class sf extends Ua{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(n-t)/d,h=u*u,m=h*u,g=e*c,_=g-c,f=-2*m+3*h,p=m-h,y=1-f,x=p-h+u;for(let M=0;M!==o;M++){const C=r[_+M+o],A=r[_+M+l]*d,R=r[g+M+o],B=r[g+M]*d;a[M]=y*C+x*A+f*R+p*B}return a}}const Dy=new Rn;class Uy extends sf{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return Dy.fromArray(a).normalize().toArray(a),a}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ld={9728:It,9729:Zt,9984:il,9985:th,9986:Mr,9987:Ri},Pd={33071:un,33648:Pr,10497:Rs},Wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ky={CUBICSPLINE:void 0,LINEAR:Ls,STEP:ba},jo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ny(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),i.DefaultMaterial}function bi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Oy(i,e,t){let n=!1,s=!1,a=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;r.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(h)}if(a){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function By(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fy(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):e=i.indices+":"+Xo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xo(i.targets[n]);return e}function Xo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hy=new Ve;class Vy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,a=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&a<98?this.textureLoader=new Xl(this.options.manager):this.textureLoader=new hb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return bi(a,o,s),ni(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,d]of r.children.entries())a(d,o.children[c])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(pa.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=Wo[s.type],o=Ms[s.componentType],l=s.normalized===!0,c=new o(s.count*r);return Promise.resolve(new Wt(c,r,l))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Wo[s.type],c=Ms[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,f;if(m&&m!==u){const p=Math.floor(h/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(y);x||(_=new c(o,p*m,s.count*m/d),x=new Ih(_,m/d),t.cache.add(y,x)),f=new Sa(x,l,h%m/d,g)}else o===null?_=new c(s.count*l):_=new c(o,h,s.count*l),f=new Wt(_,l,g);if(s.sparse!==void 0){const p=Wo.SCALAR,y=Ms[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,C=new y(r[1],x,s.sparse.count*p),A=new c(r[2],M,s.sparse.count*l);o!==null&&(f=new Wt(f.array.slice(),f.itemSize,f.normalized));for(let R=0,B=C.length;R<B;R++){const b=C[R];if(f.setX(b,A[R*l]),l>=2&&f.setY(b,A[R*l+1]),l>=3&&f.setZ(b,A[R*l+2]),l>=4&&f.setW(b,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=r.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(a.samplers||{})[r.sampler]||{};return d.magFilter=Ld[h.magFilter]||Zt,d.minFilter=Ld[h.minFilter]||Ri,d.wrapS=Pd[h.wrapS]||Rs,d.wrapT=Pd[h.wrapT]||Rs,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(h),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const f=new kt(_);f.needsUpdate=!0,h(f)}),t.load(pa.resolveURL(u,a.path),g,void 0,m)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=r.mimeType||zy(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Vl,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fs,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},l=a.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=s[$e.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Ot),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ht)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Gt);const d=a.alphaMode||jo.OPAQUE;if(d===jo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===jo.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Jt&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new fe(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==Jt&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Jt){const u=a.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],Ot)}return a.emissiveTexture!==void 0&&r!==Jt&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,ht)),Promise.all(c).then(function(){const u=new r(o);return a.name&&(u.name=a.name),ni(u,a),t.associations.set(u,{materials:e}),a.extensions&&bi(s,u,a),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Id(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=Fy(c),u=s[d];if(u)r.push(u.promise);else{let h;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?h=a(c):h=Id(new _t,c,t),s[d]={primitive:c,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const d=r[l].material===void 0?Ny(this.cache):this.getDependency("material",r[l].material);o.push(d)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let m=0,g=d.length;m<g;m++){const _=d[m],f=r[m];let p;const y=c[m];if(f.mode===ln.TRIANGLES||f.mode===ln.TRIANGLE_STRIP||f.mode===ln.TRIANGLE_FAN||f.mode===void 0)p=a.isSkinnedMesh===!0?new Hx(_,y):new st(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===ln.TRIANGLE_STRIP?p.geometry=Rd(p.geometry,ch):f.mode===ln.TRIANGLE_FAN&&(p.geometry=Rd(p.geometry,sl));else if(f.mode===ln.LINES)p=new jx(_,y);else if(f.mode===ln.LINE_STRIP)p=new Kr(_,y);else if(f.mode===ln.LINE_LOOP)p=new Zr(_,y);else if(f.mode===ln.POINTS)p=new Oh(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&By(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),ni(p,a),f.extensions&&bi(s,p,f),t.assignFinalMaterial(p),u.push(p)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return a.extensions&&bi(s,u[0],a),u[0];const h=new Gn;a.extensions&&bi(s,h,a),t.associations.set(h,{meshes:e});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(fh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $r(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],l=[];for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u){o.push(u);const h=new Ve;a!==null&&h.fromArray(a.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hl(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const m=s.channels[u],g=s.samplers[m.sampler],_=m.target,f=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),d.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],m=u[1],g=u[2],_=u[3],f=u[4],p=[];for(let y=0,x=h.length;y<x;y++){const M=h[y],C=m[y],A=g[y],R=_[y],B=f[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=n._createAnimationTracks(M,C,A,R,B);if(b)for(let E=0;E<b.length;E++)p.push(b[E])}return new tb(a,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)r.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(h,Hy)});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(a.isBone===!0?d=new kh:c.length>1?d=new Gn:c.length===1?d=c[0]:d=new et,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(a.name&&(d.userData.name=a.name,d.name=r),ni(d,a),a.extensions&&bi(n,d,a),a.matrix!==void 0){const u=new Ve;u.fromArray(a.matrix),d.applyMatrix4(u)}else a.translation!==void 0&&d.position.fromArray(a.translation),a.rotation!==void 0&&d.quaternion.fromArray(a.rotation),a.scale!==void 0&&d.scale.fromArray(a.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Gn;n.name&&(a.name=s.createUniqueName(n.name)),ni(a,n),n.extensions&&bi(t,a,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(s.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)a.add(l[d]);const c=d=>{const u=new Map;for(const[h,m]of s.associations)(h instanceof sn||h instanceof kt)&&u.set(h,m);return d.traverse(h=>{const m=s.associations.get(h);m!=null&&u.set(h,m)}),u};return s.associations=c(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,l=[];ei[a.path]===ei.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(ei[a.path]){case ei.weights:c=Ds;break;case ei.rotation:c=Ci;break;case ei.position:case ei.scale:c=Us;break;default:switch(n.itemSize){case 1:c=Ds;break;case 2:case 3:default:c=Us;break}break}const d=s.interpolation!==void 0?ky[s.interpolation]:Ls,u=this._getArrayFromAccessor(n);for(let h=0,m=l.length;h<m;h++){const g=new c(l[h]+"."+ei[a.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bl(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ci?Uy:sf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gy(i,e,t){const n=e.attributes,s=new qn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const d=bl(Ms[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new P,l=new P;for(let c=0,d=a.length;c<d;c++){const u=a[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const _=bl(Ms[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new Cn;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Id(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){i.setAttribute(o,l)})}for(const r in n){const o=xl[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return Qe.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ni(i,e),Gy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Oy(i,e.targets,t):i})}class ai extends Vs{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ae(1,1,1),this.hiddenEdgeColor=new Ae(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256);const a=Math.round(this.resolution.x/this.downSampleRatio),r=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Dt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Lh,this.depthMaterial.side=Gt,this.depthMaterial.depthPacking=dh,this.depthMaterial.blending=yn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Gt,this.prepareMaskMaterial.fragmentShader=d(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Dt(this.resolution.x,this.resolution.y,{type:qt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Dt(a,r,{type:qt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Dt(a,r,{type:qt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Dt(Math.round(a/2),Math.round(r/2),{type:qt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Dt(a,r,{type:qt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Dt(Math.round(a/2),Math.round(r/2),{type:qt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(a,r),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a/2),Math.round(r/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=tc;this.copyUniforms=Ma.clone(c.uniforms),this.materialCopy=new Tt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.fsQuad=new nc(null),this.tempPulseColor1=new Ae,this.tempPulseColor2=new Ae,this.textureMatrix=new Ve;function d(u,h){const m=h.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,m+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(s){s.isMesh&&(e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e))}for(let s=0;s<this.selectedObjects.length;s++)this.selectedObjects[s].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function s(r){r.isMesh&&n.push(r)}for(let r=0;r<this.selectedObjects.length;r++)this.selectedObjects[r].traverse(s);function a(r){if(r.isMesh||r.isSprite){let o=!1;for(let l=0;l<n.length;l++)if(n[l].id===r.id){o=!0;break}if(o===!1){const l=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,l)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(a)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,s,a){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,a&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ai.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ai.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ai.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ai.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Tt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new fe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new Tt({uniforms:{maskTexture:{value:null},texSize:{value:new fe(.5,.5)},visibleEdgeColor:{value:new P(1,1,1)},hiddenEdgeColor:{value:new P(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new Tt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new Tt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:xa,depthTest:!1,depthWrite:!1,transparent:!0})}}ai.BlurDirectionX=new fe(1,0);ai.BlurDirectionY=new fe(0,1);const Wy=""+new URL("1-56423a2a.jpg",import.meta.url).href,qo=""+new URL("2-7887ba5b.jpg",import.meta.url).href,jy=""+new URL("3-d416039e.jpg",import.meta.url).href,Xy=""+new URL("4-65e36d4d.jpg",import.meta.url).href,qy=""+new URL("sun-0a3182c6.jpg",import.meta.url).href,$y=""+new URL("mercurymap-7dcb6a51.jpg",import.meta.url).href,Yy=""+new URL("mercurybump-1b3eb45b.jpg",import.meta.url).href,Dd=""+new URL("venusmap-11f97521.jpg",import.meta.url).href,Ky=""+new URL("venus_atmosphere-2cba2e0e.jpg",import.meta.url).href,Zy=""+new URL("earth_daymap-855c57d9.jpg",import.meta.url).href,Jy=""+new URL("earth_nightmap-17350462.jpg",import.meta.url).href,Qy=""+new URL("earth_atmosphere-36b03b01.jpg",import.meta.url).href,eM=""+new URL("moonmap-b0a2f57c.jpg",import.meta.url).href,tM=""+new URL("moonbump-fd4a8511.jpg",import.meta.url).href,nM=""+new URL("marsmap-34ffa876.jpg",import.meta.url).href,iM=""+new URL("marsbump-dbf776bf.jpg",import.meta.url).href,sM=""+new URL("jupiter-37c5ee13.jpg",import.meta.url).href,aM=""+new URL("jupiterIo-a1ab9c10.jpg",import.meta.url).href,rM=""+new URL("jupiterEuropa-39fd3c21.jpg",import.meta.url).href,oM=""+new URL("jupiterGanymede-4f777e55.jpg",import.meta.url).href,lM=""+new URL("jupiterCallisto-25ce669c.jpg",import.meta.url).href,cM=""+new URL("saturnmap-d0fe54db.jpg",import.meta.url).href,uM=""+new URL("saturn_ring-00207137.png",import.meta.url).href,dM=""+new URL("uranus-b3c407c7.jpg",import.meta.url).href,hM=""+new URL("uranus_ring-ec5fa257.png",import.meta.url).href,fM=""+new URL("neptune-8e23832f.jpg",import.meta.url).href,pM=""+new URL("plutomap-84c9aba4.jpg",import.meta.url).href;let Ud=!1;function mM(i){if(Ud)return;Ud=!0,console.log("Membuat scene");const e=new Ph;console.log("Membuat kamera perspektif");var t=new Vt(45,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(-220,260,460),console.log("Membuat renderer");const n=new zl({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,pn().grafis==="hemat"?1:1.5)),n.setSize(window.innerWidth,window.innerHeight),(i||document.body).appendChild(n.domElement),n.toneMapping=Qd,console.log("Membuat kontrol orbit");const s=new Wh(t,n.domElement);s.enableDamping=!0,s.dampingFactor=.75,s.screenSpacePanning=!1,console.log("Menyiapkan texture loader");const a=new ob,r=new Xl,o=new oy(n);o.addPass(new cy(e,t));const l=pn(),c=l.grafis==="hemat",d=!!l.kurangiAnimasi,u=new ai(new fe(window.innerWidth,window.innerHeight),e,t);u.edgeStrength=3,u.edgeGlow=1,u.visibleEdgeColor.set(16777215),u.hiddenEdgeColor.set(1640965),d&&(u.pulsePeriod=0),o.addPass(u);const h=new ks(new fe(window.innerWidth,window.innerHeight),c?.5:1,.4,.85);h.threshold=1,h.radius=.9,o.addPass(h),console.log("Menambahkan cahaya ambient");var m=new Gh(16777215,1.3);e.add(m),e.background=a.load([jy,Wy,qo,qo,Xy,qo]);const g=new ty({autoPlace:!1}),_=document.getElementById("gui-container");_.appendChild(g.domElement),_.style.display="none";const f={accelerationOrbit:d?0:1,acceleration:d?0:1,sunIntensity:1.9};g.add(f,"accelerationOrbit",0,10).name("Kecepatan Orbit").onChange(v=>{const w=document.getElementById("kid-speed-slider");w&&(w.value=v)}),g.add(f,"acceleration",0,10).name("Kecepatan Rotasi").onChange(v=>{}),g.add(f,"sunIntensity",1,10).name("Intensitas Matahari").onChange(v=>{H.emissiveIntensity=v});const p=document.getElementById("kid-btn-lanjutan");p&&p.addEventListener("click",()=>{const v=_.style.display!=="none";_.style.display=v?"none":"block"});let y=f.accelerationOrbit;const x=document.getElementById("kid-btn-jeda");x&&x.addEventListener("click",()=>{f.accelerationOrbit>0?(y=f.accelerationOrbit,f.accelerationOrbit=0,x.textContent="▶️ Lanjutkan"):(f.accelerationOrbit=y||1,x.textContent="⏸️ Jeda Orbit")});const M=document.getElementById("kid-speed-slider");M&&M.addEventListener("input",()=>{f.accelerationOrbit=Number(M.value),y=f.accelerationOrbit,x&&(x.textContent=f.accelerationOrbit>0?"⏸️ Jeda Orbit":"▶️ Lanjutkan")});let C=!0;document.getElementById("planet-labels").style.display="block";const A=document.getElementById("kid-btn-nama");A&&A.addEventListener("click",()=>{C=!C,A.classList.toggle("kid-btn-active",C),document.getElementById("planet-labels").style.display=C?"block":"none"});const R=document.getElementById("kid-btn-reset");R&&R.addEventListener("click",()=>{Pe(),we()});const B=new Sb,b=new fe;function E(v){v.preventDefault(),b.x=v.clientX/window.innerWidth*2-1,b.y=-(v.clientY/window.innerHeight)*2+1}let N="navigation",z=null,W=!1,I=new P,F;function j(v){var D;if(document.getElementById("solar-system-screen").classList.contains("active-screen")){v.preventDefault(),b.x=v.clientX/window.innerWidth*2-1,b.y=-(v.clientY/window.innerHeight)*2+1,B.setFromCamera(b,t);var w=B.intersectObjects(Oi,!1);if(w.length>0){const O=(D=w.find(Q=>Q.object.visible&&(!Q.object.parent||Q.object.parent.visible)))==null?void 0:D.object;if(!O)return;const U=$(O);U&&(N="direct",Z(U))}}}function Z(v){z=v,Ne=!1,Object.values(Te).forEach(D=>{const O=D.obj.planet.material;O!=null&&O.color&&(O.userData.originalColor||(O.userData.originalColor=O.color.clone()),O.color.copy(O.userData.originalColor).multiplyScalar(D.obj===v?1:.65))}),qe(),f.accelerationOrbit=0;const w=new P;z.planet.getWorldPosition(w),s.target.copy(w),t.lookAt(w),I.copy(w).add(t.position.clone().sub(w).normalize().multiplyScalar(F)),W=!0,ve(v.name)}function $(v){const w=ie.key(v);return w?(F=ie.entries[w].offset,ie.entries[w].obj):v.material===ee.planet.material?(F=10,ee):v===_e.Atmosphere||v===_e.planet?(F=25,_e):v===re.Atmosphere||v===re.planet?(F=25,re):v.material===me.planet.material?(F=15,me):v.material===Me.planet.material?(F=50,Me):v.material===Ie.planet.material?(F=50,Ie):v.material===J.planet.material?(F=25,J):v.material===He.planet.material?(F=20,He):v.material===L.planet.material?(F=10,L):null}let q=null;const se={Mercury:"☿️",Venus:"♀️",Earth:"🌍",Mars:"🔴",Jupiter:"🟠",Saturn:"💍",Uranus:"🔵",Neptune:"🔷",Pluto:"⚪"},oe={Mercury:["Planet paling dekat dengan Matahari","Tidak punya udara sama sekali","Satu hari di sana sangat panjang"],Venus:["Planet terpanas di tata surya","Awannya sangat tebal","Berputar terbalik dibanding planet lain"],Earth:["Rumah kita, satu-satunya planet berkehidupan","Punya satu bulan yang menemani","7 dari 10 bagiannya adalah air"],Mars:["Dijuluki Planet Merah","Punya gunung tertinggi di tata surya","Punya 2 bulan kecil"],Jupiter:["Planet terbesar di tata surya","Punya badai raksasa berwarna merah","Punya banyak sekali bulan"],Saturn:["Terkenal dengan cincin indahnya","Cincinnya terbuat dari es dan batu","Planet terbesar kedua"],Uranus:["Berputar hampir menyamping","Berwarna biru kehijauan pucat","Sangat dingin karena jauh dari Matahari"],Neptune:["Planet terjauh dari Matahari","Anginnya paling kencang di tata surya","Warnanya biru tua yang indah"],Pluto:["Dulu disebut planet ke-9","Sekarang disebut planet katai","Sangat kecil dan sangat jauh"]};function ve(v){const w=gs.find(Ue=>Ue.id===v);if(!ue[v])return;window.dispatchEvent(new CustomEvent("zepto-selected",{detail:{key:v,source:N}}));var D=document.getElementById("planetInfo");q=v;const O=ue[v],U=Y[v]||v,Q=se[v]||"🪐",le=w?[w.text,...w.order?[`Planet ke-${w.order} dari Matahari.`,`Rotasi: ${w.rotation}. Revolusi: ${w.revolution}.`]:[]]:oe[v]||[],be=Ws().includes(v),Se=pn().narasi;D.querySelector(".planet-info-content").innerHTML=`
    <span class="close-btn" onclick="closeInfo()">&times;</span>
    <button id="favorite-btn" class="favorite-btn ${be?"favorited":""}" title="Tandai favorit">${be?"★":"☆"}</button>
    <div class="planet-card-icon">${Q}</div>
    <h2 id="planetName">${U}</h2>
    <ul class="planet-fact-list">
      ${le.map(Ue=>`<li>${Ue}</li>`).join("")}
    </ul>
    <div class="planet-card-actions">
      ${Se?'<button id="speak-btn" class="speak-btn" title="Dengarkan penjelasan">🔊 Dengarkan</button>':""}
      <button id="z-object-learned" class="selengkapnya-btn">✅ Sudah Dipelajari</button><button id="selengkapnya-btn" class="selengkapnya-btn">📖 Selengkapnya</button>
    </div>
    <div class="planet-card-detail" id="planet-card-detail" style="display:none;">
      <p id="planetDetails">Radius: ${O.radius}
Kemiringan: ${O.tilt}
Rotasi: ${O.rotation}
Orbit: ${O.orbit}
Jarak dari Matahari: ${O.distance}
Jumlah Bulan: ${O.moons}
Info: ${O.info}</p>
    </div>
  `,D.style.display="block",Ee(),w!=null&&w.order&&Pf(v),ri("klik"),document.getElementById("z-object-learned").onclick=()=>{ci("read",v,2),document.getElementById("z-object-learned").textContent="✅ Tersimpan"},xe.aktif&&!xe.dijeda&&w&&Pa(w.name+". "+w.text),document.getElementById("favorite-btn").addEventListener("click",Ni);const Le=document.getElementById("speak-btn");Le&&Le.addEventListener("click",Re),document.getElementById("selengkapnya-btn").addEventListener("click",()=>{const Ue=document.getElementById("planet-card-detail"),Fe=Ue.style.display!=="none";Ue.style.display=Fe?"none":"block",document.getElementById("selengkapnya-btn").textContent=Fe?"📖 Selengkapnya":"📕 Sembunyikan"})}const X=Ts.isNativePlatform();let te=!1,ge=0;async function Re(){var Q;if(!q)return;const v=ue[q],w=((Q=gs.find(le=>le.id===q))==null?void 0:Q.text)||v.info,D=document.getElementById("speak-btn"),O=++ge,U=()=>{O===ge&&Ei("planet",!1)};if(X){if(te){await Ee();return}try{te=!0,Ei("planet",!0),D&&D.classList.add("speaking"),await wr.speak({text:w,lang:"id-ID",rate:.95,category:"ambient"})}catch(le){console.error("Gagal memutar suara (native TTS):",le)}finally{U(),te=!1,D&&D.classList.remove("speaking")}}else{if(!window.speechSynthesis){console.warn("Browser ini tidak mendukung fitur suara (speechSynthesis).");return}if(window.speechSynthesis.speaking){Ee();return}const le=new SpeechSynthesisUtterance(w);le.lang="id-ID",le.rate=.95,Ei("planet",!0),le.onstart=()=>D&&D.classList.add("speaking"),le.onend=le.onerror=()=>{U(),D&&D.classList.remove("speaking")},window.speechSynthesis.speak(le)}}async function Ee(){ge++,Ei("planet",!1);const v=document.getElementById("speak-btn");if(X){try{await wr.stop()}catch{}te=!1}else window.speechSynthesis&&window.speechSynthesis.speaking&&window.speechSynthesis.cancel();v&&v.classList.remove("speaking")}let Ne=!1,Be=new P(-220,260,460);function Pe(){var v=document.getElementById("planetInfo");v.style.display="none",z=null,Object.values(Te).forEach(w=>{const D=w.obj.planet.material;D!=null&&D.userData.originalColor&&D.color.copy(D.userData.originalColor)}),f.accelerationOrbit=Number(M==null?void 0:M.value)||1,Ne=!0,s.target.set(0,0,0),Ee()}window.closeInfo=Pe;function qe(){var v=document.getElementById("planetInfo");v.style.display="none",Ee(),f.accelerationOrbit=1}let H;const xt=697/40,Ce=new Wn(xt,32,20);H=new fn({emissive:16775311,emissiveMap:r.load(qy),emissiveIntensity:f.sunIntensity});const ke=new st(Ce,H);e.add(ke);const ye=new $l(16646099,1200,400,1.4);e.add(ye);function Ye(v,w,D,O,U,Q,le,be,Se){let Le;U instanceof sn?Le=U:Q?Le=new Bo({map:r.load(U),bumpMap:r.load(Q),bumpScale:.7}):Le=new Bo({map:r.load(U)});const Ue=v,Fe=new Wn(w,32,20),at=new st(Fe,Le),Bt=new et,ut=new Gn;ut.add(at);let Yt,Je;at.position.x=D,at.rotation.z=O*Math.PI/180;const $s=new $x(0,0,D,D,0,2*Math.PI,!1,0).getPoints(100),ft=new _t().setFromPoints($s),In=new Fs({color:16777215,transparent:!0,opacity:.22}),Bi=new Zr(ft,In);if(Bi.rotation.x=Math.PI/2,Bi.userData.isOrbit=!0,ut.add(Bi),le){const Ft=new Jr(le.innerRadius,le.outerRadius,30),mn=new fn({map:r.load(le.texture),side:Gt});Je=new st(Ft,mn),ut.add(Je),Je.position.x=D,Je.rotation.x=-.5*Math.PI,Je.rotation.y=-O*Math.PI/180}if(be){const Ft=new Wn(w+.1,32,20),mn=new Bo({map:r.load(be),transparent:!0,opacity:.4,depthTest:!0,depthWrite:!1});Yt=new st(Ft,mn),Yt.rotation.z=.41,at.add(Yt)}return Se&&Se.forEach(Ft=>{let mn;Ft.bump?mn=new fn({map:r.load(Ft.texture),bumpMap:r.load(Ft.bump),bumpScale:.5}):mn=new fn({map:r.load(Ft.texture)});const Lt=new Wn(Ft.size,32,20),gn=new st(Lt,mn),Ys=w*1.5;gn.position.set(Ys,0,0),ut.add(gn),Ft.mesh=gn}),Bt.add(ut),e.add(Bt),{name:Ue,planet:at,planet3d:Bt,Atmosphere:Yt,moons:Se,planetSystem:ut,Ring:Je}}function ze(v,w,D,O){new uy().load(v,function(Q){const le=Q.scene;le.position.set(w,0,0),le.scale.set(D,D,D),e.add(le),O&&O(le)},void 0,function(Q){console.error("An error happened",Q)})}const T=[],S=new Tt({uniforms:{dayTexture:{type:"t",value:r.load(Zy)},nightTexture:{type:"t",value:r.load(Jy)},sunPosition:{type:"v3",value:ke.position}},vertexShader:`
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    uniform vec3 sunPosition;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
      vSunDirection = normalize(sunPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;

    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    void main() {
      float intensity = max(dot(vNormal, vSunDirection), 0.0);
      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv)* 0.2;
      gl_FragColor = mix(nightColor, dayColor, intensity);
    }
  `}),G=[{size:1.6,texture:eM,bump:tM,orbitSpeed:.001*f.accelerationOrbit,orbitRadius:10}],ae=[{modelPath:Ib,scale:.1,orbitRadius:5,orbitSpeed:.002*f.accelerationOrbit,position:100,mesh:null},{modelPath:Db,scale:.1,orbitRadius:9,orbitSpeed:5e-4*f.accelerationOrbit,position:120,mesh:null}],ne=[{size:1.6,texture:aM,orbitRadius:20,orbitSpeed:5e-4*f.accelerationOrbit},{size:1.4,texture:rM,orbitRadius:24,orbitSpeed:25e-5*f.accelerationOrbit},{size:2,texture:oM,orbitRadius:28,orbitSpeed:125e-6*f.accelerationOrbit},{size:1.7,texture:lM,orbitRadius:32,orbitSpeed:6e-5*f.accelerationOrbit}],ee=new Ye("Mercury",2.4,40,0,$y,Yy),_e=new Ye("Venus",6.1,65,3,Dd,Dd,null,Ky),re=new Ye("Earth",6.4,90,23,S,null,null,Qy,G),me=new Ye("Mars",3.4,115,25,nM,iM);ae.forEach(v=>{ze(v.modelPath,v.position,v.scale,function(w){v.mesh=w,me.planetSystem.add(v.mesh),v.mesh.traverse(function(D){D.isMesh&&(D.castShadow=!0,D.receiveShadow=!0)})})});const Me=new Ye("Jupiter",69/4,200,3,sM,null,null,null,ne),Ie=new Ye("Saturn",58/4,270,26,cM,null,{innerRadius:18,outerRadius:29,texture:uM}),J=new Ye("Uranus",25/4,320,82,dM,null,{innerRadius:6,outerRadius:8,texture:hM}),He=new Ye("Neptune",24/4,340,28,fM),L=new Ye("Pluto",1,350,57,pM);[ee,_e,re,me,Me,Ie,J,He,L].forEach((v,w)=>v.planet3d.rotation.y=w*.78);const Y={Mercury:"Merkurius",Venus:"Venus",Earth:"Bumi",Mars:"Mars",Jupiter:"Yupiter",Saturn:"Saturnus",Uranus:"Uranus",Neptune:"Neptunus",Pluto:"Pluto"},ue={Mercury:{radius:"2.439,7 km",tilt:"0,034°",rotation:"58,6 hari Bumi",orbit:"88 hari Bumi",distance:"57,9 juta km",moons:"0",info:"Planet terkecil di tata surya kita dan paling dekat dengan Matahari."},Venus:{radius:"6.051,8 km",tilt:"177,4°",rotation:"243 hari Bumi",orbit:"225 hari Bumi",distance:"108,2 juta km",moons:"0",info:"Planet kedua dari Matahari, dikenal karena suhunya yang sangat panas dan atmosfernya yang tebal."},Earth:{radius:"6.371 km",tilt:"23,5°",rotation:"24 jam",orbit:"365 hari",distance:"150 juta km",moons:"1 (Bulan)",info:"Planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan."},Mars:{radius:"3.389,5 km",tilt:"25,19°",rotation:"1,03 hari Bumi",orbit:"687 hari Bumi",distance:"227,9 juta km",moons:"2 (Phobos dan Deimos)",info:"Dikenal sebagai Planet Merah, terkenal karena warnanya yang kemerahan dan potensinya untuk dihuni manusia di masa depan."},Jupiter:{radius:"69.911 km",tilt:"3,13°",rotation:"9,9 jam",orbit:"12 tahun Bumi",distance:"778,5 juta km",moons:"95 bulan yang diketahui (Ganymede, Callisto, Europa, dan Io adalah 4 yang terbesar)",info:"Planet terbesar di tata surya kita, dikenal dengan Bintik Merah Raksasanya."},Saturn:{radius:"58.232 km",tilt:"26,73°",rotation:"10,7 jam",orbit:"29,5 tahun Bumi",distance:"1,4 miliar km",moons:"146 bulan yang diketahui",info:"Terkenal dengan sistem cincinnya yang luas, planet terbesar kedua di tata surya kita."},Uranus:{radius:"25.362 km",tilt:"97,77°",rotation:"17,2 jam",orbit:"84 tahun Bumi",distance:"2,9 miliar km",moons:"27 bulan yang diketahui",info:"Dikenal karena arah rotasinya yang unik (miring ke samping) dan warna birunya yang pucat."},Neptune:{radius:"24.622 km",tilt:"28,32°",rotation:"16,1 jam",orbit:"165 tahun Bumi",distance:"4,5 miliar km",moons:"14 bulan yang diketahui",info:"Planet terjauh dari Matahari di tata surya kita, dikenal dengan warna birunya yang pekat."},Pluto:{radius:"1.188,3 km",tilt:"122,53°",rotation:"6,4 hari Bumi",orbit:"248 tahun Bumi",distance:"5,9 miliar km",moons:"5 (Charon, Styx, Nix, Kerberos, Hydra)",info:"Awalnya diklasifikasikan sebagai planet kesembilan, Pluto kini dianggap sebagai planet katai (dwarf planet)."}},ie=Pb(e,re,ke,c);for(const v of gs)Y[v.id]=v.name,ue[v.id]?(ue[v.id].info=v.text,v.moons&&(ue[v.id].moons=v.moons)):ue[v.id]={radius:"Model disederhanakan",tilt:"—",rotation:"—",orbit:"—",distance:"—",moons:"—",info:v.text};const Te={...ie.entries,Mercury:{obj:ee,offset:10},Venus:{obj:_e,offset:25},Earth:{obj:re,offset:25},Mars:{obj:me,offset:15},Jupiter:{obj:Me,offset:50},Saturn:{obj:Ie,offset:50},Uranus:{obj:J,offset:25},Neptune:{obj:He,offset:20},Pluto:{obj:L,offset:10}};function Oe(v){N="navigation",ie.setVisible(v,!0);const w=document.querySelector(`[data-visible="${v}"]`);w&&(w.checked=!0);const D=Te[v];D&&(F=D.offset,Z(D.obj))}const We=["Sun","Mercury","Venus","Earth","Moon","Mars","Asteroid","Jupiter","Saturn","Uranus","Neptune","Comet"];let xe={aktif:!1,dijeda:!1,index:0,timerId:null};const he=9e3;function k(){xe.aktif=!0,xe.dijeda=!1,xe.index=0,Ke(!0),ce()}function ce(){if(!xe.aktif||xe.index>=We.length){xe.aktif&&we();return}const v=We[xe.index];Oe(v);const w=document.getElementById("tour-status");w&&(w.textContent=`Objek ${xe.index+1} dari ${We.length}: ${Y[v]}`),clearTimeout(xe.timerId),xe.dijeda||(xe.timerId=setTimeout(()=>{xe.index++,ce()},he))}function de(){xe.dijeda=!xe.dijeda;const v=document.getElementById("tour-jeda");v&&(v.textContent=xe.dijeda?"▶️ Lanjut":"⏸️ Jeda"),xe.dijeda?clearTimeout(xe.timerId):ce()}function De(){clearTimeout(xe.timerId),xe.index++,xe.dijeda=!1;const v=document.getElementById("tour-jeda");v&&(v.textContent="⏸️ Jeda"),ce()}function we(){La(),xe.aktif=!1,clearTimeout(xe.timerId),Ke(!1)}function Ke(v){const w=document.getElementById("tour-bar");w&&(w.style.display=v?"flex":"none");const D=document.getElementById("kid-btn-tur");D&&(D.style.display=v?"none":"inline-flex")}window.addEventListener("zepto-leave-solar",()=>{we(),Ee()}),window.addEventListener("zepto-focus",v=>Oe(v.detail)),document.querySelectorAll("[data-focus]").forEach(v=>v.onclick=()=>Oe(v.dataset.focus)),document.getElementById("z-complete").onclick=()=>{Pe(),document.getElementById("z-explore-tools").open=!1},document.querySelectorAll("[data-visible]").forEach(v=>v.onchange=()=>{v.dataset.visible==="orbits"?e.traverse(w=>{w.userData.isOrbit&&(w.visible=v.checked)}):ie.setVisible(v.dataset.visible,v.checked)}),document.getElementById("tour-sebelumnya").onclick=()=>{clearTimeout(xe.timerId),xe.index=Math.max(0,xe.index-1),ce()};const Ze=document.getElementById("kid-btn-tur");Ze&&Ze.addEventListener("click",k);const vt=document.getElementById("tour-jeda");vt&&vt.addEventListener("click",de);const Rt=document.getElementById("tour-berikutnya");Rt&&Rt.addEventListener("click",De);const tt=document.getElementById("tour-berhenti");tt&&tt.addEventListener("click",we);const Ct={};(function(){const w=document.getElementById("planet-labels");w&&Object.keys(Te).forEach(D=>{const O=document.createElement("div");O.className="planet-label",O.textContent=Y[D]||D,O.setAttribute("role","button"),O.tabIndex=0,O.onclick=()=>Oe(D),O.onkeydown=U=>{U.key==="Enter"&&Oe(D)},w.appendChild(O),Ct[D]=O})})();function an(){C&&Object.keys(Te).forEach(v=>{const w=Ct[v],D=Te[v].obj;if(!w||!D||!D.planet)return;const O=new P;if(D.planet.getWorldPosition(O),O.project(t),!ie.visible(v)||O.z>1||O.z<-1){w.style.display="none";return}const U=(O.x*.5+.5)*window.innerWidth,Q=(-O.y*.5+.5)*window.innerHeight;w.style.display="block",w.style.transform=`translate(${U}px, ${Q}px)`})}(function(){const w=document.getElementById("planet-search"),D=document.getElementById("search-suggestions");if(!w||!D)return;const O=Object.keys(Y);function U(Q){const le=Q.trim().toLowerCase();if(D.innerHTML="",!le){D.classList.remove("show");return}const be=O.filter(Se=>Y[Se].toLowerCase().includes(le));if(be.length===0){D.classList.remove("show");return}be.forEach(Se=>{const Le=document.createElement("div");Le.className="search-suggestion-item",Le.textContent=Y[Se],Le.addEventListener("click",()=>{Oe(Se),w.value="",D.classList.remove("show")}),D.appendChild(Le)}),D.classList.add("show")}w.addEventListener("input",()=>U(w.value)),w.addEventListener("keydown",Q=>{if(Q.key==="Enter"){const le=w.value.trim().toLowerCase(),be=O.find(Se=>Y[Se].toLowerCase().startsWith(le));be&&(Oe(be),w.value="",D.classList.remove("show"))}}),document.addEventListener("click",Q=>{Q.target!==w&&D.classList.remove("show")})})();const Gs="planetFavorit";function Ws(){try{const v=localStorage.getItem(Gs);return v?JSON.parse(v):[]}catch{return[]}}function ki(v){try{localStorage.setItem(Gs,JSON.stringify(v))}catch{}}function js(){const v=document.getElementById("favorites-bar");if(!v)return;const w=Ws();v.innerHTML="",w.forEach(D=>{if(!Y[D])return;const O=document.createElement("button");O.className="favorite-chip",O.textContent=`⭐ ${Y[D]}`,O.addEventListener("click",()=>Oe(D)),v.appendChild(O)})}function Ni(){if(!q)return;let v=Ws();const w=document.getElementById("favorite-btn");v.includes(q)?(v=v.filter(D=>D!==q),w&&(w.textContent="☆",w.classList.remove("favorited"))):(v.push(q),w&&(w.textContent="★",w.classList.add("favorited"))),ki(v),js()}js();const Oi=[ee.planet,_e.planet,_e.Atmosphere,re.planet,re.Atmosphere,...ie.targets,me.planet,Me.planet,Ie.planet,J.planet,He.planet,L.planet];n.shadowMap.enabled=!c,ye.castShadow=!0,ye.shadow.mapSize.width=1024,ye.shadow.mapSize.height=1024,ye.shadow.camera.near=10,ye.shadow.camera.far=20,re.planet.castShadow=!0,re.planet.receiveShadow=!0,re.Atmosphere.castShadow=!0,re.Atmosphere.receiveShadow=!0,re.moons.forEach(v=>{v.mesh.castShadow=!0,v.mesh.receiveShadow=!0}),ee.planet.castShadow=!0,ee.planet.receiveShadow=!0,_e.planet.castShadow=!0,_e.planet.receiveShadow=!0,_e.Atmosphere.receiveShadow=!0,me.planet.castShadow=!0,me.planet.receiveShadow=!0,Me.planet.castShadow=!0,Me.planet.receiveShadow=!0,Me.moons.forEach(v=>{v.mesh.castShadow=!0,v.mesh.receiveShadow=!0}),Ie.planet.castShadow=!0,Ie.planet.receiveShadow=!0,Ie.Ring.receiveShadow=!0,J.planet.receiveShadow=!0,He.planet.receiveShadow=!0,L.planet.receiveShadow=!0;let Xs=performance.now(),mi=0;function qs(v=performance.now()){const w=Math.min(v-Xs,50);if(Xs=v,document.hidden||!document.getElementById("solar-system-screen").classList.contains("active-screen")){requestAnimationFrame(qs);return}mi+=w*f.accelerationOrbit,ie.tick(mi),ke.rotateY(.001*f.acceleration*w/16.667),ee.planet.rotateY(.001*f.acceleration*w/16.667),ee.planet3d.rotateY(.004*f.accelerationOrbit*w/16.667),_e.planet.rotateY(5e-4*f.acceleration*w/16.667),_e.Atmosphere.rotateY(5e-4*f.acceleration*w/16.667),_e.planet3d.rotateY(6e-4*f.accelerationOrbit*w/16.667),re.planet.rotateY(.005*f.acceleration*w/16.667),re.Atmosphere.rotateY(.001*f.acceleration*w/16.667),re.planet3d.rotateY(.001*f.accelerationOrbit*w/16.667),me.planet.rotateY(.01*f.acceleration*w/16.667),me.planet3d.rotateY(7e-4*f.accelerationOrbit*w/16.667),Me.planet.rotateY(.005*f.acceleration*w/16.667),Me.planet3d.rotateY(3e-4*f.accelerationOrbit*w/16.667),Ie.planet.rotateY(.01*f.acceleration*w/16.667),Ie.planet3d.rotateY(2e-4*f.accelerationOrbit*w/16.667),J.planet.rotateY(.005*f.acceleration*w/16.667),J.planet3d.rotateY(1e-4*f.accelerationOrbit*w/16.667),He.planet.rotateY(.005*f.acceleration*w/16.667),He.planet3d.rotateY(8e-5*f.accelerationOrbit*w/16.667),L.planet.rotateY(.001*f.acceleration*w/16.667),L.planet3d.rotateY(6e-5*f.accelerationOrbit*w/16.667),re.moons&&re.moons.forEach(U=>{const Q=mi,le=5*Math.PI/180,be=re.planet.position.x+U.orbitRadius*Math.cos(Q*U.orbitSpeed),Se=U.orbitRadius*Math.sin(Q*U.orbitSpeed)*Math.sin(le),Le=re.planet.position.z+U.orbitRadius*Math.sin(Q*U.orbitSpeed)*Math.cos(le);U.mesh.position.set(be,Se,Le),U.mesh.rotateY(.01)}),ae&&ae.forEach(U=>{if(U.mesh){const Q=mi,le=me.planet.position.x+U.orbitRadius*Math.cos(Q*U.orbitSpeed),be=U.orbitRadius*Math.sin(Q*U.orbitSpeed),Se=me.planet.position.z+U.orbitRadius*Math.sin(Q*U.orbitSpeed);U.mesh.position.set(le,be,Se),U.mesh.rotateY(.001)}}),Me.moons&&Me.moons.forEach(U=>{const Q=mi,le=Me.planet.position.x+U.orbitRadius*Math.cos(Q*U.orbitSpeed),be=U.orbitRadius*Math.sin(Q*U.orbitSpeed),Se=Me.planet.position.z+U.orbitRadius*Math.sin(Q*U.orbitSpeed);U.mesh.position.set(le,be,Se),U.mesh.rotateY(.01)}),T.forEach(U=>{U.rotation.y+=1e-4,U.position.x=U.position.x*Math.cos(1e-4*f.accelerationOrbit)+U.position.z*Math.sin(1e-4*f.accelerationOrbit),U.position.z=U.position.z*Math.cos(1e-4*f.accelerationOrbit)-U.position.x*Math.sin(1e-4*f.accelerationOrbit)}),B.setFromCamera(b,t);var D=B.intersectObjects(Oi,!1);if(u.selectedObjects=[],D.length>0){const U=D[0].object;U===re.Atmosphere?u.selectedObjects=[re.planet]:U===_e.Atmosphere?u.selectedObjects=[_e.planet]:u.selectedObjects=[U]}W?(t.position.lerp(I,1-Math.exp(-w/240)),t.position.distanceTo(I)<1&&(W=!1)):Ne&&(t.position.lerp(Be,1-Math.exp(-w/240)),t.position.distanceTo(Be)<1&&(Ne=!1)),s.update(),an(),requestAnimationFrame(qs);const O=document.getElementById("solar-system-screen");(!O||O.classList.contains("active-screen"))&&o.render()}qs(),n.domElement.addEventListener("pointermove",E);let Pn=null;n.domElement.addEventListener("pointerdown",v=>{Pn={x:v.clientX,y:v.clientY,id:v.pointerId}}),n.domElement.addEventListener("pointerup",v=>{Pn&&v.pointerId===Pn.id&&Math.hypot(v.clientX-Pn.x,v.clientY-Pn.y)<7&&j(v),Pn=null}),n.domElement.addEventListener("pointercancel",()=>Pn=null),n.domElement.addEventListener("pointermove",v=>{B.setFromCamera(b,t);const w=B.intersectObjects(Oi,!1).find(U=>{var Q;return U.object.visible&&((Q=U.object.parent)==null?void 0:Q.visible)}),D=document.getElementById("z-hover-label");if(!w){D.hidden=!0;return}const O=$(w.object);D.hidden=!O,O&&(D.textContent=Y[O.name],D.style.left=Math.min(v.clientX+14,innerWidth-150)+"px",D.style.top=v.clientY+14+"px")}),window.addEventListener("resize",function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)})}const $o=[{id:"kenaliBumi",judul:"Mengenali Bumi",ikon:"🌍",tujuan:"Kenali rumah kita, planet Bumi, lebih dekat.",petunjuk:"Buka Jelajah Planet, sentuh Bumi, lalu baca 3 fakta singkatnya.",aktivitas:"Sentuh planet Bumi di Jelajah Planet dan dengarkan penjelasannya.",pertanyaan:"Planet apa yang menjadi tempat tinggal kita?",pilihan:["Mars","Bumi","Venus"],jawaban:1},{id:"temukanSaturnus",judul:"Menemukan Saturnus",ikon:"🪐",tujuan:"Temukan planet dengan cincin paling indah di tata surya.",petunjuk:"Cari planet yang punya cincin besar mengelilinginya.",aktivitas:"Sentuh planet Saturnus di Jelajah Planet.",pertanyaan:"Planet apa yang terkenal dengan cincinnya?",pilihan:["Saturnus","Bumi","Merkurius"],jawaban:0},{id:"bandingkanPlanet",judul:"Membandingkan Dua Planet",ikon:"⚖️",tujuan:"Pelajari mana planet yang lebih besar.",petunjuk:"Buka Laboratorium Antariksa, pilih menu Perbandingan Ukuran.",aktivitas:"Bandingkan Bumi dengan Yupiter di Laboratorium Antariksa.",pertanyaan:"Mana yang lebih besar, Bumi atau Yupiter?",pilihan:["Bumi","Yupiter","Sama besar"],jawaban:1},{id:"urutkanPlanet",judul:"Mengurutkan Planet",ikon:"🔢",tujuan:"Pelajari urutan planet dari yang terdekat ke Matahari.",petunjuk:"Coba permainan Susun Planet di Zona Bermain.",aktivitas:"Selesaikan permainan Susun Planet dengan urutan yang benar.",pertanyaan:"Planet apa yang PALING dekat dengan Matahari?",pilihan:["Bumi","Merkurius","Neptunus"],jawaban:1}];function kd(i){e();function e(){const a=Vr();i.innerHTML=`
      <div class="hub-header">
        <h1>🚀 Misi Antariksa</h1>
        <p class="hub-sub">${Df()} dari ${$o.length} misi selesai</p>
      </div>
      <div class="mission-grid">
        ${$o.map(r=>t(r,a)).join("")}
      </div>
    `,$o.forEach(r=>{const o=i.querySelector(`[data-misi="${r.id}"]`);o&&o.addEventListener("click",()=>n(r))})}function t(a,r){const o=!!r.misiSelesai[a.id];return`
      <button class="mission-card ${o?"mission-done":""}" data-misi="${a.id}">
        <span class="mission-icon">${a.ikon}</span>
        <span class="mission-title">${a.judul}</span>
        <span class="mission-status">${o?"✅ Misi Selesai":"⭐ Mulai Misi"}</span>
      </button>
    `}function n(a){i.innerHTML=`
      <div class="mission-detail">
        <button class="mission-back" id="misi-kembali">⬅ Semua Misi</button>
        <div class="mission-detail-icon">${a.ikon}</div>
        <h2>${a.judul}</h2>
        <p class="mission-goal"><strong>Tujuan:</strong> ${a.tujuan}</p>
        <p class="mission-hint">💡 <strong>Petunjuk:</strong> ${a.petunjuk}</p>
        <p class="mission-activity">🎯 <strong>Aktivitas:</strong> ${a.aktivitas}</p>

        <div class="mission-question-box">
          <p class="mission-question">${a.pertanyaan}</p>
          <div class="mission-options">
            ${a.pilihan.map((o,l)=>`<button class="mission-option" data-i="${l}">${o}</button>`).join("")}
          </div>
          <p class="mission-feedback" id="misi-feedback"></p>
        </div>
      </div>
    `,i.querySelector("#misi-kembali").addEventListener("click",e);const r=i.querySelectorAll(".mission-option");r.forEach(o=>{o.addEventListener("click",()=>{const l=Number(o.dataset.i),c=i.querySelector("#misi-feedback");if(r.forEach(d=>d.disabled=!0),l===a.jawaban){o.classList.add("mission-correct"),c.textContent="🎉 Tepat sekali! Lencana misi berhasil didapat!",c.classList.add("mission-feedback-benar");const{baruSelesai:d}=If(a.id);d&&setTimeout(()=>{s(a)},500)}else o.classList.add("mission-salah"),c.textContent="Belum tepat, yuk coba lagi lain waktu. Kamu tetap hebat! 💪",c.classList.add("mission-feedback-salah")})})}function s(a){const r=document.createElement("div");r.className="stamp-overlay",r.innerHTML=`
      <div class="stamp-badge">
        <div class="stamp-icon">${a.ikon}</div>
        <div class="stamp-text">Misi Selesai!</div>
        <div class="stamp-sub">${a.judul}</div>
      </div>
    `,document.body.appendChild(r),setTimeout(()=>r.classList.add("stamp-show"),20),setTimeout(()=>{r.classList.remove("stamp-show"),setTimeout(()=>r.remove(),400)},1800)}}const gM=[{q:"Planet apa yang paling dekat dengan Matahari?",opsi:["Venus","Merkurius","Bumi","Mars"],benar:1,bahas:"Merkurius adalah planet pertama, paling dekat dengan Matahari."},{q:'Planet mana yang dijuluki "Planet Merah"?',opsi:["Yupiter","Saturnus","Mars","Venus"],benar:2,bahas:"Mars terlihat kemerahan karena banyak mengandung besi oksida (karat) di permukaannya."},{q:"Apa planet terbesar di tata surya kita?",opsi:["Saturnus","Uranus","Bumi","Yupiter"],benar:3,bahas:"Jupiter adalah planet terbesar di Tata Surya, jauh lebih besar daripada Bumi."},{q:"Planet mana yang paling terkenal karena cincinnya?",opsi:["Saturnus","Neptunus","Merkurius","Mars"],benar:0,bahas:"Cincin Saturnus terbuat dari jutaan kepingan es dan batu."},{q:"Ada berapa planet di tata surya kita?",opsi:["7","8","9","10"],benar:1,bahas:"Ada 8 planet resmi: Merkurius, Venus, Bumi, Mars, Yupiter, Saturnus, Uranus, dan Neptunus."},{q:"Planet apa satu-satunya yang diketahui memiliki kehidupan?",opsi:["Mars","Venus","Bumi","Yupiter"],benar:2,bahas:"Bumi punya air, udara, dan suhu yang pas untuk kehidupan."},{q:"Planet mana yang berputar hampir menyamping?",opsi:["Uranus","Neptunus","Saturnus","Yupiter"],benar:0,bahas:"Uranus berputar dengan posisi sangat miring, seperti bola yang menggelinding!"},{q:"Siapa nama satelit alami Bumi?",opsi:["Titan","Bulan","Europa","Phobos"],benar:1,bahas:"Bulan adalah satu-satunya satelit alami Bumi."},{q:"Sejak 2006, Pluto diklasifikasikan sebagai apa?",opsi:["Planet utama","Asteroid","Planet katai","Komet"],benar:2,bahas:"Pluto disebut planet katai karena ukurannya kecil dan orbitnya ramai objek lain."},{q:"Planet apa yang letaknya paling jauh dari Matahari?",opsi:["Uranus","Pluto","Saturnus","Neptunus"],benar:3,bahas:"Neptunus adalah planet terjauh sejak Pluto tak lagi dianggap planet utama."},{q:"Berapa lama Bumi berputar mengelilingi porosnya sendiri?",opsi:["1 jam","24 jam","1 minggu","1 bulan"],benar:1,bahas:"Satu putaran penuh Bumi pada porosnya memakan waktu sekitar 24 jam, itulah satu hari."},{q:"Apa nama bintang pusat tata surya kita?",opsi:["Matahari","Sirius","Bulan","Polaris"],benar:0,bahas:"Matahari adalah bintang yang menjadi pusat tata surya kita."}],Nd=["Belum tepat, yuk lihat petunjuknya!","Hampir benar, coba lagi ya!","Tidak apa-apa, kita belajar bersama!","Jangan menyerah, kamu pasti bisa!"];function _M(i,e){let t=5,n=!1,s=[],a=0,r=0,o=null;window.addEventListener("zepto-navigation",()=>clearInterval(o),{once:!0});const l=20;c();function c(){i.innerHTML=`
      <div class="quiz-header">
        <h1>📝 Kuis Latihan ZEPTO</h1>
        <p class="quiz-progress">Pilih pengaturan sesi kuismu</p>
      </div>
      <div class="quiz-card">
        <p class="quiz-setup-label">Jumlah soal:</p>
        <div class="quiz-setup-options">
          <button class="quiz-setup-btn active" data-jumlah="5">5 Soal</button>
          <button class="quiz-setup-btn" data-jumlah="10">10 Soal</button>
        </div>
        <p class="quiz-setup-label">Timer per soal:</p>
        <div class="quiz-setup-options">
          <button class="quiz-setup-btn active" data-timer="off">Tanpa Timer</button>
          <button class="quiz-setup-btn" data-timer="on">Dengan Timer (20 detik)</button>
        </div>
        <button class="quiz-next-btn" id="quiz-mulai">Mulai Kuis 🚀</button>
      </div>
    `;const _=i.querySelectorAll("[data-jumlah]");_.forEach(p=>p.addEventListener("click",()=>{_.forEach(y=>y.classList.remove("active")),p.classList.add("active"),t=Number(p.dataset.jumlah)}));const f=i.querySelectorAll("[data-timer]");f.forEach(p=>p.addEventListener("click",()=>{f.forEach(y=>y.classList.remove("active")),p.classList.add("active"),n=p.dataset.timer==="on"})),i.querySelector("#quiz-mulai").addEventListener("click",u)}function d(_){const f=[..._];for(let p=f.length-1;p>0;p--){const y=Math.floor(Math.random()*(p+1));[f[p],f[y]]=[f[y],f[p]]}return f}function u(){s=d(gM).slice(0,t),a=0,r=0,h()}function h(){clearInterval(o);const _=s[a];i.innerHTML=`
      <div class="quiz-header">
        <h1>📝 Kuis Latihan ZEPTO</h1>
        <div class="quiz-progress">Soal ${a+1} dari ${s.length} &nbsp;|&nbsp; Skor: ${r}</div>
        ${n?'<div class="quiz-timer-bar"><div class="quiz-timer-fill" id="quiz-timer-fill"></div></div>':""}
      </div>
      <div class="quiz-card">
        <div class="quiz-question">${_.q}</div>
        <div class="quiz-options">
          ${_.opsi.map((p,y)=>`<button class="quiz-option" data-index="${y}">${p}</button>`).join("")}
        </div>
      </div>
    `;const f=i.querySelectorAll(".quiz-option");if(f.forEach(p=>{p.addEventListener("click",()=>m(p,f,_))}),n){let p=l;const y=i.querySelector("#quiz-timer-fill");y&&(y.style.width="100%"),o=setInterval(()=>{if(!i.isConnected||!i.querySelector("#quiz-timer-fill")){clearInterval(o);return}document.hidden||(p-=1,y&&(y.style.width=`${p/l*100}%`),p<=0&&(clearInterval(o),m(null,f,_)))},1e3)}}function m(_,f,p){clearInterval(o);const y=_?Number(_.dataset.index):-1;if(!i.isConnected||!i.closest(".active-screen")||!i.querySelector(".quiz-options"))return;const x=y===p.benar;x?(r++,Tr("quiz:"+p.q,5),ri("benar")):ri("salah"),f.forEach(R=>{R.disabled=!0;const B=Number(R.dataset.index);B===p.benar?R.classList.add("correct"):B===y&&R.classList.add("incorrect")});const M=i.querySelector(".quiz-card"),C=document.createElement("p");if(C.className="quiz-explain",x)C.innerHTML=`<strong>Betul sekali! 🎉</strong><br>${p.bahas}`;else{const R=Nd[Math.floor(Math.random()*Nd.length)];C.innerHTML=`<strong>${R}</strong><br>${p.bahas}`}M.appendChild(C);const A=document.createElement("button");A.className="quiz-next-btn",A.textContent=a<s.length-1?"Soal Berikutnya ➡":"Lihat Hasil 🏁",A.addEventListener("click",()=>{a++,a<s.length?h():g()}),M.appendChild(A)}function g(){const _=s.length;Tr("quiz-complete",10);let f;r===_?f="Sempurna! Kamu benar-benar ahli tata surya! 🌟":r>=_*.7?f="Kerja bagus! Pengetahuanmu tentang tata surya cukup luas. 🚀":r>=_*.4?f="Lumayan! Coba jelajahi lagi Tata Surya untuk belajar lebih banyak. 🪐":f="Jangan menyerah! Yuk jelajahi Tata Surya dulu, lalu coba lagi. ✨";const{baru:p}=Uf(r,_),y=p.length?`<div class="badges-row">${p.map(x=>`
          <div class="badge-item">
            <span class="badge-icon">${x.ikon}</span>
            <span class="badge-name">${x.nama}</span>
          </div>`).join("")}</div>`:"";i.innerHTML=`
      <div class="quiz-header">
        <h1>📝 Kuis Latihan ZEPTO</h1>
      </div>
      <div class="quiz-card quiz-result">
        <p class="quiz-message">Kuis selesai!</p>
        <div class="quiz-score">${r} / ${_}</div>
        <p class="quiz-message">${f}</p>
        ${y}
        <div class="quiz-result-buttons">
          <button class="quiz-restart-btn" id="quiz-restart">🔄 Main Lagi</button>
          <button class="quiz-menu-btn" id="quiz-to-menu">🏠 Kembali</button>
        </div>
      </div>
    `,i.querySelector("#quiz-restart").addEventListener("click",c),i.querySelector("#quiz-to-menu").addEventListener("click",()=>{e&&e()})}}const vr=[{planet:"☿️ Merkurius",ciri:"Planet paling dekat Matahari"},{planet:"♀️ Venus",ciri:"Planet terpanas di tata surya"},{planet:"🌍 Bumi",ciri:"Satu-satunya planet berkehidupan"},{planet:"🔴 Mars",ciri:"Dijuluki Planet Merah"},{planet:"🟠 Yupiter",ciri:"Planet terbesar di tata surya"},{planet:"💍 Saturnus",ciri:"Terkenal dengan cincin indahnya"}];function vM(i){let e=null,t=null,n=!1,s=0;const a=[];vr.forEach((u,h)=>{a.push({id:`p${h}`,grup:h,teks:u.planet,jenis:"planet"}),a.push({id:`c${h}`,grup:h,teks:u.ciri,jenis:"ciri"})});const r=o(a);l();function o(u){const h=[...u];for(let m=h.length-1;m>0;m--){const g=Math.floor(Math.random()*(m+1));[h[m],h[g]]=[h[g],h[m]]}return h}function l(){i.innerHTML=`
      <div class="hub-header">
        <h1>🧩 Cocokkan Planet</h1>
        <p class="hub-sub">Sentuh dua kartu untuk mencocokkan planet dengan cirinya</p>
      </div>
      <div class="match-grid" id="match-grid"></div>
      <p class="match-status" id="match-status">${s} dari ${vr.length} pasangan ditemukan</p>
    `;const u=i.querySelector("#match-grid");r.forEach(h=>{const m=document.createElement("button");m.className="match-card",m.dataset.id=h.id,m.innerHTML=`<span class="match-card-inner">${h.teks}</span>`,m.addEventListener("click",()=>c(m,h)),u.appendChild(m)})}function c(u,h){if(!(n||u.classList.contains("match-found")||u===(e==null?void 0:e.el))){if(u.classList.add("match-selected"),!e){e={el:u,data:h};return}t={el:u,data:h},n=!0,e.data.grup===t.data.grup?(ri("benar"),setTimeout(()=>{e.el.classList.remove("match-selected"),t.el.classList.remove("match-selected"),e.el.classList.add("match-found"),t.el.classList.add("match-found"),s++,i.querySelector("#match-status")&&(i.querySelector("#match-status").textContent=`${s} dari ${vr.length} pasangan ditemukan`,e=null,t=null,n=!1,s===vr.length&&setTimeout(d,400))},400)):(ri("salah"),u.classList.add("match-wrong"),e.el.classList.add("match-wrong"),setTimeout(()=>{e.el.classList.remove("match-selected","match-wrong"),t.el.classList.remove("match-selected","match-wrong"),e=null,t=null,n=!1},700))}}function d(){i.querySelector("#match-grid")&&(ci("games","matching",10),i.innerHTML=`
      <div class="hub-header">
        <h1>🧩 Cocokkan Planet</h1>
      </div>
      <div class="quiz-card quiz-result">
        <div class="quiz-score">🎉</div>
        <p class="quiz-message">Hebat! Semua pasangan berhasil ditemukan!</p>
        <div class="quiz-result-buttons">
          <button class="quiz-restart-btn" id="match-ulang">🔄 Main Lagi</button>
        </div>
      </div>
    `,i.querySelector("#match-ulang").addEventListener("click",()=>{s=0,r.splice(0,r.length,...o(a)),l()}))}}const Od=["☿️ Merkurius","♀️ Venus","🌍 Bumi","🔴 Mars","🟠 Yupiter","💍 Saturnus","🔵 Uranus","🔷 Neptunus"];function xM(i){let e=null,t=n(Od);s();function n(l){let c=[...l];do for(let d=c.length-1;d>0;d--){const u=Math.floor(Math.random()*(d+1));[c[d],c[u]]=[c[u],c[d]]}while(c.every((d,u)=>d===l[u]));return c}function s(){i.innerHTML=`
      <div class="hub-header">
        <h1>🔢 Susun Planet</h1>
        <p class="hub-sub">Urutkan planet dari yang PALING DEKAT Matahari. Seret kartu, atau sentuh dua kartu untuk bertukar posisi.</p>
      </div>
      <div class="order-list" id="order-list"></div>
      <button class="quiz-next-btn" id="order-cek">✅ Periksa Urutan</button>
      <p class="order-feedback" id="order-feedback"></p>
    `;const l=i.querySelector("#order-list");t.forEach((c,d)=>{const u=document.createElement("div");u.className="order-card",u.draggable=!0,u.tabIndex=0,u.setAttribute("role","button"),u.onkeydown=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),u.click())},u.dataset.index=d,u.innerHTML=`<span class="order-number">${d+1}</span><span class="order-label">${c}</span>`,u.addEventListener("click",()=>a(u)),u.addEventListener("dragstart",h=>{h.dataTransfer.setData("text/plain",d),u.classList.add("order-dragging")}),u.addEventListener("dragend",()=>u.classList.remove("order-dragging")),u.addEventListener("dragover",h=>h.preventDefault()),u.addEventListener("drop",h=>{h.preventDefault();const m=Number(h.dataTransfer.getData("text/plain")),g=Number(u.dataset.index);r(m,g)}),l.appendChild(u)}),i.querySelector("#order-cek").addEventListener("click",o)}function a(l){if(!e){e=l,l.classList.add("order-selected");return}if(e===l){l.classList.remove("order-selected"),e=null;return}const c=Number(e.dataset.index),d=Number(l.dataset.index);e.classList.remove("order-selected"),e=null,r(c,d)}function r(l,c){l===c||isNaN(l)||isNaN(c)||([t[l],t[c]]=[t[c],t[l]],ri("klik"),s())}function o(){const l=i.querySelector("#order-feedback");t.every((d,u)=>d===Od[u])?(ci("games","ordering",10),ri("benar"),l.innerHTML="🎉 <strong>Sempurna!</strong> Urutan planetmu sudah benar!",l.className="order-feedback order-feedback-benar"):(ri("salah"),l.innerHTML="Belum tepat, coba lihat lagi urutannya ya. Kamu pasti bisa! 💪",l.className="order-feedback order-feedback-salah")}}function bM(i,e){t();function t(){i.innerHTML=`
      <div class="hub-header">
        <h1>🎮 Zona Bermain</h1>
        <p class="hub-sub">Pilih permainan yang ingin kamu mainkan</p>
      </div>
      <div class="playzone-grid"><button class="playzone-card" id="pz-tebak"><span class="playzone-icon">🪐</span><span class="playzone-title">Tebak Planet 3D</span><span class="playzone-desc">Kenali planet dari modelnya</span></button><button class="playzone-card" id="pz-cari"><span class="playzone-icon">🔍</span><span class="playzone-title">Cari Planet</span><span class="playzone-desc">Temukan objek dalam misi 3D</span></button>
        <button class="playzone-card" id="pz-kuis">
          <span class="playzone-icon">📝</span>
          <span class="playzone-title">Kuis Tata Surya</span>
          <span class="playzone-desc">Uji pengetahuanmu dengan soal pilihan ganda</span>
        </button>
        <button class="playzone-card" id="pz-cocok">
          <span class="playzone-icon">🧩</span>
          <span class="playzone-title">Cocokkan Planet</span>
          <span class="playzone-desc">Pasangkan planet dengan nama atau cirinya</span>
        </button>
        <button class="playzone-card" id="pz-susun">
          <span class="playzone-icon">🔢</span>
          <span class="playzone-title">Susun Planet</span>
          <span class="playzone-desc">Urutkan planet dari yang terdekat Matahari</span>
        </button>
      </div>
    `,i.querySelector("#pz-tebak").onclick=()=>window.dispatchEvent(new CustomEvent("zepto-navigate",{detail:"tebak"})),i.querySelector("#pz-cari").onclick=()=>window.dispatchEvent(new CustomEvent("zepto-navigate",{detail:"misi"})),i.querySelector("#pz-kuis").addEventListener("click",()=>{i.innerHTML='<button class="mission-back" id="pz-kembali-kuis">⬅ Zona Bermain</button><div id="pz-kuis-area"></div>',i.querySelector("#pz-kembali-kuis").addEventListener("click",t),_M(i.querySelector("#pz-kuis-area"),t)}),i.querySelector("#pz-cocok").addEventListener("click",()=>{i.innerHTML='<button class="mission-back" id="pz-kembali-cocok">⬅ Zona Bermain</button><div id="pz-cocok-area"></div>',i.querySelector("#pz-kembali-cocok").addEventListener("click",t),vM(i.querySelector("#pz-cocok-area"))}),i.querySelector("#pz-susun").addEventListener("click",()=>{i.innerHTML='<button class="mission-back" id="pz-kembali-susun">⬅ Zona Bermain</button><div id="pz-susun-area"></div>',i.querySelector("#pz-kembali-susun").addEventListener("click",t),xM(i.querySelector("#pz-susun-area"))})}}const ua=[{key:"Mercury",nama:"Merkurius",radius:2439.7,warna:"#a89f91"},{key:"Venus",nama:"Venus",radius:6051.8,warna:"#e0c16c"},{key:"Earth",nama:"Bumi",radius:6371,warna:"#3a86ff"},{key:"Mars",nama:"Mars",radius:3389.5,warna:"#c1440e"},{key:"Jupiter",nama:"Yupiter",radius:69911,warna:"#d9a066"},{key:"Saturn",nama:"Saturnus",radius:58232,warna:"#e3c078"},{key:"Uranus",nama:"Uranus",radius:25362,warna:"#8fd6e0"},{key:"Neptune",nama:"Neptunus",radius:24622,warna:"#4266f5"},{key:"Pluto",nama:"Pluto",radius:1188.3,warna:"#c9b8a8"}],yM=Math.max(...ua.map(i=>i.radius)),MM=140,SM=6;function EM(i){const e=i/yM;return Math.max(SM,e*MM)}function TM(i){i.innerHTML=`
    <div class="compare-header">
      <h1>📏 Perbandingan Ukuran Planet</h1>
      <p class="compare-sub">Digambar sesuai proporsi radius asli (skala relatif, bukan jarak sebenarnya)</p>
    </div>
    <div class="compare-visual" id="compare-visual"></div>
    <div class="compare-calc">
      <div class="compare-calc-row">
        <select id="compare-select-a" class="compare-select"></select>
        <span class="compare-vs">dibandingkan</span>
        <select id="compare-select-b" class="compare-select"></select>
      </div>
      <p class="compare-result" id="compare-result"></p>
    </div>
  `;const e=i.querySelector("#compare-visual");ua.forEach(a=>{const r=EM(a.radius),o=document.createElement("div");o.className="compare-planet",o.innerHTML=`
      <div class="compare-circle" style="width:${r}px;height:${r}px;background:${a.warna};box-shadow:0 0 ${Math.max(6,r/4)}px ${a.warna}55;"></div>
      <span class="compare-label">${a.nama}</span>
    `,e.appendChild(o)});const t=i.querySelector("#compare-select-a"),n=i.querySelector("#compare-select-b");ua.forEach((a,r)=>{t.innerHTML+=`<option value="${r}">${a.nama}</option>`,n.innerHTML+=`<option value="${r}">${a.nama}</option>`}),t.value=2,n.value=4;function s(){const a=ua[Number(t.value)],r=ua[Number(n.value)],o=r.radius/a.radius,l=i.querySelector("#compare-result");if(a.key===r.key){l.textContent="Itu planet yang sama 🙂 Pilih dua planet berbeda untuk membandingkan.";return}o>=1?l.innerHTML=`<strong>${r.nama}</strong> memiliki radius sekitar <strong>${o.toFixed(1)}×</strong> lebih besar dari <strong>${a.nama}</strong>.`:l.innerHTML=`<strong>${r.nama}</strong> memiliki radius sekitar <strong>${(1/o).toFixed(1)}×</strong> lebih kecil dari <strong>${a.nama}</strong>.`}t.addEventListener("change",s),n.addEventListener("change",s),s()}function wM(i){e();function e(){i.innerHTML=`
      <div class="hub-header">
        <h1>🔬 Laboratorium Antariksa</h1>
        <p class="hub-sub">Amati simulasi sederhana fenomena luar angkasa</p>
      </div>
      <div class="playzone-grid">
        <button class="playzone-card" id="lab-gerhana">
          <span class="playzone-icon">🌑</span>
          <span class="playzone-title">Simulasi Gerhana</span>
          <span class="playzone-desc">Lihat kenapa gerhana bisa terjadi</span>
        </button>
        <button class="playzone-card" id="lab-siangmalam">
          <span class="playzone-icon">🌗</span>
          <span class="playzone-title">Siang &amp; Malam</span>
          <span class="playzone-desc">Kenapa Bumi punya siang dan malam?</span>
        </button>
        <button class="playzone-card" id="lab-banding">
          <span class="playzone-icon">📏</span>
          <span class="playzone-title">Perbandingan Ukuran</span>
          <span class="playzone-desc">Bandingkan besar planet satu sama lain</span>
        </button>
      </div>
    `,i.querySelector("#lab-gerhana").addEventListener("click",t),i.querySelector("#lab-siangmalam").addEventListener("click",n),i.querySelector("#lab-banding").addEventListener("click",()=>{i.innerHTML='<button class="mission-back" id="lab-kembali-banding">⬅ Laboratorium</button><div id="lab-banding-area"></div>',i.querySelector("#lab-kembali-banding").addEventListener("click",e),TM(i.querySelector("#lab-banding-area"))})}function t(){let s=!0,a=0,r;i.innerHTML=`
      <button class="mission-back" id="lab-kembali-1">⬅ Laboratorium</button>
      <div class="lab-sim-area">
        <h2 class="lab-sim-title">🌑 Simulasi Gerhana</h2>
        <p class="lab-sim-desc">Gerhana terjadi saat Matahari, Bumi, dan Bulan berada segaris. Amati bagaimana posisi Bulan berubah saat mengelilingi Bumi.</p>
        <svg viewBox="0 0 400 200" class="lab-svg" id="gerhana-svg">
          <circle cx="40" cy="100" r="28" fill="#ffd97a"/>
          <text x="40" y="145" text-anchor="middle" fill="white" font-size="12">Matahari</text>
          <circle cx="220" cy="100" r="16" fill="#3a86ff"/>
          <text x="220" y="130" text-anchor="middle" fill="white" font-size="12">Bumi</text>
          <circle id="gerhana-bulan" cx="260" cy="100" r="6" fill="#cfd3e6"/>
          <text id="gerhana-label" x="330" y="30" text-anchor="middle" fill="#ffd97a" font-size="13" font-weight="bold"></text>
        </svg>
        <div class="lab-controls">
          <button class="lab-btn" id="gerhana-toggle">⏸ Jeda</button>
        </div>
        <p class="lab-note">Catatan: ukuran dan jarak pada simulasi ini disederhanakan agar mudah diamati, bukan skala sebenarnya.</p>
      </div>
    `,i.querySelector("#lab-kembali-1").addEventListener("click",()=>{cancelAnimationFrame(r),e()});const o=i.querySelector("#gerhana-bulan"),l=i.querySelector("#gerhana-label"),c=i.querySelector("#gerhana-toggle");c.addEventListener("click",()=>{s=!s,c.textContent=s?"⏸ Jeda":"▶ Lanjutkan",s&&d()});function d(){if(!i.closest(".active-screen")||!i.querySelector(".lab-svg")||!s)return;a+=.02;const u=45,h=220+Math.cos(a)*u,m=100+Math.sin(a)*(u*.35);o.setAttribute("cx",h),o.setAttribute("cy",m);const g=Math.abs(Math.sin(a))<.12;g&&Math.cos(a)<0?l.textContent="🌑 Gerhana Matahari (Bulan di depan Matahari)":g&&Math.cos(a)>0?l.textContent="🌕 Gerhana Bulan (Bumi menghalangi cahaya)":l.textContent="",r=requestAnimationFrame(d)}d()}function n(){let s=!0,a=0,r;i.innerHTML=`
      <button class="mission-back" id="lab-kembali-2">⬅ Laboratorium</button>
      <div class="lab-sim-area">
        <h2 class="lab-sim-title">🌗 Siang &amp; Malam</h2>
        <p class="lab-sim-desc">Bumi berputar pada porosnya sendiri setiap 24 jam. Sisi yang menghadap Matahari mengalami siang, sisi yang membelakangi mengalami malam.</p>
        <svg viewBox="0 0 300 200" class="lab-svg" id="siangmalam-svg">
          <circle cx="40" cy="100" r="18" fill="#ffd97a"/>
          <text x="40" y="130" text-anchor="middle" fill="white" font-size="12">Matahari</text>
          <defs>
            <clipPath id="clipMalam">
              <rect id="rectMalam" x="150" y="60" width="40" height="80"/>
            </clipPath>
          </defs>
          <circle cx="200" cy="100" r="40" fill="#3a86ff"/>
          <circle id="sisi-malam" cx="200" cy="100" r="40" fill="#0a0f2b" clip-path="url(#clipMalam)"/>
        </svg>
        <div class="lab-controls">
          <button class="lab-btn" id="siangmalam-toggle">⏸ Jeda</button>
        </div>
        <p class="lab-note">Catatan: kecepatan rotasi dipercepat agar mudah diamati, bukan kecepatan sebenarnya.</p>
      </div>
    `,i.querySelector("#lab-kembali-2").addEventListener("click",()=>{cancelAnimationFrame(r),e()});const o=i.querySelector("#siangmalam-toggle"),l=i.querySelector("#sisi-malam"),c=i.querySelector("#rectMalam");o.addEventListener("click",()=>{s=!s,o.textContent=s?"⏸ Jeda":"▶ Lanjutkan",s&&d()});function d(){if(!i.closest(".active-screen")||!i.querySelector(".lab-svg")||!s)return;a+=.03;const u=Math.sin(a)*40;l.setAttribute("cx",200+u*.3),c.setAttribute("x",160+u),r=requestAnimationFrame(d)}d()}}const AM={Mercury:"Merkurius",Venus:"Venus",Earth:"Bumi",Mars:"Mars",Jupiter:"Yupiter",Saturn:"Saturnus",Uranus:"Uranus",Neptune:"Neptunus"},RM={Mercury:"☿️",Venus:"♀️",Earth:"🌍",Mars:"🔴",Jupiter:"🟠",Saturn:"💍",Uranus:"🔵",Neptune:"🔷"};function CM(i){const e=Vr(),t=Nf(),n=kf(),s=t.map(o=>{const l=!!e.stempelPlanet[o];return`
      <div class="stamp-slot ${l?"stamp-filled":""}">
        <span class="stamp-slot-icon">${l?RM[o]:"❔"}</span>
        <span class="stamp-slot-label">${AM[o]}</span>
      </div>
    `}).join(""),a=n.map(o=>{const l=e.lencana.includes(o.id);return`
      <div class="badge-item ${l?"":"badge-locked"}">
        <span class="badge-icon">${l?o.ikon:"🔒"}</span>
        <span class="badge-name">${o.nama}</span>
      </div>
    `}).join(""),r=e.riwayatKuis.length?e.riwayatKuis.slice(0,8).map(o=>`<div class="history-row"><span>${new Date(o.tanggal).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}</span><span>${o.skor} / ${o.total}</span></div>`).join(""):'<p class="hub-sub">Belum ada riwayat kuis. Yuk coba Zona Bermain!</p>';i.innerHTML=`
    <div class="hub-header">
      <h1>🪪 Paspor Astronaut</h1>
      <p class="hub-sub">Progres petualanganmu di tata surya</p>
    </div>

    <div class="passport-card">
      <h2 class="passport-section-title">🌟 Stempel Planet (${Object.keys(e.stempelPlanet).length}/${t.length})</h2>
      <div class="stamp-grid">${s}</div>
    </div>

    <div class="passport-card">
      <h2 class="passport-section-title">🎖️ Lencana Pencapaian</h2>
      <div class="badges-row">${a}</div>
    </div>

    <div class="passport-card">
      <h2 class="passport-section-title">📊 Misi Selesai</h2>
      <p class="passport-stat">${Object.keys(e.misiSelesai).length} misi telah diselesaikan</p>
    </div>

    <div class="passport-card">
      <h2 class="passport-section-title">📝 Riwayat Kuis</h2>
      ${r}
    </div>

    <p class="passport-note">💾 Progres disimpan otomatis di perangkat ini saja (tidak tersimpan online).</p>
  `}function LM(i){e();function e(){const n=pn();i.innerHTML=`
      <div class="hub-header">
        <h1>⚙️ Pengaturan</h1>
        <p class="hub-sub">Sesuaikan pengalaman belajarmu</p>
      </div>

      <div class="settings-list">
        ${t("musik","🎵 Musik Latar",n.musik)}
        <div class="z-music-volume"><label for="music-volume">Volume musik <output id="music-volume-value">${yr()}%</output></label><input id="music-volume" type="range" min="0" max="100" step="5" value="${yr()}"><p>Melodi ceria dan lembut. Musik mengecil saat narasi dibacakan.</p></div>
        ${t("efekSuara","🔊 Efek Suara",n.efekSuara)}
        ${t("narasi","🗣️ Narasi Suara",n.narasi)}
        ${t("kurangiAnimasi","✨ Kurangi Animasi",n.kurangiAnimasi)}
      </div>

      <div class="settings-list">
        <div class="settings-row">
          <span class="settings-label">🖼️ Kualitas Grafis</span>
          <div class="settings-graphics-toggle">
            <button class="settings-graphics-btn ${n.grafis==="tinggi"?"active":""}" data-grafis="tinggi">Tinggi</button>
            <button class="settings-graphics-btn ${n.grafis==="hemat"?"active":""}" data-grafis="hemat">Hemat Baterai</button>
          </div>
        </div>
      </div>
      <section class="z-panel"><h2>Mulai belajar lagi</h2><p>Reset nilai dan progres untuk mengulang pembelajaran atau berganti siswa.</p><button class="z-btn" id="settings-reset-belajar" type="button">🔄 Reset Pembelajaran</button></section>
    `,i.querySelector("#music-volume").addEventListener("input",s=>{Hf(s.target.value),i.querySelector("#music-volume-value").textContent=yr()+"%"}),i.querySelector("#settings-reset-belajar").onclick=()=>window.dispatchEvent(new Event("zepto-request-reset")),i.querySelectorAll("[data-toggle]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.toggle,r=!pn()[a];_a({[a]:r}),a==="musik"&&Zd(r),a==="efekSuara"&&Vf(r),e()})}),i.querySelectorAll("[data-grafis]").forEach(s=>{s.addEventListener("click",()=>{_a({grafis:s.dataset.grafis}),e()})})}function t(n,s,a){return`
      <div class="settings-row">
        <span class="settings-label">${s}</span>
        <button class="settings-switch ${a?"on":""}" data-toggle="${n}">
          <span class="settings-switch-knob"></span>
        </button>
      </div>
    `}}let Kt,Ns,af,Ss,yl,Ra=!1;function Bd(){Ns.width=window.innerWidth,Ns.height=window.innerHeight}function PM(i){const e=[];for(let t=0;t<i;t++)e.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:Math.random()*1.4+.3,fase:Math.random()*Math.PI*2,kecepatanKedip:.005+Math.random()*.02});return e}function IM(){if(Math.random()<.004&&Ss.length<3){const i=Math.random()*window.innerWidth;Ss.push({x:i,y:-20,panjang:80+Math.random()*60,kecepatan:8+Math.random()*6,sudut:Math.PI/4+(Math.random()*.2-.1),alpha:1})}}function ic(){if(Ra){Kt.clearRect(0,0,Ns.width,Ns.height);for(const i of af){i.fase+=i.kecepatanKedip;const e=.4+Math.abs(Math.sin(i.fase))*.6;Kt.beginPath(),Kt.arc(i.x,i.y,i.r,0,Math.PI*2),Kt.fillStyle=`rgba(255,255,255,${e.toFixed(2)})`,Kt.fill()}IM();for(let i=Ss.length-1;i>=0;i--){const e=Ss[i],t=Math.cos(e.sudut)*e.panjang,n=Math.sin(e.sudut)*e.panjang,s=Kt.createLinearGradient(e.x,e.y,e.x-t,e.y-n);s.addColorStop(0,`rgba(255,255,255,${e.alpha})`),s.addColorStop(1,"rgba(255,255,255,0)"),Kt.strokeStyle=s,Kt.lineWidth=2,Kt.beginPath(),Kt.moveTo(e.x,e.y),Kt.lineTo(e.x-t,e.y-n),Kt.stroke(),e.x+=Math.cos(e.sudut)*e.kecepatan,e.y+=Math.sin(e.sudut)*e.kecepatan,(e.y>window.innerHeight+50||e.x<-50)&&Ss.splice(i,1)}yl=requestAnimationFrame(ic)}}function DM(i){Ns=i,Kt=Ns.getContext("2d"),af=PM(160),Ss=[],Bd(),window.addEventListener("resize",Bd),Ra=!0,ic()}function UM(){Ra=!1,yl&&cancelAnimationFrame(yl)}function kM(){!Ra&&Kt&&(Ra=!0,ic())}const Fd=["Satu hari di Venus (243 hari Bumi) lebih lama dari satu tahunnya (225 hari Bumi)!","Matahari menyumbang sekitar 99,8% dari total massa tata surya kita.","Jika bisa mengapung di air raksasa, Saturnus akan terapung karena kepadatannya lebih rendah dari air.","Badai raksasa di Jupiter (Bintik Merah Besar) sudah berlangsung lebih dari 350 tahun.","Satu tahun di Neptunus setara dengan sekitar 165 tahun Bumi.","Suhu di permukaan Venus bisa mencapai 465°C, lebih panas dari Merkurius walau lebih jauh dari Matahari.","Cincin Saturnus sebagian besar terbuat dari es dan batu, dengan ketebalan rata-rata hanya sekitar 10 meter.","Mars memiliki gunung tertinggi di tata surya: Olympus Mons, tingginya sekitar 3x Gunung Everest.","Bumi adalah satu-satunya planet yang namanya tidak diambil dari dewa-dewi mitologi Yunani/Romawi.","Uranus berputar hampir menyamping, dengan kemiringan sumbu rotasi sekitar 98 derajat.","Matahari mengelilingi pusat galaksi Bima Sakti sekali putaran membutuhkan waktu sekitar 230 juta tahun.","Titan, bulan terbesar Saturnus, punya danau berisi metana cair, bukan air.","Pluto lebih kecil dari Bulan Bumi, itulah salah satu alasan statusnya diubah menjadi planet katai.","Cahaya Matahari butuh sekitar 8 menit 20 detik untuk sampai ke Bumi.","Merkurius tidak memiliki atmosfer signifikan, sehingga suhunya bisa berubah drastis antara siang dan malam."];function NM(){const i=new Date,t=Math.floor((i-new Date(i.getFullYear(),0,0))/864e5)%Fd.length;return Fd[t]}const zd={pembimbing:document.getElementById("pembimbing-screen"),penguji:document.getElementById("penguji-screen"),zepto:document.getElementById("zepto-screen"),menu:document.getElementById("main-menu"),jelajah:document.getElementById("solar-system-screen"),misi:document.getElementById("mission-screen"),bermain:document.getElementById("playzone-screen"),lab:document.getElementById("lab-screen"),paspor:document.getElementById("passport-screen"),pengaturan:document.getElementById("settings-screen"),caraBermain:document.getElementById("howto-screen"),tentang:document.getElementById("about-screen")};let Yo=!1;DM(document.getElementById("global-starfield"));document.getElementById("fact-text").textContent=NM();Vr().sudahMulai&&(document.getElementById("btn-lanjutkan").style.display="inline-flex",document.getElementById("mascot-sapaan").textContent="Senang bertemu lagi, Penjelajah Cilik! Mau lanjut ke mana hari ini?");const zn=[];let Ml=!1;window.zeptoRemember=function(i,e){if(Ml)return;const t={page:i,arg:e},n=zn[zn.length-1];if(i==="menu"){zn.length=0,zn.push(t);return}(!n||n.page!==i||n.arg!==e)&&zn.push(t)};window.zeptoBack=function(){const i=document.querySelector("dialog[open]");if(i){const s=i.querySelector("#z-understand");s?s.click():i.close();return}const e=document.querySelector(".screen.active-screen");if(!e||e.id==="main-menu")return;const t=e.querySelector("#z-list, #z-sims-back, #z-results-back, #z-guess-back, #pz-kembali-kuis, #pz-kembali-cocok, #pz-kembali-susun");if(t){t.click();return}zn.length>1&&zn.pop();const n=zn[zn.length-1]||{page:"menu"};Ml=!0;try{yt(n.page,n.arg)}finally{Ml=!1}};function yt(i,e){ka(),La(),window.dispatchEvent(new CustomEvent("zepto-leave-solar")),window.dispatchEvent(new Event("zepto-navigation"));const t=["pembimbing","penguji","menu","caraBermain","tentang","pengaturan","petunjuk","evaluasi","progres","paspor"];!mt().pretest&&!t.includes(i)&&(i="petunjuk"),window.zeptoRemember(i,e);const s={belajar:"belajar",evaluasi:"evaluasi",progres:"progres",misi:"misi",lab:"simulasi",tebak:"tebak",petunjuk:"petunjuk"}[i];if(i==="misiLama"&&(i="misi"),i==="labLama"&&(i="lab"),s&&(i="zepto"),Object.values(zd).forEach(a=>a.classList.remove("active-screen")),zd[i].classList.add("active-screen"),s&&Ab(s,e),i==="jelajah"){UM();const a=document.getElementById("solar-canvas-container");mM(a),Br(),$h(),Ca.classList.add("hidden-on-solar")}else kM(),Ca.classList.remove("hidden-on-solar");i==="misi"&&!Yo&&(Yo=!0,kd(document.getElementById("mission-container"))),i==="misi"&&Yo&&kd(document.getElementById("mission-container")),i==="bermain"&&bM(document.getElementById("playzone-container")),i==="lab"&&wM(document.getElementById("lab-container")),i==="paspor"&&CM(document.getElementById("passport-container")),i==="pengaturan"&&LM(document.getElementById("settings-container"))}function OM(){const i=document.getElementById("splash-screen");i&&(i.classList.add("splash-hidden"),setTimeout(()=>i.remove(),650))}setTimeout(OM,900);const Ca=document.getElementById("music-toggle");function eo(){Ca.textContent=va()?"🎵":"🔇",Ca.classList.toggle("muted",!va())}eo();window.addEventListener("zepto-audio-change",eo);Ca.addEventListener("click",()=>{zf(),eo()});function rf(){Ff(),eo(),document.removeEventListener("click",rf)}document.addEventListener("click",rf);document.getElementById("btn-mulai").addEventListener("click",()=>{Lf(),yt(mt().pretest?"belajar":"petunjuk")});document.getElementById("btn-lanjutkan").addEventListener("click",()=>yt("paspor"));document.getElementById("btn-jelajah").addEventListener("click",()=>yt("jelajah"));document.getElementById("btn-misi").addEventListener("click",()=>yt("misi"));document.getElementById("btn-bermain").addEventListener("click",()=>yt("bermain"));document.getElementById("btn-lab").addEventListener("click",()=>yt("lab"));document.getElementById("btn-paspor").addEventListener("click",()=>yt("paspor"));document.getElementById("btn-pengaturan").addEventListener("click",()=>yt("pengaturan"));document.getElementById("btn-cara-bermain").addEventListener("click",()=>yt("caraBermain"));document.getElementById("btn-pembimbing").onclick=()=>yt("pembimbing");document.getElementById("btn-penguji").onclick=()=>yt("penguji");document.getElementById("btn-tentang").addEventListener("click",()=>yt("tentang"));document.querySelectorAll("[data-back]").forEach(i=>{i.addEventListener("click",()=>{window.speechSynthesis&&window.speechSynthesis.cancel(),window.zeptoBack()})});wb(yt);df({stopAudio:La});document.getElementById("btn-belajar").onclick=()=>yt("belajar");document.getElementById("btn-evaluasi").onclick=()=>yt("evaluasi");document.getElementById("btn-progres").onclick=()=>yt("progres");document.getElementById("z-help").onclick=()=>$h(!0);document.getElementById("z-earth-moon").onclick=()=>yt("lab","earth-moon");window.addEventListener("zepto-navigate",i=>yt(i.detail));yt("menu");export{wl as W};
//# sourceMappingURL=index-7e3ee34d.js.map
