const audio1=new Audio("../assets/sounds/green.mp3")
const audio2=new Audio("../assets/sounds/red.mp3")
const audio3=new Audio("../assets/sounds/yellow.mp3")
const audio4=new Audio("../assets/sounds/blue.mp3")
document.getElementById("audio1").addEventListener("click", function(){Click(1)});
document.getElementById("audio2").addEventListener("click",function(){Click(2)});
document.getElementById("audio3").addEventListener("click", function(){Click(3)});
document.getElementById("audio4").addEventListener("click",function(){Click(4)});
//  function: Click
//  input:x=>int
// output: None
//  this fuction plays the assigned sound of the selected box and gives a hover effect after clicking
function Click(x){
    if (x==1){
        console.log("awe wle");
        document.getElementById('audio1').style.backgroundColor= 'Grey';  //changes the color of the box
        setTimeout(function resetColor(){//Resets the color of the box after 0.5s
            document.getElementById('audio1').style.backgroundColor= 'Green';  
        },500)
        audio1.play();
        
    }
    if (x==2){
        console.log("awe wlee");
        audio2.play();
        document.getElementById('audio2').style.backgroundColor= 'Grey';  
        setTimeout(function resetColor(){
            document.getElementById('audio2').style.backgroundColor= 'Red';  
        },500)
    }
    if (x==3){
        console.log("awe wleee");
        document.getElementById('audio3').style.backgroundColor= 'Grey';  
        setTimeout(function resetColor(){
            document.getElementById('audio3').style.backgroundColor= 'Yellow';  
        },500)
        audio3.play();
    }
    if (x==4){
        console.log("awe wleeee");
        audio4.play();
        document.getElementById('audio4').style.backgroundColor= 'Grey';  
        setTimeout(function resetColor(){
            document.getElementById('audio4').style.backgroundColor= 'DarkBlue';  
        },500)
    }
}
document.getElementById("audio1").click()