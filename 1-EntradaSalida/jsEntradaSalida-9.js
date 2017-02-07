/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var dUno=document.getElementById('sueldo').value;
	var result=parseInt(dUno)*parseInt(10);
	var sResult=parseInt(result)/parseInt(100);
	document.getElementById('resultado').value=parseInt(dUno)+parseInt(sResult);
}
