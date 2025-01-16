document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll("#photos img");

  photos.forEach((photo) => {
    photo.addEventListener("mouseover", () => {
      photos.forEach((otherPhoto) => {
        if (otherPhoto !== photo) {
          otherPhoto.style.filter = "blur(3px)";
        }
      });
    });

    photo.addEventListener("mouseout", () => {
      photos.forEach((otherPhoto) => {
        otherPhoto.style.filter = "";
      });
    });
  });
});
