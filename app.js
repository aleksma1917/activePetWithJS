const button = document.querySelector(".bubbly-button");

//салют и шторки
document.querySelector(".bubbly-button").onclick = function () {
  var animateButton = function (e) {
    e.preventDefault;
    e.target.classList.remove("animate");
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 1500);
    console.log("функция e");
  };
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
    console.log("функция 1");
  }

  doors(1)
};

function doors (){
  document.querySelector(".bubbly-button").onclick = function () {
    let pos = 0;
    let intervalId;
    button.addEventListener("click", startAnimation);

    function startAnimation() {
      clearInterval(intervalId);
      pos = 150;
      intervalId =setInterval(move, 20);
      console.log("функция start left");
    }
    function move() {
      const elem = document.getElementById("left");
      pos += 1;
      elem.style.left = pos + "px";
      if (pos >= 500) {
        clearInterval(intervalId);
        console.log("Конец left");
      }
    }
    };
   console.log("left door");

    let pos = 0;
    let intervalId;
    button.addEventListener("click", startAnimation);

    function startAnimation() {
      clearInterval(intervalId);
      pos = 150;
      intervalId = setInterval(move, 20);
      console.log("функция start right");
    }
    function move() {
      const elem = document.getElementById("right");
      pos += 1;
      elem.style.right = pos + "px";
      if (pos >= 500) {
        clearInterval(intervalId);
        console.log("конец right");
      }
    }
  
  console.log("right door");
}
 