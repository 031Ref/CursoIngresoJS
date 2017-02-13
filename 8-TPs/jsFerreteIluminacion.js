/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
!A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
!B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
!C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var mar=document.getElementById('Marca').value;
 	var can=document.getElementById('Cantidad').value;
 	var pre=35;
 	var tot;
 	switch (can) {
 		case "6":
 			var des=parseInt(pre)*parseInt(50);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 		break;
 		case "5":
 			switch(mar){
 			case "ArgentinaLuz":
 			var des=parseInt(pre)*parseInt(40);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 			default:
 			var des=parseInt(pre)*parseInt(30);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 			}
 		break;
 		case "4":
 			switch(mar){
 			case "ArgentinaLuz":
 			case "FelipeLamparas":
 			var des=parseInt(pre)*parseInt(25);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 			default:
 			var des=parseInt(pre)*parseInt(20);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
	 		}
 	3
 		switch(mar){
 			case "ArgentinaLuz":
 			var des=parseInt(pre)*parseInt(15);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 			case "FelipeLamparas":
 			var des=parseInt(pre)*parseInt(10);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 			default:
 			var des=parseInt(pre)*parseInt(5);
 			var fin=parseInt(des)/parseInt(100);
 			tot=parseInt(pre)-parseInt(fin);
 			break;
 		}
 	}
 	if (tot>=120) {
 		var imp=parseInt(pre)*parseInt(10);
 		var finImp=parseInt(des)/parseInt(100);
 		tot=parseInt(pre)+parseInt(finImp);
 		document.getElementById('precioDescuento').value=tot
 		alert("Usted pago "+finImp+" de IIBB.")
 	}else{
 		document.getElementById('precioDescuento').value=tot;
 	}
}