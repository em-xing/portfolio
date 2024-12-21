window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const subtitle = document.querySelector('.subheading');
    const profileImage = document.querySelector('.profile-image');
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

    // Scale sections into view
    sections.forEach((section, index) => {
        const delay = index * 300;
        const start = 770 + delay;
        const end = 970 + delay;

        if (scrollY > start && scrollY < end) {
            const progress = (scrollY - start) / (end - start);
            section.style.transform = `scale(${0.8 + progress * 0.2})`;
            section.style.opacity = 1;
        } else if (scrollY <= start) {
            section.style.transform = 'scale(0.8)';
            section.style.opacity = 0.5;
        } else {
            section.style.transform = 'scale(1)';
            section.style.opacity = 1;
        }
    });
});
