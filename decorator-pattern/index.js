class Shape {
    constructor(){

    }
    draw(){
        throw new Error('Must be implemented');
    }
}

class Triangle extends Shape {
    draw(){
        return 'Triangle';
    }
}

class Circle extends Shape {
    draw(){
        return 'Circle';
    }
}

class ShapeDecorator extends Shape{
    constructor(shape){
        super();
        this.shape = shape;
    }
}
class ColorDecorator extends ShapeDecorator {
    constructor(color, shape) {
        super(shape);
        this.color = color;
        this.shape = shape;
    }
    draw(){
        return this.color + ' ' + this.shape.draw();  
    }
}

class BorderDecorator extends ShapeDecorator {
    constructor(shape) {
        super(shape);
        this.shape = shape;
    }
    draw(){
        return this.shape.draw() + ' with border';  
    }
}

const test = ()=> {
    const circle = new Circle();
    console.log(circle.draw());
    const redCircle = new ColorDecorator('red', circle);
    console.log(redCircle.draw());
    const redCircleWithBorder = new BorderDecorator(redCircle);
    console.log(redCircleWithBorder.draw());
}
test();
