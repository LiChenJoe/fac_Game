let dog = document.querySelector(".dogCharacterDiv");
let score = 0;
let scoreText= document.querySelector("h2");
let box = document.querySelector(".boxDiv");
let boxTwo = document.querySelector(".boxDivTwo");
let bone = document.querySelector(".boneDiv");
let boneTwo = document.querySelector(".boneDivTwo");
let rock = document.querySelector(".rockDiv");
let rockTwo = document.querySelector(".rockDivTwo");
let rockThree = document.querySelector(".rockDivThree");
let gameOver = document.querySelector(".gameOver");
let congratulation = document.querySelector(".congratulation");
let reStart = document.querySelector("button");
let position = { x: 0 };
let windowWidth =window.innerWidth;
console.log(windowWidth);
let boxOnePosition = box.getBoundingClientRect().left;
let boxTwoPosition = boxTwo.getBoundingClientRect().left;
let rockPosition = rock.getBoundingClientRect().left;
let rockTwoPosition = rockTwo.getBoundingClientRect().left;
let rockThreePosition = rockThree.getBoundingClientRect().left;
scoreText.innerText+=score;
function jump() {
    dog.style.bottom = '30%';
    setTimeout(() => {
        dog.style.bottom = '50px';
      }, 500);
  }

  function stoneJump() {
    dog.style.bottom = '30%';
    setTimeout(() => {
        dog.style.bottom = '65px';
      }, 1000);
  }
  

  function boneJump() {
    bone.style.display = 'block';
    setTimeout(() => {
      bone.style.display = 'none';
      score+=10;
      scoreText.innerText=`score:${score}`;
    }, 500);
  }

  function boneTwoJump() {
    boneTwo.style.display = 'block';
    setTimeout(() => {
      boneTwo.style.display = 'none';
        score+=10;
        scoreText.innerText=`score:${score}`;
    }, 500);
  }


  function die() {
    dog.style.display = 'block';
    gameOver.style.display= 'none'
    setTimeout(() => {
      dog.style.display = 'none'
      gameOver.style.display= 'flex'
    }, 500);
  }

  function win() {
    dog.style.display = 'block';
    congratulation.style.display= 'none'
    setTimeout(() => {
      dog.style.display = 'none'
      congratulation.style.display= 'flex'
    }, 500);
  }

document.addEventListener("keydown", (e)=> {
    console.log((position.x+90)>=rockTwoPosition&&rockTwoPosition>=position.x, dog.style.bottom=="50px"||dog.style.bottom=="");
    if ((((position.x+90)>=rockPosition&&position.x<=rockPosition)||((position.x+90)>=rockTwoPosition&&rockTwoPosition>=position.x)||((position.x+90)>=rockThreePosition&&rockThreePosition>=position.x))&& (dog.style.bottom=="50px"||dog.style.bottom=="")){
        die();
            } 
  if (e.keyCode == 37 || e.keyCode == 39) {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        position.x -= 10;
        break;
      case 39:
        if (position.x <=(windowWidth-200)){    
            console.log(position.x);    
            position.x += 10;
        } else {
            win();
            break;
        }
    }
    dog.style.transform = `translate(${position.x}px)`;
    if ((((position.x+90)<=rockPosition||position.x>=rockPosition)||((position.x+90)<=rockTwoPosition||rockTwoPosition<=position.x)||((position.x+90)<=rockThreePosition||rockThreePosition<=position.x)) &&dog.style.bottom>"50px"){
        dog.style.bottom="50px"
            }
    }
    if (e.keyCode==38 && ((position.x+80)>=boxOnePosition&&boxOnePosition>=position.x-30) && score<50){
        boneJump();
        } else if (e.keyCode==38 && ((position.x+80)>=boxTwoPosition&&boxTwoPosition>=position.x-30)&& score<90){
            boneTwoJump();
            } else {
                scoreText.innerText=`score:${score}`;
            }
    if (e.keyCode==38){
    if (((position.x+110)>=rockPosition&&position.x<=rockPosition)||((position.x+110)>=rockTwoPosition&&rockTwoPosition>=position.x)||((position.x+90)>=rockThreePosition&&rockThreePosition>=position.x)){
        console.log("stoneJump")
        stoneJump();
            } else {
                jump();
            
            }

        } 
});

reStart.addEventListener("click", ()=>{
    console.log("stop");
    location.reload();
})






