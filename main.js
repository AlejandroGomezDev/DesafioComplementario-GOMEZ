/* Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada. */

let cantidadVeces = parseInt(prompt("Ingrese la cantidad de veces que quiere ver el mensaje 'Hola'"))

for (let i = 0; i < cantidadVeces; i++){
    alert("Hola")
}