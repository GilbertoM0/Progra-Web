const nombre = document.getElementById("User");
const pass = document.getElementById("Psw");
const error = document.getElementById("error");

function enviarForm()
{
    var mensajesError = [];
    if(nombre.value.length < 6 || nombre.value === '')
        mensajesError.push('Ingresa nombre mayor a 6 caracteres');
    if(pass.value.length <8 || pass.value === '')
        mensajesError.push("Ingresa password mayor a 8 caracteres");
    error.innerHTML = mensajesError.join('<br>');
    return false;
}