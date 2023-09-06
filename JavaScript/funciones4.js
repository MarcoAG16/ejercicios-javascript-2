console.log("Straton Oakmond")

/* Flujo de control

Cuando habamos de flujo de control hablamosdel orden natural en el que se ejecutan las instrucciones de nuestro progama(arriba a abajo y de izquierda a derecha). Estas instrucciones pueden ser una funcion, un console.log, un ciclo, etc.


la importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependidendo de una condicional(Un elemento o instruccion detonante).


Condicionales
Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partirn de un tru o false.

Tengo la camisa limpia?
    si: Voy a la fiesta
    no: Me quedo en casita


Tengo esta variable?
    si: ejecuto la linea 57 de mi codigo
    No: ejecuto la linea 80 de mi codigo

Condicional if(si)

If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota:Es la condicional mas sencilla, pero las mas limitante porque solo nos da una opcion.

if(condicion)   {
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}


*/
//Ejemplo: Marco ira a una fiesta y necesita tener su camisa favorita limpia para poder ir
if(camisalimpia = false){//siempre tiene que ser true para que se ejecute el codigo
    console.log("Marco va a la fiesta");
}

/*
else (de otro modo, de lo contrario, si no)

if (condicion detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
}else{
    //bloque de codigo que se ejecuta si la condicion es falsa

*/

if(camisalimpia = false){
    console.log("Marco va a la fiesta"); //true
} else{
    console.log ("Me quedo en mi cascita") //false
}


/*
else if 

Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. Para lograr esto, vamos a unir el else con el if

if (condicion detonante){
    //bloque de codigo si la condicion es verdadera
}else if (condicion detonante 2){
    //bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
}else{
    //bloque de codigo si las dos opciones son falsas
}

*/

/*

//Ejemplo 2:Marco tiene hambre y quiere comer chilaquiles verdes */
/*
if (hambre=true){
    console.log("marco va a comer");
}else if(chilaquiles = verdes){
    console.log("marco come chilaquiles");

}else{
    console.log("marco no come y se queda con hambre");
}

*/

//Ejemplo 3:Escribe un programa que muestre 3 mensajes diferentes. El primer mensaje s emuestra si son las 13:00 hrs y debera imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y deberia imprimir "lo siento mi ciela, seguimos programando"



//prompt es una forma de ingresar datos y poder hacer uso de ellos

let hora = prompt ("Hola, dime una hora");




//let hora = 17;

if (hora == 13){
    console.log("Vamos a descansar un rato");
}   else if(hora == 14){
       console.log("vamos a comer");
}   else{
       console.log("Lo siento mi siela, seguimos programando");
}


/*
switch(cambiar o intercambiar)

Esta condicional nos permite hacer multiples operaciones y tomar desiciones en funcion de la opcion deseada(estado de la variable)

evaula una expresion comparando el valor de una variable con la expresion o caso, ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.

expresion con un valor

switch (expresion){
    case 1:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1 break:

    case 2:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2 break;
    case 3:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3 break;

    default:
        //bloque de codigo que se ejecuta si ninguna opcion coincide
}

*/

//Elevador con else if

if(piso =1){
    console.log("Llegamos al piso 1");
}else if(piso==2){
    console.log("Llegamos alpiso 2");
}else if (piso == 3){
    console.log("Llegamos al piso 3");
}else if (psio ==4){
    console.log("Llegamos al piso 4");
}else if(piso ==5){
    console.log("Llegamos al piso 5");
}else{
    console.log("piso no encontrado")
}

//Elevador con switch 
let pisoSwitch = prompt("A que piso vas ?")
switch (pisoSwitch){
    case "1":
        console.log("Llegaste al piso 1");
        break;

    case "2":
        console.log("Llegaste al piso 2");
        break;
    case "3":
        console.log("Llegaste al piso 3");
        break;

    default:
        console.log("Opcion no valida")
}



//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta(condicionales)

//variables para mis datos
let tipoSerivicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;

function calcularCostoConsulta(tipoServicio,tiempoConsulta,emergencia,promocion){

    tipoServicio = "Extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente =.10;

    //Calcular el costo total(antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //condicional para saber si agrego otra promocion por ser cliente frecuente

    if (clienteFrecuente == true){
        costoTotal * promocionClienteFrecuente;
    }


}

//Un ejemplo mas sencillo
