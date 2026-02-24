import type {UserId,ProjectId, StoryId} from './id'
import type {User} from './user';
import type { Project } from './project';
import type { UserStory } from './userstory';
import type { UIState } from './uistate';


export interface AppState {
  users: Record<UserId, User>;
  projects: Record<ProjectId, Project>;
  stories: Record<StoryId, UserStory>;
  ui:UIState;
}
