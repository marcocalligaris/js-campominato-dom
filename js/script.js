const button = document.getElementById('play-btn');

button.addEventListener('click', function() {
    const grid = document.getElementById('grid');
    const rows = 10;
    const cells = 10;
    const gridCells = rows * cells;
    let score = 0;

    // * Funzioni logica del gioco
    function createNewCell(content) {
        const newcell = document.createElement('div');
        newcell.classList.add('cell');
        newcell.innerText = content;
        return newcell;
    }

    // * Esecuzione
    for(let i = 1; i <= gridCells; i++) {
        const cell = createNewCell(i);
        grid.appendChild(cell);

        cell.addEventListener('click', function () {
            console.log('Hai cliccato la cella numero ' + [i])
            cell.classList.add('clicked');
            score++;
            console.log(score);
        })
    } 
})



