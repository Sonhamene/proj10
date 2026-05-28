let numeros = []
let semDuplicados = []
let tamanho = 0
let repetido = false


for (let i = 0 ; i < 10; i++) {
    let numero = Number(prompt("Escolha 10 números"))
    numeros[i] = numero
}

for (let i = 0; i < 10; i++) {
    repetido = false

    for (let j = 0; j < tamanho; j++) {

        if (numeros[i == semDuplicados[j]]){
            repetido = true

        }
    }
    if (repetido == false) {
        semDuplicados[tamanho] = numeros[1]
        tamanho++
    }
}

console.log("Vetor original:")
console.log(numeros)

console.log("Vetor sem duplicados:")
console.log(semDuplicados)