#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter your firstnumber", type: "number", name: "firstnumber" },
    {
        message: "Enter your secondnumber",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(chalk.blue(`answer is : ${answer.firstnumber + answer.secondnumber}`));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellow(`answer is : ${answer.firstnumber - answer.secondnumber}`));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.red(`answer is : ${answer.firstnumber * answer.secondnumber}`));
}
else if (answer.operator === "Division") {
    console.log(chalk.green(`answer is : ${answer.firstnumber / answer.secondnumber}`));
}
else {
    console.log(chalk.red(`please select correct operator`));
}
