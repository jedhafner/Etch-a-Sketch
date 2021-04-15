const container = document.querySelector(".container");
const display = document.querySelector(".display");


let squaresPerSide = 8;

let containerLength = 600;


function toPixels(num){
    return num.toString()+"px";
}

let sideLengthPixels = toPixels(containerLength);
console.log(sideLengthPixels);

container.style.height = sideLengthPixels;
container.style.width = sideLengthPixels;



function createGrid(num){
    let squares = num * num;
    for (i = 0; i < squares; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
    let divSide = toPixels(containerLength/squaresPerSide);
    const divs = document.querySelectorAll('div');
    divs.forEach(element => {
        element.style.height = divSide;
        element.style.width = divSide;
        element.style.background = 'purple';
    });
}
createGrid(squaresPerSide);



container.addEventListener('mouseover', function(event){
    event.target.style.background = 'Orange';
})

/* Add a button to the top of the screen which will clear the
current grid and send the user a popup asking for how many 
squares per side (max 100) to make the new grid. Once entered the new 
grid should be generated in the same total space as before 
(e.g. 960px wide) and now you’ve got a new sketch pad. 

*/
let promptMessage = "Set the number of squares per side: enter a whole number 1 - 100."

const resetGrid = () => {
    squaresPerSide = Number(Math.floor(window.prompt(promptMessage, 16)));
    if (squaresPerSide > 100) {
        squaresPerSide = 100;
    } else if (squaresPerSide < 1) {
        squaresPerSide = 1;
    } else if (isNaN(squaresPerSide)){
        squaresPerSide = 16;
    }
    console.log(squaresPerSide);
    console.log(!Number.isInteger(squaresPerSide));
    function removeAllChildNodes(parent) {
        while (parent.firstElementChild) {
            parent.removeChild(parent.firstElementChild);
        }
    }
    console.log(squaresPerSide);
    removeAllChildNodes(container);
    createGrid(squaresPerSide);
    };
let button = document.querySelector('button');

button.onclick = resetGrid;