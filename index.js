// document.getElementById("count-el").innerHTML = 5

let count = 0;
let countEl = document.getElementById("count-el")

function increment(){
    count=count+1;
    countEl.innerHTML=count;
}

function reset(){
    count=0;
    saveEl.innerHTML = "Previous Entries :" ;
    countEl.innerHTML=count;

}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count + " - ";
}
// console.log(count);