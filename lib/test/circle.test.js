const Circle = require('../circle.js')

describe('Circle', () => {
    it('should return user specified logo', () => {
        const circle = new Circle('jca','white','blue');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="blue" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">jca</text>

        </svg>
        `)
    })
})