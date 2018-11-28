$(document).ready(function(){

// =========MENU MOVIL====================
var flag = false; 
var pantalla = $(window).height();
$("div.hero").pantalla;

$(window).scroll(stickyMenu);
$('i.btn-menu').click(menuMovilDesplegable);

$(window).on("resize", function() {
	if ($(this).width() > 580) {
		$("nav.navegacion").show();
		$("i.btn-menu").addClass("fa-arrow-circle-left");
		$("i.btn-menu").removeClass("fa-bars");
	} 
	else {
		$("nav.navegacion").hide();
		$("i.btn-menu").addClass("fa-bars");
		$("i.btn-menu").removeClass("fa-arrow-circle-left");
	}
});

function menuMovilDesplegable(){
	$("nav.navegacion").slideToggle();
	$("i.btn-menu").toggleClass("fa-bars");
	$("i.btn-menu").toggleClass("fa-arrow-circle-left");
};

function stickyMenu() {
	var scroll = $(window).scrollTop();

	if (scroll > $("div.hero").height() + 50) {
		if (!flag) {
			console.log("FUNCIONA!!!");
			$("div.barra").css({"position":"fixed", "top":"0px"});
			flag = true;
		}
	} else {
		if (flag) {
			$("div.barra").css({"position":"static"});
			flag = false;
		}
	}
}
// =====================================

});