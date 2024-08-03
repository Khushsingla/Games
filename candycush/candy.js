var candies=["a","b","c","d","e","f"];
var board=[];
var rows=9;
var columns=9;
var score=0;
let curtile;
let othertile;

window.onload=function()
{
    startgame();
}

window.setInterval(() => {
    crushcandy();
    slidecandy();
    generatecandy();
}, 200);
function randomCandy()
{
    return candies[Math.floor(Math.random()*candies.length)];
}
 
function startgame()
{
    for(let r=0;r<rows;r++)
    {
        let row=[];
        for(let c=0;c<columns;c++)
        {
          
            let tile =document.createElement("img");
            tile.id=r.toString() + "-"+ c.toString();
            tile.src="./images/"+randomCandy()+".png";

            tile.addEventListener("dragstart",dragStart);
            tile.addEventListener("dragover",dragover);
            tile.addEventListener("dragenter",dragenter);
            tile.addEventListener("dragleave",dragleave);
            tile.addEventListener("drop",dragDrop);
            tile.addEventListener("dragend",dragend);

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row)
    }
    console.log("board");
}

function dragStart()
{
curtile=this; // this refer tot tile which is clicked
}
function dragover(e)
{
e.preventDefault();
    }
function dragenter(e)
{
e.preventDefault();
}
function dragleave()
{

}
function dragDrop()
{
    othertile=this;
}

function dragend()
{
    if(curtile.src.includes("blank") || othertile.src.includes("blank") )
    return;

   let cc=curtile.id.split("-");
   let r=parseInt(cc[0]);
   let c=parseInt(cc[1]);

   let oc=othertile.id.split("-");
   let r2=parseInt(oc[0]);
   let c2=parseInt(oc[1]);
  
   let moveleft= c2==c-1 && r==r2;
   let moveright=c2==c+1 && r==r2;
   let moveup= r2==r-1 && c==c2;
   let movedown=r2==r+1 && c==c2;

  let aa=movedown || moveleft || moveright || moveup;
  if(aa)
  {
    let curImg=curtile.src;
    let otherImg=othertile.src;
   othertile.src=curImg;
   curtile.src=otherImg;  
   let valid=checkvalid();
   if(!valid)
   {
    let curImg=curtile.src;
    let otherImg=othertile.src;
   othertile.src=curImg;
   curtile.src=otherImg;  
   }
  }    
}
function crushcandy()
{
    crushthree();
    document.getElementById("score").innerText=score;
}

function crushthree()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns-2;c++)
        {
          let candy1=board[r][c];
          let candy2=board[r][c+1];
          let candy3=board[r][c+2];

          if(candy1.src==candy2.src && candy3.src==candy2.src && !candy1.src.includes("blank")){
          candy1.src="./images/blank.png";
          candy2.src="./images/blank.png";
          candy3.src="./images/blank.png";
          score+=30;
          }
        }
    }

    for(let c=0;c<columns;c++)
    {
        for(let r=0;r<rows-2;r++)
        {
          let candy1=board[r][c];
          let candy2=board[r+1][c];
          let candy3=board[r+2][c];
          if(candy1.src==candy2.src && candy3.src==candy2.src && !candy1.src.includes("blank")){
            candy1.src="./images/blank.png";
            candy2.src="./images/blank.png";
            candy3.src="./images/blank.png";
            score+=30;
            }
        }
    }
    
}

function checkvalid()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns-2;c++)
        {
          let candy1=board[r][c];
          let candy2=board[r][c+1];
          let candy3=board[r][c+2];
          if(candy1.src==candy2.src && candy3.src==candy2.src && !candy1.src.includes("blank")){
            return true;
          }
        }
    }
    for(let c=0;c<columns;c++)
    {
        for(let r=0;r<rows-2;r++)
        {
          let candy1=board[r][c];
          let candy2=board[r+1][c];
          let candy3=board[r+2][c];
          if(candy1.src==candy2.src && candy3.src==candy2.src && !candy1.src.includes("blank")){
            return true;
            }
        }
    }

    return false;
}

function slidecandy()
{
    for(let c=0;c<columns;c++)
    {
        let ind=rows-1;
        for(let r=columns-1;r>=0;r--)
        {
            if(!board[r][c].src.includes("blank"))
            {
                board[ind][c].src=board[r][c].src;
                ind-=1;
            }
        }
        for(let r=ind;r>=0;r--)
        {
            board[r][c].src="./images/blank.png";
        }
    }
}
function generatecandy()
{
     for(let c=0;c<columns;c++)
     {
        if(board[0][c].src.includes("blank"))
        {
            board[0][c].src="./images/"+randomCandy()+".png";
        }
     }
}