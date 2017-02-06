/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var dUno;
	var dDos;
	var result;
	dUno=document.getElementById('numeroUno').value;
	dDos=document.getElementById("numeroDos").value;
	result=parseInt(dUno)+parseInt(dDos);
	alert("resultado: "+result);
}

