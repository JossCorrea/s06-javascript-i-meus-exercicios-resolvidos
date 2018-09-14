// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
const pokemon = {
	numero_nacional: 143,
	nome: "Snorlax",
	nome_japones: "Kabigon",
	numero_johnto: 230,
	evolui_de: "Munchlax",
	janiarli_tem: true
}

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
pokemon.diga_ola = function () {
	console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
}

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.can_fly = false

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function () {
	if (this.can_fly) {
		return "Flyyyyiinnngggg!"
	} else {
		return "Sorry, I can't fly"
	}
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".




// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.




// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.




// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>