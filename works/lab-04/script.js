// ejercicio 1

let validInput = false
let tableLength = 0

while (!validInput) {
  tableLength = parseInt(prompt("¿De qué longitud quieres tu tabla?", 0))

  if (!isNaN(tableLength)) {
    validInput = true
  } else {
    alert("Entrada no válida.")
  }
}

document.open()
let content = "<table>"
for (let i = 0; i < tableLength; i++) {
  content += `<tr><td>${i}</td></tr>`
}
content += "</table><p>Sí eso es una tabla.</p>"
document.write(content)
document.close()

// ejercicio 2

let numberA = parseInt(Math.random() * 100 + 1)
let numberB = parseInt(Math.random() * 100 + 1)

validInput = false
input = 0

while (!validInput) {
  input = parseInt(prompt(`A ver si muy salsa, ${numberA} + ${numberB}`, 0))

  if (!isNaN(input)) {
    validInput = true
  } else {
    alert("Entrada no válida.")
  }
}

if (input === numberA + numberB) {
  alert("Correcto")
} else {
  alert("No")
}

// ejercicio 3

function contador(arr) {
  let neg = arr.filter((x) => {
    return x < 0
  })
  let zero = arr.filter((x) => {
    return x === 0
  })
  let pos = arr.filter((x) => {
    return x > 0
  })

  return { neg, zero, pos }
}

let tests = [
  {
    input: [1, 2, 3, 4, 5],
    output: {
      neg: [],
      zero: [],
      pos: [1, 2, 3, 4, 5]
    }
  },
  {
    input: [-5, -4, -3, -2, -1],
    output: {
      neg: [-5, -4, -3, -2, -1],
      zero: [],
      pos: []
    }
  },
  {
    input: [0, 0, 0, 0],
    output: {
      neg: [],
      zero: [0, 0, 0, 0],
      pos: []
    }
  },
  {
    input: [-3, -1, 0, 2, 4],
    output: {
      neg: [-3, -1],
      zero: [0],
      pos: [2, 4]
    }
  },
  {
    input: [],
    output: {
      neg: [],
      zero: [],
      pos: []
    }
  },
  {
    input: [42],
    output: {
      neg: [],
      zero: [],
      pos: [42]
    }
  },
  {
    input: [-999],
    output: {
      neg: [-999],
      zero: [],
      pos: []
    }
  },
  {
    input: [0],
    output: {
      neg: [],
      zero: [0],
      pos: []
    }
  },
  {
    input: [1.5, -2.3, 0, 3.7, -4.1],
    output: {
      neg: [-2.3, -4.1],
      zero: [0],
      pos: [1.5, 3.7]
    }
  },
  {
    input: [10, -10, 20, -20, 30, -30],
    output: {
      neg: [-10, -20, -30],
      zero: [],
      pos: [10, 20, 30]
    }
  }
]

for (let i = 0; i < tests.length; i++) {
  console.assert(
    JSON.stringify(tests[i].output) === JSON.stringify(contador(tests[i].input))
  )
}

// ejercicio 4 

function promedios(arr) {
  return arr.map((line) => {
    if (line.length === 0) return 0
    const sum = line.reduce((acum, curr) => {
      return acum + curr
    }, 0)
    return sum / line.length
  })
}
tests = [
  {
    input: [[1, 2, 3, 4, 5]],
    output: [3]
  },
  {
    input: [[10, 20, 30]],
    output: [20]
  },
  {
    input: [[-5, -5, -5]],
    output: [-5]
  },
  {
    input: [[1.5, 2.5, 3.5]],
    output: [2.5]
  },
  {
    input: [[100]],
    output: [100]
  },
  {
    input: [[]],
    output: [0]
  },
  {
    input: [[1, 2, 3], [4, 5, 6]],
    output: [2, 5]
  },
  {
    input: [[-10, 10], [-20, 20], [-30, 30]],
    output: [0, 0, 0]
  },
  {
    input: [[0, 0, 0]],
    output: [0]
  },
  {
    input: [[1, 1, 1, 1, 1, 1]],
    output: [1]
  },
  {
    input: [[2, 4, 6, 8], [1, 3, 5, 7]],
    output: [5, 4]
  },
  {
    input: [[-1, 0, 1], [-2, 0, 2], [-3, 0, 3]],
    output: [0, 0, 0]
  }
]

function testPromedio(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

for (let i = 0; i < tests.length; i++) {
  console.log(`Promedio caso ${i}`)
  console.assert(testPromedio(tests[i].output, promedios(tests[i].input)))
}

// ejercicio 5

function inverso(num) {
  let str = String(num)
  let ret = ""

  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i]
  }
  return parseInt(ret)
}

tests = [
  {
    input: 1234,
    output: 4321
  },
  {
    input: 6575467,
    output: 7645756,
  },
  {
    input: 5348,
    output: 8435
  },
  {
    input: 1111,
    output: 1111,
  },
  {
    input: 4321,
    output: 1234
  }
]

for (let i = 0; i < tests.length; i++) {
  console.log(`Inverso caso ${i}`)
  console.assert(tests[i].output === inverso(tests[i].input))
}

