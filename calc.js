$(document).ready(function(){

	$("span").on("click", function(){
		var saved;
		var num = $(this).text();
		$("#screen").text(num);
		var math = Number(num);
	});
	// math = Number(num) + Number(num)
	// 	$("#screen").text(math);
});