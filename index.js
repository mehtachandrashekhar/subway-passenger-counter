// document.getElementById("count-el").innerHTML = 5

let count = 0;
let countEl = document.getElementById("count-el")

function increment(){
    count=count+1;
    countEl.innerHTML=count;
}

function reset(){
    count=0;
    document.getElementById("count-el").innerHTML=count;
}

function save(){
    
}
console.log(count);