function validar_nombre(String) {
    var nombre, expresion;
    nombre = document.getElementById("campoNombre").value;
    expresion = /^[A-Z]+$/i;
    if(nombre === ""){
        alert("El campo nombre no debe estar vacio");
        return false;
    }
    else if (!expresion.test(nombre)){
        alert("Digite su nombre sin numeros ni caracteres especiales");
        return false;
    }
    else if (nombre.length>30 || nombre.length<4){
        alert("El nombre debe tener una longitud de 4 a 30 caracteres");
        return false;
    }
    
}

function validar_contrasenas(String) {
    var contrasena, confcontrasena;
    contrasena = document.getElementById("campoContrasena");
    confcontrasena = document.getElementById("campoConfirmarContrasena");
    if(contrasena.value === ""){
        alert("Digite la contraseña");
        return false;
    }
    else if (confcontrasena.value === ""){
        alert("Confirme la contraseña");
        return false;
    }
    else if (contrasena.value.length != confcontrasena.value.length){
        alert("Las contraseñas deben de tener la misma longitud");
        return false;
    }
    else if (contrasena.value != confcontrasena.value){
        alert("No coinciden las contraseñas");
        return false;
    }
}

module.exports.validar_nombre = validar_nombre
module.exports.validar_contrasenas = validar_contrasenas;