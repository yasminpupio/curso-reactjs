function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '65446'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: 'Yasmin', sobrenome: 'Pupio', anoInicio: 2024}))