//var for DOM elements 
var startBtn = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box");
var endBtn  = document.querySelector(".end-game");

// create an array of objects for quiz questions and answers
var questions = [
  {
    question: "What tag defines a division or the beginning/end of an individual section in an HTML document?", 
    answers: ["table", "image", "div", "meta"],
    correct: "div"
  },
  {
    question: "What tag is used to define a list item (in a bulleted list)?", 
    answers: ["li", "ul", "s", "u"],
    correct: "li"
  },
  {
    question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?", 
    answers: ["title", "footer", "body", "head"],
    correct: "head"
  }
]
// create varables to control the flow of the quiz
var currentQuestion = 0
// write function to display questions
function displayQuestion(){
  console.log("displaying")


  // questions.textContent = questions[currentQuestion].question;
  // questionAnswer = questions[currentQuestion].answers;

  // for (let i = 0; i < questions.length; i++){
  //   let answerBtnEl = document.createElement("button");
  //   answerBtnEl.textContent = questions[i]
    
  // }


  // create template for HTMl inside question box
  var template = `
  <h2>${questions[currentQuestion].question}</h2>
  <button onclick="evaluateQuestion(this)">${questions[currentQuestion].answers[0]}</button>
  <button onclick="evaluateQuestion(this)">${questions[currentQuestion].answers[1]}</button>
  <button onclick="evaluateQuestion(this)">${questions[currentQuestion].answers[2]}</button>
  <button onclick="evaluateQuestion(this)">${questions[currentQuestion].answers[3]}</button>
 
  `


  // inject template into question box with inner html method
  questionBox.innerHTML = template;
}


function evaluateQuestion(event){
console.log(event)//we want to see what we are clicking

//if we click answer 1 event.target.textContent is equal to answer1
console.log(event.textContent)
//event.target.textContent is going to give us the text of the answer 
var userChoice= event.textContent;
//if answer1 is the same as questions[currentQuestion].correct
var correctAnswer=questions[currentQuestion].correct;
console.log(correctAnswer)

if(userChoice===correctAnswer){
  console.log('correct!')
  //
}else{
  console.log('incorrect')
  //decrease timer
}

if(currentQuestion < questions.length-1){
  currentQuestion++
  displayQuestion()
}
else{
  // function to end game and clear highscores
 
}

}
// write a function to start a game
function startGame(){
  console.log("game start")
  // display question
  displayQuestion();

}

// attach eventlistener to start btn
startBtn.addEventListener("click", startGame);




// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }
