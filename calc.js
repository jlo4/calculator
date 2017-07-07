var saved = "0";
const ScreenValue = "0";
// var MathValue = ;
const MaxDigits = 4;

var total;
var toDo = [];
var saved = [];
var full = [];
var newSaved = [];
var add = function add(num1, num2) {
		return num1 + num2;
	}

var multiply = function multiply(num1, num2) {
	return num1 * num2;
}

var divide = function divide(num1, num2) {
	return num1 / num2;
}

var subtract = function subtract(num1, num2) {
	return num1 - num2;
}

var result;
// switch(mathValue) {
//
// 	case '+':
// 	break;
//
//
//
	// case 'x':
//

// }
$(document).ready(function(){

	$(".number").on("click", function handler(){
		if(saved.length < 5){
		var num = $(this).text();
//Change num to Number() after adding strings together
		saved.push(num);
		console.log(saved.length);
		total = 0;
		for(var i = 0; i < saved.length; i++){
			total += saved[i];
		}
		console.log("Total= " + total);
		$("#screen").text(total);
		// while (saved.length < 5) {
		// saved.push(num);
	}
});
  // var handler =  function(){



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
	$("#divide").on("click", function(){
		toDo[0] = '/';
		$("#screen").text(toDo[0]);
		newSaved = savedConcat(saved);
		saved = [];
	});

	$("#subtract").on("click", function(){
		toDo[0] = '-';
		$("#screen").text(toDo[0]);
		newSaved = savedConcat(saved);
		saved = [];
	});

	$("#multiply").on("click", function(){
		toDo[0] = 'x';
		$("#screen").text(toDo[0]);
		newSaved = savedConcat(saved);
		saved = [];
	});

	$("#add").on("click", function(){
		toDo[0] = '+';
		$("#screen").text(toDo[0]);
		newSaved = savedConcat(saved);
		saved = [];
		// console.log(newSaved + toDo[0]);
	});
	// for(var i = 0; i < saved.length; i++){
	// 	console.log(saved[i]);
	// }
	$("#equals").on("click", function(){
		num = $(this).text();
		saved = savedConcat(saved);
		math = toDo[0];
		console.log(math);
		switch(toDo[0]) {
			case '+':
						result = add(Number(newSaved), Number(saved));
						console.log(result);
						$("#screen").text(result);
			break;
			case 'x':
						result = multiply(Number(newSaved), Number(saved));
						console.log(result);
						$("#screen").text(result);
			break;
			case '/':
						result = divide(Number(newSaved), Number(saved));
						console.log(result);
						$("#screen").text(result);
			break;
			case '-':
						result = subtract(Number(newSaved), Number(saved));
						console.log(result);
						newSaved = result;
						console.log(total);
						console.log("NewSaved = " + newSaved);

						$("#screen").text(result);
			break;
			default: console.log("Something is wrong");
		}
		// console.log((add(Number(newSaved), Number(saved))));
		// for(var k = 0; k < result.length; k++){
		// 	console.log("WHAT =" + result[k]);
		// }

		// console.log("RESULT " + result);
		toDo[0] = '';
	});
  var savedConcat = function(arr){
		var concat = 0;
		for(i = 0; i < arr.length; i++){
			concat += arr[i];
		}
		return concat;
	}
	$("#clear").on("click", function(){
		total = 0;
		saved = [];
		newSaved = [];
		result = 0;
		$("#screen").text(result);
		console.log(total, saved.length, newSaved, result);
	});

	});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
// });
 // toDo[0] + $('#screen').text().length
