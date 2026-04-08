export const UserRole = {
  Developer: "Developer",
  Tester: "Tester",
  Manager: "Manager",
} as const;
export type UserRole = typeof UserRole[keyof typeof UserRole];

export const Priority = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
} as const;
export type Priority = typeof Priority[keyof typeof Priority];

export const StoryStatus = {
  Backlog: "Backlog",
  InProgress: "In Progress",
  Testing: "Testing",
  Done: "Done",
} as const;
export type StoryStatus = typeof StoryStatus[keyof typeof StoryStatus];
