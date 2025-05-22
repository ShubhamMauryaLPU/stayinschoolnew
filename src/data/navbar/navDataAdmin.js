const navDataAdmin = [
    {
        id:1,
        name:"Admin Dashboard",
        children:[{
        id:11,
        name:"Colleges",
        children1:[
          {id:111,name:"Graduation Colleges",link:"/admindashboard/allcolleges/gradutation",state:false},
          {id:112,name:"Intermediate Colleges",link:"/admindashboard/allcolleges/intermediate",state:false},
          {id:113,name:"Higher Secondary School",link:"/admindashboard/allcolleges/hsecondary",state:false},
          {id:114,name:"Secondary School ",link:"/admindashboard/allcolleges/secondary",state:false},
          {id:115,name:"Primary School",link:"/admindashboard/allcolleges/primary",state:false},
        ],
        link:"/allcolleges",
        state:false
      },
      {
        id:12,
        name:"Add",
        children1:[
          {id:121,name:"Add Colleges/School",link:"/admindashboard/addcolleges/colleges-school",state:false},
          {id:122,name:"Add Teachers",link:"/admindashboard/addcolleges/addteachers",state:false},
          {id:123,name:"Add Students",link:"/admindashboard/addcolleges/addstudents",state:false},
          {id:124,name:"Add Admin",link:"/admindashboard/add/addadmin",state:false}
        ],
        link:"/addcollege-teacher-studnets",
        state:false
      },
      {
        id:13,
        name:"Remove",
        children1:[
          {id:131,name:"Remove Colleges/School",link:"/admindashboard/removecolleges/colleges-school",state:false},
          {id:132,name:"Remove Teachers",link:"/admindashboard/removecolleges/teachers",state:false},
          {id:133,name:"Remove Students",link:"/admindashboard/removecolleges/students",state:false}
        ] ,
        link:"/remove-college-teacher-studnets",
        state:false
      }
    ],
    // link:"/admindashboard",
    state:false
    },
    {
      id: 2,
      name: "Community Hub",
      children: [
        {
          id: 21,
          name: "Reading Material",
          children1: [
            {id: 211, name: "Technical Material",link: "/community/reading/technical",state: false},
            {id: 212,name: "Non Technical Material",link: "/community/reading/nontechnical",state: false},
            {id: 213,name: "Higher School Material",link: "/community/reading/school",state: false},
            {id: 214,name: "Primary Material",link: "/community/reading//primary",state: false},
  
        ],
          link: "/community/reading",
          state: false,
        },
        {
          id: 22,
          name: "Online classes",
          children1: [
            {id: 221, name: "Technical classes",link: "/community/onlineclasses/technical",state: false},
            {id: 222,name: "Non Technical classes",link: "/community/onlineclasses/nontechnical",state: false},
            {id: 223,name: "Higher School classes",link: "/community/onlineclassese/school",state: false},
            {id: 224,name: "Primary classes",link: "/community/onlineclasses/primary",state: false},
        ],
          link: "/community/onlineClasses",
          state: false,
        },
        {
          id: 23,
          name: "virtual tutoring",
          children1: [
            {id: 231, name: "Technical tutoring",link: "/community/tutoring/technical",state: false},
            {id: 232,name: "Non Technical tutoring",link: "/community/tutoring/nontechnical",state: false},
            {id: 233,name: "Higher School tutoring",link: "/community/tutoring/school",state: false},
            {id: 234,name: "Primary tutoring",link: "/community/tutoring/primary",state: false},
        ],
          link: "/community/tutoring",
          state: false,
        },
      ],
      // link: "/community",
      state: false,
    },
    {
      id: 3,
      name: "Web Learning",
      children: [
        {
          id: 31,
          name: "Interactive Lessons",
          children1: [
            {id: 311, name: "Technical Lessons",link: "/learning/lessons/technical",state: false},
            {id: 312,name: "Non Technical Lessons",link: "/learning/lessons/nontechnical",state: false},
            {id: 313,name: "Higher School Lessons",link: "/learning/lessons/school",state: false},
            {id: 314,name: "Primary Lessons",link: "/learning/lessons/primary",state: false},
        ],
          link: "/learning/lessons",
          state: false,
        },
        {
          id: 32,
          name: "Quizzes",
          children1: [
            {id: 321, name: "Technical Quizzes",link: "/learning/quizzes/technical",state: false},
            {id: 322,name: "Non Technical Quizzes",link: "/learning/quizzes/nontechnical",state: false},
            {id: 323,name: "Higher School Quizzes",link: "/learning/quizzes/hschool",state: false},
            {id: 324,name: "Primary Quizzes",link: "/learning/quizzes/primary",state: false},
        ],
          link: "/learning/quizzes",
          state: false,
        },
        // {
        //   id: 33,
        //   name: "Progress Tracking",
        //   children1: [
        //     {id: 331, name: "College Progress",link: "/learning/progress/college",state: false},
        //     {id: 332,name: "Intermediate Progress",link: "/learning/progress/intermediate",state: false},
        //     {id: 333,name: "Higher School Progress",link: "/learning/progress/school",state: false},
        //     {id: 334,name: "Primary Progress",link: "/learning/progress/primary",state: false},
        // ],
        //   link: "/learning/progress",
        //   state: false,
        // },
      ],
      // link: "/learning",
      state: false,
    },
    {
      id: 4,
      name: "Financial Support",
      children: [
        // {
        //   id: 41,
        //   name: "Application",
        //   children1: [
        //     {id: 411, name: "Check Eligiblity",link: "/financial/application/eligiblity",state: false},
        //     {id: 412,name: "Fill Form",link: "/financial/application/fillfrm",state: false},
        // ],
        //   link: "/financial/application",
        //   state: false,
        // },
        {
          id: 42,
          name: "Application tracking",
          children1: [
            {id: 411, name: "Current Status",link: "/financial/tracking/status",state: false},
            {id: 412,name: "Form Detail",link: "/financial/tracking/frmdetail",state: false}
        ],
          link: "/financial/tracking",
          state: false,
        },
        {
          id: 43,
          name: "Disbursements",
          children1: [
            {id: 411, name: "Current Disbursements",link: "/financial/disbursements/current",state: false},
            {id: 412,name: "Remaining Disbursements",link: "/financial/disbursements/remaining",state: false}
        ],
          link: "/financial/disbursements",
          state: false,
        },
      ],
      // link: "/financial",
      state: false,
    },
    {
      id: 5,
      name: "Student Support",
      children: [
        {
          id: 51,
          name: "Counseling resources",
          children1: [
            {id: 511, name: "Technical resources",link: "/student/counseling/technical",state: false},
            {id: 512,name: "Non Technical resources",link: "/student/counseling/nontechnical",state: false},
            {id: 513,name: "Higher School resources",link: "/student/counseling/school",state: false},
            {id: 514,name: "Primary resources",link: "/student/counseling/primary",state: false},
  
        ],
          link: "/student/counseling",
          state: false,
        },
        {
          id: 52,
          name: "Motivational content",
          children1: [
            {id: 521, name: "Motivational",link: "/student/motivation/adult",state: false},
            {id: 522,name: "Children Motivational",link: "/student/motivation/children",state: false},
        ],
          link: "/student/motivation",
          state: false,
        },
        {
          id: 53,
          name: "Academic goals",
          children1: [
            {id: 511, name: "Technical goals",link: "/student/goals/technical",state: false},
            {id: 512,name: "Non Technical goals",link: "/student/goals/nontechnical",state: false},
            {id: 513,name: "Higher School goals",link: "/student/goals/school",state: false},
            {id: 514,name: "Primary goals",link: "/student/goals/primary",state: false},
  
        ],
          link: "/student/goals",
          state: false,
        },
      ],
      // link: "/student",
      state: false,
    },
    { id: 6, name: "About Us", link: "/about", state: false },
    { id: 7, name: "Contact Us", link: "/contact", state: false },
  ];

  export default navDataAdmin;
  