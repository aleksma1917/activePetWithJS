const heading = document.getElementById("hello");
//const heading2 = document.getElementsByTagName("h2" )[0]
//const heading2 = document.getElementsByClassName('h2-class')
const heading2 = document.querySelector("h2");
console.log(heading2);

setTimeout(() => {
  addStylesTo(heading, "JavaScript");
}, 1500);

setTimeout(() => {
  addStylesTo(heading2, "Практикуйся", "green");
}, 3000);

setTimeout(() => {
  addStylesTo(heading3, "И все получится!", "blue", "2rem");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.marginLeft = "15rem";
  node.style.marginRight = "15rem";
  node.style.margintop = "10px";
  node.style.borderRadius = "15px";
  //falsy - пустая строка, андфаинд, фолс
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

const h2list = document.querySelectorAll("h2");
const heading3 = h2list[1];

heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "#000";
    heading.style.backgroundColor = "#fff";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "#000";
  }
};

heading2.addEventListener('dblclick',()=>{
    if (heading2.style.color === "green") {
        heading2.style.color = "#000";
        heading2.style.backgroundColor = "#fff";
      } else {
        heading2.style.color = "green";
        heading2.style.backgroundColor = "#000";
      }
})
