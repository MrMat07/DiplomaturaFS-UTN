// function cuentaCaracteres(obj){
//     document.getElementById("cantidad").innerHTML = `Mensaje de ${obj.value.length} caracteres`;
// }

function cuentaCaracteres(obj){
    let cantMaxima = 250;
    let cantCaracteres = obj.value.length;
    
    if(cantMaxima < cantCaracteres){
        document.getElementById("cantidad").innerHTML = `<span style="color: red;">${cantCaracteres} / ${cantMaxima} </span>`;
        alert(`El mensaje supera la cantidad maxima permitida: ${cantMaxima}`);
    }else{
        document.getElementById("cantidad").innerHTML = `${cantCaracteres} / ${cantMaxima}`;
    }
}