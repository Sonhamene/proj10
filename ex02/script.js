let numeros = []
let aleatorio

for (let i = 0; i < 7; i++) {
    aleatorio = Math.floor(Math.random() * 100)
    numeros.push(aleatorio)
}

for (let i = 0; i < 7; i++ ){
    console.log(numeros[i])
}