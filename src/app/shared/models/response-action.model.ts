import { HttpErrorResponse } from '@angular/common/http';
export const ResponseLoadingModel = {
  error: false,
  loading: true,
  success: false,
};
export const ResponseErrorModel = {
  error: HttpErrorResponse,
  loading: false,
  success: false,
};
export const ResponseSuccessModel = {
  error: false,
  loading: false,
  success: true,
};
