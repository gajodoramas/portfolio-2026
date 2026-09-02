document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let hasAppeared = false;
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (!hasAppeared && window.scrollY > 250) {
                navbar.classList.remove('hidden');
                hasAppeared = true;
            }
        });
    }
});
