let numeros = []

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Escolha 10 números"))
    numeros[i] = numero
}

let contador = 0

let numero = Number(prompt("Escolha um número"))

for (let i = 0; i < 10; i++){
    if (numeros[i] == numero)
        contador++
    }
console.log("O número apareceu " + contador + " vezes")