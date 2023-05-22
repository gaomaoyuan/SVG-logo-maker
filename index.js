const readline = require('readline');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const shapeClasses = { Circle, Square, Triangle };

rl.question('Please enter the text for the logo (up to 3 characters): ', (text) => {
    if (text.length > 3) {
        console.log('Text must be 3 characters or less.');
        rl.close();
        return;
    }
    rl.question('Please enter the text color for the logo: ', (textColor) => {
        rl.question('Please enter the shape for the logo (circle, square, triangle): ', (shapeType) => {
            if (!shapeClasses[shapeType.charAt(0).toUpperCase() + shapeType.slice(1)]) {
                console.log('Invalid shape. Please enter either "circle", "square" or "triangle".');
                rl.close();
                return;
            }
            rl.question('Please enter the color for the shape: ', (shapeColor) => {
                const ShapeClass = shapeClasses[shapeType.charAt(0).toUpperCase() + shapeType.slice(1)];
                const shape = new ShapeClass(shapeColor);
                const svgContent = `
                xmlns='http://www.w3.org/2000/svg
                    <svg height="300" width="400">
                        ${shape.svgString()}
                        <text x="150" y="150" fill="${textColor}" style="font-size:48px; text-anchor: middle;" >${text}</text>
                    </svg>
                `;
                const filename = 'logo';
                fs.writeFile(`${filename}.svg`, svgContent, (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                    } else {
                        console.log(`Generated ${filename}.svg`);
                    }
                    rl.close();
                });
            });
        });
    });
});

