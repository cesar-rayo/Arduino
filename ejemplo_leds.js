/*
* Una vez cargado StandardFirmata desde el IDE de Arduino al circuito
* StandardFirmata se conecta con nodeJS a traves del puerto USB
* Crear un nuevo proyecto e instalar johnny-five
* Este script se corre directamente en el servidor 
* node ejemplo_leds.js
*/ 

var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", encender);

function encender(){
  var bombillo = new jf.Led(13); //Numero de puerto
  bombillo.blink(100); //funcion parpadear de johnny-five
}

