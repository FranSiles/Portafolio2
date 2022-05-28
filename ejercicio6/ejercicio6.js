function palindromo(){


    let palabras = String(document.getElementById('palabra').value);
    let palabraReves = "";
    var k = palabras.length;
    for(var i = 0;i<=palabras.length;i++){
    
        let caracter = palabras.charAt(k);
        palabraReves = palabraReves + caracter;
        k--;
    
    
    }
    if(palabraReves == palabras){
    
    document.getElementById('resultado').innerHTML="La palabra al reves es "+palabraReves+", si es polindroma.";
    
    } else {
    
        document.getElementById('resultado').innerHTML="No es polindroma , si lo fuera sería :"+palabras+palabras.split("").reverse().join("")
    
    
    }
    }