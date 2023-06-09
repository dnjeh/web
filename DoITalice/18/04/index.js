// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
    const openBtn = $('.open');
    const closeBtn = $('.close');
    const content = $('.content');
  });
  const openBtn = $('.open');
  const closeBtn = $('.close');
  const content = $('.content');
  openBtn.on('click', function () {
    content.fadeIn();
  });
  closeBtn.on('click', function () {
    content.fadeOut();
  });
  