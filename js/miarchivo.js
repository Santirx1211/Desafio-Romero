debugger


function verProducto(){
    let ver = alert("Bienvenido a Dungeon store");
    let nombreProducto = prompt("Seleccione los productos de la pagina");
    console.log(producto(nombreProducto));
}


function producto(item){
    switch(item) {
        case "Dados de Rol":
            return "Los dados de rol vienen en rojo, verde y amarillos y valen $700";
        case "Tazas":
            return "Tenemos las tazas de Star Wars, Dragon Ball, etc y valen $1500";
        case "Mangas":
            return "Tenemos todos los mangas y su valor es de $700";
        case "Cartas":
                return "Tenemos sobres de yugioh, magic, pokemon y su valor es de $360";
        default:
            return "No eligió producto"
    }
}

