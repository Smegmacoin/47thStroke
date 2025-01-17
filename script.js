let clickCount = 0;
let isCooldown = false; // Prevent spamming

// Create an audio object
const audio = new Audio('audio.mp3'); // Replace with your GitHub audio file URL

// Fireworks effect function
function launchFireworks() {
    const container = document.getElementById("fireworks-container");
    if (!container) {
        console.error("Fireworks container not found!");
        return;
    }
    const fireworks = new Fireworks(container, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 100, // Set particles to match container size
        traceLength: 3,
        flickering: 50,
        intensity: 30,
        explosion: 5,
        hue: { min: 0, max: 360 },
    });

    // Start fireworks effect
    fireworks.start();

    // Stop fireworks after 5 seconds
    setTimeout(() => {
        fireworks.stop();
    }, 5000);
}

// Prevent double-click zoom
document.addEventListener("dblclick", (event) => {
    event.preventDefault(); // Stop default double-click behavior
});

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
    trump.style.transform = "translateX(20px) scale(1.1)";
    kamala.style.transform = "translateX(-20px) scale(0.9)";

    // Reset animations after 200 milliseconds (shorter cooldown)
    setTimeout(() => {
        trump.style.transform = "translateX(0) scale(1)";
        kamala.style.transform = "translateX(0) scale(1)";
        isCooldown = false; // Allow the next click
    }, 200);

    // Play audio and launch fireworks on the 47th click
    if (clickCount === 47) {
        audio.play(); // Play the audio file
        launchFireworks(); // Trigger fireworks
    }
});