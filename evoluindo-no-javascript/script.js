// while = Enquanto.
document.write("While");

x = 0;

while(x < 10){

	document.write("</br> O valor do X é: " + x);

	x++;
}

x = 5;

document.write("</br></br> O X está valendo: " + x + "</br></br>")




// for = Para.
document.write("For");

for(a = 0; a < x; a++){
	document.write("</br> O valor do A é: " + a);
}




//switch 
document.write("</br></br></br>");
document.write("Switch </br>");

document.write("Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca-cola / 3 - Água </br></br>");

function pedir(){
	x = prompt("O que deseja pedir?");

	switch(x){
		case "0":
			alert("Você pediu sorvete");
			break;
		case "1":
			alert("Você pediu um suco");
			break;
		case "2":
			alert("Você pediu uma coca-cola");
			break;	
		case "3":
			alert("Você pediu ágau gelada");
			break;
		default:
			alert("Não temos esta opção!");
			break;		
	}
}