function Mostrar()
{
	//mi manera
/*
	var nota;
	var aprovados=0;
	var notasProm=0;
	var cont=0;
	while(confirm("ingrese nota")){
		nota=prompt("");
		nota=parseInt(nota);
		if(nota>=1&&nota<=10) {
			if (nota>=4) {
				aprovados++;
			}
			cont++;
			notasProm+=nota;
		}
	}
	console.log("aprovados "+aprovados,"promedio de notas "+(notasProm/cont));
*/
	//la del profe
	var nota=-1;
	var acumNota=0;
	var contNotas=0;
	var contNT=0;
	var primera=true;
	var primeraF=true;
	var primeraM=true;
	var notaMax;
	var notaMin;
	var notaMaxF;
	var notaMinF;
	var notaMaxM;
	var notaMinM;
	var sexo;
	while(confirm("")){

		while(nota<1||nota>10){
			console.log(nota);
			nota=prompt("");
			nota=parseInt(nota);
		}
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("")
		}
		contNT++;
		if (nota>=4) {
			acumNota+=nota;
			contNotas++;
		}
		if (primera) {
			primera=false;
			notaMax=nota;
			notaMin=nota;
		}else{
			if (nota>notaMax) {
				notaMax=nota;
			}
			if (nota<notaMin) {
				notaMin=nota;
			}
		}
		if (primeraF) {
			primeraF=false;
			notaMaxF=nota;
			notaMinF=nota;
		}else{
			if (nota>notaMaxF) {
				notaMaxF=nota;
			}
			if (nota<notaMinF) {
				notaMinF=nota;
			}
		}
		if (primeraM) {
			primeraM=false;
			notaMaxM=nota;
			notaMinM=nota;
		}else{
			if (nota>notaMaxM) {
				notaMaxM=nota;
			}
			if (nota<notaMinM) {
				notaMinM=nota;
			}
		}
		nota=-1;
		sexo="k";
	}
/*
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
*/
}