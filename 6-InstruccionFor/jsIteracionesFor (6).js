function Mostrar()
{
	var num=prompt("");
	var con=0;
	for (var i = 1; i <=num; i++) {
		if (i%2==0) {
			console.log(i);
			con++;
		}
	}
	console.log("numeros pares:"+con);
}