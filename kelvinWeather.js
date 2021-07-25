//variable to hold value of kelvin
const kelvin = 293
//converting kelvin to celcius
const Celcius = kelvin - 273
//converting to fahrenheit
let fahrenheit = Celcius * (9/5) + 32
//round the value of fahrenheit
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let Newton = Math.floor(Celcius * (33/100))
console.log(`The temperature is ${Newton} degrees Newton`)
