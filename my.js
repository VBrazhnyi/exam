function getMinutes(sec){
	if(sec>3600){
	hv=sec%3600;
	vh=Math.floor(hv/60)
	document.write(vh);
	} else{
		document.write(0);
	}
}
getMinutes(3600);