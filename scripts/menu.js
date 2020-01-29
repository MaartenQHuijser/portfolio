(function () {
    //Get hamburger icon and menu
    const hamburger = document.getElementById('js-nav__hamburger');
    const mobileMenu = document.getElementById('js-nav__items');
    const children = mobileMenu.childNodes;
    const childrenArray = [...children];

    //Add event listener and add/remove classes on click
    hamburger.addEventListener('click', function () {
        if (mobileMenu.classList.contains('nav__items--open')) {
            mobileMenu.classList.remove('nav__items--open');
            hamburger.classList.remove('open');
        } else {
            mobileMenu.classList.add('nav__items--open');
            hamburger.classList.add('open');
        }
    })

    childrenArray.forEach(function (item) {
        item.addEventListener('click', function () {
            mobileMenu.classList.remove('nav__items--open');
            hamburger.classList.remove('open');
        })
    });
})();