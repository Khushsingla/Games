var board;
console.log("hello");
var score = 0;
var rows = 4;
var columns = 4;
let highscore=0;
window.onload = function () {
    setgame();
}

function setgame() {
   board = [
       [0, 0, 0, 0],
       [0, 0, 0, 0],
       [0, 0, 0, 0],
       [0, 0, 0, 0],
   ]
 // board = [
 //   [2, 2, 2, 2],
 //   [2, 2, 2, 2],
 //   [4, 4, 8, 8],
 //   [4, 4, 8, 8],

    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns;c++)
        {
            let tile =document.createElement("div");
            tile.id=r.toString() + "-"+ c.toString();
            let num=board[r][c];
            updatetile(tile,num);
            document.getElementById("board").append(tile);
        }
    }
    settwo();
    settwo();
}
function empty()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns;c++)
        {
            if(board[r][c]==0)
            return true;
        }
    }
    return false;
}

function settwo()
{
    if(!empty)
    return;

    let found =false;
    while(!found)
    {
        let r=Math.floor(Math.random()*rows);
        let c=Math.floor(Math.random()*columns);

        if(board[r][c]==0)
        {
            board[r][c]=2;
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            tile.innerText="2";
            tile.classList.add("x2");
            found=true;
        }
    }
}



function updatetile(tile,num)
{
tile.innerText="";
tile.classList.value="";
tile.classList.add("tile");
if(num>0)
{
    tile.innerText=num; 
    if(num<=4096)
    {
        tile.classList.add("x"+num.toString());
    }
    else{
        tile.classList.add("x8192");
    }
}
}

document.addEventListener("keyup",(e)=>{
    if(e.code=="ArrowLeft")
    {
        slideleft();
        settwo();
    }
    else if(e.code=="ArrowRight")
    {
        slideright();
        settwo();
    }
    else if(e.code=="ArrowUp")
    {
        slideup();
        settwo();
    }
    else if(e.code=="ArrowDown")
    {
        slidedown();
        settwo();
    }
    document.getElementById("score").innerHTML= "YOUR SCORE : " +score;
})

function filterzeroes(row)
{
    return row.filter(num=>num!=0);
}

function slide(row)
{
    row=filterzeroes(row);
    for(let i=0;i<row.length-1;i++)
    {
          if(row[i]==row[i+1])
          {
            row[i]*=2;
            row[i+1]=0;
            score+=row[i];
          }
    }
    row=filterzeroes(row);
    while(row.length<columns)
    {
        row.push(0);
    }
    return row;
}

function slideleft()
{
    for(let r=0;r<rows;r++)
    {
        let row=board[r];
        row=slide(row);
        board[r]=row;

        for(let c=0;c<columns;c++)
        {
            let tile =document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
                updatetile(tile,num);
        }
    }
}

function slideright()
{
    for(let r=0;r<rows;r++)
    {
        let row=board[r];
        row.reverse();
        row=slide(row);
        row.reverse();
        board[r]=row;

        for(let c=0;c<columns;c++)
        {
            let tile =document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
                updatetile(tile,num);
        }
    }
}

function slideup()
{
for(let c=0;c<columns;c++)
{
    let row= [board[0][c],board[1][c],board[2][c],board[3][c]];
    row=slide(row);
    board[0][c]=row[0];
    board[1][c]=row[1];
    board[2][c]=row[2];
    board[3][c]=row[3];

    for(let r=0;r<columns;r++)
    {
        let tile =document.getElementById(r.toString()+"-"+c.toString());
        let num=board[r][c];
            updatetile(tile,num);
    }
}
}

function slidedown()
{
for(let c=0;c<columns;c++)
{
    let row= [board[0][c],board[1][c],board[2][c],board[3][c]];
    row.reverse();
    row=slide(row);
    row.reverse();
    board[0][c]=row[0];
    board[1][c]=row[1];
    board[2][c]=row[2];
    board[3][c]=row[3];

    for(let r=0;r<columns;r++)
    {
        let tile =document.getElementById(r.toString()+"-"+c.toString());
        let num=board[r][c];
            updatetile(tile,num);
    }
}
}

function gameover()
{
    let board=document.querySelector("#board");
    board.style.visibility="hidden";
    let abc=document.querySelector(".abc");
 abc.style.visibility="visible";
}
setInterval(() => {

    let aa=true;
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns;c++)
        {
          // if( (board[0][0]==board[0][1] || board[0][0]==board[1][0]) || (board[rows-1][0]==board[rows-1][1] || board[rows-1][0]==board[rows-2][0]) ||  (board[rows-1][columns-1]==board[rows-2][columns-1] || board[rows-1][columns-1]==board[rows-1][columns-2]) || (board[0][columns-1]==board[0][columns-2] || board[0][columns-1]==board[1][columns-1]))
          // {
          //     aa=false;
          //     break;
          // }
          // else{
            if( (board[r][c]==0))// || (r!=0 && c!=0 && r!=rows-1 && c!=columns-1 && (board[r][c]==board[r-1][c] || board[r][c]==board[r+1][c] || board[r][c]==board[r][c+1] || board[r][c]!=board[r][c-1] )) )
            {
            aa=false;
            break;
            }
         //  if(r==0 && c!=0 && c!=columns-1 && (board[r][c]==board[r][c-1] || board[r][c]==board[r][c+1] || board[r][c]==board[r+1][c]))
         //  {
         //      aa=false;
         //      break;
         //  } 
         //  if(r==rows-1 && c!=0 && c!=columns-1 && (board[r][c]==board[r][c-1] || board[r][c]==board[r][c+1] || board[r][c]==board[r-1][c]))
         //  {
         //      aa=false;
         //      break;
         //  } 
         //  if(c==0 && r!=0 && r!=rows-1 && (board[r][c]==board[r-1][c] || board[r][c]==board[r+1][c] || board[r][c]==board[r][c+1]))
         //  {
         //      aa=false;
         //      break;
         //  } 
         //  if(c==columns-1 && c!=0 && r!=rows-1 && (board[r][c]==board[r-1][c]||board[r][c]==board[r+1][c]||board[r][c]==board[r][c-1]) )
         //  {
         //      aa=false;
         //      break;
         //  } 
        }
        }
    

    if(highscore<score)
    {
        highscore=score;
        document.getElementById("score1").innerHTML= "HIGH SCORE : " +score;
    }

    if(aa==true)
    {
setTimeout(() => {
    gameover();
}, 500);


    }
    
}, 100);

let rstbtn=document.querySelector(".f");
let newbtn=document.querySelector(".new");
const resetgame = () =>
{
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
    let abc=document.querySelector(".abc");
  abc.style.visibility="hidden";
  document.getElementById("score").innerHTML= "YOUR SCORE : " +0;
  score=0;
  for(let r=0;r<rows;r++)
  {
      for(let c=0;c<columns;c++)
      {
           
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            tile.innerText="";
            tile.classList.remove("x"+board[r][c].toString());
            board[r][c]=0;
      }
  }
 settwo();
 settwo();
}

newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);