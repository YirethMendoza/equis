let boolContinuar = true
let strOpcion
let intValor1
let intValor2
do {
    strOpcion = prompt("Seleccione una operacion: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicacion \n 4 - Divicion \n 5 - Salir")

    switch (strOpcion) {
        case "1":
            pedirNumero("suma")
            alert("El resultado de la suma " + intValor1 + " + " + intValor2 + " = " + (intValor1 + intValor2))
            break;
        case "2":
            pedirNumero("resta")
            alert("El resultado de la resta " + intValor1 + " - " + intValor2 + " = " + (intValor1 - intValor2))
            break
        case "3":
            pedirNumero("multiplicacion")
            alert("El resultado de la multiplicació87n " + intValor1 + " x " + intValor2 + " = " + (intValor1 * intValor2))
            break
        case "4":
            pedirNumero("divicion")
            alert("El resultado de la división " + intValor1 + " / " + intValor2 + " = " + (intValor1 / intValor2))
            break
        case "5":
            alert("Esperamos la calculadora te haya sido útil")
            boolContinuar = false
            break;
        default:
            alert("La opcion ingresada no es correcta, seleccione una opcion valida.")

    }
}
while (boolContinuar)

function pedirNumero(strMensaje) {
    intValor1 = parseInt(prompt("Ingrese el primer numero de la " + strMensaje))
    intValor2 = parseInt(prompt("Ingrese el segundo numero de la " + strMensaje))
}