const title = document.querySelector('.imageTitle');

/** ABRE TELA DE MONTANTE*/
function openAmount(){
     closeCapital();
     closeRate();
     const openAmount = document.querySelector("#compoundAmount");
     openAmount.classList.remove('d-none');
}

/**CALCULAR MONTANTE COMPOSTO */
function calculateAmountCompound(){
     const capitalAmount = parseFloat(document.getElementById("capitalAmount").value.replace(",","."));
     const timeAmount = parseFloat(document.getElementById("timeAmount").value.replace(",","."));
     const rateAmount = parseFloat(document.getElementById("rateAmount").value.replace(",","."));
          if((capitalAmount > 0) && (timeAmount > 0) && (rateAmount > 0)){
               amountAmount = capitalAmount * Math.pow((1 + rateAmount/100), timeAmount);
               document.getElementById("inputAmountResult").value = "R$ " + amountAmount.toFixed(2);
               const btnResult = document.getElementById("btnAmountResult");
               btnResult.classList.remove('d-none');
               const inputAmountResult = document.getElementById("inputAmountResult");
               inputAmountResult.classList.remove('d-none');
          }
          else{
               alert("Capital, tempo e/ou taxa deve(m) ser valor(es) positivos!");
          }
}

/**LIMPA OS CAMPOS DO MONTANTE COMPOSTO */
function cleanAmount(){
     document.getElementById("capitalAmount").value = "";
     document.getElementById("timeAmount").value = "";
     document.getElementById("rateAmount").value = "";
     document.getElementById("inputAmountResult").value = "";
}

/**FECHA TELA DE MONTANTE */
function closeAmount(){
     cleanAmount();
     const closeAmount = document.querySelector("#compoundAmount");
     closeAmount.classList.add('d-none');
     const inputAmountResult = document.getElementById("inputAmountResult");
     const btnAmountResult = document.getElementById("btnAmountResult");
     inputAmountResult.classList.add('d-none');
     btnAmountResult.classList.add('d-none');
}

/**ABRE TELA DE CAPITAL */
function openCapital(){
     closeAmount();
     closeRate();
     const openCapital = document.querySelector("#compoundCapital");
     openCapital.classList.remove('d-none');
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

/**FECHA TELA DE CAPITAL */
function closeCapital(){
     const closeCapital = document.querySelector("#compoundCapital");
     closeCapital.classList.add('d-none');
}

/**FECHA TELA DE CAPITAL COMPOSTO */
function closeCapital(){
     cleanCapital();
     btnCapitalResult.classList.add('d-none');
     inputCapitalResult.classList.add('d-none');
     const compoundCapital = document.getElementById("compoundCapital");
     compoundCapital.classList.add('d-none');
}

/**ABRE TELA DE TAXA */
function openRate(){
     closeAmount();
     closeCapital();
     const openRate = document.getElementById("compoundRate");
     openRate.classList.remove('d-none'); 
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

/**FECHA TELA DE TAXA COMPOSTA*/
function closeRate(){
     const closeRate = document.getElementById("compoundRate");
     closeRate.classList.add('d-none'); 
}


