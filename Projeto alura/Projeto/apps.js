function pesquisar() {
  const section = document.getElementById('resultados-pesquisa');
  const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

  // Verifica se o usuário inseriu algum termo de pesquisa
  if (!termoPesquisa) {
    // Se não houver termo de pesquisa, exibe uma mensagem de erro e encerra a função
    section.innerHTML = 'Busca não encontrada!';
    return;
  }

  // Inicializa uma string vazia
  let res = "";

  // Itera sobre cada item (atleta) no conjunto de dados
  for (const dado of dados) {
    // Converte o título e a descrição do item para minúsculas para facilitar a comparação
    const tituloMinusculo = dado.titulo.toLowerCase();
    const descricaoMinusculo = dado.descrição.toLowerCase();

    // Converte as tags do item para minúsculas e separa em um array de palavras
    const tagsMinusculas = dado.tag.toLowerCase().split(' ');

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (tituloMinusculo.includes(termoPesquisa) ||
        descricaoMinusculo.includes(termoPesquisa) ||
        tagsMinusculas.some(tag => tag === termoPesquisa)) {
      // Se o termo foi encontrado, cria um elemento HTML para exibir o resultado da pesquisa
      res += `
        <div class="item-resultado">
          <h3>${dado.titulo}</h3>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Mais informações!</a>
        </div>
      `;
    }
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = res;
}
