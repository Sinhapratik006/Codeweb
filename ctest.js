const questions = [
  {
    question: "1.) Which language is used for web apps?",
    options: { A: "Python", B: "JavaScript", C: "C++", D: "Java" },
    answer: "B",
  },

  {
    question: "2.) Who developed the C programming language?",
    options: {
      A: "James Gosling",
      B: "Dennis Ritchie",
      C: "Bjarne Stroustrup",
      D: "Ken Thompson",
    },
    answer: "B",
  },
  {
    question: "3.) C language was developed at which laboratory?",
    options: {
      A: "Bell Labs",
      B: "IBM Labs",
      C: "Microsoft Research",
      D: "MIT",
    },
    answer: "A",
  },
  {
    question: "4.) Which symbol is used to end a statement in C?",
    options: { A: ".", B: ":", C: ";", D: "," },
    answer: "C",
  },
  {
    question: "5.) Which of these is a valid C variable name?",
    options: { A: "int", B: "1value", C: "_count", D: "value$" },
    answer: "C",
  },
  {
    question:
      "6.) What is the default return type of a function in C if not specified?",
    options: { A: "void", B: "int", C: "float", D: "char" },
    answer: "B",
  },
  {
    question: "7.) Which of the following is a loop in C?",
    options: { A: "repeat", B: "for", C: "foreach", D: "iterate" },
    answer: "B",
  },
  {
    question: "8.) C language is a ____ level language.",
    options: { A: "High", B: "Low", C: "Middle", D: "Machine" },
    answer: "C",
  },
  {
    question: "9.) Which header file is used for input and output in C?",
    options: { A: "conio.h", B: "stdio.h", C: "process.h", D: "string.h" },
    answer: "B",
  },
  {
    question: "10.) What is the correct syntax to output 'Hello World' in C?",
    options: {
      A: "echo('Hello World');",
      B: "printf('Hello World');",
      C: "Console.Write('Hello World');",
      D: "cout << 'Hello World';",
    },
    answer: "B",
  },
  {
    question: "11.) Which of these is a valid comment in C?",
    options: {
      A: "<!-- comment -->",
      B: "# comment",
      C: "// comment",
      D: "** comment **",
    },
    answer: "C",
  },
  {
    question: "12.) Which operator is used to get the address of a variable?",
    options: { A: "*", B: "&", C: "%", D: "$" },
    answer: "B",
  },
  {
    question: "13.) Which keyword is used to define a constant in C?",
    options: { A: "let", B: "static", C: "const", D: "define" },
    answer: "D",
  },
  {
    question:
      "14.) What is the correct format specifier for an integer in printf?",
    options: { A: "%c", B: "%d", C: "%f", D: "%s" },
    answer: "B",
  },
  {
    question: "Which function is used to read a string from input?",
    options: { A: "scanf", B: "fgets", C: "input", D: "gets" },
    answer: "B",
  },
  {
    question: "Which of these operators has the highest precedence?",
    options: { A: "+", B: "*", C: "()", D: "=" },
    answer: "C",
  },
  {
    question: "What is the size of an int variable in C (on most systems)?",
    options: {
      A: "2 bytes",
      B: "4 bytes",
      C: "8 bytes",
      D: "Depends on compiler",
    },
    answer: "D",
  },
  {
    question: "What is the output of sizeof(char)?",
    options: { A: "1", B: "2", C: "4", D: "8" },
    answer: "A",
  },
  {
    question: "Which keyword is used to stop a loop or switch statement?",
    options: { A: "stop", B: "return", C: "exit", D: "break" },
    answer: "D",
  },
  {
    question: "What is the index of the first element in an array in C?",
    options: { A: "1", B: "0", C: "-1", D: "Depends" },
    answer: "B",
  },
  {
    question: "Which operator is used to dereference a pointer?",
    options: { A: "&", B: "*", C: "@", D: "$" },
    answer: "B",
  },
  {
    question: "Which function terminates the program immediately?",
    options: { A: "stop()", B: "end()", C: "exit()", D: "return()" },
    answer: "C",
  },
  {
    question: "What is the range of a signed char in C?",
    options: {
      A: "-128 to 127",
      B: "0 to 255",
      C: "-255 to 255",
      D: "Depends",
    },
    answer: "A",
  },
  {
    question: "Which operator is used for logical AND in C?",
    options: { A: "&", B: "&&", C: "|", D: "||" },
    answer: "B",
  },
  {
    question: "Which function is used to allocate memory in C?",
    options: { A: "malloc()", B: "alloc()", C: "new()", D: "memalloc()" },
    answer: "A",
  },
  {
    question: "Which function is used to free allocated memory?",
    options: { A: "delete()", B: "free()", C: "dealloc()", D: "remove()" },
    answer: "B",
  },
  {
    question: "Which keyword is used to declare a structure in C?",
    options: { A: "struct", B: "structure", C: "union", D: "enum" },
    answer: "A",
  },
  {
    question: "Which loop checks the condition after executing the loop body?",
    options: { A: "for", B: "while", C: "do-while", D: "repeat-until" },
    answer: "C",
  },
  {
    question: "What is the default value of static int variable?",
    options: { A: "0", B: "garbage", C: "null", D: "undefined" },
    answer: "A",
  },
  {
    question: "Which symbol is used to include a header file?",
    options: { A: "#", B: "@", C: "$", D: "%" },
    answer: "A",
  },
  {
    question: "Which function is used to find the length of a string?",
    options: { A: "strlen()", B: "size()", C: "strlength()", D: "length()" },
    answer: "A",
  },
  {
    question: "What is the base of the octal number system?",
    options: { A: "8", B: "10", C: "16", D: "2" },
    answer: "A",
  },
  {
    question: "Which data type is usually 1 byte long?",
    options: { A: "char", B: "int", C: "float", D: "double" },
    answer: "A",
  },
  {
    question: "What is the purpose of the return statement?",
    options: {
      A: "To stop execution",
      B: "To return a value",
      C: "To exit the program",
      D: "To restart function",
    },
    answer: "B",
  },
  {
    question: "Which function is used to compare two strings?",
    options: {
      A: "strcmp()",
      B: "strcomp()",
      C: "compstr()",
      D: "strcompare()",
    },
    answer: "A",
  },
  {
    question: "Which library contains the math functions?",
    options: { A: "math.h", B: "stdlib.h", C: "stdio.h", D: "ctype.h" },
    answer: "A",
  },
  {
    question: "Which keyword is used to define an enumeration?",
    options: { A: "define", B: "enum", C: "enumerate", D: "set" },
    answer: "B",
  },
  {
    question: "Which statement transfers control to a function?",
    options: { A: "goto", B: "return", C: "call", D: "function" },
    answer: "C",
  },
  {
    question: "Which keyword prevents modification of a variable?",
    options: { A: "locked", B: "constant", C: "const", D: "final" },
    answer: "C",
  },
  {
    question: "What is the output of 5/2 in C?",
    options: { A: "2.5", B: "2", C: "3", D: "Error" },
    answer: "B",
  },
  {
    question: "Which operator is used for bitwise OR?",
    options: { A: "|", B: "||", C: "&", D: "!" },
    answer: "A",
  },
  {
    question: "What is the size of a float typically?",
    options: { A: "2 bytes", B: "4 bytes", C: "8 bytes", D: "10 bytes" },
    answer: "B",
  },
  {
    question: "Who is known as the father of C programming?",
    options: {
      A: "James Gosling",
      B: "Dennis Ritchie",
      C: "Tim Berners-Lee",
      D: "Bill Gates",
    },
    answer: "B",
  },
  {
    question: "Which statement is used to continue to the next iteration?",
    options: { A: "next", B: "skip", C: "continue", D: "goto" },
    answer: "C",
  },
  {
    question: "Which function converts string to integer?",
    options: { A: "atoi()", B: "itoa()", C: "strtoint()", D: "convert()" },
    answer: "A",
  },
  {
    question: "Which symbol is used for preprocessor directives?",
    options: { A: "@", B: "#", C: "$", D: "%" },
    answer: "B",
  },
  {
    question: "Which function copies one string to another?",
    options: {
      A: "copystr()",
      B: "strcpy()",
      C: "strcopy()",
      D: "stringcopy()",
    },
    answer: "B",
  },
  {
    question: "Which operator is used to combine conditions?",
    options: { A: "+", B: "||", C: "&&", D: "==" },
    answer: "C",
  },
  {
    question: "Which of these is not a storage class in C?",
    options: { A: "auto", B: "register", C: "extern", D: "internal" },
    answer: "D",
  },
  {
    question: "Which header file defines NULL?",
    options: { A: "stddef.h", B: "stdlib.h", C: "stdio.h", D: "string.h" },
    answer: "A",
  },
  {
    question: "Which variable is visible to all functions?",
    options: { A: "local", B: "global", C: "static", D: "auto" },
    answer: "B",
  },
  {
    question: "Which function is used to handle errors in C?",
    options: { A: "error()", B: "perror()", C: "handle()", D: "warning()" },
    answer: "B",
  },
];
let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".options button");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.question;
  buttons[0].textContent = `A. ${q.options.A}`;
  buttons[1].textContent = `B. ${q.options.B}`;
  buttons[2].textContent = `C. ${q.options.C}`;
  buttons[3].textContent = `D. ${q.options.D}`;
  resultEl.textContent = "";
}

function checkAnswer(answer) {
  if (answer === questions[index].answer) {
    score++;
    resultEl.textContent = "Score: " + score;
    resultEl.style.color = "green";

    index++;
    if (index < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      questionEl.textContent = "Congratulations! You answered all correctly!";
      document.querySelector(".options").style.display = "none";
    }
  } else {
    resultEl.textContent = "Wrong! Restarting...";
    resultEl.style.color = "red";

    index = 0;
    score = 0; // Reset score
    setTimeout(loadQuestion, 1000);
  }
}

loadQuestion();
