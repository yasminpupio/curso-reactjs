// Switch

document.writeln('Escolha deu pedido: <br><br>')
document.writeln('0 - Sorvete / 1 - Suco <br>')
document.writeln('2 - Coca Cola / 3 - Água gelada <br><br>')

function pedir() {
    x = prompt('O que deseja pedir?')

    switch (x) {
        case '0':
            alert('Você pediu sorvete!')
            break
        case '1':
            alert('Você pediu suco!')
            break
        case '2':
            alert('Você pediu Coca Cola!')
            break
        case '3':
            alert('Você pediu água gelada!')
            break
        default:
            alert('Ops, não temos esta opção!')
            break
    }
}