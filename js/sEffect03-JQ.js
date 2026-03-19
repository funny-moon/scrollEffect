//버튼이동하기 - 자연스럽게
$(".nav ul li").click(function (e) {
  e.preventDefault(); //#의 기능 차단
  let target = $(this);
  let index = target.index();
  let section = $(".content_item").eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop: offset }, 600);
});

//스크롤 효과
$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();

  //   if (scrollTop > 0) {
  //     $(".nav").addClass("show");
  //   } else {
  //     $(".nav").removeClass("show");
  //   }

  //삼항연산자
  // 조건 ? true : false
  scrollTop > 0 ? $(".nav").addClass("show") : $(".nav").removeClass("show");

  //   if (scrollTop > 0) $(".nav").addClass("show");
  //   else {
  //     $(".nav").removeClass("show");
  //   }

  //버튼

  $(".content_item").each(function (index) {
    if (scrollTop >= $(".content_item").eq(index).offset().top) {
      $(".nav ul li").eq(index).addClass("active").siblings().removeClass("active");
    }
  });

  //   출력
  $(".scroll span").text(parseInt(scrollTop));
});
