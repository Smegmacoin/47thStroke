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
        particles: 150,
        traceLength: 3,
        flickering: 50,
        intensity: 40,
        explosion: 8,
        hue: { min: 0, max: 360 },
    });

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
    const clickMeter = document.getElementById("clickMeter");

    if (isCooldown) return; // Prevent action during cooldown
    isCooldown = true;

    // Increment the click count
    clickCount++;

    // Update the click meter
    clickMeter.textContent = `Clicks: ${clickCount}`;

    // Action: Move Trump forward and backward
    trump.style.transform = "translateX(20px) scale(1.1)";

    // Reset animations after 200 milliseconds (shorter cooldown)
    setTimeout(() => {
        trump.style.transform = "translateX(0) scale(1)";
        isCooldown = false; // Allow the next click
    }, 200);

    // Play audio and launch fireworks on the 47th click
    if (clickCount === 47) {
        console.log("47th click reached! Playing audio and launching fireworks.");
        audio.play();
        launchFireworks();
    }
});