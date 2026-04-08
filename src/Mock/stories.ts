import type { UserStory } from "../Types/userstory";
import { Priority, StoryStatus } from "../Types/enums";

export const mockStories: Record<string, UserStory> = {
  // ====================== p1 Agile Management ======================
  s1: {
    id: "s1",
    projectId: "p1",
    title: "Build Kanban board interface",
    description:
      "As a team member, I want a visual Kanban board to track tasks across workflow stages so that project progress is easy to monitor.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u1",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-20T09:00:00.000Z",
  },
  s2: {
    id: "s2",
    projectId: "p1",
    title: "Implement drag-and-drop functionality",
    description:
      "Allow users to drag stories between columns so that status updates feel intuitive and reduce manual edits.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u2",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-21T09:30:00.000Z",
  },
  s3: {
    id: "s3",
    projectId: "p1",
    title: "Add story filtering by user and priority",
    description:
      "Provide filters to quickly find relevant stories based on assigned user or priority level.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u3",
    status: StoryStatus.Testing,
    createdAt: "2026-02-21T10:15:00.000Z",
  },

  // ====================== p2 To Do App ======================
  s4: {
    id: "s4",
    projectId: "p2",
    title: "Create task CRUD backend APIs",
    description:
      "Develop RESTful APIs for managing tasks including creation, updates, deletion, and retrieval.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u4",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-18T10:00:00.000Z",
  },
  s5: {
    id: "s5",
    projectId: "p2",
    title: "Design responsive task list UI",
    description:
      "Create a user-friendly interface that displays tasks with clear visual hierarchy and status indicators.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u1",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-18T12:00:00.000Z",
  },
  s6: {
    id: "s6",
    projectId: "p2",
    title: "Implement task completion notifications",
    description:
      "Notify users when tasks are completed or updated to improve collaboration visibility.",
    priority: Priority.Low,
    storyPoints: 3,
    assignedUserId: "u5",
    status: StoryStatus.Done,
    createdAt: "2026-02-19T08:00:00.000Z",
  },

  // ====================== p3 E-Commerce ======================
  s7: {
    id: "s7",
    projectId: "p3",
    title: "Develop product listing with filters",
    description:
      "Display products with category filters, price sorting, and search functionality for better discovery.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u6",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-17T09:30:00.000Z",
  },
  s8: {
    id: "s8",
    projectId: "p3",
    title: "Integrate payment gateway",
    description:
      "Enable secure checkout by integrating Razorpay payment services and handling transaction validation.",
    priority: Priority.High,
    storyPoints: 13,
    assignedUserId: "u3",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-18T09:00:00.000Z",
  },
  s9: {
    id: "s9",
    projectId: "p3",
    title: "Implement order history dashboard",
    description:
      "Allow customers to view previous orders with tracking status and invoice download options.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u2",
    status: StoryStatus.Testing,
    createdAt: "2026-02-19T11:00:00.000Z",
  },

  // ====================== p4 AI Resume ======================
  s10: {
    id: "s10",
    projectId: "p4",
    title: "Resume upload and parsing module",
    description:
      "Allow users to upload resumes in multiple formats and extract structured information like skills and experience.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u1",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-20T08:45:00.000Z",
  },
  s11: {
    id: "s11",
    projectId: "p4",
    title: "Develop AI scoring algorithm",
    description:
      "Create a scoring engine that evaluates resumes based on job requirements and candidate profile matching.",
    priority: Priority.High,
    storyPoints: 13,
    assignedUserId: "u6",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-21T10:20:00.000Z",
  },
  s12: {
    id: "s12",
    projectId: "p4",
    title: "Display resume analytics dashboard",
    description:
      "Provide visual insights showing strengths, gaps, and improvement recommendations for candidates.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u3",
    status: StoryStatus.Done,
    createdAt: "2026-02-22T11:30:00.000Z",
  },

  // ====================== p5 Healthcare ======================
  s13: {
    id: "s13",
    projectId: "p5",
    title: "Doctor appointment scheduling system",
    description:
      "Allow patients to book appointments with doctors based on availability slots and specialization.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u2",
    status: StoryStatus.InProgress,
    createdAt: "2026-01-20T09:00:00.000Z",
  },
  s14: {
    id: "s14",
    projectId: "p5",
    title: "Patient medical history management",
    description:
      "Store and retrieve patient medical records securely with role-based access control.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u5",
    status: StoryStatus.Backlog,
    createdAt: "2026-01-21T09:00:00.000Z",
  },

  // ====================== p6 Real Estate ======================
  s15: {
    id: "s15",
    projectId: "p6",
    title: "Property search with map integration",
    description:
      "Allow users to browse properties using map-based location filters and pricing criteria.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u1",
    status: StoryStatus.Backlog,
    createdAt: "2025-11-10T09:00:00.000Z",
  },
  s16: {
    id: "s16",
    projectId: "p6",
    title: "Agent contact and inquiry system",
    description:
      "Enable users to contact property agents directly through the platform with inquiry tracking.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u3",
    status: StoryStatus.Done,
    createdAt: "2025-11-12T09:00:00.000Z",
  },

  // ====================== p7 Fitness ======================
  s17: {
    id: "s17",
    projectId: "p7",
    title: "Workout tracking module",
    description:
      "Allow users to log workouts and monitor performance progress over time.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u4",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-18T09:00:00.000Z",
  },
  s18: {
    id: "s18",
    projectId: "p7",
    title: "Calorie tracking integration",
    description:
      "Provide nutrition logging features with calorie calculations and dietary suggestions.",
    priority: Priority.Low,
    storyPoints: 3,
    assignedUserId: "u5",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-18T10:00:00.000Z",
  },

  // ====================== p8 LMS ======================
  s19: {
    id: "s19",
    projectId: "p8",
    title: "Course creation and enrollment workflow",
    description:
      "Enable instructors to create courses and students to enroll seamlessly with payment integration.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u3",
    status: StoryStatus.InProgress,
    createdAt: "2026-01-30T09:00:00.000Z",
  },
  s20: {
    id: "s20",
    projectId: "p8",
    title: "Video streaming module",
    description:
      "Provide smooth video streaming experience with adaptive quality support.",
    priority: Priority.High,
    storyPoints: 13,
    assignedUserId: "u6",
    status: StoryStatus.Backlog,
    createdAt: "2026-01-31T09:00:00.000Z",
  },

  // ====================== p9 Stock Analytics ======================
  s21: {
    id: "s21",
    projectId: "p9",
    title: "Real-time stock data integration",
    description:
      "Fetch live stock market data using third-party APIs and update charts dynamically.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u2",
    status: StoryStatus.InProgress,
    createdAt: "2025-10-12T09:00:00.000Z",
  },
  s22: {
    id: "s22",
    projectId: "p9",
    title: "Predictive analytics model",
    description:
      "Develop ML-based prediction algorithms for stock trend forecasting.",
    priority: Priority.High,
    storyPoints: 13,
    assignedUserId: "u6",
    status: StoryStatus.Backlog,
    createdAt: "2025-10-13T09:00:00.000Z",
  },

  // ====================== p10 Travel ======================
  s23: {
    id: "s23",
    projectId: "p10",
    title: "Trip planning workflow",
    description:
      "Allow users to create travel itineraries including destinations, hotels, and activities.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u1",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-15T09:00:00.000Z",
  },
  s24: {
    id: "s24",
    projectId: "p10",
    title: "Hotel booking integration",
    description:
      "Integrate third-party hotel booking APIs to provide real-time availability and pricing.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u4",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-15T10:00:00.000Z",
  },

  // ====================== p11 Chat ======================
  s25: {
    id: "s25",
    projectId: "p11",
    title: "Real-time messaging system",
    description:
      "Enable instant messaging between users using WebSocket-based communication.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u2",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-05T09:00:00.000Z",
  },
  s26: {
    id: "s26",
    projectId: "p11",
    title: "Message notification system",
    description: "Provide push notifications when new messages are received.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u4",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-05T10:00:00.000Z",
  },

  // ====================== p12 Finance ======================
  s27: {
    id: "s27",
    projectId: "p12",
    title: "Expense categorization module",
    description:
      "Automatically categorize expenses into groups like food, travel, and utilities.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u1",
    status: StoryStatus.InProgress,
    createdAt: "2025-09-15T09:00:00.000Z",
  },
  s28: {
    id: "s28",
    projectId: "p12",
    title: "Budget analytics dashboard",
    description:
      "Provide visual insights into spending patterns and savings trends.",
    priority: Priority.Low,
    storyPoints: 3,
    assignedUserId: "u5",
    status: StoryStatus.Done,
    createdAt: "2025-09-16T09:00:00.000Z",
  },

  // ====================== p13 Bug Tracker ======================
  s29: {
    id: "s29",
    projectId: "p13",
    title: "Bug reporting workflow",
    description:
      "Allow users to report bugs with screenshots, logs, and reproduction steps.",
    priority: Priority.High,
    storyPoints: 5,
    assignedUserId: "u3",
    status: StoryStatus.InProgress,
    createdAt: "2026-01-05T09:00:00.000Z",
  },
  s30: {
    id: "s30",
    projectId: "p13",
    title: "Bug prioritization and assignment",
    description:
      "Enable managers to assign bugs to developers and set severity levels.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u4",
    status: StoryStatus.Backlog,
    createdAt: "2026-01-05T10:00:00.000Z",
  },

  // ====================== p14 Food Delivery ======================
  s31: {
    id: "s31",
    projectId: "p14",
    title: "Restaurant listing and search",
    description:
      "Display nearby restaurants with filtering by cuisine, rating, and delivery time.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u1",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-23T09:00:00.000Z",
  },
  s32: {
    id: "s32",
    projectId: "p14",
    title: "Order tracking system",
    description:
      "Provide real-time tracking of food delivery status to customers.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u2",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-23T10:00:00.000Z",
  },

  // ====================== p15 Social Dashboard ======================
  s33: {
    id: "s33",
    projectId: "p15",
    title: "Post scheduling system",
    description:
      "Allow users to schedule social media posts across multiple platforms.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u2",
    status: StoryStatus.InProgress,
    createdAt: "2025-12-01T09:00:00.000Z",
  },
  s34: {
    id: "s34",
    projectId: "p15",
    title: "Engagement analytics dashboard",
    description:
      "Provide insights on likes, shares, comments, and audience reach.",
    priority: Priority.Low,
    storyPoints: 3,
    assignedUserId: "u5",
    status: StoryStatus.Done,
    createdAt: "2025-12-01T10:00:00.000Z",
  },

  // ====================== p16 Job Portal ======================
  s35: {
    id: "s35",
    projectId: "p16",
    title: "Job posting creation workflow",
    description:
      "Allow recruiters to create and manage job postings with role descriptions and requirements.",
    priority: Priority.High,
    storyPoints: 8,
    assignedUserId: "u1",
    status: StoryStatus.InProgress,
    createdAt: "2026-02-24T09:00:00.000Z",
  },
  s36: {
    id: "s36",
    projectId: "p16",
    title: "Candidate skill assessment integration",
    description:
      "Provide coding assessments to evaluate candidate technical skills automatically.",
    priority: Priority.High,
    storyPoints: 13,
    assignedUserId: "u6",
    status: StoryStatus.Backlog,
    createdAt: "2026-02-24T10:00:00.000Z",
  },
  s37: {
    id: "s37",
    projectId: "p16",
    title: "Applicant tracking dashboard",
    description:
      "Allow recruiters to monitor applicant progress through hiring stages.",
    priority: Priority.Medium,
    storyPoints: 5,
    assignedUserId: "u3",
    status: StoryStatus.Testing,
    createdAt: "2026-02-24T11:00:00.000Z",
  },
};
