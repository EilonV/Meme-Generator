var gMeme = []
var gUserMemes = []
var gCurrStroke = 'black'
var gCurrFill = 'white'
var gCurrFont = 'impact'
var gCurrLine = 0
var gMemeTextFirst = [
    'i used to be an adventurer like you',
    'when you\'re',
    'when you find out',
    'nobody:',
    'literally no one:',
    'me:',
    'me when',
    'one simply does not',
    'me when i find a bug',
    'bugs',
]
var gMemeTextSecond = [
    'china',
    'bugs eveywhere',
    'real shit?',
    'and know how to fix it right away',
    'when mobile site looks good',
    'but then i took a bug to the knee',
    'finish hw before 23:00',
    'i sleep',
    'i have so much to do',
    'yall got any more of them bugs?'
]

function getMeme(txt, id) {
    var meme = {
        selectedImgId: id,
        selectedLineIdx: 0,

        lines: [
            {
                txt: txt,
                size: 40,
                align: 'center',
                color: 'black',
                fill: 'white'
            }
        ]
    }
    return meme
}

function setLineTxt(txtVal) {
    gMeme.lines[gCurrLine].txt = txtVal.value
    renderMeme()
}


function drawText(txt, size, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = (!gMeme.lines[gCurrLine]) ? 'center' : gMeme.lines[gCurrLine].align;
    gCtx.lineWidth = 2;
    gCtx.font = size + 'px ' + gCurrFont;
    gCtx.fillStyle = gCurrFill;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = gCurrStroke;
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function moveLine(direction) {
    direction == 'down' ? gCanvasHeight[gCurrLine] += 50 : gCanvasHeight[gCurrLine] -= 50
}

function addLine() {
    if (gMeme.lines.length !== 3) {
        gMeme.lines.push({
            txt: 'another text',
            size: 40,
            align: 'center',
            color: 'black'
        })
        renderMeme()
    }
}

function removeLine() {
    if (gMeme.lines.length !== 1) {
        gMeme.lines.pop()
        renderMeme()
    }
}

function switchLine() {
    gCurrLine++
    if (gCurrLine > 2)
        gCurrLine = 0
    console.log(gCurrLine)
}

function flexSelect() {
    var canvasImg = gImgs[getRandomInt(0, 18)]
    var randFirstTxt = gMemeTextFirst[getRandomInt(0, 10)]
    var randSecondTxt = gMemeTextSecond[getRandomInt(0, 10)]
    var randLines = getRandomInt(1, 3)
    var randSize = getRandomInt(21, 61)

    gCurrFill = getRandomColor()
    gCurrStroke = getRandomColor()

    if (randFirstTxt.length >= 18 && randSize >= 30)
        randSize = 25
    if (randSecondTxt.length >= 18 && randSize >= 30)
        randSize = 25

    gMeme = getMeme(randFirstTxt, canvasImg.id)
    gMeme.lines[0].size = randSize
    console.log(gMeme)

    if (randLines === 2) {
        addLine()
        gMeme.lines[1].size = randSize
        gMeme.lines[1].txt = randSecondTxt
    }
}

function changeFontSize(size) {
    size === '+' ? gMeme.lines[gCurrLine].size += 5 : gMeme.lines[gCurrLine].size -= 5
}


function saveMeme() {
    gUserMemes.push(gMeme)
    saveMemesToStorage()
    loadMemesFromStorage()
    renderUserGallery()
}


// STORAGE FUNCTIONS

function saveMemesToStorage() {
    saveToStorage('userMemesDB', gUserMemes)
}

function loadMemesFromStorage() {
    var memes = loadFromStorage('userMemesDB')
    if (memes)
        gUserMemes = memes
    saveMemesToStorage()
}