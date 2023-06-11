const { circle, triangle, square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'brand',
    message: 'Enter three characters for the logo name:',
    validate: (value) => {
      if (value.length === 3) {
        return true;
      }
      return 'Please enter three characters.';
    },
  },
  {
    type: 'input',
    name: 'colorText',
    message: 'Enter a color for the text or a hexadecimal number:',
  },
  {
    type: 'checkbox',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'colorShape',
    message: 'Enter a color for the shape or a hexadecimal number:',
  },
];

function generateLogo(brand, colorText, shape, colorShape) {
    let logoContent = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    `;
  
    shape.forEach((selectedShape) => {
      switch (selectedShape) {
        case 'circle':
          const circleObj = new circle(colorShape);
          logoContent += circleObj.render();
          break;
        case 'triangle':
          const triangleObj = new triangle(colorShape);
          logoContent += triangleObj.render();
          break;
        case 'square':
          const squareObj = new square(colorShape);
          logoContent += squareObj.render();
          break;
      }
    });
  
    logoContent += `
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="60" fill="${colorText}">${brand}</text>
      </svg>
    `;
  
    return logoContent;
  }

inquirer.prompt(questions).then((answers) => {
  const { brand, colorText, shape, colorShape } = answers;
  const logoSVG = generateLogo(brand, colorText, shape, colorShape);

  fs.writeFile('logo.svg', logoSVG, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Logo file "logo.svg" created successfully!');
    }
  });
});
