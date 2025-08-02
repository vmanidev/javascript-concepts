const displayBoard = document.getElementById('display-board');

function display(e) {
    debounceTyping(e.target.value);
}

//debounced version of updateBoard with 1000ms delay
const debounceTyping = debounce(updateBoard, 1000);

//function to update the display board
function updateBoard(text) {
    displayBoard.textContent = text;
}

//debounce function
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    }
}