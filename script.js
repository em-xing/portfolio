// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    const subheading = document.querySelector(".subheading");
    const scrollThreshold = 100; // Adjust threshold for fading the subtitle

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Subtitle fades out as you scroll
        if (scrollY > scrollThreshold) {
            subheading.style.opacity = Math.max(1 - (scrollY - scrollThreshold) / 100, 0); // Gradual fade
        } else {
            subheading.style.opacity = 1; // Reset opacity when at the top
        }
    });
});
