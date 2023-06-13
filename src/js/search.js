'use strict';
const inputSearch = document.querySelector('.js_text_input');
const btnSearch = document.querySelector('.js_search_btn');

const handleClickBtn = (event) => {
    event.preventDefault();
    const valueSearch = inputSearch.value;
    console.log(valueSearch);
    const filterApiList = listCharactersApi.filter((character) =>
    character.name.toLowerCase().includes(valueSearch.toLowerCase()));
    console.log(filterApiList);
    renderCharacterList(filterApiList);
}

btnSearch.addEventListener('click', handleClickBtn);
