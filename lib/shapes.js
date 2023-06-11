class shapes {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = (color);
    }
}

class circle extends shapes {
    render() {return `<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

class square extends shapes {
    render() {return `<rect x="50" height="200" width="200" fill="${this.color}"/>`}
}

class triangle extends shapes {
    render() {return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`};
};

module.exports = {circle, square, triangle}