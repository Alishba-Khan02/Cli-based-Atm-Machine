#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 12345;

let pinAnswers = await inquirer.prompt(
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin",
    }
)

if (pinAnswers.Pin === myPin) {
    console.log("The entered pin code is accurate!");

    let transectionAnswers = await inquirer.prompt(

        [
            {
                name: "transection",
                type: "list",
                message: "Select your transection",
                choices: ["Cash Withdrawl", "Fast Cash", "Check Balance", "PIN Change"]
            }
        ]
    );


    if (transectionAnswers.transection === "Cash Withdrawl") {

        let withdrawlAnswer = await inquirer.prompt(
            [
                {
                    name: "withdrawl",
                    type: "number",
                    message: "Enter the amount to withdrawl",
                }
            ]
        );
        if (withdrawlAnswer.withdrawl <= myBalance) {
            myBalance -= withdrawlAnswer.withdrawl;

            console.log(`Withdrawl Successfully!, Your remaining balance is: ${myBalance}`)
        }
    }
    else if (transectionAnswers.transection === "Fast Cash") {
        let cashAnswer = await inquirer.prompt(
            [
                {
                    name: "cash",
                    type: "list",
                    message: "Select the amount to Fast Cash",
                    choices: ["1000", "2000", "3000", "5000", "8000", "9000", "10000"]
                }
            ]
        );
        myBalance -= cashAnswer.cash;
        console.log(`The fast cash withdrawl was completed successfully, Your remaining balance is: ${myBalance}`);
    }
    else if (transectionAnswers.transection === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }

    else if (transectionAnswers.transection === "PIN Change") {
        let changePinAnswer = await inquirer.prompt(
            [
                {
                    name: "changePin",
                    type: "number",
                    message: "Enter the correct current PIN to change it.",
                }
            ]
        );
        if (changePinAnswer.changePin === myPin) {
            let newPinAnswer = await inquirer.prompt(
                [
                    {
                        name: "newPin",
                        type: "number",
                        message: "Enter the new PIN.",
                    }
                ]
            );
            myPin = newPinAnswer.newPin;
            console.log(`The PIN has been changed successfully, Your new PIN is: ${myPin}`);
        }
        else {
            console.log("The PIN you entered is incorrect!");
        }
    }
}


else {
    console.log("Invalid Pin");
}