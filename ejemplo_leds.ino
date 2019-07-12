// Este script se carga en Arduino directamente desde el IDE de arduino
int amarillo = 13;
int rojo = 7; //Numero de puerto de salida
int milisegundos = 300; // tiempo de espera

void setup(){ //Configuracion inicial
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
}

void loop(){ //Ciclos de CPU
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(milisegundos * 2);
}
