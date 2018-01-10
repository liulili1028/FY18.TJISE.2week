
	$(function() {    

		var key = "b7f3afeea99c40c7a9df742f64551105";
		var url = "http://www.tuling123.com/openapi/api";

		$('#btn').click(function() {  //当点击时
			
			var info = {
				"key": key,
				"info": $("#content").val() 
			}   //向图灵 发送 聊天数据     .val  =  value
			
			var self = $("<div class='right size'>"+$("#content").val()+"</div><br>")
			$("#wrap").append(self)
			

			$.ajax({
				type: "POST",
				url: url,
				data: info,
				dataType: "json",
				success: function(result) {
					var robot = $("<div class='left size'>"+result.text +"</div><br>")

					$("#wrap").append(robot)
				
				}
			});

		})

	})

