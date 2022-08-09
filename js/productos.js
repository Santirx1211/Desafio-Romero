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
    productos.push(new Producto(1,"DADOS DE ROL ROJOS",700,5));
    productos.push(new Producto(2,"DADOS DE ROL AMARILLOS",700,2));
    productos.push(new Producto(3,"TAZA DE STAR WARS",530,4));
    productos.push(new Producto(4,"MANGA DE DRAGON BALL",750,10));
    productos.push(new Producto(5,"CARTAS DE YUGIOH",350,150));
    productos.push(new Producto(6,"CARTAS MAGIC",350,50));
    productos.push(new Producto(7,"TAZA DE DEATH NOTE",530,2));
}

listadoProductos()
console.table(productos)
const carrito = []

function buscarProducto(){
    let busqueda = prompt("Que producto quiere agregar").toUpperCase()
    let buscar = productos.find(el => el.nombre.includes(busqueda))
    carrito.push(buscar)
    let seguir = confirm("Si quiere agregar mas productos seleccione aceptar/si quieres saber el total dale a cancelar");
if (seguir){
    buscarProducto()
    let total = carrito.reduce((acc, el) => acc + el.importe, 0 )
console.log("El total de los productos a pagar es: $", total)
}else{
    let total = carrito.reduce((acc, el) => acc + el.importe, 0 )
console.log("El total del producto a pagar es: $", total)
}
}