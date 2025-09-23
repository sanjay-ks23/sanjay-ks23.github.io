document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector('.posts-carousel');
        const prevButton = wrapper.querySelector('.prev-arrow');
        const nextButton = wrapper.querySelector('.next-arrow');

        if (!carousel || !prevButton || !nextButton) {
            return;
        }

        const scrollAmount = 336; // Amount to scroll on each click

        const updateArrowState = () => {
            // Check if at the beginning
            if (carousel.scrollLeft <= 0) {
                prevButton.classList.add('hidden');
            } else {
                prevButton.classList.remove('hidden');
            }

            // Check if at the end
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) { // -1 for precision issues
                nextButton.classList.add('hidden');
            } else {
                nextButton.classList.remove('hidden');
            }
        };

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Update arrows on scroll (e.g., if user scrolls manually)
        carousel.addEventListener('scroll', () => {
            // Use a timeout to avoid spamming the check, which can cause performance issues
            setTimeout(updateArrowState, 150);
        });

        // Initial check
        updateArrowState();
    });
});
