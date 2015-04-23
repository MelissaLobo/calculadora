/**
 * @author melissaLobo mellobomel@gmail.com
 */

function somar(numero1, numero2){
	if(isNumeric(numero1) && isNumeric(numero2)){
		return parseFloat(numero1) + parseFloat(numero2);
	}
	return 0;
}

function subtrair(numero1, numero2){
	if(isNumeric(numero1) && isNumeric(numero2)){
		return numero1 - numero2;
	}
	return 0;
}

function multiplicar(numero1, numero2){
	if(isNumeric(numero1) && isNumeric(numero2)){
		return numero1 * numero2;
	}
	return 0;
}

function dividir(numero1, numero2){
	if(isNumeric(numero1) && isNumeric(numero2)){
		return numero1 / numero2;
	}
	return 0;
}

//function isNumeric(str){
//  var er = /^[0-9]+$/;
//  return (er.test(str));
//}