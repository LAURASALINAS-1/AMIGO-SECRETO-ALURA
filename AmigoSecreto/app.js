let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    
    let amigosSorteo = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posibles = amigosSorteo.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo. Inténtalo de nuevo.");
            return;
        }
        
        let sorteado = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = sorteado;
        amigosSorteo = amigosSorteo.filter(a => a !== sorteado);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (let [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        listaResultado.appendChild(li);
    }
}

