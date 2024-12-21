window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');

    const scrollY = window.scrollY;

    // Adjust header position
    if (scrollY > 100) {
        header.style.top = '10%';
        header.style.transform = 'translate(-50%, 0)';
        header.style.opacity = '0.8'; // Optional: add fade effect for the header
        header.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    } else {
        header.style.top = '50%';
        header.style.transform = 'translate(-50%, -50%)';
        header.style.opacity = '1';
    }

    // Fade and scale lines into view
    sections.forEach((section) => {
        const lines = section.querySelectorAll('p'); // Assume lines are wrapped in <p> tags
        lines.forEach((line) => {
            const lineTop = line.getBoundingClientRect().top + window.scrollY; // Line's position relative to the document
            const start = lineTop - 790; // Start fading in before it enters view
            const end = start + 200; // Adjust this for the duration of the fade effect

            if (scrollY >= start && scrollY <= end) {
                const progress = (scrollY - start) / (end - start);
                line.style.opacity = 0.5 + progress * 0.5; // Opacity changes from 0.5 to 1
                line.style.transform = `translateY(${10 - progress * 10}px)`; // Smooth translation from 10px to 0px
                line.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; // Smooth animation
            } else if (scrollY < start) {
                line.style.opacity = '0.5';
                line.style.transform = 'translateY(10px)';
            } else {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }
        });
    });
});
