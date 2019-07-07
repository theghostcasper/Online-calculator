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
				if(calcArray.length == 1 && calcArray[0] == result){
					if(event.target.innerText<=9 && event.target.innerText>=0)
						calcArray = []
				}
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
	document.addEventListener('keydown',function(event){
		let key = event.keyCode - 96;
		buttons.forEach(function(button){
			if(key == button.attributes[0].value[6]){
				button.click();
			}
		})
		if(key == 11){
			document.querySelector('.nplus').click();
		}
		else if(key == 13){
			document.querySelector('.nminus').click();
		}
		else if(key == 10){
			document.querySelector('.nmul').click();
		}
		else if(key == 15){
			document.querySelector('.ndiv').click();
		}
		else if(key == -29){
			document.querySelector('.nc').click();
		}
		else if(key == -83){
			document.querySelector('.nequal').click();
		}
		else if(key == 14 || key == 94){
			document.querySelector('.ndot').click();
		}
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