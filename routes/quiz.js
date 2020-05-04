  
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
        alert("Brilliant");
    }
    else
      {
        alert(answer+ " was not the right answer");
      }
 
  this.questionIndex++;

}



Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
 
    return this.answer === choice;
    
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
      
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};





function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
  
};



function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};



function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("0+0 =  ", ["1", "2", "0", "Do not know"], "0"),
    new Question("500+400+200+72 = ", ["1170", "1171", "1172", "No answer"], "1172"),
    new Question("5+5= ", ["100", "1000", "10", "10000"], "10"),
    new Question("4+5= ", ["1", "3", "5", "No answer"], "No answer")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();