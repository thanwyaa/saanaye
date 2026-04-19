const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// تبديل الوضع الليلي
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // حفظ التفضيلات في المتصفح
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// تحميل الوضع المفضل عند فتح الموقع
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}
