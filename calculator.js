const btnid = document.getElementById("calculate");
const billid = document.getElementById("bill");
const tipid = document.getElementById("tip");
const totalspan = document.getElementById("total");
function calculatetotal(){
    const billvalue = billid.value;
    const tipvalue = tipid.value;
    const totalvalue = billvalue * (1 + tipvalue/100);
    totalspan.innerText = totalvalue.toFixed(2);
}


btnid.addEventListener("click", calculatetotal);