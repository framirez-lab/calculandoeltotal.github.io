precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");

cantidad = Number(cantidadSpan.innerHTML);
total = precio * cantidad;
totalSpan.innerHTML = total;

// Definimos las variables necesarias
var colorRojo = document.getElementById("colorRojo");
var colorVerde = document.getElementById("colorVerde");
var colorAzul = document.getElementById("colorAzul");
var card = document.querySelector(".card");

// Definimos el color predeterminado
var colorPredeterminado = "#7ba238";

// Establecemos el color inicial de la tarjeta
card.style.backgroundColor = colorPredeterminado;

// Asignamos eventos directamente a los elementos del DOM para cambiar el color de la tarjeta
colorRojo.onchange = function() { card.style.backgroundColor = colorRojo.value; };
colorVerde.onchange = function() { card.style.backgroundColor = colorVerde.value; };
colorAzul.onchange = function() { card.style.backgroundColor = colorAzul.value; };

