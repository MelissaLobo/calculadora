/**
 * @author melissaLobo mellobomel@gmail.com
 */
function somar() {
	var n1 = document.getElementById("txtN1").value;
	var n2 = document.getElementById("txtN2").value;
	var resultado = parseInt(n1) + parseInt(n2);
	document.getElementById("txtResultado").value = resultado;
	document.getElementById("txtResultado2").innerHTML = resultado;
}

function subtrair() {
	var n1 = document.getElementById("txtN1").value;
	var n2 = document.getElementById("txtN2").value;
	var resultado = parseInt(n1) - parseInt(n2);
	document.getElementById("txtResultado").value = resultado;
	document.getElementById("txtResultado2").innerHTML = resultado;
}

function multiplicar() {
	var n1 = document.getElementById("txtN1").value;
	var n2 = document.getElementById("txtN2").value;
	var resultado = parseInt(n1) * parseInt(n2);
	document.getElementById("txtResultado").value = resultado;
	document.getElementById("txtResultado2").innerHTML = resultado;
}

function dividir() {
	var n1 = document.getElementById("txtN1").value;
	var n2 = document.getElementById("txtN2").value;
	var resultado = parseFloat(n1) / parseFloat(n2);
	document.getElementById("txtResultado").value = resultado;
	document.getElementById("txtResultado2").innerHTML = resultado;
}