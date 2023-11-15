console.log("scriptet funka!!")

function createbox(LEFT,TOP,WIDTH,HEIGHT,ID) {
    let div = document.createElement("div")
    div.style.border ="solid"
    div.style.left = LEFT
    div.style.top = TOP
    div.style.width = WIDTH
    div.style.height = HEIGHT
    //div.style.translate ="50% 0%";
    document.getElementById(ID).appendChild(div);
}

//createbox("0px","-10px","155px","20px","home")
//createbox("0px","0px","155px","120px","home")
//createbox("0px","0px","155px","120px","guest")

console.log("scriptet funka igjen!!")

function scoring(lag, score){
    console.log("poeng er scoret!")
    let goal = document.getElementById(lag)
    console.log(typeof goal.innerText)
    console.log(score)
    let svar = parseInt(goal.innerText,10)
    svar += score
    console.log(svar)
    goal.innerText = svar
}






