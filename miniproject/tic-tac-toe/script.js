let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw");
let control = document.querySelector(".control")
let playerDisplay  = document.querySelector(".display-player")
let display = document.getElementsByClassName(".display");
let turnO = true;// player O
let Player = "O";
let count=0;

const WinPatterns  = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const changePlayer = () => {
    playerDisplay.classList.remove(`Player${Player}`);
    Player = Player === 'X'? 'O' : 'X';
    playerDisplay.innerText = Player;
    playerDisplay.classList.add(`Player${Player}`);

}

const resetGame = () =>{
    playerDisplay.classList.remove(`Player${Player}`);
    Player = Player === 'X'? 'O' : 'O';
    playerDisplay.innerText = Player;
    playerDisplay.classList.add(`Player${Player}`);
    turnO = true;
    count=0;
    enabledBoxes();
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
        msgContainer.classList.add("hide");
        control.classList.add("hideDraw");
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText ="O";
            count+=1;
            turnO=false;
            changePlayer();
        }else{
            box.innerText="X";
            count+=1;
            turnO = true;
            changePlayer();
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of WinPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,// position value  1
        //     boxes[pattern[1]].innerText,//position value 2
        //     boxes[pattern[2]].innerText);// position value 3
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3!= "" ){
                if(pos1===pos2&&pos2==pos3){
                    // console.log("Winner",pos1);
                    showWinner(pos1);
                }else  if(pos1!=pos2&&pos2!=pos3){
                            if(count===9){
                                    showDraw();
                            }
                        } 
            }
    };
};

const showDraw =() =>{
       draw.innerText=`Draw`;
       control.classList.remove("hideDraw");
       count=0;
        disabledBoxes();
}

const showWinner = (Winner) =>{
    msg.innerText =` Congratulation, Winner is ${Winner}`;
    count =0;
    msgContainer.classList.remove("hide");
    control.classList.add("hideDraw");
    disabledBoxes();
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
}
