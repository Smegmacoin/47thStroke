let clickCount = 0;
let isCooldown = false; // Prevent spamming

// Create an audio object
const audio = new Audio('audio.mp3'); // Replace with your GitHub audio file URL

// Handle click button event
document.getElementById("clickButton").addEventListener("click", () => {
    const trump = document.getElementById("trump");
    const kamala = document.getElementById("kamala");
    const clickMeter = document.getElementById("clickMeter");

    if (isCooldown) return; // Prevent action during cooldown
    isCooldown = true;

    // Increment the click count
    clickCount++;

    // Update the click meter
    clickMeter.textContent = `Clicks: ${clickCount}`;

    // Action: Move images forward and backward
    trump.style.transform = "translateX(15px) scale(1.05)";
    kamala.style.transform = "translateX(-15px) scale(0.95)";

    // Reset animations after 300 milliseconds
    setTimeout(() => {
        trump.style.transform = "translateX(0) scale(1)";
        kamala.style.transform = "translateX(0) scale(1)";
        isCooldown = false; // Allow the next click
    }, 300);

    // Play audio on the 47th click
    if (clickCount === 47) {
        audio.play(); // Play the audio file
    }
});