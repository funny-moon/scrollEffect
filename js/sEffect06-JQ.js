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
  let scrollTop = $(window).scrollTop();

  //scrollTop값 - 섹션별 ossfetset().top  =0

  //   let offset1 = scrollTop - $("#section1").offset().top;
  //   let offset2 = scrollTop - $("#section2").offset().top;
  //   let offset3 = scrollTop - $("#section3").offset().top;
  //   let offset4 = scrollTop - $("#section4").offset().top;
  //   let offset5 = scrollTop - $("#section5").offset().top;
  //   let offset6 = scrollTop - $("#section6").offset().top;
  //   let offset7 = scrollTop - $("#section7").offset().top;
  //   let offset8 = scrollTop - $("#section8").offset().top;
  //   let offset9 = scrollTop - $("#section9").offset().top;

  //   $("#section1").css({ transform: "translateX(" + offset1 + "px)" });
  //   $("#section2").css({ transform: "translateX(" + offset2 + "px)" });
  //   $("#section3").css({ transform: "translateX(" + offset3 + "px)" });
  //   $("#section4").css({ transform: "translateX(" + offset4 + "px)" });
  //   $("#section5").css({ transform: "translateX(" + offset5 + "px)" });
  //   $("#section6").css({ transform: "translateX(" + offset6 + "px)" });
  //   $("#section7").css({ transform: "translateX(" + offset7 + "px)" });
  //   $("#section8").css({ transform: "translateX(" + offset8 + "px)" });
  //   $("#section9").css({ transform: "translateX(" + offset9 + "px)" });

  // for

  //   for (let i = 1; i <= 9; i++) {
  //     let offset = scrollTop - $("#section" + i).offset().top;
  //     $("#section" + i).css({ transform: "translateX(" + offset + "px)" });
  //   }

  each;
  $(".content_item").each(function (i) {
    let offset = (scrollTop - $(this).offset().top) * 0.2;
    let offset2 = (scrollTop - $(this).offset().top) * 0.1;

    $(this)
      .find(".content_item_img")
      .css({ transform: "translateY(" + offset + "px)" });

    $(this)
      .find(".content_item_desc")
      .css({ transform: "translateY(" + offset2 + "px)" });
    $(this)
      .find(".content_item_city")
      .css({ transform: "translateY(" + offset2 + "px)" });
  });

  // 출력
  $(".scroll span").text(parseInt(scrollTop));
});
