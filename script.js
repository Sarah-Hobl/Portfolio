"use strict";

const imgs=document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
let idx = 0;

const run = function(){
	idx ++;
	if(idx>= img.length-1){
		idx=0;
	}
	imgs.style.transform=`translateX(${-idx*500}px)`;
};
setInterval(run, 3000);