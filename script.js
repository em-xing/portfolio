let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const profileImage = document.querySelector('.profile-image');
    const subheading = document.querySelector('.subheading');
    const emilyXing = document.querySelector('header h1');
    const topBar = document.querySelector('.top-bar');
    const sections = document.querySelectorAll('.column');
    const scrollY = window.scrollY;

    // Profile image fade out on scroll up, fade in on scroll down
    if (scrollY > lastScrollY) {
        profileImage.style.opacity = '0';
    } else {
        profileImage.style.opacity = '1';
    }

    // Subheader fade out on scroll up, fade in on scroll down
    subheading.style.opacity = scrollY > lastScrollY ? '0' : '1';

    // Emily Xing header moves to the top center
    if (scrollY > 100) {
        emilyXing.style.top = '10px';
        emilyXing.style.transform = 'translate(-50%, 0)';
        emilyXing.style.fontSize = '1.5em';
    } else {
        emilyXing.style.top = '50%';
        emilyXing.style.transform = 'translate(-50%, -50%)';
        emilyXing.style.fontSize = '3em';
    }

    // Show/hide top bar with gradient
    topBar.style.opacity = scrollY > 100 ? '1' : '0';

    // Content sections fade in/out on scroll
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });

    // Update last scroll position
    lastScrollY = scrollY;
});
