const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"]
  }
];

inquirer.prompt(questions).then(function({ username }) {
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  axios.get(queryUrl).then(function(res) {
    console.log(res);
  });
});

function writeToFile(fileName, data) {}

function init() {}

init();
