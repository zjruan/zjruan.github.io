PrintTime();

loadLongTime();

PrintTime();
function loadLongTime(){
	for(var i=10000000000;i>0;i--){
		noneF(i);
	}
}

function noneF(i){
	var m=i;
}

function PrintTime(){
	document.writeln('中间一次打印');
	document.writeln(new Date());	
}