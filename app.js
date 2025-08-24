// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');
    const resultadoLista = document.getElementById('resultado');

    // alert en caso de no colocar un nombre
    if (amigoNombre === '') {
        alert('¡Debes colocar un nombre para añadir a la lista!');
        return;
    }

    if (amigos.includes(amigoNombre)) {
        alert('Este nombre ya ha sido agregado.');
        amigoInput.value = '';
        return;
    }

    amigos.push(amigoNombre);
    amigoInput.value = '';
    
    // Muestra la lista de nombres agregados
    let itemLista = document.createElement('li');
    itemLista.textContent = amigoNombre;
    listaAmigos.appendChild(itemLista);

    // Limpia el resultado anterior al agregar un nuevo nombre
    resultadoLista.innerHTML = '';
}

function sortearAmigo() {
    const resultadoLista = document.getElementById('resultado');
    
    // alert si no hay mínimo 2 nombres para sortear
    if (amigos.length < 2) {
        alert('¡Debes ingresar al menos 2 nombres para realizar el sorteo!');
        return;
    }

    // Limpia el resultado anterior
    resultadoLista.innerHTML = '';
    
    // Selecciona un nombre aleatorio de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecretoElegido = amigos[indiceAleatorio];

    // Muestra el nombre seleccionado
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `¡El amigo secreto elegido es: ${amigoSecretoElegido}! 🎉`;
    resultadoLista.appendChild(itemResultado);
}
