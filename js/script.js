// # MILESTONE 2
// Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
// Generiamoli e stampiamo in console per essere certi che siano corretti

const button = document.getElementById('play-btn');

button.addEventListener('click', function() {
    this.innerText = ('Gioca di nuovo!');

    // * Recupero elementi da DOM e creazione variabili
    const grid = document.getElementById('grid');
    const rows = 10;
    const cells = 10;
    const gridCells = rows * cells;
    let score = 0;
    const randomNumbers = [];
    
    // * Funzioni logica del gioco
    /**
     * Funzione che crea una nuova cella
     * @param {number} content Il numero da stampare in cella
     * @returns {node} Un elemento div con classe cell
     */
    function createNewCell(content) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerText = content;
        return newCell;
    }

    /**
     * Funzione che genera numeri casuali non ripetuti
     * @param {*} min valore minimo
     * @param {*} max valore massimo
     * @param {*} blacklist numeri scartati in quanto estratti più di una volta
     */
    function getRandomNumber (min, max, blacklist) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        } while (blacklist.includes(randomNumber));
    }
    
    // Estraggo un numero casuale
    const randomNumber = getRandomNumber(1, gridCells, randomNumbers);
    randomNumbers.push(randomNumber);
    console.log(randomNumber);
    
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




