//버튼을 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// 스크롤 효과
let nav = document.querySelector(".nav");
let contentItem = document.querySelectorAll(".content_item");
let navLi = document.querySelectorAll(".nav ul li");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  //   if (scrollTop > 0) {
  //     nav.classList.add("show");
  //   } else {
  //     nav.classList.remove("show");
  //   }

  scrollTop > 0 ? nav.classList.add("show") : nav.classList.remove("show");

  //버튼
  //   if (scrollTop >= document.querySelector("#section2").offsetTop) {
  //     document.querySelector(".nav ul li:nth-child(2)").classList.add("active");
  //   }

  contentItem.forEach((item, index) => {
    if (scrollTop >= item.offsetTop - 2) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(".nav ul li:nth-child(" + (index + 1) + ")").classList.add("active");
    }
  });

  document.querySelector(".scroll span").innerText = scrollTop;
});
