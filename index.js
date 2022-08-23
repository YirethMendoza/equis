const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
  };
let nombre = "cristina"

let nombreUsuario = prompt ("Escribe tu nombre")
if (removeAccents(nombreUsuario.toLowerCase()) === nombre) {
    alert ("Animo abue! te quiero mucho:)");
} else {
    alert ("Regresa cuando seas Cristina")
}
