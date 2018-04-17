webpackJsonp([11],{

/***/ "../../../../../src/app/layout/employee/employee-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_component__ = __webpack_require__("../../../../../src/app/layout/employee/employee.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__employee_component__["a" /* EmployeeComponent */] }
];
var EmployeeRoutingModule = (function () {
    function EmployeeRoutingModule() {
    }
    return EmployeeRoutingModule;
}());
EmployeeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EmployeeRoutingModule);

//# sourceMappingURL=employee-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Funcionários'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n            <div class=\"col col-xl-6 col-lg-10\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        {{ 'list.employees' | translate }}\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>{{ 'user' | translate }}</th>\n                                <th>{{ 'email' | translate }}</th>\n                                <th>{{ 'user.type' | translate }}</th>\n                                <th>{{ 'options' | translate }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let profile of profiles\" (click)=\"populate(profile)\" >\n                                    <td>{{profile.name}}</td>\n                                    <td>{{profile.email}}</td>\n                                    <td>{{profile.permission}}</td>\n                                    <td (click)=\"remove(content, profile)\">Remover</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n\n                <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'name' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"name\"\n                                id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('name')\"\n                              msgErro=\"{{ 'name.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('email')\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'email' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"email\"\n                                id=\"l\" placeholder=\"{{ 'email' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('email')\"\n                              msgErro=\"{{ 'email.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'password' | translate }}*</label>\n                            <input type=\"password\" class=\"form-control\"\n                                formControlName=\"password\"\n                                id=\"l\" placeholder=\"Nova senha\" >\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'user.type' | translate }}*</label>\n                            <select class=\"custom-select btn-block\" formControlName=\"permission\">\n                                <option value=\"user\" selected>{{ 'user' | translate }}</option>\n                                <option value=\"admin\">{{ 'admin' | translate }}</option>\n                            </select>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >{{ 'clear' | translate }}</button>\n                        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >{{ 'save' | translate }}</button>\n                    </div>\n                    \n                </form>\n\n            </div>\n        </div>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{ 'user.remove' | translate }}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{profile.name}} - {{profile.email}}</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'no' | translate }}</button>\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'yes' | translate }}</button>\n          </div>\n        </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/employee/employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeComponent = (function () {
    function EmployeeComponent(formBuilder, userService, toastr, modalService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.profiles = this.userService.getAll();
        if (!this.profiles.length) {
            this.userService.populate()
                .subscribe(function (result) {
                _this.profiles = result.data;
            });
        }
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            password: [null, []],
            permission: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
        });
    };
    EmployeeComponent.prototype.populate = function (profile) {
        this.formulario.setValue({
            id: profile.id,
            name: profile.name,
            email: profile.email,
            password: profile.password,
            permission: profile.permission,
        });
    };
    EmployeeComponent.prototype.register = function () {
        var _this = this;
        if (this.formulario.valid) {
            if (this.formulario.value.id) {
                this.userService.existEmail(this.formulario.get('email').value)
                    .subscribe(function (result) {
                    if (!result.status || result.data.id === _this.formulario.get('id').value) {
                        _this.userService.edit(_this.formulario.value)
                            .subscribe(function (result) {
                            if (result.status) {
                                _this.profiles = _this.userService.getAll();
                                _this.toastr.success(result.message, '');
                                _this.reset();
                            }
                            else {
                                _this.toastr.warning('', result.message);
                            }
                        }, function (error) {
                            if (error.status === 401) {
                                _this.onLoggedout();
                            }
                        });
                    }
                    else {
                        _this.toastr.warning('', 'Email já esta sendo utilizado.');
                    }
                });
            }
            else {
                this.userService.register(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.profiles = _this.userService.getAll();
                        _this.toastr.success(result.message, '');
                        _this.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    EmployeeComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    EmployeeComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    EmployeeComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    EmployeeComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    EmployeeComponent.prototype.remove = function (content, profile) {
        var _this = this;
        this.profile = profile;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.userService.remove(profile.email)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.profiles = _this.userService.getAll();
                        _this.toastr.success(result.message, '');
                        _this.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
        }, function (reason) {
        });
    };
    EmployeeComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EmployeeComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-employee',
        template: __webpack_require__("../../../../../src/app/layout/employee/employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/employee/employee.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], EmployeeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/employee/employee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_component__ = __webpack_require__("../../../../../src/app/layout/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_routing_module__ = __webpack_require__("../../../../../src/app/layout/employee/employee-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__employee_routing_module__["a" /* EmployeeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__employee_component__["a" /* EmployeeComponent */]]
    })
], EmployeeModule);

//# sourceMappingURL=employee.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map