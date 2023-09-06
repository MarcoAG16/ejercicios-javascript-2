//Funciones
//Programa para hacer limonada
function esteriliarInstrumentos(instrumentos) {
    console.log("Esterilizando" + instrumentos + "instrumentos dentales");
    let esterilizados = instrumentos *0.9 //El 90 por ciento de instrumentos se esterilizan con exito
    console.log("se esterilizaron" + esterilizados + "instrumentos con exito");
    return esterilizados;//return

}

//Funcion para mezclarel jugo de limon con agua y azucar
function mezclarJugoDeLimon(cantidadDeJugo,CantidadDeAgua,CantidadDeAzucar){
    console.log("Mezclando" + cantidadDeJugo + "ml de jugo de limon con " + CantidadDeAgua + "ml de agua y " + CantidadDeAzucar + "gramos de azucar");

}
//Funcion para servir limonada
function servirLimonada(){
    console.log("Sirviendo limonada en un vaso");
    vasoDeLimonada = true;

}

//Funcion principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);//cantidades ficticias de jugo de limon de agua y de azucar
    servirLimonada();
}

//Llamamos a la funcion principal para preparar limonada 
var vasoDeLimonada = false;
prepararLimonada(5);//Llamado al programa