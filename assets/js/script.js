var start = document.querySelector("#start");
var quizEl = document.getElementById("quiz");
var Q = 0;
var questionsArr = [
    {
        text: "Question 1",
        choices: ["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 2",
        choices: ["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 3",
        choices: ["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 4",
        choices: ["a","b","c","d"],
        answer: "a"
    },
    {
        text: "Question 5",
        choices: ["a","b","c","d"],
        answer: "a"
    },
]
// function to start the quiz
function startQuiz() {
   document.getElementById("start").setAttribute("class","hide");
   quizEl.removeAttribute("class");
   askQuestion();
}

// function to increment or decrement the timer
function timer() {

}
// function(s) to prompt user input for 4 multiple choice questions
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
            if (Q === undefined) {
                endQuiz();
            }
            askQuestion();
        }
        document.querySelector(".buttons").append(button);
    })
}

// function to display final score and prompt user to enter initials
function endQuiz() {
    document.getElementById
}

// function to store the test score with initials in local storage

// function to displa high scores

// function to prompt user to play again
start.addEventListener("click", startQuiz);