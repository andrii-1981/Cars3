//IIFI
(function () {
    const productTab = [
        {
            id: '1',
            title: 'SUVs',
            tabs__subtitle: 'No obstacles on your way<br> can spoil the trip',
            image: 'img/tabs-with-cars/ml.png'
        },
        {
            id: '2',
            title: 'Sports Cars',
            tabs__subtitle: 'Feel what true speed<br> and freedom are.',
            image: 'img/tabs-with-cars/ml.png'
        },

        {
            id: '3',
            title: 'Luxury',
            tabs__subtitle: 'Comfortable cars for<br> demanding clients.',
            image: 'img/tabs-with-cars/ml.png'
        }

    ];

    function renderTabs(Tabs) {
        const tabsContainer = document.querySelector('tabs');
        tabsContainer.innerHTML = '';
        for (productTab of Tabs) {
            tabsContainer.innerHTML.innerHTML += `
            <div class="tab">
                        <div class="tab__img"> <img src="img/tabs-with-cars/ml.png" alt="carML">
                        </div>
                        <h2 class="tabs__title">SUVs</h2>
                        <h3 class="tabs__subtitle">No obstacles on your way<br> can spoil the trip.</h3>
                        <button class="tabs__button">LEARN MORE</button>
                    </div>`
        }
    }
})();
