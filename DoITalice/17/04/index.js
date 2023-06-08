// 아래에 코드를 작성해 주세요.

$(document).ready(function () {
    const LIST = $('ul li');
    const BOX = $('.box');
  
    LIST.eq(1).css({ 'background-color': 'yellow' });
    LIST.eq(2).css({ 
      'background-color': 'purple',
      color: 'white',
    });
    BOX.siblings("li").css({ border: "dashed purple 1px" });
  });
  