function calcular(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

let cociente = numero1/numero2;
let resto = numero1-(numero2*cociente);

document.getElementById("Cociente").innerHTML="El cociente de la division es :"+cociente;
document.getElementById("Resto").innerHTML="El resto de la division es  es :"+resto;
}