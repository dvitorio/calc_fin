//INICIALIZAÇÃO DAS VARIÁVEIS 
const amountResult = document.getElementById('amountResult');
const btnButtonsAmountResult = document.getElementById('btnButtonsAmountResult');
const btnCalculateSimpleAmount = document.getElementById('btnCalculateSimpleAmount');
const btnCleanSimpleAmount = document.getElementById('btnCleanSimpleAmount');
const btnCleanSimpleCapital = document.getElementById('btnCleanSimpleCapital');
const btnCleanSimpleRate = document.getElementById('btnCleanSimpleRate');
const btnCloseApp = document.getElementById('btnCloseApp');
const btnCloseMenuSimple = document.getElementById('btnCloseMenuSimple');
const btnCloseSimpleAmount = document.getElementById('btnCloseSimpleAmount');
const btnCloseSimpleCapital = document.getElementById('btnCloseSimpleCapital');
const btnCloseSimpleRate = document.getElementById('btnCloseSimpleRate');
const btnJSimp = document.getElementById('btnJSimp');
const btnMenu = document.querySelector('.btnMenu');
const btnSimpleAmount = document.getElementById('btnSimpleAmount');
const btnSimpleCapital = document.getElementById('btnSimpleCapital');
const btnSimpleRate = document.getElementById('btnSimpleRate');
const btnSimpleTime = document.getElementById('btnSimpleTime');
const capitalResult = document.getElementById('capitalResult');
const feesResult = document.getElementById('feesResult');
const menu = document.getElementById('menu');
const menuButtons = document.getElementById('menuButtons');
const rateResult = document.getElementById('rateResult');
const simpleAmountModal = document.getElementById('simpleAmountModal');
const simpleAmountResult = document.getElementById('simpleAmountResult');
const simpleCalculateAmount = document.getElementById('simpleCalculateAmount');
const simpleCalculateCapital = document.getElementById('simpleCalculateCapital');
const simpleCalculateTime = document.getElementById('simpleCalculateTime');
const simpleCapitalModal = document.getElementById('simpleCapitalModal');
const simpleCapitalResult = document.getElementById('simpleCapitalResult');
const simpleFeesResult = document.getElementById('simpleFeesResult');
const simpleRateModal = document.getElementById('simpleRateModal');
const simpleRateResult = document.getElementById('simpleRateResult');
const simpleTimeModal = document.getElementById('simpleTimeModal');
const simpleTimeResult = document.getElementById('simpleTimeResult');
const timeResult = document.getElementById('timeResult');


//Fecha o aplicativo
btnCloseApp.onclick = ()=>{
     window.close();
}

//Volta ao menu de opções
function backMenu(){
      menuButtons.classList.remove('d-none');
      simpleAmountModal.classList.add('d-none');
      simpleRateModal.classList.add('d-none');
      simpleCapitalModal.classList.add('d-none');
      simpleTimeModal.classList.add('d-none');
}

//Abre menu geral
btnJSimp.onclick = ()=> {
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
}

//Fecha menu geral e abre menu de montante de juros simples
btnSimpleAmount.onclick = ()=>{
     menuButtons.classList.add('d-none');
     simpleAmountModal.classList.remove('d-none');
}

//Calcula montante simples
simpleCalculateAmount.onclick = ()=>{
     let simpleCapital = parseFloat(document.getElementById('simpleCapital').value.replace(".",","));
     let simpleTime = parseFloat(document.getElementById('simpleTime').value.replace(".",","));
     let simpleRate = parseFloat(document.getElementById('simpleRate').value.replace(".",","));
     if ((simpleCapital != '' && simpleCapital > 0) && (simpleTime != '' && simpleTime > 0) && (simpleRate != '' && simpleRate > 0)) {
          simpleAmountResult.value = (parseFloat(simpleCapital) * parseFloat((1 + (simpleTime * simpleRate) / 100))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          simpleAmountResult.classList.remove('d-none');
          amountResult.classList.remove('d-none');
          btnButtonsAmountResult.classList.remove('d-none');
          btnCleanSimpleAmount.classList.remove('d-none');
          btnCloseSimpleAmount.classList.remove('d-none');
     }
     else {
          alert('Todos os campos devem ser preenchidos com valores positivos! Preencha o(s) campo(s) para continuar.');
     }
}

//Limpa os campos do modal de montante de juros simples
btnCleanSimpleAmount.onclick = ()=>{
     document.getElementById('simpleCapital').value = '';
     document.getElementById('simpleTime').value = '';
     document.getElementById('simpleRate').value = '';
     document.getElementById('simpleAmountResult').value = '';
     amountResult.classList.remove('d-none');
     btnButtonsAmountResult.classList.add('d-none');
}

//Fecha o menu de montante de juros simples
btnCloseSimpleAmount.onclick = ()=> {
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     simpleAmountModal.classList.add('d-none');
     btnButtonsAmountResult.classList.add('d-none');
     amountResult.classList.add('d-none');
}

//Volta para o menu geral
btnCloseMenuSimple.onclick = ()=> {
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

//Limpa os campos do modal de capital simples
btnCleanSimpleCapital.onclick = ()=>{
     simpleAmountCapital.value = '';
     simpleTimeCapital.value = '';
     simpleRateCapital.value = '';
     simpleCapitalResult.value = '';
}

//Fecha a tela de CAPITAL simples
btnCloseSimpleCapital.onclick = ()=>{
     menu.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     simpleCapitalModal.classList.add('d-none');
     capitalResult.classList.add('d-none');
}

//Abre a tela de TAXA de juros simples
btnSimpleRate.onclick = ()=>{
     rateResult.classList.add('d-none');
     simpleRateModal.classList.remove('d-none');
     menuButtons.classList.add('d-none')
}

//Calcula a taxa de juros simples
simpleCalculateRate.onclick = ()=>{
     let simpleCapitalRate = parseFloat(document.getElementById('simpleCapitalRate').value); 
     let simpleTimeRate = parseFloat(document.getElementById('simpleTimeRate').value); 
     let simpleAmountRate = parseFloat(document.getElementById('simpleAmountRate').value); 
          if((simpleCapitalRate > simpleAmountRate) || (simpleTimeRate < 0)){
               alert("O valor do capital não pode ser superior ao valor do montante, e o tempo precisa ser um número positivo!");
          }
          else{
               simpleRateResult.value = ((simpleAmountRate - simpleCapitalRate)/(simpleCapitalRate * simpleTimeRate) * 100).toFixed(2);
               rateResult.classList.remove('d-none');
               simpleRateResult.classList.remove('d-none');
               btnCleanSimpleRate.classList.remove('d-none');
               btnCloseSimpleRate.classList.remove('d-none');
          }
}

//Limpa os campos do modal de taxa de juros simples
btnCleanSimpleRate.onclick = ()=>{
     simpleCapitalRate.value = '';
     simpleTimeRate.value = '';
     simpleAmountRate.value = '';
     simpleRateResult.value = '';
}

//Fecha a tela de taxa de juros simples
btnCloseSimpleRate.onclick = ()=>{
     simpleRateModal.classList.add('d-none');
     menuButtons.classList.remove('d-none')
}

//Abre o modal de período (tempo) simples
btnSimpleTime.onclick = ()=>{
     simpleTimeModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
}

//Calcula o período simples
simpleCalculateTime.onclick = ()=>{
     let simpleAmountTime = parseFloat(document.getElementById('simpleAmountTime').value);
     let simpleRateTime = parseFloat(document.getElementById('simpleRateTime').value);
     let simpleCapitalTime = parseFloat(document.getElementById('simpleCapitalTime').value);
     simpleTimeResult.value = ((simpleAmountTime - simpleCapitalTime)/(simpleCapitalTime * simpleRateTime/100)).toFixed(2);
     let simpleFeesTimeResult = document.getElementById('simpleFeesTimeResult');
     simpleFeesTimeResult.value = (simpleAmountTime - simpleCapitalTime).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     simpleFeesTimeResult.classList.remove('d-none');
     timeResult.classList.remove('d-none');
     simpleTimeResult.classList.remove('d-none');
}

