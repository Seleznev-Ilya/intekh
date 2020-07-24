

headerButtonSearch.addEventListener("click", () => {
    headerSearch.classList.toggle('header__active-headerSearch');
    headerButtonSearch.classList.toggle('header__active-headerButtonSearch');
    headerSearchImg.classList.toggle('header__hidden');
    headerSearchP.classList.toggle('header__hidden');
    headerSearchInput.classList.toggle('header__hidden');
    headerSearchInput.value = '';

});
headerSearchInput.onfocus = function () {
    headerSearchSuggest.style.display = 'block';
    headerSearchSuggest.style.opacity = '1';
    headerSearchSuggest.style.transform = 'translateY(4px)';
};
headerSearchInput.onblur = function () {
    headerSearchSuggest.style.transform = 'translateY(-49px)';
    headerSearchSuggest.style.opacity = '0';
    setTimeout(() => headerSearchSuggest.style.display = 'none', 100);
    if (headerSearchInput.value === '') {
        console.log(headerSearchInput.value, 'headerSearchInput.value');
        headerSearch.classList.toggle('header__active-headerSearch');
        headerButtonSearch.classList.toggle('header__active-headerButtonSearch');
        headerSearchImg.classList.toggle('header__hidden');
        headerSearchP.classList.toggle('header__hidden');
        headerSearchInput.classList.toggle('header__hidden');
    }
};
