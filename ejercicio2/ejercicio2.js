function calcular(){
const PI = 3.1416;
let radio = Number(document.getElementById('radio').value);

let circunferencia = 2* radio * PI;
let circulo = radio **2 * PI;
let esfera = radio ** 3 * PI;
document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es :"+circunferencia;
document.getElementById("circulo").innerHTML="La longitud de la circunferencia es :"+circulo;
document.getElementById("esfera").innerHTML="La longitud de la circunferencia es :"+esfera;

}