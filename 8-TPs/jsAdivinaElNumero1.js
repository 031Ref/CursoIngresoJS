/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var sNum;

function comenzar()
{
	sNum=Math.floor((Math.random() * 100) + 1);
	contadorIntentos=0;
	console.log(sNum);
}

function verificar()
{
	var mNum=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	if (mNum==sNum) {
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
	}else if (mNum<sNum) {
		var dif=parseInt(sNum)-parseInt(mNum);
		alert("te falta "+dif+" para el numero");
	}else if (mNum>sNum) {
		var dif=parseInt(mNum)-parseInt(sNum);
		alert("te pasate "+dif+" del numero");
	}
}