(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <app-books></app-books>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book/book.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row book'>\n    <div class='col-12'>\n      <div class=\"row\">\n        <img src={{book.imageLinks}} class=\"col-6 offset-3 col-sm-6 offset-sm-3 col-md-4 offset-md-4 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0\" />\n        <div class=\"col-sm-12 col-md-8 col-lg-9 col-xl-9  mt-10\">\n          <p class=\"list-group-item-heading fs-16\" *ngIf=\"book.title\">{{ book.title }}</p>\n          <p class=\"list-group-item-text fs-14\" *ngIf=\"book.description\">\n            {{ \n            book.description.length > 300 ? book.description.slice(0, 300) + '...' :\n            book.description }}</p>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/books/books.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books/books.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container outerdiv\" ng-app=\"myApp\" ng-controller=\"MovieController\">\n    <div class=\"booklist\">\n      <div class=\"row mt-10\">\n       <app-search (onSearch)=\"updateBookList($event)\" class=\"col-xs-12 col-lg-8 \"></app-search>\n           <app-book class=\"list-group-item col-xs-12 col-lg-8 mt-10\" *ngFor=\"let book of books\" [book]=\"book\"></app-book>\n       </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Find your book</h4>\n<form>\n  <div class=\"form-group\" style=\"display: flex;\">\n<input type=\"text\" class=\"form-control\" #querySearch>\n<button type=\"submit\" class=\"btn btn-primary ml-10\" (click)=\"searchBook(querySearch)\">Search</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-text {\n  color: white;\n}\n.m-10 {\n  margin: 1rem;\n  margin: 10px;\n}\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px\n}\n.ml-10{\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm0tMTAge1xuICBtYXJnaW46IDFyZW07XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMTBweFxufVxuLm1sLTEwe1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app works!';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"],
            _book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'libary' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fs-16{\n    font-size: 1.6rem;\n    font-size: 16px;\n}\n\n.fs-14 {\n  font-size: 1.4rem;\n  font-size: 14px;\n}\n\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib29rL2Jvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcy0xNntcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mcy0xNCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookComponent = class BookComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "book", void 0);
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html"),
        styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 23px;\n}\n\nhr {\n  border-top: 1px solid rgb(128, 128, 128);\n}\n\n.m-10 {\n  margin: 1rem;\n  margin: 10px;\n}\n\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px\n}\n\n.hidden{\n  display:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgpO1xufVxuXG4ubS0xMCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4XG59XG4uaGlkZGVue1xuICBkaXNwbGF5Om5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.service */ "./src/app/books/books.service.ts");




let BooksComponent = class BooksComponent {
    constructor(booksService, viewContainerRef) {
        this.booksService = booksService;
        this.viewContainerRef = viewContainerRef;
        this.componentData = null;
        this.books = [];
    }
    ngOnInit() {
    }
    updateBookList(query) {
        this.showBooks(query);
    }
    showBooks(query) {
        this.books = [];
        this.booksService.getBooks(query)
            .subscribe((response) => {
            const items = response['items'];
            for (const item of items) {
                const book = {
                    title: '',
                    imageLinks: '',
                    description: ''
                };
                book.title = item.volumeInfo.title;
                if (item.volumeInfo.imageLinks) {
                    book.imageLinks = item.volumeInfo.imageLinks.smallThumbnail;
                }
                if (item.volumeInfo.description) {
                    book.description = item.volumeInfo.description;
                }
                if (book !== undefined) {
                    this.books.push(book);
                }
            }
            return this.books;
        });
    }
};
BooksComponent.ctorParameters = () => [
    { type: _books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/index.js!./src/app/books/books.component.html"),
        providers: [_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]],
        styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/books/books.service.ts":
/*!****************************************!*\
  !*** ./src/app/books/books.service.ts ***!
  \****************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
    }
    getBooks(query) {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${query.query}&key=AIzaSyB6hiZBAGaa0Kj946BgGl_DFUwFiLWJhCE`;
        return this.http.get(url);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BooksService);



/***/ }),

/***/ "./src/app/search/search.component.less":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ml-10 {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1sLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iLCIubWwtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() {
        this.bookEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    searchBook(querySearch) {
        this.bookEmitter.emit({
            query: querySearch.value
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onSearch')
], SearchComponent.prototype, "bookEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponent.prototype, "querySearch", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.less */ "./src/app/search/search.component.less")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/libary/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map