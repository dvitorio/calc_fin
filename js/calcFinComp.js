//INICIALIZAÇÃO DAS VARIÁVEIS
const amountComp = document.getElementById('amountComp');
const amountCompFees = document.getElementById('amountCompFees');
const amountCompResult = document.getElementById('amountCompResult');
const amountFeesResult = document.getElementById('amountFeesResult');
const btnCalculateCompAmount = document.getElementById('btnCalculateCompAmount');
const btnCalculateCompCapital = document.getElementById('btnCalculateCompCapital');
const btnCalculateCompRate = document.getElementById('btnCalculateCompRate');
const btnCalculateCompTime = document.getElementById('btnCalculateCompTime');
const btnCleanCompAmountResult = document.getElementById('btnCleanCompAmountResult');
const btnCleanCompCapitalResult = document.getElementById('btnCleanCompCapitalResult');
const btnCleanCompRateResult = document.getElementById('btnCleanCompRateResult');
const btnCleanCompTimeResult = document.getElementById('btnCleanCompTimeResult');
const btnCloseCompRateResult = document.getElementById('btnCloseCompRateResult');
const btnCloseCompTimeResult = document.getElementById('btnCloseCompTimeResult');
const btnCloseMenuComp = document.getElementById('btnCloseMenuComp');
const btnCloseTimeComp = document.getElementById('btnCloseTimeComp');
const btnCompAmount = document.getElementById('btnCompAmount');
const btnCompAmountButtons = document.getElementById('btnCompAmountButtons');
const btnCompCapital = document.getElementById('btnCompCapital');
const btnCompCapitalButtons = document.getElementById('btnCompCapitalButtons');
const btnCompRate = document.getElementById('btnCompRate');
const btnCompRateButtons = document.getElementById('btnCompRateButtons');
const btnCompTime = document.getElementById('btnCompTime');
const btnCompTimeButtons = document.getElementById('btnCompTimeButtons');
const btnJComp = document.querySelector('.btnJComp');
const capitalCompResult = document.getElementById('capitalCompResult');
const compAmountCapital = document.getElementById('compAmountCapital');
const compAmountFeesResult = document.getElementById('compAmountFeesResult');
const compAmountModal = document.getElementById('compAmountModal');
const compCapitalModal = document.getElementById('compCapitalModal');
const compRate = document.getElementById('compRate');
const compRateModal = document.getElementById('compRateModal');
const compTimeModal = document.getElementById('compTimeModal');
const compTimeRate = document.getElementById('compTimeRate');
const menuButtonsComp = document.getElementById('menuButtonsComp');
const rateCompResult = document.getElementById('rateCompResult');
const timeCompResult = document.getElementById('timeCompResult');



//Fecha o aplicativo
/*btnCloseApp.onclick = ()=>{
     window.close();
};*/

//Abre o menu de opções 
btnJComp.addEventListener('click', ()=>{
     menuButtonsComp.classList.remove('d-none');
     menu.classList.add('d-none');
});

//Volta ao menu de opções compostas
function backCompMenu(){
     menuButtonsComp.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     compCapitalModal.classList.add('d-none');
     menu.classList.remove('d-none');
}

//Fecha o menu de juros compostos
btnCloseMenuComp.addEventListener('click', ()=>{
     menu.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');
});

//Imprime a página de resultados
function toPrint(){
     window.print();
}


/**========================================== MONTANTE COMPOSTO ================================= */
//Abre o modal de montante composto
btnCompAmount.onclick = ()=>{
     compAmountModal.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');
     amountCompResult.classList.add('d-none');
     btnCompAmountButtons.classList.add('d-none');
}

//Calcula o montante composto
btnCalculateCompAmount.addEventListener('click', ()=>{
     var compCapitalAmount = parseFloat(document.getElementById('compCapitalAmount').value.replace('.',','));
     var compRateAmount = parseFloat(document.getElementById('compRateAmount').value.replace('.',','));
     var compTimeAmount = parseFloat(document.getElementById('compTimeAmount').value.replace('.',','));
     amountComp.value = (compCapitalAmount * (1 + (compRateAmount/100))**(compTimeAmount)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     amountCompResult.classList.remove('d-none');
     btnCompAmountButtons.classList.remove('d-none');
     amountComp.classList.remove('d-none');
});

//Limpa os campos do modal de montante composto
btnCleanCompAmountResult.addEventListener('click', ()=>{
     document.getElementById('compCapitalAmount').value = '';
     document.getElementById('compRateAmount').value = '';
     document.getElementById('compTimeAmount').value = '';
     document.getElementById('amountComp').value = '';
     amountComp.classList.add('d-none');
})

//Fecha o modal de montante composto
btnCloseCompAmountResult.onclick = ()=>{
     compAmountModal.classList.add('d-none');
     menuButtonsComp.classList.remove('d-none');
}

/**======================================= CAPITAL COMPOSTO ===================================== */
//Acessa o menu de capital composto
btnCompCapital.onclick = ()=>{
     menuButtonsComp.classList.add('d-none');
     compCapitalModal.classList.remove('d-none');
}

//Calcula o capital composto
btnCalculateCompCapital.addEventListener('click', ()=>{
     let compAmountCapital = parseFloat(document.getElementById('compAmountCapital').value.replace('.',','));
     let compRateCapital = parseFloat(document.getElementById('compRateCapital').value.replace('.',','));
     let compTimeCapital = parseFloat(document.getElementById('compTimeCapital').value.replace('.',','));
     if((compAmountCapital > 0) && (compRateCapital > 0) && (compTimeCapital > 0) ){
          capitalComp.value = ((compAmountCapital)/((1 + compRateCapital/100))**(compTimeCapital)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          btnCompCapitalButtons.classList.remove('d-none');
          capitalCompResult.classList.remove('d-none');
          capitalComp.classList.remove('d-none');
     }
     else{
          alert("Capital, taxa e período precisam ser valores positivos!");
     }
});

//Limpa os campos do modal de capital composto
btnCleanCompCapitalResult.addEventListener('click', ()=>{
     document.getElementById('compAmountCapital').value = '';
     document.getElementById('compRateCapital').value = '';
     document.getElementById('compTimeCapital').value = '';
     document.getElementById('capitalComp').value = '';
});

//Fecha o modal de capital composto
btnCloseCompCapitalResult.addEventListener('click', ()=>{
     compCapitalModal.classList.add('d-none');
     btnCompCapitalButtons.classList.add('d-none');
     capitalCompResult.classList.add('d-none');
});


/** ======================================== TAXA COMPOSTA ====================================== */
//Abre o modal de taxa composta
btnCompRate.onclick = ()=>{
     menuButtonsComp.classList.add('d-none');
     compRateModal.classList.remove('d-none');
     compCapitalModal.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     compTimeModal.classList.add('d-none');
     rateCompResult.classList.add('d-none');
     btnCompRateButtons.classList.add('d-none');
}

//Calcula a taxa composta
btnCalculateCompRate.addEventListener('click', ()=>{
     let compAmountRate = parseFloat(document.getElementById('compAmountRate').value.replace('.',','));
     let compCapitalRate = parseFloat(document.getElementById('compCapitalRate').value.replace('.',','));
     let compTimeRate = parseFloat(document.getElementById('compTimeRate').value.replace('.',','));
          if((compAmountRate > 0) && (compCapitalRate) && (compTimeRate > 0)){
               rateComp.value = ((((compAmountRate/compCapitalRate) ** (1/compTimeRate)) - 1) * 100).toFixed(2);
               rateCompResult.classList.remove('d-none');
               rateComp.classList.remove('d-none'); 
               btnCompRateButtons.classList.remove('d-none');
          }
          else{
               alert('Montante, capital e período precisam ser valores positivos!');
          }
});

//Limpa os campos do modal de taxa composta
btnCleanCompRateResult.onclick = ()=>{
     document.getElementById('compAmountRate').value = '';
     document.getElementById('compCapitalRate').value = '';
     document.getElementById('compTimeRate').value = '';
     document.getElementById('rateComp').value = '';
}

//Fecha o modal de taxa composta
btnCloseCompRateResult.onclick = ()=>{
     compRateModal.classList.add('d-none');
     rateComp.classList.add('d-none');
     rateCompResult.classList.add('d-none');
     menuButtonsComp.classList.remove('d-none');
}

/**=================================================== PERÍODO COMPOSTO ========================================== */
btnCompTime.onclick = ()=>{
     compTimeModal.classList.remove('d-none');
     compCapitalModal.classList.add('d-none');
     compRateModal.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     menuButtonsComp.classList.add('d-none');
}

//Calcula o período composto
btnCalculateCompTime.addEventListener('click', ()=>{
     let compAmountTime = parseFloat(document.getElementById('compAmountTime').value.replace('.',','));
     let compCapitalTime = parseFloat(document.getElementById('compCapitalTime').value.replace('.',','));
     let compRateTime = parseFloat(document.getElementById('compRateTime').value.replace('.',','));
     if((compAmountTime > 0) && (compCapitalTime > 0) && (compRateTime)){
          if(compAmountTime > compCapitalTime){
               timeComp.value = ((Math.log(compAmountTime) - Math.log(compCapitalTime/100))/Math.log(1 + compRateTime)).toFixed(4) + " meses";
               timeCompResult.classList.remove('d-none');
               timeComp.classList.remove('d-none');
               btnCompTimeButtons.classList.remove('d-none');
          }
          else{
               alert('O montante não pode ser menor que o capital!');
          }
     }
     else{
          alert('Montante, capital e a taxa precisam ser valores positivos!');
     }
});

//Limpa os campos dao modal de período composto
btnCleanCompTimeResult.onclick = ()=>{
     document.getElementById('compAmountTime').value = '';
     document.getElementById('compCapitalTime').value = '';
     document.getElementById('compRateTime').value = '';
     document.getElementById('timeComp').value = '';
}

//Fecha o modal de período composto  volta ao menu de opções
btnCloseCompTimeResult.addEventListener('click', ()=>{
     compTimeModal.classList.add('d-none');
     compRateModal.classList.add('d-none');
     compCapitalModal.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     menuButtonsComp.classList.remove('d-none');
     timeCompResult.classList.add('d-none');
     btnCompTimeButtons.classList.add('d-none');
});

//Fecha o menu de período composto
btnCloseTimeComp.addEventListener('click', ()=>{
     compTimeModal.classList.add('d-none');
     menuButtonsComp.classList.remove('d-none');
     timeCompResult.classList.add('d-none');
});




