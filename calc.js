const Saved = "0";
const ScreenValue = "0";
const MathValue = 0;
const MaxDigits = 4;

$(document).ready(function(){

	$("span").on("click", function(){
		var num = $(this).text();
		$("#screen").text(num);
		var math = Number(num);
	});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
});