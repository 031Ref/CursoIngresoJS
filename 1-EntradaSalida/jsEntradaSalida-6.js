/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var dUno=document.getElementById('numeroUno').value;
	var dDos=document.getElementById("numeroDos").value;
	var result=parseInt(dUno)+parseInt(dDos);
	alert("resultado: "+result);
}

