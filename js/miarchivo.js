debugger

//Primer algoritmo con for
var numero1 = parseInt(prompt("ingrese el numero que sera multiplicado"));

for(var i = 1; i< 10; i++ ){
    var multi = numero1 * i;
    alert("su valor es:" +multi);
}


//while

let texto = prompt("ingrese un nombre");

while(texto != "coderhouse"){
    if(texto != false){
        alert("intenta con coderhouse")
    }
    texto = prompt("intenta de nuevo");

}alert("has ingresado la palabra correcta");