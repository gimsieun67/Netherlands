const content = "Welcome to Netherlands!";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 350);

const exits = document.querySelectorAll(".exit");
const clickm1 = document.querySelector(".clickm1");
const clickm2 = document.querySelector(".clickm2");
const clickm3 = document.querySelector(".clickm3");
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const m3 = document.querySelector(".m3");

clickm1.addEventListener("click", () => toggleDisplay(m1, [m2, m3]));
clickm2.addEventListener("click", () => toggleDisplay(m2, [m1, m3]));
clickm3.addEventListener("click", () => toggleDisplay(m3, [m1, m2]));

// 토글 함수 생성
function toggleDisplay(showElement, hideElements) {
  showElement.style.display = "block";
  hideElements.forEach((element) => {
    element.style.display = "none";
  });
}

// 닫기 버튼 이벤트 설정
exits.forEach((exit) => {
  exit.addEventListener("click", () => {
    m1.style.display = "none";
    m2.style.display = "none";
    m3.style.display = "none";
  });
});

document.getElementById("send").addEventListener("click", function () {
  const nameField = document.getElementById("name");
  const titleField = document.getElementById("title");
  const contentField = document.getElementById("content");
  const imageInput = document.getElementById("image");

  // 필드 값 가져오기
  const name = nameField ? nameField.value : "";
  const title = titleField ? titleField.value : "";
  const content = contentField ? contentField.value : "";
  const imageFile = imageInput ? imageInput.files[0] : null;

  // 디버깅 로그
  console.log("Name:", name);
  console.log("Title:", title);
  console.log("Content:", content);
  console.log("Image File:", imageFile);

  // 필드가 비어 있는지 확인
  if (!name || !title || !content || !imageFile) {
    alert("모든 필드를 입력하세요.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    // div 생성하여 gallery에 추가
    const gallery = document.getElementById("gallery");
    const newDiv = document.createElement("div");
    newDiv.classList.add("preview");

    // 이미지 추가
    const img = document.createElement("img");
    img.src = e.target.result;
    img.width = 100;
    img.height = 100;
    newDiv.appendChild(img);

    // 클릭 이벤트 추가 (모달 창으로 표시)
    newDiv.addEventListener("click", function () {
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-name").textContent = "이름: " + name;
      document.getElementById("modal-content").textContent = "내용: " + content;
      document.getElementById("modal-image").src = e.target.result;
      document.getElementById("myModal").style.display = "block";
    });

    gallery.appendChild(newDiv);
  };

  // 파일을 로드하여 갤러리에 이미지 추가
  reader.readAsDataURL(imageFile);

  // 폼 초기화
  nameField.value = "";
  titleField.value = "";
  contentField.value = "";
  imageInput.value = "";
});
