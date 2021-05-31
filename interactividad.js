function limpiarFormulario(){
document.getElementById("miform").reset();
}

var CalcularDerivada = function(n1,n2){

var i  = parseFloat(document.getElementById("independiente").value);

var e  = parseFloat(document.getElementById("x").value);


var n = e-1;
var d = i * e;


var resultado = d;
var exponew = n;

return " La derivada de f(x) es " + resultado + " con una nueva exponente de x" +exponew;
}

var calculo = function(n1){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var E = numero1/5280;
    return "La equivalencia es: "+E+" mi";
}
