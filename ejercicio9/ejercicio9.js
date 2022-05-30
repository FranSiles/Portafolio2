document.getElementById("activar").addEventListener("click", function() {
    meses(mes);
});
function meses(){

    const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let mess = Number(document.getElementById('mes').value);
    let respuesta=MESES[mess];

    document.getElementById('nombremes').innerHTML= respuesta;





}