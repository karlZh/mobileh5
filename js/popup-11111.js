//双十一弹窗提示
	function popUp(){
		$(".popup").append('<div class="cover" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 1110;background: rgba(1,1,1,.8);"></div><div class="popup-img animated pulse" style="position: absolute;top:50%;left: 50%;margin-top: -130px;margin-left: -150px;z-index: 1111;"><img src="../images/jy_index/1111.png" alt="双十一提示" / style="width:300px;" ><img src="../images/jy_index/1111-close.png" alt="" style="position: absolute;right:0px;top:-10px;" class="popup-close"></div>')
		mui("body").on("tap",".popup-close",function(){
   		$('.popup-img').removeClass('animated pulse').addClass('animated bounceOut');	
   		$(".cover").fadeOut(1500);
		})
		setTimeout(function(){
			$('.popup-img').removeClass('animated pulse').addClass('animated bounceOut');	
   			$(".cover").fadeOut(1500);
		},10000)
	}
