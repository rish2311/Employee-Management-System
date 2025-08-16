const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage layout in Figma",
        taskDate: "2025-08-20",
        category: "Design",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue in login API",
        taskDate: "2025-08-22",
        category: "Development",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project updates with client",
        taskDate: "2025-08-25",
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
        taskTitle: "Database Backup",
        taskDescription: "Take full backup of MongoDB cluster",
        taskDate: "2025-08-18",
        category: "Database",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Write API documentation for new endpoints",
        taskDate: "2025-08-23",
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
        taskTitle: "Test Payment Gateway",
        taskDescription: "Perform sandbox tests for Razorpay integration",
        taskDate: "2025-08-19",
        category: "Testing",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        taskTitle: "Bug Fix #234",
        taskDescription: "Fix cart total calculation issue",
        taskDate: "2025-08-21",
        category: "Development",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
      {
        taskTitle: "Daily Standup",
        taskDescription: "Attend and share updates in daily standup",
        taskDate: "2025-08-16",
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
        taskTitle: "Optimize Queries",
        taskDescription: "Optimize slow SQL queries in reports module",
        taskDate: "2025-08-24",
        category: "Database",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull request from frontend team",
        taskDate: "2025-08-22",
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
        taskTitle: "Prepare Presentation",
        taskDescription: "Create pitch deck for upcoming client demo",
        taskDate: "2025-08-20",
        category: "Management",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Perform vulnerability assessment of APIs",
        taskDate: "2025-08-28",
        category: "Security",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        taskTitle: "Failed Deployment Fix",
        taskDescription: "Resolve deployment pipeline issue",
        taskDate: "2025-08-15",
        category: "DevOps",
        active: false,
        completed: false,
        newTask: false,
        failed: true,
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

  // console.log(employees, admin);
  return { employees, admin };
};
