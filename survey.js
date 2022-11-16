const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['What\'s your name? Nicknames are also acceptable :) ', 'What\'s an activity you like doing? ', 'What do you listen to while doing that? ','Which meal is your favourite (eg: dinner, brunch, etc.)', 'What\'s your favourite thing to eat for that meal?', 'Which sport is your absolute favourite?', 'What is your superpower? In a few words, tell us what you are amazing at!?' ]

let answers = []

let i = 0;


const survey = function() {
  if (i < 7) {
    rl.question(questions[i], (answer) => {
      answers.push(answer)
      i++;
      survey();
    });
  } else {
    rl.close()
    console.log(`Your Survey Results: \n Your name is: ${answers[0]} \n The activity you like is: ${answers[1]}\n You like ${answers[2]} listening while you are doing ${answers[1]}\n Your favourite meal is: ${answers[3]}\n Your favourite food: ${answers[4]}\n Your favourite sport is: ${answers[5]}\n Your superpower is: ${answers[6]}`);
  }
}

survey();