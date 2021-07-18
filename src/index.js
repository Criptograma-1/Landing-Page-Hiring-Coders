
function addItem() {
  //Pegando o valor do campo email
  let email = document.getElementById("email").value;
  //verifica se o campo email está vazio
  if(email === ""){
    //caso email esteja vazio pega os dados do modal
    email = document.getElementById("modal-email").value;
  }
  //Criando uma string com o objeto a ser adicionado no localstorage
  const dataObj = JSON.stringify({ email });
  //Testando se é o primeiro item a ser adicionado.
  if (localStorage.getItem('items') === null) {
    //Adicionando um array com um objeto no localstorage
    localStorage.setItem('items', JSON.stringify([dataObj]));
  } else {
    //Copiando o array existente no localstorage e adicionando o novo objeto ao final.
    localStorage.setItem(
      'items',
      // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('items')),
        dataObj
      ])
    );
  }
};

//Data final
let target_date = new Date("august 1, 2021").getTime();
let dias, horas, minutos, segundos;

setInterval(function () {
  //Data atual
  let current_date = new Date().getTime();
  //Quantos segundos faltam para a data final
  let segundos_f = (target_date - current_date) / 1000;
  //Conversão de segundos para dias
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;
  //Conversão de segundos para horas
  horas = parseInt(segundos_f / 3600);
  segundos_f = segundos_f % 3600;
  //Conversão de segundos para minutos
  minutos = parseInt(segundos_f / 60);
  segundos = parseInt(segundos_f % 60);
  //Atribuindo resultados ao form
  document.getElementById('dia').value = dias;
  document.getElementById('hora').value = horas;
  document.getElementById('minuto').value = minutos;
  document.getElementById('segundo').value = segundos;


}, 1000);


function upToTop() {
  //Sobe para a o topo da tela
  window.scrollTo(0, 0);
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
