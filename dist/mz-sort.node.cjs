/*
https://github.com/mzusin/mz-sort
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var f=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var e=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var h=(r,n)=>{for(var o in n)f(r,o,{get:n[o],enumerable:!0})},i=(r,n,o,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let b of e(n))!g.call(r,b)&&b!==o&&f(r,b,{get:()=>n[b],enumerable:!(t=m(n,b))||t.enumerable});return r};var p=r=>i(f({},"__esModule",{value:!0}),r);var c={};h(c,{bubbleSort:()=>x});module.exports=p(c);var x=(r,n=!0)=>{for(let o=0;o<r.length-1;o++)for(let t=0;t<r.length-1-o;t++)n&&r[t]<r[t+1]||!n&&r[t]>r[t+1]||([r[t],r[t+1]]=[r[t+1],r[t]]);return r};0&&(module.exports={bubbleSort});
