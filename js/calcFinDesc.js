//INICIALIZAÇÃO DAS VARIÁVEIS
const btnCleanDescCompResult = document.getElementById('btnCleanDescCompResult');
const btnCloseDescComp = document.getElementById('btnCloseDescComp');
const btnCompDescCalculate = document.getElementById('btnCompDescCalculate');
const btnDescComp = document.getElementById('btnDescComp');
const btnDescCompResultButtons = document.getElementById('btnDescCompResultButtons');
const btnPrintDescCompResult = document.getElementById('btnPrintDescCompResult');
const currentValueDescComp = document.getElementById('currentValueDescComp');
const currentValueDescCompResult = document.getElementById('currentValueDescCompResult');
const descCompModal = document.getElementById('descCompModal');
const descCompResult = document.getElementById('descCompResult');



//Abre o modal de desconto composto
btnDescComp.onclick = ()=>{
     menu.classList.add('d-none');
     descCompModal.classList.remove('d-none');
}

//Calcula o valor descontado (valor líquido) composto
btnCompDescCalculate.onclick = ()=>{
     var compDescNominalValue = parseFloat(document.getElementById('compDescNominalValue').value);
     var compDescTime = parseFloat(document.getElementById('compDescTime').value);
     var compDescRate = parseFloat(document.getElementById('compDescRate').value);
          if((compDescNominalValue > 0) && (compDescRate > 0) && (compDescTime > 0)){
               currentValueDescComp.value = (compDescNominalValue/((1 + compDescRate/100)**(compDescTime))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
               currentValueDescCompResult.classList.remove('d-none');
               currentValueDescComp.classList.remove('d-none');
               descCompResult.classList.remove('d-none');
               let descComp = document.getElement('descComp');
               descComp.value = (compDescNominalValue - currentValueDescComp).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
               btnDescCompResultButtons.classList.remove('d-none');
               btnCleanDescCompResult.classList.remove('d-none');
               descComp.classList.remove('d-none');
          }
          else{
               alert('Valor nominal, taxa e período precisam ser positivos!');
          }
}

//Limpa os campos do modal de desconto composto
btnCleanDescCompResult.onclick = ()=>{
     document.getElementById('compDescNominalValue').value = '';
     document.getElementById('compDescTime').value = '';
     document.getElementById('compDescRate').value = '';
     document.getElementById('currentValueDescComp').value = '';
}

//Fecha o modal de desconto composto
btnCloseDescComp.addEventListener('click', ()=>{
     descCompModal.classList.add('d-none');
     menu.classList.remove('d-none');
})
