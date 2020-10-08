$(document).ready(function(){
    $(".custom_box .circle").click(function(){	
		var hold = $(this).attr('id');
        $("#"+hold + " .title").toggleClass("hide");
        $("#"+hold + " .content").toggleClass("show-content");
        $("#"+hold + "").toggleClass("show-hover");
	
		if($("#circle1 .content").is(":visible") && $("#circle2 .content").is(":visible") && $("#circle3 .content").is(":visible")){

			 $("#circle1").css('transform', 'translate(0%,0%)');
			 $("#circle2").css('transform', 'translate(0%,0%)');
			 $("#circle3").css('transform', 'translate(0%,0%)');
			 
			 $("#circle1 .content").toggleClass("show-content");			 
			 $("#circle2 .content").toggleClass("show-content");			
			 $("#circle3 .content").toggleClass("show-content");
			 
			 
			 $("#circle1 .content").addClass("hide-content");			 
			 $("#circle2 .content").addClass("hide-content");			
			 $("#circle3 .content").addClass("hide-content");
			 
			 $("#better-result").removeClass('hide-title');
			 $('.custom_box .circle .content').off('hover');
			 
	
			 setTimeout(function(){
				$("#circle1").css({'transform':'translate(-40%, -30%)', 'transition':'transform 2s ease-in-out'});
				$("#circle2").css({'transform':'translate(40%, -30%)' , 'transition':'transform 2s ease-in-out'});
				$("#circle3").css({'transform': 'translate(0%, 30%)', 'transition':'transform 2s ease-in-out'});
				
				$("#circle1 .title").toggleClass("hide");				
				$("#circle1").toggleClass("show-hover");
				
				$("#circle2 .title").toggleClass("hide");
				$("#circle2").toggleClass("show-hover");
				
				$("#circle3 .title").toggleClass("hide");
				$("#circle3").toggleClass("show-hover");
					
				$("#better-result").addClass('hide-title');
				
				$('.custom_box .circle .content').on('hover');
				
				$("#circle1 .content").removeClass("hide-content");			 
				$("#circle2 .content").removeClass("hide-content");			
				$("#circle3 .content").removeClass("hide-content");
				}, 10000);
		}
    });
});