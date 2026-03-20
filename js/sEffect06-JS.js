//버튼을 클릭해서 이동하고 애니메이션 주기
document.querySelectorAll(".nav ul li a").forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

function scrollProcess() {
  let scrollTop = window.scrollY;

  //   let scroll1 = scrollTop - document.querySelector("#section1").offsetTop;
  //   let scroll2 = scrollTop - document.querySelector("#section2").offsetTop;
  //   let scroll3 = scrollTop - document.querySelector("#section3").offsetTop;
  //   let scroll4 = scrollTop - document.querySelector("#section4").offsetTop;

  //   document.querySelector("#section1").style.transform = "translateX(" + scroll1 + "px)";
  //   document.querySelector("#section2").style.transform = "translateX(" + scroll2 + "px)";
  //   document.querySelector("#section3").style.transform = "translateX(" + scroll3 + "px)";
  //   document.querySelector("#section3").style.transform = "translateX(" + scroll4 + "px)";

  //for
  //   for (let i = 1; i <= 9; i++) {
  //     let scroll = scrollTop - document.querySelector("#section" + i).offsetTop;
  //     document.querySelector("#section" + i).style.transform = "translateX(" + scroll + "px)";
  //   }

  let contenItem = document.querySelectorAll(".content_item");
  contenItem.forEach((item) => {
    let scroll = (scrollTop - item.offsetTop) * 0.2;
    let scroll2 = (scrollTop - item.offsetTop) * 0.1;

    item.querySelector(".content_item_img").style.transform = "translateY(" + scroll + "px)";
    item.querySelector(".content_item_desc").style.transform = "translateY(" + -scroll2 + "px)";
    item.querySelector(".content_item_city").style.transform = "translateY(" + -scroll2 + "px)";
  });

  //메뉴
  let contentItem = document.querySelectorAll(".content_item");
  let navLi = document.querySelectorAll(" .nav ul li");

  contentItem.forEach((item, idx) => {
    if (scrollTop >= item.offsetTop - 2) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(".nav ul li:nth-child(" + (idx + 1) + ")").classList.add("active");
    }
  });

  //출력용
  document.querySelector(".scroll span").innerText = scrollTop;
}

window.addEventListener("scroll", scrollProcess);
