/*

*/

function letraDni(){

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

let dni = Number(document.getElementById('dni').value);

let resto = dni % 23;

let letra = LETRAS.substring(resto,resto+1);

document.getElementById('letra').innerHTML = "La letra es: "+letra;
}

function coloresoscuros(){
    let bg = document.getElementById("conatiner").style.background = "black";
}
/*linear-gradient(to right, #111011,#8A888A)*/ 