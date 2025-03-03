// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array. 
let arrayListaAmigos=[];

//comienzo para agregar amigo.

    function agregarAmigo() {
        console.log("");
        console.log("Ingreso a la funcion agregarAmigo");
        let returnValidadorCampo=false;
        let valorIngresadoUsuario="";

        valorIngresadoUsuario=(document.getElementById('amigo').value);
        console.log("   Dato ingresado por el usuario: "+valorIngresadoUsuario);
        returnValidadorCampo=validadorInputNoVacio(valorIngresadoUsuario);
        
        if(returnValidadorCampo){
            arrayListaAmigos.push(valorIngresadoUsuario)
            valorIngresadoUsuario=""
        }
        else {
            console.log("   No se cumplieron politicas establecidas por lo tanto no se actualiza arrayListaAmigos ");
            
            alert("Por favor, inserte un nombre.");
            console.log("!!!Se quiebra intencionalmente la funcion!!!");
            return
        }
        limpiarCampo=(document.getElementById("amigo"));
        limpiarCampo.value="";
        // la linea . focus te permite hacer que el cursor de texto aparezca de nuevo en el recuadro del input
        // evita volver a dar clic.
        limpiarCampo.focus();
        console.log(arrayListaAmigos);
        recorrerArrayAmigos();
        console.log("***Se Agrego correctamente el amigo***");

    }

    //esta funcion valida si esta vacio y devuelve un buleano. 
    function validadorInputNoVacio(datoIngresado) {
        console.log("");
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
        console.log("");
        console.log("Ingreso a la funcion recorrerArrayAmigos");
        
        let listaAmigosJS=document.getElementById("listaAmigos");
        //variable listaAmigosJS ahora tiene la referencia al <ul> del id empleado en el index
        listaAmigosJS.innerHTML=""


        for (let index = 0; index < arrayListaAmigos.length; index++) {
            let li = document.createElement("li"); // Creamos un elemento <li>
            li.textContent = arrayListaAmigos[index]; // Asignamos el texto del amigo al <li>
            listaAmigosJS.appendChild(li); // Agregamos el <li> dentro del <ul> usamos la variable JS para ello (Asi nos evitamos invocar nuevamente el getElem...)
        }
        console.log("   Finalizo el bucle donde ingresa cada amigo a ul");
    }
    
//Fin mostrar Amigos


// Inicio Apartado para funcionalidad Sortear Amigos
    function sortearAmigo(){
        console.log("");
        console.log("Ingreso a la funcion sortearAmigo");
        if (arrayListaAmigos.length===0) {
            alert("No hay amigos para sortear");
            console.log("!!!Se quiebra intencionalmente la funcion!!!");
            return
        }
        //declaracion array auxiliar
        let amigoSorteado=[];
        amigoSorteado=arrayListaAmigos[(Math.floor(Math.random()*arrayListaAmigos.length))];
        
        let resultadoJS=document.getElementById("resultado");
        resultadoJS.innerHTML=`El amigo Sorteado es ${amigoSorteado}`;
        
        let limpiarLista=document.getElementById("listaAmigos");
        limpiarLista.innerHTML="";
        restablecerValores()
    }
//Fin Apartado para funcionalidad Sortear Amigos

//Para evitar el F5
    function restablecerValores() {
        console.log("*** Funcionalidad Completa ***");
        arrayListaAmigos=[]
        setTimeout(() => {
            console.clear();
            alert("El sistema se ha reiniciado para estar listo, ¿intentamos nuevamente?");
            setTimeout(() => {
                console.clear();
                console.log("*** Funcionalidad Completa ***");
                console.log(" Se restablecen valores ");
                setTimeout(() => {
                    console.clear();
                }, 3000); 
            }, 3000); 
            let resultadoJS=document.getElementById("resultado");
            resultadoJS.innerHTML="";
        }, 5000); 
    }
// Fin F5