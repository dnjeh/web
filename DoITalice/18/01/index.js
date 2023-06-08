//아래에 코드를 작성해 주세요.

const H1 = document.querySelector("h1");
const BOX = document.querySelector(".box");

const className = H1.getAttribute("class");

alert(className);

BOX.setAttribute("style", "color:red");