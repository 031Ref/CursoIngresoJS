/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var sNum1;
var sNum2;
var sNum3;
var result;
function comenzar()
{
	sNum1=Math.floor((Math.random()*10)+1);
	console.log(sNum1);
	document.getElementById('PrimerNumero').value=sNum1;
	sNum2=Math.floor((Math.random()*10)+1);
	console.log(sNum2);
	document.getElementById('SegundoNumero').value=sNum2;
	sNum3=Math.floor((Math.random()*4)+1);
	console.log(sNum3);
	switch(sNum3){
		case 1:
		document.getElementById('Operador').value="+";
		break;
		case 2:
		document.getElementById('Operador').value="-";
		break;
		case 3:
		document.getElementById('Operador').value="*";
		break;
		case 4:
		document.getElementById('Operador').value="/";
		break;
	}
}
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	switch(sNum3){
		case 1:
		result=sNum1+sNum2;
		break;
		case 2:
		result=sNum1-sNum2;
		break;
		case 3:
		result=sNum1*sNum2;
		break;
		case 4:
		result=sNum1/sNum2;
		break;
	}
	if (respuesta==result) {
		alert("Respuesta correcta");
	}else{
		alert("Respuesta iconrrecta");
	}
}