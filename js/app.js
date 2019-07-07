(function(){
	let calcArray = []
	let result = 0;
	let buttons = Array.from(document.querySelectorAll('button'))
	let resultScreen = document.querySelector('#resultScreen');
	let operationScreen = document.querySelector('#operationScreen');


	buttons.forEach(function(button){
		button.addEventListener('click',function(event){
			if(event.target.innerText == 'C')
			{
				calcArray = [];
				result = '';
			}
			else if(event.target.innerText != '='){
				calcArray.push(event.target.innerText)			
			}
			if(event.target.innerText == '='){
				calcArray = [calcArray.calc()];
				if(calcArray[0] == undefined)
					calcArray[0]='';
				if(result == undefined)
					result = '';
			}
			showOperation();
			showResult();
		});
	})

	function showResult(){
		resultScreen.innerText = result;
	}
	function showOperation(){
		let operations = calcArray.join('');
		operationScreen.innerText = operations;
	}

	function calc(){
		if(this[this.length-1] > '9' || this[this.length-1] < '0' )
			this.pop();
		result = eval(this.join(''));
		showResult();
		return result;
	}
	calcArray.__proto__.calc  = calc;
}())