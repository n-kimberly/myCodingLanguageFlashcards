# **My Coding Language Trivia Skill**

## This Alexa sample skill is a trivia style game with score keeping. Alexa will ask you a coding language trivia questions and seek your response.

<h1 style="text-align: center;"> Example </h1>

> open coding language trivia

      Welcome to coding language trivia. In this session, do you want to test your knowledge in Ruby or Python?

> practice python

      Okay, I will ask you some questions about PYTHON. Here is your first question. HOW DO YOU FIND THE LENGTH OF A STRING?

> is it len?

      Nice job! The correct answer is len. You have gotten 1 out of 3 python questions correct. Next question, HOW DO YOU PRINT TO THE CONSOLE OR TERMINAL

> is it puts?

      Sorry, the correct answer is print. You have gotten 1 out of 3 python questions correct. Here is your next question: ARE BOOLEAN TERMS CAPITALIZED? YES OR NO?

> yes

      Nice job! The correct answer is yes. You have gotten 2 out of 3 python questions correct. Next question, THERE ARE NO MORE QUESTIONS- CONGRATULATIONS! PLEASE EXIT THE APPLICATION.

> exit trivia

       Exiting Coding Language Trivia. Let's play again soon.

<h1 style="text-align: center;"> Skill Details </h1>

#### QuestionIntent sample utterances:

> 'What might a user say to invoke this intent?'

      Practice {language}

      Test my {language}

#### language slot values:

      python

      ruby

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
