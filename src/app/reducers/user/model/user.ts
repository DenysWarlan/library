import { ResponseModel } from '../../../shared/models/response.model';

export interface User extends ResponseModel {
  email?: string;
  id?: number;
  password?: string;
  profileId?: number;
  surname?: string;
  username?: string;
}
