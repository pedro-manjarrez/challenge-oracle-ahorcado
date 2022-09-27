var botonInicio = document.querySelector(".btn-iniciar");
var botonAgregar = document.querySelector(".btn-agregar");
var botonAceptar = document.querySelector(".btn-aceptar");
var botonCancelar = document.querySelector(".btn-cancelar");



var seccion1 = document.querySelector(".seccion1");
var seccion2 = document.querySelector(".seccion2");

var listaLetras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                   "Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

botonInicio.onclick = cambiarSecciones;
botonAgregar.onclick = mostrarFormulario;
botonAceptar.onclick = validarEntradaTexto;
botonCancelar.onclick = ocultarFormulario;


function cambiarSecciones(){
    seccion2.classList.add("ocultarOpaco")
    seccion1.classList.remove("ocultar");
}

