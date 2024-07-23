function openOverlay(imageSrc) {
    const overlayImage = document.getElementById("overlayImage");
    const overlayImg = document.getElementById("overlayImg");

    // Set the image source of the overlay to the clicked image's source
    overlayImg.src = imageSrc;

    // Display the overlay
    overlayImage.style.display = "block";

    // Prevent scrolling of the background content when the overlay is open
    document.body.style.overflow = "hidden";
  }

  function closeOverlay() {
    const overlayImage = document.getElementById("overlayImage");

    // Hide the overlay
    overlayImage.style.display = "none";

    // Allow scrolling of the background content when the overlay is closed
    document.body.style.overflow = "auto";
  }

  // Add a click event listener to the overlay to close it when clicked outside the image
  const overlayImage = document.getElementById("overlayImage");
  overlayImage.addEventListener("click", function (event) {
    if (event.target === overlayImage) {
      closeOverlay();
    }
  });