#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue("Enter your sentence to count words: ")
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of the words
console.log(words);
// print the words count of the sentence 
console.log(chalk.green(`Your sentence words count is ${words.length}`));
