const charval =  document.getElementById("textarea");
let totalCount = document.getElementById("total-count");
let remainingCount = document.getElementById("remaining");

let userChar = 0;
 
const updateCounter = () => { 
    userChar = charval.value.length;
    totalCount.innerText = userChar;
    remainingCount = 150 - userChar;
 }

 charval.addEventListener("keyup",() => updateCounter());

 const copyText = () => {
    charval.select();
    charval.setselectionRange(0, 150);
    navigator.clipboard.writeText(charval.value);
 }