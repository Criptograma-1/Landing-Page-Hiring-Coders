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
var target_date = new Date("august 1, 2021").getTime();
var dias, horas, minutos, segundos;
//var regressiva = document.getElementById("regressiva");

setInterval(function () {
  var current_date = new Date().getTime();
  var segundos_f = (target_date - current_date) / 1000;
  
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').value = dias;
document.getElementById('hora').value = horas;
document.getElementById('minuto').value = minutos;
document.getElementById('segundo').value = segundos;
  

}, 1000);


function subir() {
    window.scrollTo(0, 0);
}