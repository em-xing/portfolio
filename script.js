window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const subheading = document.querySelector('.subheading');
    const profileImage = document.querySelector('.profile-image');
    const sections = document.querySelectorAll('.column');

    const scrollY = window.scrollY;

    // Adjust header position
    if (scrollY > 100) {
        header.style.top = '10%';
        header.style.transform = 'translate(-50%, 0)';
        header.style.opacity = '1';
        header.style.transition = 'top 0.5s ease, transform 0.5s ease, opacity 0.5s ease';
    } else {
        header.style.top = '50%';
        header.style.transform = 'translate(-50%, -50%)';
        header.style.opacity = '1';
    }

    // Fade out profile image and subheading
    if (scrollY > 100) {
        profileImage.style.opacity = '0';
        profileImage.style.transition = 'opacity 0.5s ease';
        subheading.style.opacity = '0';
        subheading.style.transition = 'opacity 0.5s ease';
    } else {
        profileImage.style.opacity = '1';
        subheading.style.opacity = '1';
    }

    // Cool animations between sections
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            // Section is fully in view
            section.style.transform = 'scale(1.1)';
            section.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            section.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        } else {
            // Section is out of view
            section.style.transform = 'scale(1)';
            section.style.boxShadow = 'none';
        }

        // Add staggered fade-in effect for lines in the section
        const lines = section.querySelectorAll('p');
        lines.forEach((line, lineIndex) => {
            const lineTop = line.getBoundingClientRect().top + window.scrollY;
            const start = lineTop - 790;
            const end = start + 200;

            if (scrollY >= start && scrollY <= end) {
                const progress = (scrollY - start) / (end - start);
                line.style.opacity = 0.5 + progress * 0.5;
                line.style.transform = `translateY(${10 - progress * 10}px)`;
                line.style.transition = `opacity 0.3s ease ${lineIndex * 0.1}s, transform 0.3s ease ${lineIndex * 0.1}s`;
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
