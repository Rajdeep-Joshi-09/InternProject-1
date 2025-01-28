const prev = document.querySelector(".icons .prev");
const next = document.querySelector(".icons .next");
const iDiv = document.getElementById("imgesDiv");

const backgrounds = [
  "./assets/af1.avif",
  "./assets/af2.avif",
  "./assets/af3.avif",
];
let currentIndex = 0;

function updateBackground() {
  iDiv.innerHTML = `
    <img
          src="${backgrounds[currentIndex]}"
          class="h-full w-full object-cover"
          alt="Hero Image"
        />
    `;
}

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  console.log("button clicked prev, ", currentIndex);
  updateBackground();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  console.log("button clicked next, ", currentIndex);
  updateBackground();
});

updateBackground();

const changeImage = document.getElementById("changeImage");
const changeName = document.getElementById("changeName");
const prevBtn = document.querySelector(".buttons .prevBtn");
const nextBtn = document.querySelector(".buttons .nextBtn");

let currentItem = 0;

function getData() {
  fetch("MOCK.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      updateDisplay(data);

      prevBtn.addEventListener("click", () => {
        currentItem = (currentItem - 1 + data.length) % data.length;
        updateDisplay(data);
        console.log("data prev clicked");
      });

      nextBtn.addEventListener("click", () => {
        currentItem = (currentItem + 1) % data.length;
        updateDisplay(data);
        console.log("data next clicked");
      });
    })
    .catch((error) => console.error(error));
}

function updateDisplay(data) {
  changeImage.innerHTML = `
    <img
      src="${data[currentItem].image}"
      class="h-full w-full object-cover"
      alt="${data[currentItem].name}"
    />
  `;
  changeName.innerHTML = `
    <p class="text-[#00715D] text-sm">${data[currentItem].role}</p>
    <p class="text-[#D9A86A] font-medium text-xl">${data[currentItem].name}</p>
  `;
}

getData();
