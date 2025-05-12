let turn = 1
let fills = []
let cells = document.querySelectorAll(".cell")
let won = false
let move = new Audio("assets/move.mp3")
let win = new Audio("assets/win.mp3")
win.volume = 0.5
//Checking for win
function check(){
    
    if(fills[0]==fills[1] && fills[1]==fills[2] && fills[0]){
        document.querySelector(".l1").style.width = "90%"
        won = true
    }
    else if(fills[3]==fills[4] && fills[4]==fills[5] && fills[3]){
        document.querySelector(".l2").style.width = "90%"
        won = true
    }
    else if(fills[6]==fills[7] && fills[7]==fills[8] && fills[6]){
        document.querySelector(".l3").style.width = "90%"
        won = true
    }
    else if(fills[0]==fills[3] && fills[3]==fills[6] && fills[0]){
        document.querySelector(".l4").style.height = "90%"
        won = true
    }
    else if(fills[1]==fills[4] && fills[4]==fills[7] && fills[1]){
        document.querySelector(".l5").style.height = "90%"
        won = true
    }
    else if(fills[2]==fills[5] && fills[5]==fills[8] && fills[2]){
        document.querySelector(".l6").style.height = "90%"
        won = true
    }
    else if(fills[0]==fills[4] && fills[4]==fills[8] && fills[0]){
        document.querySelector(".line7").style.height = "100%"
        document.querySelector(".line7").style.width = "100%"
        won = true
    }
    else if(fills[2]==fills[4] && fills[4]==fills[6] && fills[2]){
        document.querySelector(".line8").style.height = "100%"
        document.querySelector(".line8").style.width = "100%"
        won = true
    }
    if(won){
        win.play()
        if(turn == 2) document.querySelector(".status").innerHTML = "Player 1 Wins!!🎉"
        else document.querySelector(".status").innerHTML = "Player 2 Wins!!🎉"
    }
    else{
        move.play()
    }
}
//Event for turns
for (let j=0;j<cells.length;j++) {
    cells[j].addEventListener("click",async ()=>{
        if(cells[j].firstElementChild.src.endsWith("assets/nothing.svg") && !won){
            if(turn==1){
                fills[j]=1
                cells[j].querySelector("img").src = "assets/cross.svg"
                turn = 2
                document.querySelector(".status").innerHTML = document.querySelector(".status").innerHTML.replace("1","2")
                check()
            }
            else{
                fills[j]=2
                cells[j].querySelector("img").src = "assets/circle.svg"
                turn = 1
                document.querySelector(".status").innerHTML = document.querySelector(".status").innerHTML.replace("2","1")
                check()
            }
        }
    })
}

//Restart
document.querySelector(".start").addEventListener("click",()=>{
    document.querySelector(".status").innerHTML = "Player 1 Turn"
    document.querySelector(".l1").style.width = "0"
    document.querySelector(".l2").style.width = "0"
    document.querySelector(".l3").style.width = "0"
    document.querySelector(".l4").style.height = "0"
    document.querySelector(".l5").style.height = "0"
    document.querySelector(".l6").style.height = "0"
    document.querySelector(".line7").style.height = "0"
    document.querySelector(".line7").style.width = "0"
    document.querySelector(".line8").style.height = "0"
    document.querySelector(".line8").style.width = "0"
    for (const i of cells) {
        i.querySelector("img").src = "assets/nothing.svg"
    }
    won = false
    fills = []
    turn = 1
})