(function() {
    const imgs = document.querySelectorAll('.image');
    const modalOffices = document.querySelector('.modal__offices');
    const activeImage = document.querySelector('#active-image');
    const overlay = document.querySelector('.overlay__offices');
    const closeIcon = document.querySelector('#close');

    imgs.forEach(img => img.addEventListener('click', displayImage));

    function displayImage(e) {
        activeImage.src = e.target.src;
        modalOffices.style.display = 'block';
        overlay.style.display = 'block';
    }

    closeIcon.addEventListener('click', closeImage);
    function closeImage() {
        modalOffices.style.display = 'none';
        overlay.style.display = 'none';
    }

    overlay.addEventListener('click', closeByOverlay);

    function closeByOverlay() {
        modalOffices.style.display = 'none';
        overlay.style.display = 'none';
    }

    const next = document.querySelector('#right').addEventListener('click', nextImage);
    
    function nextImage() {
        for(var i = 0; i < imgs.length; i++) {
            if(activeImage.src === imgs[i].src) {
                var nextImageVar = imgs[i].nextElementSibling;
            }
        }

        if(nextImageVar === null) {
            activeImage.src = imgs[0].src;
        } else {
        activeImage.src = nextImageVar.src;
        }
    }

    const previous = document.querySelector('#left').addEventListener('click', previousImage);

    function previousImage() {
        for(var i = 0; i < imgs.length; i++) {
            if(activeImage.src === imgs[i].src) {
                var nextImageVar = imgs[i].previousElementSibling;
            }
        }

        if(nextImageVar === null) {
            activeImage.src = imgs[imgs.length - 1].src;
        } else {
        activeImage.src = nextImageVar.src;
        }
    }
})();