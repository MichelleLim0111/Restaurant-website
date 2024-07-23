const imageUrls = [ "CafeImage1.jpg", "CafeImage2.jpg", "CafeImage3.jpg", "CafeImage4.jpg"];

const imageElement = document.getElementById("Cafe-Image1");

let currentImageIndex = 0;
let intervalId;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  imageElement.src = imageUrls[currentImageIndex];
}

document.querySelector(".image-frame").addEventListener("mouseover", function () {
  intervalId = setInterval(changeImage, 2000); // Change image every 5 seconds (5000 milliseconds)
});

document.querySelector(".image-frame").addEventListener("mouseout", function () {
  clearInterval(intervalId); // Clear the interval when mouse leaves
  imageElement.src = imageUrls[0]; // Reset the image to the first one when mouse leaves
});
