var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question("What is your name\n");
console.log("welcome " + username);
console.log("Welcome to 'Do you Know Murtaza'\n");

function quiz(question,answer){
  var userAnswer = readlineSync.question("\n"+question+"\n");
  if(userAnswer===answer){
    console.log("Correct!");
    
    score++;
    console.log("Your current score is:"+score);
  }
  else{
    console.log("Wrong!!")
    
    console.log("Your current score is:"+score);
  }

}

var questions = [{
  question : "What is my Fav Camp ?\n",
  answer : "Neog Camp"
},
{
  question : "What is my age?\n",
  answer : "21" 
},
{
  question : "Who is My Idol?\n",
  answer : "Ronaldo"
},
{
  question : "Which is my fav song?\n",
  answer : "Laga reh"
},
{
  question : "My fav sport?\n",
  answer : "Football"
},
{
  question : "My birth month is?\n",
  answer : "April"
}
]

for (var i= 0;i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log("Your Final Score is "+score +" Out of "+questions.length)