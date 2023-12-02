/*
https://github.com/mzusin/mz-sort
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var b=(r,o=!0)=>{for(let n=0;n<r.length-1;n++)for(let t=0;t<r.length-1-n;t++)o&&r[t]<r[t+1]||!o&&r[t]>r[t+1]||([r[t],r[t+1]]=[r[t+1],r[t]]);return r};export{b as bubbleSort};
