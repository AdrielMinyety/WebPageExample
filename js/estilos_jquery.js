$(document).ready(function(){

// =========MENU MOVIL====================
var prevScrollPos = window.pageYOffset;
var flag = false; 
var pantalla = $(window).height();
$("div.hero").pantalla;

$(window).scroll(stickyMenu);
$('i.btn-menu').click(menuMovilDesplegable);

$(window).on("resize", function() {
	// Responsive
	if ($(this).width() > 580) {
		$("nav.navegacion").show();
		$("i.btn-menu").addClass("fa-chevron-circle-left");
		$("i.btn-menu").removeClass("fa-bars");
	} 
	else {
		$("nav.navegacion").hide();
		$("i.btn-menu").addClass("fa-bars");
		$("i.btn-menu").removeClass("fa-chevron-circle-left");
	}
});

function menuMovilDesplegable(){
	$("nav.navegacion").slideToggle();
	$("i.btn-menu").toggleClass("fa-bars");
	$("i.btn-menu").toggleClass("fa-chevron-circle-left");
};

function stickyMenu() {
	var scroll = $(window).scrollTop();

	if (scroll > $("div.hero").height() + 125) {
		hideShowMenu();
		if (!flag) {
			// console.log("FUNCIONA!!!");
			$("div.barra").css({"position":"fixed"});
			flag = true;
		}
	} else {
		if (flag) {
			$("div.barra").css({"position":"static"});
			flag = false;
		}
	}
}

function hideShowMenu() {
	var currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		$("div.barra").css({"top":"0px"});
		$("div.detector").hide();
		// console.log("sadas");
	} else {
		$("div.barra").css({"top":"-400px"});
		$("div.detector").show();
		// console.log("sadas2");		
	}

	prevScrollPos = currentScrollPos;
}

$("div.detector").mouseover(function() {
	$("div.barra").css({"top":"0px"});
	var flagBarra = true;
	if (flagBarra) {
		$("div.detector").hide();
	}
});
// =====================================

});