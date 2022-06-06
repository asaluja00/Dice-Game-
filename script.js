'use strict';
// Declaration Of Scores
const score1= document.getElementById('score--0');
const score2= document.getElementById('score--1');
let curr1= document.getElementById('current--0');
let curr2= document.getElementById('current--1');
let dice = document.querySelector('.dice');
let score=0;
let currentplayer=0;
const btnRoll= document.querySelector('.btn--roll');
const btnNew= document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');


// initializing variables 
score1.textContent=0
score2.textContent=0;
dice.classList.add('hidden');

//rolling  a dice ;
btnRoll.addEventListener('click',function(){
    let randomnumber=(Math.trunc(Math.random()*6)+1);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomnumber}.png`;
    if(randomnumber!==1){
        score=score+randomnumber;
        document.getElementById(`current--${currentplayer}`).textContent=score;
    }
    else{
        score=0;
        document.getElementById(`current--${currentplayer}`).textContent=score;
        document.querySelector(`.player--${currentplayer}`).classList.remove('player--active')
        currentplayer= (currentplayer===0)?1:0;
        document.querySelector(`.player--${currentplayer}`).classList.add('player--active')
    }
})
let socre_1=0;
let score_2=0;
btnHold.addEventListener('click',function(){
    if(currentplayer==1){
        socre_1=socre_1+score;
        score=0;
        document.getElementById(`current--${currentplayer}`).textContent=score;
        document.getElementById(`score--${currentplayer}`).textContent=socre_1;
        document.querySelector(`.player--${currentplayer}`).classList.remove('player--active')
        currentplayer= (currentplayer===0)?1:0;
        document.querySelector(`.player--${currentplayer}`).classList.add('player--active')
    }
    else{
        score_2=score_2+score;
        score=0;
        document.getElementById(`current--${currentplayer}`).textContent=score;
        document.getElementById(`score--${currentplayer}`).textContent=score_2;
        document.querySelector(`.player--${currentplayer}`).classList.remove('player--active')
        currentplayer= (currentplayer===0)?1:0;
        document.querySelector(`.player--${currentplayer}`).classList.add('player--active')
    }
    if(socre_1>=100){
        alert("Player2 Wins");
    }
    if(score_2>=100){
        alert("Player1 Wins");
    }
   
})
