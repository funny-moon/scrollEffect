//버튼을 클릭해서 이동하고 애네메이션 주기
$(".nav ul li").click(function (e) {
  e.preventDefault(); //#의 기본 기능을 차단
  let target = $(this); // 사용자가 클릭한 버튼의 타겟을 저장
  let index = target.index(); //인덱스를 부여하여 저장
  let section = $(".content_item").eq(index); // eq-인덱스
  let offset = section.offset().top;
  $("html,body").animate({ scrollTop: offset }, 600);
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop() + $(window).height() / 2;

  //   if (scrollTop > $("#section1").offset().top) {
  //     $("#section1").addClass("show");
  //   }

  //   if (scrollTop > $("#section2").offset().top) {
  //     $("#section2").addClass("show");
  //   }
  //   if (scrollTop > $("#section3").offset().top) {
  //     $("#section3").addClass("show");
  //   }
  //   if (scrollTop > $("#section4").offset().top) {
  //     $("#section4").addClass("show");
  //   }

  // for
  //   for (let i = 1; i <= 9; i++) {
  //     if (scrollTop > $("#section" + i).offset().top) {
  //       $("#section" + i).addClass("show");
  //     }
  //   }
  $(".content_item").each(function (index) {
    if (scrollTop > $(this).offset().top) {
      $(this).addClass("show");

      $(".nav ul li").eq(index).addClass("active").siblings().removeClass("active");
    }
  });

  //출력
  $(".scroll span").text(parseInt(scrollTop));
});
