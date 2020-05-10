import { HttpErrorResponse } from '@angular/common/http';
export interface ResponseModel {
  error?: HttpErrorResponse | boolean;
  loading?: boolean;
  success?: boolean;
}
