document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
        for (let i = 0; i < 180; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 3) + 's';
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            starsContainer.appendChild(star);
        }
    }

    const button = document.getElementById('openButton');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');
    const music = document.getElementById('music');

    if (button) {
        button.addEventListener('click', function () {
            intro.classList.add('hidden');
            main.classList.add('visible');
            window.scrollTo({ top: 0, behavior: 'instant' });

            if (music) {
                music.play().catch(function (error) {
                    console.log('Музика не запустилася автоматично (політика браузера):', error);
                });
            }
        });
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('button') || e.target.closest('video')) return;

        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['❤️', '💗', '💕', '✨', '💖'][Math.floor(Math.random() * 5)];
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    });
});