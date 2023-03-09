'use strict;'


const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');

const txtName = document.getElementById('txtName');
const confirmBtn = favDialog.querySelector('#confirmBtn');

let pointCounter = localStorage.getItem("pointCounter");
let taskCounter = localStorage.getItem("taskCounter");
let userName = localStorage.getItem("userName");

const totalTasks = 20;




//inicializa componentes do MaterializeCSS

M.AutoInit();

//biblioteca de funcoes

function modalDialog(txt,obj){

  document.getElementById('dlgTitle').innerHTML = `<h6>${txt}</h6>`;
  favDialog.showModal();

  // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]

  favDialog.addEventListener('close',() => {
    localStorage.setItem("userName",txtName.value); //favDialog.returnValue
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
    document.getElementById("userNameShower").innerHTML = localStorage.getItem("userName");
  }
}

function initApp() {
  showUserName();
  showCounters();
}




document.body.onload = initApp;


//teste de funcoes
localStorage.setItem("pointCounter", ++pointCounter);
localStorage.setItem("taskCounter", ++taskCounter);
showCounters();


//componentes web utilizados no projeto

//modal dialog

