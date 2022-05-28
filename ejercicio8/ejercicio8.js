function calcular(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

let cociente = numero1/numero2;
let resto = numero1-(numero2*cociente);

if(resto==0){
    document.getElementById('mcd').innerHTML="el maximo comun divisor es "+cociente;
}else{
    while(resto2==0){
    cociente2=numero2/resto;
    resto2= numero2-(resto*cociente2);
    }
}
}