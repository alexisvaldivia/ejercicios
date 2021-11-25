const nota1 = document.getElementById("nota1");
const nota1 = document.getElementById("nota2");
const nota1 = document.getElementById("nota3");
const btn= document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click",promedio);

function promedio(){
    let promedio;
    promedio= parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value);
    promedio = promedio / 3
    resultado.innerHTML = promedio.toFixed(2);

    if(promedio<7){
        resultado.classList.remove("verde");
        resultado.classList.add("rojo");
    }else{
        resultado.classList.remove("rojo");
        resultado.classList.add("verde");
    
    }
}