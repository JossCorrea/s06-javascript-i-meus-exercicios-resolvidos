// Escreva a expressão em
// Javascript que atribui o
// valor `1` a `x` se `x`
// for maior do que `y`.

// Minha solução = correção:
if (x > y) {
	x = 1
}

// Escreva a expressão em
// Javascript que aumenta o
// valor da variável `score`
// em 5 unidades caso o valor
// inicial de `score` esteja
// entre 80 e 90.

// Minha solução = correção:
if (score >= 80 && score <= 90) {
	score += 5 // score = score + 5
}

// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

// Minha solução:
item = ( i >= 10 && v < 50 )

// Correção:
item = ( i < 10 || v >= 50 ) === false
// ou...
item = ( i >= 10 && v < 50 )
// refs: 
// - http://www.math.toronto.edu/preparing-for-calculus/3_logic/we_3_negation.html
// - https://centraldefavoritos.com.br/2017/01/02/negacao-de-proposicoes/ (ver: "Negação de uma Proposição Disjuntiva")

// Resumindo...
// * Proposição simples:
// --------------------------------------------------------
//	  	  Afirmação		 	|		   Negação 
// --------------------------------------------------------
//			"A"				|		 	"Não A"             Ex.  João é médico => Negativa: João não é médico.
// --------------------------------------------------------
//       "Não A"			|		 	  "A"              	Ex. Maria não é estudante => Negativa: Maria é estudante.
// --------------------------------------------------------

// * Proposição conjuntiva (A e B): 
// --------------------------------------------------------
//	  	  Afirmação		 	|		   Negação 
// --------------------------------------------------------
//		  "A E B"		 	|		"Não A OU Não B"		Ex. Não é verdade que João é médico e Pedro é dentista” => Negativa:João não é médico ou Pedro não é dentista.
// --------------------------------------------------------
// 1.Negaremos a primeira parte (~A);
// 2.Negaremos a segunda parte (~B);
// 3.Trocaremos E por OU.
// 
// * Proposição disjuntiva (A ou B): 
// --------------------------------------------------------
//	  	  Afirmação		 	|		   Negação 
// --------------------------------------------------------
//		  "A OU B"			|		"Não A E Não B"			Ex. Não é verdade que Pedro é dentista ou Paulo é engenheiro => Negativa: Pedro não é dentista e Paulo não é engenheiro.
// --------------------------------------------------------
// 1.Negaremos a primeira parte (~A);
// 2.Negaremos a segunda parte (~B);
// 3.Trocaremos OU por E.
// 
// * Proposição Condicional
// --------------------------------------------------------
//	  	  Afirmação		 	|		   Negação 
// --------------------------------------------------------
// 		"Se A, então B"	 	|		  "A e Não B"			Ex. Se chover então levarei o guarda-chuva => Negativa: Chove e não levo o guarda-chuva.
// --------------------------------------------------------
// 1.Mantém-se a primeira parte (A); E
// 2.Nega-se a segunda parte (Não B).
// 
//* Outras proposições
// --------------------------------------------------------
//	  	  Afirmação		 	|		   Negação 
// --------------------------------------------------------
// "Existem x tal que A(x)"	|	"Para cada x, não A(x)"
// --------------------------------------------------------
//	 "Para todo x, A(x)" 	|	"Existem x tais que Não A(x)"
// --------------------------------------------------------


// Escreva a expressão em
// Javascript que retorna `true`
// se um número é par e `false`
// se um número é impar.

// Minha solução:
let result
if (n % 2 === 0) {
	result=true
} else {
	result=false
}
console.log(result)

// Correção:
if (n % 2 === 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou ...
if (n & 1 === 0) {
	console.log(true)
} else {
	console.log(false)
}
// refs: 
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
// - https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301 (ver: "The & Operator")

// Escreva a expressão em
// Javascript que retorna `true` 
// se dois números forem positivos
// e `false` se dois números 
// forem negativos.

// Minha solução = correção:
if (x > 0 && y > 0) {
	console.log(true)
} else if(x < 0 && y < 0) {
	console.log(false)
}

// Escreva a expressão em
// Javascript que retorna `true` se
// dois números tiverem os mesmos
// sinais (+ / -) e `false` 
// se dois números tiverem sinais
// diferentes.

// Minha solução: (Ideia: Usar princípio da multiplicação de sinais +*+=+, -*-=+, -*+=- e +*-=-)
if (x*y>0) {
	console.log(true)
} else {
	console.log(false)
}

// Correção:
if (x > 0 && y > 0 || 
	x < 0 && y < 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou...
if (x > 0 && y > 0) {
	console.log(true)
} else if (x < 0 && y < 0) {
	console.log(true)
} else {
	console.log(false)
}
// ou...
if (Math.sign(x) === Math.sign(y) && 
	Math.sign(x) !== 0) {
	console.log(true)
} else {
	console.log(false)
}