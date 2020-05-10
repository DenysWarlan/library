import { ResponseModel } from '../../../shared/models/response.model';

export interface Login extends ResponseModel {
  userId?: number;
  isAutheticated?: boolean;
}
