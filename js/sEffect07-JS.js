// 한글자씩 쪼개기
document.querySelectorAll(".content_item_desc").forEach(function (elem) {
  let text = elem.innerText;
  let split = text.split("").join("</span><span>");
  elem.innerHTML = "<span>" + split + "</span>";
});

let conItem = document.querySelectorAll(".content_item");
let span = document.querySelectorAll(".content_item_desc span");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY + window.innerHeight / 2;

  conItem.forEach(function (item) {
    if (scrollTop >= item.offsetTop) {
      span.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("show");
        }, 50 * idx);
      });
    }
  });
});
