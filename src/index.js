tipForm.addEventListener('submit', function(e){
  e.preventDefault();
  const billAmount = Number(document.querySelector("#bill-amount").value); 
  //concept called scope to function, function scoped
  const tipPercentage = Number(document.querySelector("#tip-amount").value);
  const tipAmount = document.querySelector("#final-tip");
  tipAmount.innerHTML = billAmount + (billAmount * tipPercentage);
  //${tipPercent}
  //insert math 
});