var start = document.querySelector("#start");
var quizEl = document.getElementById("quiz");
var Q = 0;
var questionsArr = [
    {
        text: "Commonly used data types do NOT include:",
        choices: ["a. Strings","b. Booleans","c. Alerts","d. Numbers"],
        answer: "c. Alerts"
    },
    {
        text: "The condition in an If/Else statement is enclosed with:",
        choices: ["a. Quotes","b. Curly Brackets","c. Parenthesis","d. Square Brackets"],
        answer: "c. Parenthesis"
    },
    {
        text: "Arrays in JavaScript can be used to store:",
        choices: ["a. Numbers and Strings","b. Other Arrays","c. Booleans","d. All of the Above"],
        answer: "d. All of the Above"
    },
    {
        text: "Strings values must be enclosed with _______ when being assigned to variables.",
        choices: ["a. Commas","b. Curly Brackets","c. Quotes","d. Parenthesis"],
        answer: "c. Quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript","b. Terminal/GitBash","c. For Loops","d. Console.log"],
        answer: "d. Console.log"
    },
]
var initailsFormEl = document.getElementById("end");

// function to start the quiz
function startQuiz() {
   document.getElementById("start").setAttribute("class","hide");
   quizEl.removeAttribute("class");
   askQuestion();
}

// function to increment or decrement the timer
function timer() {

}
// function to prompt user input for 5 multiple choice questions
function askQuestion() {
    document.getElementById("text").textContent=questionsArr[Q].text;
    document.querySelector(".buttons").innerHTML="";
    questionsArr[Q].choices.forEach(function(choice){
        var button = document.createElement("button")
        button.textContent = choice;
        button.setAttribute("value",choice);
        button.onclick = function(){
            console.log(this.value);
            if (this.value === questionsArr[Q].answer) {
                console.log("correct")
            } else {
                console.log("incorrect")
            }
            Q++;
            if (Q > 5) {
                endQuiz();
            }
            askQuestion();
        }
        document.querySelector(".buttons").append(button);
    })
}

// function to display final score and prompt user to enter initials
function endQuiz() {
    document.getElementById("end").textContent=initailsFormEl;
}

// function to store the test score with initials in local storage

// function to display high scores

// function to prompt user to play again
start.addEventListener("click", startQuiz);