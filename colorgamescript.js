// alert("working");
var color=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=color[Math.floor(Math.random()*6)];
var colorDisplay=document.getElementById("colorDisplay");
var printResult=document.querySelector("#message");
var reset=document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var easybtn=document.querySelector(".easybtn");
var hardbtn=document.querySelector(".hardbtn");

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color[i];

    squares[i].addEventListener("click",function(){
        
        if(this.style.backgroundColor===pickedColor){
            console.log("working C");
            printResult.textContent="CORRECT";
            changeColor(pickedColor);
            document.querySelector("h1").style.backgroundImage="none";
            document.querySelector("h1").style.backgroundColor=pickedColor;
            reset.textContent="PLAY AGAIN?";
            
        }
        else{
            console.log("working W");
            this.classList.add("opacityClass");
            printResult.textContent="WRONG";

        }
    });
}

function changeColor(pickedColor){
    for(var i=0;i<squares.length;i++){
        squares[i].classList.remove("opacityClass");
        squares[i].style.backgroundColor=pickedColor;
    }
}

function generateRandomColors(noOfColor){
    var randomColors=[];

    for(var i=0;i<noOfColor;i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        randomColors[i]="rgb("+r+", "+g+", "+b+")";
        console.log(randomColors[i]);
    }
    return randomColors;
}
//when New Color or tryAgain is clicked
reset.addEventListener("click",function(){
    if(reset.textContent==="TRY AGAIN"){
        reset.textContent="NEW COLOR";
    }
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    resetColorGame(true);
});

//When easybtn will click
easybtn.addEventListener("click",function(){

    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    resetColorGame(false);
});

//when hardbtn will click
hardbtn.addEventListener("click",function(){

    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    resetColorGame(true);
});

// to reset the game
function resetColorGame(hard){
    var counter=hard ? 6 :3;
    color=generateRandomColors(counter);
    for(var i=0;i<6;i++){
        if(!color[i]){
            squares[i].style.display="none";
        }
        else{
            squares[i].style.display="block";
            squares[i].style.backgroundColor=color[i];
        }
    }
    pickedColor=color[Math.floor(Math.random()*counter)];
    colorDisplay.textContent=pickedColor;
    printResult.textContent="";
    reset.textContent="New Color";
    document.querySelector("h1").style.backgroundImage="url(https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)";
}