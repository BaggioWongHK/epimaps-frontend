webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations/fade.in.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fade; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
]);
var fade = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/animations/search.valid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchValid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var searchValid = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('searchValid', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        backgroundColor: '#c8e6c9ba',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        backgroundColor: '#388e3cba',
        color: 'white',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out')),
]);


/***/ }),

/***/ "../../../../../src/app/animations/show.breadcrumbs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showBreadcrumbs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var showBreadcrumbs = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('showBreadcrumbs', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginTop: '-68px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginTop: '0px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out')),
]);


/***/ }),

/***/ "../../../../../src/app/animations/slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slideOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var slideIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginLeft: -30
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginLeft: 10
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('false => true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s ease-in')),
]);
var slideOut = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideOut', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginLeft: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        marginLeft: 40
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('true => false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s 0.6s ease-out'))
]);


/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* unused harmony export HTTPResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:3000/api/wikipedia/article';
    }
    ApiService.prototype.ngOnInit = function () {
    };
    /**
     * @description This must precede all requests where a query is involved
     * @param {string} query
     * @return {Observable<HTTPResponse>}
     * @private
     */
    ApiService.prototype._getCanonicalURL = function (query) {
        return this.http.post(this.API_URL + "/canonical", { 'query': query });
    };
    /**
     * @description Check if article exists.
     * @param {string} query Valid search term string.
     * @return {Observable<Observable<HTTPResponse>>}
     */
    ApiService.prototype.articleExists = function (query) {
        var _this = this;
        return this._getCanonicalURL(query).map(function (response) {
            // console.log(response);
            if (!response.error) {
                return _this.http.post(_this.API_URL + "/exists", { 'url': response.data });
            }
            else {
                return response.error;
            }
        });
    };
    /**
     * @description Get images associated with Wikipedia article.
     * @param {string} query Valid search term string.
     * @return {Observable<Observable<HTTPResponse>>}
     */
    ApiService.prototype.getImages = function (query) {
        var _this = this;
        return this._getCanonicalURL(query).map(function (response) {
            if (!response.error) {
                return _this.http.post(_this.API_URL + "/images", { 'url': response.data });
            }
            else {
                return response.error;
            }
        });
    };
    /**
     * @description Fetch summary of Wikipedia article.
     * @param {string} query Valid search term string.
     * @return {Observable<Observable<HTTPResponse>>}
     */
    ApiService.prototype.getSummary = function (query) {
        var _this = this;
        return this._getCanonicalURL(query).map(function (response) {
            if (!response.error) {
                return _this.http.post(_this.API_URL + "/summary", { 'url': response.data });
            }
            else {
                return response.error;
            }
        });
    };
    /**
     * @description Fetch thumbnail of Wikipedia article. Note
     * that this can sometimes fetch something that doesn't
     * visually match the article. The API is provided by
     * Wikipedia and there may be errors.
     * @param {string} query Valid search term string.
     * @return {Observable<Observable<HTTPResponse>>}
     */
    ApiService.prototype.getThumbnail = function (query) {
        var _this = this;
        return this._getCanonicalURL(query).map(function (response) {
            if (!response.error) {
                return _this.http.post(_this.API_URL + "/thumbnail", { 'url': response.data });
            }
            else {
                return response.error;
            }
        });
    };
    /**
     * @description Fetches tree structure containing parsed navbox
     * of a Wikipedia article.
     * @param {string} query Valid search term string.
     * @return {Observable<Observable<HTTPResponse>>}
     */
    ApiService.prototype.getTrees = function (query) {
        var _this = this;
        return this._getCanonicalURL(query).map(function (response) {
            if (!response.error) {
                return _this.http.post(_this.API_URL + "/trees", { 'url': response.data });
            }
            else {
                return response.error;
            }
        });
    };
    /** Standalone methods below that aren't preceded by the getCanonicalURL method **/
    /**
     * @description Fetches trending searches at Google.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.getTrendingItems = function () {
        return this.http.get(this.API_URL + "/trending");
    };
    /**
     * @description See whether article exists for search term. (SA = standalone,
     * not preceded by the getCanonicalURL method)
     * @param {string} url Valid search term string.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.articleExistsSA = function (url) {
        return this.http.post(this.API_URL + "/exists", { 'url': url });
    };
    /**
     * @description Get images associated with Wikipedia article. (SA = standalone,
     * not preceded by the getCanonicalURL method)
     * @param {string} url Valid search term string.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.getImagesSA = function (url) {
        return this.http.post(this.API_URL + "/images", { 'url': url });
    };
    /**
     * @description Fetch summary of Wikipedia article. (SA = standalone,
     * not preceded by the getCanonicalURL method)
     * @param {string} url Valid search term string.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.getSummarySA = function (url) {
        return this.http.post(this.API_URL + "/summary", { 'url': url });
    };
    /**
     * @description Fetch thumbnail of Wikipedia article. Note
     * that this can sometimes fetch something that doesn't
     * visually match the article. The API is provided by
     * Wikipedia and there may be errors. (SA = standalone,
     * not preceded by the getCanonicalURL method)
     * @param {string} url Valid search term string.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.getThumbnailSA = function (url) {
        return this.http.post(this.API_URL + "/thumbnail", { 'url': url });
    };
    /**
     * @description Fetches tree structure containing parsed navbox
     * of a Wikipedia article. (SA = standalone,
     * not preceded by the getCanonicalURL method)
     * @param {string} url Valid search term string.
     * @return {Observable<HTTPResponse>}
     */
    ApiService.prototype.getTreesSA = function (url) {
        return this.http.post(this.API_URL + "/trees", { 'url': url });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());

var HTTPResponse = (function () {
    function HTTPResponse() {
        this.error = null;
        this.data = null;
    }
    /* For some reason, these don't work */
    HTTPResponse.prototype.getError = function () { return this.error; };
    HTTPResponse.prototype.getData = function () { return this.data; };
    return HTTPResponse;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-layer {\n  background-attachment: fixed;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/tree-bush.jpg") + ");\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  width: 100%;\n}\n\n.background-layer-opacity {\n  background-color: rgba(255, 255, 255, 0.6);\n  height: 100%;\n  width: 100%;\n  transition: all 1s ease-in-out;\n}\n\n\n\n.background-layer-trending {\n  background-color: rgba(255, 255, 255, 0.8); /* #FFFFFFCC; */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-layer\">\n  <div class=\"background-layer-opacity\"\n       [ngClass]=\"{'background-layer-trending': changeBackgroundOpacity}\"\n       [@fadeIn]>\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, api) {
        var _this = this;
        this.router = router;
        this.api = api;
        this.changeBackgroundOpacity = false;
        router.events.subscribe(function (val) {
            _this.changeBackgroundOpacity = (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && val.url === '/trending') ? true : false;
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_fade_in__["b" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trending_trending_component__ = __webpack_require__("../../../../../src/app/trending/trending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__ = __webpack_require__("../../../../../src/app/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tree_node_tree_node_component__ = __webpack_require__("../../../../../src/app/tree-node/tree-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tree_node_mobile_tree_node_mobile_component__ = __webpack_require__("../../../../../src/app/tree-node-mobile/tree-node-mobile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tree_node_expanded_tree_node_expanded_component__ = __webpack_require__("../../../../../src/app/tree-node-expanded/tree-node-expanded.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tag_cloud_directive__ = __webpack_require__("../../../../../src/app/tag-cloud.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__summary_service__ = __webpack_require__("../../../../../src/app/summary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */] },
    { path: 'trending', component: __WEBPACK_IMPORTED_MODULE_8__trending_trending_component__["a" /* TrendingComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__["a" /* TreeComponent */] },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["a" /* SummaryComponent */] },
    { path: '**', redirectTo: '' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trending_trending_component__["a" /* TrendingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tree_node_tree_node_component__["a" /* TreeNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tree_node_mobile_tree_node_mobile_component__["a" /* TreeNodeMobileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tree_node_expanded_tree_node_expanded_component__["a" /* TreeNodeExpandedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__tag_cloud_directive__["a" /* TagCloudDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__communication_communication_service__["a" /* CommunicationService */],
                __WEBPACK_IMPORTED_MODULE_15__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_18__tree_service__["a" /* TreeService */],
                __WEBPACK_IMPORTED_MODULE_19__summary_service__["a" /* SummaryService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/communication/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicationService = (function () {
    function CommunicationService() {
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentEvent = this.eventSource.asObservable();
    }
    /**
     * @description A way to pass data between components that
     * have no direct relation (e.g. not parent-child)
     * @param {any} event Data to pass on
     */
    CommunicationService.prototype.emitEvent = function (event) {
        this.eventSource.next(event);
    };
    CommunicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 575px) {\n  .nav-bar i, .nav-separator {\n    margin-right: 10px;\n  }\n\n  .breadcrumbs, .breadcrumbs-toggle {\n    display: none;\n  }\n}\n\n@media (min-width: 576px) {\n  .nav-bar i, .nav-separator {\n    margin-right: 20px;\n  }\n}\n\n.hide-breadcrumbs-bar {\n  display: none;\n}\n\n.nav-bar {\n  text-align: right;\n}\n\n.nav-bar i {\n  margin-top: 20px;\n}\n\n.nav-bar svg {\n  float: left;\n  margin-top: 20px;\n}\n\n.hide-breadcrumbs {\n  float: right;\n  margin-top: 10px;\n}\n\n.breadcrumbs {\n  background-color: #ffffffd0;\n  list-style: none;\n  padding: 0.75rem 1rem;\n}\n\n.breadcrumbs > i {\n  position: relative;\n  top: -7px;\n}\n\n.breadcrumbs .breadcrumb-div {\n  display: inline-block;\n}\n\n.breadcrumbs svg:nth-child(even) { /* level-separator-level-separator */\n  position: relative;\n  bottom: 3px;\n}\n\n.nav-separator {\n  font-size: 2rem;\n  font-weight: 100;\n}\n\n.page-switcher, .page-switcher-nav {\n  display: inline-block;\n}\n\nnav > a#trending:hover {\n  text-decoration: none;\n}\n\nnav > a#home {\n  float: left;\n}\n\n.breadcrumbs > i, .breadcrumbs svg:nth-child(even) {\n  transition: all .2s ease-in-out;\n}\n\n.breadcrumbs i:hover, .breadcrumbs svg:nth-child(even):hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  color: #2e7d32;\n}\n\n.breadcrumbs i:active, .breadcrumbs svg:nth-child(even):active {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  color: #1b5e20;\n}\n\n.nav-bar i {\n  transition: all .2s ease-in-out;\n  color: black;\n}\n\n.nav-bar i:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  color: #2e7d32;\n}\n\n.nav-bar i:active {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  color: #1b5e20;\n}\n\n.nav-bar-logo {\n  transition: all .2s ease-in-out;\n}\n\n.nav-bar-logo:hover {\n  margin-left: 20px;\n}\n\n.nav-bar-logo:active {\n  margin-left: 10px;\n}\n\n.fa-spin {\n  font-size: 32px;\n}\n\n.fa-spin:hover {\n  color: black !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--invisible audio-->\n<!--<audio id=\"relaxing-track\" autoplay>-->\n  <!--<source src=\"../assets/relaxing-track.mp3\">-->\n<!--</audio>-->\n\n<!--breadcrumbs-->\n<nav class=\"breadcrumbs\"\n     [@showBreadcrumbs]=\"showBreadcrumbs\"\n>\n  <!--[ngClass]=\"{'hide-breadcrumbs-bar': !showBreadcrumbs}\"-->\n  <i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i>\n\n  <div class=\"breadcrumb-div\"\n       (click)=\"goToBreadcrumb(0)\">\n    <svg width=\"12px\" height=\"38px\" viewBox=\"0 0 17 46\">\n      <g id=\"search.html\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"navbar-demo\" transform=\"translate(-209.000000, -6.000000)\">\n          <image id=\"branch-separator-icon\" transform=\"translate(218.000000, 29.222432) rotate(-30.000000) translate(-218.000000, -29.222432) \" x=\"201\" y=\"12.2224319\" width=\"34\" height=\"34\" xlink:href=\"data:image/png;base64,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\"></image>\n        </g>\n      </g>\n    </svg> <!--separator-->\n    <svg width=\"30px\" height=\"30px\" viewBox=\"0 0 40 40\">\n      <g id=\"search.html\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"navbar-demo\" transform=\"translate(-86.000000, -8.000000)\">\n          <g id=\"L1-branch\" transform=\"translate(86.000000, 8.000000)\">\n            <g id=\"circle-background\">\n              <circle id=\"back-circle\" fill=\"#000000\" cx=\"20\" cy=\"20\" r=\"20\"></circle>\n              <circle id=\"front-circle\" fill=\"#FFFFFF\" cx=\"19.908046\" cy=\"19.908046\" r=\"17.2413793\"></circle>\n            </g>\n            <text id=\"L1\" font-family=\"MuseoSlab-500, Museo Slab\" font-size=\"18\" font-weight=\"normal\" fill=\"#000000\">\n              <tspan x=\"10.253\" y=\"27\">L0</tspan>\n            </text>\n          </g>\n        </g>\n      </g>\n    </svg> <!--Ln breadcrumb-->\n  </div>\n\n  <div class=\"breadcrumb-div\"\n       *ngFor=\"let breadcrumb of breadcrumbLevels; let index = index\"\n       (click)=\"goToBreadcrumb(index)\">\n    <span *ngIf=\"index != 0\">\n\n    <svg width=\"12px\" height=\"38px\" viewBox=\"0 0 17 46\">\n      <g id=\"search.html\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"navbar-demo\" transform=\"translate(-209.000000, -6.000000)\">\n          <image id=\"branch-separator-icon\" transform=\"translate(218.000000, 29.222432) rotate(-30.000000) translate(-218.000000, -29.222432) \" x=\"201\" y=\"12.2224319\" width=\"34\" height=\"34\" xlink:href=\"data:image/png;base64,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\"></image>\n        </g>\n      </g>\n    </svg> <!--separator-->\n    <svg width=\"30px\" height=\"30px\" viewBox=\"0 0 40 40\">\n      <g id=\"search.html\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"navbar-demo\" transform=\"translate(-86.000000, -8.000000)\">\n          <g id=\"L1-branch\" transform=\"translate(86.000000, 8.000000)\">\n            <g id=\"circle-background\">\n              <circle id=\"back-circle\" fill=\"#000000\" cx=\"20\" cy=\"20\" r=\"20\"></circle>\n              <circle id=\"front-circle\" fill=\"#FFFFFF\" cx=\"19.908046\" cy=\"19.908046\" r=\"17.2413793\"></circle>\n            </g>\n            <text id=\"L1\" font-family=\"MuseoSlab-500, Museo Slab\" font-size=\"18\" font-weight=\"normal\" fill=\"#000000\">\n              <tspan x=\"10.253\" y=\"27\">L{{ breadcrumb.level }}</tspan>\n            </text>\n          </g>\n        </g>\n      </g>\n    </svg> <!--Ln breadcrumb-->\n    </span>\n  </div>\n\n  <i class=\"fa fa-angle-up fa-2x hide-breadcrumbs\" aria-hidden=\"true\"\n      (click)=\"toggleHideBreadcrumbs()\"></i> <!--hide breadcrumbs-->\n</nav>\n\n<!--navbar-->\n<nav class=\"nav-bar\">\n  <a [routerLink]=\"['/']\" id=\"home\" [hidden]=\"!showNavbarLogo\">\n    <svg width=\"206px\" height=\"35px\" viewBox=\"0 0 206 45\" class=\"nav-bar-logo\">\n      <g id=\"project-logo\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g>\n          <text id=\"Epimaps\" font-family=\"MuseoSlab-500, Museo Slab\" font-size=\"36\" font-weight=\"normal\" fill=\"#000000\">\n            <tspan x=\"54.248\" y=\"34\">Epimaps</tspan>\n          </text>\n          <g id=\"project-avatar\" >\n            <circle id=\"back-circle\" fill=\"#000000\" cx=\"22.5\" cy=\"22.5\" r=\"22.5\"></circle>\n            <circle id=\"front-circle\" fill=\"#FFFFFF\" cx=\"22.5\" cy=\"22.5\" r=\"19.3965517\"></circle>\n            <image id=\"tree-icon\" x=\"11.637931\" y=\"9.31034483\" width=\"22.5\" height=\"27.1551724\" xlink:href=\"data:image/png;base64,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\"></image>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </a>\n  <i *ngIf=\"showSpinner\"\n     class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n  <a [routerLink]=\"['/trending']\" id=\"trending\" [hidden]=\"!showTrending\">\n    <i class=\"fa fa-fire fa-2x\" aria-hidden=\"true\"></i>\n  </a>\n  <i class=\"fa fa-level-up fa-2x breadcrumbs-toggle\" aria-hidden=\"true\"\n     [hidden]=\"!showBreadcrumbsToggle\"\n     (click)=\"toggleHideBreadcrumbs(false)\"></i>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_show_breadcrumbs__ = __webpack_require__("../../../../../src/app/animations/show.breadcrumbs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(router, communication, treeService) {
        var _this = this;
        this.router = router;
        this.communication = communication;
        this.treeService = treeService;
        this.showBreadcrumbs = false;
        this.showPageSwitcher = false;
        this.showBreadcrumbsToggle = false;
        this.showTrending = true;
        this.showNavbarLogo = false;
        this.showSpinner = false;
        router.events.subscribe(function (state) {
            _this.communication.emitEvent({ name: 'hideSpinner' }); // hide spinner whenever route changes
            //  logic to determine which parts of the navbar to show
            _this.showPageSwitcher = (state instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && state.url === '/tree') ? true : false;
            _this.showBreadcrumbsToggle = (state instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && state.url === '/tree') ? true : false;
            _this.showTrending = (state instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && state.url === '/trending') ? false : true;
            _this.showNavbarLogo = (state instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && (state.url === '/' || state.urlAfterRedirects === '/')) ? false : true; // take into account redirects
        });
        this.communication.currentEvent.subscribe(function (currentEvent) {
            _this.showSpinner = (currentEvent.name === 'showSpinner') ? true : false;
        });
    }
    /**
     * @description Changes tree level to specified level.
     * All the nodes under that level will be displayed.
     * @param {number} level
     */
    NavbarComponent.prototype.goToBreadcrumb = function (level) {
        var numLevels = this.treeService.getCurrentTree().levels.length;
        // console.log('level clicked', level);
        if (level < numLevels - 1) {
            this.communication.emitEvent({ name: 'breadcrumbChangeTitles', data: level });
            // console.log(this.treeService.getCurrentTree());
            this.treeService.currentTree.removeLevels(level);
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.breadcrumbLevels = this.treeService.currentTree.levels;
        // console.log(this.breadcrumbLevels);
    };
    /**
     * @description This toggles the breadcrumbs bar.
     */
    NavbarComponent.prototype.toggleHideBreadcrumbs = function () {
        this.showBreadcrumbs = !this.showBreadcrumbs;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_show_breadcrumbs__["a" /* showBreadcrumbs */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_4__tree_service__["a" /* TreeService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-logo {\n  margin-top: 100px;\n  text-align: center;\n}\n\n.search-box {\n  height: calc(100vh - 53px - 68px - 100px - 30px); /** navbar, hidden bar, logo, search margin **/\n  margin-top: 30px;\n  text-align: center;\n}\n\n.search-box > input {\n  background-color: #FFFFFF7A;\n  border-radius: 8px;\n  border: 1px solid #558B2F;\n  color: #558B2F;\n  height: 50px;\n  outline: none;\n  padding: 10px;\n  width: 300px;\n  font-size: inherit;\n  transition: all .2s ease-in-out;\n}\n\n.search-box > input:focus {\n  background-color: #c8e6c9ba;\n}\n\n.warning-box {\n  position: relative;\n  top: 20px;\n  width: 300px;\n  margin: auto;\n  text-align: left;\n  transition: all .2s ease-in-out;\n}\n\n.alert-success {\n  position: relative;\n  top: 20px;\n  width: 300px;\n  margin: auto;\n  text-align: left;\n  transition: all .2s ease-in-out;\n}\n\n.warning-box button {\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeIn]>\n  <!--logo-->\n  <div class=\"project-logo\">\n    <svg width=\"206px\" height=\"45px\" viewBox=\"0 0 206 45\">\n      <g id=\"project-logo\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g>\n          <text id=\"Epimaps\" font-family=\"MuseoSlab-500, Museo Slab\" font-size=\"36\" font-weight=\"normal\" fill=\"#000000\">\n            <tspan x=\"54.248\" y=\"34\">Epimaps</tspan>\n          </text>\n          <g id=\"project-avatar\">\n            <circle id=\"back-circle\" fill=\"#000000\" cx=\"22.5\" cy=\"22.5\" r=\"22.5\"></circle>\n            <circle id=\"front-circle\" fill=\"#FFFFFF\" cx=\"22.5\" cy=\"22.5\" r=\"19.3965517\"></circle>\n            <image id=\"tree-icon\" x=\"11.637931\" y=\"9.31034483\" width=\"22.5\" height=\"27.1551724\" xlink:href=\"data:image/png;base64,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\"></image>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n\n  <!--main search box-->\n    <div class=\"search-box form-group has-feedback\">\n      <input class=\"\"\n             #searchForm\n             [@searchValid]=\"searchValid\"\n             (keyup)=\"doSearch(searchForm.value, $event)\"\n             type=\"text\"\n             placeholder=\"What do you want to explore?\"/>\n\n      <div *ngIf=\"showErrorMessage\"\n           class=\"alert alert-success warning-box fade show\"\n           role=\"alert\">\n        {{errorMessage}}\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_search_valid__ = __webpack_require__("../../../../../src/app/animations/search.valid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = (function () {
    function SearchComponent(router, api, treeService, communication) {
        this.router = router;
        this.api = api;
        this.treeService = treeService;
        this.communication = communication;
        this.showErrorMessage = false;
    }
    SearchComponent.prototype.ngOnInit = function () { };
    /**
     * @description This processes the search form on the
     * home page. When searching, the spinner shows while
     * determining if the corresponding Wikipedia article
     * exists. If it does and the response sent back isn't
     * empty and tree extraction succeeds, then it navigates
     * to the tree page with the extracted data. If the server
     * sends back an error response, that's displayed.
     * @param {string} query
     * @param {KeyboardEvent} event
     */
    SearchComponent.prototype.doSearch = function (query, event) {
        var _this = this;
        this._validateSearch(query);
        //  if search is valid
        if (event.key === 'Enter' && this.searchValid) {
            this.communication.emitEvent({ name: 'showSpinner' });
            this.api._getCanonicalURL(query).subscribe(function (response) {
                if (!response.error) {
                    //  if corresponding Wikipedia article exists
                    _this.api.articleExistsSA(response.data).subscribe(function (existsResponse) {
                        if (existsResponse.data) {
                            //  set URL, tree, extract root level data and navigate to the tree page
                            _this.treeService.currentTree.setCanonicalURL(response.data);
                            //  additional API call to extract tree
                            _this.api.getTreesSA(response.data).subscribe(function (treesResponse) {
                                if (!treesResponse.error) {
                                    if (treesResponse.data.length === 0) {
                                        _this.errorMessage = 'Oops, it seems like there are no trees for this topic.';
                                        _this.showErrorMessage = true;
                                        _this.communication.emitEvent({ name: 'hideSpinner' });
                                    }
                                    else {
                                        _this.treeService.currentTree.setTree(treesResponse.data);
                                        if (_this.treeService.currentTree.extractDataL0() === -1) {
                                            _this.errorMessage = 'There has been an error processing the tree.';
                                            _this.showErrorMessage = true;
                                            _this.communication.emitEvent({ name: 'hideSpinner' });
                                        }
                                        else {
                                            console.log(_this.treeService.getCurrentTree());
                                            _this.communication.emitEvent({ name: 'hideSpinner' });
                                            _this.router.navigate(['/tree']);
                                        }
                                    }
                                }
                            });
                        }
                    });
                }
                else {
                    _this.communication.emitEvent({ name: 'hideSpinner' });
                    _this.errorMessage = response.error;
                    _this.showErrorMessage = true;
                    __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].interval(3000).take(1).subscribe(function () {
                        _this.showErrorMessage = false;
                    });
                }
            }); // server error
        }
    };
    /**
     * @description Determines whether search string
     * is valid.
     * @param {string} query
     * @private
     */
    SearchComponent.prototype._validateSearch = function (query) {
        if (query === '') {
            this.searchValid = undefined;
        }
        else {
            this.searchValid = (query.match(/^[\w\s]+$/g)) ? true : false;
        }
        if (this.searchValid === undefined) {
            this.errorMessage = 'Search can\'t be empty!';
        }
        else if (!this.searchValid) {
            this.errorMessage = 'Please note that searches must only contain these characters: a-z, A-Z, 0-9, _ (underscore)';
            this.showErrorMessage = true;
        }
        else {
            this.showErrorMessage = false;
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["b" /* fadeIn */], __WEBPACK_IMPORTED_MODULE_2__animations_search_valid__["a" /* searchValid */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__tree_service__["a" /* TreeService */],
            __WEBPACK_IMPORTED_MODULE_6__communication_communication_service__["a" /* CommunicationService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/summary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryService = (function () {
    function SummaryService() {
    }
    SummaryService.prototype.setSummary = function (summary) { this.summary = summary; };
    SummaryService.prototype.getSummary = function () { return this.summary; };
    SummaryService.prototype.setURL = function (url) { this.url = url; };
    SummaryService.prototype.getURL = function () { return this.url; };
    SummaryService.prototype.setThumbnail = function (thumbnailURL) { this.thumbnail = thumbnailURL; };
    SummaryService.prototype.getThumbnail = function () { return this.thumbnail; };
    SummaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SummaryService);
    return SummaryService;
}());



/***/ }),

/***/ "../../../../../src/app/summary/summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 575px) {\n  .summary-text {\n    font-size: 0.9rem;\n    line-height: 1.8;\n  }\n\n  .summary-text img {\n    width: 100%;\n    clear: both;\n    margin-bottom: 20px;\n  }\n}\n\n@media (min-width: 576px) {\n  .summary-text {\n    line-height: 2.0;\n  }\n\n  .summary-text img {\n    float: right;\n    max-width: 50%;\n    margin-left: 20px;\n    margin-bottom: 5px;\n  }\n}\n\n.summary-text {\n  background-color: #FFFFFFD0;\n  margin: 20px auto;\n  padding: 20px;\n  max-width: 800px;\n  border-radius: 5px;\n  min-height: calc(100vh - 53px - 40px);\n}\n\n.center-summary {\n  margin: auto;\n  width: 100%;\n  padding: 0px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"center-summary\"\n      [@fadeIn]>\n  <div class=\"summary-text\">\n    <img *ngIf=\"thumbnail\"\n         src=\"{{thumbnail}}\" />\n    <p>{{summary}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_service__ = __webpack_require__("../../../../../src/app/summary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SummaryComponent = (function () {
    function SummaryComponent(communication, api, summaryService, router) {
        this.communication = communication;
        this.api = api;
        this.summaryService = summaryService;
        this.router = router;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        //  prevent direct access to this page (when no summary has been fetched)
        if (!this.summaryService.getSummary() || this.summaryService.getSummary() === '') {
            this.router.navigate(['/']);
        }
        this.summary = this.summaryService.getSummary();
        if (this.summary === '') {
            this.summary = 'There seems to be an error fetching the summary. You\'ll now be redirected back home...sorry!';
        }
        this.thumbnail = (this.summaryService.getThumbnail()) ? this.enlargeThumbnail(this.summaryService.getThumbnail()) : '';
    };
    /**
     * @description For some reason, this particular API returns a
     * thumbnail image of a shrunken size. Changing a parameter in
     * the return URL allows the image to be enlarged considerably.
     * @param {string} thumbnailURL
     * @return {string}
     */
    SummaryComponent.prototype.enlargeThumbnail = function (thumbnailURL) {
        return thumbnailURL.replace(/\/{1}\d+px/g, '/400px');
    };
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/summary/summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/summary/summary.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["b" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__communication_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__summary_service__["a" /* SummaryService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tag-cloud.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCloudDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagCloudDirective = (function () {
    function TagCloudDirective(ele, renderer) {
        this.ele = ele;
        this.renderer = renderer;
    }
    TagCloudDirective.prototype.ngOnInit = function () { };
    TagCloudDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(1).take(1).subscribe(function () {
            var currentVP = {
                height: document.documentElement.getBoundingClientRect().height,
                width: document.documentElement.getBoundingClientRect().width
            };
            _this.randomizeTag(currentVP);
        });
    };
    /**
     * @description Main body of logic randomizing tag placements
     * on the page. Basically, we generate random co-ordinates and
     * try to place the tag there, and we keep on trying if those
     * tags either exceed the viewport, or overlap with tags that
     * have valid placements. We also impose a limit of the max
     * number of iterations a tag can be re-placed, because it
     * can severely affect rendering performance beyond a certain
     * threshold.
     * @param {Object} currentVP Object containing viewport
     * height and width. We include this because of a bug
     * that initially loads incorrect values on page load.
     */
    TagCloudDirective.prototype.randomizeTag = function (currentVP) {
        var vp = currentVP; // initial load incorrect viewport height bug fix
        var RANDOMIZE_THRESHOLD = 50;
        var randomizeIterations = 0;
        randomize: do {
            if (randomizeIterations > RANDOMIZE_THRESHOLD) {
                this.renderer.setStyle(this.ele.nativeElement, 'display', 'none');
                return;
            }
            else {
                this.renderer.setStyle(this.ele.nativeElement, 'display', 'block');
            }
            //  randomize an area for the text - 60 because of navbar, the .95 to avoid it getting a little too close
            var randomCoords = { x: this.getRandomInt(20, vp.width * 0.95), y: this.getRandomInt(60, vp.height * 0.95) };
            //  style tags
            this.renderer.setStyle(this.ele.nativeElement, 'position', 'absolute');
            this.renderer.setStyle(this.ele.nativeElement, 'fontSize', this.getTagStyle(this.tagPopularity).getFontSize());
            this.renderer.setStyle(this.ele.nativeElement, 'color', this.getTagStyle(this.tagPopularity).getColor());
            this.renderer.setStyle(this.ele.nativeElement, 'top', randomCoords.y + "px");
            this.renderer.setStyle(this.ele.nativeElement, 'left', randomCoords.x + "px");
            this.renderer.setStyle(this.ele.nativeElement, 'visibility', 'visible');
            var boundingClientRect = this.ele.nativeElement.getBoundingClientRect();
            //  try again if exceeds viewport
            if (this.exceedsViewport(boundingClientRect)) {
                randomizeIterations++;
                continue randomize;
            }
            //  try again if overlaps with other tags
            for (var rectIndex = 0; rectIndex < this.occupiedDOMRects.length; rectIndex++) {
                if (this.boundingRectsOverlap(boundingClientRect, this.occupiedDOMRects[rectIndex])) {
                    randomizeIterations++;
                    continue randomize;
                }
            }
            //  save boundingClientRect of this tag
            this.occupiedDOMRects.push(boundingClientRect);
            break randomize;
        } while (true);
    };
    TagCloudDirective.prototype.ngAfterViewChecked = function () {
        // const boundingClientRect = this.ele.nativeElement.getBoundingClientRect();
        // const vp = {
        //   height: document.documentElement.getBoundingClientRect().height,
        //   width: document.documentElement.getBoundingClientRect().width
        // };
        // console.log(this.tagName, 'VP', vp, 'Rect', boundingClientRect, 'Exceeds', this.exceedsViewport(boundingClientRect));
        // console.log(this.tagName, this.ele.nativeElement, 'Rect', boundingClientRect, 'Taken', this.occupiedDOMRects);
    };
    /**
     * @description We want to use various gradients of green
     * to indicate the popularity of tags. The 22 most popular
     * items have unique colours and font sizes. The rest share
     * one colour and font size.
     * @param {number} tagPopularity
     * @return {TagStyle}
     */
    TagCloudDirective.prototype.getTagStyle = function (tagPopularity) {
        var fontSize = '18px', color = '#9fb883';
        switch (tagPopularity) {
            case 0:
                fontSize = '36px';
                color = '#33691e';
                break;
            case 1:
            case 2:
                fontSize = '34px';
                color = '#33691e';
                break;
            case 3:
            case 4:
                fontSize = '32px';
                color = '#33691e';
                break;
            case 5:
            case 6:
            case 7:
                fontSize = '30px';
                color = '#558b2f';
                break;
            case 8:
            case 9:
            case 10:
                fontSize = '28px';
                color = '#689f38';
                break;
            case 11:
            case 12:
            case 13:
                fontSize = '26px';
                color = '#7cb342';
                break;
            case 14:
            case 15:
            case 16:
                fontSize = '24px';
                color = '#8bc34a';
                break;
            case 17:
            case 18:
            case 19:
                fontSize = '22px';
                color = '#9ccc65';
                break;
            case 20:
            case 21:
            case 22:
                fontSize = '20px';
                color = '#aed581';
                break;
            default:
                fontSize = '18px';
                color = '#9fb883';
                break;
        }
        return new TagStyle(fontSize, color); // { fontSize: fontSize, color: color };
    };
    /**
     * @description Tests if two tags overlap, based on their
     * boundingClientRect object.
     * @param {ClientRect} rect1
     * @param {ClientRect} rect2
     * @return {boolean}
     */
    TagCloudDirective.prototype.boundingRectsOverlap = function (rect1, rect2) {
        var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
        return overlap;
    };
    /**
     * @description Tests if a tag is placed in an area
     * that exceeds the viewport that will lead the page
     * to scroll.
     * @param {DOMRectInit} rect
     * @return {boolean}
     */
    TagCloudDirective.prototype.exceedsViewport = function (rect) {
        var exceedsViewport = false;
        var vp = {
            height: document.documentElement.getBoundingClientRect().height,
            width: document.documentElement.getBoundingClientRect().width
        };
        if (rect.x + rect.width > vp.width || rect.y + rect.height > vp.height) {
            exceedsViewport = true;
        }
        return exceedsViewport;
    };
    /**
     * @description Get random int between min and max.
     * @param min
     * @param max
     * @return {number}
     */
    TagCloudDirective.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    TagCloudDirective.prototype.positionTag = function () {
        var currentVP = {
            height: document.documentElement.getBoundingClientRect().height,
            width: document.documentElement.getBoundingClientRect().width
        };
        this.randomizeTag(currentVP);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TagCloudDirective.prototype, "tagPopularity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TagCloudDirective.prototype, "tagName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], TagCloudDirective.prototype, "occupiedDOMRects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TagCloudDirective.prototype, "positionTag", null);
    TagCloudDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appTagCloud]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], TagCloudDirective);
    return TagCloudDirective;
}());

var TagStyle = (function () {
    function TagStyle(size, colorString) {
        this.fontSize = size;
        this.color = colorString;
    }
    TagStyle.prototype.setColor = function (colorString) { this.color = colorString; };
    TagStyle.prototype.getColor = function () { return this.color; };
    TagStyle.prototype.setFontSize = function (size) { this.fontSize = size; };
    TagStyle.prototype.getFontSize = function () { return this.fontSize; };
    return TagStyle;
}());


/***/ }),

/***/ "../../../../../src/app/tree-node-expanded/tree-node-expanded.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 575px) {\n  .expand-branch-mobile {\n    display: inline-block;\n  }\n}\n\n@media (min-width: 576px) {\n  .expand-branch-mobile {\n    display: none !important;\n  }\n}\n\n.expand-branch-mobile {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  margin: auto;\n  padding: 10px;\n  background-color: #FFFFFF;\n  overflow: hidden;\n}\n\n.expand-branch-mobile > .fa-stack {\n  float: right;\n  width: 10%;\n}\n\n.expand-branch-mobile > span:first-child {\n  float: left;\n  width: 90%;\n  font-size: 0.8em;\n  font-weight: 800;\n  display: -webkit-box; /** this is for multiline clipping */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-node-expanded/tree-node-expanded.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"expand-branch-mobile\">\n  <span>{{ expandedText }}</span>\n  <span class=\"fa-stack fa-lg\">\n    <i class=\"fa fa-circle fa-stack-2x background-circle\"></i>\n    <i class=\"fa fa-info fa-stack-1x fa-inverse\"></i>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tree-node-expanded/tree-node-expanded.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeExpandedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeExpandedComponent = (function () {
    function TreeNodeExpandedComponent(communicator) {
        this.communicator = communicator;
        this.expandedText = 'Click on a tree node to show its expanded form.';
        this.defaultExpandedText = 'Click on a tree node with longer text content to show its expanded form.';
    }
    TreeNodeExpandedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.communicator.currentEvent.subscribe(function (event) { return _this.expandedText = event.value || _this.defaultExpandedText; });
    };
    TreeNodeExpandedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-node-expanded',
            template: __webpack_require__("../../../../../src/app/tree-node-expanded/tree-node-expanded.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree-node-expanded/tree-node-expanded.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__communication_communication_service__["a" /* CommunicationService */]])
    ], TreeNodeExpandedComponent);
    return TreeNodeExpandedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree-node-mobile/tree-node-mobile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #33691EA0;\n  width: 300px;\n  height: 45px;\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.card:hover {\n  background-color: #33691ED0;\n  transition: all 0.1s ease-in;\n}\n\n.card:not(:hover) {\n  background-color: #33691EA0;\n  transition: all 0.2s ease-out;\n}\n\n.card-body {\n  padding: 10px;\n}\n\np {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.background-circle {\n  color: #333333;\n}\n\nspan.fa-stack {\n  bottom: 8px;\n}\n\na.subtree:hover span {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  transition: all .1s ease-in-out;\n}\n\na.subtree:active span {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  transition: all .1s ease-in-out;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-node-mobile/tree-node-mobile.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggleTree()\">\n  <div class=\"card text-white\"\n       (click)=\"expandText(fullText)\">\n    <div class=\"card-body\"><p class=\"card-text\">{{ fullText }}</p></div>\n  </div>\n  <a class=\"subtree\"\n     (click)=\"goToTree($event)\">\n    <span class=\"fa-stack fa-lg\"\n          *ngIf=\"showTree\"\n          [@fade]\n    >\n      <i class=\"fa fa-circle fa-stack-2x background-circle\"></i>\n      <i class=\"fa fa-tree fa-stack-1x fa-inverse\"></i>\n    </span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tree-node-mobile/tree-node-mobile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeMobileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_slide__ = __webpack_require__("../../../../../src/app/animations/slide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeNodeMobileComponent = (function () {
    function TreeNodeMobileComponent(communication) {
        this.communication = communication;
        this.showTree = false;
    }
    TreeNodeMobileComponent.prototype.ngOnInit = function () {
    };
    TreeNodeMobileComponent.prototype.toggleTree = function () {
        if (this.showTree) {
            this.showTree = false;
        }
        else {
            this.showTree = true;
        }
    };
    TreeNodeMobileComponent.prototype.goToTree = function (event) {
        event.stopPropagation();
    };
    TreeNodeMobileComponent.prototype.expandText = function (fullText) {
        this.communication.emitEvent({
            'event': 'expandText',
            'value': fullText
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeNodeMobileComponent.prototype, "fullText", void 0);
    TreeNodeMobileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-node-mobile',
            template: __webpack_require__("../../../../../src/app/tree-node-mobile/tree-node-mobile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree-node-mobile/tree-node-mobile.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_slide__["a" /* slideIn */], __WEBPACK_IMPORTED_MODULE_1__animations_slide__["b" /* slideOut */], __WEBPACK_IMPORTED_MODULE_2__animations_fade_in__["b" /* fadeIn */], __WEBPACK_IMPORTED_MODULE_2__animations_fade_in__["a" /* fade */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__communication_communication_service__["a" /* CommunicationService */]])
    ], TreeNodeMobileComponent);
    return TreeNodeMobileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree-node/tree-node.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #33691EA0;\n  width: 200px;\n  height: 70px;\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.card:not(:hover), .card:hover {\n  transition: all 0.5s ease-in-out;\n}\n\np {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.background-circle {\n  color: #333333;\n}\n\n.flipped {\n  padding: 1em;\n}\n\n.flipped i {\n  bottom: 3px;\n  transition: all .2s ease-in-out;\n}\n\n.flipped i:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.flipped i:active {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n.flipped span:nth-child(1) i{\n  left: -20px;\n}\n\n.flipped span:nth-child(3) i{\n  left: 20px;\n}\n\n.vertical-line {\n  height: 40px;\n  width: 1px;\n  border-left: 1px dashed black;\n  display: inline-block;\n  position: relative;\n  bottom: 10px;\n}\n\n.bottom-pixel-fix {\n  bottom: 2px;\n}\n\n.grayed-button {\n  color: darkgray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-node/tree-node.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white\"\n   (click)=\"flipCard()\"\n   [ngClass]=\"{'bottom-pixel-fix': flipped}\"\n>\n  <div *ngIf=\"flipped\" class=\"card-body flipped\" [@fadeIn]>\n    <span class=\"fa-stack fa-lg\">\n      <i class=\"fa fa-circle fa-stack-2x background-circle\"></i>\n      <i class=\"fa fa-tree fa-stack-1x fa-inverse\"\n         [ngClass]=\"{'grayed-button': !hasChildren}\"\n         (click)=\"(hasChildren) ? showTree($event) : null\"\n      ></i>\n    </span>\n    <div class=\"vertical-line\">&nbsp;</div>\n    <span class=\"fa-stack fa-lg\">\n      <i class=\"fa fa-circle fa-stack-2x background-circle\"></i>\n      <i class=\"fa fa-info fa-stack-1x fa-inverse\"\n         [ngClass]=\"{'grayed-button': !hasURL}\"\n         (click)=\"(hasURL) ? showSummary($event) : null\"></i>\n    </span>\n  </div>\n  <ng-template #fullText>{{title}}</ng-template>\n  <div *ngIf=\"!flipped\" class=\"card-body\" [@fadeIn]\n       placement=\"bottom\"\n       [ngbTooltip]=\"fullText\"\n       container=\"body\">\n    <p class=\"card-text\">{{ title }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tree-node/tree-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_service__ = __webpack_require__("../../../../../src/app/summary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TreeNodeComponent = (function () {
    function TreeNodeComponent(treeService, communication, router, api, summaryService) {
        this.treeService = treeService;
        this.communication = communication;
        this.router = router;
        this.api = api;
        this.summaryService = summaryService;
        this.flipped = false;
    }
    TreeNodeComponent.prototype.ngOnInit = function () { };
    /**
     * @description Flips the card.
     */
    TreeNodeComponent.prototype.flipCard = function () {
        if (this.flipped) {
            this.flipped = false;
        }
        else {
            this.flipped = true;
        }
    };
    /**
     * @description This moves down a level in the tree,
     * shows new node component titles on the tree page.
     * @param {any} event
     */
    TreeNodeComponent.prototype.showTree = function (event) {
        event.stopPropagation();
        this.treeService.currentTree.addTreeIndex(this.index);
        this.communication.emitEvent('changeTitles');
    };
    /**
     * @description This shows the summary attached to the
     * Wikipedia article of the search term. When clicked,
     * spinner is shown, we get the canonical URL of the
     * article, and then the summary and thumbnail. When
     * both the summary and thumbnail are fetched, and
     * they're not empty, navigate to the summary page.
     * @param event
     */
    TreeNodeComponent.prototype.showSummary = function (event) {
        var _this = this;
        event.stopPropagation();
        this.communication.emitEvent({ name: 'showSpinner' });
        var searchTerm = this.url.split('/')[2];
        this.api._getCanonicalURL(searchTerm).subscribe(function (urlResponse) {
            _this.summaryService.setURL(urlResponse.data);
            var obs1 = _this.api.getSummarySA(urlResponse.data);
            var obs2 = _this.api.getThumbnailSA(urlResponse.data);
            Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(obs1, obs2).subscribe(function (_a) {
                var summaryResponse = _a[0], thumbnailResponse = _a[1];
                if (summaryResponse.data && summaryResponse.data !== '') {
                    _this.summaryService.setSummary(summaryResponse.data);
                }
                if (thumbnailResponse.data && thumbnailResponse.data !== '') {
                    _this.summaryService.setThumbnail(thumbnailResponse.data);
                }
                if (_this.summaryService.getSummary() && _this.summaryService.getSummary() !== '') {
                    _this.communication.emitEvent({ name: 'hideSpinner' });
                    _this.router.navigate(['/summary']);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeNodeComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeNodeComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TreeNodeComponent.prototype, "hasURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TreeNodeComponent.prototype, "hasChildren", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeNodeComponent.prototype, "index", void 0);
    TreeNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-node',
            template: __webpack_require__("../../../../../src/app/tree-node/tree-node.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree-node/tree-node.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["b" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tree_service__["a" /* TreeService */],
            __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__summary_service__["a" /* SummaryService */]])
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeService = (function () {
    function TreeService() {
        this.currentTree = new CurrentTree();
    }
    TreeService.prototype.getCurrentTree = function () { return this.currentTree; };
    TreeService.prototype.resetTree = function () { this.currentTree = new CurrentTree(); };
    TreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TreeService);
    return TreeService;
}());

var CurrentTree = (function () {
    //  arr = [1, 3] arr[1] represents index of L0 clicked, or L1 children, so L2 is currently displayed
    function CurrentTree() {
        this.levels = [];
        this.tree = null;
        this.canonicalURL = null;
        this.treeIndicies = [];
    }
    CurrentTree.prototype.setTree = function (tree) { this.tree = tree; };
    CurrentTree.prototype.getTree = function () { return this.tree; };
    CurrentTree.prototype.setCanonicalURL = function (url) { this.canonicalURL = url; };
    CurrentTree.prototype.getCanonicalURL = function () { return this.getCanonicalURL(); };
    CurrentTree.prototype.addTreeIndex = function (index) { this.treeIndicies.push(index); };
    CurrentTree.prototype.getTreeIndicies = function () { return this.treeIndicies; };
    /**
     * @description This should always be preceded by the
     * addTreeIndex method - first record the index the
     * user clicked on, and then get children to be displayed
     * at the deepest level.
     * @param {number} level
     * @return {any}
     */
    CurrentTree.prototype.getChildrenAtLevel = function (level) {
        console.log(this.treeIndicies);
        if (this.treeIndicies && this.treeIndicies.length > 0) {
            var children = this.tree[this.treeIndicies[0]][0]['root']['children'];
            if (level >= 1) {
                for (var index = 1; index <= level; index++) {
                    if (this.treeIndicies[index]) {
                        children = children[this.treeIndicies[index]]['children'];
                    }
                }
            }
            return children;
        }
    };
    CurrentTree.prototype.getCurrentLevel = function () { return this.levels[this.levels.length - 1]; };
    CurrentTree.prototype.addLevel = function (node) { this.levels.push(node); };
    /**
     * @description Removes levels strictly bigger than
     * level, excluding itself. Tree indicies also need
     * to be emptied.
     * @param {number} level
     */
    CurrentTree.prototype.removeLevels = function (level) {
        var numLevels = this.levels.length;
        if (level < numLevels - 1) {
            // start excludes itself,
            this.levels.splice(level + 1, numLevels - level - 1);
            this.treeIndicies.splice(level, this.treeIndicies.length - level);
        }
    };
    /**
     * @description Get data from the tree array
     * returned from HTTP, push them to one variable,
     * and push a TreeNode containing the array of data
     * into the levels array.
     * @param {Array<any>} children
     */
    CurrentTree.prototype.extractData = function (children) {
        var allData = [];
        for (var index = 0; index < children.length; index++) {
            children[index].data.hasChildren = (children[index].children.length > 0) ? true : false;
            children[index].data.hasURL = (children[index].data.href) ? true : false;
            allData.push(children[index].data);
        }
        this.addLevel(new TreeNode(this.levels.length, allData));
    };
    /**
     * @description Same as extractData, except this
     * processes L0. L0's nesting to get to its node
     * data is slightly different.
     *
     * @return {number} Returns nothing if normal, -1
     * if data is abnormal.
     */
    CurrentTree.prototype.extractDataL0 = function () {
        var allData = [];
        try {
            for (var index = 0; index < this.tree.length; index++) {
                this.tree[index][0]['root']['data']['hasChildren'] = (this.tree[index][0]['root']['children'].length > 0) ? true : false;
                this.tree[index][0]['root']['data']['hasURL'] = (this.tree[index][0]['root']['data']['href']) ? true : false;
                allData.push(this.tree[index][0]['root']['data']);
            }
        }
        catch (err) {
            console.error(err);
            return -1;
        }
        this.addLevel(new TreeNode(0, allData));
    };
    return CurrentTree;
}());
var TreeNode = (function () {
    function TreeNode(level, data) {
        this.level = level;
        this.data = data;
    }
    TreeNode.prototype.setLevel = function (level) { this.level = level; };
    TreeNode.prototype.getLevel = function () { return this.level; };
    TreeNode.prototype.setData = function (data) { this.data = data; };
    TreeNode.prototype.getData = function () { return this.data; };
    return TreeNode;
}());


/***/ }),

/***/ "../../../../../src/app/tree/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* switching between mobile and desktop */\n/*@media (max-width: 575px) {*/\n  /*.tree-nodes-mobile, .page-switcher-mobile, .expand-branch-mobile {*/\n    /*display: inline-block;*/\n  /*}*/\n\n  /*.tree-nodes, .page-switcher, .nav-separator {*/\n    /*display: none !important;*/\n  /*}*/\n\n  /*.tree-nodes-mobile {*/\n    /*margin: 20px auto 60px auto;*/\n  /*}*/\n/*}*/\n\n@media (min-width: 576px) {\n  .tree-nodes-mobile, .page-switcher-mobile, .expand-branch-mobile {\n    display: none !important;\n  }\n\n  .tree-nodes, .page-switcher {\n    display: inline-block;\n  }\n\n  .tree-nodes {\n    margin: 20px auto 0px auto;\n  }\n}\n\n.tree-nodes, .tree-nodes-mobile {\n  min-height: calc(100vh - 53px - 20px - 2px); /** navbar and the top and btm margins and extra **/\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  margin: 20px auto 0px auto; /** originally only in min-width: 576px **/\n}\n\n.tree-nodes > .card {\n  background-color: #33691EA0;\n  width: 200px;\n  height: 70px;\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.tree-nodes p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.background-circle {\n  color: #333333;\n}\n\n.flipped {\n  padding: 1em;\n}\n\n.options-separator {\n  color: #FFFFFF;\n  font-size: 1.5rem;\n  font-weight: 100;\n}\n\n/*.expand-branch-mobile {*/\n  /*position: fixed;*/\n  /*bottom: 0;*/\n  /*left: 0;*/\n  /*width: 100%;*/\n  /*height: 60px;*/\n  /*margin: auto;*/\n  /*padding: 10px;*/\n  /*background-color: #FFFFFF;*/\n  /*overflow: hidden;*/\n/*}*/\n\n/*.expand-branch-mobile > .fa-stack {*/\n  /*float: right;*/\n  /*width: 10%;*/\n/*}*/\n\n/*.expand-branch-mobile > span:first-child {*/\n  /*float: left;*/\n  /*width: 90%;*/\n  /*font-size: 0.8em;*/\n  /*font-weight: 800;*/\n  /*display: -webkit-box; !** this is for multiline clipping *!*/\n  /*-webkit-line-clamp: 2;*/\n  /*-webkit-box-orient: vertical;*/\n  /*overflow: hidden;*/\n/*}*/\n\n.tree-nodes-mobile .fa-stack {\n  bottom: 10px;\n}\n\n.page-switcher-mobile {\n  position: absolute;\n  top: 300px;\n  right: 15px;\n}\n\n.page-switcher-mobile i:first-child {\n  display: block;\n}\n\n.page-switcher-mobile i {\n  transition: all .2s ease-in-out;\n  color: black;\n}\n\n.page-switcher-mobile i:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  color: #2e7d32;\n}\n\n.page-switcher-mobile i:active {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  color: #1b5e20;\n}\n\n.flipped i {\n  bottom: 3px;\n  transition: all .2s ease-in-out;\n}\n\n.flipped i:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.flipped i:active {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n\n.flipped span:nth-child(1) i{\n  left: -20px;\n}\n\n.flipped span:nth-child(3) i{\n  left: 20px;\n}\n\n.vertical-line {\n  height: 40px;\n  width: 1px;\n  border-left: 1px dashed black;\n  display: inline-block;\n  position: relative;\n  bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeIn]>\n  <!--commenting these out these will not be developed-->\n  <!--tree nodes mobile-->\n  <!--<div class=\"tree-nodes-mobile\">-->\n    <!--<app-tree-node-mobile *ngFor=\"let title of componentTitles\"-->\n                          <!--[fullText]=\"title\"></app-tree-node-mobile>-->\n  <!--</div>-->\n\n  <!--expanded mobile node-->\n  <!--<app-tree-node-expanded></app-tree-node-expanded>-->\n\n  <!--tree nodes-->\n  <div class=\"tree-nodes\">\n    <app-tree-node *ngFor=\"let data of componentTitles; let index = index\"\n                   [title]=\"data.text\"\n                   [url]=\"(data.hasURL) ? data.href : null\"\n                   [hasChildren]=\"data.hasChildren\"\n                   [hasURL]=\"data.hasURL\"\n                   [index]=\"index\"\n                   [@fadeIn]\n    ></app-tree-node>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TreeComponent = (function () {
    function TreeComponent(communication, route, treeService, router) {
        var _this = this;
        this.communication = communication;
        this.route = route;
        this.treeService = treeService;
        this.router = router;
        //  prevent direct access to this page
        if (!this.treeService.currentTree.canonicalURL) {
            this.router.navigate(['/']);
        }
        else {
            this.componentTitles = this.treeService.getCurrentTree()['levels'][0]['data'];
            this.communication.currentEvent.subscribe(function (currentEvent) {
                // console.log(currentEvent); // source of irregularity - if this shows up twice in the console, this fires twice (refreshing page after home page redirection solves the problem)
                if (currentEvent === 'changeTitles') {
                    if (_this.treeService.getCurrentTree().treeIndicies &&
                        _this.treeService.getCurrentTree().treeIndicies.length > 0) {
                        var currentChildren = _this.treeService.currentTree.getChildrenAtLevel(_this.treeService.currentTree.levels.length - 1);
                        _this.treeService.currentTree.extractData(currentChildren);
                        _this.componentTitles = _this.treeService.currentTree.getCurrentLevel().data;
                        // console.log(this.treeService.currentTree);
                        // console.log('fired counter');
                    }
                }
                else if (currentEvent.name === 'breadcrumbChangeTitles') {
                    // console.log('emitted level', currentEvent.data);
                    _this.componentTitles = _this.treeService.currentTree.levels[currentEvent.data].data;
                }
            });
        }
    }
    /**
     * @description When navigating away, the tree needs
     * to be reset.
     */
    TreeComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.treeService.resetTree();
        console.log(this.treeService.getCurrentTree());
        //  reload when going back to the homepage, this is a bugfix for doubly fired breadcrumb event
        this.router.events.subscribe(function (event) {
            // console.log('current url', this.router.url);
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */] && _this.router.url === '/') {
                window.location.reload();
            }
        });
    };
    TreeComponent.prototype.ngOnInit = function () {
    };
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/tree/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree/tree.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["b" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__communication_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__tree_service__["a" /* TreeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trending/trending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trending-cloud {\n  display: inline-block;\n  font-family: 'Cormorant Garamond', serif;\n  height: calc(100vh - 53px - 40px - 10px); /** navbar, top and btm margins, extra **/\n  margin: 20px auto;\n  width: 95%;\n}\n\n.trending-cloud > span:first-child {\n  left: 100px;\n  position: relative;\n  top: 20px;\n}\n\n.trending-cloud span { /* initial load incorrect viewport height bug fix */\n  visibility: hidden;\n}\n\n.trending-cloud span:hover { /* can't apply :not(hover) because it affects tag placement */\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  transition: all .2s ease-in-out;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.html":
/***/ (function(module, exports) {

module.exports = "<!--trending cloud area-->\n<div class=\"trending-cloud\" [@fadeIn] > <!-- appTagCloud [tags]=\"tags\">-->\n  <ng-template #fullText>{{(currentTag === currentQuery && errorMessage) ? errorMessage : currentTag}}</ng-template>\n  <span *ngFor=\"let tag of tags; let tagPopularity = index\"\n        appTagCloud\n        [tagPopularity]=\"tagPopularity\"\n        [tagName]=\"tag\"\n        [occupiedDOMRects]=\"occupiedDOMRects\"\n        (click)=\"doSearch(tag)\"\n        (mouseenter)=\"setCurrentTag(tag)\"\n        [ngbTooltip]=\"fullText\"\n        placement=\"top\">{{ tag }}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade.in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_service__ = __webpack_require__("../../../../../src/app/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_communication_service__ = __webpack_require__("../../../../../src/app/communication/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrendingComponent = (function () {
    function TrendingComponent(router, api, treeService, communication) {
        this.router = router;
        this.api = api;
        this.treeService = treeService;
        this.communication = communication;
        this.tags = [];
        this.occupiedDOMRects = []; // all the occupied DOMRects for ONE document size (cleared when resized)
        this.canClick = true; // only one HTTP request at a time (can't click on multiple tags)
    }
    TrendingComponent_1 = TrendingComponent;
    TrendingComponent.prototype.clearPreviousDOMRects = function () {
        this.occupiedDOMRects.length = 0;
    };
    /**
     * @description Shows spinner, gets trending items
     * and then hides spinner.
     */
    TrendingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.communication.emitEvent({ name: 'showSpinner' });
        this.api.getTrendingItems().subscribe(function (response) {
            response.data.forEach(function (item, index) {
                if (index < TrendingComponent_1.MAX_TAGS) {
                    _this.tags.push(item);
                }
            });
            _this.communication.emitEvent({ name: 'hideSpinner' });
        });
    };
    /**
     * @description This sets the current search term -
     * this helps us regulate user click activity (multiple
     * searches are not permitted until the first is
     * completed).
     * @param {string} tag
     */
    TrendingComponent.prototype.setCurrentTag = function (tag) {
        this.currentTag = tag;
    };
    /**
     * @description This processes the search in the same
     * way search is processed on the front page.
     * @param {string} query
     */
    TrendingComponent.prototype.doSearch = function (query) {
        var _this = this;
        if (!this.canClick) {
            console.log('You\'ve already clicked on a tag!');
            this.errorMessage = 'Please wait for a moment, you\'ve already clicked on a tag!';
        }
        this._validateSearch(query);
        //  if search is valid
        if (this.searchValid && this.canClick) {
            this.errorMessage = undefined;
            this.currentQuery = query;
            this.communication.emitEvent({ name: 'showSpinner' });
            this.canClick = false;
            //  if corresponding Wikipedia article exists
            this.api._getCanonicalURL(query).subscribe(function (response) {
                if (!response.error) {
                    _this.api.articleExistsSA(response.data).subscribe(function (existsResponse) {
                        if (existsResponse.data) {
                            //  set URL, tree, extract root level data and navigate to the tree page
                            _this.treeService.currentTree.setCanonicalURL(response.data);
                            _this.api.getTreesSA(response.data).subscribe(function (treesResponse) {
                                if (!treesResponse.error) {
                                    if (treesResponse.data.length === 0) {
                                        _this.errorMessage = 'Oops, it seems like there are no trees for this topic.';
                                        _this.communication.emitEvent({ name: 'hideSpinner' });
                                        _this.canClick = true;
                                    }
                                    else {
                                        _this.treeService.currentTree.setTree(treesResponse.data);
                                        if (_this.treeService.currentTree.extractDataL0() === -1) {
                                            _this.errorMessage = 'There has been an error processing the tree.';
                                            _this.communication.emitEvent({ name: 'hideSpinner' });
                                            _this.canClick = true;
                                        }
                                        else {
                                            console.log(_this.treeService.getCurrentTree());
                                            _this.communication.emitEvent({ name: 'hideSpinner' });
                                            _this.canClick = true;
                                            _this.router.navigate(['/tree']);
                                        }
                                    }
                                }
                            });
                        }
                    });
                }
                else {
                    _this.communication.emitEvent({ name: 'hideSpinner' });
                    _this.errorMessage = response.error;
                    _this.canClick = true;
                    console.log(response.error);
                }
            }); // server error
        }
    };
    /**
     * @description This validates search in the same way
     * search terms are validated on the front page.
     * @param {string} query
     * @private
     */
    TrendingComponent.prototype._validateSearch = function (query) {
        this.currentQuery = query;
        if (query === '') {
            this.searchValid = undefined;
        }
        else {
            this.searchValid = (query.match(/^[\w\s]+$/g)) ? true : false;
        }
        if (this.searchValid === undefined) {
            this.errorMessage = 'Search can\'t be empty!';
            this.canClick = true;
        }
        else if (!this.searchValid) {
            this.errorMessage = 'Searches that don\'t only contain these characters are currently not supported: a-z, A-Z, 0-9, _ (underscore)';
            this.canClick = true;
        }
    };
    TrendingComponent.MAX_TAGS = 50;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrendingComponent.prototype, "clearPreviousDOMRects", null);
    TrendingComponent = TrendingComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trending',
            template: __webpack_require__("../../../../../src/app/trending/trending.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trending/trending.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["b" /* fadeIn */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__tree_service__["a" /* TreeService */],
            __WEBPACK_IMPORTED_MODULE_5__communication_communication_service__["a" /* CommunicationService */]])
    ], TrendingComponent);
    return TrendingComponent;
    var TrendingComponent_1;
}());



/***/ }),

/***/ "../../../../../src/assets/images/tree-bush.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tree-bush.3eb4f452d7e718122253.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map