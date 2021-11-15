const canvas = document.getElementById("Game");
const context = canvas.getContext('2d');

let cPosX = canvas.width/2;
let cPosY = canvas.height/2;
let cVelX = 1;
let cVelY = 1;
let cRad = 20;

const redSlider = document.getElementById("redValue");
const greenSlider = document.getElementById("greenValue");
const blueSlider = document.getElementById("blueValue");

const sizeValue = document.getElementById("sizeValue");

console.log(redSlider)

let ballColor = "rgb(0, 0, 0)";

var counter = document.getElementById("counter"); 

drawCircle();



function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    moveCircle();

    window.requestAnimationFrame(draw);
}

function drawCircle(){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = ballColor;
    context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2*Math.PI);
    context.stroke();
    context.fill();
}

function moveCircle(){
    if(cPosX+cRad >= canvas.width || cPosX-cRad <= 0){
        cVelX *= -1;
    }
    if(cPosY+cRad >= canvas.height || cPosY-cRad <= 0){
        cVelY = cVelY * -1;
    }
    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;
}


canvas.addEventListener("click", function(event){
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRad && distY < cRad){
        console.log("FIRE!!!!!");

        draw();

        counter.innerHTML=parseInt(counter.innerHTML)+1
    }
});


let changeColor = function() {

    console.log("chicken!!!!!!!!!")

    R=redSlider.value;
    G=greenSlider.value;
    B=blueSlider.value;

    ballColor = "rgb(" + R + " , " + G + " , " + B + " )";


}


redSlider.addEventListener("change", changeColor);
greenSlider.addEventListener("change", changeColor);
blueSlider.addEventListener("change", changeColor);

function changeSize() {

    cRad=parseInt(sizeValue.value);

    window.requestAnimationFrame(changeSize);
    

}

sizeValue.addEventListener("change", changeSize)