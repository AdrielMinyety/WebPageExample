$(document).ready(function(){

// =========MENU MOVIL====================

$('div.menu-movil').click(menuMovilDesplegable);
$("i.volver").click(volver);
// $(window).scroll();

function menuMovilDesplegable(){
	$("div.menu-movil").toggle("i.volver");
	$("i.volver").fadeIn(800);	
	$("nav.nav-movil").slideToggle();
};

function volver() {
	$("i.volver").hide();	
	$("nav.nav-movil").slideToggle();
	$("div.menu-movil").fadeToggle();
}

// function menuMovil() {
// 	var scroll = $("div.hero").height();
// }
// =====================================

});