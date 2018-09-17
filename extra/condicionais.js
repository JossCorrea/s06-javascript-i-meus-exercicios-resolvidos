// Escreva uma condicional que
// verifica se dois numeros 
// são iguais.

//Minha resposta:
if (typeof x == 'number' && typeof y == 'number') //A primeira verificação é para garantir que o usuário forneceu dados do tipo número
    if (x == y){ //Verificação da igualdade dos números 
        console.log(true)    
    }else{
        console.log(false)    
}else{
    console.log('Um dos elementos informados não é um número') 
}


// Escreva uma condicional que
// verifica se um ano é bissexto
// ou não.

//Minha resposta: (partindo do princípio que o usuário informou os números corretamente)
let ano
if ((ano%4===0 && ano%100!==0) || ano%400===0){
    console.log(true)
}else{
    console.log(false)
}

// Escreva uma condicional que
// recebe duas coordenadas e 
// verifica se aquele ponto
// esta no primeiro, segundo,
// terceiro ou quarto quadrante 
// do plano cartesiano.

//Minha resposta: (partindo do princípio que o usuário digitou x e y com valores numéricos)
if (x > 0 && y > 0){
    console.log('1º quadrante')
}else if (x < 0 && y > 0){
    console.log('2º quadrante') 
}else if (x < 0 && y < 0){
    console.log('3º quadrante')
}else if (x > 0 && y < 0){
    console.log('4º quadrante')  
}else if (x === 0 && y !== 0){ //Se o ponto tiver o x igual a zero ele está posicionado sobre o eixo y
    console.log('Eixo y')
}else if (x !== 0 && y === 0){ //Se o ponto tiver o y igual a zero ele está posicionado sobre o eixo x
    console.log('Eixo x')
}else{  //Se o ponto tiver o x e y igual a zero ele está posicionado na origem do plano cartesiano
    console.log('Origem')
}

// Escreva uma condicional que 
// recebe as medidas de um triangulo
// e determina se ele é isosceles,
// equilatero ou escaleno.

//Minha resposta: ()
//Primeiramente é preciso verificar se os valores informados atendem as condições de existência de um triângulo
if (l1 < (l2 + l3) && l2 < (l1 + l3) && l3 < (l1 + l2) && 
l1 > Math.abs(l2 - l3) && l2 > Math.abs(l1 - l3) && l3 > Math.abs(l1 - l2)){
    if (l1===l2 && l2===l3){
        console.log('Equilátero') //Todos os lados iguais
    }else if (l1===l2 || l2===l3 || l1===l3){
        console.log('Isóceles')  //Dois lados iguais
    }else{
        console.log('Escaleno')  //Todos os lados diferentes
    }
} else{
    console.log('Os valores dos lados informados não formam um triângulo')
}
// Obs.:Para construir um triângulo é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.


// Escreva uma condicional que recebe
// um caractere e determina se esse
// caractere é uma vogal ou não.

// Minha resposta:
const vogais=['a','e','i','o','u']
let letra
if (vogais.indexOf(letra)>=0 && vogais.indexOf(letra)<=4){
    console.log('É uma vogal')
} else {
    console.log('Não é uma vogal') 
}
// ...outra forma (usando o método includes)
const vogais = 'aeiou'
let letra
if (vogais.includes(letra)){
    console.log('É uma vogal')
} else {
    console.log('Não é uma vogal') 
}