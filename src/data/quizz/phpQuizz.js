const phpQuiz = [
    {
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "PHP: Hypertext Preprocessor",
        "Private Home Page",
        "Programming Hypertext Processor"
      ],
      answer: "PHP: Hypertext Preprocessor"
    },
    {
      question: "Which symbol is used to start a PHP variable?",
      options: ["$", "@", "&", "#"],
      answer: "$"
    },
    {
      question: "Which function is used to output text in PHP?",
      options: ["echo", "print", "write", "Both echo and print"],
      answer: "Both echo and print"
    },
    {
      question: "Which of the following is the correct way to start a PHP script?",
      options: ["<?php", "<script>", "<?", "<php>"],
      answer: "<?php"
    },
    {
      question: "Which of the following is a PHP superglobal variable?",
      options: ["$_GET", "$GLOBALS", "$_SESSION", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which function is used to count the number of elements in an array?",
      options: ["count()", "sizeof()", "length()", "Both count() and sizeof()"],
      answer: "Both count() and sizeof()"
    },
    {
      question: "Which function is used to check if a file exists in PHP?",
      options: ["exists()", "file_exists()", "is_file()", "check_file()"],
      answer: "file_exists()"
    },
    {
      question: "Which of the following is used to connect to a MySQL database in PHP?",
      options: ["mysqli_connect()", "connect_db()", "mysql_connect()", "db_connect()"],
      answer: "mysqli_connect()"
    },
    {
      question: "Which function is used to start a session in PHP?",
      options: ["start_session()", "session_start()", "init_session()", "session_begin()"],
      answer: "session_start()"
    },
    {
      question: "Which function is used to destroy a session in PHP?",
      options: ["session_destroy()", "session_stop()", "destroy_session()", "unset_session()"],
      answer: "session_destroy()"
    },
    {
      question: "How do you create a cookie in PHP?",
      options: ["cookie_set()", "setcookie()", "create_cookie()", "cookie()"],
      answer: "setcookie()"
    },
    {
      question: "Which PHP function is used to include a file?",
      options: ["require", "include", "Both require and include", "import"],
      answer: "Both require and include"
    },
    {
      question: "Which operator is used for string concatenation in PHP?",
      options: ["+", ".", "&", "||"],
      answer: "."
    },
    {
      question: "Which of the following is a valid PHP variable name?",
      options: ["$var-name", "$1var", "$_var", "$var name"],
      answer: "$_var"
    },
    {
      question: "Which function is used to remove white spaces from a string?",
      options: ["trim()", "strip()", "clean()", "delete()"],
      answer: "trim()"
    },
    {
      question: "Which function is used to convert a string to lowercase?",
      options: ["toLower()", "strtolower()", "lowercase()", "stringToLower()"],
      answer: "strtolower()"
    },
    {
      question: "Which function is used to get the length of a string?",
      options: ["strlen()", "length()", "size()", "count()"],
      answer: "strlen()"
    },
    {
      question: "How do you write a single-line comment in PHP?",
      options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "Both // and #"],
      answer: "Both // and #"
    },
    {
      question: "Which keyword is used to define a class in PHP?",
      options: ["struct", "class", "define", "object"],
      answer: "class"
    },
    {
      question: "How do you define a constant in PHP?",
      options: ["const MY_CONST = 10;", "define('MY_CONST', 10);", "constant('MY_CONST', 10);", "let MY_CONST = 10;"],
      answer: "define('MY_CONST', 10);"
    },
    {
      question: "Which of the following is NOT a valid PHP data type?",
      options: ["Integer", "Float", "Character", "Boolean"],
      answer: "Character"
    },
    {
      question: "Which function is used to generate a random number in PHP?",
      options: ["rand()", "random()", "mt_rand()", "Both rand() and mt_rand()"],
      answer: "Both rand() and mt_rand()"
    },
    {
      question: "Which function is used to get the current date in PHP?",
      options: ["getDate()", "date()", "now()", "currentDate()"],
      answer: "date()"
    },
    {
      question: "Which of the following is used to terminate script execution?",
      options: ["stop()", "exit()", "terminate()", "kill()"],
      answer: "exit()"
    },
    {
      question: "What will `var_dump(NULL);` output?",
      options: ["null", "NULL", "string(0) ''", "bool(false)"],
      answer: "NULL"
    },
    {
      question: "Which function is used to redirect to another page in PHP?",
      options: ["header('Location: page.php');", "redirect('page.php');", "go('page.php');", "navigate('page.php');"],
      answer: "header('Location: page.php');"
    },
    {
      question: "Which function is used to remove an element from an array?",
      options: ["unset()", "remove()", "delete()", "drop()"],
      answer: "unset()"
    },
    {
      question: "How do you check if a variable is an array?",
      options: ["is_array()", "check_array()", "array()", "instanceof array"],
      answer: "is_array()"
    },
    {
      question: "Which function is used to convert an array into a string?",
      options: ["implode()", "explode()", "split()", "join()"],
      answer: "implode()"
    }
  ];
  
  export default phpQuiz;
  