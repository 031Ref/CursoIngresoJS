function Mostrar()
{
	var eda=document.getElementById('edad').value;
	var eCiv=document.getElementById('estadoCivil').value;
	if (eda<=17&&eCiv!="Soltero") {										//no te olvides de poner las comillas cuando no son numeros
		alert("Es muy pequeño para NO ser soltero. Los viedeojuegos no cuentan");
	}
}