class Producto{
    constructor(id, nombre, valor, stock){
        this.id = id;
        this.nombre = nombre;
        this.importe = valor;
        this.stock = stock;
    }
}

const productos = []

function listadoProductos() {
    productos.push(new Producto(1,"Dados de Rol Rojos",700,5));
    productos.push(new Producto(2,"Dados de Rol amarillos",700,2));
    productos.push(new Producto(3,"Taza de Star Wars",530,4));
    productos.push(new Producto(4,"Manga Dragon Ball",750,10));
    productos.push(new Producto(5,"Cartas Yugioh",350,150));
    productos.push(new Producto(6,"Cartas Magic",350,50));
    productos.push(new Producto(6,"Taza Death Note",530,2));
}

listadoProductos()


const carrito = []