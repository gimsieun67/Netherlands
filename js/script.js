const content = "Welcome to Netherlands!";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  if (i < content.length) {
    // Ensure it types until the end of content
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br>" : txt;
  } else {
    text.innerHTML = ""; // Clear the text after it finishes typing
    i = 0; // Reset index
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

function toggleDisplay(showElement, hideElements) {
  showElement.style.display = "block";
  hideElements.forEach((element) => {
    element.style.display = "none";
  });
}

exits.forEach((exit) => {
  exit.addEventListener("click", () => {
    m1.style.display = "none";
    m2.style.display = "none";
    m3.style.display = "none";
  });
});

document.getElementById("send").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value; // Use a different variable name to avoid conflict
  const imageInput = document.getElementById("image");
  const imageFile = imageInput.files[0];

  if (!imageFile) {
    console.error("Image input or file not found");
    alert("Please select an image before submitting!");
    return;
  }

  if (name && title && content && imageFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const newImage = document.createElement("img");
      newImage.src = e.target.result;
      newImage.classList.add("gallery-img");
      newImage.style.maxWidth = "150px";

      const gallery = document.getElementById("gallery");
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.appendChild(newImage);
      gallery.appendChild(galleryItem);

      newImage.addEventListener("click", function () {
        const modal = document.getElementById("myModal");
        const modalTitle = document.getElementById("modal-title");
        const modalName = document.getElementById("modal-name");
        const modalContent = document.getElementById("modal-content");
        const modalImage = document.getElementById("modal-image");

        modalTitle.textContent = title;
        modalName.textContent = name;
        modalContent.textContent = content;
        modalImage.src = e.target.result;

        modal.style.display = "block";
      });
    };

    reader.readAsDataURL(imageFile);
  } else {
    alert("Please fill out all fields before submitting!");
  }
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});
