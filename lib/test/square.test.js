const Square = require('../square.js')

describe('Square', () => {
    it('should return user specified logo', () => {
        const square = new Square('jca','white','blue');
        expect(square.render()).toEqual(`
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="70" y="20" rx="10" ry="10" width="160" height="160" fill="blue"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">jca</text>

        </svg>
        `)
    })
})