var mRef,foodNo,milk,milkPng,dogPng,hDogPng,dog,milk1,namein,bo,lastHrRef,lastMinRef;
var gardenPng,bedPng,lazyPng,lRoomPng,rRpng,rLpng,wRoomPng,boRef;
var database;
var lastHr=0;
var lastMin=0;
var newHr=0;
var newMin=0;
var gameState=0;

foodNo=0;
bo=0;
function preload(){
    milkPng=loadImage("Food Stock.png");
    dogPng=loadImage("Dog.png");
    hDogPng=loadImage("happydog.png");
    gardenPng=loadImage("Garden.png")
    bedPng=loadImage("Bed Room.png")
    lazyPng=loadImage("Lazy.png")
    lRoomPng=loadImage("Living Room.png")
    rRpng=loadImage("running.png")
    rLpng=loadImage("runningLeft.png")
    wRoomPng=loadImage("Wash Room.png")
}
 function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    database=firebase.database();
    namein=new Name();
    dog=new Dogs(width*3/4,height/2,0.008,0.008);
    milk1=new Milk();
   
}
function draw(){
    background("lightBlue")
     drawSprites();
     
    if(gameState===0){
        namein.display();
       
    }else if(gameState===1){   
        namein.noDisplay();
        dog.display();
        milk1.display();
        textSize(20*width/1366)
        fill("blue")
      text("NOTE :- You can only feed once in an minute",55*width/1266,148*height/678) 
      text("Food only gets refill only when food is less than 10",130*width/1266,178*height/678) 
       lastHrRef=database.ref('time/hour');
        lastHrRef.on("value",(data)=>{
            lastHr=data.val();
        });

        lastMinRef=database.ref('time/minute');
        lastMinRef.on("value",(data)=>{
            lastMin=data.val();
        });
        push();
        textSize(40*width/1366)
        fill("red")
        if(lastHr>12){
        text("LAST FEED :- "+(lastHr-12)+":"+lastMin+" PM",width*1/9,400*height/678);
        }else{
        text("LAST FEED :- "+lastHr+":"+lastMin+" AM",width*1/9,400*height/678);
        }
        pop();
       
       
       
      
    }
   
   
}

