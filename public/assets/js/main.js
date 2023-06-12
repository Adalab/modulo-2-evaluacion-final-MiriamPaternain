'use strict';
/* const inputSearch = document.querySelector('.js_text_input');
const btnSearch = document.querySelector('.js_search_btn');

const handleClickBtn = (event) => {
    event.preventDefault();
    const valueSearch = inputSearch.value;
    const filterApiList = listCharactersApi.filter((character) =>
    character.name.toLowerCase().includes(valueSearch.toLowerCase()));
    renderCharacterList(filterApiList);
}

btnSearch.addEventListener('click', handleClickBtn); */


'use strict';

const ulCharactersList = document.querySelector('.js_characters_list');
const ulFavCharactersList = document.querySelector('.js_characters_fav');

let listCharactersApi = [];
let favListCharacter = [];

const favCharacterLocalStorage = JSON.parse (localStorage.getItem("localStorageFavCharacters"));

openPage();
function openPage(){
    if(favCharacterLocalStorage){
        favListCharacter = favCharacterLocalStorage;
        renderFavListCharacter(favListCharacter);
    }
        fetch('https://api.disneyapi.dev/character')
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            listCharactersApi = data.data;
            renderCharacterList(listCharactersApi);
        });
    }





function renderCharacterList (listData){
    for(const eachCharacter of listData){
        ulCharactersList.innerHTML += renderCharacter(eachCharacter);
    }
    addEventCharacter();
}

function addEventCharacter(){
    const allLiElements = document.querySelectorAll('.js_li');
    for(const eachLi of allLiElements){
        eachLi.addEventListener("click", handleClick);
    }
}


function renderCharacter(data){

let html = `<li id = ${data._id} class="characters_main--li js_li">
          <img src=${data.imageUrl}/>
          <p class="name js_li--name">${data.name}</p>
        </li>`;
        return html;
}

function handleClick (event){
    const id = parseInt(event.currentTarget.id); 
    console.log(id); //para clickar en cualquier parte del elemento
const selectedCharacter = listCharactersApi.find((data) => data._id === id);
const indexCharacter = favListCharacter.findIndex((data) => data._id === id); 

if(indexCharacter === -1) {
favListCharacter.push(selectedCharacter);
} else {
    favListCharacter.splice(indexCharacter, 1);
}
 localStorage.setItem("localStorageFavCharacters", JSON.stringify(favListCharacter));
renderFavListCharacter();
}

function renderFavListCharacter(){
    ulFavCharactersList.innerHTML = '';  //para limpiar la lista antes de renderizar los nuevos
    for(const eachFavCharacter of favListCharacter){
        ulFavCharactersList.innerHTML += renderCharacter(eachFavCharacter)
    }
}


//# sourceMappingURL=main.js.map
