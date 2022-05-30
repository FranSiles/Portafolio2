document.getElementById("boton3").addEventListener("click", function() {
    letraDni(dni);
});
document.getElementById("oscuros").addEventListener("click", function() {
    coloresoscuros();
});
document.getElementById("claros").addEventListener("click", function() {
    coloresclaros();
});

function letraDni(){

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

let dni = Number(document.getElementById('dni').value);

let resto = dni % 23;

let letra = LETRAS.substring(resto,resto+1);

document.getElementById('letra').innerHTML = "La letra es: "+letra;
}

function coloresoscuros(){
    let bg = document.getElementById("container").style.background = "linear-gradient(to right, #111011,#8A888A)";
    let n = document.getElementById("tabla").style.background = "grey";
    let bt2 = document.getElementById("boton2").style.background ="black";
    let bt3 = document.getElementById("boton3").style.background = "#FFFFFF";
    let bt4 = document.getElementById("boton3").style.color = "black";
    let bt5 = document.getElementById("boton4").style.background = "#75796F";
    let bt1 = document.getElementById("boton1").style.background = "#3D3B3D";
}
function coloresclaros(){
    let bg = document.getElementById("container").style.background = "linear-gradient(to right, #FF00E8,#F07BD7)";
    let n = document.getElementById("tabla").style.background = "#E400FF";
    let bt2 = document.getElementById("boton2").style.background ="#61F480";
    let bt3 = document.getElementById("boton3").style.background = "#C9F739";
    let bt1 = document.getElementById("boton1").style.background = "#00FF51";
    let bt4 = document.getElementById("boton4").style.background = "#29E39F";
}
 