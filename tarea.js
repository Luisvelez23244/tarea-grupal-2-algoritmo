// Ejercicio 1
function ejercicio1() {
    console.log("Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.")
    // Definimos los valores de a y b
    let a = 8; // Valor de a: 8
    let b = 5; // Valor de b: 5

    // Calculamos cada parte de la expresión
    let parte1 = 2 * b; // Multiplicamos b por 2: 2 * 5 = 10
    let parte2 = a / 2; // Dividimos a por 2: 8 / 2 = 4
    let parte3 = 4 * b % a; // Multiplicamos b por 4 y luego tomamos el módulo de a: (4 * 5) % 8 = 20 % 8 = 4

    // Calculamos el valor de v sumando todas las partes
    let v = parte1 + parte2 + parte3; // Sumamos las tres partes: 10 + 4 + 4 = 18

    // Mostramos el resultado
    console.log("El valor de v es: " + v); // Mostramos el valor de v en la consola 
}

// Ejercicio 2
function ejercicio2() {
    console.log("(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3")
    // Definimos las partes de la expresión
    let primero = (5 + 3 * 2) + 9; // primero = 5 + (3 * 2) + 9 = 5 + 6 + 9 = 20
    let segundo = 3 * 5 * 14 % 3; // segundo = (3 * 5 * 14) % 3 = 210 % 3 = 0

    // Comparamos las partes de la expresión directamente en la condición del if
    if (primero > segundo) {
        console.log("El resultado es: true"); // Si la condición es verdadera, mostramos true
    } else {
        console.log("El resultado es: false"); // Si la condición es falsa, mostramos false
    }
}

// Ejercicio 3
function ejercicio3() {
    console.log("2 *(4 – 10 + 8)/2* 36 *(1/2)")
    // Calculamos la expresión

    // Parte 1: Restamos 10 de 4, luego sumamos 8 y multiplicamos por 2
    let num = 2 * (4 - 10 + 8); // parte1 = 2 * (4 - 10 + 8) = 2 * 2 = 4

    // Parte 2: Dividimos parte1 por 2
    let num1 = num / 2; // parte2 = 4 / 2 = 2

    // Parte 3: Multiplicamos 36 por (1/2)
    let num2 = 36 * (1/2); // parte3 = 36 * (1/2) = 18

    // Calculamos el resultado final multiplicando parte2 por parte3
    let resultado = num1 * num2; // resultado = 2 * 18 = 36

    // Mostramos el resultado
    console.log("El resultado es: " + resultado); // Mostramos el valor de resultado en la consola
}

// Ejercicio 4
function ejercicio4() {
    console.log("260 / 12 + 54 % 3 – 85 % 7")
    // Calculamos la expresión

    // Parte 1: Dividimos 260 por 12
    let prt1 = 260 / 12; // parte1 = 260 / 12 = 21.666666666666668

    // Parte 2: Calculamos el módulo de 54 entre 3
    let prt2 = 54 % 3; // parte2 = 54 % 3 = 0

    // Parte 3: Calculamos el módulo de 85 entre 7
    let prt3 = 85 % 7; // parte3 = 85 % 7 = 1

    // Calculamos el resultado final sumando y restando las partes
    let resul = prt1 + prt2 - prt3; // resultado = 21.666666666666668 + 0 - 1 = 20.666666666666668

    // Mostramos el resultado
    console.log("El resultado es: " + resul); // Mostramos el valor de resultado en la consola
}

function ejercicio5() {
    // Paso 1: Evaluación de la primera parte de la expresión ((8 > 2) || (932 < 23))
    var resultado1 = (8 > 2);  // true
    var resultado2 = (932 < 23);  // false
    var resultado3 = resultado1 || resultado2;  // true || false = true

    // Paso 2: Evaluación de la segunda parte de la expresión (4 == 2)
    var resultado4 = (4 == 2);  // false

    // Paso 3: Evaluación de la expresión completa
    var resultadoFinal = resultado3 && resultado4;  // true && false = false

    // Impresión de los resultados intermedios
    console.log("Paso 1 - 8 > 2:", resultado1);
    console.log("Paso 1 - 932 < 23:", resultado2);
    console.log("Paso 1 - Resultado final de la primera parte:", resultado3);
    console.log("Paso 2 - 4 == 2:", resultado4);
    console.log("Paso 3 - Resultado final de la expresión completa:", resultadoFinal);
}

function ejercicio6() {
    // Pedir al usuario que ingrese los cuatro números
    let numero1 = parseInt(prompt("Ingrese el primer número:")); // Se solicita al usuario que ingrese números
    let numero2 = parseInt(prompt("Ingrese el segundo número:")); 
    let numero3 = parseInt(prompt("Ingrese el tercer número:")); 
    let numero4 = parseInt(prompt("Ingrese el cuarto número:")); 
    
    // Verificar si el número 1 es la mitad del número 2
    if (numero1 * 2 === numero2) { // Si el doble del primer número es igual al segundo número
        console.log("El número 1 es la mitad del número 2."); // se imprime que el número 1 es la mitad del número 2
    } else {
        console.log("El número 1 no es la mitad del número 2."); // Se imprime que el número 1 no es la mitad del número 2
    }

    // Verificar si el número 3 es divisor del número 4
    if (numero4 % numero3 === 0) { // Si el cuarto número es divisible por el tercer número sin dejar residuo
        console.log("El número 3 es divisor del número 4."); // Se imprime que el número 3 es divisor del número 4
    } else {
        console.log("El número 3 no es divisor del número 4."); // ee imprime que el número 3 no es divisor del número 4
    }
} //hola profe

function ejercicio7() {
    // Pedir al usuario que ingrese los cuatro números
    let numero1 = parseInt(prompt("Ingrese el primer número:")); 
    let numero2 = parseInt(prompt("Ingrese el segundo número:")); // Se solicita al usuario que ingrese números
    let numero3 = parseInt(prompt("Ingrese el tercer número:")); 
    let numero4 = parseInt(prompt("Ingrese el cuarto número:")); 
    
    // Verificar si el número 1 es divisor del número 3
    if (numero3 % numero1 === 0) { // Si el tercer número es divisible por el primer número sin dejar residuo
        console.log("El número 1 es divisor del número 3."); // Se imprime que el número 1 es divisor del número 3
    } else {
        console.log("El número 1 no es divisor del número 3."); // Se imprime que el número 1 no es divisor del número 3
    }

    // Verificar si el número 2 es el doble del número 4
    if (numero2 === numero4 * 2) { // Si el segundo número es igual al doble del cuarto número
        console.log("El número 2 es el doble del número 4."); // Se imprime que el número 2 es el doble del número 4
    } else {
        console.log("El número 2 no es el doble del número 4."); // Se imprime que el número 2 no es el doble del número 4
    }
}

function ejercicio8() {
// Pedir al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número:")); // Se solicita al usuario que ingrese un número
    
// Verificar si el número es negativo y menor que -20
if (numero < -20) { // Si el número es menor que -20
    console.log("El número es negativo y menor que -20."); // Se imprime que el número es negativo y menor que -20
} else { // Si el número no es menor que -20
    // Verificar si el número es positivo
    if (numero > 0) { // Si el número es mayor que 0
        // Verificar si el número es par o impar
        if (numero % 2 === 0) { // Si el número es par
            console.log("El número es positivo y par."); // Se imprime que el número es positivo y par
        } else { // Si el número es impar
            console.log("El número es positivo e impar."); // Se imprime que el número es positivo e impar
        }
    } else if (numero === 0) { // Si el número es igual a 0
        console.log("El número es igual a 0."); // Se imprime que el número es igual a 0
    } else { // Si el número es negativo
        // Verificar si el número es múltiplo de 7
        if (numero % 7 === 0) { // Si el número es divisible por 7 sin dejar residuo
            console.log("El número es negativo y múltiplo de 7."); // Se imprime que el número es negativo y múltiplo de 7
        } else { // Si el número no es múltiplo de 7
            console.log("El número es negativo y no es múltiplo de 7."); // Se imprime que el número es negativo y no es múltiplo de 7
        }
    }
}
}


function ejercicio9() {
    // Pedir al usuario que ingrese su salario actual y el porcentaje de aumento
    let salarioActual = parseFloat(prompt("Ingrese su salario actual:")); // Se solicita al usuario que ingrese su salario actual
    let porcentajeAumento = parseFloat(prompt("Ingrese el porcentaje de aumento (%):")); // Se solicita al usuario que ingrese el porcentaje de aumento
    
    // Calcular el nuevo salario después del aumento
    let aumento = salarioActual * (porcentajeAumento / 100); // Se calcula el monto del aumento
    let nuevoSalario = salarioActual + aumento; // Se calcula el nuevo salario sumando el aumento al salario actual
    
    // Mostrar el nuevo salario después del aumento
    console.log("Su salario actual es: $" + salarioActual.toFixed(2)); // Se muestra el salario actual
    console.log("El porcentaje de aumento es: " + porcentajeAumento.toFixed(2) + "%"); // Se muestra el porcentaje de aumento
    console.log("El monto del aumento es: $" + aumento.toFixed(2)); // Se muestra el monto del aumento
    console.log("Su nuevo salario después del aumento es: $" + nuevoSalario.toFixed(2)); // Se muestra el nuevo salario después del aumento
}


function ejercicio10() {
    // Solicitar al usuario que ingrese el tipo de tarjeta
    let tipoTarjeta = parseInt(prompt("Ingrese el tipo de tarjeta (1, 2, 3):"));

    let aumento = 0;

    // Determinar el aumento basado en el tipo de tarjeta
    if (tipoTarjeta === 1) {
        aumento = 100;
    } else if (tipoTarjeta === 2) {
        aumento = 200;
    } else if (tipoTarjeta === 3) {
        aumento = 300;
    } else {
        aumento = 500;
    }
    
    // Aumentar el límite de crédito en un 10% adicional
    aumento *= 1.1;

    // Mostrar el nuevo límite de crédito
    console.log("El nuevo límite de crédito para el cliente es: $" + aumento.toFixed(2));
}


// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10.
function ejercicio11() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es mayor, menor o igual que 10 y mostrar el resultado
    if (numero > 10) {
        // Si el número es mayor que 10
        console.log("El número ingresado es mayor que 10.");
    } else if (numero < 10) {
        // Si el número es menor que 10
        console.log("El número ingresado es menor que 10.");
    } else {
        // Si el número es igual a 10
        console.log("El número ingresado es igual a 10.");
    }
}

// 12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
function ejercicio12() {
    // Solicitar al usuario que ingrese su edad
    let edad = parseInt(prompt("Ingrese su edad:"));

    // Verificar si la edad es mayor o igual a 18 y mostrar el resultado
    if (edad >= 18) {
        // Si la edad es mayor o igual a 18
        console.log("Usted es mayor de edad.");
    } else {
        // Si la edad es menor a 18
        console.log("Usted es menor de edad.");
    }
}

// 13. Pedir al usuario un número y mostrar si es par o impar.
function ejercicio13() {
    // Solicitar al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si el número es par o impar y mostrar el resultado
    if (numero % 2 === 0) {
        // Si el número es par
        console.log("El número ingresado es par.");
    } else {
        // Si el número es impar
        console.log("El número ingresado es impar.");
    }
}

// 14. Solicitar al usuario un número y mostrar si es positivo o negativo.
function ejercicio14() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es positivo, negativo o cero y mostrar el resultado
    if (numero > 0) {
        // Si el número es positivo
        console.log("El número ingresado es positivo.");
    } else if (numero < 0) {
        // Si el número es negativo
        console.log("El número ingresado es negativo.");
    } else {
        // Si el número es cero
        console.log("El número ingresado es cero.");
    }
}

// 15. Pedir al usuario dos números y mostrar si son iguales o diferentes.
function ejercicio15() {
    // Solicitar al usuario que ingrese dos números
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verificar si los números son iguales o diferentes y mostrar el resultado
    if (numero1 === numero2) {
        // Si los números son iguales
        console.log("Los números ingresados son iguales.");
    } else {
        // Si los números son diferentes
        console.log("Los números ingresados son diferentes.");
    }
}

// 16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
function ejercicio16() {
    // Solicitar al usuario que ingrese un carácter
    let caracter = prompt("Ingrese un carácter:");

    // Verificar si el carácter es una vocal, consonante o no válido y mostrar el resultado
    if (caracter.length === 1) {
        // Si se ingresa solo un carácter
        if ("aeiou".includes(caracter.toLowerCase())) {
            // Si el carácter es una vocal
            console.log("El carácter ingresado es una vocal.");
        } else {
            // Si el carácter es una consonante
            console.log("El carácter ingresado es una consonante.");
        }
    } else {
        // Si se ingresa más de un carácter
        console.log("Por favor, ingrese solo un carácter.");
    }
}

// 17. Pedir dos nombres e indicar si son iguales, si el primero es mayor que el segundo o menor que el segundo.
function ejercicio17() {
    // Solicitar al usuario que ingrese dos nombres
    let nombre1 = prompt("Ingrese el primer nombre:");
    let nombre2 = prompt("Ingrese el segundo nombre:");

    // Comparar los nombres y mostrar el resultado
    if (nombre1 === nombre2) {
        // Si los nombres son iguales
        console.log("Los nombres ingresados son iguales.");
    } else if (nombre1 > nombre2) {
        // Si el primer nombre es mayor que el segundo
        console.log("El primer nombre es mayor que el segundo.");
    } else {
        // Si el primer nombre es menor que el segundo
        console.log("El primer nombre es menor que el segundo.");
    }
}

// 18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
function ejercicio18() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es múltiplo de 3 y par y mostrar el resultado
    if (numero % 3 === 0 && numero % 2 === 0) {
        // Si el número es múltiplo de 3 y par
        console.log("El número ingresado es múltiplo de 3 y par.");
    } else {
        // Si el número no cumple ambas condiciones
        console.log("El número ingresado no cumple ambas condiciones.");
    }
}

// 19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar.
function ejercicio19() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es divisible por 2 o impar y mostrar el resultado
    if (numero % 2 === 0) {
        // Si el número es divisible por 2
        console.log("El número ingresado es divisible por 2.");
    } else {
        // Si el número es impar
        console.log("El número ingresado es impar.");
    }
}

// 20. Pedir al usuario un número y mostrar si es mayor a 0 y menor o igual a 100.
function ejercicio20() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número está en el rango y mostrar el resultado
    if (numero > 0 && numero <= 100) {
        // Si el número está entre 0 y 100 (inclusive)
        console.log("El número ingresado está entre 0 y 100 (inclusive).");
    } else {
        // Si el número está fuera del rango entre 0 y 100 (inclusive)
        console.log("El número ingresado está fuera del rango entre 0 y 100 (inclusive).");
    }
}

// 21. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
function ejercicio21() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es de un solo dígito y mostrar el resultado
    if (numero >= -9 && numero <= 9) {
        // Si el número es de un solo dígito
        console.log("El número ingresado es un número de un solo dígito.");
    } else {
        // Si el número no es de un solo dígito
        console.log("El número ingresado no es un número de un solo dígito.");
    }
}

// 22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
function ejercicio22() {
    // Solicitar al usuario que ingrese el monto total de la factura y el año de la compra
    let montoTotal = parseFloat(prompt("Ingrese el monto total de la factura:"));
    let añoCompra = parseInt(prompt("Ingrese el año de la compra:"));

    // Determinar el porcentaje de IVA según el año de la compra
    let porcentajeIVA = añoCompra < 2024 ? 0.12 : 0.15;

    // Calcular el monto total a pagar incluyendo el IVA
    let totalPagar = montoTotal * (1 + porcentajeIVA);

    // Mostrar el monto total a pagar
    console.log("El monto total a pagar incluyendo el IVA es: $" + totalPagar.toFixed(2));
}

// 23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100.
function ejercicio23() {
    // Solicitar al usuario que ingrese el precio del producto y el porcentaje de descuento
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
    let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento aplicado:"));

    // Verificar si el precio del producto es mayor a $100
    if (precioProducto > 100) {
        // Calcular el precio final luego de aplicar el descuento
        let precioFinal = precioProducto * (1 - porcentajeDescuento / 100);

        // Mostrar el precio final luego de aplicar el descuento
        console.log("El precio final del producto luego de aplicar el descuento es: $" + precioFinal.toFixed(2));
    } else {
        // Si el precio del producto es menor o igual a $100
        console.log("El precio del producto debe ser mayor a $100 para aplicar el descuento.");
    }
}

//porfe es camsado hacer bosquejos 

// 24. Pedir al usuario su nota en un examen y determinar si ha aprobado, reprobado o necesita recuperación.
function ejercicio24() {
    // Solicitar al usuario que ingrese su nota en el examen
    let notaExamen = parseFloat(prompt("Ingrese su nota en el examen:"));

    // Verificar si la nota es mayor o igual a 60, entre 40 y 60, o menor a 40 y mostrar el resultado
    if (notaExamen >= 60) {
        console.log("¡Felicitaciones! Ha aprobado el examen DE PROGRAMACION.");
    } else if (notaExamen >= 40 && notaExamen < 60) {
        console.log("Necesita recuperación.");
    } else {
        console.log("Lo siento, ha reprobado el examen DE PROGRAMACION.");
    }
}

// 25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Aplicar descuento y mostrar precio final con IVA.
function ejercicio25() {
    // Solicitar al usuario que ingrese el precio de venta del vehículo y su año de fabricación
    let precioVehiculo = parseFloat(prompt("Ingrese el precio de venta del vehículo:"));
    let añoFabricacion = parseInt(prompt("Ingrese el año de fabricación del vehículo:"));

    // Calcular el precio final según el año de fabricación y mostrar el resultado
    let precioFinal;
    if (añoFabricacion >= 2020 && añoFabricacion <= 2023) {
        precioFinal = precioVehiculo * 0.95 * 1.15; // Aplicar descuento del 5% y agregar IVA del 15%
    } else {
        precioFinal = precioVehiculo * 1.15; // Agregar IVA del 15%
    }
    console.log("El precio final del vehículo incluyendo el IVA es: $" + precioFinal.toFixed(2));
}

// 26. Solicitar al usuario el precio de un artículo y el porcentaje de impuesto de ventas. Calcular precio final con impuesto si supera $200.
function ejercicio26() {
    // Solicitar al usuario que ingrese el precio del artículo y el porcentaje de impuesto de ventas
    let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
    let impuestoVentas = parseFloat(prompt("Ingrese el porcentaje de impuesto de ventas (%):"));

    // Verificar si el precio del artículo supera $200 y aplicar el impuesto de ventas
    let precioFinal;
    if (precioArticulo > 200) {
        precioFinal = precioArticulo * (1 + impuestoVentas / 100); // Aplicar impuesto de ventas
    } else {
        precioFinal = precioArticulo; // No aplicar impuesto de ventas
    }
    console.log("El precio final del artículo es: $" + precioFinal.toFixed(2));
}

// 27. Solicitar al usuario su sueldo actual y el porcentaje de incremento salarial anual. Calcular sueldo esperado con incremento si es menor a $500.
function ejercicio27() {
    // Solicitar al usuario que ingrese su sueldo actual y el porcentaje de incremento salarial anual
    let sueldoActual = parseFloat(prompt("Ingrese su sueldo actual:"));
    let incrementoSalarial = parseFloat(prompt("Ingrese el porcentaje de incremento salarial anual (%):"));

    // Verificar si el sueldo actual es menor a $500 y aplicar el incremento salarial
    let sueldoEsperado;
    if (sueldoActual < 500) {
        sueldoEsperado = sueldoActual * (1 + incrementoSalarial / 100); // Aplicar incremento salarial
    } else {
        sueldoEsperado = sueldoActual; // No aplicar incremento salarial
    }
    console.log("El sueldo esperado es: $" + sueldoEsperado.toFixed(2));
}

// 28. Solicitar al usuario el precio total de una compra en una tienda en línea y el cupón de descuento a aplicar. Calcular monto final con descuento y IVA si supera $10.
function ejercicio28() {
    // Solicitar al usuario que ingrese el precio total de la compra y el cupón de descuento
    let precioCompra = parseFloat(prompt("Ingrese el precio total de la compra:"));
    let cuponDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento a aplicar (%):"));

    // Verificar si el precio total de la compra supera $10 y aplicar el descuento
    let montoFinal;
    if (precioCompra > 10) {
        let descuento = precioCompra * cuponDescuento / 100;
        montoFinal = (precioCompra - descuento) * 1.15; // Aplicar descuento y agregar IVA del 15%
    } else {
        montoFinal = precioCompra * 1.15; // No aplicar descuento y agregar IVA del 15%
    }
    console.log("El monto final con descuento y IVA es: $" + montoFinal.toFixed(2));
}

// 29. Solicitar al usuario su salario actual y la cantidad de años de antigüedad. Calcular valor del bono de antigüedad.
function ejercicio29() {
    // Solicitar al usuario que ingrese su salario actual y la cantidad de años de antigüedad
    let salarioActual = parseFloat(prompt("Ingrese su salario actual:"));
    let añosAntigüedad = parseInt(prompt("Ingrese la cantidad de años de antigüedad:"));

    // Calcular el valor del bono de antigüedad
    let bonoAntigüedad = añosAntigüedad > 3 ? salarioActual * (0.03 * añosAntigüedad) : 0;
    console.log("El salario es: $" + salarioActual.toFixed(2));
    console.log("El bono de antigüedad es: $" + bonoAntigüedad.toFixed(2));
}

// 30. Solicitar al usuario el total de su cuenta en un restaurante y el porcentaje de descuento por ser cliente frecuente. Calcular monto final con descuento e IVA.
function ejercicio30() {
    // Solicitar al usuario que ingrese el total de su cuenta y el porcentaje de descuento
    let totalCuenta = parseFloat(prompt("Ingrese el total de su cuenta en el restaurante:"));
    let descuentoClienteFrecuente = parseFloat(prompt("Ingrese el porcentaje de descuento por ser cliente frecuente (%):"));

    // Verificar si el total de la cuenta supera $70 y aplicar el descuento
    let montoFinal;
    if (totalCuenta > 70) {
        let descuento = totalCuenta * descuentoClienteFrecuente / 100;
        montoFinal = (totalCuenta - descuento) * 1.15; // Aplicar descuento y agregar IVA del 15%
    } else {
        montoFinal = totalCuenta * 1.15; // No aplicar descuento y agregar IVA del 15%
    }
    console.log("El monto final con descuento e IVA es: $" + montoFinal.toFixed(2));
}










// Solicitar al usuario el número del ejercicio que desea ejecutar
let numEjercicio = prompt("Ingresa el número del ejercicio que deseas ejecutar (1 al 4):");

// Ejecutar el código correspondiente al ejercicio ingresado por el usuario
switch (numEjercicio) {
    case '1':
        ejercicio1();
        break;
    case '2':
        ejercicio2();
        break;
    case '3':
        ejercicio3();
        break;
    case '4':
        ejercicio4();
        break;
    case '5':
        ejercicio5();
        break;
    case '6':
        ejercicio6();
        break;
    case '7':
        ejercicio7();
        break;
    case '8':
        ejercicio8();
        break;
    case '9':
        ejercicio9();
        break;
    case '10':
        ejercicio10();
        break;
    case '11':
        ejercicio11();
        break;
    case '12':
        ejercicio12();
        break;
    case '13':
        ejercicio13();
        break;
    case '14':
        ejercicio14();
        break;
    case '15':
        ejercicio15();
        break;
    case '16':
        ejercicio16();
        break;
    case '17':
        ejercicio17();
        break;
    case '18':
        ejercicio18();
        break;
    case '19':
        ejercicio19();
        break;
    case '20':
        ejercicio20();
        break;
    case '21':
        ejercicio21();
        break;
    case '22':
        ejercicio22();
        break;
    case '23':
        ejercicio23();
        break;
    case '24':
        ejercicio24();
        break;
    case '25':
        ejercicio25();
        break;
    case '26':
        ejercicio26();
        break;
    case '27':
        ejercicio27();
        break;
    case '28':
        ejercicio28();
        break;
    case '29':
        ejercicio29();
        break;
    case '30':
        ejercicio30();
        break;
    default:
        console.log("Número de ejercicio no válido.");
}

