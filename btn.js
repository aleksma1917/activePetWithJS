var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  


  buttonMove.onclick = function(){
    let timer=setInterval(function(){
        x=x-30
        buttonMove.style.left=x/5+"px";
        if(x>3000)clearInterval(timer)
    },25);
}

let r = i => Math.random()*(i||1);
setInterval(function() {

  let star = document.createElement('div');
  document.body.append(star)
  let s = star.style;
  
  s.width = `${11+r(11)}px`
  s.height = `${11+r(7)}px`
  s.backgroundColor = `hsl(${r(360)},${25+r(50)}%,${25+r(50)}%)`
  s.position = `absolute`
  s.transition = `${1+r(3)}s cubic-bezier(${r()},${r()},${r()},${r()}) ` 
  s.left = `${120+r(window.innerWidth-240)}px`
  s.top = `-30px`
  
  setTimeout(a => {
    s.top = `${130+r(30)}px`;
    s.transform = `rotate(${r(2000)-1000}deg)`
    s.backgroundColor = `hsl(${r(360)},${25+r(50)}%,${25+r(50)}%)`
    s.transform = `translate(${r(200)-100}px) rotate(${r(1000)-500}deg)`
  }, 100)
  
  setTimeout(a => s.backgroundColor = `hsl(${r(360)},${25+r(50)}%,${25+r(50)}%)`, r(500) + 100)
  setTimeout(a => s.opacity = 0, 6000);
  setTimeout(a => star.remove(), 9000);
  
}, 200)

