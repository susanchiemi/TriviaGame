var questions = [{
    question: "The most endangered marine mammal is the?",
    choices: [" seal", " dolphin", " manatee"],
    correctAnswer: 2
}, {
    question: "Snow leopards are found in the?",
    choices: [" Alps", " Himalayas", " Andes"],
    correctAnswer: 1
}, {
    question: "This lizard is the largest of its kind, reaching up to 10 feet and 300 pounds?",
    choices: [" iguana", " komodo dragon", " chameleon"],
    correctAnswer: 1
}, {
    question: "One of the few egg-layng mammals is the?",
    choices: [" wallaby", " cuscus", " platypus"],
    correctAnswer: 2
}, {
    question: "An animal that travels in its mothers' pouch is called a?",
    choices: [" marsupial", " mammal", " martian"],
    correctAnswer: 0
}];



var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                   
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
//not working right
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

//************************  Timer *********************************** 
//Timer not connected to next button
var number = 60;
var intervalID;

//When the start game button gets clicked, execute the run function
$("#start").on("click", run);

function run() {
	intervalID = setInterval(decrement, 1000);
}

//the decrement function
function decrement() {

	number--;

//shows number in the timer digits
//doesn't show the 60, starts at 59, how to fix this??
$("#timer").html(number);

//once number hits zero
//stops at 1 then show 0, how to fix this???
if (number === 0) {
	stop();
	alert("Times Up!") //change to number of correct answers
	}
}

//stop function
function stop () {
clearInterval(intervalID);
}

