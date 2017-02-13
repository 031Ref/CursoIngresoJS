function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert(mesDelAño+": Este mes tiene 30 o más días");
	break;
	case "Febrero":
	alert(mesDelAño+":  Este mes no tiene más de 29 días.");
	break;
	default:
	break;
}
}