// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array. 
let variableListaAmigos=[];

//comienzo para agregar amigo.

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
        // la linea . focus te permite hacer que el cursor de texto aparezca de nuevo en el recuadro del input
        // evita volver a dar clic.
        limpiarCampo.focus();
        console.log(variableListaAmigos);
        recorrerArrayAmigos();
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

//Fin Agregar Amigo.


//Comienzo mostrar Amigos

    function recorrerArrayAmigos() {
        console.log("Ingreso a la funcion recorrerArrayAmigos");
        
        let listaAmigosJS=document.getElementById("listaAmigos");
        //variable listaAmigosJS ahora tiene la referencia al <ul> del id empleado en el index
        listaAmigosJS.innerHTML=""


        for (let index = 0; index < variableListaAmigos.length; index++) {
            let li = document.createElement("li"); // Creamos un elemento <li>
            li.textContent = variableListaAmigos[index]; // Asignamos el texto del amigo al <li>
            console.log("En este apartado ingresa cada amigo a ul valor Agregado"+ variableListaAmigos[index]);
            listaAmigosJS.appendChild(li); // Agregamos el <li> dentro del <ul> usamos la variable JS para ello (Asi nos evitamos invocar nuevamente el getElem...)
            console.log(variableListaAmigos);
        }
        
        console.log("Estado actual del resultado: Exitoso");
    }
    
//Fin mostrar Amigos





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