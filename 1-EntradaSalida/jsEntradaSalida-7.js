/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var dUno;
	var dDos;
	var result;

function sumar()
{	
	
	dUno=document.getElementById('numeroUno').value;
	dDos=document.getElementById("numeroDos").value;
	result=parseInt(dUno)+parseInt(dDos);
	alert("resultado: "+result);
}

function restar()
{
	dUno=document.getElementById('numeroUno').value;
	dDos=document.getElementById("numeroDos").value;
	result=parseInt(dUno)-parseInt(dDos);
	alert("resultado: "+result);	
}

function multiplicar()
{ 
	dUno=document.getElementById('numeroUno').value;
	dDos=document.getElementById("numeroDos").value;
	result=parseInt(dUno)*parseInt(dDos);
	alert("resultado: "+result);
}

function dividir()
{
	dUno=document.getElementById('numeroUno').value;
	dDos=document.getElementById("numeroDos").value;
	result=parseInt(dUno)/parseInt(dDos);
	alert("resultado: "+result);
}

