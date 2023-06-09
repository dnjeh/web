// 아래에 코드를 작성해 주세요.

$(document).ready(function () {});

const H1 = $("h1");
const BOX = $(".box");

const className = H1.attr("class");
alert(className);

BOX.attr("style", "color:red");