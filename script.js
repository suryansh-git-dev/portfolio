const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// About Me ki image ko target kiya gaya hai
const aboutMeIcon = document.getElementById('about-me-icon');


function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        // Icon text/emoji hata diya gaya hai. Ab CSS se aayega.
        // themeToggle.textContent = '\u263D'; 
        localStorage.setItem('theme', 'dark');
        
        if (aboutMeIcon) {
            aboutMeIcon.src = aboutMeIcon.dataset.darkSrc;
        }

    } else {
        body.classList.remove('dark-theme');
        // Icon text/emoji hata diya gaya hai. Ab CSS se aayega.
        // themeToggle.textContent = '\u2600\uFE0F'; 
        localStorage.setItem('theme', 'light');

        if (aboutMeIcon) {
            aboutMeIcon.src = aboutMeIcon.dataset.lightSrc;
        }
    }
}
// ... (rest of the script.js remains the same)

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else {
        setTheme(prefersDark);
    }
});

themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = body.classList.contains('dark-theme');
    setTheme(!isCurrentlyDark);
});