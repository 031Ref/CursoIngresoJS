/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dUno=document.getElementById('numeroDividendo').value;
	var dDos=document.getElementById("numeroDivisor").value;
	var result=parseInt(dUno)/parseInt(dDos);
	var sResult=parseInt(result)*parseInt(dDos);
	var tResult=parseInt(dUno)-parseInt(sResult);
	alert("resto: "+tResult);
}
