(function () {

    const slides = [
        ` 
                <div class="feedback_slide">
                    <img src="img/feedback/daniel.png" alt=" daniel">

                </div> `,
                 `<div class="feedback_slide">
                    <img src="img/feedback/elizabeth.png" alt="elzabet">

                </div> `,
        `<div class="feedback_slide">
                    <img src="img/feedback/jane.png" alt=" jane">

                </div>
             `
    ];


    let currentSlideIdx = 0;
    function renderCarousel() {
        const slideContainer = document.querySelector('.feedback__carousel__slides');
        slideContainer.innerHTML=slides[currentSlideIdx];
    }

    function nextSlide(){
        currentSlideIdx=currentSlideIdx +1 >=slides.length ? 0 : currentSlideIdx+1;
        renderCarousel();
    }
    setInterval(nextSlide,3000);
})();