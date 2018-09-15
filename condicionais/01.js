let a = 1
let b = 2
let c = 3

// Resultado: "Hello, world!" (Acertei)
if (6 < 2 * 5) { // 6 < 10
	console.log("Hello, world!")
}

// Resultado: 2222 (Acertei)
if (a > b && a > c) { // 1 > 2 && ..
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado: "*" (Acertei)
if (a < c) { // 1 < 3
	console.log("*")
} else if (a === b) { // não executa
	console.log("&")
} else { // não executa
	console.log("$")
}

// Resultado: "####" (Acertei)
if (a < b) { // 1 < 2
	console.log("####")
} else { // não executa
	console.log("&&&&")
}

// Resultado: 100 200 0 (Acertei)
const x = 100
const y = 200
if (y <= 200 && x > 100) { // 200 <= 200 && 100 > 100
	console.log(`${x} ${y} ${x + y}`)
} else { // não executa
	console.log(`${x} ${y} ${2 * x - y}`)
}

// Resultado: "*" (Acertei)
if (a < c) { // 1 < 3
	console.log("*")
} else if (a === c) { // não executa
	console.log("&")
} else { // não executa
	console.log("$")
}

// a++ -> a = a + 1 
// Resultado: 1 3 4 (Acertei)
if (a++ > b++ || a-- > 0) { // 2 > 3 || 1 > 0
	c++
} else { // não executa
	c--
}
console.log(`${a} ${b} ${c}`)

// Resultado: "####" (Acertei)
if (a < b) { // 1 < 3
	console.log("####")
} else { // não executa
	console.log("&&&&")
}
 
// Resultado: "****" (Acertei)
if (a < c) { // 1 < 4
	console.log("****")
} else if (b > a) { // não executa
	console.log("&&&&")
} else { // não executa
	console.log("####")
}