var saved = "0";
const ScreenValue = "0";
// var MathValue = ;
const MaxDigits = 4;

var toDo = [];
var saved = [];
var full = [];
// switch(mathValue) {
//
// 	case '+': function add(num1, num2) {
// 		return num1 + num2;
// 	}
// 	break;
//
//
//
// 	case 'x': function multiply(num1, num2) {
// 		return num1 * num2;
// 	}
//
// 	case '/': function divide(num1, num2) {
// 		return num1 / num2;
// 	}
//
// 	case '-': function subtract(num1, num2) {
// 		return num1 - num2;
// 	}
// }
$(document).ready(function(){
	$(".number").on("click", function(){
		var num = $(this).text();
		num = Number(num);
		$("#screen").text(num);
		while (saved.length < 5) {
		saved.push(num);
	}
		// switch(savedDigit) {
		// 	case 1: toDoconsole.log(toDosavedDigit);
		// 	break;
		// 	case 2: console.log(savedDigit);
		// 	break;
		// 	case 3: console.log(savedDigit);
		// 	break;
		// 	case 4: console.log(savedDigit);
		// 	break;
		// 	case 5: console.log(savedDigit);
		// 	break;
		// 	case 6: console.log(savedDigit);
		// 	break;
		// 	case 7: console.log(savedDigit);
		// 	break;
		// 	case 8: console.log(savedDigit);
		// 	break;
		// 	case 9: console.log(savedDigit);
		// 	break;
		// 	default: console.log("get savedDigit");
		// 	break;
		// }

	$("#add").on("click", function(){
		toDo.push('+');
		var numbers = 0;
		// console.log(numbers + ' ' + toDo[0]);
	});
	// for(var i = 0; i < saved.length; i++){
	// 	console.log(saved[i]);
	// }
	$("#equals").on("click", function(){
		console.log(saved[0] + ' ' + toDo[0] + ' ' + saved[1]);
		saved =[];
	});

	});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
});
 // toDo[0] + $('#screen').text().length
