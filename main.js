import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"]
    }
]);
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "substraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Order!");
}
