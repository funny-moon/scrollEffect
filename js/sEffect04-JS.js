//버튼을 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

let nav = document.querySelector(".nav");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  //   console.log("현재scrollTop 값 - " + scrollTop);
  //   console.log("이전scrollTop 값 - " + lastScrollTop);

  lastScrollTop = scrollTop;

  //메뉴
  let contentItem = document.querySelectorAll(".content_item");
  let navLi = document.querySelectorAll(" .nav ul li");

  contentItem.forEach((item, idx) => {
    if (scrollTop >= item.offsetTop) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(".nav ul li:nth-child(" + (idx + 1) + ")").classList.add("active");
    }
  });

  //출력용
  document.querySelector(".scroll span").innerText = scrollTop;
});
