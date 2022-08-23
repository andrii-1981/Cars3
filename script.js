(function () {
  const tabs = [
    {
      id: "1",
      title: "SUVs",
      tabs__subtitle: "No obstacles on your way<br> can spoil the trip",
      image: "img/tabs-with-cars/ml.png",
      button: Learnmore,
    },
    {
      id: "2",
      title: "Sports Cars",
      tabs__subtitle: "Feel what true speed<br> and freedom are.",
      image: "img/tabs-with-cars/ml.png",
      button: Learnmore,
    },

    {
      id: "3",
      title: "Luxury",
      tabs__subtitle: "Comfortable cars for<br> demanding clients.",
      image: "img/tabs-with-cars/ml.png",
      button: Learnmore,
    },
  ];

  function renderTabs(tabs) {
    const tabsContainer = document.querySelector('.prods');
    tabsContainer.innerHTML = '';
    for ( const product of tabs) {
        tabsContainer.innerHTML.innerHTML += `
        <div class="tab">
                   <img class="tab__img" src="${product.image}" alt="${product.title}">
                    <h2 class="tabs__title">${'.title'}</h2>
                    <h3 class="tabs__subtitle">${product.tabs__subtitle}</h3>
                    <button class="tabs__button">${product.button}</button>
         </div>`;

    }
}
  renderTabs(tabs);
})();
