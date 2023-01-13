//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const btnCleanComercialResult = document.querySelector('#btnCleanComercialResult');
const btnCloseComercial = document.getElementById('btnCloseComercial');
const btnCloseComercialResult = document.getElementById('btnCloseComercialResult');
const btnCloseDescComp = document.getElementById('btnCloseDescComp');
const btnComercialDesCalculate = document.getElementById('btnComercialDesCalculate');
const btnComercialDescButtonsResult = document.querySelector('#btnComercialDescButtonsResult');
const btnCompDescCalculate = document.getElementById('btnCompDescCalculate');
const btnDescComComp = document.getElementById('btnDescComComp');
const btnDescComp = document.getElementById('btnDescComp');
const btnDescRacComp = document.getElementById('btnDescRacComp');
const btnPrintDescCompResult = document.getElementById('btnPrintDescCompResult');
const btnStart = document.getElementById('btnStart');
const comercialDescResult = document.getElementById('comercialDescResult');
const comercialValue = document.getElementById('comercialValue');
const coverSite = document.getElementById('coverSite');
const currentValueComercialDesc = document.getElementById('currentValueComercialDesc');
const currentValueDescComp = document.getElementById('currentValueDescComp');
const currentValueDescCompResult = document.getElementById('currentValueDescCompResult');
const descCompMenu = document.getElementById('descCompMenu');
const descCompModal = document.getElementById('descCompModal');
const descCompResult = document.getElementById('descCompResult');
const desComercialModal = document.getElementById('desComercialModal');
const navigation = document.getElementById('navigation');
var comercialDesc = document.getElementById('comercialDesc');



//======================================DESCONTO RACIONAL COMPOSTO ===========================================
//Habilita as modalidades de desconto composto (comercial ou racional)
btnDescComp.addEventListener('click', ()=>{
     btnDescRacComp.classList.toggle('d-none');
     btnDescComComp.classList.toggle('d-none');
});

//Calcula o desconto composto racional 
btnDescRacComp.addEventListener('click', ()=>{
     menu.classList.add('d-none');
     descCompModal.classList.remove('d-none');
});

//Calcula o valor descontado racional (valor líquido) 
btnCompDescCalculate.onclick = ()=>{
     var compDescNominalValue = parseFloat(document.getElementById('compDescNominalValue').value);
     var compDescTime = parseFloat(document.getElementById('compDescTime').value);
     var compDescRate = parseFloat(document.getElementById('compDescRate').value);
          if((compDescNominalValue > 0) && (compDescRate > 0) && (compDescTime > 0)){
               currentValueDescComp.value = (compDescNominalValue/((1 + compDescRate/100)**(compDescTime))).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
               currentValueDescCompResult.classList.remove('d-none');
               currentValueDescComp.classList.remove('d-none');
          }
          else{
               alert('Valor nominal, taxa e período precisam ser positivos!');
          }
}

//Limpa os campos do modal de desconto racional composto
btnCleanDescCompResult.onclick = ()=>{
     document.getElementById('compDescNominalValue').value = '';
     document.getElementById('compDescTime').value = '';
     document.getElementById('compDescRate').value = '';
     document.getElementById('currentValueDescComp').value = '';
}

//Fecha o modal de desconto racional composto
btnCloseDescComp.addEventListener('click', ()=>{
     descCompModal.classList.add('d-none');
     menu.classList.remove('d-none');
});




//===================================== DESCONTO COMERCIAL COMPOSTO =============================================
//Abre o modal de desconto comercial composto
btnDescComComp.addEventListener('click', ()=>{
     closeComercial();
     menu.classList.add('d-none');
     desComercialModal.classList.remove('d-none');
});

//Calcula o desconto comercial composto
btnComercialDesCalculate.addEventListener('click', ()=>{
     var nominalValueComercialDesc = parseFloat(document.getElementById('nominalValueComercialDesc').value); 
     var timeComercialDesc = parseFloat(document.getElementById('timeComercialDesc').value); 
     var rateComercialDesc = parseFloat(document.getElementById('rateComercialDesc').value/100); 
     let comercialDescValue = nominalValueComercialDesc * (1 - rateComercialDesc)** timeComercialDesc;
     document.getElementById('comercialValue').value = comercialDescValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
     document.getElementById('comercialDesc').value = (nominalValueComercialDesc - comercialDescValue).toFixed(2);
     btnComercialDescButtonsResult.classList.remove('d-none');
     currentValueComercialDesc.classList.remove('d-none');
     comercialDescResult.classList.remove('d-none');
     comercialValue.classList.remove('d-none');
     comercialDesc.classList.remove('d-none');
});

//Limpa os campos do modal de desconto comercial
function cleanComercialModal(){
     document.getElementById('nominalValueComercialDesc').value = '';
     document.getElementById('timeComercialDesc').value = '';
     document.getElementById('rateComercialDesc').value = '';
     document.getElementById('comercialValue').value = '';
     document.getElementById('comercialDesc').value = '';
};

//Fecha o modal de desconto comercial
function closeComercial(){
     cleanComercialModal();
     btnComercialDescButtonsResult.classList.add('d-none');
     comercialDescResult.classList.add('d-none');
     desComercialModal.classList.add('d-none');
     currentValueComercialDesc.classList.add('d-none');
     menu.classList.remove('d-none');
};


