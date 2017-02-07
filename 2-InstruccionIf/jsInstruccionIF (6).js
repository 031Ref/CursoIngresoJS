function Mostrar()
{
	var eda=document.getElementById('edad').value;
	if (eda<13) {
		alert("Todavia sos un niño. Tenes que ser asi de alto para entrar en este sitio");
	}else if (eda>=13&&eda<=17) {
		alert("Sos un adolecente, anda a escuchar blink-182");
	}else if (eda>17) {
		alert("Ya sos adulto, buena suerte")
	}
}