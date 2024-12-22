window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');
    const profileImage = document.querySelector('.profile-image');
    const subheading = document.querySelector('.subheading');
    const emilyXing = document.querySelector('header h1');
    const scrollY = window.scrollY;

    // Adjust header opacity based on scroll
    if (scrollY > 100) {
        header.style.opacity = '0.8';
    } else {
        header.style.opacity = '1';
    }

    // Fade out profile image, subheading, and "Emily Xing" on scroll
    if (scrollY > 100) {
        profileImage.style.opacity = '0';
        subheading.style.opacity = '0';
        emilyXing.style.opacity = '0';
        profileImage.style.transition = 'opacity 0.5s ease';
        subheading.style.transition = 'opacity 0.5s ease';
        emilyXing.style.transition = 'opacity 0.5s ease';
    } else {
        profileImage.style.opacity = '1';
        subheading.style.opacity = '1';
        emilyXing.style.opacity = '1';
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
