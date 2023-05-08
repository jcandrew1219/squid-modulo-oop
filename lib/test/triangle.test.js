const Triangle = require('../triangle.js');

describe('Triangle', () => {
    it('should return user specified logo', () => {
        const triangle = new Triangle('jca','white','blue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="150, 15 250, 165 50, 165" fill="blue"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">jca</text>
        
        </svg>
        `);
    });
});