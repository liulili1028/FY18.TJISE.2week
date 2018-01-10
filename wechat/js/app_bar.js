$(function() {
	 //每1秒 执行的函数  // 定时任务
	var task = setInterval("updateQuantity()", 1000)

	$("#batteray").click(function() {
		clearInterval(task);
	})


})

function updateQuantity() {

	if($("#batteray_body").width() + 1 > $("#batteray").width()) {
		$("#batteray_body").width(1);
	} else {
		$("#batteray_body").width( $("#batteray_body").width() + 1 )
	}

	var curr = $("#batteray_body").width() / $("#batteray").width()

	if(curr <= 0.2) {
		$("#batteray_body").css('background-color', '#f44336');
	} else if(curr > 0.2 && curr <= 0.8) {
		$("#batteray_body").css('background-color', '#FFF176');
	} else if(curr > 0.8) {
		$("#batteray_body").css('background-color', '#8BC34A');
	} else {
		console.log("batteray  boom !!!!!!!  peng !!!!!")
	}
}