"use strict";const inputSearch=document.querySelector(".js_text_input"),btnSearch=document.querySelector(".js_search_btn"),handleClickBtn=e=>{e.preventDefault();const a=inputSearch.value;console.log(a);const r=listCharactersApi.filter(e=>e.name.toLowerCase().includes(a.toLowerCase()));console.log(r),renderCharacterList(r)};btnSearch.addEventListener("click",handleClickBtn);const ulCharactersList=document.querySelector(".js_characters_list"),ulFavCharactersList=document.querySelector(".js_characters_fav");let listCharactersApi=[],favListCharacter=[];const favCharacterLocalStorage=JSON.parse(localStorage.getItem("localStorageFavCharacters"));function openPage(){favCharacterLocalStorage&&(favListCharacter=favCharacterLocalStorage,renderFavListCharacter(favListCharacter)),fetch("https://api.disneyapi.dev/character").then(e=>e.json()).then(e=>{console.log(e),listCharactersApi=e.data,renderCharacterList(listCharactersApi)})}function renderCharacterList(e){ulCharactersList.innerHTML="";for(const a of e)ulCharactersList.innerHTML+=renderCharacter(a);addEventCharacter()}function addEventCharacter(){const e=document.querySelectorAll(".js_li");for(const a of e)a.addEventListener("click",handleClick)}function renderCharacter(e){return`<li id = ${e._id} class="characters_main--li js_li">\n          <img src=${e.imageUrl}/>\n          <p class="name js_li--name">${e.name}</p>\n        </li>`}function handleClick(e){const a=parseInt(e.currentTarget.id);console.log(a);const r=listCharactersApi.find(e=>e._id===a),t=favListCharacter.findIndex(e=>e._id===a);-1===t?favListCharacter.push(r):favListCharacter.splice(t,1),localStorage.setItem("localStorageFavCharacters",JSON.stringify(favListCharacter)),renderFavListCharacter()}function renderFavListCharacter(){ulFavCharactersList.innerHTML="";for(const e of favListCharacter)ulFavCharactersList.innerHTML+=renderCharacter(e)}openPage();