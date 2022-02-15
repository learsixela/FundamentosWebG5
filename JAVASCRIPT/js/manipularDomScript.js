//Se requiere modificar el texto asociado al elemento <p> que posea un “id” con el nombre “textoSaludo” 
//a: “Hola, este párrafo fue modificado”. 

var parrafo = document.getElementById("textoSaludo");
console.log(parrafo.innerHTML); //Soy un párrafo en un documento HTML
parrafo.innerHTML = "Hola, este párrafo fue modificado";
console.log(parrafo.innerHTML); //Hola, este párrafo fue modificado

//Igualmente,
//modificar los valores del elemento <input> con “id” igual a “entradaUno”, 
var input1 = document.getElementById("entradaUno");

//por el “value” igual a “Clic Aqui”, 
input1.value = "Clic Aqui";
//el id por “clicUno” 
input1.id = "clicUno";
//y el tipo “type” por “button”.
input1.type = "button";

//Además, agregar el atributo “style” con la propiedad 
//“color: red;
input1.style.color = "red";
//background-color: green”.
input1.style.backgroundColor = "green";