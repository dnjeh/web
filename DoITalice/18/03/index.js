// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
});
$(window).on('scroll', function () {
  const BOX = $('.box');
  // 수행 동작 정의
  let i = $(this).scrollTop();
  console.log(i);
  if (i > 600) {
    BOX.css({ opacity: 1 });
  } else {
    BOX.css({ opacity: 0 });
  }
});
