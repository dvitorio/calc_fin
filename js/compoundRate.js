/**MOSTRA TITULO DO APP */
function showTitle(){
     const title = document.querySelector('.imageTitle');
     title.classList.remove('d-none');
}


/** ABRE TELA DE MONTANTE*/
function openAmount(){
     const openAmount = document.querySelector("#compoundAmount");
     openAmount.classList.remove('d-none');
     closeCapital();
     closeRate();
     closeTime();
}

/**CALCULAR MONTANTE COMPOSTO */
function calculateAmountCompound(){
     const capitalAmount = parseFloat(document.getElementById("capitalAmount").value.replace(",","."));
     const timeAmount = parseFloat(document.getElementById("timeAmount").value.replace(",","."));
     const rateAmount = parseFloat(document.getElementById("rateAmount").value.replace(",","."));
          amountAmount = capitalAmount * Math.pow((1 + rateAmount/100), timeAmount);
          interestAmount = amountAmount - capitalAmount;
     document.getElementById("inputAmountResult").value = "R$ " + amountAmount.toFixed(2);
     document.getElementById("inputInterestResult").value = "R$ " + interestAmount.toFixed(2);
     const amountResult = document.getElementById("amountResult");
     amountResult.classList.remove('d-none');
     inputInterestResult.classList.remove('d-none');
     const inputAmountResult = document.getElementById("inputAmountResult");
     inputAmountResult.classList.remove('d-none');
     const btnAmountResult = document.getElementById("btnAmountResult");
     btnAmountResult.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DO MONTANTE COMPOSTO */
function cleanAmount(){
     document.getElementById("capitalAmount").value = "";
     document.getElementById("timeAmount").value = "";
     document.getElementById("rateAmount").value = "";
     document.getElementById("inputAmountResult").value = "";
     document.getElementById("btnAmountResult").value = "";
     document.getElementById("inputInterestResult").value = "";
}

/**FECHA TELA DE MONTANTE */
function closeAmount(){
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
function openCapital(){
     const openCapital = document.getElementById("compoundCapital");
     openCapital.classList.remove('d-none');
     closeAmount();
     closeRate();
     closeTime();
}

/**CALCULAR CAPITAL COMPOSTO */
function calculateCapitalCompound(){
     const amountCapital = parseFloat(document.getElementById("amountCapital").value.replace(",","."));
     const rateCapital = parseFloat(document.getElementById("rateCapital").value.replace(",",".")/100);
     const timeCapital = parseFloat(document.getElementById("timeCapital").value.replace(",","."));
          capitalCapital = amountCapital / Math.pow((1 + rateCapital), timeCapital);
     document.getElementById("inputCapitalResult").value = "R$ " + capitalCapital.toFixed(2);
     const btnCapitalResult = document.getElementById("btnCapitalResult");
     btnCapitalResult.classList.remove('d-none');
     const inputCapitalResult = document.getElementById("inputCapitalResult");
     inputCapitalResult.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DO CAPITAL COMPOSTO */
function cleanCapital(){
     document.getElementById("amountCapital").value = "";
     document.getElementById("rateCapital").value = "";
     document.getElementById("timeCapital").value = "";
     document.getElementById("inputCapitalResult").value = "";
}

/**FECHA TELA DE CAPITAL COMPOSTO */
function closeCapital(){
     cleanCapital();
     btnCapitalResult.classList.add('d-none');
     inputCapitalResult.classList.add('d-none');
     const compoundCapital = document.getElementById("compoundCapital");
     compoundCapital.classList.add('d-none');
}

/**========================= CÁLCULO DA TAXA DE JUROS COMPOSTA =====================================*/

/**ABRE TELA DE TAXA */
function openRate(){
     const openRate = document.getElementById("compoundRate");
     openRate.classList.remove('d-none'); 
     closeAmount();
     closeTime();
     closeCapital();
}

/**CALCULA A TAXA COMPOSTA */
function calculateRateCompound(){
     const capitalRate = parseFloat(document.getElementById("capitalRate").value.replace(",","."));
     const timeRate = parseFloat(document.getElementById("timeRate").value.replace(",","."));
     const amountRate = parseFloat(document.getElementById("amountRate").value.replace(",","."));
          rateRate = (Math.pow((amountRate/capitalRate), (1/timeRate)) - 1) * 100;
     document.getElementById("inputRateResult").value = rateRate.toFixed(2) + "%";
     const btnRateResult = document.getElementById("btnRateResult");
     btnRateResult.classList.remove('d-none');
     const inputRateResult = document.getElementById("inputRateResult");
     inputRateResult.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DA TAXA COMPOSTA */
function cleanRate(){
     document.getElementById("capitalRate").value = "";
     document.getElementById("timeRate").value = "";
     document.getElementById("amountRate").value = "";
     document.getElementById("inputRateResult").value = "";
}

/**FECHA TELA DE CAPITAL COMPOSTO */
function closeRate(){
     cleanRate();
     btnRateResult.classList.add('d-none');
     inputRateResult.classList.add('d-none');
     const compoundRate = document.getElementById("compoundRate");
     compoundRate.classList.add('d-none');
}

/**========================= CÁLCULO DO TEMPO (PERÍODO) EM JUROS COMPOSTOS =====================================*/

/**ABRE TELA DE TEMPO COMPOSTO*/
function openTime(){
     const openTime = document.getElementById("compoundTime");
     openTime.classList.remove('d-none'); 
     closeRate();
     closeCapital();
     closeAmount();
}

/**CALCULA O TEMPO COMPOSTO */
function calculateTimeCompound(){
     const capitalTime = parseFloat(document.getElementById("capitalTime").value.replace(",","."));
     const rateTime = parseFloat(document.getElementById("rateTime").value.replace(",","."));
     const amountTime = parseFloat(document.getElementById("amountTime").value.replace(",","."));
          if(amountTime >= capitalTime){
               timeTime = (Math.log(amountTime) - Math.log(capitalTime)) / Math.log(1 + rateTime/100);
               document.getElementById("inputTimeResult").value = timeTime.toFixed(0) + " meses";
               const btnTimeResult = document.getElementById("btnTimeResult");
               btnTimeResult.classList.remove('d-none');
               const inputTimeResult = document.getElementById("inputTimeResult");
               inputTimeResult.classList.remove('d-none');
          }
          else{
               alert("Montante inválido! O valor do montante não pode ser inferior ao valor do capital!");
          }
}

/**LIMPA OS CAMPOS DO TEMPO COMPOSTO */
function cleanTime(){
     document.getElementById("capitalTime").value = "";
     document.getElementById("rateTime").value = "";
     document.getElementById("amountTime").value = "";
     document.getElementById("inputTimeResult").value = "";
}

/**FECHA TELA DE TEMPO COMPOSTO */
function closeTime(){
     cleanTime();
     btnTimeResult.classList.add('d-none');
     const closeTime = document.getElementById("compoundTime");
     closeTime.classList.add('d-none'); 
}






