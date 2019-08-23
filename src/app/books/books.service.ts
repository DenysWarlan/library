import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BooksService {
    constructor(public http: HttpClient) {}
    getBooks(query) {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${query.query}&key=AIzaSyB6hiZBAGaa0Kj946BgGl_DFUwFiLWJhCE`;
        return this.http.get(url);
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}
