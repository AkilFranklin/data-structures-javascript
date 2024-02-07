/**
 * Can think of classes like cookie cutters. 
 */
class Cookie {
    constructor(color) {
        this.color = color;
    }
    
    // Getter
    getColor() {
        return this.color;
    }

    // Setter
    setColor(color) {
        this.color = color;
    }
}

const cookieOne = new Cookie('green');
const cookieBlue = new Cookie('blue');
