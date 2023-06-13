const numbers=document.querySelectorAll(".number");
const equal=document.getElementById("=");
const clear=document.getElementById("clear");
const add=document.getElementById("+");
const substract=document.getElementById("-");
const divide=document.getElementById("/");
const multiply=document.getElementById("*");
const screen=document.getElementById("screen");
const operators=document.querySelectorAll(".operator");

let flag=false;

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",screenFn);
}

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener("click",screenFn);
}

clear.addEventListener("click",()=>{
    screen.value="0";
    flag=false;
});

equal.addEventListener("click",()=>{
    screen.value=eval(screen.value);
    flag=false;
});

function screenFn(e){
    if(flag===false){
        screen.value="";
        flag=true;
    }
    screen.value+=e.target.id;
}