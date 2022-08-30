(function() {
    const products = [{
            id: "1",
            title: "SUVs",
            tabs__subtitle: "No obstacles on your way<br> can spoil the trip",
            image: "img/tabs-with-cars/ml.png",
            btn: "LEARN MORE"
        },
        {
            id: "2",
            title: "Sports Cars",
            tabs__subtitle: "Feel what true speed<br> and freedom are.",
            image: "img/tabs-with-cars/nissan.png",
            btn: "LEARN MORE"
        },
        {
            id: "3",
            title: "Luxury",
            tabs__subtitle: "Comfortable cars for<br> demanding clients.",
            image: "img/tabs-with-cars/mersedes.png",
            btn: "LEARN MORE"
        }
    ];

    function renderCards(products) {
        const tabsContainer = document.querySelector('.cards');
        tabsContainer.innerHTML = '';
        for (const product of products) {
            tabsContainer.innerHTML += `
        <div class="card">
                   <img class="card__img" src="${product.image}" alt="${products.title}">
                    <h2 class="cards__title">${product.title}</h2>
                    <h3 class="cards__subtitle">${product.tabs__subtitle}</h3>
                    <form action="#reguest__section">
                   <button   class="cards__button">${product.btn}</button>
                  </form>
                   
         </div>`;

        }
    }
    renderCards(products);
})();