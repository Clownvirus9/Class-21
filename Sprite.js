class Ellipse{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        this.shapeColor = "grey";
        this.vx = 0;
        this.vy = 0;

    }

    display(){

        fill(this.shapeColor);
        this.x = this.x+this.vx;
        this.y = this.y+this.vy;
    

        ellipse(this.x,this.y,this.width,this.height);

    }

    isTouching(target){
      
        if(target.x-this.x <= (this.width+target.width)/2 &&
            this.x-target.x <= (this.width+target.width)/2 &&
            target.y-this.y <= (this.height+target.height)/2 &&
            this.y-target.y <= (this.height+target.height)/2 ){
            return true;
        }
        else{
            return false;
        }
    }

    bounceOff(target){
      
        if(target.x-this.x <= (this.width+target.width)/2 &&
            this.x-target.x <= (this.width+target.width)/2 &&
            target.y-this.y <= (this.height+target.height)/2 &&
            this.y-target.y <= (this.height+target.height)/2 ){
            this.vx = -1*this.vx;
            target.vx = -1*this.vx;
            this.vy = -1*this.vy;
            target.vy = -1*this.vy;
        }
    }

}