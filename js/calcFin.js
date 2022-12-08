//INICIALIZAÇÃO DAS VARIÁVEIS 
const amountResult = document.getElementById('amountResult');
const btnCalculateSimpleAmount = document.getElementById('btnCalculateSimpleAmount');
const btnCleanSimpleAmount = document.getElementById('btnCleanSimpleAmount');
const btnCleanSimpleCapital = document.getElementById('btnCleanSimpleCapital');
const btnCloseApp = document.getElementById('btnCloseApp');
const btnCloseMenuSimple = document.getElementById('btnCloseMenuSimple');
const btnCloseSimpleAmount = document.getElementById('btnCloseSimpleAmount');
const btnCloseSimpleCapital = document.getElementById('btnCloseSimpleCapital');
const btnJComp = document.getElementById('btnJComp');
const btnJSimp = document.getElementById('btnJSimp');
const btnSimpleAmount = document.getElementById('btnSimpleAmount');
const btnSimpleCapital = document.getElementById('btnSimpleCapital');
const btnSimpleTime = document.getElementById('btnSimpleTime');
const capitalResult = document.getElementById('capitalResult');
const feesResult = document.getElementById('feesResult');
const menu = document.getElementById('menu');
const menuButtons = document.getElementById('menuButtons');
const simpleAmountModal = document.getElementById('simpleAmountModal');
const simpleAmountResult = document.getElementById('simpleAmountResult');
const simpleCalculateAmount = document.getElementById('simpleCalculateAmount');
const simpleCalculateCapital = document.getElementById('simpleCalculateCapital');
const simpleCapitalModal = document.getElementById('simpleCapitalModal');
const simpleCapitalResult = document.getElementById('simpleCapitalResult');



//Fecha o aplicativo
btnCloseApp.onclick = () => {
     window.close();
}

//Abre menu geral
btnJSimp.onclick = () => {
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
}

//Fecha menu geral e abre menu de montante de juros simples
btnSimpleAmount.onclick = () => {
     menuButtons.classList.add('d-none');
     simpleAmountModal.classList.remove('d-none');
}

//Calcula montante simples
simpleCalculateAmount.onclick = () => {
     if ((simpleCapital.value != '' && simpleCapital.value > 0) && (simpleTime.value != '' && simpleTime.value > 0) && (simpleRate.value != '' && simpleRate.value > 0)) {
          let simpleCapital = parseFloat(document.getElementById('simpleCapital').value.replace(".",","));
          let simpleTime = parseFloat(document.getElementById('simpleTime').value.replace(".",","));
          let simpleRate = parseFloat(document.getElementById('simpleRate').value.replace(".",","));
          simpleAmountResult.value = (parseFloat(simpleCapital) * parseFloat((1 + (simpleTime * simpleRate) / 100))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          simpleAmountResult.classList.remove('d-none');
          amountResult.classList.remove('d-none');
          btnCleanSimpleAmount.classList.remove('d-none');
          btnCloseSimpleAmount.classList.remove('d-none');
     }
     else {
          alert('Todos os campos devem ser preenchidos com valores positivos! Preencha o(s) campo(s) para continuar.');
     }
}

//Fecha o menu de montante de juros simples
btnCloseSimpleAmount.onclick = () => {
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     simpleAmountModal.classList.add('d-none');
}

//Volta para o menu geral
btnCloseMenuSimple.onclick = () => {
     menuButtons.classList.add('d-none');
     menu.classList.remove('d-none');
}

//Abre modal de capital de juros simples
btnSimpleCapital.onclick = ()=>{
     simpleCapitalModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
     menu.classList.add('d-none');
}

//Calcula capital simples
simpleCalculateCapital.onclick = ()=>{
     let simpleAmountCapital = parseFloat(document.getElementById('simpleAmountCapital').value.replace(".",","));
     let simpleTimeCapital = parseFloat(document.getElementById('simpleTimeCapital').value.replace(".",","));
     let simpleRateCapital = parseFloat(document.getElementById('simpleRateCapital').value.replace(".",","));
     simpleCapitalResult.value = (simpleAmountCapital/(1 + (simpleTimeCapital * simpleRateCapital)/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     simpleCapitalResult.classList.remove('d-none');
     capitalResult.classList.remove('d-none');
     btnCleanSimpleCapital.classList.remove('d-none');
     btnCloseSimpleCapital.classList.remove('d-none');
}

//Limpa os campos do modal de juros simples
btnCleanSimpleCapital.onclick = ()=>{
     simpleAmountCapital.value = "";
     simpleTimeCapital.value = "";
     simpleRateCapital.value = "";
     simpleCapitalResult.value = "";
}

//Fecha a tela de capital simples
btnCloseSimpleCapital.onclick = ()=>{
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     simpleCapitalModal.classList.add('d-none');
}










