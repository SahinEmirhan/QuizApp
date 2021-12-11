class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    checkAnswer(answer) {
        return answer === this.answer;
    }
}
// Quiz Constructor
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    // Quiz Prototype
    getQuestion() {
        return this.questions[this.questionIndex];
    }
    // Quiz isFinish
    isFinish() {
        return this.questions.length === this.questionIndex;
    }
    // Quiz quess
    quess(answer) {
        let question = this.getQuestion();
        if (question.checkAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}


let q1 = new Question('Which city is the capital of Turkey ?',['Istanbul','Ankara','Izmir','Antalya'],'Ankara');
let q2 = new Question('The World Largest desert is ?',['Thar','Kalahari','Sahara','Sonoran'],'Sahara');
let q3 = new Question('The hottest planet in the solar system ?',['Earth','Venus','Mars','Jupiter'],'Venus');

let questions = [q1,q2,q3];

// Start Quiz



let loadQuestion = function(){
    if(quiz.isFinish()){
        showScore();
    }
    else{
        let question = quiz.getQuestion();
        let choices = question.choices;
        for(let i = 0; i<choices.length;i++){
            let element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            quess('btn'+i,choices[i]);
        }
        showProgress();
        document.querySelector('#question').textContent = question.text;
    }
}

let showScore = function(){
    let html = `<h2>Score</h2><h4>${quiz.score}</h4>`
    document.querySelector('.card-body').innerHTML = html;
}

let quess = function(id,quess){
let btn = document.getElementById(id)
btn.onclick = function(){
    quiz.quess(quess);
    loadQuestion();
}
}
let showProgress = function(){
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML = 'Question '+ questionNumber + ' of ' + totalQuestion
}

let quiz = new Quiz(questions);
loadQuestion();