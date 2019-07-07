let calcArray = []
let result = 0;
let buttons = Array.from(document.querySelectorAll('button'))
buttons.forEach(function(button){
	button.addEventListener('click',function(event){
		if(event.target.innerText == 'C')
		{
			calcArray = [];
			result = '';
			showOperation();
			showResult();
		}
		else if(event.target.innerText != '='){
			calcArray.push(event.target.innerText)
			showOperation();
			showResult();			
		}
		if(event.target.innerText == '='){
			calcArray = [calcArray.calc()];
			if(calcArray[0] == undefined)
				calcArray[0]='';
			if(result == undefined)
				result = '';
			showOperation();
			showResult();
		}
	});
})


function showResult(){
	let screen = document.querySelector('#resultScreen');
	screen.innerText = result;
}
function showOperation(){
	let screen = document.querySelector('#operationScreen');
	let operations = calcArray.join('');
	screen.innerText = operations;
}

function calc(){
	if(this[this.length-1] > '9' || this[this.length-1] < '0' )
		this.pop();
	result = eval(this.join(''));
	showResult();
	return result;
}
calcArray.__proto__.calc  = calc;