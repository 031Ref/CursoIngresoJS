function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var num;
	while(contador<5){
		contador++;
		num=prompt("");
		num=parseInt(num);
		acumulador+=num;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	console.log(contador,acumulador,num)
}