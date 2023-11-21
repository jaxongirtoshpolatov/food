let navLinks = document.querySelectorAll('.nav-link');

// Har bir nav-link uchun hodisani qo'shish
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Aktiv classni o'zgartirish
        removeActiveClass();
        link.classList.add('active');
    });
});

// Aktiv classni o'zgartirish uchun funksiya
function removeActiveClass() {
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
}