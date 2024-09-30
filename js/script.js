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

clickm1.addEventListener("click", () => {
  m1.style.display = "block";
  m2.style.display = "none";
  m3.style.display = "none";
});
clickm2.addEventListener("click", () => {
  m1.style.display = "none";
  m2.style.display = "block";
  m3.style.display = "none";
});
clickm3.addEventListener("click", () => {
  m1.style.display = "none";
  m2.style.display = "none";
  m3.style.display = "block";
});

exits.forEach((exit) => {
  exit.addEventListener("click", () => {
    m1.style.display = "none";
    m2.style.display = "none";
    m3.style.display = "none";
  });
});

const putclick = document.querySelector(".send-btn");
const put = document.querySelector(".putImg");

function PreviewImage() {
  // 파일리더 생성
  let preview = new FileReader();
  preview.onload = function (e) {
    const existingImg = document.getElementById("user_image");
    if (existingImg) {
      existingImg.remove();
    }
    const newImg = document.createElement("img");
    newImg.id = "user_image";
    newImg.src = e.target.result;
    put.append(newImg);
  };
  // input id 값
  preview.readAsDataURL(document.getElementById("user_profile_img").files[0]);
}

putclick.addEventListener("click", () => {});

document.getElementById("send").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("image").files[0];

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

  reader.readAsDataURL(imageFile);

  // 폼 초기화
  document.getElementById("name").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("image").value = "";
});

// 모달 닫기
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
