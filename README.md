# **My Coding Language Flashcards Skill**

### This Alexa sample skill iterates through flashcards and keeps score to quiz the user on coding language trivia.

<h1 style="text-align: center;"> Example </h1>

> open coding language flashcards

      Welcome to coding language flashcards. Do you want to test your knowledge in Ruby, Python, or JavaScript?

> practice javascript

      Okay, I will ask you some questions about javascript. Here is your first question. How do you find the length of a string?

> is it length?

       Nice job! The correct answer is length. You have gotten 1 out of 3 javascript questions correct. Here is your next question. How do you print to the console or terminal?

> is it puts?

      Sorry, the correct answer is console.log. You have gotten 1 out of 3 javascript questions correct. Here is your next question. Are the boolean terms true and false capitalized?

> exit trivia

       Exiting Coding Language Flashcards. Let's play again soon.

<h1 style="text-align: center;"> Skill Details </h1>

#### QuestionIntent sample utterances:

> 'What might a user say to invoke this intent?'

      Practice {language}

      Test my {language}

#### languages slot values:

      python

      ruby

      javascript

#### AnswerIntent sample utterances:

> 'What will Alexa say to ask the user to fill this slot?'

      Is it {answer}

      I think it's {answer}

#### answer slot values:

      length

      len

      print

      puts

      yes

      no

      console.log
