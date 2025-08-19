//Ejercicio: Calculadora de Descuento
//Escribe un programa que calcule el precio final de un producto
// después de aplicar un descuento. Pide al usuario que ingrese 
// el precio original del producto y el porcentaje de descuento, 
// y muestra el precio final.

const prompt = require('prompt-sync')();

//1. Pedir el precio original del producto
const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));

//2. Pedir el porcentaje de descuento
const porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

//3. Calcular el descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;

//4. Calcular el precio final
let precioFinal = precioOriginal - descuento;

//5. Mostrar el precio final
console.log(`El precio final del producto es: $${precioFinal.toFixed(2)}`);
//Fin del ejercicio