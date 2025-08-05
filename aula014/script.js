function acao() {
    document.writeln('Executando...<br>')
}

// Executa de tempo em tempo
var timer = setInterval(acao, 1000)

// Interrompe o setInterval
//clearInterval(timer)

// Executa apenas uma vez
//setTimeout(acao, 3000)