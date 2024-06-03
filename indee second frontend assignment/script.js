document.addEventListener('DOMContentLoaded', function() {
    const preBtn = document.querySelector('.pre-btn');
    const nxtBtn = document.querySelector('.nxt-btn');
    const cardContainer = document.querySelector('.card-container');
    const card = document.querySelector('.card');

    // Calculate the width of two cards including margin
    const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight, 10);
    const scrollAmount = cardWidth * 2; // Scroll by two cards

    // Event listeners for scrolling the card container
    preBtn.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nxtBtn.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Debugging: Log to confirm the script is running
    console.log("JavaScript is running and should scroll by two cards.");
});
