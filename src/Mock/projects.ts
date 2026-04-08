// import type { Project } from "../Types/project";

// export const mockProjects: Record<string, Project> = {
//   p1: {
//     id: "p1",
//     name: "Agile Management App",
//     description: "Kanban-based project management system with workflow tracking.",
//     teamMemberIds: ["u1", "u2", "u3", "u6", "u4"],
//     createdAt: new Date().toISOString(),
//   },

//   p2: {
//     id: "p2",
//     name: "To Do App",
//     description: "CRUD-based task management application with authentication.",
//     teamMemberIds: ["u1", "u4", "u5"],
//     createdAt: new Date().toISOString(),
//   },

//   p3: {
//     id: "p3",
//     name: "E-Commerce Platform",
//     description: "Full-stack shopping platform with payment gateway integration.",
//     teamMemberIds: ["u2", "u3", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p4: {
//     id: "p4",
//     name: "AI Resume Analyzer",
//     description: "AI-powered resume evaluation and scoring system.",
//     teamMemberIds: ["u1", "u3", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p5: {
//     id: "p5",
//     name: "Healthcare Appointment System",
//     description: "Online doctor appointment booking and patient management.",
//     teamMemberIds: ["u2", "u4", "u5", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p6: {
//     id: "p6",
//     name: "Real Estate Listing Portal",
//     description: "Property listing platform with search filters and maps.",
//     teamMemberIds: ["u1", "u2", "u3"],
//     createdAt: new Date().toISOString(),
//   },

//   p7: {
//     id: "p7",
//     name: "Fitness Tracking Dashboard",
//     description: "Track workouts, calories, and progress analytics.",
//     teamMemberIds: ["u4", "u5"],
//     createdAt: new Date().toISOString(),
//   },

//   p8: {
//     id: "p8",
//     name: "Learning Management System",
//     description: "Course management platform for students and instructors.",
//     teamMemberIds: ["u1", "u3", "u5", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p9: {
//     id: "p9",
//     name: "Stock Market Analytics Tool",
//     description: "Visualize stock trends with predictive analytics models.",
//     teamMemberIds: ["u2", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p10: {
//     id: "p10",
//     name: "Travel Planning App",
//     description: "Plan trips, itineraries, and hotel bookings in one place.",
//     teamMemberIds: ["u1", "u4", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p11: {
//     id: "p11",
//     name: "Chat Messaging Platform",
//     description: "Real-time chat application with WebSocket integration.",
//     teamMemberIds: ["u2", "u3", "u4"],
//     createdAt: new Date().toISOString(),
//   },

//   p12: {
//     id: "p12",
//     name: "Finance Budget Tracker",
//     description: "Personal finance tracking with analytics dashboards.",
//     teamMemberIds: ["u1", "u5"],
//     createdAt: new Date().toISOString(),
//   },

//   p13: {
//     id: "p13",
//     name: "Bug Tracking System",
//     description: "Issue tracking system for software development teams.",
//     teamMemberIds: ["u3", "u4", "u6"],
//     createdAt: new Date().toISOString(),
//   },

//   p14: {
//     id: "p14",
//     name: "Food Delivery Platform",
//     description: "Order food online with restaurant management features.",
//     teamMemberIds: ["u1", "u2", "u5"],
//     createdAt: new Date().toISOString(),
//   },

//   p15: {
//     id: "p15",
//     name: "Social Media Dashboard",
//     description: "Manage posts, analytics, and engagement metrics.",
//     teamMemberIds: ["u2", "u3", "u4", "u5"],
//     createdAt: new Date().toISOString(),
//   },
//    p16: {
//     id: "p16",
//     name: "Full Stack Job Portal ",
//     description: "Full stack job portal with individual abitlties to add job postings regularly along with specified skill tests on time which helpKanban-based project management system with workflow tracking.",
//     teamMemberIds: ["u1", "u2", "u3", "u6", "u4"],
//     createdAt: new Date().toISOString(),
//   }
// };

import type { Project } from "../Types/project";

export const mockProjects: Record<string, Project> = {
  p1: {
    id: "p1",
    name: "Agile Management App",
    description: "Kanban-based project management system with workflow tracking.",
    teamMemberIds: ["u1", "u2", "u3", "u6", "u4"],
    createdAt: "2026-01-22T10:15:00.000Z",
  },

  p2: {
    id: "p2",
    name: "To Do App",
    description: "CRUD-based task management application with authentication.",
    teamMemberIds: ["u1", "u4", "u5"],
    createdAt: "2026-01-01T08:30:00.000Z",
  },

  p3: {
    id: "p3",
    name: "E-Commerce Platform",
    description: "Full-stack shopping platform with payment gateway integration.",
    teamMemberIds: ["u2", "u3", "u6"],
    createdAt: "2026-01-15T09:00:00.000Z",
  },

  p4: {
    id: "p4",
    name: "AI Resume Analyzer",
    description: "AI-powered resume evaluation and scoring system.",
    teamMemberIds: ["u1", "u3", "u6"],
    createdAt: "2026-02-20T11:45:00.000Z",
  },

  p5: {
    id: "p5",
    name: "Healthcare Appointment System",
    description: "Online doctor appointment booking and patient management.",
    teamMemberIds: ["u2", "u4", "u5", "u6"],
    createdAt: "2025-12-20T07:15:00.000Z",
  },

  p6: {
    id: "p6",
    name: "Real Estate Listing Portal",
    description: "Property listing platform with search filters and maps.",
    teamMemberIds: ["u1", "u2", "u3"],
    createdAt: "2025-11-05T12:00:00.000Z",
  },

  p7: {
    id: "p7",
    name: "Fitness Tracking Dashboard",
    description: "Track workouts, calories, and progress analytics.",
    teamMemberIds: ["u4", "u5"],
    createdAt: "2026-02-18T09:20:00.000Z",
  },

  p8: {
    id: "p8",
    name: "Learning Management System",
    description: "Course management platform for students and instructors.",
    teamMemberIds: ["u1", "u3", "u5", "u6"],
    createdAt: "2026-01-30T06:40:00.000Z",
  },

  p9: {
    id: "p9",
    name: "Stock Market Analytics Tool",
    description: "Visualize stock trends with predictive analytics models.",
    teamMemberIds: ["u2", "u6"],
    createdAt: "2025-10-10T14:10:00.000Z",
  },

  p10: {
    id: "p10",
    name: "Travel Planning App",
    description: "Plan trips, itineraries, and hotel bookings in one place.",
    teamMemberIds: ["u1", "u4", "u6"],
    createdAt: "2026-02-15T13:25:00.000Z",
  },

  p11: {
    id: "p11",
    name: "Chat Messaging Platform",
    description: "Real-time chat application with WebSocket integration.",
    teamMemberIds: ["u2", "u3", "u4"],
    createdAt: "2026-02-05T09:55:00.000Z",
  },

  p12: {
    id: "p12",
    name: "Finance Budget Tracker",
    description: "Personal finance tracking with analytics dashboards.",
    teamMemberIds: ["u1", "u5"],
    createdAt: "2025-09-12T10:10:00.000Z",
  },

  p13: {
    id: "p13",
    name: "Bug Tracking System",
    description: "Issue tracking system for software development teams.",
    teamMemberIds: ["u3", "u4", "u6"],
    createdAt: "2026-01-05T08:00:00.000Z",
  },

  p14: {
    id: "p14",
    name: "Food Delivery Platform",
    description: "Order food online with restaurant management features.",
    teamMemberIds: ["u1", "u2", "u5"],
    createdAt: "2026-02-23T07:30:00.000Z",
  },

  p15: {
    id: "p15",
    name: "Social Media Dashboard",
    description: "Manage posts, analytics, and engagement metrics.",
    teamMemberIds: ["u2", "u3", "u4", "u5"],
    createdAt: "2025-12-01T15:45:00.000Z",
  },

  p16: {
    id: "p16",
    name: "Full Stack Job Portal",
    description:
      "Full stack job portal with skill assessments and automated candidate evaluation.",
    teamMemberIds: ["u1", "u2", "u3", "u6", "u4"],
    createdAt: "2026-02-24T09:00:00.000Z",
  },
};
