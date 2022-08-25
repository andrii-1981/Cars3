(function () {
  const products = [
    {
      id: "1",
      title: "SUVs",
      tabs__subtitle: "No obstacles on your way<br> can spoil the trip",
      image: "img/tabs-with-cars/ml.png",
      btn:"LEARN MORE"
    },
    {
      id: "2",
      title: "Sports Cars",
      tabs__subtitle: "Feel what true speed<br> and freedom are.",
      image: "img/tabs-with-cars/nissan.png",
      btn:"LEARN MORE"
    },
    {
      id: "3",
      title: "Luxury",
      tabs__subtitle: "Comfortable cars for<br> demanding clients.",
      image: "img/tabs-with-cars/mersedes.png",
      btn: "LEARN MORE"
    }
  ];

  function renderTabs(products) {
    const tabsContainer = document.querySelector('.tabs');
    tabsContainer.innerHTML = '';
    for (const product of products) {
        tabsContainer.innerHTML +=`
        <div class="tab">
                   <img class="tab__img" src="${product.image}" alt="${products.title}">
                    <h2 class="tabs__title">${product.title}</h2>
                    <h3 class="tabs__subtitle">${product.tabs__subtitle}</h3>
                    <button class="tabs__button">${product.btn}</button>
         </div>`;

    }
}
  renderTabs(products);
})();
