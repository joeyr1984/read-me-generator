const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?",
        default: "joeyr1984"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: "joeyr1984@gmail.com"
      },
      {
        type: "input",
        name: "projectUrl",
        message: "What is the URL to your project?",
        default: "https://github.com/"
      },
      {
        type: "input",
        name: "projectName",
        message: "What is your projects name?",
        default: "project name"
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Description of project?",
        default: "project description"
      },
      {
        type: "list",
        name: "projectLicense",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "dependancyCommand",
        message: "What command should be run to install dependancies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "testCommand",
        message: "What command should be run to run test?",
        default: "npm test"
      },
      {
        type: "input",
        name: "repoGuide",
        message: "What does the user need to know about using the repo?",
        default: "here what you need to know ..."
      },
      {
        type: "input",
        name: "contributeGuide",
        message: "What does the user need to know about contributing to the repo?",
        default: "here what you need to know ..."
      }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
            
        }
    });
}

function init() {
inquirer.prompt(questions).then(answers =>{
    writeToFile("readme.md", generateMarkdown(answers));
})
}

init();
