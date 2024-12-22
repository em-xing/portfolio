window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.column');
    const profileImage = document.querySelector('.profile-image');
    const subheading = document.querySelector('.subheading');
    const emilyXing = document.querySelector('header h1');
    const topBar = document.querySelector('.top-bar');

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
    profileImage.style.opacity = scrollY > 100 ? '0' : '1';
    subheading.style.opacity = scrollY > 100 ? '0' : '1';

    // Adjust 'emily xing' position
    if (scrollY > 100) {
        emilyXing.style.fontSize = '1.2em';
        emilyXing.style.position = 'fixed';
        emilyXing.style.top = '5px';
        emilyXing.style.right = '20px';
        emilyXing.style.left = 'auto';
        emilyXing.style.transform = 'none';
    } else {
        emilyXing.style.fontSize = '3em';
        emilyXing.style.position = 'relative';
        emilyXing.style.top = 'unset';
        emilyXing.style.right = 'unset';
        emilyXing.style.left = '50%';
        emilyXing.style.transform = 'translate(-50%, -50%)';
    }

    // Show/hide top bar
    topBar.style.top = scrollY > 100 ? '0' : '-50px';
    topBar.style.opacity = scrollY > 100 ? '1' : '0';

    // Fade in/out sections
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
