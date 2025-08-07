// Some
/*let nomes = ['Matheus', 'Lucas', 'Henrique']
console.log(nomes.some(nome => nome === 'Matheus'))*/

//Every
let nomes = [
    {nome: 'Yasmin', idade: 21},
    {nome: 'Maria', idade: 25},
    {nome: 'Henrique', idade: 15}
]

console.log(nomes.every(nome => nome.idade >= 18))