(function(){
	function Calculator(){
		/* Calculator entered values array */
		let values = []
		let result = 0
		/* Calculator current operations, @TODO: implement add operation helper */
		let operations = ['+','/','*','-']
		/* Function to clear the calculator entered values */
		function clear(){
			this.values = []
			this.result = 0
		} 
		/* Function to add a item to the values array */
		function add(item){
			this.values.push(item)
		}
		/* Function to return the join of the array */
		function join(){
			return this.values.join('')
		}
		/* Function to remove the duplicate operations after they have been entered */
		function removeDuplicateOperation(){
			/* Array that stores the locations of operations in the values array */
			let includes = []
			/* Array that stores the locations of operations that should be removed */
			let toSplice = []
			/* this loop stores the operation locations in the includes array */
			this.values.forEach(function(value,index){
				if(operations.includes(value)){
					includes.push(index)
				}
			})
			/* This loop stores the duplicate operations to be removed in the toSplice array */
			for(let i=1, n= includes.length;i<n;i++){
				if(includes[i]-1 == includes[i-1]){
					toSplice.push(includes[i-1])
				}
			}
			/* This loop decrements the toSplice array every step, because while removing 
			data from the array, the array size is reduces, and so the indexes locations */
			for(let i=0, n=toSplice.length;i<n; i++){
				toSplice[i]-=i;
			}
			/* This loop finally splices the duplicate items in the array */
			toSplice.forEach(function(item){
				this.values.splice(item,1)
			})
		}
		function calculate(){
			/* If the last item in the values array is an operation, then remove that operation. */
			if(operations.includes(this.values[this.values.length-1]))
				this.values.pop();
			/* Evaluate the answer */
			this.result = eval(this.values.join(''))
		}
		return {
			values,
			join,
			clear,
			add,
			removeDuplicateOperation,
			calculate,
			result
		}
	}

	function Screen(screen){
		function show(something){
			screen.innerText = something
		}

		return {
			show
		}
	}

	/* Helper functions */
	function click(buttonClass){
		document.querySelector(buttonClass).click();
	}

	/* Event listener for the keyboard */
	document.addEventListener('keydown',function(event){
	    let key = event.keyCode - 96;
	    buttons.forEach(function(button){
	      if(key == button.attributes[0].value[6]){
	        button.click();
	      }
	    })
	    switch(key){
	    	case 11:
	    		click('.nplus')
	    	break;
	    	case 13:
	    		click('.nminus')
	    	break;
	    	case 10:
	    		click('.nmul')
	    	break;
	    	case 15:
	    		click('.ndiv')
	    	break;
	    	case -29:
	    	case -69:
	    		click('.nc')
	    	break;
	    	case -83:
	    		click('.nequal')
	    	break;
	    	case 14:
	    	case 94:
	    		click('.ndot')
	    	break;
	    }
	})

	/* Code logic */
	let calculator = new Calculator()
	let operationScreen = new Screen(document.querySelector('#operationScreen'));
	let resultScreen = new Screen(document.querySelector('#resultScreen'));


	let buttons = document.querySelectorAll('button');
	buttons.forEach(function(button){
		button.addEventListener('click',function(event){
			let buttonValue = event.target.innerText
			if(buttonValue == 'C'){
				calculator.clear()
			}
			else if(buttonValue != '='){
				calculator.add(buttonValue)
			}
			else if(buttonValue == '='){
				calculator.calculate()
			}
		})
	})

	function startCalculator(){
		setInterval(function show(){
			operationScreen.show(calculator.join())
			resultScreen.show(calculator.result)
		},10)
	}
	startCalculator()




}())