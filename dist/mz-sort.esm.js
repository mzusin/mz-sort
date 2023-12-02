/*
https://github.com/mzusin/mz-sort
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var j=(r,e=!0)=>{for(let n=0;n<r.length-1;n++)for(let t=0;t<r.length-1-n;t++)e&&r[t]<r[t+1]||!e&&r[t]>r[t+1]||([r[t],r[t+1]]=[r[t+1],r[t]]);return r};var S=(r,e=!0)=>{for(let n=0;n<r.length-1;n++){let t=n;for(let o=n+1;o<r.length;o++)e?r[o]<r[t]&&(t=o):r[o]>r[t]&&(t=o);[r[n],r[t]]=[r[t],r[n]]}return r};var I=(r,e=!0)=>{for(let n=1;n<r.length;n++){let t=r[n],o=n-1;if(e)for(;o>=0&&t<r[o];)r[o+1]=r[o],o--;else for(;o>=0&&t>r[o];)r[o+1]=r[o],o--;r[o+1]=t}return r};var k=(r,e=!0)=>(g(r,0,r.length-1,e),r),w=(r,e,n,t,o)=>{let x=[],c=[],h=n-e+1,p=t-n;for(let i=0;i<h;i++)x[i]=r[e+i];for(let i=0;i<p;i++)c[i]=r[n+1+i];let m=0,b=0,f=e;for(;m<h&&b<p;)o?x[m]<=c[b]?(r[f]=x[m],m++):(r[f]=c[b],b++):x[m]>=c[b]?(r[f]=x[m],m++):(r[f]=c[b],b++),f++;for(;m<h;)r[f]=x[m],m++,f++;for(;b<p;)r[f]=c[b],b++,f++},g=(r,e,n,t)=>{if(e>=n)return r;let o=Math.floor((n+e)/2);return g(r,e,o,t),g(r,o+1,n,t),w(r,e,o,n,t),r};export{j as bubbleSort,I as insertionSort,k as mergeSort,S as selectionSort};
