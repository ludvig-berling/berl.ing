document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const items = document.querySelectorAll('.item');

    let clickCount = 0;
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            document.body.style.filter = 'invert(1)';
            setTimeout(() => {
                document.body.style.filter = 'invert(0)';
                clickCount = 0;
            }, 2000);
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});
