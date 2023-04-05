$(document).ready(function(){
    const questions = ["Which year was Nazarbayev University founded?", 
	"What is the capital of Kazakhstan"];
    const answers = ["2009", "Astana"];
    const choice_options = [["2010", "2009", "2011", "2012"], 
	["Almaty", "Shymkent", "Karaganda", "Astana"],];
    let countCorrect = 0;
    let reset = false;
    
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const choices = choice_options[i];
        const letters = ['a', 'b', 'c', 'd'];
        const $question = $("<div class='question'>");
        $question.append(`<p class='d'>Q${i + 1}. ${q}</p>`);
        for (let j = 0; j < choices.length; j++) {
            const choice = choices[j];
            const letter = letters[j];
            $question.append(`<label><input type='radio' name='q${i+1}' value='${choice}'><span>${choice}</span></label>`);
        }
        $("#quiz-box").append($question);
    }
    
    $("button").click(function(event){
        countCorrect = 0;
        $("input[type='radio']:checked").each(function(){
            const $label = $(this).parent();
            const choice = $label.find('span').text();
            const questionIndex = parseInt($(this).attr('name').substr(1)) - 1;
            if (choice === answers[questionIndex]) {
                countCorrect++;
            }
        });
        $("#quiz-box").append(`<h2>Result of the quiz is: ${countCorrect}/${questions.length}</h2>`);
        $("input[type='radio']").prop('checked', false);
    }); 

});
