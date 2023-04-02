// require = require("esm")(module);
const inquirer = require('inquirer');
const fs = require('fs');



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
  .then((data) => {
    const filename = `${data.text.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });