var saved = "0";
const ScreenValue = "0";
// var MathValue = ;
const MaxDigits = 4;

var result;
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
	var num;
	$(".number").on("click", function handler(){
		if(saved.length < 5){
		num = $(this).text();
//Change num to Number() after adding strings together
		saved.push(num);
		console.log(saved.length);
		result = "";
		for(var i = 0; i < saved.length; i++){
			result += saved[i];
		}
		console.log(typeof result);
		console.log("Result= " + result);
		$("#screen").text(result);
		// while (saved.length < 5) {
		// saved.push(num);
	} else {
		$("#screen").text(result);
	}
});

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
						console.log("RESULT= " + result);
						if (result % 1 != 0) {
							result = result.toFixed(3);
							saved = result.toString().split("");
							console.log(typeof saved);
							console.log("NewSaved = " + newSaved);
							$("#screen").text(result);
						} else {
						saved = result.toString().split("");
						console.log(typeof saved);
						console.log("NewSaved = " + newSaved);
						$("#screen").text(result);
					}
			break;
			case 'x':
						result = multiply(Number(newSaved), Number(saved));
						console.log(result);
						if (result % 1 != 0) {
							result = result.toFixed(3);
							saved = result.toString().split("");
							console.log(typeof saved);
							console.log("NewSaved = " + newSaved);
							$("#screen").text(result);
						} else {
						saved = result.toString().split("");
						console.log(typeof saved);
						console.log("NewSaved = " + newSaved);
						$("#screen").text(result);
					}
			break;
			case '/':
						result = divide(Number(newSaved), Number(saved));
						if (result % 1 != 0) {
							result = result.toFixed(3);
							saved = result.toString().split("");
							console.log(typeof saved);
							console.log("NewSaved = " + newSaved);
							$("#screen").text(result);
						} else {
						saved = result.toString().split("");
						console.log(typeof saved);
						console.log("NewSaved = " + newSaved);
						$("#screen").text(result);
					}
			break;
			case '-':
						result = subtract(Number(newSaved), Number(saved));
						if (result % 1 != 0) {
							result = result.toFixed(3);
							saved = result.toString().split("");
							console.log(typeof saved);
							console.log("NewSaved = " + newSaved);
							$("#screen").text(result);
						} else {
						saved = result.toString().split("");
						console.log(typeof saved);
						console.log("NewSaved = " + newSaved);
						$("#screen").text(result);
					}
			break;
			default: console.log("Something is wrong");
		}
		// console.log((add(Number(newSaved), Number(saved))));
		// for(var k = 0; k < result.length; k++){
		// 	console.log("WHAT =" + result[k]);
		// }
			console.log(saved);
			newSaved = [];
			console.log(saved);
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
		saved = [];
		newSaved = [];
		result = 0;
		$("#screen").text(result);
		console.log(saved.length, newSaved, result);
	});
	var width = $(window).width();
	console.log(width);
});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
// });
 // toDo[0] + $('#screen').text().length
