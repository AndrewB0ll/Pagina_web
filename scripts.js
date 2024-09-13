document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-icon') && !event.target.closest('.navigation')) {
        document.querySelector('.navigation').classList.remove('active');
    }
});

document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.previousElementSibling.classList.toggle('show');
        this.textContent = this.textContent === 'más' ? 'menos' : 'más';
    });
});
