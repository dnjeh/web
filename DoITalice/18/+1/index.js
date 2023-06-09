// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
  const openBtn = $('.open');
  const closeBtn = $('.close');
  const modal = $('.modal');
  openBtn.on('click', function () {
    modal.addClass('Open');
  });
  closeBtn.on('click', function () {
    modal.removeClass('Open');
  });
});
