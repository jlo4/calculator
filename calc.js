const Saved = "0";
const ScreenValue = "0";
const MathValue = 0;
const MaxDigits = 4;

function add(num1, num2) {
	return num1 + num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

$(document).ready(function(){

	$("span").on("click", function(){
		var num = $(this).text();
		$("#screen").text(num);
		var math = Number(num);
	});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
});
