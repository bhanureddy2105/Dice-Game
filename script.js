var randNumber1=Math.floor((Math.random()*6)+1);
var randDiceImage1="dice"+randNumber1+".png";
var source1="images/"+randDiceImage1;
document.querySelector(".left").setAttribute("src",source1);

var randNumber2=Math.floor((Math.random()*6)+1);
var randDiceImage2="dice"+randNumber2+".png";
var source2="images/"+randDiceImage2;
document.querySelector(".right").setAttribute("src",source2);

if(randNumber1==randNumber2){
    document.querySelector("h1").innerText="Draw";
}
else if(randNumber1>randNumber2){
    document.querySelector("h1").innerText="🏆Player 1 Wins";
}
else{
    document.querySelector("h1").innerText="Player 2 Wins🏆";
}

if(screen.width<='768'){  
    var button=document.querySelector('.btn');
    button.classList.add('btn-sm');
}

document.querySelector('.btn').addEventListener('click',function(){
    document.location.reload();
})
