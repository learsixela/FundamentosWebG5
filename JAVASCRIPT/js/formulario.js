var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function() {
    validarFormulario();
});

//formulario.addEventListener('submit', validarFormulario());

function validarFormulario() {
    //alert("Funciona el llamado desde html");
    //var nombre = document.getElementById("nombre").value;
    var nombre = document.getElementsByName("nombre").values;
    var apellido = document.getElementById("apellido").value;
    var usuario = document.getElementById("usuario").value;
    var server = document.getElementById("server").value;
    var pass = document.getElementById("inputPassword").value;
    var pass2 = document.getElementById("inputPassword2").value;
    var fnacimiento = document.getElementById("fnacimiento").value;
    //alert(`su nombre es: ${nombre}`);

    validaFecha(fnacimiento);

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
        document.getElementById("nombre").select();
    }
    if (pass == "") {
        alert("El Password no puede estar vacio");
        document.getElementById("inputPassword").select();
    } else {
        validarPassword(pass, pass2);
    }
}

function validaFecha(fnacimiento) {
    var hoy = new Date();
    hoy.get
    console.log(hoy.getFullYear() + " - " + hoy.getMonth() + " - " + hoy.getDay());
    var fecha = fnacimiento.split("-");
    var anio = fecha[0];
    var mes = fecha[1];
    var dia = fecha[2];
    console.log(anio + " - " + mes + " - " + dia);
    //comparar 
    var fnac = new Date(fnacimiento);
    if (fnac >= hoy) {
        console.log("Solo para personas nacidas hasta ayer");
    } else {
        console.log("Fecha valida");
    }

}

function validarPassword(pass, pass2) {
    if (pass !== pass2) {
        alert("Los password son distintos");
        //limpiar el input
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputPassword2").value = "";
        document.getElementById("inputPassword").select();

    }

}

var formularioLogin = document.getElementById("formularioLogin");

formularioLogin.addEventListener('submit', function() {
    validarLogin();
});

function validarLogin() {
    alert("pendiente validar el login");
}