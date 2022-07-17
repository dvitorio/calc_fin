const title = document.querySelector('.imageTitle');
const menuClose = document.getElementById("btnCloseMenu");

/**FECHAR TELA DE MENU */
function closeMenu(){
     menuClose.classList.add('d-none');
}

/** ABRE TELA DE MONTANTE*/
function openAmount(){
     closeCapital();
     const openAmount = document.querySelector("#compoundAmount");
     openAmount.classList.remove('d-none');
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

/**FECHA TELA DE CAPITAL */
function closeCapital(){
     const closeCapital = document.querySelector("#compoundCapital");
     closeCapital.classList.add('d-none');
}

/**ABRE TELA DE TAXA */
function openRate(){
     closeAmount();
     closeCapital();
     const openRate = document.getElementById("compoundRate");
     openRate.classList.remove('d-none'); 
}

/**FECHA TELA DE TAXA */
function closeRate(){
     const closeRate = document.getElementById("compoundRate");
     closeRate.classList.add('d-none'); 
}