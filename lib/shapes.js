class shapes {
   constructor(text, textColor, shapeColor) {
       this.text = text;
       this.textColor = textColor;
       this.shapeColor = shapeColor;
   }  
}

class circle extends shapes {
    render() {return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class square extends shapes {
    render() {return `<rect x="50" width="200" height="200" fill="${this.color}" />`}
}

class triangle extends shapes {
    render() {return `<polygon height="100" width="100" points="0,200 300,200 150, 0" fill="${this.color}" />`};
};

module.exports = {circle, square, triangle}