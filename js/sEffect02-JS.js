//버튼 이동하기
// document.querySelectorAll(".dot ul li a").forEach(function (elem) {});

document.querySelectorAll(".dot ul li a").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

//스크롤
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  //   if (scrollTop >= document.getElementById("section1").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(1)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section2").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(2)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section3").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(3)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section4").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(4)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section5").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(5)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section6").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(6)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section7").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(7)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section8").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(8)").classList.add("active");
  //   }
  //   if (scrollTop >= document.getElementById("section9").offsetTop) {
  //     document.querySelectorAll(".dot ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".dot ul li:nth-child(9)").classList.add("active");
  //   }

  // for
  //   for (let i = 1; i <= 9; i++) {
  //     if (scrollTop >= document.getElementById("section" + i).offsetTop - 2) {
  //       document.querySelectorAll(".dot ul li").forEach((li) => {
  //         li.classList.remove("active");
  //       });
  //   document.querySelector(".dot ul li:nth-child(" + i + ")").classList.add("active");
  //     }
  //   }

  //forEach
  document.querySelectorAll(".content_item").forEach((elem, index) => {
    if (scrollTop >= elem.offsetTop) {
      document.querySelectorAll(".dot ul li").forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(".dot ul li:nth-child(" + (index + 1) + ")").classList.add("active");
    }
  });

  //출력
  document.querySelector(".scroll span").innerText = parseInt(scrollTop);

  for (let i = 1; i <= 9; i++) {
    document.querySelector(".offset" + i).innerText = parseInt(document.getElementById("section" + i).offsetTop) + "px";
  }

  //   document.querySelector(".offset1").innerText = parseInt(document.getElementById("section1").offsetTop) + "px";
  //   document.querySelector(".offset2").innerText = parseInt(document.getElementById("section2").offsetTop) + "px";
  //   document.querySelector(".offset3").innerText = parseInt(document.getElementById("section3").offsetTop) + "px";
  //   document.querySelector(".offset4").innerText = parseInt(document.getElementById("section4").offsetTop) + "px";
  //   document.querySelector(".offset5").innerText = parseInt(document.getElementById("section5").offsetTop) + "px";
  //   document.querySelector(".offset6").innerText = parseInt(document.getElementById("section6").offsetTop) + "px";
  //   document.querySelector(".offset7").innerText = parseInt(document.getElementById("section7").offsetTop) + "px";
  //   document.querySelector(".offset8").innerText = parseInt(document.getElementById("section8").offsetTop) + "px";
  //   document.querySelector(".offset9").innerText = parseInt(document.getElementById("section9").offsetTop) + "px";
});
