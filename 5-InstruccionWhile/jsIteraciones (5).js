function Mostrar()
{
var sexo = prompt("ingrese f ó m .");
	while(sexo!="f"&&sexo!="m"){
		sexo=prompt("pruebee otra ves")
	}
document.getElementById('Sexo').value=sexo;
}