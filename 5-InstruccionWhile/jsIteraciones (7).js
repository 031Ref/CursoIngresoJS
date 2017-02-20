function Mostrar()
{
	var contador=0;
	var num;
	var acumulador=0;
	while(confirm("mas numeros?")){
		contador++;
		num=prompt("");
		num=parseInt(num);
		acumulador+=num;
		}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}