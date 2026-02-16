// ejercicio 6

class Complex {
  constructor(re = 0, im = 0) {
    this.re = re
    this.im = im
  }

  add(other) {
    return new Complex(
      this.re + other.re,
      this.im + other.im
    )
  }

  sub(other) {
    return new Complex(
      this.re - other.re,
      this.im - other.im
    )
  }

  scale(s) {
    return new Complex(this.re * s, this.im * s)
  }

  mul(other) {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    )
  }

  static exp(e) {
    return new Complex(
      Math.cos(e),
      Math.sin(e)
    )
  }

  toString() {
    return `${this.re} + ${this.im}i`
  }
}

function dft(x) {
  let N = x.length
  let res = []

  for (let k = 0; k < N; k++) {
    let sum = new Complex()

    for (let n = 0; n < N; n++) {
      let angle = (-2 * Math.PI * k * n) / N
      let twiddle = Complex.exp(angle)
      sum = sum.add(twiddle.scale(x[n]))
    }

    res.push(sum)
  }
  return res
}

function fft(x) {
  let N = x.length

  if (N % 2 !== 0) {
    throw new Error("Input length must be even")
  }

  if (N <= 2) {
    return dft(x)
  }

  let even = []
  let odd = []

  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) even.push(x[i])
    else odd.push(x[i])
  }

  let xEven = fft(even)
  let xOdd = fft(odd)

  let res = new Array(N)

  for (let k = 0; k < N / 2; k++) {
    let twiddle = Complex.exp((-2 * Math.PI * k) / N)
    let t = twiddle.mul(xOdd[k])

    res[k] = xEven[k].add(t)
    res[k + N / 2] = xEven[k].sub(t)
  }
  return res
}

function getVals() {
  let dataInput = document.getElementById("data")
  let datastr = dataInput.value

  let data = datastr.split(",").map(Number)

  let transformedData = fft(data)

  let content = "The transformation yields: <code>"

  for (let i = 0; i < transformedData.length; i++) {
    content += `${transformedData[i]},`
  }
  content += "</code>"

  let outputElement = document.getElementById("output")
  outputElement.innerHTML = content
}
