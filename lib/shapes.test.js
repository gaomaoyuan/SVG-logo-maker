const { Circle, Square, Triangle } = require('./shapes');

test('Circle SVG string', () => {
    const circle = new Circle('#FF0000');
    expect(circle.svgString()).toBe('<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="#FF0000" />');
});

test('Square SVG string', () => {
    const square = new Square('#00FF00');
    expect(square.svgString()).toBe('<rect width="200" height="200" x="50" y="0" style="fill:#00FF00;stroke-width:3;stroke:rgb(0,0,0)" />');
});

test('Triangle SVG string', () => {
    const triangle = new Triangle('#0000FF');
    expect(triangle.svgString()).toBe('<polygon points="150,10 300,200 10,200" style="fill:#0000FF;stroke-width:3;stroke:rgb(0,0,0)" />');
});
