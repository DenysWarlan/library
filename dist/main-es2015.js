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

module.exports = "<div class=\"home-bg\">\n  <div class=\"overlay\">\n    <div class=\"container\">\n      <app-home-page></app-home-page>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/book/book.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/book/book.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-12'>\n    <div class=\"row\">\n      <img src={{book.images}}\n        class=\"col-4\" width=\"130\" height=\"150\" />\n      <div class=\"col-8 d-flex align-items-center flex-column justify-content-between height-180\">\n        <a href=\"{{book.link}}\" target=\"_blank\">\n          <p class=\"list-group-item-heading fs-16\" *ngIf=\"book.title\">{{ book.title }}</p>\n        </a>\n        <p class=\"list-group-item-text fs-14\" *ngIf=\"book.description\">\n          {{ \n          book.description.length > 67 ? book.description.slice(0, 67) + '...' :\n          book.description }}</p>\n        <button type=\"button\"\n                class=\"btn btn-dark btn-sm\" \n                (click)=\"addToLibrary(book)\"\n                [disabled]=\"!isAuthentication\"\n                >Add to my library</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/books/books.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/books/books.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alert alert-success\" *ngIf=\"isShowAlert\"  role=\"alert\">message.text</div>\n    <div class=\"row mt-10\">\n       <app-search (onSearch)=\"updateBookList($event)\" class=\"col-xs-12 col-lg-6 offset-lg-3\"></app-search>\n    </div>\n    <ngx-slick-carousel \n        class=\"carousel\" \n        #slickModal=\"slick-carousel\"\n        [config]=\"slideConfig\">\n            <app-book \n                ngxSlickItem\n                class=\"slide d-flex align-items-center book\" \n                *ngFor=\"let book of books\" [book]=\"book\"\n                [isAuthentication]=\"isAuthentication\">\n            </app-book>\n    </ngx-slick-carousel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/library-book/library-book.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/library-book/library-book.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{message.type}}\" *ngIf=\"isShowAlert\" role=\"alert\">{{message.text}}</div>\n<div class='row'>\n    <div class='col-12'>\n        <div class=\"row\">\n            <img src={{book.images}} class=\"col-4\" width=\"130\" height=\"150\" />\n            <div class=\"col-8 d-flex align-items-center flex-column justify-content-between height-180\">\n                <a href=\"{{book.link}}\" target=\"_blank\">\n                    <p class=\"list-group-item-heading fs-16\" *ngIf=\"book.title\">{{ book.title }}</p>\n                </a>\n                <p class=\"list-group-item-text fs-14\" *ngIf=\"book.description\">\n                    {{ \n          book.description.length > 67 ? book.description.slice(0, 67) + '...' :\n          book.description }}</p>\n                <button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"removeToLibrary(book)\">Remove</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/search/search.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/search/search.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"white-text\">Find your book</h4>\n<form>\n  <div class=\"form-group d-flex\">\n<input type=\"text\" class=\"form-control\" #querySearch>\n<button type=\"submit\" class=\"btn btn-primary ml-10\" (click)=\"searchBook(querySearch)\">Search</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" *ngIf=\"isAuthentication\" routerLink=\"/{{name}}\">E-library</a>\n                <a class=\"nav-link\" *ngIf=\"!isAuthentication\" routerLink=\"/\">E-library</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthentication\">\n                <a class=\"nav-link\" routerLink=\"/{{name}}/library\">Your library</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthentication\">\n                <a class=\"nav-link\" (click)=logout()>Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/logged-in/logged-in.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/logged-in/logged-in.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"row align-items-md-center\">\n    <div class=\"col-xl-12\" >\n        <h1 class=\"text-center white-text\">Wellcome {{name}}</h1>\n    </div>\n</div>\n<app-books [isAuthentication]=\"isAuthentication\"></app-books>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" col-xs-12 col-md-10 col-lg-8 offset-lg-2 offset-md-1 \">\n    <div class=\"alert alert-{{message.type}}\" *ngIf=\"isShowAlert\"role=\"alert\">{{message.text}}</div>\n    <h2 class=\"white-text text-center\">Sign in</h2>\n    <form [formGroup]=\"form\" (ngSubmit)=\"loginUser()\">\n            <div class=\"form-group white-text\">\n                <label>Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                 <p *ngIf=\"form.get('email').invalid && form.get('email').touched\" class=\"error m-0\">\n                     <span *ngIf=\"form.get('email').errors['required']\">Password requaired</span>\n                     <span *ngIf=\"form.get('email').errors['email']\">\n                         Incorect email!\n                     </span>\n                 </p>\n            </div>\n            <div class=\"form-group white-text\">\n                    <label>Password</label>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"pass\">\n                    <p *ngIf=\"form.get('pass').invalid && form.get('pass').touched\" class=\"error m-0\">\n                        <span *ngIf=\"form.get('pass').errors['required']\">Password requaired</span>\n                        <span *ngIf=\"form.get('pass').errors['minlength']\">\n                            Min password length {{charsCount}}\n                        </span>\n                    </p>\n            </div>\n        <button class=\"btn btn-success\" type=\"submit\" >Login</button>\n        <p class=\"white-text\">Don't have an account?\n            <a routerLink=\"/register\" class=\"btn-link\">Register</a>\n        </p>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"row justify-content-center\">\n    <div class=\"col-12\">\n        <div class=\"alert alert-{{message.type}}\" *ngIf=\"isShowAlert\" role=\"alert\">{{message.text}}</div>\n        <h1 class=\"white-text text-center\">Register and create your library</h1>\n    </div>\n    <div class=\" col-xs-12 col-md-6 col-lg-6\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" class=\"white-text\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\"\n                    class=\"form-control\" formControlName=\"username\"><p\n                        *ngIf=\"form.get('username').invalid && form.get('username').touched\" class=\"error m-0\">\n                        <span *ngIf=\"form.get('username').errors['required']\">Name requaired</span>\n                    </p>\n            </div>\n            <div class=\"form-group\">\n                <label>Surname</label>\n                <input type=\"text\"\n                    class=\"form-control\" formControlName=\"surname\">\n                    <p *ngIf=\"form.get('surname').invalid && form.get('surname').touched\" class=\"error m-0\">\n                        <span *ngIf=\"form.get('surname').errors['required']\">Surname requaired</span>\n                    </p>\n            </div>\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                    <p *ngIf=\"form.get('email').invalid && form.get('email').touched\" class=\"error m-0\">\n                        <span *ngIf=\"form.get('email').errors['required']\">Email requaired</span>\n                        <span *ngIf=\"form.get('email').errors['email']\">\n                            Inccorect email!\n                        </span>\n                    </p>\n                </div>\n                <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"pass\">\n                        <p *ngIf=\"form.get('pass').invalid && form.get('pass').touched\" class=\"error m-0\">\n                            <span *ngIf=\"form.get('pass').errors['required']\">Password requaired</span>\n                            <span *ngIf=\"form.get('pass').errors['minlength']\">\n                                Min password length {{charsCount}}\n                            </span>\n                        </p>\n            </div>\n            <button [disabled]=\"form.invalid\" class=\"btn btn-success\" type=\"submit\">Register</button>\n        </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/unlogged-in/unlogged-in.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/unlogged-in/unlogged-in.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-xl-6\" *ngIf=\"!isAuthentication\">\n        <h1 class=\"text-center white-text\">Wellcome</h1>\n        <p class=\"white-text text-center\"> You can find your favorite or new book.\n            Or You can login and create your library</p>\n        <h5 class=\"text-center white-text\">If you want test user panel please teel <a\n                href=\"https://www.facebook.com/profile.php?id=100006432486709\" target=\"_blank\">me\n            \n            </a>\n        </h5>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-xl-6\" *ngIf=\"!isAuthentication\">\n        <app-login></app-login>\n    </div>\n</div>\n<app-books [isAuthentication]=\"isAuthentication\"></app-books>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-library/user-library.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-library/user-library.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"row\">\n <app-library-book class=\"slide d-flex align-items-center col-4 book\"\n  *ngFor=\"let book of books\" \n  [book]=\"book\" >\n </app-library-book>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");
/* harmony import */ var _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-library/user-library.component */ "./src/app/user/user-library/user-library.component.ts");
/* harmony import */ var _user_unlogged_in_unlogged_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/unlogged-in/unlogged-in.component */ "./src/app/user/unlogged-in/unlogged-in.component.ts");
/* harmony import */ var _user_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/logged-in/logged-in.component */ "./src/app/user/logged-in/logged-in.component.ts");








const appRoutes = [
    { path: '', component: _user_unlogged_in_unlogged_in_component__WEBPACK_IMPORTED_MODULE_6__["UnloggedInComponent"] },
    { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: ':username', canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], component: _user_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_7__["LoggedInComponent"] },
    { path: ':username/library', canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], component: _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_5__["UserLibraryComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-10 {\n  margin: 1rem;\n  margin: 10px;\n}\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px;\n}\n.ml-10 {\n  margin-left: 10px;\n}\n.home-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(\"/assets/images/alfons-morales-YLSwjSy7stw-unsplash.jpg\");\n  background-size: cover;\n}\n.home-bg .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0VBQStFO0VBQy9FLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLTEwIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBtYXJnaW46IDEwcHg7XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uaG9tZS1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2FsZm9ucy1tb3JhbGVzLVlMU3dqU3k3c3R3LXVuc3BsYXNoLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5ob21lLWJnIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuIl19 */"

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
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _shared_services_books_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/books.service */ "./src/app/shared/services/books.service.ts");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _library_books_books_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library/books/books.component */ "./src/app/library/books/books.component.ts");
/* harmony import */ var _library_book_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./library/book/book.component */ "./src/app/library/book/book.component.ts");
/* harmony import */ var _library_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./library/search/search.component */ "./src/app/library/search/search.component.ts");
/* harmony import */ var _library_library_book_library_book_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./library/library-book/library-book.component */ "./src/app/library/library-book/library-book.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/logged-in/logged-in.component */ "./src/app/user/logged-in/logged-in.component.ts");
/* harmony import */ var _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-library/user-library.component */ "./src/app/user/user-library/user-library.component.ts");
/* harmony import */ var _user_unlogged_in_unlogged_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/unlogged-in/unlogged-in.component */ "./src/app/user/unlogged-in/unlogged-in.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _library_books_books_component__WEBPACK_IMPORTED_MODULE_16__["BooksComponent"],
            _library_book_book_component__WEBPACK_IMPORTED_MODULE_17__["BookComponent"],
            _library_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
            _user_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
            _user_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _user_logged_in_logged_in_component__WEBPACK_IMPORTED_MODULE_21__["LoggedInComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
            _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_22__["UserLibraryComponent"],
            _library_library_book_library_book_component__WEBPACK_IMPORTED_MODULE_19__["LibraryBookComponent"],
            _user_unlogged_in_unlogged_in_component__WEBPACK_IMPORTED_MODULE_23__["UnloggedInComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'libary' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
        ],
        providers: [_shared_services_books_service__WEBPACK_IMPORTED_MODULE_8__["BooksService"], _shared_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home-page/home-page.component.less":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.less */ "./src/app/home-page/home-page.component.less")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/library/book/book.component.css":
/*!*************************************************!*\
  !*** ./src/app/library/book/book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fs-16{\n    font-size: 1.6rem;\n    font-size: 16px;\n}\n\n.fs-14 {\n  font-size: 1.4rem;\n  font-size: 14px;\n}\n\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px\n}\n\n.height-180{\n  height: 180px;\n}\n\n.book {\n  background-color: white;\n  height: 210px;\n  padding: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9ib29rL2Jvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnMtMTZ7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZnMtMTQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMTBweFxufVxuLmhlaWdodC0xODB7XG4gIGhlaWdodDogMTgwcHg7XG59XG4uYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBwYWRkaW5nOiAxMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/library/book/book.component.ts":
/*!************************************************!*\
  !*** ./src/app/library/book/book.component.ts ***!
  \************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books/books.component */ "./src/app/library/books/books.component.ts");




let BookComponent = class BookComponent {
    constructor(userService) {
        this.userService = userService;
        this.bookArray = [];
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }
    ngOnInit() {
        if (this.isAuthentication) {
            this.getLibrary();
        }
    }
    addToLibrary(book) {
        const newLibrary = {
            id: this.user.id,
            books: [{ book }]
        };
        if (this.oldLibrary) {
            if (this.oldLibrary.books.length > 9) {
            }
            else {
                const books = [...this.oldLibrary.books];
                if (books.length === 0) {
                    this.addBook(book);
                }
                else {
                    for (const oldBook of books) {
                        const oldBookId = oldBook.book.id;
                        if (oldBookId === book.id) {
                            this.bookArray.push(oldBook);
                        }
                    }
                    if (this.bookArray.length === 0) {
                        this.addBook(book);
                    }
                }
            }
        }
        else {
            return this.userService.createNewLibrary(newLibrary).subscribe((data) => data);
        }
    }
    addBook(book) {
        this.oldLibrary.books.push({ book });
        this.oldLibrary.books.splice(9);
        return this.userService.updateBookList(this.oldLibrary, this.user.id).subscribe((data) => data);
    }
    getLibrary() {
        this.userService.getLibrary(this.user.id).subscribe((response) => {
            this.oldLibrary = response;
            return this.oldLibrary;
        });
    }
};
BookComponent.ctorParameters = () => [
    { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "book", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "isAuthentication", void 0);
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/book/book.component.html"),
        providers: [_books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]],
        styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/library/book/book.component.css")]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/library/books/books.component.css":
/*!***************************************************!*\
  !*** ./src/app/library/books/books.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 23px;\n}\n\nhr {\n  border-top: 1px solid rgb(128, 128, 128);\n}\n\n.m-10 {\n  margin: 1rem;\n  margin: 10px;\n}\n\n.mt-10 {\n  margin-top: 1rem;\n  margin-top: 10px\n}\n\n.hidden{\n  display:none;\n}\n\n.book {\n  background-color: white;\n  height: 210px;\n  padding: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4KTtcbn1cblxuLm0tMTAge1xuICBtYXJnaW46IDFyZW07XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMTBweFxufVxuLmhpZGRlbntcbiAgZGlzcGxheTpub25lO1xufVxuXG4uYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBwYWRkaW5nOiAxMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/library/books/books.component.ts":
/*!**************************************************!*\
  !*** ./src/app/library/books/books.component.ts ***!
  \**************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/books.service */ "./src/app/shared/services/books.service.ts");



let BooksComponent = class BooksComponent {
    constructor(booksService) {
        this.booksService = booksService;
        this.componentData = null;
        this.books = new Set();
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.slideConfig = {
            'slidesToShow': 3,
            'slidesToScroll': 1,
            'responsive': [
                {
                    'breakpoint': 1024,
                    'settings': {
                        'slidesToShow': 2
                    }
                },
                {
                    'breakpoint': 767,
                    'settings': {
                        'slidesToShow': 1
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
    updateBookList(query) {
        this.showBooks(query);
    }
    showBooks(query) {
        this.books.clear();
        this.booksService.getBooks(query)
            .subscribe((response) => {
            const items = response['items'];
            for (const item of items) {
                const book = {
                    id: '',
                    title: '',
                    description: '',
                    images: '',
                    link: '',
                    authors: [],
                    categories: [],
                    publishedDate: ''
                };
                book.id = item.id;
                book.title = item.volumeInfo.title;
                book.authors = item.volumeInfo.authors;
                book.images = item.volumeInfo.imageLinks.smallThumbnail;
                book.description = item.volumeInfo.description;
                book.categories = item.volumeInfo.categories;
                book.publishedDate = item.volumeInfo.publishedDate;
                book.link = item.accessInfo.webReaderLink;
                this.books.add(book);
            }
            return this.books;
        });
    }
};
BooksComponent.ctorParameters = () => [
    { type: _shared_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BooksComponent.prototype, "isAuthentication", void 0);
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/books/books.component.html"),
        styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/library/books/books.component.css")]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/library/library-book/library-book.component.less":
/*!******************************************************************!*\
  !*** ./src/app/library/library-book/library-book.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS1ib29rL2xpYnJhcnktYm9vay5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/library/library-book/library-book.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/library/library-book/library-book.component.ts ***!
  \****************************************************************/
/*! exports provided: LibraryBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryBookComponent", function() { return LibraryBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books/books.component */ "./src/app/library/books/books.component.ts");
/* harmony import */ var _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../user/user-library/user-library.component */ "./src/app/user/user-library/user-library.component.ts");





let LibraryBookComponent = class LibraryBookComponent {
    constructor(userService, booksComponent, userLibraryComponent) {
        this.userService = userService;
        this.booksComponent = booksComponent;
        this.userLibraryComponent = userLibraryComponent;
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }
    ngOnInit() {
        this.checkUserLibrary(this.user.id);
    }
    removeToLibrary(book) {
        this.checkUserLibrary(this.user.id);
        const oldUserLibrary = this.oldLibrary;
        const books = oldUserLibrary.books;
        const bookId = book.id;
        for (const haveBook of books) {
            const index = books.indexOf(haveBook);
            if (bookId === haveBook.book.id) {
                books.splice(index, 1);
            }
        }
        return this.userService.updateBookList(this.oldLibrary, this.user.id)
            .subscribe((response) => {
            this.userLibraryComponent.books = [];
            const items = response.books;
            for (const item of items) {
                this.userLibraryComponent.books.push(item.book);
            }
            return this.userLibraryComponent.books;
        });
    }
    checkUserLibrary(id) {
        this.userService.getLibrary(id).subscribe((response) => {
            this.oldLibrary = response;
            return this.oldLibrary;
        });
    }
};
LibraryBookComponent.ctorParameters = () => [
    { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"] },
    { type: _user_user_library_user_library_component__WEBPACK_IMPORTED_MODULE_4__["UserLibraryComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LibraryBookComponent.prototype, "book", void 0);
LibraryBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-library-book',
        template: __webpack_require__(/*! raw-loader!./library-book.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/library-book/library-book.component.html"),
        providers: [_books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]],
        styles: [__webpack_require__(/*! ./library-book.component.less */ "./src/app/library/library-book/library-book.component.less")]
    })
], LibraryBookComponent);



/***/ }),

/***/ "./src/app/library/search/search.component.less":
/*!******************************************************!*\
  !*** ./src/app/library/search/search.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-text {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUtdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlXG59IiwiLndoaXRlLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/library/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/search/search.component.ts ***!
  \****************************************************/
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
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.less */ "./src/app/library/search/search.component.less")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.less":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  z-index: 1000;\n  background-color: rgba(52, 58, 64, 0.5) !important;\n}\n.navbar .hide {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7QUNDSjtBREhBO0VBSVEsYUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCA1OCwgNjQsIC41KSAhaW1wb3J0YW50O1xuICAgIC5oaWRle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCIubmF2YmFyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgNTgsIDY0LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyIC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavigationComponent = class NavigationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.isAuthentication = this.authService.isLoggedIn();
        if (this.isAuthentication) {
            const user = JSON.parse(window.localStorage.getItem('user'));
            this.name = user.username;
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['']);
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationComponent.prototype, "name", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.less */ "./src/app/navigation/navigation.component.less")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/shared/models/message.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/message.model.ts ***!
  \************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}
Message.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isLoggedIn();
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
class AuthService {
    constructor() {
        this.isAuthentication = false;
    }
    login() {
        this.isAuthentication = true;
    }
    logout() {
        this.isAuthentication = false;
        window.localStorage.clear();
    }
    isLoggedIn() {
        const user = window.localStorage.getItem('user');
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/app/shared/services/books.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/books.service.ts ***!
  \**************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");




let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
    }
    getBooks(query) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query.query}&key=AIzaSyB6hiZBAGaa0Kj946BgGl_DFUwFiLWJhCE`;
        return this.http.get(url);
    }
    getBook(selfLink) {
        return this.http.get(selfLink);
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BooksService);



/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");




let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    registerUser(data) {
        return this.http.post('http://localhost:3000/users', data);
    }
    getUserByEmail(email) {
        return this.http.get(`http://localhost:3000/users?email=${email}`)
            .map((user) => user[0] ? user[0] : undefined);
    }
    getLibrary(id) {
        return this.http.get(`http://localhost:3000/library/?id=${id}`)
            .map((library) => library[0] ? library[0] : undefined);
    }
    updateBookList(oldLibrary, id) {
        return this.http.put(`http://localhost:3000/library/${id}`, oldLibrary);
    }
    createNewLibrary(newLibrary) {
        return this.http.post('http://localhost:3000/library', newLibrary);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UsersService);



/***/ }),

/***/ "./src/app/user/logged-in/logged-in.component.less":
/*!*********************************************************!*\
  !*** ./src/app/user/logged-in/logged-in.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9nZ2VkLWluL2xvZ2dlZC1pbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/user/logged-in/logged-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/logged-in/logged-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LoggedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInComponent", function() { return LoggedInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



let LoggedInComponent = class LoggedInComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuthentication = false;
    }
    ngOnInit() {
        this.isAuthentication = this.authService.isLoggedIn();
        if (this.isAuthentication) {
            const user = JSON.parse(window.localStorage.getItem('user'));
            this.name = user.username;
        }
    }
};
LoggedInComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoggedInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logged-in',
        template: __webpack_require__(/*! raw-loader!./logged-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/logged-in/logged-in.component.html"),
        styles: [__webpack_require__(/*! ./logged-in.component.less */ "./src/app/user/logged-in/logged-in.component.less")]
    })
], LoggedInComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.less":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/message.model */ "./src/app/shared/models/message.model.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(router, usersService, authservice, route) {
        this.router = router;
        this.usersService = usersService;
        this.authservice = authservice;
        this.route = route;
        this.charsCount = 5;
        this.isShowAlert = false;
    }
    ngOnInit() {
        this.message = new _shared_models_message_model__WEBPACK_IMPORTED_MODULE_4__["Message"]('danger', '');
        this.route.queryParams
            .subscribe((params) => {
            if (params['nowCanLogin']) {
                this.showMessage({
                    text: 'You can Login!',
                    type: 'success'
                });
            }
            else if (params['accessDenided']) {
                this.showMessage({
                    text: 'You need login or create new account!',
                    type: 'warning'
                });
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.charsCount)]),
        });
    }
    showMessage(message) {
        this.message = message;
        this.isShowAlert = true;
        window.setTimeout(() => {
            this.message.text = '';
            this.isShowAlert = false;
        }, 5000);
    }
    loginUser() {
        const emailUser = this.form.get('email').value;
        const pass = this.form.get('pass').value;
        this.usersService.getUserByEmail(emailUser).subscribe((user) => {
            if (user) {
                if (pass === user['pass']) {
                    window.localStorage.setItem('user', JSON.stringify(user));
                    this.authservice.login();
                    this.router.navigate([`${user['username']}`]);
                }
                else {
                    this.showMessage({
                        text: 'Incorrect login or password!',
                        type: 'danger'
                    });
                }
            }
            else {
                this.showMessage({
                    text: 'User does not exist!',
                    type: 'danger'
                });
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/user/login/login.component.less")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.less":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.charsCount = 5;
        this.formdata = {};
        this.isSubmited = false;
        this.isShowAlert = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.charsCount)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    submitForm() {
        const emailUser = this.form.get('email').value;
        this.usersService.getUserByEmail(emailUser).subscribe((user) => {
            if (user) {
                this.showMessage({
                    text: 'email or ',
                    type: 'danger'
                });
            }
            else {
                this.usersService.registerUser(this.form.value).subscribe((data) => {
                    this.router.navigate([''], {
                        queryParams: {
                            nowCanLogin: true
                        }
                    });
                });
            }
        });
    }
    showMessage(message) {
        this.message = message;
        this.isShowAlert = true;
        window.setTimeout(() => {
            this.message.text = '';
            this.isShowAlert = false;
        }, 5000);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _shared_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/user/register/register.component.less")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user/unlogged-in/unlogged-in.component.less":
/*!*************************************************************!*\
  !*** ./src/app/user/unlogged-in/unlogged-in.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book {\n  background-color: white;\n  height: 210px;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvdXNlci91bmxvZ2dlZC1pbi91bmxvZ2dlZC1pbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdXNlci91bmxvZ2dlZC1pbi91bmxvZ2dlZC1pbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdW5sb2dnZWQtaW4vdW5sb2dnZWQtaW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4XG59IiwiLmJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/unlogged-in/unlogged-in.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/unlogged-in/unlogged-in.component.ts ***!
  \***********************************************************/
/*! exports provided: UnloggedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloggedInComponent", function() { return UnloggedInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnloggedInComponent = class UnloggedInComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnloggedInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unlogged-in',
        template: __webpack_require__(/*! raw-loader!./unlogged-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/unlogged-in/unlogged-in.component.html"),
        styles: [__webpack_require__(/*! ./unlogged-in.component.less */ "./src/app/user/unlogged-in/unlogged-in.component.less")]
    })
], UnloggedInComponent);



/***/ }),

/***/ "./src/app/user/user-library/user-library.component.less":
/*!***************************************************************!*\
  !*** ./src/app/user/user-library/user-library.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book {\n  background-color: white;\n  height: 210px;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvbGliYXJ5L3NyYy9hcHAvdXNlci91c2VyLWxpYnJhcnkvdXNlci1saWJyYXJ5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91c2VyL3VzZXItbGlicmFyeS91c2VyLWxpYnJhcnkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlicmFyeS91c2VyLWxpYnJhcnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4XG59IiwiLmJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-library/user-library.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-library/user-library.component.ts ***!
  \*************************************************************/
/*! exports provided: UserLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLibraryComponent", function() { return UserLibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/users.service */ "./src/app/shared/services/users.service.ts");



let UserLibraryComponent = class UserLibraryComponent {
    constructor(userService) {
        this.userService = userService;
        this.slideConfig = {
            'slidesToShow': 3,
            'slidesToScroll': 1,
            'responsive': [
                {
                    'breakpoint': 1024,
                    'settings': {
                        'slidesToShow': 2
                    }
                },
                {
                    'breakpoint': 767,
                    'settings': {
                        'slidesToShow': 1
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.getLibrary();
    }
    getLibrary() {
        this.books = [];
        const user = JSON.parse(window.localStorage.getItem('user'));
        this.userService.getLibrary(user.id).subscribe((response) => {
            const items = response['books'];
            for (const item of items) {
                this.books.push(item.book);
            }
            return this.books;
        });
    }
};
UserLibraryComponent.ctorParameters = () => [
    { type: _shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
UserLibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-library',
        template: __webpack_require__(/*! raw-loader!./user-library.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-library/user-library.component.html"),
        styles: [__webpack_require__(/*! ./user-library.component.less */ "./src/app/user/user-library/user-library.component.less")]
    })
], UserLibraryComponent);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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