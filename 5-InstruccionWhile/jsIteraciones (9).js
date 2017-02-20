function Mostrar()
{
	var num;
	var max;
	var min;
	primera=true;
	while(confirm("numeros?")){
		num=prompt("");
		num=parseInt(num);
		if (primera) {
			primera=false;
			max=num;
			min=num;
		} else {
		if (num>max) {
			max=num;
		}
		if (num<min) {
			min=num;
		}
		}
	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;
	console.log(min,max);
}