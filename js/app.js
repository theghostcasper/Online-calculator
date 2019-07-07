let calcArray = []
let result = 0;
let buttons = Array.from(document.querySelectorAll('button'))
buttons.forEach(function(button){
	button.addEventListener('click',function(event){
		if(event.target.innerText == 'C')
		{
			calcArray = []
			showOperation();
		}
		else if(event.target.innerText != '='){
			calcArray.push(event.target.innerText)
			showOperation();				
		}
		if(event.target.innerText == '='){
			calcArray = [calcArray.calc()];
			showOperation();
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

