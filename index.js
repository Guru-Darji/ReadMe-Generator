const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "README.md";

const questions = [
    {
        type: "input",
        message: "Please write the title of your project:",
        name: "title"
    },

    {
        type: "input",
        message: "Please write the description of your project:",
        name: "description"
    },

    {
        type: "input",
        message: "Please write how you would install your project:",
        name: "installation"
    },

    {
        type: "input",
        message: "Please write the contribution guidelines:",
        name: "contribution"
    },

    {
        type: "input",
        message: "Please write the test instructions:",
        name: "tests"
    },

    {
        type: "list",
        message: "Please select a type of license.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "GNU GPLv3"
        ]
    },

    {
        type: "input",
        message: "Please write your GitHub username:",
        name: "username"
    },

    {
        type: "input",
        message: "Please write your email address:",
        name: "email"
    }
];

function writeTheFile(fileName, data) {

    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

function generateMarkdown(data) {

    return `# ${data.title}
  ----
  <a href="https://img.shields.io/badge/License-${data.license[0]}-blue"><img src="https://img.shields.io/badge/License-${data.license[0]}-blue"></a>
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information](#contact-information)
  ### Description
  ${data.description}
  ### Installation
  ${data.installation}
  ### Contribution
  ${data.contribution}
  ### Test-Instructions
  ${data.tests}
  ### Contact-Information
  [Github Profile](https://github.com/${data.username})
  ${data.email}
  `;
  }

  module.exports = generateMarkdown;

  function init() {

      inquirer
       .prompt(questions)
       .then(function(data) {
           writeTheFile(fileName,data)
       })
  }
  

  init();