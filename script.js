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

    // Fade out subtitle
    subtitle.style.opacity = Math.max(0, 1 - scrollY / 100);

    // Fade out profile image
    profileImage.style.opacity = Math.max(0, 1 - scrollY / 100);

    // Animate sections
    sections.forEach((section, index) => {
        const delay = index * 300;
        const start = 770 + delay;
        const end = 790 + delay;

        if (scrollY > start && scrollY < end) {
            const opacity = 1 - (scrollY - start) / (end - start);
            section.style.opacity = opacity;
            section.style.transform = `translateY(${(1 - opacity) * 20}px)`;
        } else if (scrollY <= start) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
        }
    });
});
