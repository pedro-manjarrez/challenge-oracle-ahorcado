var botonNuevo =  document.querySelector(".btn-nuevo");
var botonDesistir =document.querySelector(".btn-desistir");
var contenedorLetras = document.querySelector(".cont_letras_correct");
var contenedorLetrasMal = document.querySelector(".cont_letras_incorrect");
var teclado = document.querySelector(".teclado");
var tecladoPantalla = document.querySelector(".teclado-pantalla");
var listaTeclas = document.querySelectorAll(".key");

var letraActual = "";
var palabraActual = "";
var letrasIncorrectas = "";
var contadorLetrasCorrectas = 0;
var repetidas = [];


botonNuevo.onclick = jugar;
botonDesistir.onclick = VolverInicio;
teclado.onclick = null;


function jugar(){
    habilitarTeclas();
    teclado.onclick = mostrarTeclado;
    resetearValores();
    activarTeclas();
    rotar();
    var aleatorio = generarNumeroAleatorio(listaPalabras.length);
    palabraActual = listaPalabras[aleatorio]
    crearBloqueVacio(listaPalabras[aleatorio]);
    resetearCanvas();
}

function VolverInicio(){
    seccion2.classList.remove("ocultarOpaco")
    seccion1.classList.add("ocultar");
    anularTeclado();
    anularTecladoPantalla();
    resetearValores();
    volverAtras();
    ocultarTeclado();
    ocultarFormulario();
}


function habilitarTeclas(){
    for(var tecla of listaTeclas){
        tecla.addEventListener("click",habilitarTeclado);
    }
}

function habilitarTeclado(){
    activarTecladoPantalla(this.textContent);
 }
