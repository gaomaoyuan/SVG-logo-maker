class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    svgString() {
        return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    svgString() {
        return `<rect width="200" height="200" x="50" y="0" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    svgString() {
        return `<polygon points="150,10 300,200 10,200" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />`;
    }
}

module.exports = { Circle, Square, Triangle };
