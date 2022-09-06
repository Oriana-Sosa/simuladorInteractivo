//Calculadora de promedio universitario de alumnos para sitio web que
// sirva de una especie de "agenda" estudiantil

//Saludo inicial

let nombreAlumno = prompt("¡Bienvenido! Por favor, ingresa tu nombre");

//Calculadora de promedio

//Establezco las variables de las notas
let notaPrimerParcial;
let notaSegundoParcial;

//Para que, en caso de que el usuario ingrese algo que no sea un número, el proceso
//se repita
do{
    notaPrimerParcial=parseFloat(prompt("Ingrese primer nota"));
    notaSegundoParcial=parseFloat(prompt("Ingrese segunda nota"));
} while (isNaN(notaPrimerParcial) || isNaN(notaSegundoParcial));


//Esta función sirve para sumar las notas

function sumaNotas (valorA, valorB){
    let resultado= valorA + valorB;
    return resultado;
}

let resultadoNotas = sumaNotas(notaPrimerParcial, notaSegundoParcial);

//Esta función sirve para sacar el promedio

function divisionNotas (primerValor, segundoValor) {
    let promedio = primerValor / segundoValor;
    return promedio;
}

let promedioFinal = divisionNotas(resultadoNotas,2);
alert("Tu promedio es: " + promedioFinal);

//Mensajes al estudiante

if (promedioFinal>6){
    alert("¡Felicidades, " + nombreAlumno + ", no vas a rendir el exámen integrador!");
    }else if ((4<=promedioFinal) && (promedioFinal<=6)){
    alert("Aprobaste tus parciales, pero tendrás que rendir el exámen integrador");
    } else if(promedioFinal<4){
        alert("Lo sentimos, " + nombreAlumno + ", pero deberás recursar la materia");
}









