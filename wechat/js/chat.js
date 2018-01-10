$(function(){
	$(".content_photo").each(function(){
		console.log("图片的路径 : "  + $(this).data("photo"))
		$(this).css('background-image' , 'url('+$(this).data("photo")+')')
	})
	
	$(".content").click(function(){
////		$('.content').animate({scrollTop: $(document).height()}, -300); 
//		$("#content").scrollTop(-100);
//		console.log("----------")
//		
	})
	
})
