let calcArray = []
let result = 0;
let buttons = Array.from(document.querySelectorAll('button'))
buttons.forEach(function(button){
	button.addEventListener('click',function(event){
		if(event.target.innerText == 'C')
		{
			calcArray = []
		}
		else{
			calcArray.push(event.target.innerText)				
		}
	});
})

