// require = require("esm")(module);
const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = ""
const userQuestions = ""
const userInput = ""
const data = ""





inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter 3 characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for your text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape:',
      },
  ])
  
//    .then method, data is the value of the .then promise / fileName will hold the value of the `template literal` / in the `` text is converted to lower case,
//      .split method and join removes spaces in teh string / json is file extention in json file format / 
  .then((data) => {
    const filename = `${data.text.toLowerCase().split(' ').join('')}.json`;


//         fs.writeFile is a built in method that writes data to a file /  fileNmae is the file we are writing the data to /  json.stringafy() basically deals with the data being
//          writin to teh file, converts data to a string /  err is all a callback function to be executed after data is writen to file to check it all went well  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });