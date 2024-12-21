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

    // Fade and scale lines into view
    sections.forEach((section) => {
        const lines = section.querySelectorAll('p'); // Assume lines are wrapped in <p> tags
        lines.forEach((line) => {
            const lineTop = line.offsetTop + section.offsetTop; // Account for section offset
            const start = lineTop - 790;
            const end = start + 20; // Adjust for how long you want the fade to last

            if (scrollY >= start && scrollY <= end) {
                const progress = (scrollY - start) / (end - start);
                line.style.opacity = 0.5 + progress * 0.5; // Opacity changes from 0.5 to 1
                line.style.transform = `translateY(${10 - progress * 10}px)`; // Add a smooth translation effect
            } else if (scrollY < start) {
                line.style.opacity = 0.5;
                line.style.transform = 'translateY(10px)';
            } else {
                line.style.opacity = 1;
                line.style.transform = 'translateY(0)';
            }
        });
    });
});
