class Producto{
    constructor(id, nombre, valor){
        this.id = id
        this.nombre = nombre
        this.importe = valor
    }
}

const productos = []

function creoID() {return parseInt(Math.random() * 10000)}

function agregarProductos() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let importe = parseInt(prompt("Ingresa el valor:"))

    productos.push(new Producto(id, descripcion, importe))
    console.table(productos)
}
function generadorAutomatico() {
    productos.push(new Producto(creoID(), "Dados de Rol Rojos", 700))
    productos.push(new Producto(creoID(), "Taza de Star Wars", 500))
    productos.push(new Producto(creoID(), "Manga de Dragon Ball", 700))
    productos.push(new Producto(creoID(), "Cartas de Yugioh", 350))
}

