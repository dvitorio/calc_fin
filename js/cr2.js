var title = document.getElementById("imageTitle");
var menu = document.querySelector('#menu');
var openAmount = document.querySelector("#compoundAmount");
var capitalAmount = parseFloat(document.getElementById("capitalAmount").value.replace(",", "."));
var timeAmount = parseFloat(document.getElementById("timeAmount").value.replace(",", "."));
var rateAmount = parseFloat(document.getElementById("rateAmount").value.replace(",", "."));
var amountResult = document.getElementById("amountResult");
var inputAmountResult = document.getElementById("inputAmountResult");
var btnAmountResult = document.getElementById("btnAmountResult");

/**ESCONDE TITULO DO APP E MOSTRA O MENU DE OPÇÕES*/
function showMenu() {
     title.classList.add('d-none');
     menu.classList.remove('d-none');
}

/**ESCONDE O MENU DE OPÇÕES */
function hideMenu(){
     hideMenu.classList.add('d-none');
}

/**VOLTA PARA O MENU DE OPÇÕES */
function goHome() {
     home.classList.remove('d-none');
     titleRemove.classList.add('d-none');
}

/**FECHA O MENU DE OPÇÕES */
function exitHome() {
     home.classList.add('d-none');
     titleRemove.classList.remove('d-none');
}

/** ABRE TELA DE MONTANTE*/
function openAmount() {
     openAmount.classList.remove('d-none');
     closeCapital();
     closeRate();
     closeTime();
     hideMenu();
}

/**CALCULAR MONTANTE COMPOSTO */
function calculateAmountCompound() {
     if (capitalAmount > 0 && timeAmount > 0 && rateAmount > 0) {
          amountAmount = capitalAmount * Math.pow((1 + rateAmount / 100), timeAmount);
          interestAmount = amountAmount - capitalAmount;
          document.getElementById("inputAmountResult").value = "R$ " + amountAmount.toFixed(2);
          document.getElementById("inputInterestResult").value = "R$ " + interestAmount.toFixed(2);

          amountResult.classList.remove('d-none');
          inputInterestResult.classList.remove('d-none');

          inputAmountResult.classList.remove('d-none');

          btnAmountResult.classList.remove('d-none');
     }
     else{
          alert("Preencha os campos necessários e continue!");
     }

}

/**LIMPA OS CAMPOS DO MONTANTE COMPOSTO */
function cleanAmount() {
     document.getElementById("capitalAmount").value = "";
     document.getElementById("timeAmount").value = "";
     document.getElementById("rateAmount").value = "";
     document.getElementById("inputAmountResult").value = "";
     document.getElementById("btnAmountResult").value = "";
     document.getElementById("inputInterestResult").value = "";
}

/**FECHA TELA DE MONTANTE */
function closeAmount() {
     cleanAmount();
     const closeAmount = document.getElementById("compoundAmount");
     closeAmount.classList.add('d-none');
     const inputAmountResult = document.querySelector("#inputAmountResult");
     const btnAmountResult = document.getElementById("btnAmountResult");
     inputAmountResult.classList.add('d-none');
     btnAmountResult.classList.add('d-none');
     interestAmount.classList.add('d-none');
}

/**========================= CÁLCULO DO CAPITAL EM JUROS COMPOSTOS =====================================*/

/**ABRE TELA DE CAPITAL */
function openCapital() {
     const openCapital = document.getElementById("compoundCapital");
     openCapital.classList.remove('d-none');
     closeAmount();
     closeRate();
     closeTime();
     hideMenu();
}

/**CALCULAR CAPITAL COMPOSTO */
function calculateCapitalCompound() {
     const amountCapital = parseFloat(document.getElementById("amountCapital").value.replace(",", "."));
     const rateCapital = parseFloat(document.getElementById("rateCapital").value.replace(",", ".") / 100);
     const timeCapital = parseFloat(document.getElementById("timeCapital").value.replace(",", "."));
     capitalCapital = amountCapital / Math.pow((1 + rateCapital), timeCapital);
     document.getElementById("inputCapitalResult").value = "R$ " + capitalCapital.toFixed(2);
     const btnCapitalResult = document.getElementById("btnCapitalResult");
     btnCapitalResult.classList.remove('d-none');
     const inputCapitalResult = document.getElementById("inputCapitalResult");
     inputCapitalResult.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DO CAPITAL COMPOSTO */
function cleanCapital() {
     document.getElementById("amountCapital").value = "";
     document.getElementById("rateCapital").value = "";
     document.getElementById("timeCapital").value = "";
     document.getElementById("inputCapitalResult").value = "";
}

/**FECHA TELA DE CAPITAL COMPOSTO */
function closeCapital() {
     showMenu();
     cleanCapital();
     btnCapitalResult.classList.add('d-none');
     inputCapitalResult.classList.add('d-none');
     const compoundCapital = document.getElementById("compoundCapital");
     compoundCapital.classList.add('d-none');
}

/**========================= CÁLCULO DA TAXA DE JUROS COMPOSTA =====================================*/

/**ABRE TELA DE TAXA */
function openRate() {
     const openRate = document.getElementById("compoundRate");
     openRate.classList.remove('d-none');
     closeAmount();
     closeCapital();
     closeTime();
     hideMenu();
}

/**CALCULA A TAXA COMPOSTA */
function calculateRateCompound() {
     const capitalRate = parseFloat(document.getElementById("capitalRate").value.replace(",", "."));
     const timeRate = parseFloat(document.getElementById("timeRate").value.replace(",", "."));
     const amountRate = parseFloat(document.getElementById("amountRate").value.replace(",", "."));
     rateRate = (Math.pow((amountRate / capitalRate), (1 / timeRate)) - 1) * 100;
     document.getElementById("inputRateResult").value = rateRate.toFixed(2) + "%";
     const btnRateResult = document.getElementById("btnRateResult");
     btnRateResult.classList.remove('d-none');
     const inputRateResult = document.getElementById("inputRateResult");
     inputRateResult.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DA TAXA COMPOSTA */
function cleanRate() {
     document.getElementById("capitalRate").value = "";
     document.getElementById("timeRate").value = "";
     document.getElementById("amountRate").value = "";
     document.getElementById("inputRateResult").value = "";
}

/**FECHA TELA DE CAPITAL COMPOSTO */
function closeRate() {
     cleanRate();
     btnRateResult.classList.add('d-none');
     inputRateResult.classList.add('d-none');
     const compoundRate = document.getElementById("compoundRate");
     compoundRate.classList.add('d-none');
     showMenu();
}

/**========================= CÁLCULO DO TEMPO (PERÍODO) EM JUROS COMPOSTOS =====================================*/

/**ABRE TELA DE TEMPO COMPOSTO*/
function openTime() {
     hideMenu();
     const openTime = document.getElementById("compoundTime");
     openTime.classList.remove('d-none');
     closeCapital();
     closeRate();
     closeAmount();
}

/**CALCULA O TEMPO COMPOSTO */
function calculateTimeCompound() {
     const capitalTime = parseFloat(document.getElementById("capitalTime").value.replace(",", "."));
     const rateTime = parseFloat(document.getElementById("rateTime").value.replace(",", "."));
     const amountTime = parseFloat(document.getElementById("amountTime").value.replace(",", "."));
     if (amountTime >= capitalTime) {
          timeTime = (Math.log(amountTime) - Math.log(capitalTime)) / Math.log(1 + rateTime / 100);
          document.getElementById("inputTimeResult").value = timeTime.toFixed(0) + " meses";
          const btnTimeResult = document.getElementById("btnTimeResult");
          btnTimeResult.classList.remove('d-none');
          const inputTimeResult = document.getElementById("inputTimeResult");
          inputTimeResult.classList.remove('d-none');
     }
     else {
          alert("Montante inválido! O valor do montante não pode ser inferior ao valor do capital!");
     }
}

/**LIMPA OS CAMPOS DO TEMPO COMPOSTO */
function cleanTime() {
     document.getElementById("capitalTime").value = "";
     document.getElementById("rateTime").value = "";
     document.getElementById("amountTime").value = "";
     document.getElementById("inputTimeResult").value = "";
}

/**FECHA TELA DE TEMPO COMPOSTO */
function closeTime() {
     cleanTime();
     btnTimeResult.classList.add('d-none');
     const closeTime = document.getElementById("compoundTime");
     closeTime.classList.add('d-none');
     showMenu();
}






