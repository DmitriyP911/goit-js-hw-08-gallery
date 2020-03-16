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

document.addEventListener( `keyup`, event => {
    if( event.key === `ArrowRight` || event.key === `ArrowLeft` ) {
        for( let obj of galleryItems ) {
            const ind = galleryItems.indexOf( obj, 0 );
            if( obj.original === event.currentTarget.body.querySelector( `.lightbox__image` ).src && galleryItems.length <= ind >= 0 ) {
                if( event.key === `ArrowRight` && ind <= galleryItems.length - 2 ) {
                    return modalImg.src = galleryItems[ind + 1].original;
                } else if( event.key === `ArrowLeft` && ind != 0 ) {
                    return modalImg.src = galleryItems[ind - 1].original;
                } else if( ind === galleryItems.length - 1 ) {
                    return modalImg.src = galleryItems[0].original;
                } else {
                    return modalImg.src = galleryItems[galleryItems.length - 1].original;
                }
            }
        }
    }
} );