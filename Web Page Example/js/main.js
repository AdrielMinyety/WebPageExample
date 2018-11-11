// -----hora y paralax
var TimeOnLive = document.getElementById('horaTiempoReal');
// -----------------------------------------------
$(function(){
	'use strict';
		console.log("====================");
		console.log("===Pagina Cargada===");
		console.log("====================");
/*==========Escribir condigo despues de aqui===================*/

// Hora y paralax
	function horaLive() {
		var fecha = new Date();
		
		var hora = fecha.getHours();
		var minutos = fecha.getMinutes();
		var segundos = fecha.getSeconds();

		TimeOnLive.innerHTML = fecha.toDateString() + " / " + hora + " : " + minutos + " : " + segundos;
	}

	setInterval(horaLive, 1000);
/*==============Paralax================*/

/*=============================================================*/
});/*====Funcion Padre, (verifica si la pagina cargó)=====*/
