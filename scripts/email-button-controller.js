// Prevents default behaviour to avoid scrolling when clicking the button
document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault();
});

// Shows a temporary notification when the email is copied
document.addEventListener("DOMContentLoaded", () => {
    const EMAIL = "gajodoramas@protonmail.com";
    const link = document.getElementById('email-link');
    const popup = document.getElementById('email-popup');
    if (!link || !popup) return;
    link.addEventListener('click', () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            popup.classList.remove('show');
            void popup.offsetWidth;
            popup.classList.add('show');
            setTimeout(() => popup.classList.remove('show'), 2000);
        });
    });
});
