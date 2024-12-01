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



    const sliderWrapper = document.querySelector('.unique-slider-wrapper');
    const cards = document.querySelectorAll('.unique-slider-item');
    let currentCardIndex = 0;

    // Add an event listener to each card
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Update the current card index when hovering over a card
            currentCardIndex = index;

            // Add a keydown event for arrow key navigation
            document.addEventListener('keydown', handleArrowKey);
        });

        card.addEventListener('mouseleave', () => {
            // Remove keydown event listener when leaving a card
            document.removeEventListener('keydown', handleArrowKey);
        });
    });

    function handleArrowKey(e) {
        if (e.key === 'ArrowRight') {
            moveToNextCard();
        } else if (e.key === 'ArrowLeft') {
            moveToPreviousCard();
        }
    }

    function moveToNextCard() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            updateSliderPosition();
        }
    }

    function moveToPreviousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateSliderPosition();
        }
    }

    function updateSliderPosition() {
        const cardWidth = cards[0].offsetWidth + 15; // Width + margin
        const newTranslateX = -currentCardIndex * cardWidth;
        sliderWrapper.style.transform = `translateX(${newTranslateX}px)`;
    }

