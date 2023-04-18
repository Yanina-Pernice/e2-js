const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Ananá",
    precio: 450,
    ingredientes: ["Muzzarella", "Tomate", "Ananá"]
  },
];


// a)  Las pizzas que tengan un id impar.

const pizzasConIdImpar = pizzas.filter ((pizza) => {
  return pizza.id % 2 !== 0;
   
});

console.log("Las pizzas favoritas de nuestros clientes:");

pizzasConIdImpar.forEach (pizza => {
  console.log(` - ${pizza.nombre}`);
});


// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaPorMenosDe600 = pizzas.filter( (pizza) => {
  return pizza.precio < 600;

});

if (pizzaPorMenosDe600.length > 0){
  console.log("Promo-Pizzas por menos de 600 pesos: ");
  
  pizzaPorMenosDe600.forEach(pizza => {

    console.log(`- ${pizza.nombre} cuesta ${pizza.precio} pesos.`);

  }); } else{

    console.log("No tenemos pizzas por menos de 600 pesos.");

}

    
// c) El nombre de cada pizza con su respectivo precio.

console.log ("Nuestras pizzas son:")

pizzas.forEach(pizza => {

  console.log(` * ${pizza.nombre}. Precio: ${pizza.precio} pesos`)
})


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 

console.log("Nuestras pizzas están elaboradas con materias primas de primera calidad:") ;

pizzas.forEach(pizza => {

  console.log(`- ${pizza.nombre}. Ingredientes: ${pizza.ingredientes}`) ;

});




