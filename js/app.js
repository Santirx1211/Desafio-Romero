// Constructor de Producto
class Producto{
    constructor(id, nombre, valor, stock, img){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.valor = valor;
        this.stock = stock;
        this.img = img;
    }
}

const productos= []
let carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];
let numeroCarrito = document.querySelector(".numero")
let totalCarrito = document.querySelector(".total")


//funcion de listado de productos
function listadoProductos() {
    productos.push(new Producto(1,"DADOS DE ROL ROJOS",700,5,'img/Dados-rojos.png' ));
    productos.push(new Producto(2,"DADOS DE ROL AMARILLOS",700,2,'img/Dados-amarillos.png'));
    productos.push(new Producto(3,"TAZA DE STAR WARS",530,4,'img/Taza-Star-Wars.png'));
    productos.push(new Producto(4,"MANGA DE DRAGON BALL",750,10,'img/Manga-Dbs.png'));
    productos.push(new Producto(5,"CARTAS DE YUGIOH",350,150,'img/Sobre-Yugioh.png'));
    productos.push(new Producto(6,"CARTAS MAGIC",350,50,'img/Sobre-Magic.png'));
    productos.push(new Producto(7,"TAZA DE DEATH NOTE",530,2,'img/Taza-Death-Note.png'));
}



// agregar cards al Dom

function renderizarProductosAlDom() {
    let container = document.querySelector(".products");
    productos.forEach(el =>{
        let div = document.createElement("div");
        div.className = "card"
        div.innerHTML = `<img class="card-img" src="${el.img}" />
        <h4 class="info-card">${el.nombre}</h4>
        <p class="valor">$${el.valor}</p>
        <button id="btn-agregar${el.id}" class="card-btn">Comprar</button>
        `
        container.append(div)
    })
    comprar()
}

//funcion boton comprar
function comprar(){
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", () =>{
            agregarAlCarrito(prod.id);
        });
    });
}

comprar()



//agregar productos al array carrito
function agregarAlCarrito(IdParametro){
    const buscar = productos.find(el => el.id == IdParametro)
    carrito.push(buscar)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
    calcularTotal()
    renderizarCarrito()
}


//function renderizar carrito
function renderizarCarrito() {
    let tabla = document.querySelector(".tabla")
    tabla.innerHTML = ""
    carrito.forEach(prod => {
        let tr = document.createElement("tr");
        tr.className = "cart"
        tr.innerHTML = `<td class="table-id">${prod.id}</td>
        <td><img class="table-img" src="${prod.img}" /></td>
        <td>${prod.nombre}</td>
        <td>$${prod.valor}</td>
        <td><button id="btn-eliminar-${prod.id}" class="eliminar-btn">X</button></td>
        `
        tabla.append(tr)
    })
    borrarProducto()
    calcularTotal()
}
//funcion boton eliminar producto del array carrito
function borrarProducto() {
    let eliminarBtn = document.querySelectorAll(".eliminar-btn");
    eliminarBtn.forEach(el => {
        el.addEventListener("click", (ev) => {
            let button = ev.target.parentElement.parentElement;
            let eliminarDom = button.querySelector(".table-id");
            eliminar(eliminarDom.innerText)
            calcularTotal()
            renderizarCarrito()
        })
    })
}

function eliminar(param) {
    let item = carrito.find(el => el.id == param)
    let index = carrito.indexOf(item)
    carrito.splice(index, 1)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
}


//funcion sacar total
function calcularTotal() {
    let total = carrito.reduce((acc, prod) => acc + prod.valor, 0)
    totalCarrito.innerHTML = total
}

listadoProductos()
renderizarProductosAlDom()
renderizarCarrito()