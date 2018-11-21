// =========MENU MOVIL====================

$('div.menu-movil').click(menuMovil);
$("i.volver").click(volver);

function menuMovil(){
	$("div.menu-movil").toggle("i.volver");
	$("i.volver").fadeIn(800);	
	$("nav.nav-movil").slideToggle();
};

function volver() {
	$("i.volver").hide();	
	$("nav.nav-movil").slideToggle();
	$("div.menu-movil").fadeToggle();
	// $("nav.nav-movil").slideDown();
}
// =====================================