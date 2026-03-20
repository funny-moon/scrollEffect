//버튼을 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });

  //스크롤 이벤트

  let lastScrollTop = 0; // 스크롤탑값 초기화
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY + window.innerHeight / 2;
    let scrollTop2 = window.scrollY;

    // 0px 이상 스크롤 다운 - 메뉴 보이기 / 0px까지 스크롤 업 - 메뉴 가리기  (꼭 css부터 수정해 놓기)
    // if (scrollTop2 > 0) {
    //   document.querySelector(".nav").classList.add("down");
    // } else {
    //   document.querySelector(".nav").classList.remove("down");
    // }

    // 스크롤 다운 - 메뉴 가리기 / 스크롤  업- 메뉴 보이기  (css부터 수정해 놓기)
    if (scrollTop2 > lastScrollTop) {
      document.querySelector(".nav").classList.add("hide");
    } else {
      document.querySelector(".nav").classList.remove("hide");
    }
    lastScrollTop = scrollTop2;

    // content_item들 애니메이션
    document.querySelectorAll(".content_item").forEach((item, index) => {
      if (scrollTop >= item.offsetTop) {
        item.classList.add("show");

        //메뉴선택
        document.querySelectorAll(".nav ul li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".nav ul li:nth-child(" + (index + 1) + ")").classList.add("active");
      }
      //   else {
      //     item.classList.remove("show");
      //   }
    });
  });
});
