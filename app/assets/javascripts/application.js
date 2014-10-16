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
	$("#moins").hide();
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

	$('#plus').click(function() {
		$('#logo_jb').hide();
		$('#yellowblock').slideDown("slow");
		$('#plus').hide();
		$('#moins').show();
	});

	$('#moins').click(function() {
		$('#yellowblock').slideUp("slow");
		$('#moins').hide();
		$('#plus').show();
	});

	$('#moins').click(function() {
		$('#logo_jb').delay(660).show(0);
	});

});

