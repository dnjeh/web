// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
  const menuList = $('.menu li');
  const boxList = $('#box ul li');

  menuList.on('click', function () {
    menuList.removeClass('Act');
    boxList.removeClass('On');

    const i = $(this).index();
    menuList.eq(i).addClass('Act');
    boxList.eq(i).addClass('On');
  });
});
