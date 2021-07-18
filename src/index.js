function addItem() {

  // Pegando o valor do campo email
  var email = document.getElementById("email").value;

  // Criando uma string com o objeto a ser adicionado no localstorage
  const dataObj = JSON.stringify({ email });

  //Testando se é o primeiro item a ser adicionado.
  if (localStorage.getItem('items') === null) {
    // Adicionando um array com um objeto no localstorage
    localStorage.setItem('items', JSON.stringify([dataObj]));
  } else {
    // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
    localStorage.setItem(
      'items',
      // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('items')),
        dataObj
      ])
    );
  }
}