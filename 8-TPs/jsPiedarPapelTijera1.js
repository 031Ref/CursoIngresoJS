/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var rachaV=0;
var maxV=0;
var rachaP=0;
var maxP=0;
var rachaE=0;
var maxE=0;
function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	console.log(eleccionMaquina)
}
function racha(){
	if (rachaV>maxV) {
		maxV=rachaV;
	}
	if (rachaP>maxP) {
		maxP=rachaP;
	}
	if (rachaE>maxE) {
		maxE=rachaE;
	}
}
function piedra()
{
	if (eleccionMaquina==1) {
		alert("Usted empató");
		rachaE++;
		rachaP=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==2) {
		alert("Usted perdió");
		rachaP++;
		rachaE=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==3) {
		alert("Usted ganó");
		rachaV++;
		rachaP=0;
		rachaE=0;
		racha();
	}
	console.log(rachaV,rachaE,rachaP,maxV,maxE,maxP);
	comenzar();
}
function papel()
{

	if (eleccionMaquina==2) {
		alert("Usted empató");
		rachaE++;
		rachaP=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==3) {
		alert("Usted perdió");
		rachaP++;
		rachaE=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==1) {
		alert("Usted ganó");
		rachaV++;
		rachaP=0;
		rachaE=0;
		racha();
	}
	console.log(rachaV,rachaE,rachaP,maxV,maxE,maxP);
	comenzar();
}
function tijera()
{
	
	if (eleccionMaquina==3) {
		alert("Usted empató");
		rachaE++;
		rachaP=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==1) {
		alert("Usted perdió");
		rachaP++;
		rachaE=0;
		rachaV=0;
		racha();
	}else if (eleccionMaquina==2) {
		alert("Usted ganó");
		rachaV++;
		rachaP=0;
		rachaE=0;
		racha();
	}
	console.log(rachaV,rachaE,rachaP,maxV,maxE,maxP);
	comenzar();
}