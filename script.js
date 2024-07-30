document.addEventListener("DOMContentLoaded", () => {
  const imageElement = document.querySelector(".changeable-image");
  const luckyButton = document.querySelector(".lucky-button");

  const defaultImage = "images/google-logo.png";
  const luckyImage = "images/oddity.jpeg";

  luckyButton.addEventListener("click", () => {
    imageElement.src = imageElement.src.endsWith(defaultImage)
      ? luckyImage
      : defaultImage;
  });
});
