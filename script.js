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
    if (scrollY > 100) {
        profileImage.style.opacity = '0';
        subheading.style.opacity = '0';
        subheading.style.transition = 'opacity 0.5s ease';
        profileImage.style.transition = 'opacity 0.5s ease';
    } else {
        profileImage.style.opacity = '1';
        subheading.style.opacity = '1';
    }

    // Make 'emily xing' smaller and move further to the top-right corner on scroll
    if (scrollY > 100) {
        emilyXing.style.fontSize = '1.2em';
        emilyXing.style.position = 'fixed';
        emilyXing.style.top = '5px';
        emilyXing.style.right = '20px';
        emilyXing.style.left = 'auto';
        emilyXing.style.transform = 'none';
        emilyXing.style.transition = 'font-size 0.5s ease, top 0.5s ease, right 0.5s ease';
    } else {
        emilyXing.style.fontSize = '3em';
        emilyXing.style.position = 'relative';
        emilyXing.style.top = 'unset';
        emilyXing.style.right = 'unset';
        emilyXing.style.left = '50%';
        emilyXing.style.transform = 'translate(-50%, -50%)';
        emilyXing.style.transition = 'font-size 0.5s ease, top 0.5s ease, right 0.5s ease';
    }

    // Show top bar on scroll
    if (scrollY > 100) {
        topBar.style.top = '0';
        topBar.style.opacity = '1';
        topBar.style.transition = 'top 0.5s ease, opacity 0.5s ease';
    } else {
        topBar.style.top = '-50px';
        topBar.style.opacity = '0';
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
