import{app}from"../../../scripts/app.js";import{api}from"../../../scripts/api.js";import{ComfyWidgets}from"../../../scripts/widgets.js";import{$el}from"../../../scripts/ui.js";const styleElement=document.createElement("style"),cssCode="\n    #msgDiv{\n      width:800px;\n      height: 200px;\n      text-align: center;\n      font-size: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding-bottom: 40px;\n      color: var(--fg-color);\n    }\n    #qrCode{\n      display: block;\n      width:256px;\n      height:256px;\n      border-radius: 10px;\n    }\n    #qrBox{\n      display: block;\n      text-align: center;\n      display:flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      width: 360px;\n    }\n    #qrDesc{\n      display: block;\n      text-align: center;\n      margin-top: 20px;\n      color: #ffffff;\n      width: 360px;\n    }\n    .codeImg {\n      // display: block;\n      width:256px;\n      height:256px;\n      border-radius: 10px;\n      padding: 10px;\n      border: 2px solid #ffffff;\n    }\n    .codeDesc {\n      display: block;\n      text-align: center;\n      margin-top: 20px;\n      color: #ffffff;\n      width: 360px;\n      font-size: 16px;\n    }\n    .codeDiv {\n      color: #ffffff;\n    }\n    .codeBox {\n      display: flex;\n      text-align: center;\n    }\n    #directions{\n      margin-top: 10px;\n      width: 100%;\n      text-align: left;\n      color: #ffffff;\n      font-size: 8px;\n    }\n    .tech_button {\n      flex:1;\n      height:30px;\n      border-radius: 8px;\n      border: 2px solid var(--border-color);\n      font-size:11px;\n      background:var(--comfy-input-bg);\n      color:var(--error-text);\n      box-shadow:none;\n      cursor:pointer;\n      width: 1rem;\n    }\n    #tech_box {\n      max-height: 80px;\n      display:flex;\n      flex-wrap: wrap;\n      align-items: flex-start;\n    }\n    .uniqueid {\n      display: none;\n    }\n    #showMsgDiv {\n      width:800px;\n      padding: 60px 0;\n      text-align: center;\n      font-size: 30px;\n      color: var(--fg-color);\n    }\n";styleElement.innerHTML=cssCode,document.head.appendChild(styleElement);var techsidkey="techsid"+window.location.port,loading=!1;const msgBox=$el("div.comfy-modal",{parent:document.body},[]),msgDiv=$el("div",{id:"msgDiv"},"");msgBox.appendChild(msgDiv),msgBox.style.display="none",msgBox.style.zIndex=10001;let manager_instance=null;function setCookie(e,t,i=1){var s={value:t,expires:new Date((new Date).getTime()+24*i*60*60*1e3)};localStorage.setItem(e,JSON.stringify(s))}function getCookie(e){var t=localStorage.getItem(e);return t?(t=JSON.parse(t),new Date(t.expires)>new Date?t.value:(localStorage.removeItem(e),"")):""}function generateTimestampedRandomString(){return(Date.now().toString(36)+Array(3).fill(0).map((()=>Math.random().toString(36).substring(2))).join("").substring(0,18)).substring(0,32)}function showLoading(e=""){hideLoading(),msgDiv.innerText=e||"请稍后...",msgBox.style.display="block",loading=!0}function hideLoading(){msgBox.style.display="none",loading=!1}function showToast(e="",t=0){t=t>0?t:2e3,msgDiv.innerText=e||"谢谢",msgBox.style.display="block",setTimeout((()=>{msgBox.style.display="none"}),t)}var serverUrl=window.location.href;const qrCode=$el("img",{id:"qrCode",src:"",onerror:()=>{}}),qrDesc=$el("div",{id:"qrDesc"},"请用微信扫码，验证身份..."),qrBox=$el("div",{id:"qrBox"},[qrCode,qrDesc]);app.ui.dialog.element.style.zIndex=10010;const showMsgDiv=$el("div",{id:"showMsgDiv"},"请稍后...");function showCodeBox(e){app.ui.dialog.close();let t=[];for(let i=0;i<e.length;i++)t.push($el("div.codeDiv",{},[$el("img.codeImg",{src:e[i].code}),$el("div.codeDesc",{},e[i].desc)]));const i=$el("div.codeBox",{},t);app.ui.dialog.show(i)}function showQrBox(e,t){app.ui.dialog.close(),qrDesc.innerText=t,qrCode.src=e,app.ui.dialog.show(qrBox)}function hideCodeBox(){app.ui.dialog.close()}function showMsg(e){app.ui.dialog.close(),showMsgDiv.innerText=e,app.ui.dialog.show(showMsgDiv)}function hideMsg(){app.ui.dialog.close()}function tech_alert(e){loading=!1,showMsg(e)}function getPostData(e){const t=e.output;let i=0,s={},o={},n={},d=[];for(const e in t)"sdBxb"==t[e].class_type&&(s=t[e].inputs,i++),"SaveImage"!=t[e].class_type&&"VHS_VideoCombine"!=t[e].class_type&&"sdBxb_saveImage"!=t[e].class_type||(t[e].res_node=e,d.push(t[e]));if(i>1)return"工作流中只可以存在1个“SD变现宝”节点";if(d.length<1)return"请确保工作流中有且仅有1个“SaveImgae”、“sdBxb_saveImage”或“VHS_VideoCombine”节点，目前有"+d.length+"个";if(d.length>1)return"请确保工作流中有且仅有1个“SaveImgae”、“sdBxb_saveImage”或“VHS_VideoCombine”节点，目前有"+d.length+"个";if(n.res_node=d[0].res_node,s){if(o.zhutu1=s["app_img1(optional)"],o.zhutu2=s["app_img2(optional)"],o.zhutu3=s["app_img3(optional)"],o.cs_img1=s["custom_img1(optional)"],o.cs_img2=s["custom_img2(optional)"],o.cs_img3=s["custom_img3(optional)"],o.cs_video1=s["custom_video1(optional)"],o.cs_video2=s["custom_video2(optional)"],o.cs_video3=s["custom_video3(optional)"],o.cs_text1=s["custom_text1(optional)"],o.cs_text2=s["custom_text2(optional)"],o.cs_text3=s["custom_text3(optional)"],o.title=s.app_title,o.gn_desc=s.app_desc,o.sy_desc="作品使用说明",o.server=serverUrl,o.fee=s.app_fee,o.free_times=s.free_times,o.cs_img1_desc=s.custom_img1_desc,o.cs_img2_desc=s.custom_img2_desc,o.cs_img3_desc=s.custom_img3_desc,o.cs_video1_desc=s.custom_video1_desc,o.cs_video2_desc=s.custom_video2_desc,o.cs_video3_desc=s.custom_video3_desc,o.cs_text1_desc=s.custom_text1_desc,o.cs_text2_desc=s.custom_text2_desc,o.cs_text3_desc=s.custom_text3_desc,o.uniqueid=s.uniqueid,n.zhutus=[],o.zhutu1){if("LoadImage"!=t[o.zhutu1[0]].class_type)return"“app_img1”只可以连接“LoadImage”节点";t[o.zhutu1[0]].inputs.image&&n.zhutus.push(t[o.zhutu1[0]].inputs.image)}if(o.zhutu2){if("LoadImage"!=t[o.zhutu2[0]].class_type)return"“app_img2”只可以连接“LoadImage”节点";t[o.zhutu2[0]].inputs.image&&n.zhutus.push(t[o.zhutu2[0]].inputs.image)}if(o.zhutu3){if("LoadImage"!=t[o.zhutu3[0]].class_type)return"“app_img3”只可以连接“LoadImage”节点";t[o.zhutu3[0]].inputs.image&&n.zhutus.push(t[o.zhutu3[0]].inputs.image)}if(n.cs_img_nodes=[],o.cs_img1){if("LoadImage"!=t[o.cs_img1[0]].class_type)return"“custom_img1”只可以连接“LoadImage”节点";n.cs_img_nodes.push({node:o.cs_img1[0],desc:o.cs_img1_desc})}if(o.cs_img2){if("LoadImage"!=t[o.cs_img2[0]].class_type)return"“custom_img2”只可以连接“LoadImage”节点";n.cs_img_nodes.push({node:o.cs_img2[0],desc:o.cs_img2_desc})}if(o.cs_img3){if("LoadImage"!=t[o.cs_img3[0]].class_type)return"“custom_img3”只可以连接“LoadImage”节点";n.cs_img_nodes.push({node:o.cs_img3[0],desc:o.cs_img3_desc})}if(n.cs_video_nodes=[],o.cs_video1){if("VHS_LoadVideo"!=t[o.cs_video1[0]].class_type)return"“custom_video1”只可以连接“Load Video (Upload) 🎥🅥🅗🅢”节点";n.cs_video_nodes.push({node:o.cs_video1[0],desc:o.cs_video1_desc})}if(o.cs_video2){if("VHS_LoadVideo"!=t[o.cs_video2[0]].class_type)return"“custom_video2”只可以连接“Load Video (Upload) 🎥🅥🅗🅢”节点";n.cs_video_nodes.push({node:o.cs_video2[0],desc:o.cs_video2_desc})}if(o.cs_video3){if("VHS_LoadVideo"!=t[o.cs_video3[0]].class_type)return"“custom_video3”只可以连接“Load Video (Upload) 🎥🅥🅗🅢”节点";n.cs_video_nodes.push({node:o.cs_video3[0],desc:o.cs_video3_desc})}if(n.cs_text_nodes=[],o.cs_text1){if(!t[o.cs_text1[0]]||void 0===t[o.cs_text1[0]].inputs||void 0===t[o.cs_text1[0]].inputs.text)return"“custom_text1”只可以连接“textInput”节点";n.cs_text_nodes.push({node:o.cs_text1[0],desc:o.cs_text1_desc})}if(o.cs_text2){if(!t[o.cs_text2[0]]||void 0===t[o.cs_text2[0]].inputs||void 0===t[o.cs_text2[0]].inputs.text)return"“custom_text2”只可以连接“textInput”节点";n.cs_text_nodes.push({node:o.cs_text2[0],desc:o.cs_text2_desc})}if(o.cs_text3){if(!t[o.cs_text3[0]]||void 0===t[o.cs_text3[0]].inputs||void 0===t[o.cs_text3[0]].inputs.text)return"“custom_text3”只可以连接“textInput”节点";n.cs_text_nodes.push({node:o.cs_text3[0],desc:o.cs_text3_desc})}return o.title?(n.title=o.title,o.gn_desc?(n.gn_desc=o.gn_desc,o.sy_desc?(n.sy_desc=o.sy_desc,o.fee>=0?(n.fee=o.fee,o.free_times>=0?(n.free_times=o.free_times,n.uniqueid=o.uniqueid,n.output=t,n.workflow=e.workflow,n):"“free_times”不能小于0"):"“app_fee”不能小于0分，即0元"):"请填写作品使用说明"):"“app_desc”, 不可为空，请填写作品功能介绍"):"“app_title”, 不可为空，请填写作品标题"}}async function requestExe(e,t){var i=localStorage.getItem("comfyuitid")??"";const s=await api.fetchApi("/manager/tech_zhulu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({r:e,comfyui_tid:i,postData:t})});if(!s.ok)return void setTimeout((()=>{showToast("网络连接出错，请保持电脑联网",3e3)}),300);return await s.json()}async function login(e){let t=await requestExe("comfyui.apiv2.code",{s_key:e});return"none"!=app.ui.dialog.element.style.display?t.data.data.data.techsid.length>5?t.data.data.data.techsid:(await new Promise((e=>setTimeout(e,800))),await login(e)):void 0}async function request(e,t){showLoading("处理中，请稍后...");let i=await requestExe(e,t);if(41009!=i.errno)return hideLoading(),i;{let i=await requestExe("comfyui.apiv2.code",{s_key:""});if(i){if(1==i.data.data.code){hideLoading(),showQrBox(i.data.data.data,i.data.data.desc);let s=await login(i.data.data.s_key);return hideCodeBox(),console.log(s),s?(localStorage.setItem("comfyuitid",s),await request(e,t)):void 0}return void showToast(i.data.data.message)}}}function backWeiget(e){let t=window.huise_widget??{};if(e.widgets){let i={name:e.type,widgets:{}};e.widgets.forEach(((e,t)=>{i.widgets[e.name]={type:e.type,name:e.name,value:e.value,options:e.options}})),t[e.type]=i}window.huise_widget=t}function chainCallback(e,t,i){if(null!=e)if(t in e){const s=e[t];e[t]=function(){const e=s.apply(this,arguments);return i.apply(this,arguments),e}}else e[t]=i;else console.error("Tried to add callback to non-existant object")}app.registerExtension({name:"sdBxb",async beforeRegisterNodeDef(e,t,i){const s=e.prototype.onNodeCreated;chainCallback(e.prototype,"onNodeCreated",(function(){if(backWeiget(this),"sdBxb"===t.name){const e=s?s?.apply(this,arguments):void 0,t=(this.widgets.findIndex((e=>"zhanwei"===e.name)),$el("button.tech_button",{textContent:"该节点已废弃,请点击屏幕右上角封装应用",style:{},onclick:async()=>{hideCodeBox(),tech_alert("请点击屏幕右上角封装应用")}})),i="1、每创建一个新的“SD变现宝”节点，就对应一个新的作品；",o="2、如有问题，请加官方QQ群：967073981，联系作者咨询。",n="3、视频教程：https://www.bilibili.com/video/BV1Bsg8eeEjv",d=$el("div",{id:"directions"},["特殊说明：",$el("br"),i,$el("br"),o,$el("br"),n]),a=$el("div",{id:"tech_box"},[t,d]);this.addDOMWidget("select_styles","btn",a);const c=document.createElement("input");return c.setAttribute("type","text"),c.setAttribute("list","uedynamiclist"),c.setAttribute("value",generateTimestampedRandomString()),c.className="uniqueid",this.addDOMWidget("uniqueid","input",c,{getValue:()=>c.value,setValue(e){c.value=e}}),setTimeout((()=>{this.setSize([420,500])}),200),e}})),"sdBxb"===t.name&&(this.serialize_widgets=!0)}}),setTimeout((()=>{window.comfyui_app=app,window.comfyui_api=api,console.log(window.comfyui_api),import("/huise_admin/input.js")}),500),app.registerExtension({name:"Huise.menu",async setup(){}});