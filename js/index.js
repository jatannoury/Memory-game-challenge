
const audio1=new Audio("../assets/sounds/green.mp3")
const audio2=new Audio("../assets/sounds/red.mp3")
const audio3=new Audio("../assets/sounds/yellow.mp3")
const audio4=new Audio("../assets/sounds/blue.mp3")
gameover=0;
//function: Click
//input: x => int designating the box number
//output: None
//functionality: add the hover effect after click while playing the assigned audio
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
//function: autoPlay
//input: array => array holding the box nb needed to be played
//output: None
//functionality: add the hover effect after click while playing the assigned audio
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
//function: getRandomInt
//input: int=> min,max => 2 numbers each defining respectively the upper and lower boudaries of the required random nb
//output: int
//functionality: returns a random int between min and max
function getRandomInt(min, max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max - min +1)) + min;
        }
//function: gameOver
//input: None
//output: None
//functionality: resets the game   
function gameOver(){
    document.getElementById('Body').style.backgroundColor= 'Red';  //changes the color of the box
    setTimeout(function resetColor(){//Resets the color of the box after 0.5s
            document.getElementById('Body').style.backgroundColor= 'Blue'; 
            document.getElementById('Body').addEventListener("click",function(){location.reload()})//location.reload() resets the js code
            
    },1000)}   
//function: compare
//input: None
//output: Bool
//functionality: compares the last elemet added to array1 and the corresponding index in array     
function compare(array1,array){
    if (array1[array1.length-1]!=array[array1.length-1]){
        console.log("array1",array1)
        console.log("array",array)
        return false;
        }
        
        return true;
    } 
//function: Start
//input: array
//output: None
//functionality: connects all the functions  defined  
function Start(array){
    array1=[]
    if (!array)array=[getRandomInt(1,4)]
    autoPlay(array);
    //function: onClick
    //input: int indicating box clicked
    //output: None
    //functionality: calls Click fct, pushes into array1 and compares
    function onClick(y) { 
        switch(y){
            case 1:
                Click(1);
                array1.push(1);
                if (!compare(array1,array)){
                    document.getElementById("titre").innerHTML="Game Over,Press Any Key To Restart";
                    gameover++;
                    gameOver();
                    return;
                    }
                    break;
            case 2:
                Click(2);
                array1.push(2);
                if (compare(array1,array)==false){
                    document.getElementById("titre").innerHTML="Game Over,Press Any Key To Restart";
                    gameover++;
                    gameOver();
                    return;
                    }
                    break;
            case 3:
                Click(3);
                array1.push(3);
                if (!compare(array1,array)){
                    document.getElementById("titre").innerHTML="Game Over,Press Any Key To Restart";
                    gameover++;
                    gameOver();
                    }
                    break;
            case 4:
                Click(4);
                array1.push(4);
                if (!compare(array1,array)){
                    document.getElementById("titre").innerHTML="Game Over,Press Any Key To Restart";
                    gameover++;
                    gameOver();
                    return;
                    }
                    break;}
                if (array1.length==array.length){
                    rand=getRandomInt(1,4)
                    autoPlay([rand]);
                    array.push(rand);
                    array1=[];
                    document.getElementById("titre").innerHTML=`Level ${array.length}`
                    return;   
                    }    
                    
                    
            }
            
      
    document.getElementById('box2').addEventListener("click",function (){onClick(2)});
    document.getElementById('box3').addEventListener("click",function (){onClick(3)});
    document.getElementById('box4').addEventListener("click",function (){onClick(4)});
    document.getElementById('box1').addEventListener("click",function (){onClick(1)});
    setTimeout(function(){
        document.getElementById('Body').addEventListener("click",function (){
            if(!gameover)return;
        document.getElementById("titre").innerHTML="Level 1";
        
    },1000)});
    
    }
document.getElementById("Body").addEventListener("click",function(){
    document.getElementById("titre").innerHTML="Level 1";
    Start()},{once:true})