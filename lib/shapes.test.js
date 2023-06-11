const {circle,triangle,square} = require('./shapes');

describe('Circle', () => {
    test('renders a yellow circle', () => {
      const shape = new circle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="yellow"/>`);
    });
  });


  describe('Square', () => {
      test('renders a red square', () => {
        const shape = new square()
        shape.setColor("red");
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="red"/>`);
      });
    });
 
  describe('Triangle', () => {
      test('renders a green triangle', () => {
        const shape = new triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"/>`);
      });
    });
    