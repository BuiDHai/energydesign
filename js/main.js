$(window).on("load",function(){
  $(".mCustomScrollbar").mCustomScrollbar();
});

function toggleClass(elem, className) {
  $(elem).click(function() {
    $(this).toggleClass(className);
  });
}

$( document ).ready(function() {
  $('.navbar .navbar-toggler').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
    $('body, html').toggleClass('hidden');
  });

  $('.ani_basic').on('inview', function () { $(this).stop().addClass('on'); });
  
  // image swich 
	$(function() {
		var $elem = $('img.swich');
		var sp = '/sp/';
		var pc = '/pc/';
		var replaceWidth = 767;
	
		function imageSwitch() {
			var windowWidth = parseInt($(window).width());
	
			$elem.each(function() {
				var $this = $(this);
				if(windowWidth > replaceWidth) {
					$this.attr('src', $this.attr('src').replace(sp, pc));
				} else {
					$this.attr('src', $this.attr('src').replace(pc, sp));
				}
			});
		}
		imageSwitch();
	
		var resizeTimer;
		$(window).on('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				imageSwitch();
			}, 200);
		});
  });

  $(".page-top").click(function(e) {
	  e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
  });
  
});