const container = document.querySelector(".container")
const btn = document.querySelector(".btn")
let number = 16


function randomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return { r, g, b };
}

function darkenColor(rgb, factor){
    const r = Math.floor(rgb.r * (1-factor));
    const g = Math.floor(rgb.g * (1-factor));
    const b = Math.floor(rgb.b * (1-factor));
   return `rgb(${r}, ${g}, ${b})`;
}

function board(size){
    container.innerHTML=""
    let squareSize= 350/size

    for (let i=0; i<size*size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width= `${squareSize}px`;
        cell.style.height= `${squareSize}px`;
        let color = randomColor()
        let darken = 0

        cell.addEventListener('mouseenter', () => {
            if (darken < 1) {
                darken += 0.1;
                cell.style.backgroundColor = darkenColor(color, darken);
            }
        });
        container.appendChild(cell);
    }
}   
    btn.addEventListener("click", () => {
        let newSize = parseInt(prompt('Enter new grid size (max 100):'));
        if (newSize > 100) newSize = 100;
        if (newSize && newSize > 0) {
        number = newSize;
        board(number);
}
    })


board(number)

