function acao(){
	document.write("Executando...<br/>");
}

// Executa de tempo em tempo!
var timer = setInterval(acao, 1000);

// Executa apenas uma vez!
setTimeout(acao, 3000);