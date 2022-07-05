// Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

const button = document.getElementById('play-btn');

button.addEventListener('click', function() {
    this.innerText = ('Gioca di nuovo!');

    // * Recupero elementi da DOM e creazione variabili
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const rows = 10;
    const cells = 10;
    const gridCells = rows * cells;
    const totalBombs = 16;
    const winningPoints = gridCells - totalBombs;
    let score = 0;
    
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
     * Funzione che genera 'n' numeri casuali, non ripetuti
     * @param {number} min valore minimo
     * @param {number} max valore massimo
     * @param {number} n quantità di numeri desiderata
     * @returns una serie di numeri casuali, non ripetuti
     */
    function createBombs (min, max, n) {
        let randomNumber;
        const blacklist = [];
        while (blacklist.length < n) {
            randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
            if (!blacklist.includes(randomNumber)) {
                blacklist.push(randomNumber);
            }
        }
        return blacklist;
    }

    function gameOver (score, hasWon, bombs) {
        const cells = document.querySelectorAll('.cell');

        for (let i = 0; i < cells.length; i++) {
            const cellNumber = parseInt(cells[i].innerText);

            if (bombs.includes(cellNumber)) {
                cells[i].classList.add('bomb');
            } else {
                cells[i].classList.add('safe');
            }

            cells[i].classList.add('clicked');
        }

        let message = hasWon ? 'Complimenti, hai vinto! ' : 'Hai preso una bomba, hai perso. ';
        message += `Hai totalizzato ${score} punti.`;

        alert(message);
    }

    /**
     * Funzione che verifica se si arriva al Game Over
     * @param {Node} cell La cella cliccata
     * @param {number[]} bombs Array che contiene le bombe
     * @param {number} score Punteggio del momento
     * @param {number} winningPoints Punteggio massimo raggiungibile
     * @returns {boolean} true se è Game Over, altrimenti false
     */
    function checkGameOver (cell, bombs, score, winningPoints) {
        const cellNumber = parseInt(cell.innerText);

        if (bombs.includes(cellNumber)) {
            cell.classList.add('bomb');
            gameOver(score, false, bombs);
            return true;
        } else {
            cell.classList.add('safe');
            if (score + 1 === winningPoints) {
                gameOver(winningPoints, true, bombs);
                return true;
            }
            return false;
        }
    }
    
    // * Esecuzione

    const bombs = createBombs(1, gridCells, totalBombs);
    console.log(bombs);

    for(let i = 1; i <= gridCells; i++) {
        const cell = createNewCell(i);
        
        cell.addEventListener('click', function () {
            
            if (this.classList.contains('clicked')) return;
            this.classList.add('clicked');
            console.log(this.innerText);

            const isGameOver = checkGameOver(this, bombs, score, winningPoints);
            if (!isGameOver) score++;
            console.log(score);
        });
        grid.appendChild(cell);
    } 
})




