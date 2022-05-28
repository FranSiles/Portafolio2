function letras(){
    
    let caracteres = (document.getElementById('caracteres').value);
    if(caracteres==caracteres.toUpperCase()){
    document.getElementById('letra').innerHTML = "los caracteres son mayuscula ";
    }else if(caracteres==caracteres.toLowerCase()){
        document.getElementById('letra').innerHTML = "Los caracteres son minuscula ";
    }else{
    document.getElementById('letra').innerHTML = "Los no son ni minusculas ni mayusculas";
    }

}

