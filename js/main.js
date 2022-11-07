'use strict';
/*VARIABLES*/ 
const formElement = document.querySelector('.js-new-form');
const dataElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const menu = document.querySelector('.js-menu-nav');
const button = document.querySelector('.js-btn-add');
const buttonCancel = document.querySelector('.js-cancel');
const buttonSearch = document.querySelector('.js-button-search');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMesageError = document.querySelector('.js-label-error');

/*VARIABLES*/ 
 
//Objeto para añadir gatitos

const kittenDataList = [
  { 
    url: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  },
  {
    url: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
    name: 'Fiona',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  },
  { 
    url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
    name: 'Cielo',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
  },
]
//formElement.classList.remove("collapsed");
const kitten1Element = renderKitten(kittenDataList[0]);
const kitten2Element = renderKitten(kittenDataList[1]);
const kitten3Element = renderKitten(kittenDataList[2]);
dataElement.innerHTML = kitten1Element + kitten2Element + kitten3Element;

//Esto es el filtro de busqueda, cuando vale '', luego en la función lo sustituyo por el valor del input (gato).

//Estos son los dato variables, lo que va a ir dentor de nuestra función. Utilizamos datalElement (es el UL, el padre de las LI, los gatos) con innerHTML para pintar en la página la información (un gato). Despues con += le añadimos la función que hemos llamado antes (renderKitten) y en ella sustituimos los parametros específicos de dicja función (líneas de las 17 a la 40). 


//-----------------------FUNCIONES----------------------------//
//Esto quita el buscador
function showNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.remove('collapsed');
}
//Esto añade el buscador
function hideNewCatForm(ev) {
  ev.preventDefault();
  formElement.classList.add('collapsed');
}

//Esto es la función manejadora
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
}

//Hemos creado una función para añadir gatitos, lo hacemos cuando clickamos en añadir. Para eso hemos tenido que crear un addEventListener (linea 133)
function addNewKitten(event) {
  event.preventDefault() 
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';

  } else {

  }
}

//Hemos creado una función para cancelar, lo hacemos cuando clickamos en cancelar. Para eso hemos tenido que crear un addEventListener (linea 137)

const cancelNewKitten = (event) => {
  event.preventDefault();
  formElement.classList.add('collapsed'); 
};

//Para crear la función general de los gatos cogemos el ul (los li son los gatitos) y creamos el esqueleto con todos los elementos que lo contienen. Utilizamos las variables de forma neutra (sin contenido $(contenido)) para después cambiarlas con los datos que queramos (lineas de 50-58).

function renderKitten(dataKitten) {
  const kittenElement =  `<li class="card"> <article> <img class="card_img" src="${dataKitten.url}" alt="gatito"/><h3 class="card_title"> ${dataKitten.name}</h3><h4 class="card_race">${renderRace(dataKitten.race)}</h4><p class="card_description"> ${dataKitten.desc}</p></article></li>`;

  return kittenElement;
}


const filterKitten = (event) => {
  event.preventDefault();
  dataElement.innerHTML = '';
  const descrSearchText = input_search_desc.value;

  if (kitten1Desc.includes(descrSearchText)) {
      dataElement.innerHTML += renderKitten(kittenDataList[0]);
  }
  if (kitten2Desc.includes(descrSearchText)) {
    dataElement.innerHTML += renderKitten(kittenDataList[1]);
  }
  if (kitten3Desc.includes(descrSearchText)) {
    dataElement.innerHTML += renderKitten(kittenDataList[2]);
  }
};

function renderRace (race){

  if (race === '') {
    
    return '<p class="card_race">No se ha especificado la raza</p>';

  } else {

    return `<h3 class="card_race">${race}</h3>`;

  }

};

//-----------------------FUNCIONES----------------------------//

//-----------------------EVENTOS----------------------------//

/*menu.addEventListener('click', (event) => {
  event.preventDefault() 
  
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove("collapsed");
  } else {
    formElement.classList.add("collapsed");
  }
  
});*/

//Eventos que hacemos al clickar. 

button.addEventListener('click', addNewKitten);

buttonCancel.addEventListener('click', cancelNewKitten);

buttonSearch.addEventListener('click', filterKitten);

menu.addEventListener('click', handleClickNewCatForm);

//-----------------------EVENTOS----------------------------//





