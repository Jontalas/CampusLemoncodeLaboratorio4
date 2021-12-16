function suma(suma1, suma2) {
    resultSuma = valoresValidos(suma1, suma2);
    if (resultSuma == "") {
        resultSuma = Number(suma1) + Number(suma2);
    }
    return resultSuma;
}
function resta(resta1, resta2) {
    resultResta = valoresValidos(resta1, resta2);
    if (resultResta == "") {
        resultResta = Number(resta1) - Number(resta2);
    }
    return resultResta;
}
function multiplicacion(multiplicacion1, multiplicacion2) {
    resultMultiplicacion = valoresValidos(multiplicacion1, multiplicacion2);
    if (resultMultiplicacion == "") {
        resultMultiplicacion = Number(multiplicacion1) * Number(multiplicacion2);
    }
    return resultMultiplicacion;
}
function division(division1, division2) {
    resultDivision = valoresValidos(division1, division2);
    if (resultDivision == "") {
        resultDivision = Number(division1) / Number(division2);
    }
    return resultDivision;
}
function valoresValidos(operador1, operador2) {
    result = "";
    if (operador1 == "") {
        result += "First operator is not set. ";
    }
    if (operador2 == "") {
        result += "Second operator is not set. ";
    }
    return result;
}