webpackJsonp([12],{

/***/ "../../../../../src/app/layout/cuisines/cuisines-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuisines_component__ = __webpack_require__("../../../../../src/app/layout/cuisines/cuisines.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuisinesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cuisines_component__["a" /* CuisinesComponent */] }
];
var CuisinesRoutingModule = (function () {
    function CuisinesRoutingModule() {
    }
    return CuisinesRoutingModule;
}());
CuisinesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CuisinesRoutingModule);

//# sourceMappingURL=cuisines-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cuisines/cuisines.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Categorias dos produtos'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n    \n<div class=\"row\">\n    \n    <div class=\"col col-xl-6 col-lg-6\">\n    \t<div class=\"card mb-3\">\n            <div class=\"card-header\">\n                Lista de Categorias\n            </div>\n            <div class=\"card-block table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                    <tr>\n                        <th>Categoria</th>\n                        <th>Mostrar</th>\n                        <th>Remover</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let cat of categories\">\n                            <td (click)=\"populate(cat)\">\n                            \t{{cat.name}}\n                            </td>\n                            <td (click)=\"populate(cat)\">\n                            \t{{cat.activated ? 'Sim' : 'Não'}}\n                            </td>\n                            <td (click)=\"remove(content, cat)\">Remover</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n    \t</div>\n    </div>\n    <div class=\"col col-xl-4 col-lg-4\">\n    \t <form class=\"form-horizontal\" [formGroup]=\"updateForm\">\n                <div class=\"form-group\">\n                    <fieldset class=\"form-group\">\n                        <label>{{ 'name' | translate }}*</label>\n                        <input type=\"text\" class=\"form-control\"\n                            formControlName=\"name\"\n                            id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                        <app-campo-control-erro\n                          [mostrarErro]=\"verificaValidTouched('name')\"\n                          msgErro=\"{{ 'name.required' | translate }}\">\n                        </app-campo-control-erro>\n                    </fieldset>\n                </div>\n                \n                <fieldset class=\"form-group text-center\">\n                    <label>Ativar*</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                        </label> &nbsp;&nbsp;&nbsp;\n                        <label>\n                            <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios2\" value=\"0\"> Não\n                        </label>\n                    </div>\n                </fieldset>\n\n                <div class=\"text-center\">\n                    <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >{{ 'clear' | translate }}</button>\n                    <button type=\"submit\" [disabled]=\"!updateForm.valid\" class=\"btn btn-primary\" (click)=\"register()\" >{{ 'save' | translate }}</button>\n                </div>\n                \n            </form>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'cuisines.remove' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<h6 class=\"modal-title\">Todos os produtos relacionados a essa categoria também serão removidos.</h6>\n    <br/>\n    <p><strong>{{category.name}}</strong></p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'no' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'yes' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/cuisines/cuisines.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/cuisines/cuisines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_cuisines_service__ = __webpack_require__("../../../../../src/app/shared/services/cuisines.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuisinesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CuisinesComponent = (function () {
    function CuisinesComponent(cuisinesService, restaurantService, toastr, formBuilder, modalService) {
        var _this = this;
        this.cuisinesService = cuisinesService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.category = "";
        this.restaurant = this.restaurantService.getAll();
        // Caso não esteja populado os dados do restaurante busca no banco de dados
        if (!this.restaurant || !this.restaurant.id) {
            this.restaurantService.populate().subscribe(function (result) {
                _this.restaurant = result.data;
                _this.findCuisines(_this.restaurant.id);
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
        else {
            this.findCuisines(this.restaurant.id);
        }
    }
    CuisinesComponent.prototype.findCuisines = function (restaurantId) {
        var _this = this;
        this.cuisinesService.getCuisines(restaurantId).subscribe(function (result) {
            _this.categories = _this.cuisinesService.getAll();
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    CuisinesComponent.prototype.ngOnInit = function () {
        this.updateForm = this.formBuilder.group({
            'id': [],
            'name': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'activated': []
        });
    };
    CuisinesComponent.prototype.getRestaurantCategories = function (id, restaurant) {
        var restaurantCategories = restaurant.Categories;
        for (var k in restaurantCategories) {
            var cat = restaurantCategories[k];
            if (cat === id) {
                return true;
            }
        }
        return false;
    };
    CuisinesComponent.prototype.populate = function (category) {
        this.updateForm.setValue({
            id: category.id,
            name: category.name,
            activated: category.activated ? "1" : "0",
            restaurants_id: category.restaurants_id,
        });
    };
    CuisinesComponent.prototype.register = function () {
        var _this = this;
        if (this.updateForm.valid) {
            if (this.updateForm.value.id) {
                this.cuisinesService.edit(this.updateForm.value).subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.cuisinesService.getAll();
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
                var category = this.updateForm.value;
                category.restaurants_id = this.restaurant.id;
                this.cuisinesService.register(category).subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.cuisinesService.getAll();
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
            this.verificaValidacoesForm(this.updateForm);
        }
    };
    CuisinesComponent.prototype.reset = function () {
        this.updateForm.reset();
    };
    CuisinesComponent.prototype.remove = function (content, category) {
        var _this = this;
        this.category = category;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.cuisinesService.remove(category.id)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.toastr.success(result.message, '');
                        _this.categories = _this.cuisinesService.getAll();
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
    CuisinesComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CuisinesComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.updateForm.get(campo).valid &&
            (this.updateForm.get(campo).touched || this.updateForm.get(campo).dirty));
    };
    CuisinesComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    CuisinesComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return CuisinesComponent;
}());
CuisinesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cuisines',
        template: __webpack_require__("../../../../../src/app/layout/cuisines/cuisines.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/cuisines/cuisines.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_cuisines_service__["a" /* CuisinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_cuisines_service__["a" /* CuisinesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _e || Object])
], CuisinesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cuisines.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cuisines/cuisines.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuisines_component__ = __webpack_require__("../../../../../src/app/layout/cuisines/cuisines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuisines_routing_module__ = __webpack_require__("../../../../../src/app/layout/cuisines/cuisines-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisinesModule", function() { return CuisinesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CuisinesModule = (function () {
    function CuisinesModule() {
    }
    return CuisinesModule;
}());
CuisinesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__cuisines_routing_module__["a" /* CuisinesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__cuisines_component__["a" /* CuisinesComponent */]]
    })
], CuisinesModule);

//# sourceMappingURL=cuisines.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map