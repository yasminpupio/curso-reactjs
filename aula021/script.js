function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [...usuarios, ...novosUsuarios]
    console.log(totalUsuarios)
}

let usuarios = ['Matheus', 'Yasmin']

let novosUsuarios = cadastrar(usuarios, 'Henrique', 'Lucas')