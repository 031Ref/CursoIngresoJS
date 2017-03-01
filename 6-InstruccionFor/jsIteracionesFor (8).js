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
	if (con==2) {
		console.log("numero primo");
	}else{
		console.log("no es numero primo");
	}
}