const escola = "Cod3r";

console.log(escola.charAt(4)); 

/* 
/charAt - vai dar a letra que está no 
/índice 4 da string sendo 
/0 a primeira letra 
*/

console.log(escola.charCodeAt(3)); 
console.log(escola.charCodeAt(3)); 
/* 
/charCode - vai dar o valor na tabela unicode/asc
/em HTML
*/

console.log(escola.indexOf('3'));
console.log(escola.indexOf('3'));
console.log(escola.substring(1)); //substring - vai tirar o índice 1 da palavra
console.log(escola.substring(0,3)); //vai até o índice e "me dê 3 caracteres"
console.log("escola ".concat(escola).concat("!")); //.concat vai concatenar
console.log(escola.replace(3, 'e')); // substitui o valor 3 por e
console.log(escola.replace(/\d/, "e")); //substitui todos os digitos dentro do texto pela letra e
console.log(escola.replace(/\w/g, "e")); //substitui todo o texto pela letra e
console.log("Ana, Maria, Pedro".split(",")); //quebra o array com 3 elementos


