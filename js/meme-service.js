var gMeme = []
var gCurrStroke = 'black'
var gCurrFill = 'white'
var gCurrFont = 'impact'
var gCurrLine = 0

function getMeme(txt, id) {
    var meme = {
        selectedImgId: id,
        selectedLineIdx: 0,

        lines: [
            {
                txt: txt,
                size: 40,
                align: 'center',
                color: 'black'
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
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.font = size + 'px ' + gCurrFont;
    gCtx.fillStyle = gCurrFill;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = gCurrStroke;
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function moveLine(direction){
    direction == 'down' ? gCanvasHeight[gCurrLine] += 50 :  gCanvasHeight[gCurrLine] -= 50
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
