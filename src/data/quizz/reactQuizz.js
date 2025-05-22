const reactQuiz = [
    {
      question: "What is React primarily used for?",
      options: [
        "Building databases",
        "Creating APIs",
        "Developing user interfaces",
        "Managing server configurations"
      ],
      answer: "Developing user interfaces"
    },
    {
      question: "Which command is used to create a new React app?",
      options: [
        "npx create-react-app my-app",
        "npm create-react-app my-app",
        "react-new my-app",
        "npm init react-app my-app"
      ],
      answer: "npx create-react-app my-app"
    },
    {
      question: "What is JSX?",
      options: [
        "A JavaScript function",
        "A syntax extension for JavaScript",
        "A new JavaScript framework",
        "A type of JSON format"
      ],
      answer: "A syntax extension for JavaScript"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
      answer: "useState()"
    },
    {
      question: "What does the useEffect() hook do?",
      options: [
        "Handles HTTP requests",
        "Runs side effects in components",
        "Manages component state",
        "Optimizes performance"
      ],
      answer: "Runs side effects in components"
    },
    {
      question: "Which method is used to pass data from a parent to a child component?",
      options: ["State", "Hooks", "Props", "Context"],
      answer: "Props"
    },
    {
      question: "What is the correct way to render a component in React?",
      options: [
        "<MyComponent />",
        "render(MyComponent)",
        "<MyComponent>",
        "React.render(MyComponent)"
      ],
      answer: "<MyComponent />"
    },
    {
      question: "Which hook is used for managing side effects?",
      options: ["useState()", "useEffect()", "useReducer()", "useMemo()"],
      answer: "useEffect()"
    },
    {
      question: "What is the purpose of React Router?",
      options: [
        "To manage API calls",
        "To handle navigation in a React app",
        "To optimize component rendering",
        "To store global state"
      ],
      answer: "To handle navigation in a React app"
    },
    {
      question: "What does the Virtual DOM do in React?",
      options: [
        "Directly updates the real DOM",
        "Creates a copy of the real DOM and updates only changes",
        "Replaces the entire DOM on every update",
        "Does not interact with the real DOM"
      ],
      answer: "Creates a copy of the real DOM and updates only changes"
    },
    {
      question: "Which of the following is NOT a built-in React hook?",
      options: ["useState()", "useEffect()", "useFetch()", "useContext()"],
      answer: "useFetch()"
    },
    {
      question: "How do you conditionally render a component in React?",
      options: [
        "Using if-else statements",
        "Using the ternary operator",
        "Using && (logical AND) operator",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is React Context used for?",
      options: [
        "Handling API requests",
        "Managing global state",
        "Optimizing rendering performance",
        "Replacing Redux"
      ],
      answer: "Managing global state"
    },
    {
      question: "What is the default behavior of useEffect()?",
      options: [
        "Runs only once when the component mounts",
        "Runs on every render",
        "Runs only when dependencies change",
        "Runs before the component mounts"
      ],
      answer: "Runs on every render"
    },
    {
      question: "Which lifecycle method is equivalent to useEffect() with an empty dependency array?",
      options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "shouldComponentUpdate"],
      answer: "componentDidMount"
    },
    {
      question: "Which of the following is true about React fragments?",
      options: [
        "They allow grouping elements without adding extra DOM nodes",
        "They replace React components",
        "They work only with lists",
        "They are required in every React component"
      ],
      answer: "They allow grouping elements without adding extra DOM nodes"
    },
    {
      question: "What is the correct way to update state in React?",
      options: [
        "Directly modifying the state object",
        "Using setState() in class components or useState() in functional components",
        "Re-declaring the state variable",
        "None of the above"
      ],
      answer: "Using setState() in class components or useState() in functional components"
    },
    {
      question: "Which function is used to create a new React context?",
      options: ["React.createContext()", "useContext()", "createContext()", "useReducer()"],
      answer: "React.createContext()"
    },
    {
      question: "What is the primary purpose of useReducer()?",
      options: [
        "To handle side effects",
        "To replace useState() for complex state logic",
        "To fetch data from an API",
        "To update the UI"
      ],
      answer: "To replace useState() for complex state logic"
    },
    {
      question: "How do you pass data from a child component to a parent component?",
      options: ["Using props", "Using context", "Using callback functions", "Using useEffect()"],
      answer: "Using callback functions"
    },
    {
      question: "Which React feature allows components to remember information between renders?",
      options: ["Props", "State", "Hooks", "Context"],
      answer: "State"
    },
    {
      question: "What is the purpose of the 'key' prop in React lists?",
      options: [
        "To uniquely identify list items and optimize rendering",
        "To style list elements",
        "To sort elements",
        "To add animations"
      ],
      answer: "To uniquely identify list items and optimize rendering"
    },
    {
      question: "How can you prevent unnecessary re-renders in React?",
      options: ["Using React.memo()", "Using useCallback()", "Using useMemo()", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which package is required for routing in a React app?",
      options: ["react-router", "react-navigation", "react-dom", "react-path"],
      answer: "react-router"
    },
    {
      question: "What is the difference between useState() and useReducer()?",
      options: [
        "useState is for simple state, useReducer is for complex state logic",
        "useReducer replaces useState",
        "useState is used in class components",
        "They are identical"
      ],
      answer: "useState is for simple state, useReducer is for complex state logic"
    },
    {
      question: "Which statement about React components is true?",
      options: [
        "Class components can use lifecycle methods, functional components cannot",
        "Functional components cannot handle state",
        "Functional components cannot use hooks",
        "All React components must be class-based"
      ],
      answer: "Class components can use lifecycle methods, functional components cannot"
    },
    {
      question: "What does lazy loading in React help with?",
      options: [
        "Improving performance by loading components only when needed",
        "Reducing code readability",
        "Making components load synchronously",
        "Disabling unused components"
      ],
      answer: "Improving performance by loading components only when needed"
    }
  ];
  
  export default reactQuiz;
  