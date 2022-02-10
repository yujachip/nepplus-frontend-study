var heading = document.querySelector("#heading");
// 변수 : document = html문서 / document의 속성중에서 querySelector(뒤에 괄호가 붙으면 동작을 의미, 실행한다는 의미=함수)
heading.onclick = function () {
  heading.style.color = "red";
};
