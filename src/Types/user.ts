import type {UserId} from './id';
import { UserRole } from './enums';


export interface User {
  id: UserId;
  name: string;
  role: UserRole;
  avatarColor: string;
  email?: string;
  createdAt: string;
}
