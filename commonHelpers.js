/* empty css                      */import{f as u}from"./assets/vendor-4daf66c6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector("#datetime-picker"),c=document.querySelector("button[data-start]");console.log(c);console.log(i);const a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){console.log(r[0]),r<=new Date?(window.alert("Please choose a date in the future"),c.disable=!0):(selectedDate,startButton.disabled=!1)}};u(i,a);
//# sourceMappingURL=commonHelpers.js.map
