window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const subtitle = document.querySelector('.subheading');
    const sections = document.querySelectorAll('.column');
    const fadeStartSubtitle = 0; // Subtitle fades immediately
    const fadeEndSubtitle = 100; // Fully faded at scrollY = 100
    const fadeStartSections = 725; // Sections start fading at 700
    const fadeEndSections = 750; // Sections fully fade out at 1000
    const delayFactor = 275; // Delay between each section's animation

    const artMusings = document.querySelector('#section4'); // Select "art + musings 🎨"
    const artFadeStart = fadeStartSections + 200; // Start later for this section
    const artFadeEnd = fadeEndSections + 200; // End later for this section

    const scrollY = window.scrollY;

    // Adjust header position
    if (scrollY > 100) {
        header.style.top = '10%';
        header.style.transform = 'translate(-50%, 0)';
    } else {
        header.style.top = '50%';
        header.style.transform = 'translate(-50%, -50%)';
    }

    // Fade out subtitle
    subtitle.style.opacity = Math.max(0, 1 - (scrollY - fadeStartSubtitle) / (fadeEndSubtitle - fadeStartSubtitle));

    // Animate sections
    sections.forEach((section, index) => {
        const delayOffset = index * delayFactor; // Add delay for each section
        const start = fadeStartSections + delayOffset;
        const end = fadeEndSections + delayOffset;

        // Apply different timing for "art + musings 🎨"
        if (section === artMusings) {
            if (scrollY > artFadeStart && scrollY < artFadeEnd) {
                const opacity = 1 - (scrollY - artFadeStart) / (artFadeEnd - artFadeStart);
                section.style.opacity = opacity;
                section.style.transform = `translateY(${(1 - opacity) * 20}px)`; // Subtle travel effect
            } else if (scrollY <= artFadeStart) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
            }
        } else {
            if (scrollY > start && scrollY < end) {
                const opacity = 1 - (scrollY - start) / (end - start);
                section.style.opacity = opacity;
                section.style.transform = `translateY(${(1 - opacity) * 20}px)`; // Subtle travel effect
            } else if (scrollY <= start) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
            }
        }
    });
});
</script>
</body>
</html>
