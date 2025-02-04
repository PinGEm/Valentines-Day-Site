const body=document.body;
const yes_button=document.getElementById("yes_button");
const firstsection=document.getElementById("first_section");
const secondsection=document.getElementById("second_section");

var yesHeight = 64;
var yesWidth = 4;
var fontSize = 24;
function Yes(){
    firstsection.classList.add("disabled");
    secondsection.classList.remove("disabled");
}

function No(){
    /* Make the Yes Text Bigger and Bigger*/
    yesHeight = yesHeight * 1.1;
    yesWidth = yesWidth * 1.1;
    fontSize = fontSize * 1.1;

    yes_button.style.fontSize=fontSize+'8px';
    yes_button.style.height= yesHeight+'1px';
    yes_button.style.width= yesWidth+'1%';
}