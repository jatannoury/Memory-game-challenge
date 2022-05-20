
const audio1=new Audio("../assets/sounds/green.mp3")
const audio2=new Audio("../assets/sounds/red.mp3")
const audio3=new Audio("../assets/sounds/yellow.mp3")
const audio4=new Audio("../assets/sounds/blue.mp3")
gameover=0;
function Click(x){
   
    if (x==1){
        document.getElementById('box1').style.backgroundColor= 'white';  //changes the color of the box
        setTimeout(function resetColor(){//Resets the color of the box after 0.5s
            document.getElementById('box1').style.backgroundColor= 'Green';  
        },500)
        audio1.play();
    }
    if (x==2){
        audio2.play();
        document.getElementById('box2').style.backgroundColor= 'White';  
        setTimeout(function resetColor(){
            document.getElementById('box2').style.backgroundColor= 'Red';  
        },500)
    }
    if (x==3){
        document.getElementById('box3').style.backgroundColor= 'White';  
        setTimeout(function resetColor(){
            document.getElementById('box3').style.backgroundColor= 'Yellow';  
        },500)
        audio3.play();
    }
    if (x==4){
         audio4.play();
        document.getElementById('box4').style.backgroundColor= 'White';  
        setTimeout(function resetColor(){
            document.getElementById('box4').style.backgroundColor= 'DarkBlue';  
        },500)
    }
}
function autoPlay(array){
    console.log(array)

    var i=0;
    function autoClick() {      
        setTimeout(function() {   //  call a 1s setTimeout when the loop is called
        Click(array[i]) ; 
        i++;                    
        if (i < array.length) {           
            autoClick();             
        }                       
        }, 1000)
    }
        autoClick();
    }
function getRandomInt(min, max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max - min +1)) + min;
        }
        
         
function compare(array1,array){
    if (array1[array1.length-1]!=array[array1.length-1]){
        console.log("array1",array1)
        console.log("array",array)
        return false;
        }
        
        return true;
    } 