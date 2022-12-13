//INICIALIZAÇÃO DAS VARIÁVEIS
const amountCompResult = document.getElementById('amountCompResult');
const btnCalculateCompAmount = document.getElementById('btnCalculateCompAmount');
const btnCloseMenuComp = document.getElementById('btnCloseMenuComp');
const btnCompAmount = document.getElementById('btnCompAmount');
const btnJComp = document.getElementById('btnJComp');
const compAmountModal = document.getElementById('compAmountModal');
const amountComp = document.getElementById('amountComp');
const menuButtonsComp = document.getElementById('menuButtonsComp');



//Acessa o menu de opções de juros compostos
btnJComp.onclick = ()=>{
     menuButtonsComp.classList.remove('d-none');
     menu.classList.add('d-none');
}

//Acessa o modal de montante composto
btnCompAmount.onclick = ()=>{
     compAmountModal.classList.remove('d-none');
     menuButtonsComp.classList.add('d-none');
}

//Calcula o montante composto
btnCalculateCompAmount.onclick = ()=>{
     let compCapitalAmount = parseFloat(document.getElementById('compCapitalAmount').value.replace('.',','));
     let compRateAmount = parseFloat(document.getElementById('compRateAmount').value.replace('.',','));
     let compTimeAmount = parseFloat(document.getElementById('compTimeAmount').value.replace('.',','));
     amountComp.value = (compCapitalAmount * (1 + (compRateAmount/100))**(compTimeAmount)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     let compFeesAmountResult = document.getElementById('compFeesAmountResult');
     compFeesAmountResult.value = (amountComp - compCapitalAmount);
     compFeesAmountResult.classList.remove('d-none');
     amountCompResult.classList.remove('d-none');
     amountComp.classList.remove('d-none');
}
