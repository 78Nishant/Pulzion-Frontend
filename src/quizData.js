// src/quizData.js
const quizData = 
    {
        "battle": {
          "rounds": [
            {
              "module": "Thinking in Code",
              "questions": {
                "multiple_choice": [
                  {
                    "question": "What does an algorithm help a programmer do?",
                    "options": [
                      "Create graphics",
                      "Solve problems step by step",
                      "Write code faster",
                      "Run programs"
                    ],
                    "correct_answer": "Solve problems step by step"
                  },
                  {
                    "question": "Which of the following is NOT a logical operator?",
                    "options": [
                      "AND",
                      "OR",
                      "NOT",
                      "INCLUDE"
                    ],
                    "correct_answer": "INCLUDE"
                  },
                  {
                    "question": "What is the main purpose of using pseudocode?",
                    "options": [
                      "To write code",
                      "To communicate algorithms in plain language",
                      "To debug programs",
                      "To create flowcharts"
                    ],
                    "correct_answer": "To communicate algorithms in plain language"
                  }
                ],
                "true_false": [
                  {
                    "question": "All algorithms must be written in a programming language. (True/False)",
                    "correct_answer": "False"
                  },
                  {
                    "question": "Pseudocode uses everyday language to describe an algorithm. (True/False)",
                    "correct_answer": "True"
                  },
                  {
                    "question": "An algorithm can have multiple solutions. (True/False)",
                    "correct_answer": "True"
                  }
                ],
                "fill_in_the_blank": [
                  {
                    "question": "An _______ is a visual way to represent an algorithm.",
                    "correct_answer": "flowchart"
                  },
                  {
                    "question": "An algorithm must be _______ and clear.",
                    "correct_answer": "specific"
                  },
                  {
                    "question": "A sequence of instructions in an algorithm is called a _______.",
                    "correct_answer": "step"
                  }
                ]
              }
            },
            {
              "module": "Sequences, Conditionals, and Loops",
              "questions": {
                "multiple_choice": [
                  {
                    "question": "What does a 'for' loop do?",
                    "options": [
                      "Repeats a block of code a specified number of times",
                      "Runs code based on a condition",
                      "Makes decisions",
                      "None of the above"
                    ],
                    "correct_answer": "Repeats a block of code a specified number of times"
                  },
                  {
                    "question": "Which statement is used to stop a loop in Python?",
                    "options": [
                      "stop",
                      "break",
                      "exit",
                      "end"
                    ],
                    "correct_answer": "break"
                  },
                  {
                    "question": "What does 'while' mean in programming?",
                    "options": [
                      "Continue until a condition is met",
                      "Repeat a fixed number of times",
                      "End the program",
                      "None of the above"
                    ],
                    "correct_answer": "Continue until a condition is met"
                  }
                ],
                "true_false": [
                  {
                    "question": "You can use an if statement without an else statement. (True/False)",
                    "correct_answer": "True"
                  },
                  {
                    "question": "Loops can only run once. (True/False)",
                    "correct_answer": "False"
                  },
                  {
                    "question": "The condition in a while loop is checked before each iteration. (True/False)",
                    "correct_answer": "True"
                  }
                ],
                "fill_in_the_blank": [
                  {
                    "question": "The _______ keyword allows you to choose an alternative path in your code.",
                    "correct_answer": "else"
                  },
                  {
                    "question": "The _______ statement is used to repeat code while a condition is true.",
                    "correct_answer": "while"
                  },
                  {
                    "question": "In a loop, the code that runs repeatedly is called the _______.",
                    "correct_answer": "body"
                  }
                ]
              }
            },
            {
              "module": "Programming Fundamentals",
              "questions": {
                "multiple_choice": [
                  {
                    "question": "What is the purpose of a function?",
                    "options": [
                      "To store data permanently",
                      "To perform a specific task",
                      "To create graphics",
                      "To end a program"
                    ],
                    "correct_answer": "To perform a specific task"
                  },
                  {
                    "question": "What does 'debugging' mean?",
                    "options": [
                      "Writing new code",
                      "Finding and fixing errors in code",
                      "Running a program",
                      "None of the above"
                    ],
                    "correct_answer": "Finding and fixing errors in code"
                  },
                  {
                    "question": "Which of the following is a data type?",
                    "options": [
                      "if",
                      "while",
                      "integer",
                      "function"
                    ],
                    "correct_answer": "integer"
                  }
                ],
                "true_false": [
                  {
                    "question": "Functions can return values. (True/False)",
                    "correct_answer": "True"
                  },
                  {
                    "question": "You cannot have two functions with the same name in a program. (True/False)",
                    "correct_answer": "False"
                  },
                  {
                    "question": "Variables can change their values during the execution of a program. (True/False)",
                    "correct_answer": "True"
                  }
                ],
                "fill_in_the_blank": [
                  {
                    "question": "A _______ is a reusable block of code that performs a specific task.",
                    "correct_answer": "function"
                  },
                  {
                    "question": "In programming, a _______ is a mistake in code that prevents it from running correctly.",
                    "correct_answer": "bug"
                  },
                  {
                    "question": "The _______ keyword is used to define a function in Python.",
                    "correct_answer": "def"
                  }
                ]
              }
            },
            {
              "module": "Python Basics",
              "questions": {
                "multiple_choice": [
                  {
                    "question": "Which of the following is used to create a list in Python?",
                    "options": [
                      "[]",
                      "{}",
                      "()",
                      "<>"
                    ],
                    "correct_answer": "[]"
                  },
                  {
                    "question": "What does the 'len()' function do?",
                    "options": [
                      "Counts the number of characters in a string",
                      "Finds the maximum number in a list",
                      "Creates a new list",
                      "Checks if a variable exists"
                    ],
                    "correct_answer": "Counts the number of characters in a string"
                  },
                  {
                    "question": "What is the output of print(3 * 'A')?",
                    "options": [
                      "AAA",
                      "3A",
                      "A3",
                      "Error"
                    ],
                    "correct_answer": "AAA"
                  }
                ],
                "true_false": [
                  {
                    "question": "Lists can store different data types in Python. (True/False)",
                    "correct_answer": "True"
                  },
                  {
                    "question": "Indentation is not important in Python. (True/False)",
                    "correct_answer": "False"
                  },
                  {
                    "question": "Strings in Python can be modified. (True/False)",
                    "correct_answer": "False"
                  }
                ],
                "fill_in_the_blank": [
                  {
                    "question": "To declare a variable in Python, you simply write its name and assign it a value using the _______.",
                    "correct_answer": "="
                  },
                  {
                    "question": "In Python, strings must be enclosed in _______ or _______.",
                    "correct_answer": "' or \""
                  },
                  {
                    "question": "A _______ in Python is a collection of key-value pairs.",
                    "correct_answer": "dictionary"
                  }
                ]
              }
            },
            {
              "module": "Web Development Basics",
              "questions": {
                "multiple_choice": [
                  {
                    "question": "What does CSS stand for?",
                    "options": [
                      "Cascading Style Sheets",
                      "Color Style Sheets",
                      "Creative Style Sheets",
                      "Cascading Script Sheets"
                    ],
                    "correct_answer": "Cascading Style Sheets"
                  },
                  {
                    "question": "Which tag is used to create a list in HTML?",
                    "options": [
                      "<ul>",
                      "<li>",
                      "<list>",
                      "<ol>"
                    ],
                    "correct_answer": "<ul>"
                  },
                  {
                    "question": "What is the purpose of JavaScript?",
                    "options": [
                      "To style web pages",
                      "To structure web pages",
                      "To add interactivity to web pages",
                      "To host web pages"
                    ],
                    "correct_answer": "To add interactivity to web pages"
                  }
                ],
                "true_false": [
                  {
                    "question": "HTML is used for creating the structure of web pages. (True/False)",
                    "correct_answer": "True"
                  },
                  {
                    "question": "CSS is responsible for the behavior of a web page. (True/False)",
                    "correct_answer": "False"
                  },
                  {
                    "question": "JavaScript can be used to manipulate HTML elements. (True/False)",
                    "correct_answer": "True"
                  }
                ],
                "fill_in_the_blank": [
                  {
                    "question": "The _______ tag is used to define a paragraph in HTML.",
                    "correct_answer": "p"
                  },
                  {
                    "question": "To link an external CSS file, you use the _______ tag.",
                    "correct_answer": "link"
                  },
                  {
                    "question": "The _______ tag is used to create a hyperlink in HTML.",
                    "correct_answer": "a"
                  }
                ]
              }
            }
          ]
        }
      }
    
      
  ;
  export default quizData;