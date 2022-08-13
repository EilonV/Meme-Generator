

function renderMeme() {
    const img = new Image()
    img.src = gImgs[gMeme.selectedImgId - 1].url
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    for (var i = 0; i < gMeme.lines.length; i++) {
        switch (i) {
            case 0:
                drawText(gMeme.lines[i].txt, gMeme.lines[i].size, gCanvas.width / 2, gCanvasHeight[0] / 10)
                break
            case 1:
                drawText(gMeme.lines[i].txt, gMeme.lines[i].size, gCanvas.width / 2, gCanvasHeight[1] - 50)
                break
            case 2:
                drawText(gMeme.lines[i].txt, gMeme.lines[i].size, gCanvas.width / 2, gCanvasHeight[2] / 2)
                break
        }
    }
    console.log(gMeme)
}

function renderUserMeme(canvasImg) {
    const img = new Image()
    img.src = gImgs[gUserMemes[canvasImg.classList[0].charAt(4)].selectedImgId - 1].url
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    for (var i = 0; i < gUserMemes[canvasImg.classList[0].charAt(4)].lines.length; i++) {
        switch (i) {
            case 0:
                drawText(gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].txt, gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].size, gCanvas.width / 2, gCanvasHeight[0] / 10)
                break
            case 1:
                drawText(gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].txt, gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].size, gCanvas.width / 2, gCanvasHeight[1] - 50)
                break
            case 2:
                drawText(gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].txt, gUserMemes[canvasImg.classList[0].charAt(4)].lines[i].size, gCanvas.width / 2, gCanvasHeight[2] / 2)
                break
        }
    }
}
// Opens the editor with specified meme
function onImgSelect(canvasImg) {
    gCurrStroke = 'black'
    gCurrFill = 'white'

    console.log('img id: ', canvasImg.id)
    gMeme = getMeme('text', canvasImg.id)

    showEditor()
    renderMeme()
}

function onUserImgSelect(canvasImg) {
    
    // gUserMemes[canvasImg.classList[0].charAt(4)] = getMeme(gUserMemes.lines[0].txt, canvasImg.id)
    console.log(gUserMemes[canvasImg.classList[0].charAt(4)].lines[0].txt)
    showEditor()
    renderUserMeme(canvasImg)
}

function onFlexSelect() {
    showEditor()
    flexSelect()
    renderMeme()
}

function onMoveLine(direction) {
    moveLine(direction)
    renderMeme()
}

function onLineSwitch() {
    gMeme.lines[gCurrLine]
    switchLine()
    console.log(gCtx)
    renderMeme()
}

function onAddLine() {
    addLine()
    console.log(gMeme.lines)
}

function onRemoveLine() {
    removeLine()
    console.log(gMeme.lines)
}

function onFontSizeChange(size) {
    changeFontSize(size)
    renderMeme()
}


function onSetFont(font) {
    gCurrFont = font
    renderMeme()
}


function onStrokeSelect(color) {
    gCurrStroke = color
    renderMeme()
}

function onFillSelect(color) {
    gCurrFill = color
    renderMeme()
}


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme.jpg'
}

function alignText(direct) {
    console.log(gMeme.lines[gCurrLine].align)
    gMeme.lines[gCurrLine].align = direct
    renderMeme()
}

function onSave() {
    saveMeme()
    alert('Meme saved to Memes')
    console.log(gUserMemes)
}