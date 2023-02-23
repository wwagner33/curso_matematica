'use strict;'


const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');

const txtName = document.getElementById('txtName');
const confirmBtn = favDialog.querySelector('#confirmBtn');

let pointCounter = sessionStorage.getItem("pointCounter");
let taskCounter = sessionStorage.getItem("taskCounter");
let userName = sessionStorage.getItem("userName");

const totalTasks = 20;




//inicializa componentes do MaterializeCSS

M.AutoInit();

//biblioteca de funcoes

function modalDialog(txt,obj){

  document.getElementById('dlgTitle').innerHTML = `<h6>${txt}</h6>`;
  favDialog.showModal();

  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]

  favDialog.addEventListener('close',() => {
    sessionStorage.setItem("userName",txtName.value); //favDialog.returnValue
    obj.innerHTML = txtName.value;
  });
}

function showCounters() {
  document.getElementById(
    "pointCounterShower"
  ).innerHTML = `${pointCounter} pontos`;
  document.getElementById(
    "taskCounterShower"
  ).innerHTML = `${taskCounter}/${totalTasks}`;
}

function showUserName() {
  if (userName == null) {
    modalDialog("Como devo chamar você (com no máximo 10 letras)?",document.getElementById("userNameShower"));
  } else {
    document.getElementById("userNameShower").innerHTML = sessionStorage.getItem("userName");
  }
}

function initApp() {
  showUserName();
  showCounters();
}




document.body.onload = initApp;


//teste de funcoes
sessionStorage.setItem("pointCounter", ++pointCounter);
sessionStorage.setItem("taskCounter", ++taskCounter);
showCounters();


//componentes web utilizados no projeto

//modal dialog

