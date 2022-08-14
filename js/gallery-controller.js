
function init() {
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    console.log(gCtx)
    gCanvasHeight = [gCanvas.height, gCanvas.height, gCanvas.height]
    gUserMemes = []

    renderGallery()
    console.log(gUserMemes)
    
    loadMemesFromStorage()

    console.log(gUserMemes)

    renderUserGallery()
}

function renderGallery() {
    var elGallery = document.querySelector('#gallery')
    var strHTML = ''

    for (var i = 1; i < gImgs.length + 1; i++) {
        strHTML += `<img id="${i}" class="grid-img img${i}" onclick="onImgSelect(this)" src="img/${i}.jpg" alt="">`
    }
    elGallery.innerHTML = strHTML
}

function renderUserGallery() {

    var elGallery = document.querySelector('#user-gallery')
    var strHTML = ''

    for (var i = 0; i < gUserMemes.length; i++) {
        strHTML += `<img id="${gUserMemes[i].selectedImgId}" class="meme${i} grid-img img${gUserMemes[i].selectedImgId}" onclick="onUserImgSelect(this)" src="img/${gUserMemes[i].selectedImgId}.jpg" alt="">`
    }
    elGallery.innerHTML = strHTML
}

function showEditor() {

    // hides the gallery,filter and about sections
    var gallery = document.querySelector('.gallery-container')
    var filter = document.querySelector('.filter-container')
    var about = document.querySelector('.about-container')
    var editor = document.querySelector('.meme-editor-container')
    var userGallery = document.querySelector('.user-gallery')

    userGallery.style.display = 'none'
    gallery.style.display = 'none'
    filter.style.display = 'none'
    about.style.display = 'none'
    editor.style.display = 'flex'
}


function closeEditor() {

    var gallery = document.querySelector('.gallery-container')
    var filter = document.querySelector('.filter-container')
    var about = document.querySelector('.about-container')
    var editor = document.querySelector('.meme-editor-container')
    var userGallery = document.querySelector('.user-gallery')

    userGallery.style.display = 'none'
    gallery.style.display = 'flex'
    filter.style.display = 'flex'
    about.style.display = 'block'
    editor.style.display = 'none'
}

function onMemesClick(ev) {
    ev.preventDefault()
    var gallery = document.querySelector('.gallery-container')
    var userGallery = document.querySelector('.user-gallery')
    var editor = document.querySelector('.meme-editor-container')
    var about = document.querySelector('.about-container')

    about.style.display = 'block'
    editor.style.display = 'none'
    gallery.style.display = 'none'
    userGallery.style.display = 'block'
}

function filterGallery(filterBy) {
    let filteredImgs = gImgs.filter(img => img.keywords.includes(filterBy.value))
    let elGallery = document.querySelector('#gallery')
    let strHTML = ''

    for (var i = 0; i < filteredImgs.length; i++) {
        strHTML += `<img id="${filteredImgs[i].id}" class="grid-img img${filteredImgs[i].id}" onclick="onImgSelect(this)" src="img/${filteredImgs[i].id}.jpg" alt="">`
    }
    elGallery.innerHTML = strHTML
    if (!filteredImgs.length)
        renderGallery()
}
