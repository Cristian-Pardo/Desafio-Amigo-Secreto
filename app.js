// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables. 
let variableListaAmigos=[];

function agregarAmigo() {
    
    console.log("Ingreso a la funcion agregarAmigo");
    let returnValidadorCampo=false;
    let valorIngresadoUsuario="";

    valorIngresadoUsuario=(document.getElementById('amigo').value);
    console.log("   Dato ingresado por el usuario: "+valorIngresadoUsuario);
    returnValidadorCampo=validadorInputNoVacio(valorIngresadoUsuario);
    
    if(returnValidadorCampo){
        variableListaAmigos.push(valorIngresadoUsuario)
        valorIngresadoUsuario=""
    }
    else {
        console.log("   No se cumplieron politicas establecidas por lo tanto no se actualiza variableListaAmigos ");
        
        alert("Por favor, inserte un nombre.");
    }
    limpiarCampo=(document.getElementById("amigo"));
    limpiarCampo.value="";
    console.log(variableListaAmigos);
}

//esta funcion valida si esta vacio y devuelve un buleano. 
function validadorInputNoVacio(datoIngresado) {
    console.log("Ingreso a la funcion validadorInputVacio");
    
    let datoConInfo=false
    console.log("   El tamaño de texto ingresado sin espacios es " + datoIngresado.trim().length);
    

    if (datoIngresado.trim()!=""){
        console.log("   ingreso al if porque el datoIngresado es diferente a vacio");
        datoConInfo=true;
        console.log("   valor evaluado en el if: " + datoIngresado);
    }
    return datoConInfo;
}



//////// hasta aqui bien 

function recorrerArrayAmigos(variableListaAmigos) {
    console.log("Ingreso a la funcion recorrerArrayAmigos");
    
    //variable listaAmigosJS ahora tiene la referencia al <ul> del id empleado en el index
    let listaAmigosJS=document.getElementById("listaAmigos");
    
    variableListaAmigos.forEach(nombreAmigo => {
        const li = document.createElement("li"); // Creamos un elemento <li>
        li.textContent = nombreAmigo; // Asignamos el texto del amigo al <li>
        listaAmigosJS.appendChild(li); // Agregamos el <li> dentro del <ul>
        console.log("En este apartado ingresa cada amigo a ul "+li);
    });



    console.log(variableListaAmigos);
    

console.log("Estado actual del resultado: "+resultado);

}







//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

//Tareas específicas:
//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.




function sortearAmigo(){
    console.log("Ingreso a la funcion sortearAmigo");
}