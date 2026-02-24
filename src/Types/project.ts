import type {ProjectId , UserId} from './id';

export interface Project {
  id: ProjectId;
  name: string;
  description?: string;
  teamMemberIds: UserId[];
  createdAt: string;
  updatedAt?: string;
}
