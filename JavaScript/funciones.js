//Funciones
/*
Una funcion es un bloque de codigo que realiza una tarea especifica, cuando se le llama

*Cada funcin de JavaScript es un objeto Funcion

*/

function saludar (){
    console.log("Hola soy una funcion");
}
saludar ();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//Declarar funciones
/*
*La palabra reservada function que nos indica definiendo una funcion.
*El nombre de la funcion, dependiendo de la accion a realizar.
*Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno.
*Seguido de un juego de llaves para cerrar el bloque de codigo.
*dependiendo de ;as instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un valor.
*/
//Llamamos una funcion y la vamos a almacenar un resultado
function suma(a,b){
    return a + b;

}
var resultado =  suma (5,3); //Almacenar funcion en una variable
console.log(resultado);//funcion


/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Funcion que muestra un mensaje en la consola
function saludar (nombre){
    console.log("Hola, " + nombre + "!");
}
//Llamamos a la funcion saludar a alguien
saludar("Marco") //imprime el saludo
/** * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */
//Hoisting
/*
*Es fundamental en el entendimiento de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para variables como para funciones. Como tal, la traduccion de hosting es elevacion, a partir de aqui, su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del codigo.

*Yo puedo invocar una funcion antes de siquiera declararla
*/

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;
//scope = Alcance, hace referenci al alcance de una variable en nuestro codigo de JS.
/*
*Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo.
*Var : no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.
*let: es preferible e inlcuso mas segur de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local.
*const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no pude ser reasignado. */

function funcionConVariableLocal(){
    var mensaje = "Esta es una variable local";
    console.log (mensaje);

}

/*funcionConVariableLocal ();
var mensaje = "Stratton Oakmont"
console.log(mensaje)*/

/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//Variable Global

var mensajeGlobal = "Esta es una variable global"

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);

}

funcionConVariableGlobal();// la estamos llamando

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */

/////////////////////////////////
///Funciones anonimas///
////////////////////////////////
/**
 * Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.
 
La diferencia principal de estas funciones es que se declaran sin un nombre
 */
//function (){
    //console.log("Vivir vivir");//Funcion anonima
//}
const saludo = function () {
    console.log ("Vivir vivir")
}
saludo();

/////////////
//funciones flecha//
////////////
/**
 * Una form mas concisa de definir funciones anonimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
 * Basicamente se trata de reemplazar la palabra function y de aniadir => antes de abrir nuestras llaves
 */
const resta =(a,b) => a - b;
/**
 * Esta funcion flecha es una forma mas corta de:
 * const suma = function (a,b){
 * return a -b;
 * }
 */

console.log(resta(5,3));
/**
 * 
 */