//INICIALIZAÇÃO DAS VARIÁVEIS 
const amountResult = document.getElementById('amountResult');
const btnCalculateSimpleAmount = document.getElementById('btnCalculateSimpleAmount');
const btnCloseApp = document.getElementById('btnCloseApp');
const btnCloseMenuSimple = document.getElementById('btnCloseMenuSimple');
const btnCloseSimpleAmount = document.getElementById('btnCloseSimpleAmount');
const btnJComp = document.getElementById('btnJComp');
const btnJSimp = document.getElementById('btnJSimp');
const btnSimpleAmount = document.getElementById('btnSimpleAmount');
const feesResult = document.getElementById('feesResult');
const menu = document.getElementById('menu');
const menuButtons = document.getElementById('menuButtons');
const simpleAmountModal = document.getElementById('simpleAmountModal');
const simpleAmountResult = document.getElementById('simpleAmountResult');
const simpleCalculateAmount = document.getElementById('simpleCalculateAmount');

//Fecha o aplicativo
btnCloseApp.onclick = ()=>{
     window.close();
}

//Abre menu geral
btnJSimp.onclick = ()=>{
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
}

//Fecha menu geral e abre menu de juros simples
btnSimpleAmount.onclick = ()=>{
     menuButtons.classList.add('d-none');
     simpleAmountModal.classList.remove('d-none');
}

//Calcula montante simples
simpleCalculateAmount.onclick = ()=>{

          if((simpleCapital.value != '') && (simpleTime.value != '') && (simpleRate.value != '')){
               let simpleCapital = document.getElementById('simpleCapital').value;
               let simpleTime = document.getElementById('simpleTime').value;
               let simpleRate = document.getElementById('simpleRate').value;
               simpleAmountResult.value = "R$ " + (parseFloat(simpleCapital) * parseFloat((1 + (simpleTime * simpleRate)/100))).toFixed(2); 
               simpleAmountResult.classList.remove('d-none');
               amountResult.classList.remove('d-none');
               btnCloseSimpleAmount.classList.remove('d-none');
          }
          else{
               alert('Todos os campos devem estar preenchidos!');
          }
}

//Fecha o menu de juros simples
btnCloseSimpleAmount.onclick = ()=>{
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     simpleAmountModal.classList.add('d-none');
}

//Volta para o menu geral
btnCloseMenuSimple.onclick = ()=>{
     menuButtons.classList.add('d-none');
     menu.classList.remove('d-none');
}








