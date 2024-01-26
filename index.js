// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your full name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How would user installl program?",
    },
    {
        type: "input",
        name: "usage",
        message: "How would user use the program?",
    },
    {
        type: "input",
        name: "contributions",
        message: "Specify guidelines for contributors to follow.",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose license for project.",
        choices: ["None", "MIT", "Boost1.0", "APACHE2.0", "GPL3.0"],
    },
    {
        type: "input",
        name: "tests",
        message: "Specify how to test the application",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email?",
    },
    {
        type: "input",
        name: "readmeTitle",
        message: "Type name for readME",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
