let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".f");
let newbtn=document.querySelector(".new");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let s=document.querySelector(".s");

let turno=true;

let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


const resetgame = () =>
{
    turno=true;
    enable();
    msgc.classList.add("hide");
    s.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno==true)
        {
        box.innerText="O";
        turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    });
});



const disable = () =>
{
    for(let boxe of boxes)
    {
        boxe.disabled=true;
    }
}

const enable = () =>
{
    for(let boxe of boxes)
    {
        boxe.disabled=false;
        boxe.innerText="";
    }
}

const showwinner=(winner)=>
{
msg.innerText=`CONGRATULATIONS , WINNER IS ${winner}`;
msgc.classList.remove("hide");
s.classList.remove("hide");
disable();
};

const checkwinner=()=>
{
 for(let pattern of arr)
 {
  let pos1 =boxes[pattern[0]].innerText;
  let pos2 =boxes[pattern[1]].innerText;
  let pos3 =boxes[pattern[2]].innerText;

  if(pos1!="" && pos2!="" && pos3!="")
{  
  if(pos1==pos2 && pos2==pos3)
  {
  console.log("WINNER",pos1);
  showwinner(pos1);
  }}}
};

newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);

