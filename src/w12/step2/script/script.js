console.log("안녕하세요?");
// 챗지피티는 var 라고 함 var를 보면 다 let로 바꾸면 됨
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8 0.05 0)";

let aCard = document.querySelector(".card");
console.log(aCard);
//html엘레먼트.addEventListener('이벤트종류', function () {할일});
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.style.backgroundColor = "#ff0000";
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
});

// document.querySelectorAll(".card");
