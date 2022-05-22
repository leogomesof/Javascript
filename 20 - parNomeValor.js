const saudacao = "opa" //contexto léxico 1 (local físico onde foi definido o valor)

function exec(){
    const saudacao = "faaalaa" //léxico 2 
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua muito legal",
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
