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
/*
var mesDelAño = document.getElementById('mes').value;
if(mesDelAño==Febrero){
	alert(mesDelAño+": tiene 28 días");
}else if (mesDelAño==Abril||Junio||Septiembre||Noviembre) {
	alert(mesDelAño+": tiene 30 días");
}else if (mesDelAño==Enero||Marzo||Mayo||Julio||Agosto||Octubre||Diciembre) {
	alert(mesDelAño+":  tiene 31 días");
}
*/