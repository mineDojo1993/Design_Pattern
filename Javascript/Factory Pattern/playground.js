
class PointFactory{
    newCartesianPoint(x, y){
        return new Point(x, y);
    }
     newPolarPoint(rho, theta){
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }
}

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static get factory(){
        return new PointFactory();
    }

}

let p1 = Point.factory.newCartesianPoint(4,5);
console.log(p1);


let p2 = Point.factory.newPolarPoint(3,5);
console.log(p2);