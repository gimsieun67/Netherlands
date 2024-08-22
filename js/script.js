const content = "Welcome to Holland!";
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

exits.forEach(exit => {
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
        var preview = new FileReader();
        preview.onload = function (e) {
        // img id 값 
          const newImg = document.createElement("img");
          newImg.id = "user_image";
          newImg.src = e.target.result;
          put.append(newImg);
    };
    // input id 값 
  preview.readAsDataURL(document.getElementById("user_profile_img").files[0]);
};