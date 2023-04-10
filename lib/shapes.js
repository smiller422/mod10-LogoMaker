class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(colorChoice) {
    this.color = colorChoice;
  }
  getColor(){
    return this.color 
  }
}
// 
//   <polygon   
//   <rect x="10" y="10" width="160" height="240" rx="20" ry="20"/>
class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`
    }
}
class Triangle extends Shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
class Square extends Shape{
    render() {
        return `<rect x="70" y="20" width="160" height="160" rx="20" ry="20" fill="${this.color}" />`
    }
}

module.exports = {Circle, Triangle, Square}