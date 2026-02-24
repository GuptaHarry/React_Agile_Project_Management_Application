import type { StoryId , ProjectId,UserId } from "./id";
import { Priority,StoryStatus } from "./enums";
export interface UserStory {
  id: StoryId;
  projectId: ProjectId;
  title: string;
  description: string;
  priority: Priority;
  storyPoints: number;
  assignedUserId: UserId | null;
  status: StoryStatus;
  createdAt: string;
  updatedAt?: string;
}
