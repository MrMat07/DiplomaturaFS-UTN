const array = new Array(5); //[100 , 6, 2, 56, 32, 5, 99, 32];
var mayor = 0;

for(x=0;x < array.length; x++){
    array[x]=prompt('Ingrese un número:','');
}


for(i = 0; i < array.length; i++){
    if (array[i] > mayor)
    {
        mayor = array[i];
    };
}
 
document.write(`<h1> El mayor es: ${mayor}</h1>`);
document.write(`<h1> ${array}</h1>`);
console.log(`El mayor es: ${mayor}`);
console.log(`${array}`);