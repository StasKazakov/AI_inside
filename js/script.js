const btnNo = document.querySelector('.btn-no');
let moveTimeout;
let shouldReset = true;

btnNo.addEventListener('mouseenter', () => {
    clearTimeout(moveTimeout);

    if (shouldReset) {
        const maxMove = 250; // Максимальное расстояние, на которое может перемещаться кнопка

        const randomX = Math.floor(Math.random() * (maxMove * 2 + 1)) - maxMove;
        const randomY = Math.floor(Math.random() * (maxMove * 2 + 1)) - maxMove;

        btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

        shouldReset = false;
    }
});

btnNo.addEventListener('mouseleave', () => {
    shouldReset = true;
    moveTimeout = setTimeout(() => {
        btnNo.style.transform = 'translate(0, 0)';
    }, 5000);
});
