const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(characters, characterColor, shapeColor) {
      super(characters, characterColor, shapeColor);
    }
    render() {
        return `
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="70" y="20" rx="10" ry="10" width="160" height="160" fill="${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.characterColor}">${this.characters}</text>

        </svg>
        `
    }
}

module.exports = Square;