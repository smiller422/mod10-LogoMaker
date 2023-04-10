// require = require("esm")(module);
const { Circle, Triangle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");
// const fs = require("fs");
const{writeFile} = require("fs/promises")

const generateLogo = "";
const userQuestions = "";

const data = "";

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter 3 characters:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for your text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Pick a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for your shape:",
    },
  ])

  //   const userInput = {
  //     text: '',
  //     textColor: '',
  //     shape: '',
  //     shapeColor: ''
  //   };

  // const svgLogo = `
  // <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  //   <rect x="0" y="0" width="500" height="500" fill="${escape(userInput.shapeColor)}" />
  //   ${userInput.shape === 'circle' ? `
  //   <circle cx="250" cy="250" r="100" fill="${escape(userInput.shapeColor)}" />
  //   ` : userInput.shape === 'triangle' ? `
  //   <polygon points="200,350 300,350 250,250" fill="${escape(userInput.shapeColor)}" />
  //   ` : `
  //   <rect x="150" y="300" width="200" height="200" fill="${escape(userInput.shapeColor)}" />
  //   `}
  //   <text x="50" y="150" font-size="100" font-family="Arial" font-weight="bold" fill="${escape(userInput.textColor)}">${escape(userInput.text)}</text>
  // </svg>`;

  // Write the SVG code to a file
  // fs.writeFile('logo.svg', svgTemplate, (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('Logo generated!');
  //     }
  //   });

  //    .then method,() data is the value of the .then promise / fileName will hold the value of the `template literal` / in the `` text is converted to lower case,
  //      .split method and join removes spaces in teh string / json is file extention in json file format /
  .then((data) => {
    console.log(data);
    //     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    //   <circle cx="125" cy="125" r="100" fill="#aeaeae" />
    //   <polygon points="0,0 10,5 0,10" fill="white"/>
    //   <rect x="10" y="10" width="160" height="240" rx="20" ry="20"/>
    //   <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">BC</text>
    // </svg>
    var svgString = "";
    let shapeChoice = null;
    switch (data.shape) {
      case "circle":
        shapeChoice = new Circle();
        break;
      case "triangle":
        shapeChoice = new Triangle();
        break;
      default:
        shapeChoice = new Square();
        break;
    }

    shapeChoice.setColor(data.shapeColor);
    console.log(shapeChoice.getColor());
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += shapeChoice.render();
    svgString += `<text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}" font-size="30px" font-family="Arial" dy=".3em">${data.text}</text>`;
    svgString += "</svg>";

    //         fs.writeFile is a built in method that writes data to a file /  fileNmae is the file we are writing the data to /  json.stringafy() basically deals with the data being
    //          writin to teh file, converts data to a string /  err is all a callback function to be executed after data is writen to file to check it all went well
    // fs.writeFile("logo.svg", svgString, (err) =>
    //   err ? console.log(err) : console.log("Generated logo.svg")
    // );
    return writeFile("logo.svg", svgString);
  })
  .then(() => {
    console.log("Generated logo.svg");
  })
  .catch((err) => {
    console.log(err);
  });
