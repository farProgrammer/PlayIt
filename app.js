
var categories = (function() {
     var questions = [ {'text': ' what is covid-19?',
                  'answer': 'coronavirus',
                    'pointValue' : 100},
                       {'text': 'who is the president of America?',
                        'answer': 'Joe Biden',
                       'pointValue' : 100},
                      {'text': 'capital of texas?',
                       'answer': 'Austin',
                        'pointValue' : 100},
                       {'text': 'capital of india?',
                        'answer': 'delhi',
                      'pointValue' : 100} ,
                        {'text' : 'what is 3+3?',
                       'answer' : '6',
                        'pointValue' : 100},
                        {'text' : 'eating vegetables?',
                       'answer' : 'healthy',
                       'pointValue' : 100},
                      {'text' : 'paper is made of?',
                       'answer' : 'wood',
                        'pointValue' : 100},
                      {'text' : 'how many states are there in america?',
                     'answer' : '50',
                      'pointValue' : 100},
                      {'text' : 'which vitamin is present in sunlight?',
                       'answer' : 'vitaminD',
                      'pointValue' : 100},
                       {'text' : 'Hamlet Author?',
                      'answer' : 'Shakespeare',
                        'pointValue' : 100},
                       {'text' : 'Bell Jar Author?',
                        'answer' : 'Plath',
                       'pointValue' : 100},
                        {'text' : 'what is our planet name?',
                        'answer' : 'earth',
                        'pointValue' : 100},
                      
                       {'text' : 'No more questions!',
                        'answer' : 'End',
                        'pointValue' : 0},
                      ];
    var exports = {};
    var score = 0;
    var currentQuestion = 0;

    function displayScore(){
        
        $('.score').text(score);
    }

    function onEnter(){
        
        $('.answerBox').keypress(function(event){
            if(event.keyCode == 13 && event.target.className == 'answerBox'){
                $('#answerButton').click();
                return false;
            }
        });
    }

    function buttonClick(){
      
      $('#answerButton').click(function() {
        checkAnswer();
      });
    }

    function checkAnswer(){
        
               if($('.answerBox').val().toLowerCase() == questions[currentQuestion].answer){
                  
         
                    alert("Correct!");
                    score+=questions[currentQuestion].pointValue;
                    displayScore();
                    currentQuestion++;
          $('.answerBox').val("");
               } else {
                  
      
                    alert("Incorrect. The correct answer was: " + questions[currentQuestion].answer + ".");
                    currentQuestion++;
          $('.answerBox').val("");
               }
             displayQuestion();
    }

    function displayQuestion(){
    
        $('.question').text(questions[currentQuestion].text);
    }

    function setup(){
        
        $('.answerBox').focus();

        
        displayQuestion();

      
        displayScore();
        
      
        onEnter();

        
        buttonClick();
    }

    exports.setup = setup;
    return exports;
})();

$(document).ready(function(){
    categories.setup();
});