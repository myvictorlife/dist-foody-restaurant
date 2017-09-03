webpackJsonp([6],{

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col-md-4 push-md-4\">\n            <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\n            <h1>FastyFood</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"profile.email\"\n                        name=\"email\"\n                        class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'email' | translate }}\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" \n                        [(ngModel)]=\"profile.password\"\n                        name=\"password\"\n                        class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"{{ 'password' | translate }}\">\n                    </div>\n                </div>\n                <a class=\"btn rounded-btn\" (click)=\"onLoggedin()\"> {{ 'login' | translate }} </a>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #f49518;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #f49518;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n  .login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_login_service__ = __webpack_require__("../../../../../src/app/shared/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, loginService, toastr) {
        this.router = router;
        this.loginService = loginService;
        this.toastr = toastr;
        this.profile = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        if (this.profile.email && this.profile.password) {
            this.loginService.authenticate(this.profile).subscribe(function (result) {
                if (result.status) {
                    _this.toastr.success('Seja bem vindo, ' + result.data.name + '!', 'Logado com sucesso');
                    var user = result.data;
                    var now = (new Date()).getTime();
                    var day = 1000 * 60 * 60 * 24;
                    user.expires = now + day;
                    localStorage.setItem('isUserLogged', JSON.stringify(user));
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.toastr.warning('', result.message);
                }
            });
        }
        else {
            this.toastr.warning('Os campos devem ser preenchidos', 'Alerta');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../ngx-toastr/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_portal__ = __webpack_require__("../../../../ngx-toastr/portal/portal.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay_container__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay-container.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_overlay_ref__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay-ref.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_toast_directive__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-directive.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toastr_toast_component__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toastr_toastr_service__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-service.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__toastr_toastr_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toastr_toastr_config__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-config.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toastr_toastr_module__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__toastr_toastr_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toastr_toast_injector__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-injector.js");
/* unused harmony namespace reexport */












/***/ }),

/***/ "../../../../ngx-toastr/overlay/overlay-container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayContainer; });
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());



/***/ }),

/***/ "../../../../ngx-toastr/overlay/overlay-ref.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRef; });
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());



/***/ }),

/***/ "../../../../ngx-toastr/overlay/overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__ = __webpack_require__("../../../../ngx-toastr/portal/dom-portal-host.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_ref__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay-ref.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_container__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay-container.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
/* unused harmony export OVERLAY_PROVIDERS */




/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__["a" /* DomPortalHost */](pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_2__overlay_ref__["a" /* OverlayRef */](this._createPortalHost(pane));
    };
    Overlay.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ApplicationRef */], },
    ]; };
    return Overlay;
}());

/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    Overlay,
    __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */],
];


/***/ }),

/***/ "../../../../ngx-toastr/portal/dom-portal-host.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__("../../../../ngx-toastr/portal/portal.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomPortalHost; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(__WEBPACK_IMPORTED_MODULE_0__portal__["a" /* BasePortalHost */]));



/***/ }),

/***/ "../../../../ngx-toastr/portal/portal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePortalHost; });
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());

/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toast-component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_config__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toastr_service__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });



var Toast = (function () {
    function Toast(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    Toast.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastrService.remove(_this.toastPackage.toastId);
        }, 300);
    };
    Toast.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    Toast.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */], args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
                    animations: [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('flyInOut', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({
                                display: 'none',
                                opacity: 0
                            })),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: 1 })),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: 0 })),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('300ms ease-in')),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('active => removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('300ms ease-in')),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__toastr_service__["a" /* ToastrService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__toastr_config__["a" /* ToastPackage */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ApplicationRef */], },
    ]; };
    Toast.propDecorators = {
        'toastClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostBinding */], args: ['class',] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostBinding */], args: ['@flyInOut',] },],
        'tapToast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */], args: ['click',] },],
        'stickAround': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */], args: ['mouseenter',] },],
        'delayedHideToast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */], args: ['mouseleave',] },],
    };
    return Toast;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toast-directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export ToastContainerDirective */
/* unused harmony export ToastContainerModule */

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */], args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] },
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */], },
    ]; };
    return ToastContainerDirective;
}());

var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    ToastContainerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    exports: [ToastContainerDirective],
                    declarations: [ToastContainerDirective],
                },] },
    ];
    /** @nocollapse */
    ToastContainerModule.ctorParameters = function () { return []; };
    return ToastContainerModule;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toast-injector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_config__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastInjector; });


/**
 * Reference to a toast opened via the Toastr service.
 */
var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._activate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._manualClose = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());

/** Custom injector type specifically for instantiating components with a toast. */
var ToastInjector = (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === __WEBPACK_IMPORTED_MODULE_1__toastr_config__["a" /* ToastPackage */] && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toast-token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOAST_CONFIG; });

var TOAST_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* InjectionToken */]('ToastConfig');


/***/ }),

/***/ "../../../../ngx-toastr/toastr/toastr-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastPackage; });

/**
 * Everything a toast needs to launch
 */
var ToastPackage = (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._onAction = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    /** Fired on click */
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toastr-module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_token__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_service__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay-container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrModule; });







var ToastrModule = (function () {
    function ToastrModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__toast_token__["a" /* TOAST_CONFIG */], useValue: config },
                __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__["a" /* OverlayContainer */],
                __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__["a" /* Overlay */],
                __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */],
            ]
        };
    };
    ToastrModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
                },] },
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return [
        { type: ToastrModule, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* SkipSelf */] },] },
    ]; };
    return ToastrModule;
}());



/***/ }),

/***/ "../../../../ngx-toastr/toastr/toastr-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__("../../../../ngx-toastr/overlay/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_portal__ = __webpack_require__("../../../../ngx-toastr/portal/portal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_config__ = __webpack_require__("../../../../ngx-toastr/toastr/toastr-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_injector__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-injector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_token__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_component__ = __webpack_require__("../../../../ngx-toastr/toastr/toast-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var ToastrService = (function () {
    function ToastrService(toastrConfig, overlay, _injector, sanitizer) {
        this.toastrConfig = toastrConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        function use(source, defaultValue) {
            return toastrConfig && source !== undefined ? source : defaultValue;
        }
        this.toastrConfig = this.applyConfig(toastrConfig);
        // Global
        this.toastrConfig.maxOpened = use(this.toastrConfig.maxOpened, 0);
        this.toastrConfig.autoDismiss = use(this.toastrConfig.autoDismiss, false);
        this.toastrConfig.newestOnTop = use(this.toastrConfig.newestOnTop, true);
        this.toastrConfig.preventDuplicates = use(this.toastrConfig.preventDuplicates, false);
        if (!this.toastrConfig.iconClasses) {
            this.toastrConfig.iconClasses = {};
        }
        this.toastrConfig.iconClasses.error = this.toastrConfig.iconClasses.error || 'toast-error';
        this.toastrConfig.iconClasses.info = this.toastrConfig.iconClasses.info || 'toast-info';
        this.toastrConfig.iconClasses.success = this.toastrConfig.iconClasses.success || 'toast-success';
        this.toastrConfig.iconClasses.warning = this.toastrConfig.iconClasses.warning || 'toast-warning';
        // Individual
        this.toastrConfig.timeOut = use(this.toastrConfig.timeOut, 5000);
        this.toastrConfig.closeButton = use(this.toastrConfig.closeButton, false);
        this.toastrConfig.extendedTimeOut = use(this.toastrConfig.extendedTimeOut, 1000);
        this.toastrConfig.progressBar = use(this.toastrConfig.progressBar, false);
        this.toastrConfig.enableHtml = use(this.toastrConfig.enableHtml, false);
        this.toastrConfig.toastClass = use(this.toastrConfig.toastClass, 'toast');
        this.toastrConfig.positionClass = use(this.toastrConfig.positionClass, 'toast-top-right');
        this.toastrConfig.titleClass = use(this.toastrConfig.titleClass, 'toast-title');
        this.toastrConfig.messageClass = use(this.toastrConfig.messageClass, 'toast-message');
        this.toastrConfig.tapToDismiss = use(this.toastrConfig.tapToDismiss, true);
        this.toastrConfig.toastComponent = use(this.toastrConfig.toastComponent, __WEBPACK_IMPORTED_MODULE_6__toast_component__["a" /* Toast */]);
        this.toastrConfig.onActivateTick = use(this.toastrConfig.onActivateTick, false);
    }
    /** show successful toast */
    ToastrService.prototype.show = function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    ToastrService.prototype.success = function (message, title, override) {
        var type = this.toastrConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    ToastrService.prototype.error = function (message, title, override) {
        var type = this.toastrConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    ToastrService.prototype.info = function (message, title, override) {
        var type = this.toastrConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    ToastrService.prototype.warning = function (message, title, override) {
        var type = this.toastrConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    ToastrService.prototype.clear = function (toastId) {
        // Call every toastRef manualClose function
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    ToastrService.prototype.remove = function (toastId) {
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    ToastrService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /** create a clone of global config and apply individual settings */
    ToastrService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        var current = __assign({}, this.toastrConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        return current;
    };
    /**
     * Find toast object by id
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        // max opened and auto dismiss = true
        if (this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* SecurityContext */].HTML, message);
        }
        var toastRef = new __WEBPACK_IMPORTED_MODULE_4__toast_injector__["a" /* ToastRef */](overlayRef);
        var toastPackage = new __WEBPACK_IMPORTED_MODULE_3__toastr_config__["a" /* ToastPackage */](this.index, config, sanitizedMessage, title, toastType, toastRef);
        var ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterActivate(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        var toastInjector = new __WEBPACK_IMPORTED_MODULE_4__toast_injector__["b" /* ToastInjector */](toastPackage, this._injector);
        var component = new __WEBPACK_IMPORTED_MODULE_2__portal_portal__["b" /* ComponentPortal */](config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    ToastrService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_5__toast_token__["a" /* TOAST_CONFIG */],] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__["a" /* Overlay */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], },
    ]; };
    return ToastrService;
}());



/***/ })

});
//# sourceMappingURL=6.chunk.js.map