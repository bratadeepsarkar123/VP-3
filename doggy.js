class Dogs{
    constructor(x,y,w,h){
        this.dog=createSprite(x,y,w,h);
      //  this.dog.hide();
      this.x=x;
      this.y=y;
     // this.bed=createButton('BEDROOM');
     this.wup=createButton('Wake Up');
     boRef=database.ref('gamestate');
     boRef.on("value",(data)=>{
         bo=data.val();
     }); 
      
    }
    display(){
        if(this.dog.x<=width*3/10){
            bo=2
            this.update(bo)
        }
        if(lastHr+lastMin/60===hour()+(minute()-1)/60){
            bo=7
            this.wup.hide();
            this.update(bo)

        }
        if(lastHr+lastMin/60===hour()+(minute()-2)/60){
            bo=4
            this.wup.hide();
            this.update(bo)

        }
        if(lastHr+lastMin/60===hour()+(minute()-3)/60){
            bo=5
            this.wup.hide();
            this.update(bo)

        }
        if(lastHr+lastMin/60===hour()+(minute()-4)/60){
            this.wup.position(width*9/10,height/2+100*height/678);
            this.wup.size(100,100);
            this.wup.style("font-size", "48px");
            this.wup.style("font-family", "Edwardian Script ITC");
            bo=6
            this.wup.hide();
            this.update(bo)

        }
        if(lastHr+lastMin/60===hour()+(minute()-4)/60){
            this.wup.show();
        }
       
        if(bo===0){ this.dog.addImage(dogPng);
            this.dog.x=width*3/4
            this.dog.setSpeed(0,180)
            milk1.Dis();
            this.wup.hide();
            
        } 
        this.dog.scale=0.4*width/1366
        
         if(bo===1){
            this.dog.addImage(rLpng);
            this.dog.setSpeed(8,180)
                if(this.dog.x<=width*3/10){
                    bo=2
                    this.update(bo)

                }
                milk1.noDis();

                this.wup.hide();
            
            
        }

        else if(bo===2){
            this.dog.addImage(rRpng);

             this.dog.setSpeed(8,0);
                if(this.dog.x>=width*3/4){
                    bo=3
                 this.update(bo)

                }
                milk1.noDis();
            this.wup.hide();

            
        }else if(bo===3){
            this.dog.x=width*3/4
            this.dog.setSpeed(0,0)
            this.dog.addImage(hDogPng)
            if(lastHr+lastMin/60===hour()+(minute()-2)/60){
                bo=4
                this.update(bo)

    
            }
            this.wup.hide();

        }
        if(bo===4){
            milk1.noDis();
            this.dog.addImage(gardenPng);
            this.dog.scale=0.9;
            if(lastHr+lastMin/60===hour()+(minute()-3)/60){
                bo=5
                this.update(bo)

            }
            this.wup.hide();
            
        }else if(bo===5){
            milk1.noDis();
            this.dog.addImage(wRoomPng);
            this.dog.scale=0.9;
            this.wup.hide();
            if(lastHr+lastMin/60===hour()+(minute()-4)/60){
                bo=6
                this.update(bo)

            }
        }else if(bo===6){
            milk1.noDis();
            this.dog.addImage(bedPng);
            this.dog.scale=0.9;
            this.wup.position(width*9/10,height/2+100*height/678);
            this.wup.size(100,100);
            this.wup.style("font-size", "38px");
            this.wup.style("font-family", "Edwardian Script ITC");
            this.wup.show();
            this.wup.mousePressed(()=>{
                bo=0
                milk1.Dis();
                this.update(bo)})
                this.wup.hide()
            if(lastHr+lastMin/60===hour()+(minute()-5)/60){
               this.wup.show();
            }
            
            
            
        } else if(bo===7){
            milk1.noDis();
            this.dog.addImage(lazyPng);
            this.dog.scale=0.4*width/1366
            if(lastHr+lastMin/60===hour()+(minute()-2)/60){
                bo=4
                this.update(bo)

            }
            this.wup.hide();

        }   
    
       
            //clear()
          
            
            
           
        
       
    }
    update(state){
        database.ref('/').update({
            gamestate:state
            
        })
    }
    
    
}