var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-0').textContent='0';
//var x=document.getElementsByClassName("dice")[0].style.display="none"

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice =Math.floor(Math.random()*6)+1
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        nextPlayer();
    }
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer]+=roundScore
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]
    nextPlayer()
})
function nextPlayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0
        roundScore=0
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');document.querySelector('.dice').style.display='none'; 
}