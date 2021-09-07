function suma(suma1, suma2) {
    if (valoresValidos(suma1, suma2)) {
        return Number(suma1) + Number(suma2);
    }
}
function resta(resta1, resta2) {
    if (valoresValidos(resta1, resta2)) {
        return Number(resta1) - Number(resta2);
    }
}
function multiplicacion(multiplicacion1, multiplicacion2) {
    if (valoresValidos(multiplicacion1, multiplicacion2)) {
        return Number(multiplicacion1) * Number(multiplicacion2);
    }
}
function division(division1, division2) {
    if (valoresValidos(division1, division2)) {
        return Number(division1) / Number(division2);
    }
}
function valoresValidos(operador1, operador2) {
    if (operador1 == "") {
        alert("First operator is not set");
        return false;
    }
    if (operador2 == "") {
        alert("Second operator is not set");
        return false;
    }
    return true;
}