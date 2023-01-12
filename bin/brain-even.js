#!/usr/bin/env node

import readlineSync from "readline-sync";

const questionEven = () => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hi, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber}`);

    const answerOfUser = readlineSync.question("Your answer: ").toLowerCase();

    const trueAnswerOne = randomNumber % 2 === 0 && answerOfUser === "yes";
    const trueAnswerTwo = randomNumber % 2 !== 0 && answerOfUser === "no";

    if (trueAnswerOne === true || trueAnswerTwo === true) {
      console.log("Correct!");
    } else {
      if (answerOfUser === "yes") {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      if (answerOfUser === "no") {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      if (answerOfUser !== "no" && answerOfUser !== "yes") {
        console.log(`${answerOfUser} is wrong answer ;(`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

questionEven();
