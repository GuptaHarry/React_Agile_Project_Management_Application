import type { User } from "../Types/user";
import { UserRole } from "../Types/enums";

export const mockUsers: Record<string, User> = {
  u1: {
    id: "u1",
    name: "Hari Krishna",
    role: UserRole.Developer,
    avatarColor: "#FF5733",
    createdAt: new Date().toISOString(),
  },
  u2: {
    id: "u2",
    name: "Riya Sharma",
    role: UserRole.Tester,
    avatarColor: "#33C3FF",
    createdAt: new Date().toISOString(),
  },
  u3: {
    id: "u3",
    name: "Aman Verma",
    role: UserRole.Manager,
    avatarColor: "#8D33FF",
    createdAt: new Date().toISOString(),
  },
  u4: {
    id: "u4",
    name: "Neha Kapoor",
    role: UserRole.Developer,
    avatarColor: "#FF8C33",
    createdAt: new Date().toISOString(),
  },
  u5: {
    id: "u5",
    name: "Rahul Mehta",
    role: UserRole.Tester,
    avatarColor: "#33FFBD",
    createdAt: new Date().toISOString(),
  },
  u6: {
    id: "u6",
    name: "Sneha Iyer",
    role: UserRole.Developer,
    avatarColor: "#335BFF",
    createdAt: new Date().toISOString(),
  },
};
