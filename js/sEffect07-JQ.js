// 한글자씩 쪼개기
$(".content_item_desc").each(function () {
  let text = $(this).text();
  let split = text.split("").join("</span><span>");
  $(this).html("<span>" + split + "</span>");
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  //전체 글자 나타나기
  //   $(".content_item").each(function () {
  //     if (scrollTop >= $(this).offset().top) {
  //       $(this).find(".content_item_desc").addClass("show");
  //     }
  //   });

  //한글자씩 나타나기

  //   if (scrollTop >= $("#section1").offset().top) {
  //     $("#section1 .content_item_desc span").each(function (index) {
  //       setTimeout(function () {
  //         $("#section1 .content_item_desc span").eq(index).addClass("show");
  //       }, 50 * index);
  //     });
  //   }
  //   if (scrollTop >= $("#section2").offset().top) {
  //     $("#section2 .content_item_desc span").each(function (index) {
  //       setTimeout(function () {
  //         $("#section2 .content_item_desc span").eq(index).addClass("show");
  //       }, 50 * index);
  //     });
  //   }

  //for
  //   for (let i = 1; i <= 9; i++) {
  //     if (scrollTop >= $("#section" + i).offset().top) {
  //       $("#section" + i + " .content_item_desc span").each(function (index) {
  //         setTimeout(function () {
  //           $("#section" + i + " .content_item_desc span")
  //             .eq(index)
  //             .addClass("show");
  //         }, 50 * index);
  //       });
  //     }
  //   }

  //each

  $(".content_item").each(function () {
    if (scrollTop >= $(this).offset().top) {
      $(this)
        .find(".content_item_desc span")
        .each(function (index) {
          setTimeout(() => {
            $(this).addClass("show");
          }, 50 * index);
        });
    }
  });
});

// setTimeout(function () {
//   console.log("3초 후에 실행");
// }, 3000);

// setInterval(function () {
//   console.log("3초마다 실행");
// }, 3000);
