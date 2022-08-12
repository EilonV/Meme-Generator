
function init() {
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    console.log(gCtx)
    gCanvasHeight = [gCanvas.height,gCanvas.height,gCanvas.height]
    
    renderGallery()
}

function renderGallery() {
    var elGallery = document.querySelector('#gallery')
    var strHTML = ''

    for (var i = 1; i < gImgs.length + 1; i++) {
        strHTML += `<img id="${i}" class="grid-img img${i}" onclick="onImgSelect(this)" src="img/${i}.jpg" alt="">`
    }
    elGallery.innerHTML = strHTML
}

function showEditor() {

    // hides the gallery,filter and about sections
    var gallery = document.querySelector('.gallery-container')
    var filter = document.querySelector('.filter-container')
    var about = document.querySelector('.about-container')
    var editor = document.querySelector('.meme-editor-container')

    gallery.style.display = 'none'
    filter.style.display = 'none'
    about.style.display = 'none'
    editor.style.display = 'flex'
}


function closeEditor() {

    // hides the gallery,filter and about sections
    var gallery = document.querySelector('.gallery-container')
    var filter = document.querySelector('.filter-container')
    var about = document.querySelector('.about-container')
    var editor = document.querySelector('.meme-editor-container')

    gallery.style.display = 'flex'
    filter.style.display = 'flex'
    about.style.display = 'block'
    editor.style.display = 'none'
}
