/* const toppings = document.getElementsByClassName('topping');
console.log(toppings[2]); */

/* const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);

const misToppings = document.getElementsByTagName('li');
console.log(misToppings); */

/* seleccionar elementos por un tipo de selector de CSS "querySelector" */
/* const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron); */

/* seleccionar elementos por un tipo de selector de CSS "querySelectorAll" */

/* const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja); */

/* PERSONALIZAR ESTILOS CON JAVASCRIPT */
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.style);
// console.log(primerTopping.style);
// primerTopping.style.color = '#6dff00';
// primerTopping.style.textTransform = 'uppercase';

/* onst listaDeToppings = document.getElementById('lista-toppings');
console.log('<innerText>');
console.log(listaDeToppings.innerText);

console.log('<textContent>');
console.log(listaDeToppings.textContent);

console.log('<innerHTML>');
console.log(listaDeToppings.innerHTML); */

/* MODIFICANDO TEXTO */
// const titulo = document.getElementById('titulo');
// titulo.innerText = 'Mis toppings favoritos';
// console.log(titulo.innerText);

/* ATRIBUTOS con estos métodos puedo obtener lo que tiene dentro un atributo, por ejemplo para el prim caso ".getAttribute('href')" este metodo me daría el enlace que tiene dentro, también puedo eliminar un atributo con */

const enlaces = document.getElementsByTagName('a');
// console.log(enlaces[0].getAttribute('href'));

console.log(enlaces[0].setAttribute('href', 'https://www.freecodecamp.org'));

