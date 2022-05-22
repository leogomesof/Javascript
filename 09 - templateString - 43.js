const nome = "Rebeca";
const concatenacao = "Olá" + nome + "!";
const template = `
Olá 
${nome}!`
console.log(concatenacao, template); //pulando linhas com o àspas (backchick)

console.log(`1 + 1 = ${1 + 1}`); //somando

const up = texto => texto.toUpperCase(); //Passar tudo pra caps (chamar função dentro da string)
console.log(`Ei... ${up("cuidado")}!`);