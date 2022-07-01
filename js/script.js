const button = document.getElementById('play-btn');

button.addEventListener('click', function() {
    this.innerText = ('Gioca di nuovo!');

    // * Recupero elementi da DOM e creazione classi
    const grid = document.getElementById('grid');
    const rows = 10;
    const cells = 10;
    const gridCells = rows * cells;
    let score = 0;


    // * Funzioni logica del gioco
    /**
     * Funzione che crea una nuova cella
     * @param {number} content Il numero da stampare in cella
     * @returns {node} un elemento div con classe cell
     */
    function createNewCell(content) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerText = content;
        return newCell;
    }

    // * Esecuzione
    for(let i = 1; i <= gridCells; i++) {
        const cell = createNewCell(i);
        grid.appendChild(cell);

        cell.addEventListener('click', function () {

            // Blocco un possibile secondo click sulla cella
            if (cell.classList.contains('clicked')) {
                return;
            }
            cell.classList.add('clicked');
            score++;
            console.log(score);
        })
    } 
})



