// $("div.nav-movil").hide();

$('div.menu-movil').click(menuMovil);
$("i.volver").click(volver);

function menuMovil(){
	$(this).hide("div.menu-movil");
	$("i.volver").show();	
	$("div.nav-movil").fadeIn();
};

function volver() {
	$("div.menu-movil").show();
	$("i.volver").hide();	
	$("div.nav-movil").fadeOut();
}
