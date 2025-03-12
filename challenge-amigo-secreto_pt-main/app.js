//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();
    if (amigoNome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    amigos.push(amigoNome);
    amigoInput.value = '';
    atualizarLista();
}
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}