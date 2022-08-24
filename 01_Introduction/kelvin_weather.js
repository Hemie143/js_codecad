// Forecast temperature for today, in Kelvin
const kelvin = 0;
// Convert temperature to Celsius
const celsius = kelvin - 273;
// Convert temperature to Fahrenheit
const fahrenheit = Math.floor(celsius * 9 / 5 + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
