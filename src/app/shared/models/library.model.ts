import { Book } from './book.model';

export class Library {
    constructor(
        public id: number,
        public books: [{
           book: Book
        }]
    ) { }
}
