/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nom;
	var eda;
	nom=document.getElementById("elNombre").value;
	eda=document.getElementById("laEdad").value;
	alert("Usted es "+nom+" de "+eda+" años de edad y le quedan 7 dias");
}

