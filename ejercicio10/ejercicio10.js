document.getElementById("activar").addEventListener("click", function() {
    traduccion(mesesespanol);
});
function traduccion(){

    const MESES = ["January","Febrary","March","April","May","June","July","August","September","October","November","December"];

    let mess = document.getElementById('mesesespanol').value;
    let respuesta=MESES[mess];
    document.getElementById('traducciones').innerHTML=respuesta;

}