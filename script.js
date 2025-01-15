let clickCount = 0;
let isCooldown = false; // Prevent spamming

// Handle title click event
document.getElementById("clickableTitle").addEventListener("click", () => {
    const trump = document.getElementById("trump");
    const kamala = document.getElementById("kamala");
    const clickMeter = document.getElementById("clickMeter");
    const generatedLink = document.getElementById("generatedLink");

    if (isCooldown) return; // Prevent action during cooldown
    isCooldown = true;

    // Increment the click count
    clickCount++;

    // Update the click meter
    clickMeter.textContent = `Clicks: ${clickCount}`;

    // Action: Move images forward and backward
    trump.style.transform = "translateX(20px) scale(1.1)";
    kamala.style.transform = "translateX(-20px) scale(0.9)";

    // Reset animations after 0.5 seconds
    setTimeout(() => {
        trump.style.transform = "translateX(0) scale(1)";
        kamala.style.transform = "translateX(0) scale(1)";
        isCooldown = false; // Allow next click
    }, 500);

    // Check if the click count reaches 47
    if (clickCount === 47) {
        generatedLink.style.display = "block"; // Show the link
    }
});