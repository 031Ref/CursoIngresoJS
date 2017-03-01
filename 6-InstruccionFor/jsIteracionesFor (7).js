function Mostrar()
{
	var num=prompt("");
	var con=0;
	for (var i = 1; i <=num; i++) {
		if (num%i==0) {
			console.log(i);
			con++;
		}
	}
		console.log("divisores:"+con);
}