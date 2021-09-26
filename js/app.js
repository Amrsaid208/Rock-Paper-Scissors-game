const rulesBtn=document.querySelector(".rules");
const rules=document.querySelector(".rul");
const close=document.querySelector(".cross");
const overlay=document.querySelector('.overlay');


rulesBtn.addEventListener('click',function(){
    rules.classList.toggle("hide");
    overlay.classList.toggle('hide');
    close.addEventListener('click',function(){
        close.style.cursor="pointer";
        overlay.classList.add('hide');
        rules.classList.add("hide");
    });
});



function pl(){
    const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const sci=document.querySelector(".sci");
const choose = document.querySelector(".choose");
const  rs = document.querySelector(".result");
const selcOne = document.querySelector(".selc-1");
const selcTwo = document.querySelector(".selc-2");
const wit = document.querySelector(".middle h2");
const play = document.querySelector(".playAgain");
const pcscore=document.querySelector(".pcscore h3");
const myscore=document.querySelector(".myscore h3");


var player;
var pc;
var turn =true;
let myscr=0;
let pcscr=0;
    const choices=[rock,paper,sci];
    choices.forEach(choice=>{
        choice.addEventListener('click',function(){
            let ans;
            
            player=choice.getAttribute('data');
            turn=false;
            let i=getRandomInt(3);
            pc=choices[i].getAttribute('data');
            console.log(pc);
            // it is tie
            if(pc==player) {ans="Tie";}
            // you win
            else if ((player=="rock" && pc=="sci") || (player=="paper" && pc=="rock")||(player=="sci" && pc=="paper") ){ans="you win";myscr++;}
            else { ans="You Lose";pcscr++;}
                selcOne.innerHTML = `<img src="images/icon-${player}.svg" alt="">`
                let ss =  player ; 
                selcOne.classList.add(ss);
                choose.classList.add("hide");
                rs.classList.remove("hide");
               
                selcTwo.style.backgroundColor="transparent";
                let sc=pc;
                setTimeout(function(){ 
                    selcTwo.style.backgroundColor="white";
                    selcTwo.innerHTML = `<img src="images/icon-${pc}.svg" alt="">`
                    // sc =  pc ; 
                    selcTwo.classList.add(sc);
                    wit.innerText=ans;
                    myscore.innerText=myscr;
                    pcscore.innerText=pcscr;
                }, 1000);
                
                play.addEventListener('click', function(){
                    choose.classList.remove('hide');
                    rs.classList.add('hide');
                    selcTwo.innerHTML=` `;
                    selcOne.innerHTML=` `;
                    selcOne.classList.remove(ss);
                    selcTwo.classList.remove(sc);
                    turn =true;
                    wit.innerText=" "; 
        
    });
    
    
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  pl();