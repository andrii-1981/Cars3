(function () {

    const slides = [
                `<div class="feedback_slide">
                    <img src="img/feedback/daniel.png" alt=" daniel">
                </div>`,
                `<div class="feedback_slide">
                    <img src="img/feedback/elizabeth.png" alt="elzabet">
                </div>`,
                `<div class="feedback_slide">
                    <img src="img/feedback/jane.png" alt=" jane">
                </div>
             `
    ]
    let currentSlideIdx = 0;
    function renderCarousel() {
        const slideContainer = document.querySelector('.feedback__carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
       /*  if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        } */
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }
    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 >= slides.length ? 0 : currentSlideIdx - 1;
        renderCarousel();
    }
    const nextButton = document.querySelector('.feedback-btn__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.feedback-btn__prev');
    prevButton.addEventListener('click', prevSlide);
    //setInterval(nextSlide, 3000);
    renderCarousel();
    window.addEventListener('resize', renderCarousel);
})();