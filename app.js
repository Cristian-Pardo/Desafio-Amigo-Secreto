// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables. 
let listaAmigos=[];

function agregarAmigo() {
    
    console.log("Ingreso a la funcion agregarAmigo");
    let returnValidadorCampo=false;
    let valorIngresadoUsuario="";

    valorIngresadoUsuario=(document.getElementById('amigo').value);
    console.log("   Dato ingresado por el usuario: "+valorIngresadoUsuario);
    returnValidadorCampo=validadorInputNoVacio(valorIngresadoUsuario);
    
    if(returnValidadorCampo){
        listaAmigos.push(valorIngresadoUsuario)
        valorIngresadoUsuario=""
    }
    else {
        console.log("   No se cumplieron politicas establecidas por lo tanto no se actualiza listaAmigos ");
        
        alert("Por favor, inserte un nombre.");
    }

    console.log(listaAmigos);
}

//esta funcion valida si esta vacio y devuelve un buleano. 
function validadorInputNoVacio(datoIngresado) {
    console.log("Ingreso a la funcion validadorInputVacio");
    
    let datoConInfo=false
    console.log("   El tamaño de texto ingresado sin espacios es " + datoIngresado.trim().length);
    

    if (datoIngresado.trim()!=""){
        console.log("   ingreso al if porque el datoIngresado es diferente a vacio");
        datoConInfo=true;
        console.log("   lo que llego al if: " + datoIngresado);
    }
    return datoConInfo;
}