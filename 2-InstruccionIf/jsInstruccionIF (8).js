function Mostrar()
{
	var eda=document.getElementById('edad').value;
	var eCiv=document.getElementById('estadoCivil').value;
	if (eda>=18&&eCiv=="Soltero") {
		alert("Es soltero y no es menor. Go get'em champ!");
	}
}