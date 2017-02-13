function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Febrero":
	alert(mesDelAño+": tiene 28 días");
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	alert(mesDelAño+": tiene 30 días");
	break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert(mesDelAño+":  tiene 31 días");
	break;
	default:
	break;
}
}