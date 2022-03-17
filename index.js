const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "README.md";

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    }