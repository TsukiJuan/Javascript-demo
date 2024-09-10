// Variables usando let
let nombre = "Juan";
let edad = 30;
let esEstudiante = true;
let ciudad = "Medellín";
let pais = "Colombia";

// Variables usando const
const PI = 3.1416;
const GRAVEDAD = 9.8;
const NOMBRE_COMPLETO = "Juan David Calderón Jaramillo";
const COLOR_FAVORITO = "Azul";
const NUMERO_FAVORITO = 7;


const saludar = () => console.log("¡Hola!");

// Función con un parámetro
const cuadrado = (num) => num * num;

// Función con dos o más parámetros
const sumar = (a, b) => a + b;

// Función sin parámetros con más acciones
const saludarConHora = () => {
    let hora = new Date().getHours();
    if (hora < 12) {
        console.log("¡Buenos días!");
    } else if (hora < 18) {
        console.log("¡Buenas tardes!");
    } else {
        console.log("¡Buenas noches!");
    }
};

const esPar = (num) => {
    if (typeof num !== 'number') {
        return "El valor debe ser un número";
    }
    return num % 2 === 0 ? "Es par" : "Es impar";
};

// Función con dos o más parámetros con más acciones
const calcular = (a, b, operacion) => {
    switch (operacion) {
        case 'sumar' || 'Sumar':
            return a + b;
        case 'restar' || 'Restar':
            return a - b;
        case 'multiplicar' || 'Multiplicar':
            return a * b;
        case 'dividir' || 'Dividir':
            return b !== 0 ? a / b : "No se puede dividir por cero";
        default:
            return "Operación no válida";
    }
};
// Ejemplo de inserción de datos en un array
let estudiantes = [];
const agregarEstudiante = (nombre, edad) => {
    estudiantes.push({ nombre, edad });
};
agregarEstudiante("Juan", 22);
agregarEstudiante("Camilo", 25);
console.log(estudiantes);
