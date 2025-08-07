// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres
let listaAmigos = [];

// capturar el valor de entrada
function agregarAmigo() {
    let nomDeAmigo = document.getElementById('amigo').value.trim();

    // validar entrada
    if(nomDeAmigo === ''){
        alert("Por favor, inserte un nombre.");
    } else{
        // actualizar el array de amigos
        listaAmigos.push(nomDeAmigo);
        limpiarCampo();
        mostrarListaAmigos();
    }
}

// funcion de limpiar el campo de entrada
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

// funcion para mostrar la lista y actualizar amigos
function mostrarListaAmigos() { 
    // obtener elementos de la lista
    let lista = document.getElementById('listaAmigos');

    // limpiar la lista
    lista.innerHTML = '';

    // iterar sobre el arreglo
    for (let i=0; i< listaAmigos.length; i++) {
        let elemento =  document.createElement('li');
        // asignar el nombre
        elemento.textContent = listaAmigos[i];
        lista.appendChild(elemento);  
    }
}

// funcion para sortear los amigos
function sortearAmigo() {
    // validar amigos disponibles
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear, agrega al menos un nombre.");
    } else{
        // indice aleatorio
        let indice = Math.floor(Math.random()*listaAmigos.length);
        // nombre sorteado
        let amigoSorteado = listaAmigos[indice];
        // mostrar resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li> ¡El amigo sorteado es: ${amigoSorteado}! </li>`
    }
}

