import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {
    constructor(public http: HttpClient) { }
    getBooks(query): Observable<Book[]> {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query.query}&key=AIzaSyB6hiZBAGaa0Kj946BgGl_DFUwFiLWJhCE`;
        return this.http.get<Book[]>(url);
    }
    getBook(selfLink: string) {
        return this.http.get(selfLink);
    }
}
