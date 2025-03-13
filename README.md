# Meu Projeto Amigo Secreto

Bem-vindo ao meu projeto de **Amigo Secreto**. 
Aqui, você pode inserir nomes de amigos e realizar sorteios aleatórios.

## Como usar:
1. Adicione os nomes no campo de entrada.
2. Clique no botão "Sortear Amigo".
3. Veja o resultado na tela.


📌 Descrição

Este projeto permite criar uma lista de amigos para um sorteio de Amigo Secreto. O usuário pode adicionar nomes, visualizar a lista e sortear aleatoriamente um amigo.

🎯 Funcionalidades

Adicionar nomes: O usuário pode inserir nomes na lista.

Validar entrada: Impede que nomes vazios sejam adicionados.

Visualizar a lista: Exibe os nomes inseridos.

Sorteio aleatório: Sorteia e exibe um nome aleatoriamente da lista.

🛠️ Tecnologias Utilizadas

HTML

CSS

JavaScript

🚀 Como executar o projeto

Requisitos

Instalar o Visual Studio Code

Instalar a extensão Live Server

Passos

Baixe o repositório ou clone:
https://vercel.com/thifani-pereiras-projects/challenge-amigo-secreto

https://github.com/Thifani-Pereira/Amigo-secreto

Tambem disponivel no Vercel:
https://vercel.com/thifani-pereiras-projects/challenge-amigo-secreto

Abra a pasta no VS Code:

cd challenge-amigo-secreto_pt
code .

Execute com o Live Server:

Clique com o botão direito no arquivo index.html

Escolha "Open with Live Server"

Testar:

Digite nomes no campo de entrada

Clique no botão "Adicionar"

Clique em "Sortear amigo" para ver o resultado

📁 Estrutura do Projeto

/amigo-secreto
│── index.html       # Estrutura da página
│── style.css        # Estilos visuais
│── app.js          # Lógica do sorteio
└── assets/         # Imagens e ícones

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes

let amigos = [];

// Função para adicionar um amigo à lista
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
// Função para atualizar a lista de amigos na interface

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}

// Resetar a lista após o sorteio
    listaAmigos = [];
    atualizarLista(); // Atualiza a interface para limpar a lista
