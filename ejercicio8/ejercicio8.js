document.getElementById("activar").addEventListener("click", function() {
    calcular(numero1,numero2);
});
function calcular(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

while (numero1!=numero2){
if (numero1>numero2){
    numero1-=numero2;
}else{
    numero2-=numero1;
}
}
return document.getElementById('mcd').innerHTML =numero1;

}