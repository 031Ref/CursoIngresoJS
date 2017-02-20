function Mostrar()
{
	var num;
	var pos=0;
	var neg=0;
	var posCant=0;
	var negCant=0;
	var cerCant=0;
	var posProm=0;
	var negProm=0;
	var dif=0;
	var parCant=0;
	while(confirm("ingresar numero?"))
	{
		num=prompt("");
		num=parseInt(num);
		if (num>0) {
			pos+=num;
			posCant++;
			posProm=pos/posCant;
		}else if (num<0){
			neg+=num;
			negCant++;
			negProm=neg/negCant;
		}else {
			cerCant++;
		}
		if (num%2==0) {
			parCant++;
		}
		dif=pos-neg;
	}
	console.log("positivos "+posCant,"negativos "+negCant,"ceros "+cerCant,"promedio positivos "+posProm,"promedio negativos "+negProm,"diferencia "+dif,"pares "+parCant)
}