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
//= require mailcheck.min
//= require bootstrap
//= require_tree .


$(document).ready(function() {
	$(".moins").hide();
	$("#navbar").hide();
	$(".image2").hide();

	// show the navbar when scrolling below half homepage
	$(document).scroll(function() {
		var navbartop = $("#navbar").offset().top;
		if (navbartop < 320) {
			$("#navbar").hide();
		}
		else {
			$("#navbar").show();
		}
	});

	// scrolldown 1st yellowblock
	$('#plus1').click(function() {
		$('#logo_jb').hide();
		$('#plus1').hide();
		$('#moins1').show();
		$('#yb1').slideDown("slow").promise().then(enlargeYb1);
	});

	$('#moins1').click(function() {
		$('#moins1').hide();
		$('#plus1').show();
		$('#yb1').slideUp("slow").promise().then(shrinkYb1);
		$('#logo_jb').delay(660).show(0);
	});

	// scrolldown 2nd yellowblock
	$('#plus2').click(function() {
		$('#plus2').hide();
		$('#moins2').show();
		$('#yb2').slideDown("slow").promise().then(enlargeYb2);
	});

	$('#moins2').click(function() {
		$('#moins2').hide();
		$('#plus2').show();
		$('#yb2').slideUp("slow").promise().then(shrinkYb2);
	});

	// set the navbar above each page when hyperlink clicked
	var offset = 55;
	$('.navbar li a').click(function(event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});

});


// Les 4 fonctions qui suivent servent à redimensionner les yellowblock des
// pages 'quisommesnous' et 'nosactions' selon la taille du device
// Ces fonctions peuvent être refactorer mais la flemme m'en a empêchée :)
function enlargeYb1()
{
	var quiSommesNousHeight= $('#quisommesnous .yellowblock').height() + $('#quisommesnous .container').height();
	var diff = quiSommesNousHeight - $('#quisommesnous').height();
	if ( quiSommesNousHeight < $('#quisommesnous').height() ) {
		$('#quisommesnous .yellowblock').css('height', '100%');
			} else {
			$('#quisommesnous').css('height', quiSommesNousHeight + 'px');
			for (var index in classesCss = ['#nosprojets', '#nosactions', '#presse', '#etvous', '#souteneznous']){
				$(classesCss[index]).css('top', ($(classesCss[index]).offset().top + diff) + 'px');
			}
	}
}

function shrinkYb1()
{
	regularHeight = $('#nosprojets').height();
	diff = $('#quisommesnous').height() - $('#nosprojets').height();
	$('#quisommesnous').height(regularHeight);
	for (var index in classesCss = ['#nosprojets', '#nosactions', '#presse', '#etvous', '#souteneznous']){
		$(classesCss[index]).css('top', ($(classesCss[index]).offset().top - diff) + 'px');
	}
}

function enlargeYb2()
{
	var nosActionsHeight = $('#nosactions .yellowblock').height() + $('#nosactions .container').height();
	var diff = nosActionsHeight - $('#nosactions').height();
	if ( nosActionsHeight < $('#nosactions').height() ) {
		$('#nosactions .yellowblock').css('height', '100%');
			} else {
			$('#nosactions').css('height', nosActionsHeight + 'px');
			for (var index in classesCss = ['#presse', '#etvous', '#souteneznous']){
				$(classesCss[index]).css('top', ($(classesCss[index]).offset().top + diff) + 'px');
			}
	}
}

function shrinkYb2()
{
	regularHeight = $('#nosprojets').height();
	diff = $('#nosactions').height() - $('#nosprojets').height();
	$('#nosactions').height(regularHeight);
	for (var index in classesCss = ['#presse', '#etvous', '#souteneznous']){
		$(classesCss[index]).css('top', ($(classesCss[index]).offset().top - diff) + 'px');
	}
}