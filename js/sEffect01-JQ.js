//버튼을 클릭해서 이동하고 애네메이션 주기
$(".nav ul li").click(function (e) {
  e.preventDefault(); //#의 기본 기능을 차단
  let target = $(this); // 사용자가 클릭한 버튼의 타겟을 저장
  let index = target.index(); //인덱스를 부여하여 저장
  let section = $(".content_item").eq(index); // eq-인덱스
  let offset = section.offset().top;
  $("html,body").animate({ scrollTop: offset }, 600);
});

//스크롤이 됐을 때
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= $("#section1").offset().top - 2) {
    $(".nav ul li").eq(0).addClass("active").siblings().removeClass("active");
  }

  if (scrollTop >= $("#section2").offset().top - 2) {
    $(".nav ul li").eq(1).addClass("active").siblings().removeClass("active");
  }

  if (scrollTop >= $("#section3").offset().top - 2) {
    $(".nav ul li").eq(2).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section4").offset().top - 2) {
    $(".nav ul li").eq(3).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section5").offset().top - 2) {
    $(".nav ul li").eq(4).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section6").offset().top - 2) {
    $(".nav ul li").eq(5).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section7").offset().top - 2) {
    $(".nav ul li").eq(6).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section8").offset().top - 2) {
    $(".nav ul li").eq(7).addClass("active").siblings().removeClass("active");
  }
  if (scrollTop >= $("#section9").offset().top - 2) {
    $(".nav ul li").eq(8).addClass("active").siblings().removeClass("active");
  }

  //info 출력
  //parseInt() : 문자열을 정수로 변경
  $(".scroll span").text(parseInt(scrollTop)); //브라우저의 스크롤의 값을 텍스트로 표시

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
