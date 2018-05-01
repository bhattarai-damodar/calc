
document.addEventListener('DOMContentLoaded',myLoad);

function myLoad(){
	var btn = document.getElementById('1');
	btn.addEventListener('click', number);
	var btn = document.getElementById('2');
	btn.addEventListener('click', number);
	var btn = document.getElementById('3');
	btn.addEventListener('click', number);
	var btn = document.getElementById('4');
	btn.addEventListener('click', number);	
	var btn = document.getElementById('5');
	btn.addEventListener('click', number);
	var btn = document.getElementById('6');
	btn.addEventListener('click', number);	
	var btn = document.getElementById('7');
	btn.addEventListener('click', number);
	var btn = document.getElementById('8');
	btn.addEventListener('click', number);
	var btn = document.getElementById('9');
	btn.addEventListener('click', number);
	var btn = document.getElementById('0');
	btn.addEventListener('click', number);
	var btn = document.getElementById('minus');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('add');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('divide');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('multiply');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('point');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('equal');
	btn.addEventListener('click', result);
	var btn = document.getElementById('C');
	btn.addEventListener('click', clear);
	var btn = document.getElementById('percent');
	btn.addEventListener('click', operator);
	var btn = document.getElementById('backspace');
	btn.addEventListener('click', remove);
	var btn = document.getElementById('bracket');
	btn.addEventListener('click', braces);

}


function number (){
	
	var input=(this.value);
	var result = document.getElementById('display');
	var string=result.value;
var stringLength = string.length;
var lastChar = string.charAt(stringLength - 1); 
if(lastChar==')'){
	return;
}
	result.value=((result.value)+input);	

}
function operator(){
	var result = document.getElementById('display');
	var input=(this.value);
// Identifying last character in calculator
// so that it doesn't repeat the same on clicking
		var string=result.value;
var stringLength = string.length;
var lastChar = string.charAt(stringLength - 1); 

		if(lastChar==='+'){
			return;
		}
		else if(lastChar==='-'){
			return;
		}
		else if(lastChar==='/'){
			return;
		}
		else if(lastChar==='*'){
			return;
		}
		else if(lastChar==='%'){
			return;
		}
		else if(lastChar==='.'){
			return;
		}
	result.value=((result.value)+input);	
}

function result(){
	var fresult = document.getElementById('fresult');
	var result= document.getElementById('display')
	var check=result.value;
	var katiLamo=check.length;
	if(	katiLamo<=0){
		fresult.value="Pagal vais????";
	}
	else
	fresult.value=eval(display.value);
}
function clear(){
	display.value="";
	fresult.value="";
}

function braces(){
	var result = document.getElementById('display');
	// Identifying last character in calculator
// so that it doesn't repeat the same on clicking
		var string=result.value;
var stringLength = string.length;
var lastChar = string.charAt(stringLength - 1); 

		if(lastChar===')'){
			return;
		}
	result.value=("("+result.value+")");
}

function remove(){
var result= document.getElementById('display');
var suruko= result.value;

	display.value = suruko.slice(0, -1);
}
