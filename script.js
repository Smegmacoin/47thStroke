document.getElementById("actionButton").addEventListener("click", () => {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    // Dynamic behavior for the first image
    image1.style.transform = "rotate(360deg) scale(1.2)";
    image1.style.opacity = "0.8";

    // Dynamic behavior for the second image
    image2.style.transform = "scale(1.5)";
    image2.style.opacity = "1";

    // Reset after 3 seconds
    setTimeout(() => {
        image1.style.transform = "rotate(0deg) scale(1)";
        image1.style.opacity = "1";

        image2.style.transform = "scale(1)";
        image2.style.opacity = "0.8";
    }, 3000);
});
