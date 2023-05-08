const inquirer = require('inquirer');
const fs = require('fs');
const file = ("./examples/logo.svg");
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

function findShape(res) {
    if(res.shape === 'circle') {
        var logo = new Circle(res.characters, res.characterColor, res.shapeColor);
    }
    if(res.shape === 'square') {
        var logo = new Square(res.characters, res.characterColor, res.shapeColor);
    }
    if(res.shape === 'triangle') {
        var logo = new Triangle(res.characters, res.characterColor, res.shapeColor);
    }
}

inquirer
  .prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters:',
    },
    {
        type: 'input',
        name: 'characterColor',
        message: 'Enter color keyword or hexidecimal for character color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color keyword or hexidecimal for shape color:',
    }])
    .then((res) => {
        var logo;
        if(res.shape === 'circle') {
            logo = new Circle(res.characters, res.characterColor, res.shapeColor);
        }
        if(res.shape === 'square') {
            logo = new Square(res.characters, res.characterColor, res.shapeColor);
        }
        if(res.shape === 'triangle') {
            logo = new Triangle(res.characters, res.characterColor, res.shapeColor);
        }
        console.log(logo);
        const stringLogo = logo.render();
        fs.writeFile(file, stringLogo, () => console.log("Logo generated"));
      
    })