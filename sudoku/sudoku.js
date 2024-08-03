var a=null;
var b=null;

var errors=0;

var board=[
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"

]
var solution=[
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"
]
let e=document.querySelector(".e");
let m=document.querySelector(".m");
let h=document.querySelector(".h");
let n=document.querySelector(".n");
let s=document.querySelector(".s");

var nboard=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
var nsolution=[
    "387419625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
var eboard=[
    "---26-7-1",
    "68--7--9-",
    "19---45--",
    "82-1---4-",
    "--46-29--",
    "-5---3-28",
    "--93---74",
    "-4--5--36",
    "7-3-18---"
]
var esolution=[
     "435269781",
     "682571493",
     "197834562",
     "826195347",
     "374682915",
     "951743628",
     "519326874",
     "248957136",
     "763418259"
]

var hboard=[
    "--------2",
    "------94-",
    "--3-----5",
    "-923-5-74",
    "84-------",
    "-67-98---",
    "---7-6---",
    "---9---2-",
    "4-85--36-"

]
var hsolution=[
    "684159732",
    "751832946",
    "923674185",
    "192365874",
    "845217693",
    "367498251",
    "239746518",
    "516983427",
    "478521369"
]

var mboard=[
    "-------7-",
    "-7--1-59-",
    "-8-3-2-16",
    "65-4-9--3",
    "--4------",
    "---76----",
    "91-6-----",
    "-279---4-",
    "4--51----"

]
var msolution=[
      "142596378",
      "376814592",
      "589372416",
      "651489723",
      "734251869",
      "298763154",
      "913647285",
      "827935641",
      "4655128937"
]



window.onload=function()
{
    setgame();
}

function setgame()
{
    for(let r=1;r<=9;r++)
    {
            let number =document.createElement("div");
            number.id=r;
            number.innerText=r;
            number.addEventListener("click",setnumber);
            number.classList.add("number");
            document.getElementById("digits").appendChild(number);

    }


    for(let r=0;r<9;r++)
    {
        for(let c=0;c<9;c++)
        {
          
            let tile =document.createElement("div");
            tile.id=r.toString() + "-"+ c.toString();
            if(board[r][c]=="-")
            {
            tile.innerText="";
            
        }
        else
        {
            tile.innerText=board[r][c];
            tile.classList.add("tile1");
        }
        if(r==2 || r==5)
        tile.classList.add("h");
    if(c==2 || c==5)
    tile.classList.add("v");
            tile.addEventListener("click",selecttile);
            tile.classList.add("tile");

          document.getElementById("board").append(tile);
        }
    }
}




function setnumber()
{
    if(a!=null)
    a.classList.remove("number-selected");

    a=this;
    a.classList.add("number-selected");
}

function selecttile()
{
    if(a)
    {
        if(this.innerText!="")
       return;
    }

    let c=this.id.split("-");
    let r=parseInt(c[0]);
    let c1=parseInt(c[1]);

    if(solution[r][c1]==a.id)
    {
     this.style.color="red";   
    this.innerText=a.id;
    }
    else
    {
    errors++;
    document.getElementById("errors").innerHTML="ERRORS : "+errors;
    }

}


function gameover()
{
let a=document.querySelector(".abc");
  a.style.visibility="visible";
}
setInterval(() => {
   
    let aa=true;
    for(let r=0;r<9;r++)
    {
        for(let c=0;c<9;c++)
        {
            let a=document.getElementById(r.toString()+"-"+ c.toString());
            if(a.innerText=="")
            {
            aa=false;
            break;
            }
        }
        }
    

    if(aa==true)
    {
setTimeout(() => {
    gameover();
}, 500);


    }

}, 100);

let newbtn=document.querySelector(".new");
const resetgame = () =>
{
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
    let a=document.querySelector(".abc");
  a.style.visibility="hidden";
  document.getElementById("errors").innerHTML= "ERRORS : "+0;
  errors=0;
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
        if(board[r][c]!=0)
        {
          let tile=document.getElementById(r.toString()+"-"+c.toString());
          if(board[r][c]=="-")
          {
          tile.innerText="";   
      }
      else
      {
          tile.innerText=board[r][c];
          tile.classList.add("tile1");
      }
        }
    }
}


    a.classList.remove("number-selected");
}
 // setgame();

newbtn.addEventListener("click",resetgame);

const q = () =>
{
    board=eboard;
    solution=esolution;
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
  document.getElementById("errors").innerHTML= "ERRORS : " +0;
  errors=0;
  let a=document.querySelector(".abc");
  a.style.visibility="hidden";
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
        if(board[r][c]!=0)
        {
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            tile.style.color="black";
            if(board[r][c]=="-")
          {
          tile.innerText="";   
      }
      else
      {
          tile.innerText=board[r][c];
          tile.classList.add("tile1");
      }
        }
    }

}
if(a!=null)
a.classList.remove("number-selected");
}
const qqqq = () =>
{
    let a=document.querySelector(".abc");
    a.style.visibility="hidden";
    board=nboard;
    solution=nsolution;
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
  document.getElementById("errors").innerHTML= "ERRORS : " +0;
  errors=0;
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
        if(board[r][c]!=0)
        {
          let tile=document.getElementById(r.toString()+"-"+c.toString());
          tile.style.color="black";
          if(board[r][c]=="-")
          {
          tile.innerText="";   
      }
      else
      {
          tile.innerText=board[r][c];
          tile.classList.add("tile1");
      }
        }
    }
}
    if(a!=null)
    a.classList.remove("number-selected");
}

const qq = () =>
{
    
    let a=document.querySelector(".abc");
    a.style.visibility="hidden"; board=mboard;
    solution=msolution;
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
  document.getElementById("errors").innerHTML= "ERRORS : " +0;
  errors=0;
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
        if(board[r][c]!=0)
        {
          let tile=document.getElementById(r.toString()+"-"+c.toString());
          tile.style.color="black";
          if(board[r][c]=="-")
          {
          tile.innerText="";   
      }
      else
      {
          tile.innerText=board[r][c];
          tile.classList.add("tile1");
      }
        }
    }
}
    if(a!=null)
    a.classList.remove("number-selected");

}
const qqq = () =>
{
    let a=document.querySelector(".abc");
    a.style.visibility="hidden";
    board=hboard;
    solution=hsolution;
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
  document.getElementById("errors").innerHTML= "ERRORS : " +0;
  errors=0;
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
       
        if(board[r][c]!=0)
        {
          let tile=document.getElementById(r.toString()+"-"+c.toString());
          tile.style.color="black";
          if(board[r][c]=="-")
          {
          tile.innerText="";   
      }
      else
      {
          tile.innerText=board[r][c];
          tile.classList.add("tile1");
      }
        }
    }
}
    if(a!=null)
    a.classList.remove("number-selected");
}

const qqqqq = () =>
{
    let a=document.querySelector(".abc");
    a.style.visibility="hidden";
    let board1=document.querySelector("#board");
    board1.style.visibility="visible";
for(let r=0;r<9;r++)
{
    for(let c=0;c<9;c++)
    {
        if(board[r][c]!=0)
        {
          let tile=document.getElementById(r.toString()+"-"+c.toString());
          if(board[r][c]=="-")
          {
            tile.style.color="red";
            tile.innerText=solution[r][c];
      }
      else
      {
           
          tile.innerText=solution[r][c];
          tile.classList.add("tile1");
      }
        }

    }
}
if(a!=null)
a.classList.remove("number-selected");
}
e.addEventListener("click",q);
m.addEventListener("click",qq);
h.addEventListener("click",qqq);
n.addEventListener("click",qqqq);
s.addEventListener("click",qqqqq);