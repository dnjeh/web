// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
  const menu = $('.menu');
  const wrap = $('#wrap');
  menu.click(function () {
    wrap.toggleClass('close');
  });
});
