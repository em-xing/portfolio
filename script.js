window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');
    const profileImage = document.querySelector('.profile-image');
    const subheading = document.querySelector('.subheading');

    const scrollY = window.scrollY;

    // Adjust header position
    if (scrollY > 100) {
        header.style.top = '10%';
        header.style.transform = 'translate(-50%, 0)';
        header.style.opacity = '0.8';
    } else {
        header.style.top = '50%';
        header.style.transform = 'translate(-50%, -50%)';
        header.style.opacity = '1';
    }

    // Hide profile image and subheading on scroll
    if (scrollY > 100) {
        profileImage.style.opacity = '0';
        subheading.style.opacity = '0';
        subheading.style.transition = 'opacity 0.5s ease';
        profileImage.style.transition = 'opacity 0.5s ease';
    } else {
        profileImage.style.opacity = '1';
        subheading.style.opacity = '1';
    }

    // Staggered fade in and fade out for sections
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.style.opacity = '1';
            section.style.transition = `opacity 0.5s ease ${index * 0.2}s`;
        } else {
            section.style.opacity = '0';
            section.style.transition = `opacity 0.5s ease ${index * 0.2}s`;
        }
    });
});
