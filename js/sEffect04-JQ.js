//버튼을 클릭해서 이동하고 애네메이션 주기
$(".nav ul li").click(function (e) {
  e.preventDefault(); //#의 기본 기능을 차단
  let target = $(this); // 사용자가 클릭한 버튼의 타겟을 저장
  let index = target.index(); //인덱스를 부여하여 저장
  let section = $(".content_item").eq(index); // eq-인덱스
  let offset = section.offset().top;
  $("html,body").animate({ scrollTop: offset }, 600);
});

//현재 scrollTop  > 이전 scrollTop  -> 내려가는 중
//현재 scrollTop  < 이전 scrollTop  -> 올라가는 중

let lastScrollTop = 0;
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > lastScrollTop) {
    $(".nav").addClass("hide"); //내려감
  } else {
    $(".nav").removeClass("hide"); // 올라감
  }
  console.log("scrollTop :" + scrollTop);
  console.log("lastScrollTop :" + lastScrollTop);

  lastScrollTop = scrollTop; // 현재의 scrollTop값을 이전의 scrollTop값에 대입한다

  //출력용
  $(".scroll span").text(parseInt(scrollTop));

  //메뉴
  $(".content_item").each((index) => {
    if (scrollTop >= $(".content_item").eq(index).offset().top - 2) {
      $(".nav ul li").eq(index).addClass("active").siblings().removeClass("active");
    }
  });
});
