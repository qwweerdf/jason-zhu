function num(n) {
	if (calWay.value==="") {
		if (n==='-') {
			firstNum.value=n+firstNum.value;
		} else {
			firstNum.value=firstNum.value+n;
		}
	} else if(calWay.value!=="") {
		if (n==='-') {
			secondNum.value=n+secondNum.value;
		} else {
			secondNum.value=secondNum.value+n;
		}
		
	}	
}

function way(char) {
	calWay.value=char;
}

function calculate() {
	var n1=parseFloat(firstNum.value);
	var n2=parseFloat(secondNum.value);
	if(firstNum.value===""||secondNum.value===""||calWay.value==="")
	{
		alert("Please enter numbers!");
	} else {
		switch (calWay.value) {
		case '+':
		resultVal.value=n1+n2;
		break;

		case '-':
		resultVal.value=n1-n2;
		break;

		case '*':
		resultVal.value=n1*n2;
		break;

		case '/':
		if(n2===0) {
			alert("The denominator cannot be zero!")
		} else {
			resultVal.value=n1/n2;
		}
		break;
		}	
	}

	
}