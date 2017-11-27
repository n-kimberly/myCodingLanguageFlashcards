'use strict';

var Alexa = require('alexa-sdk');

var flashcardsDictionary = [
    {
      question: 'how do you find the length of a string?',
      rubyAnswer: 'length',
      pythonAnswer: 'len'
    },
    {
      question: 'how do you print to the console or terminal?',
      rubyAnswer: 'puts',
      pythonAnswer: 'print'
    },
    {
       question:'are boolean terms capitalized? Yes or no?',
       rubyAnswer: 'no',
       pythonAnswer: 'yes'
    },
    {
       question:'There are no more questions- congratulations! Please exit the application.',
       rubyAnswer: ' ',
       pythonAnswer: ' '
    }
   ];

var DECK_LENGTH = flashcardsDictionary.length - 1;

var handlers = {

  'LaunchRequest': function() {

    this.attributes['language'] = "";
    this.attributes['numberCorrect'] = 0;
    this.attributes['currentFlashcardIndex'] = 0;

    this.response
        .speak('Welcome to coding language trivia. In this session, do you want to test your knowledge in Ruby or Python?').listen(
        'Which language would you like to practice?');
    this.emit(':responseReady');
  },

  'QuestionIntent': function() {

    this.attributes['language'] = this.event.request.intent.slots.language.value.toLowerCase();

    var language = this.attributes['language'];
    var currentQuestion = flashcardsDictionary[this.attributes.currentFlashcardIndex].question.toUpperCase();

      this.response.speak('Okay, I will ask you some questions about ' + language.toUpperCase() + '. Here is your first question. ' + currentQuestion).listen(currentQuestion);
      this.emit(':responseReady');
    },

  // User gives an answer
  'AnswerIntent': function() {

    var userAnswer = this.event.request.intent.slots.answer.value.toString().toLowerCase();
    var language = this.attributes['language'];
    var languageAnswer = language + 'Answer';
    var correctAnswer = flashcardsDictionary[this.attributes.currentFlashcardIndex][languageAnswer];

    this.attributes['currentFlashcardIndex'] ++;
    var nextQuestion = flashcardsDictionary[this.attributes.currentFlashcardIndex].question.toUpperCase();

    if (userAnswer === correctAnswer) {
      this.attributes['numberCorrect'] ++;
      this.response
          .speak('Nice job! The correct answer is ' + correctAnswer + '. You ' +
            'have gotten ' + this.attributes['numberCorrect'] + ' out of ' + DECK_LENGTH + ' ' +
            language + ' questions correct. Next question, ' + nextQuestion)
          .listen(nextQuestion);

    } else {
      this.response
          .speak('Sorry, the correct answer is ' + correctAnswer + '. You ' +
            'have gotten ' + this.attributes['numberCorrect'] + ' out of ' + DECK_LENGTH + ' ' +
            language + ' questions correct. Here is your next question: ' + nextQuestion)
          .listen(nextQuestion);
    }
    this.emit(':responseReady');
  },

  'AMAZON.StopIntent': function() {
      this.response.speak('Exiting Coding Language Trivia. Let\'s play again soon.');
      this.emit(':responseReady');
  },

  'AMAZON.CancelIntent': function() {
      this.response.speak('Exiting Coding Language Trivia. Let\'s play again soon.');
      this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
