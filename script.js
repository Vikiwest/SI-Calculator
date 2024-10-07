
/*
function calculateInterest(){
  //Input values
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

 

  //Calculate simple interest: SI = (P * R * T) / 100
  const interest = (principal * rate * time) / 100;

  //Then display the result
  document.getElementById('result').textContent = `₦ ${interest.toFixed(3)}`;

 //Ensure the inputs are valid numbers
  if (isNaN(principal) || isNaN(rate) || isNaN(time)){
    document.getElementById('result').textContent = 'Please enter valid numbers';
    return;
  }
}


function resetForm() {
  //Reset all input fields and result

  document.getElementById('principal').value = '';
  document.getElementById('rate').value = '';
  document.getElementById('time').value = '';
  document.getElementById('result').textContent = '₦ 0';
}
*/


// function calculateInterest(p, r, t){
//   let p = Number(document.createElement("p").value);
// var numerator= (p * r * t)
// var denominator= 100
// SI = numerator/denominator
// }


const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const interestDisplay = document.getElementById("interest");

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
console.log(principal, rate, time);

function calculateInterest() {
  const p =parseFloat (principal.value);
  const r = parseFloat(rate.value);
  const t = parseFloat(time.value);

  console.log(p, r, t);

  const interest = (p * r * t) / 100;
  interestDisplay.innerText = `₦ ${interest.toFixed(3)}`;
}

function resetForm() {
  principal.value = "";
  rate.value = "";
  time.value = "";
  interestDisplay.innerText = "₦ 0"
}
