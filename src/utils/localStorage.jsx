const employees = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    employees: [
      {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            title: "Design Homepage",
            description: "Create a responsive homepage layout in Figma",
            date: "2025-08-20",
            category: "Design",
            active: true,
            completed: false,
            newTask: true,
            failed: false,
          },
          {
            title: "Fix Login Bug",
            description: "Resolve authentication issue in login API",
            date: "2025-08-22",
            category: "Development",
            active: true,
            completed: false,
            newTask: false,
            failed: false,
          },
          {
            title: "Client Meeting",
            description: "Discuss project updates with client",
            date: "2025-08-25",
            category: "Management",
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          },
        ],
      },
      {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            title: "Database Backup",
            description: "Take full backup of MongoDB cluster",
            date: "2025-08-18",
            category: "Database",
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          },
          {
            title: "Update Documentation",
            description: "Write API documentation for new endpoints",
            date: "2025-08-23",
            category: "Documentation",
            active: true,
            completed: false,
            newTask: true,
            failed: false,
          },
        ],
      },
      {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            title: "Test Payment Gateway",
            description: "Perform sandbox tests for Razorpay integration",
            date: "2025-08-19",
            category: "Testing",
            active: true,
            completed: false,
            newTask: true,
            failed: false,
          },
          {
            title: "Bug Fix #234",
            description: "Fix cart total calculation issue",
            date: "2025-08-21",
            category: "Development",
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          },
          {
            title: "Daily Standup",
            description: "Attend and share updates in daily standup",
            date: "2025-08-16",
            category: "Meeting",
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          },
        ],
      },
      {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            title: "Optimize Queries",
            description: "Optimize slow SQL queries in reports module",
            date: "2025-08-24",
            category: "Database",
            active: true,
            completed: false,
            newTask: true,
            failed: false,
          },
          {
            title: "Code Review",
            description: "Review pull request from frontend team",
            date: "2025-08-22",
            category: "Development",
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          },
        ],
      },
      {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            title: "Prepare Presentation",
            description: "Create pitch deck for upcoming client demo",
            date: "2025-08-20",
            category: "Management",
            active: true,
            completed: false,
            newTask: true,
            failed: false,
          },
          {
            title: "Security Audit",
            description: "Perform vulnerability assessment of APIs",
            date: "2025-08-28",
            category: "Security",
            active: true,
            completed: false,
            newTask: false,
            failed: false,
          },
          {
            title: "Failed Deployment Fix",
            description: "Resolve deployment pipeline issue",
            date: "2025-08-15",
            category: "DevOps",
            active: false,
            completed: false,
            newTask: false,
            failed: true,
          },
        ],
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees, admin);
};
