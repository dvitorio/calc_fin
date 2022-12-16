//INICIALIZAÇÃO DAS VARIÁVEIS
const amountComp = document.getElementById('amountComp');
const amountCompResult = document.getElementById('amountCompResult');
const amountFeesResult = document.getElementById('amountFeesResult');
const btnCalculateCompAmount = document.getElementById('btnCalculateCompAmount');
const btnCalculateCompCapital = document.getElementById('btnCalculateCompCapital');
const btnCleanCompAmountResult = document.getElementById('btnCleanCompAmountResult');
const btnCleanCompCapitalResult = document.getElementById('btnCleanCompCapitalResult');
const btnCloseMenuComp = document.getElementById('btnCloseMenuComp');
const btnCompAmount = document.getElementById('btnCompAmount');
const btnCompAmountButtons = document.getElementById('btnCompAmountButtons');
const btnCompCapital = document.getElementById('btnCompCapital');
const btnCompCapitalButtons = document.getElementById('btnCompCapitalButtons');
const btnJComp = document.getElementById('btnJComp');
const capitalCompResult = document.getElementById('capitalCompResult');
const compAmountCapital = document.getElementById('compAmountCapital');
const compAmountModal = document.getElementById('compAmountModal');
const compCapitalModal = document.getElementById('compCapitalModal');
const compFeesAmountResult = document.getElementById('compFeesAmountResult');
const menuButtonsComp = document.getElementById('menuButtonsComp');


//Fecha o aplicativo
btnCloseApp.onclick = ()=>{
     window.close();
};

//Abre o menu de opções 
btnJComp.addEventListener('click', ()=>{
     menuButtonsComp.classList.remove('d-none');
     menu.classList.add('d-none');
});

//Acessa o modal de montante composto
btnCompAmount.onclick = ()=>{
     compAmountModal.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');
}

//Calcula o montante composto
btnCalculateCompAmount.addEventListener('click', ()=>{
     var compCapitalAmount = parseFloat(document.getElementById('compCapitalAmount').value.replace('.',','));
     var compRateAmount = parseFloat(document.getElementById('compRateAmount').value.replace('.',','));
     var compTimeAmount = parseFloat(document.getElementById('compTimeAmount').value.replace('.',','));
     amountComp.value = (compCapitalAmount * (1 + (compRateAmount/100))**(compTimeAmount)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     amountCompResult.classList.remove('d-none');
     amountComp.classList.remove('d-none');
     compFees.classList.remove('d-none');
     btnCompAmountButtons.classList.remove('d-none');
});

//Limpa os campos do modal de montante composto
btnCleanCompAmountResult.addEventListener('click', ()=>{
     document.getElementById('compCapitalAmount').value = '';
     document.getElementById('compRateAmount').value = '';
     document.getElementById('compTimeAmount').value = '';
     document.getElementById('amountComp').value = '';
     amountComp.classList.add('d-none');
})

//Fecha o modal de juros compostos
btnCloseCompAmountResult.onclick = ()=>{
     compAmountModal.classList.add('d-none');
     menuButtonsComp.classList.remove('d-none');

}

//Acessa o menu de capital composto
btnCompCapital.onclick = ()=>{
     menuButtonsComp.classList.add('d-none');
     compCapitalModal.classList.remove('d-none');
}

//Calcula o capital composto
btnCalculateCompCapital.addEventListener('click', ()=>{
     let compAmountCapital = parseFloat(document.getElementById('compAmountCapital').value);
     let compRateCapital = parseFloat(document.getElementById('compRateCapital').value);
     let compTimeCapital = parseFloat(document.getElementById('compTimeCapital').value);
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

btnCloseMenuComp.addEventListener('click', ()=>{
     menu.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');

});


//Volta ao menu de opções compostas
function backCompMenu(){
     menuButtonsComp.classList.add('d-none');
     compAmountModal.classList.add('d-none');
     compCapitalModal.classList.add('d-none');
     menu.classList.remove('d-none');
}



