const container = document.querySelector(".container")


function randomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}


function board(size){

    let squareSize= 960/size

    for (let i=0; i<size*size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width= `${squareSize}px`;
        cell.style.height= `${squareSize}px`;
        let color = randomColor()

        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = color
        })



        container.appendChild(cell);
    }
}   

board(5)

