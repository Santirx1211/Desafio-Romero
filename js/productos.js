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

