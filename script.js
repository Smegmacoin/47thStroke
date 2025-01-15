let clickCount = 0;

// Handle title click event
document.getElementById("clickableTitle").addEventListener("click", () => {
    const trump = document.getElementById("trump");
    const kamala = document.getElementById("kamala");
    const clickMeter = document.getElementById("clickMeter");
    const generatedLink = document.getElementById("generatedLink");

    // Increment the click count
    clickCount++;

    // Update the click meter
    clickMeter.textContent = `Clicks: ${clickCount}`;

    // Dynamic behavior for Trump image
    trump.style.transform = "rotate(360deg) scale(1.2)";
    trump.style.opacity = "0.8";

    // Dynamic behavior for Kamala image
    kamala.style.transform = "scale(1.5)";
    kamala.style.opacity = "1";

    // Reset animations after 3 seconds
    setTimeout(() => {
        trump.style.transform = "rotate(0deg) scale(1)";
        trump.style.opacity = "1";

        kamala.style.transform = "scale(1)";
        kamala.style.opacity = "0.8";
    }, 3000);

    // Check if the click count reaches 47
    if (clickCount === 47) {
        generatedLink.style.display = "block";
    }
});