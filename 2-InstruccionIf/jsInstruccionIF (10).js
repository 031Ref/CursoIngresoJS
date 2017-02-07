function Mostrar()
{
	var rNum=Math.floor((Math.random() * 10) + 1);
	console.log(rNum)                                //para comparar que si agarre el numero correcto
	if (rNum>=9) {
		alert(rNum+" Exelente, sos un futuro einstein")
	}else if (rNum>=5) {
		alert(rNum+" Aprobaste, con eso es suficiente")
	}else if (rNum<=4) {
		alert(rNum+" Vamos, la proxima se puede, no es tan malo trabajar en Mc.Donal")
	}
}