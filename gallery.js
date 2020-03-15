import galleryItems from "./gallery-items.js";

const imagesList = document.querySelector( `ul` );
const button = document.querySelector( `button` );
const modalDiv = document.querySelector( `.lightbox` );
const modalImg = document.querySelector( `.lightbox__image` );

const arrImages = galleryItems.reduce( ( liStr, elem ) => liStr + `<li class="gallery__item"><a class="gallery__link" hef="${elem.original}"><img class="gallery__image" src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}"></li></a>`, `` );

imagesList.insertAdjacentHTML( `afterbegin`, arrImages );

imagesList.addEventListener( `click`, ( event ) => {
    modalDiv.setAttribute( `class`, `is-open` );
    modalImg.src = event.target.getAttribute( `data-source` );
    console.log( event.currentTarget )
} );

function closeModalWindow () {
    modalDiv.setAttribute( `class`, `lightbox js-lightbox` );
}

button.addEventListener( `click`, closeModalWindow );

modalDiv.addEventListener( `click`, closeModalWindow );

document.addEventListener( `keyup`, event => {
    if( event.key === `Escape` ) {
        closeModalWindow();
    }
} );

