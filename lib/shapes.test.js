const {Circle, Triangle, Square} = require("./shapes")

describe("triangle test", () => {

    test("test that a blue triangle is created", () => {
        var expectedTriangleSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedTriangleSvg);
    })
})
describe("circle test", () => {

    test("test that a blue circle is created", () => {
        var expectedCircleSvg = '<circle cx="150" cy="100" r="50" fill="blue" />'
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedCircleSvg);
    })
})
describe("square test", () => {

    test("test that a blue square is created", () => {
        var expectedSquareSvg = '<rect x="70" y="20" width="160" height="160" rx="20" ry="20" fill="blue" />'
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedSquareSvg);
    })
    test("test that color attribute is blue", () => {
        var expectedColor = "blue"
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.getColor()).toEqual(expectedColor);
    })

})

