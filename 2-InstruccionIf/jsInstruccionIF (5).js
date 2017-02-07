function Mostrar()
{
	var eda=document.getElementById('edad').value;
	if (!(eda>=13&&eda<=17)) {
		alert("Por suerte no sos un adolecente")
	}
}

/*
if (eda<=13||eda>=17) {                           //if alternativo
		alert("Por suerte no sos un adolecente")
	}
*/