const clickBtn = document.querySelector(".footer-share-light");
const shareMedia = document.querySelector(".share-content");
const returnBtn = document.querySelector(".footer-share-dark");

clickBtn.addEventListener("click", () => {
  shareMedia.classList.toggle("active");
});

returnBtn.addEventListener("click", () => {
  if (shareMedia.classList.contains("active")) {
    shareMedia.classList.remove("active");
  }
});
