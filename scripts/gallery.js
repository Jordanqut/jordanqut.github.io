document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");


    if (imageFiles.length === 0) {
        galleryContainer.innerHTML = "<p>No images found.</p>";
        return;
    }

    imageFiles.forEach(imageSrc => {
        let imgElement = document.createElement("div");
        imgElement.classList.add("gallery-item");
        imgElement.innerHTML = `<img src="${imageSrc}" alt="Gallery Image">`;
        galleryContainer.appendChild(imgElement);
    });
});
