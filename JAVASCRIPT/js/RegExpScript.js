//Validar el ingreso de datos en un buscador de animales, 
//por lo que solo debe aceptar las palabras “perro” y “gato”. 
//De lo contrario, no puede permitir la búsqueda, 
//generando un mensaje de error en un alert.

var buscar = document.getElementById("buscar");
buscar.addEventListener('click', function() {
    validarBusqueda();
});

function validarBusqueda() {
    var animal0 = document.getElementById('animal');
    var animal1 = document.getElementsByClassName('animal');
    var animal2 = document.querySelector(".animal");

    console.log(animal0.value, animal1[0].value, animal2.value);

    if (animal0.value.match(/gato/i)) {
        alert("Contiene la palabra gato 1");
    }
    if (animal1[0].value.match(/gato/i)) {
        alert("Contiene la palabra gato 2");
    }
    if (animal2.value.match(/gato/i)) {
        alert("Contiene la palabra gato 3");
    }

    var correo = document.getElementById("correo").value;
    if (correo.match(/[^0-9]/i)) {
        alert("Formato correcto");
    } else {
        alert("Falto agregar el @ o el .");
    }

}