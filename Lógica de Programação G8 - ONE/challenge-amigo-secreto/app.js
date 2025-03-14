// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  // Pega o valor do input
  let inputAmigo = document.getElementById('amigo');
  let nome = inputAmigo.value.trim();

  // Verifica se o campo está vazio
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo de entrada
  inputAmigo.value = '';

  // Atualiza a lista
  atualizarLista();
}

// Função para remover amigo
function removerAmigo(indice) {
  amigos.splice(indice, 1);
  atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista

  // Percorre o array e cria os itens da lista
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement('li');
    item.textContent = amigos[i];

    // Botão de remover
    // Com a ajuda das aulas e documento do JS, tomei a iniciativa de adicionar um botão de remover nomes
    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function () {
      removerAmigo(i);
    };

    item.appendChild(botaoRemover);
    listaAmigos.appendChild(item);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  // Verifica se há amigos suficientes
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear.');
    return;
  }

  // Sorteia um índice aleatório
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  // Mostra o resultado
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo Sorteado: ${amigoSorteado}</li>`;
}
