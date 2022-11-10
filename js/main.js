"use strict";

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector(".js-new-form");
const listElement = document.querySelector(".js-list");
const searchButton = document.querySelector(".js-button-search");
const buttonAdd = document.querySelector(".js-btn-add");
const buttonCancelForm = document.querySelector(".js-btn-cancel");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputBreed = document.querySelector(".js-input-breed");
const inputName = document.querySelector(".js-input-name");
const linkNewFormElememt = document.querySelector(".js-button-new-form");
const labelMesageError = document.querySelector(".js-label-error");
const input_search_desc = document.querySelector(".js_in_search_desc");
const input_search_breed = document.querySelector(".js_in_search_breed");
const addButton = document.querySelector(".js-add-button");

//Objetos con cada gatito
const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  breed: "British Shorthair",
};
const kittenData_2 = {
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Fiona",
  desc: "Cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  breed: "British Shorthair",
};
const kittenData_3 = {
  image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
  name: "Cielo",
  desc: "Dormilon, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  breed: "Persa",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Funciones
function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.breed}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = "";
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove("collapsed");
}
function hideNewCatForm() {
  newFormElement.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Adicionar nuevo gatito
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;
  if (valueDesc === "" || valuePhoto === "" || valueName === "" || valueBreed === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    const newKittenDataObject = {
      image: valuePhoto,
      name: valueName,
      desc: valueDesc,
      breed: valueBreed,
    };
    //Añade el nuevo gato al array KittenDataList
    kittenDataList.push(newKittenDataObject);
    //Limpia todos los values
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputBreed.value = "";
    //Mostra el mensaje de que se creo el gato
    labelMesageError.innerHTML = "Mola! Un nuevo gatito en Adalab!";
    //Vuelva a pintar la lista de gatos
    renderKittenList(kittenDataList);
  }
}

//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add("collapsed");
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  inputBreed.value = "";
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const breedSearchText = input_search_breed.value;
  //Vacia primero
  listElement.innerHTML = "";
  //Filtra por descripción
  const dataKittenFiltered = kittenDataList
    .filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText.toLowerCase()))
    //Filtrar por raza
    .filter((kitten) => kitten.breed.toLowerCase().includes(breedSearchText.toLowerCase()));
  //Pinta el/los gatos que tengan la descripción/raza
  renderKittenList(dataKittenFiltered);
}

//Mostrar el litado de gatitos en ell HTML
renderKittenList(kittenDataList);

//Eventos
linkNewFormElememt.addEventListener("click", handleClickNewCatForm);
searchButton.addEventListener("click", filterKitten);
buttonAdd.addEventListener("click", addNewKitten);
buttonCancelForm.addEventListener("click", cancelNewKitten);
