import{V as e,i as t,q as n}from"./vendor.207059ea.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const s=new URL(e,o);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),i(a)},onload(){n(self[t].moduleMap[s]),i(a)}});document.head.appendChild(a)})),self[t].moduleMap={}}}("/assets/");e.use(t,{name:"Timeago",locale:"en"}),e.component("copy",{props:["value"],data:()=>({copyValue:"",copied:!1}),watch:{value:{immediate:!0,handler(e){this.copyValue=e}}},template:'\n  <div v-if="value">\n  <input type="hidden" id="copyInput" :value="copyValue">\n  <button :class="{\'bg-blue-500\': copied}" class="flex items-center justify-center border-l-0 py-1 px-2 text-gray-700 bg-blue-300 rounded-full mr-3" @click="copyClipboard">\n    Copy\n  </button>\n  </div>\n  ',methods:{copyClipboard(){let e=this.$el.children[0];e.setAttribute("type","text"),e.select();try{var t=document.execCommand("copy");t&&(this.copied=!0);var n=t?"successful":"unsuccessful";console.log("Testing code was copied "+n)}catch(o){console.log("Oops, unable to copy")}e.setAttribute("type","hidden"),window.getSelection().removeAllRanges()}}}),e.component("message",{props:{value:{},time:{type:Number},owner:{type:Boolean,default:!1}},template:'\n    <div class="flex w-full mt-2 max-w-xs justify-end" :class="[owner ? \'ml-auto\': \'mr-auto flex-row-reverse\']">\n      <div>\n        <div class="p-3 " :class="[owner ? \'bg-blue-600 text-white rounded-l-lg rounded-br-lg\' : \'bg-gray-300 rounded-r-lg rounded-bl-lg\']">\n          <p class="text-sm">{{value}}</p>\n        </div>\n        <span class="text-xs text-gray-500 leading-none"><timeago v-if="time" :datetime="time" :autoUpdate="1"></timeago></span>\n      </div>\n      <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" :class="[owner ? \'ml-3\' : \'mr-3\']"></div>\n    </div>\n  '}),new e({el:"#app",data:()=>({isShow:!0,input:"",list:[],owner:null,client:null,peerSuccess:!1,link:""}),methods:{submit(){const e=this,t=e.input;e.owner?(e.owner.send({text:t,time:(new Date).getTime()}),e.list.push({text:t,time:(new Date).getTime(),owner:!0})):e.client&&(e.client.send({text:t,time:(new Date).getTime()}),e.list.push({text:t,time:(new Date).getTime(),owner:!0})),e.input=""}},mounted(){const e=this;e.isShow=-1!==window.location.href.indexOf("chatpeer.github.io");var t,o=location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),i=null,l=null;function s(){var t,n=(t="qrid",decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1")));n&&(i&&i.close(),(i=l.connect(n,{reliable:!0})).on("open",(function(){i.send({text:"Connected success !",time:(new Date).getTime()}),e.peerSuccess=!0})),i.on("data",(function(t){e.list.push({text:t.text,time:t.time})})),e.client=i,i.on("error",(function(e){i.close(),console.log("err:",e)})))}t=function(){s()},(l=new Peer(null,{debug:2})).on("open",(function(){console.log(l.id),e.link=o+"?qrid="+l.id,new n({element:document.querySelector("#qr"),value:e.link}),e.list.push({text:e.link,time:(new Date).getTime()}),e.list.push({text:"Copy and send this secret link to anyone who needs to chat.",time:(new Date).getTime()}),t()})),l.on("connection",(function(t){t.on("open",(function(){t.send({text:"Peer connection is done !!",time:(new Date).getTime()}),e.peerSuccess=!0})),t.on("data",(function(t){e.list.push({text:t.text,time:t.time})})),e.owner=t}))}});
