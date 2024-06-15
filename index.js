#! /usr/bin/env node 
import inquirer from "inquirer";
// User input
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your first number:",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your second number:",
    },
    {
        name: "operator",
        type: "list",
        mmeesage: "Select the operator:",
        choices: ['+', '-', '*', '/'],
    }
]);
// Variable declaration
let number1 = answers.num1;
let number2 = answers.num2;
let opt = answers.operator;
// Conditional statements
if (opt === "+") {
    console.log(`${number1} ${opt} ${number2} = ${number1 + number2}`);
}
else if (opt === "-") {
    console.log(`${number1} ${opt} ${number2} = ${number1 - number2}`);
}
else if (opt === "*") {
    console.log(`${number1} ${opt} ${number2} = ${number1 * number2}`);
}
else if (opt === "/") {
    console.log(`${number1} ${opt} ${number2} = ${number1 / number2}`);
}
