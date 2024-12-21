window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');

    const scrollY = window.scrollY;

    // Adjust header position
    if (scrollY > 100) {
        header.style.top = '10%';
        header.style.transform = 'translate(-50%, 0)';
    } else {
        header.style.top = '50%';
        header.style.transform = 'translate(-50%, -50%)';
    }

    // Scale and fade sections into view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Start and end positions based on the section's position
        const start = sectionTop - 790; // Section begins to fade at this scroll position
        const end = start + sectionHeight;

        if (scrollY >= start && scrollY <= end) {
            const progress = (scrollY - start) / (end - start);
            section.style.transform = `scale(${0.8 + progress * 0.2})`;
            section.style.opacity = 0.5 + progress * 0.5; // Opacity changes from 0.5 to 1
        } else if (scrollY < start) {
            section.style.transform = 'scale(0.8)';
            section.style.opacity = 0.5;
        } else {
            section.style.transform = 'scale(1)';
            section.style.opacity = 1;
        }
    });
});
