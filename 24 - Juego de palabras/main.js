//arreglo que contendra las palabras del juego

let listado_palabras = ["CARRO","EDIFICIO","PERRO","GATO","COMPUTADORA","BICICLETA", "DINERO","MAR","HIELO","OSO","LECHE","SUDADERA","LUZ","CELULAR","ESPACIO",
"MOTO","PLAZA","AMARILLO","AZUL","ROJO","HAMBURGUESA","PIZZA","NUBE","PLAYA","COCO","NADAR","CONTRATO","PAGAR","MONTAÑA","PASTO","TIERRA","SOL","PAREJA","AMOR","NOVIA",
"JIWAKI","MAXI","LAVADORA","OJO","CABELLO","PIERNA","POLLO","CARNE","FRUTA","MANGO","FRESA","MURALLA","VIAJAR","LLANTA","SUDAR","CINE","DORMIR","ESTUDIA"];

let acertadas = 0;
let timer, indice;
let tiempo = 30;

function comenzarJuego(){
    // dejar visible la pantalla del juego y ocultar el resto
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //posicionamos el cursor en el input

    document.getElementById("palabra_ingresada").focus();

    //cargamos la palabra
    cargarPalabra();

    //tiempo = cada 1s 
    timer = setInterval('restarTiempo()', 1000)

}

//funcion que carga la siguiente palabra del areglo de forma aleatoria
function cargarPalabra (){
    //genero la posicion de forma aleatoria 
    indice = Math.round(Math.random()* (listado_palabras.length -1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];

    //elimino la posicion ya mostrada
    listado_palabras.splice(indice,1);
}

//funcion que compara la palabra mostrada con la palabra ingresada

function comparar(){
    let palabra_mostrada = document.getElementById("palabra"). innerHTML;
    let palabra_tecleada = document.getElementById("palabra_ingresada").value;
     
    // convierto toda la palabra tecleada a mayuscula

    palabra_tecleada = palabra_tecleada.toUpperCase();

    if (palabra_mostrada==palabra_tecleada){
        acertadas++;
        document.getElementById("palabra_ingresada").value = "";
        agregarNodo(palabra_tecleada);
        cargarPalabra(); //cargo otra palabra
    }
}

function agregarNodo(palabra){
    let span =document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}

//funcion que muestra el tiempo 

function restarTiempo (){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if (tiempo == 0){
        //detenemos el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none"
        document.getElementById("final").style.display = "block"
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}