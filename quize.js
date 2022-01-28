//var for DOM elements 
var startBtn = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box");
var endBtn  = document.querySelector(".end-game");
var timer = document.querySelector(".timer");

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
var timeLeft = 60
// write function to display questions
function displayQuestion(){
  console.log("displaying")

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
    timeLeft = timeLeft-10;
  }

  if(currentQuestion < questions.length-1){
    currentQuestion++
    displayQuestion()
  }
  else{ 
    endGame()
  }
}
function endGame(){
  console.log("game over");
  questionBox.innerHTML= ""
}
// input INS and storage Local(set iteam)From( local storage getitem);
//quetion box html 
function startTime(){
  console.log("time is here")
  // print value "timeLeft" into timer div using inner HTML
  timer.innerHTML = `<p> time left: ${timeLeft}</p>` 
  timeLeft-- 
  if (timeLeft===0){
    endGame()
  }
}

// write a function to start a game
function startGame(){
  console.log("game start")
  // display question
  displayQuestion();

  //start time
  setInterval(startTime, 1000);

}



// attach eventlistener to start btn
startBtn.addEventListener("click", startGame);

