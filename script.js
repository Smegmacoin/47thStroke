document.getElementById("clickableTitle").addEventListener("click", () => {
    const trump = document.getElementById("trump");
    const kamala = document.getElementById("kamala");

    // Dynamic behavior for Trump image
    trump.style.transform = "rotate(360deg) scale(1.2)";
    trump.style.opacity = "0.8";

    // Dynamic behavior for Kamala image
    kamala.style.transform = "scale(1.5)";
    kamala.style.opacity = "1";

    // Reset after 3 seconds
    setTimeout(() => {
        trump.style.transform = "rotate(0deg) scale(1)";
        trump.style.opacity = "1";

        kamala.style.transform = "scale(1)";
        kamala.style.opacity = "0.8";
    }, 3000);
});