var easybutton = document.getElementById('easy');
var hardbutton = document.getElementById('hard');
var newgame = document.getElementById('new');
var top = document.getElementById('topbar');
var but = document.getElementsByClassName('but');
var cuadros = document.getElementsByClassName('cuadros')
var info = document.getElementById('info');
var rgbT= document.getElementById('RGB');
var flag= Math.round(5* Math.random());
var hard=true;
var finish=false;
var color = "rgb(" + "227" + "," + "227" + "," + "227" + ")";;
//var wcol;
newgame.addEventListener('click',function(){
  newG();
  but[0].style.backgroundColor=document.getElementById('topbar').style.backgroundColor;
  for (var i = 0; i < but.length; i++) {
    if (i!=0) {
      but[i].style.color=document.getElementById('topbar').style.backgroundColor;
    }
  }
});
easybutton.addEventListener('click',function(){
  setEasy();
  but[1].style.backgroundColor=document.getElementById('topbar').style.backgroundColor;
  for (var i = 0; i < but.length; i++) {
    if (i!=1) {
      but[i].style.color=document.getElementById('topbar').style.backgroundColor;
    }
  }
});
hardbutton.addEventListener('click',function(){
  setHard();
  but[2].style.backgroundColor=document.getElementById('topbar').style.backgroundColor;
  for (var i = 0; i < but.length; i++) {
    if (i!=2) {
      but[i].style.color=document.getElementById('topbar').style.backgroundColor;
    }
  }
});

newgame.addEventListener('mouseover',hoverF);
easybutton.addEventListener('mouseover',hoverF);
hardbutton.addEventListener('mouseover',hoverF);
newgame.addEventListener('mouseout',outF);
easybutton.addEventListener('mouseout',outF);
hardbutton.addEventListener('mouseout',outF);

document.addEventListener('DOMContentLoaded',newG);
document.body.style.backgroundColor=color;

for (var i = 0; i < but.length; i++) {
  but[i].style.transition= 'all .2s ease';
}

for (var i = 0; i < cuadros.length; i++) {
  cuadros[i].addEventListener('click',function(){
    //console.log(cuadros[i].style.backgroundColor);
    if(this.style.backgroundColor==rgbT.textContent){
      info.textContent=('WINNER');
      changeColor();
      colorNav();
      if(hard){
      for (var i = 0; i < cuadros.length; i++) {
        cuadros[i].style.border='solid 2px black';
        cuadros[i].style.boxShadow='0 0 5px black';
      }
      }
    }else {
      info.textContent=('ALMOST');
      this.style.backgroundColor=color;
      this.style.border='none';
      this.style.boxShadow='none';
    }
  } );
}
function changeColor(){
  document.getElementById('topbar').style.backgroundColor=rgbT.textContent;
  document.getElementById('bar').style.color=rgbT.textContent;
  if (hard) {
    for (var i = 0; i < cuadros.length; i++) {
      cuadros[i].style.backgroundColor=rgbT.textContent;
      cuadros[i].style.boxShadow='0 0 5px black';
        cuadros[i].style.border='solid 2px black';
    }
  }else{
    for (var i = 0; i < 3; i++) {
      cuadros[i].style.backgroundColor=rgbT.textContent;
      cuadros[i].style.boxShadow='0 0 5px black';
        cuadros[i].style.border='solid 2px black';
    }
  }

}


function deleteBorder(x){
  x.style.transition="all .5s";
  x.style.border="none";
}

//NEW GAME

function newG(){
  finish=false;
  if (hard==true) {
    flag= Math.round(5* Math.random());
  } else {
    flag= Math.round(2* Math.random());
  }
  colorSet();

  newgame.addEventListener('mouseover',hoverF);
  newgame.addEventListener('mouseout',outF);

  info.textContent=('Enjoy');
  rgbT.textContent = cuadros[flag].style.backgroundColor;
  document.getElementById('topbar').style.backgroundColor='rgb(76,76,250)';
  document.getElementById('bar').style.color='rgb(76,76,250)';
}


function colorNav(){
    var c= document.getElementById('topbar').style.backgroundColor;
  for (var i = 0; i < but.length; i++) {
    but[i].style.color=c;
  }
}

function colorSet() {
    if (hard==false) {
        for (var i = 0; i < 3; i++) {
          cuadros[i].style.backgroundColor=random();
          cuadros[i].style.border="2px solid rgba(0,0,0,1)";
          cuadros[i].style.boxShadow= '0 0 5px black';
        }
        for (var i = 3; i < cuadros.length; i++) {
          cuadros[i].style.backgroundColor=color;
          cuadros[i].style.border="none";
          cuadros[i].style.boxShadow='none';
        }
      }
        else {
          for (var i = 0; i < 6; i++) {
            cuadros[i].style.backgroundColor=random();
            cuadros[i].style.transition = "all .5s";
            cuadros[i].style.border="2px solid rgba(0,0,0,1)";
            cuadros[i].style.boxShadow= '0 0 5px black';
          }
        }
    }

function random() {
  var r= Math.round(255* Math.random());
  var g= Math.round(255* Math.random());
  var b= Math.round(255* Math.random());
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}

function setEasy(){
  if (hard!=false) {
    hard = false;
    newG();
  } else {
    info.innerHTML = ('Already easy');
  }
}
function setHard(){
  if (hard!=true) {
    hard = true;
    newG();
  } else {
    info.innerHTML = ('Already hard');
  }
}

function hoverF(){
  var c= document.getElementById('topbar').style.backgroundColor;
  this.style.color='rgb(255,255,255)';
  this.style.backgroundColor=c;

}
function outF(){
  var c= document.getElementById('topbar').style.backgroundColor;
  this.style.color=c;
  this.style.backgroundColor='rgb(255,255,255)';

}


/*for (var i = 0; i < cuadros.length; i++) {
  if (i==flag) {
    cuadros[i].addEventListener('click',winner);
  } else{
    cuadros[i].addEventListener('click',loser);
  }

}

/*function winner() {
  if(finish==false){
  info.innerHTML = 'WINNER';
  finish = true;
} else{
  //no changes as the game is over
}
}

function loser() {
  if(finish==false){
  info.innerHTML = 'Fail';
} else{
  //no changes as the game is over
}
}
*/
