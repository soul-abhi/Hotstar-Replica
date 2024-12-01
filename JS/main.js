let currentVideoIndex = 1; // Start with the first video

function changeVideo(index) {
    const videos = document.querySelectorAll('.video-main');
    const cards = document.querySelectorAll('.card-outlet-h1');

    // Fade out the currently active video and card
    videos.forEach((video, i) => {
        if (i + 1 === currentVideoIndex) {
            video.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                video.style.display = 'none'; // Hide video after fade out
            }, 500); // Match this with the CSS transition duration
        }
    });

    cards.forEach((card, i) => {
        if (i + 1 === currentVideoIndex) {
            card.style.opacity = '0'; // Start fade out for the card
            setTimeout(() => {
                card.style.display = 'none'; // Hide card after fade out
            }, 500); // Match this with the CSS transition duration
        }
    });

    // Set the new active video and card after a brief pause
    setTimeout(() => {
        videos.forEach((video, i) => {
            if (i + 1 === index) {
                video.style.display = 'block'; // Show the new video
                video.style.opacity = '1'; // Start fade in
            }
        });

        cards.forEach((card, i) => {
            if (i + 1 === index) {
                card.style.display = 'block'; // Show the new card
                card.style.opacity = '1'; // Start fade in
            }
        });

        currentVideoIndex = index; // Update current video index
    }, 500); // Wait for fade-out to complete
}

// Initialize by showing the first video and card
changeVideo(currentVideoIndex);

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.unique-slider-wrapper');
    const prevBtn = document.querySelector('.unique-prev-btn');
    const nextBtn = document.querySelector('.unique-next-btn');
    const cards = document.querySelectorAll('.unique-slider-item');
    const totalCards = cards.length; // Get the total number of cards
    let currentIndex = 0; // Index of the current card
    const cardWidth = cards[0].offsetWidth + 15; // Width of each card including margin

    function updateSliderPosition() {
        // Update the transform property to move the slider
        const offset = -currentIndex * cardWidth;
        sliderWrapper.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        // Move to the previous card
        if (currentIndex > 0) {
            currentIndex--; // Decrease the index (move left)
        }
        updateSliderPosition(); // Update the position of the slider
    });

    nextBtn.addEventListener('click', () => {
        // Move to the next card
        if (currentIndex < totalCards - 1) {
            currentIndex++; // Increase the index (move right)
        }
        updateSliderPosition(); // Update the position of the slider
    });
});
