document.addEventListener('DOMContentLoaded', () => {
    const tb = document.getElementById('toggleButton');
    if (!tb) return;

    // Sync theme between html and body elements
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
    }

    const setThemeIcon = () => {
        const isDark = document.body.classList.contains('dark-mode');
        tb.textContent = isDark ? '☀' : '☾';
        tb.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        tb.style.fontFamily = 'Segoe UI Symbol, Arial, sans-serif';
    };

    tb.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        
        setThemeIcon();
    });

    setThemeIcon();
});