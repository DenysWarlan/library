export class Book {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public images: string,
        public link: string,
        public authors: string[],
        public categories: string[],
        public publishedDate: string
    ) { }
}
