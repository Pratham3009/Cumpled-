class paperClass{
    constructor(x,y){
        var options = {
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        
           paper = loadImage("paper.png");

           display()
            image(this.image, 0, 0);

           
    }
}