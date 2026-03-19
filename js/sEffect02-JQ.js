//버튼이동하기 - 자연스럽게
$(".dot ul li").click(function (e) {
  e.preventDefault(); //#의 기능 차단
  let target = $(this);
  let index = target.index();
  let section = $(".content_item").eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop: offset }, 600);
});

// 스크롤
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  //   if (scrollTop >= $("#section1").offset().top - 2) {
  //     $(".dot ul li").eq(0).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section2").offset().top - 2) {
  //     $(".dot ul li").eq(1).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section3").offset().top - 2) {
  //     $(".dot ul li").eq(2).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section4").offset().top - 2) {
  //     $(".dot ul li").eq(3).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section5").offset().top - 2) {
  //     $(".dot ul li").eq(4).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section6").offset().top - 2) {
  //     $(".dot ul li").eq(5).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section7").offset().top - 2) {
  //     $(".dot ul li").eq(6).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section8").offset().top - 2) {
  //     $(".dot ul li").eq(7).addClass("active").siblings().removeClass("active");
  //   }
  //   if (scrollTop >= $("#section9").offset().top - 2) {
  //     $(".dot ul li").eq(8).addClass("active").siblings().removeClass("active");
  //   }

  //for문
  //   for (let i = 0; i <= 8; i++) {
  //     if (scrollTop >= $(".content_item").eq(i).offset().top - 2) {
  //       $(".dot ul li").eq(i).addClass("active").siblings().removeClass("active");
  //     }
  //   }

  //each()
  $(".content_item").each(function (index) {
    if (scrollTop >= $(".content_item").eq(index).offset().top - 2) {
      $(".dot ul li").eq(index).addClass("active").siblings().removeClass("active");
    }
  });
  //출력
  $(".scroll span").text(parseInt(scrollTop));

  $(".offset1").text(parseInt($("#section1").offset().top) + "px");
  $(".offset2").text(parseInt($("#section2").offset().top) + "px");
  $(".offset3").text(parseInt($("#section3").offset().top) + "px");
  $(".offset4").text(parseInt($("#section4").offset().top) + "px");
  $(".offset5").text(parseInt($("#section5").offset().top) + "px");
  $(".offset6").text(parseInt($("#section6").offset().top) + "px");
  $(".offset7").text(parseInt($("#section7").offset().top) + "px");
  $(".offset8").text(parseInt($("#section8").offset().top) + "px");
  $(".offset9").text(parseInt($("#section9").offset().top) + "px");
});
