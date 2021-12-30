const gameBoard = document.getElementById("gameBoard");
let step = 1;
for(let i=0;i<8;i++) {
    for(let j=0;j<8;j++) {
        gameBoard.innerHTML += 
        '<div id=box"'+i+j+' style="grid-area:box'+i+j+';"></div>'
    }
}
for(let i=0;i<8;i++) {
    gameBoard.style.gridTemplateAreas += '"';
    for(let j=0;j<8;j++) {
        gameBoard.style.gridTemplateAreas += 'box'+j+i+' ';
    }
    gameBoard.style.areas += '"\n';
}