let numeros = []
let soma = 0

for(let i = 0; i < 10; i++){
    let valor = Number(prompt("Escolha um número"))
    numeros.push(valor)
    if (valor % 2 == 0)
    soma += valor
}

console.log(`A soma dos números pares foi ${soma}`)