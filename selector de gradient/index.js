//SELECCIONAR
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const separa = document.getElementById("separa");
const fondo = document.getElementById("fondo");

//ESCUCHAR
separa.addEventListener("input",cambiarColor);

//REALIZAR ACCION POR MEDIO DE UNA FUNCIÓN
function cambiarColor(){
    console.log("dentro de la funcion");
    fondo.style.background = `linear-gradient(to right,${color1.value} ${separa.value}%,${color2.value})`;
}