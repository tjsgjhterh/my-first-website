let countEl=document.getElementById("count-el")
let count=0
function increment(){
    count += 1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
function save(){
    let countStr=count + ","
    saveEl.textContent+=countStr
    countEl.textContent=0
    console.log(count)
    count=0
}



