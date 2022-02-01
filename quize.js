//var for DOM elements 
var startBtn = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box");
var endBtn  = document.querySelector(".end-game");
var timer = document.querySelector(".timer");
var highscoresBtn=document.querySelector('.View-Highscores')
var viewScore= document.querySelector('.score')
var submitButton =document.querySelector("#submitButton");
var nameInput = document.querySelector("#initials");
// var highscoresBtn = document.querySelectorAll(".View Highscores");

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
var timeLeft = 30
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
    console.log('Correct!')
    }
  
  else{
    console.log('incorrect')
    //decrease timer
    if (timeLeft - 10 >= 0){
    timeLeft = timeLeft-10;
  }
  
  }

  // if(currentQuestion <= questions.length-1){  
  //   currentQuestion++ 
  //   displayQuestion();
  // }
  if(currentQuestion < questions.length-1){
    console.log(currentQuestion,questions.lenght-1)
    currentQuestion++
    displayQuestion();
  }else{
    // clearInterval(timeInterval);
endGame()
    //the game ended
    //you are going to save the time left as the score
    //and you re agoing to call the endGame function
    //endgame function will create the input and the button to save
    //the save button will have an event listener that will take the input box with the initials
    //and the score and save it to local storage
    }
  }
  //  CAN WE SET CLEAR INTERVAL FOR TIMEOUT AND NO MORE QUESTIONS? I THINK YES, BUT HOW TO DO IT I TRIED IT AND IT DIDN'T WORK
  
//  creat loop for accessing array of answers evaluate what is correct and incorrect to give score when user inputs initials.(how?)
    
function endGame(){
  // displayMessage()
  console.log("game over");
  // clearInterval(timeInterval);


  localStorage.setItem('nameInput', JSON.stringify(nameInput));
  
  function viewedScore(event){
    event.preventDefault();
    var response = "Here is your score" + "  "  + nameInput.value + " " + " " + timeLeft;
    submitButton.textContent = response;
  }
  submitButton.addEventListener("click",viewedScore );

  


  questionBox.innerHTML= "That would be all!";
 
}

function startTime(){
  console.log("time is here")
  // print value "timeLeft" into timer div using inner HTML
  var timeInterval = setInterval(function(){
  timer.innerHTML = `<p> time left: ${timeLeft}</p>`;
  timeLeft--;
  if (timeLeft < 0){
  clearInterval(timeInterval);
  questionBox.innerHTML= "No More time";
  }
}, 1000);
}

// write a function to start a game
function startGame(){
  console.log("game start")
  // display question
  displayQuestion();

 startTime();
  

}




 highscoresBtn.addEventListener("click",viewScore );
 

// attach eventlistener to start btn
startBtn.addEventListener("click", startGame);

