import readlineSync from "readline-sync";

const questionEven = () => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hi, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumber = Math.floor(Math.random() * 10);
  console.log(`Question: ${randomNumber}`);

  const answerOfUser = readlineSync.question("Your answer: ");

  for (let i = 0; i < 3; i += 1) {
    const trueAnswerOne = randomNumber % 2 === 0 && answerOfUser === "yes";
    const trueAnswerTwo = randomNumber % 2 !== 0 && answerOfUser === "no";

    if (trueAnswerOne === true || trueAnswerTwo === true) {
      console.log("Correct!");
    } else {
      if (ansverOfUser === "yes") {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + UserName + "!");
        return;
      }
      if (ansverOfUser === "no") {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + UserName + "!");
        return;
      }
    }
  }
};

questionEven();
