/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var dUno=document.getElementById('importe').value;
	var result=parseInt(dUno)*parseInt(25);
	var sResult=parseInt(result)/parseInt(100);
	document.getElementById('resultado').value=parseInt(dUno)-parseInt(sResult);
}