// document.getElementById("count-el").innerHTML = 5

let count = 0;
function increment(){
    count=count+1;
    document.getElementById("count-el").innerHTML=count;
}

function reset(){
    count=0;
    document.getElementById("count-el").innerHTML=count;
}
console.log(count);