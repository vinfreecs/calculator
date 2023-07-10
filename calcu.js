const buttons = document.querySelectorAll("input");
const display = document.querySelector(".display p");
const equalsTO = document.querySelector(".equalsTo");
const allclear = document.querySelector(".allclear");
let equation = [];
let ans =0;
buttons.forEach((button) => {
    button.addEventListener("click",(e) => {
        equation.push(e.target.value);
        console.log(e.target.value);
        display.textContent=`${equation.join("")}`;

    })
})
equalsTO.addEventListener("click",()=>{
let numbers=equation.join("").split(/[-*/+]+/);
let op=equation.filter(ele => {
    if(!((ele>="0" && ele<="9") || ele==".")) return ele;
})
let ans=parseFloat(numbers[0]);
let j=0;
for(let i=1 ; i<numbers.length ; i++){
    if(op[j] == "+"){
        ans += parseFloat(numbers[i])
    }else if(op[j] == "-"){
        ans -= parseFloat(numbers[i])
    }else if(op[j] == "*"){
        ans *= parseFloat(numbers[i])
    }else if(op[j] == "/"){
        ans /= parseFloat(numbers[i])
    }
    j++;
}
display.textContent=`${ans}`;
})
allclear.addEventListener("click",()=>{
    display.textContent="";
    equation = [];
})