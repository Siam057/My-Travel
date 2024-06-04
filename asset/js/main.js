

let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.nabvar')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active');
}


// card slider

var slider = document.getElementById('slider');
var upArrow = document.getElementById('upArrow');
var downArrow = document.getElementById('downArrow');

let x = 0 ;

upArrow.onclick = function(){
  if(x > "-900"){
    x = x - 300;
    slider.style.top = x + "px";
  }
}

downArrow.onclick = function(){
  if(x < 0){
    x = x + 300;
    slider.style.top = x + "px";
  }
}