

$(function(){
	
	$("#title_submenu").hide();
	
	$("#add").click(function(e){
		$("#title_submenu").toggle(200)
		e.stopPropagation()
//		$("#trangle").toggle(200)
	})
	
})
