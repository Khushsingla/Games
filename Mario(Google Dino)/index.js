 Score=0;
 cross=true;
 //audio=new Audio("a.mp3");
 //audiogo=new Audio("b.mp3");
document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    if(e.keyCode==38)
    {
     dino=document.querySelector(".dino");
       dino.classList.add('animatedino');
       setTimeout(() => {
        dino.classList.remove('animatedino');
       }, 1200);
    }
     if(e.keyCode==39)
    {
        dino=document.querySelector(".dino");
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+142+"px";
    }
     if(e.keyCode==37)
    {
        dino=document.querySelector(".dino");
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox-142)+"px";
    }
 //   if(e.keyCode==32)
 //   {
 //       setTimeout(() => {
 //           audio.play();
 //       }, 100); 
 //   }

})

setInterval(() => {
     dino=document.querySelector(".dino");
    gameover=document.querySelector(".gameover");
    obstacle=document.querySelector(".obstacle");

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    diffx=Math.abs(ox-dx);
    diffy=Math.abs(oy-dy);


    if(diffx<100  && diffy<90)
    {
        gameover.style.visibility="visible";
        gameover.innerHTML="GAME OVER <br> YOUR SCORE IS : "+Score;
        obstacle.classList.remove("obstaclesani");
        score.style.visibility="hidden";
        dino=document.querySelector(".dino");
        dino.style.left=112+"px";
       // audio.pause();
      
    //  setTimeout(() => {
    //   audiogo.play();
    //   
    //  }, 1000)
    //  audiogo.pause();
    //
    }
    else if(diffx<155 && cross)
    {
        Score+=1;
        update(Score);
        cross=false;
        setTimeout(()=>
        {cross=true;
        },1000);
      setTimeout(() => {
          ani=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
          newdur=ani-0.05;
          obstacle.style.animationDuration=newdur+'s';
      }, 800);
      
      
      
    }
     
}, 100);

function update(Score)
{
    score.innerHTML="YOUR SCORE : "+Score;
}

let rstbtn=document.querySelector(".f");
let newbtn=document.querySelector(".new");
console.dir(newbtn);

const resetgame = () =>
{
    if(diffx>100  && diffy>90)
    {
        obstacle=document.querySelector(".obstacle");
        obstacle.classList.remove("obstaclesani");
    }
    gameover.style.visibility="hidden";
    obstacle=document.querySelector(".obstacle");
    obstacle.style.right=-190+"px";    
        obstacle.classList.add("obstaclesani");
//obstacle.classList.add("obstaclesani");
obstacle.style.animationDuration=5+'s';
    dino=document.querySelector(".dino");
    dino.style.left=112+"px";
    
    
    score.style.visibility="visible";
    update(0);
    Score=0;
   // audio.play();
}

newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);

document.addEventListener("keydown",(e)=>{
    if(e.keyCode==13)
    {
        setTimeout(() => {
            resetgame(); 
        }, 100);
       
    }
   //if(e.keyCode==32)
   //{
   //    
   //    obstacle.classList.remove("obstaclesani");
   //}
})



