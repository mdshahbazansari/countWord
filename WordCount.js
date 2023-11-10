const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-count");
let remainingCoutn = document.getElementById("remaining-count");

let userChar = 0;

const updateCounter = () => {

    userChar = charval.value.length;

    totalCount.innerText = userChar;

    remainingCoutn.innerText = 1000 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

const CopyText = () =>{
    charval.Select();
    charval.setSelectionRange(0, 1000)
    navigator.clipboard.writeText(charval.value)
};
