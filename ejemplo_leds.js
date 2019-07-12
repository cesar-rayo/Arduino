int amarillo = 13;
int rojo = 7; //Numero de puerto de salida
int milisegundos = 300; // tiempo de espera

void setup(){
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
}

void loop(){
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(milisegundos * 2);
}
