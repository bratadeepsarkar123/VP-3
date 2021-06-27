class Name{
    constructor(){
        this.name=createInput("").attribute("placeholder", "Name");;
        this.click=createButton('GO \n (minute)\n(version)');
        this.heading=createElement('h1')
       // this.clicks=0;

    }
   display(){
       this.name.position(width*(1/10),height/2+100*height/678);
       this.name.size(width*3/4,100);
       this.name.style("font-size", "48px");
       this.name.style("font-family", "Pristina");

       this.click.position(width*9/10,height/2+100*height/678);
       this.click.size(100,100);
       this.click.style("font-size", "25px");
       this.click.style("font-family", "Edwardian Script ITC");
      
       this.heading.html("YOUR VIRTUAL PET's NAME FORM")
       this.heading.position(100*width/1366,50*height/678);
       this.heading.style("font-family", "Bradley Hand ITC");
      this.heading.style("font-size","100px")
       this.click.mousePressed(()=>{
         this.name.hide();
         this.click.hide();
        this.heading.hide();
         gameState=1;
       })
       

    }
   noDisplay(){
        this.name.hide();
        this.click.hide();
        push();
        textSize(70*width/1366)
        fill("green");
        strokeWeight(6*width/1366)
        stroke(0)
        text("YOUR VIRTUAL "+this.name.value(),250*width/1366,100*height/678);
          pop();
   }
   
}