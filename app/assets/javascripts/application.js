// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
	$(".moins").hide();
	$("#header").hide();
	$(document).scroll(function() {
		var navbar = $("#header").offset();
		var navbartop = navbar.top
		if (navbartop < 420) {
			$("#header").hide();
		}
		else {
			$("#header").show();
		}
	});

	// scrolldown 1st yellowblock
	$('#plus1').click(function() {
		$('#logo_jb').hide();
		$('#yb1').slideDown("slow");
		$('#plus1').hide();
		$('#moins1').show();
	});

	$('#moins1').click(function() {
		$('#yb1').slideUp("slow");
		$('#moins1').hide();
		$('#plus1').show();
		$('#logo_jb').delay(660).show(0);
	});

	// scrolldown 2nd yellowblock
	$('#plus2').click(function() {
		$('#yb2').slideDown("slow");
		$('#plus2').hide();
		$('#moins2').show();
	});

	$('#moins2').click(function() {
		$('#yb2').slideUp("slow");
		$('#moins2').hide();
		$('#plus2').show();
	});


	// black tile on photos on 'nos projets' when hover
	$('.photo_col').mouseover(function() {
		$(this).find('.onscroll').addClass("shadow");
	});
	$('.photo_col').mouseout(function() {
		$('.onscroll').removeClass("shadow");
	});

});

