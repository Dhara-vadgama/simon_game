let gameSeq=[];
let userSeq=[];
let boxes=["box-1","box-2","box-3","box-4"];

let start=false;
let level=0;

let h3=document.querySelector("h3");
let box=document.querySelectorAll(".box");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game start");
        start=true;

        levelUp();
    }
});


function btnFlash(btn){
    btn.classList.toggle("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}

function levelUp(){
    userSeq = [];
    console.log(userSeq);
    level++;
    
    h3.innerText=`level ${level}`;
  let random=Math.floor(Math.random()*3);
  let randomBox=boxes[random];
 
  let randomBtn=document.querySelector(`.${randomBox}`);
//   console.log(random);
//   console.log(randomBox);
//   console.log(randomBtn);
 gameSeq.push(randomBox);
 console.log(gameSeq);
  btnFlash(randomBtn);
  
};

// function high(){
//     console.log(level);
//     let arr=[level];
//     console.log(arr);
// }



function checkAns(idx){

   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length===gameSeq.length){
        setTimeout(levelUp,1000);
      };

   }else{
    // high();
    h3.innerHTML=`game over,your score was <b>${level}</b><br>press any key to start again`;

    
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}



function btnPress() {
    
   let btn=this;
   btnFlash(btn);

   userBox= btn.getAttribute("id");
   userSeq.push(userBox);
   
   checkAns(userSeq.length-1);
};

let allBtn=document. querySelectorAll(".box");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
};


function reset(){
  
    start=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}