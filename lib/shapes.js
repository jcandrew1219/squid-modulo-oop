class Shapes {
    constructor(characters, characterColor, shapeColor) {
      if (characters.length > 3) {
        throw new Error('Your logo may only contain up to 3 characters.');
      }

      if (!/[A-Za-z]/.test(characters)) {
        throw new Error('Your logo may only contain characters.');
      }

      this.characters = characters;
      this.characterColor = characterColor;
      this.shapeColor = shapeColor;
    }
}

module.exports = Shapes;