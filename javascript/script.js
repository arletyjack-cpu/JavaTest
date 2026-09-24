const name = "Adalberto Lopez";

let materia = "Diseño Web";
let proyecto = "Proyecto Final";
let age = 33;

age = 34;

function mostrarMateria() {
    console.log("Materia a mostrar originalmente es: " + materia);
}

function mostrarVariable(Variable) {
    console.log("Variable a mostrar: " + Variable);
}

function textoAMayusculas(texto) {
    return texto.toUpperCase();
}

//-----------------------------------------CONDICIONALES

function evaluarEdad(age) {
    if (age > 18) {
        console.log("Eres mayor de edad");
    } else if (age < 18) {
        console.log("Eres menor de edad");
    } else if (age === 18) {                                   //Comprueba que sea exactamente 18 años, y que sea del tipo number
        console.log("Tienes exactamente 18 años");
    } else {
        console.log("No es un número válido");
    }
}

function evaluarEdadYProyecto() {
    if (age > 18 && proyecto ) {
        console.log("Eres mayor de edad y tienes un proyecto asignado");
    } else {
        console.log("No cumples con los requisitos");
    }
}

//-----------------------------------------CONTEO

console.log("Contando del 0 al 10");
let count = 0;
while (count < 11) {
    console.log(count);
    count++;
}


console.log("Contando del 0 al 10 los números pares");
count = 0;
while (count < 11) {
    if (count % 2 === 0 && count != 0) {
        console.log(count);
    }
    count++;
}

let datos = [name, materia, proyecto, age];
console.log("Imprimiendo datos del usuario");
for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}

console.log("Contando del 5 al 1");
count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

let n = 100
console.log("Números primos hasta " + n);
for (let i = 2; i <= n; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i);
    }
}