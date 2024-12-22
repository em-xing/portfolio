let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');
    const profileImage = document.querySelector('.profile-image');
    const subheading = document.querySelector('.subheading');
    const emilyXing = document.querySelector('header h1');
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
        profileImage.style.transition = 'opacity 0.5s ease';
        subheading.style.transition = 'opacity 0.5s ease';
    } else {
        profileImage.style.opacity = '1';
        subheading.style.opacity = '1';
    }

    // Move "Emily Xing" to the far right and shrink
    if (scrollY > 50) {
        emilyXing.style.position = 'fixed';
        emilyXing.style.top = '10px';
        emilyXing.style.right = '50px'; /* Moves further to the right */
        emilyXing.style.left = 'auto';
        emilyXing.style.transform = 'none';
        emilyXing.style.fontSize = '1.2em'; /* Shrink font size */
        emilyXing.style.transition = 'all 0.5s ease'; /* Smooth transition */
    } else {
        emilyXing.style.position = 'absolute';
        emilyXing.style.top = '50%';
        emilyXing.style.left = '50%';
        emilyXing.style.right = 'auto';
        emilyXing.style.transform = 'translate(-50%, -50%)';
        emilyXing.style.fontSize = '3em'; /* Reset font size */
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

    // Update last scroll position
    lastScrollY = scrollY;
});
