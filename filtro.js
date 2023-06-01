// Tenemos un li de productos
/**
 * EL codigo no funciona por que los id no estaban bien referenciados
 * Se cambiaron los var por let
 * Se renombraron las varibles para una mayor legibilidad ej: 
 *      - $i se cambio a inputText.
 */
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
  //? Se cambio el selector de name a ID
const li = document.getElementById("lista-de-productos")
//? se cambio la refenceia por un id en lugar de clase
const inputText = document.querySelector('#input');

for (let i = 0; i < productos.length; i++) {
  let product = document.createElement("div")
  product.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  product.appendChild(ti)
  product.appendChild(imagen)

  li.appendChild(product)
}
//! se deshabilito la funcion displayProducts ya que no estaba refenciada.
//displayProductos(productos)
//? se cambio la referencia del boton por un id
const botonDeFiltro = document.getElementById("btn");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = inputText.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  