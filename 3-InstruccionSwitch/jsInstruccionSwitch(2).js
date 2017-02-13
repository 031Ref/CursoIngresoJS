function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert(mesDelAño+": Falta para el invierno.");
	break;
	case "Julio":
	case "Agosto":
	alert(mesDelAño+": Abrigate que hace frio.");
	break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert(mesDelAño+": Ya pasamos el frio, ahora calor!!!.");
	break;
	default:
	break;
}
}