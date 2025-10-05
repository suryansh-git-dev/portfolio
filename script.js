const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


const aboutMeIcon = document.getElementById('about-me-icon');


function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        
        if (aboutMeIcon) {
            aboutMeIcon.src = aboutMeIcon.dataset.darkSrc;
        }

    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');

        if (aboutMeIcon) {
            aboutMeIcon.src = aboutMeIcon.dataset.lightSrc;
        }
    }
}


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