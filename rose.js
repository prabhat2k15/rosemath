
function setup(){
  createCanvas(600,600);
  background(0);
  frameRate(3);
}
// rgb(238,130,238)

var x;
var y;
var k=1;
var n=5,d=1;
var r,g,b;
function draw(){
    background(0);
     translate(width/2,height/2);
r=random(1,255);
g=random(1,255);
b=random(1,255);

     for(var th=0;th<=180;th+=0.01){
         
        x=200*cos(k*th)*cos(th);
        y=200*cos(k*th)*sin(th);
        stroke(r,g,b);
        point(x,y);
     }
k=n/d; d+=0.01;

if(d>=100){d=1;}

     

} 



