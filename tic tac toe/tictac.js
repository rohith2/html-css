var players = ['Rohith','Eajaaz'];
var markers = ['X','0'];
var whoplays = 0;
var wins = [7,56,73,84,146,273,292,448];
var score = [0,0];
var govr = false;

function play(clickked,point)
{
    if(!govr){
    if(clickked.innerHTML == ' ')
    {
        count(point);
    clickked.innerHTML = '<span>'+markers[whoplays]+'</span>';
    whowon();
    toggle();
    }
}
}

function toggle(){
    if(whoplays == 0){
        whoplays = 1;
    }
    
    else{
        whoplays = 0;
    }

    document.getElementById('h2').innerText = players[whoplays] + 's Turn'; 
}

function count(val){
    score[whoplays] += val;
}

function whowon(){

    for(var i=0;i<wins.length;i++){
        if((wins[i] & score[whoplays])== wins[i]){
            govr = true;
            alert(players[whoplays] +' wins!');
        }
    }
    if(((score[0]+score[1])==511) && !govr){
        alert('Its a Draw');
    }
}



var divt = document.createElement('div');
document.body.appendChild(divt);
divt.setAttribute('class','board');

var tit = document.createElement('h2');
divt.appendChild(tit);
tit.setAttribute('id','h2');
tit.innerHTML = 'Tic Tac Toe Between Rohith and Eajaaz';



//----------------------------------------------------------------

var divr1 = document.createElement('div');
divt.appendChild(divr1);
divr1.setAttribute('id','row1');

var divc = document.createElement('div');
divr1.appendChild(divc);
divc.setAttribute('onclick','play(this,1)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr1.appendChild(divc);
divc.setAttribute('onclick','play(this,2)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr1.appendChild(divc);
divc.setAttribute('onclick','play(this,4)');
divc.innerHTML = ' ';


//--------------------------------------------------------------------------------

var divr2 = document.createElement('div');
divt.appendChild(divr2);
divr2.setAttribute('id','row2');

var divc = document.createElement('div');
divr2.appendChild(divc);
divc.setAttribute('onclick','play(this,8)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr2.appendChild(divc);
divc.setAttribute('onclick','play(this,16)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr2.appendChild(divc);
divc.setAttribute('onclick','play(this,32)');
divc.innerHTML = ' ';

//---------------------------------------------------------------------------------------------

var divr3 = document.createElement('div');
divt.appendChild(divr3);
divr3.setAttribute('id','row3');

var divc = document.createElement('div');
divr3.appendChild(divc);
divc.setAttribute('onclick','play(this,64)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr3.appendChild(divc);
divc.setAttribute('onclick','play(this,128)');
divc.innerHTML = ' ';

var divc = document.createElement('div');
divr3.appendChild(divc);
divc.innerHTML = ' ';
divc.setAttribute('onclick','play(this,256)');



//--------------------------------------------------------------------------------------------------


