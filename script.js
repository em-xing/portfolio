window.addEventListener('scroll', () => {
    const body = document.body;
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollY / maxScroll;

    const hue = Math.round(percentage * 360); // Full color wheel rotation
    body.style.background = `linear-gradient(to bottom, hsl(${hue}, 80%, 50%), hsl(${(hue + 60) % 360}, 80%, 50%))`;
});
