var jf = require("johnny-five);
var circuito = circuito.Board();
var rojo, motor, foto_celda;
var turno = true;

circuito.on("ready", encender);

function encender(){
  var config_celda = {pin: "A0", freq: 50}; //Config celda, conectada entrada analoga
  foto_celda = new circuito.Sensor(config_celda);
  
  rojo = circuito.Led(13); //Led conectado a puerto 13
  rojo.on(); //encender led
  
  motor = new circuito.Servo(9); //Motor conectado a puerto 9
  motor.to(10) //Movimiento en grados (0 - 180) o (0 - 360) depende de servo
  ondear();
}

function ondear(){
  //console.log("Luz: " + foto_celda.value);
  var luz = foto_celda.value;
  if(luz > 500){
    if(turno){ //ondear bandera
      turno = false;
      motor.to(70);
    }
    else{
      turno = true;
      motor.to(110);
    }
  }
  else{
    motor.to(10) //Apagado, bandera abajo
  }
  setTimeout(ondear, 1000) //Llama funcion ondear cada seg, recursivo
}
