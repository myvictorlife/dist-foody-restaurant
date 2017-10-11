webpackJsonp([12],{

/***/ "../../../../../src/app/layout/config/config-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_component__ = __webpack_require__("../../../../../src/app/layout/config/config.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__config_component__["a" /* ConfigComponent */] }
];
var ConfigRoutingModule = (function () {
    function ConfigRoutingModule() {
    }
    return ConfigRoutingModule;
}());
ConfigRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ConfigRoutingModule);

//# sourceMappingURL=config-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/config/config.component.html":
/***/ (function(module, exports) {

module.exports = " <div [@routerTransition]>\n    <app-page-header [heading]=\"'Configuração'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n    <div class=\"row\">\n    \t<div class=\"col-lg-1\">\n    \t</div>\n    \t<div class=\"col-lg-5\">\n    \t\t<label>{{ 'screen.principal' | translate }} *</label><br/>\n    \t\t<!-- <img src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"350\" height=\"200\" > -->\n            <img *ngIf=\"!formulario.get('img').value\" src=\"assets/images/400x280.png\" class=\"rounded float-left\" width=\"350\" height=\"200\" >\n            <img *ngIf=\"formulario.get('img').value\" [src]=\"formulario.get('img').value\" class=\"rounded float-left\" width=\"350\" height=\"200\" >\n            <div style=\"cursor: pointer;\" *ngIf=\"formulario.get('img').value\" (click)=\"removeImg()\">Remover imagem</div>\n    \t\t<label class=\"custom-file size-input-file\" >\n\t\t\t  <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'imgFile')\"  >\n\t\t\t  <span class=\"custom-file-control\"></span>\n\t\t\t</label>\n    \t</div> \n    \t<div class=\"col-lg-5\">\n    \t\t<label>{{ 'screen.menu' | translate }}</label><br/>\n    \t\t<img *ngIf=\"!formulario.get('thumb').value\" src=\"assets/images/400x280.png\" class=\"rounded float-left\" width=\"350\" height=\"200\" >\n            <img *ngIf=\"formulario.get('thumb').value\" [src]=\"formulario.get('thumb').value\" class=\"rounded float-left\" width=\"350\" height=\"200\" >\n            <div style=\"cursor: pointer;\" *ngIf=\"formulario.get('thumb').value\" (click)=\"removeThumb()\">Remover imagem</div>\n    \t\t<label class=\"custom-file size-input-file\" >\n\t\t\t  <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'thumbImage')\" >\n\t\t\t  <span class=\"custom-file-control\"></span>\n\t\t\t</label>\n    \t</div>\n    </div>\n    <div class=\"row\">\n            <div class=\"col col-xl-1 col-lg-1\">\n            </div>\n            <div class=\"col-lg-10\">\n\n                    <div class=\"form-group\"  >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'name' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"name\"\n                                id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('name')\"\n                              msgErro=\"{{ 'name.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'description' | translate }}*</label>\n                            <textarea type=\"text\" class=\"form-control\"\n                                formControlName=\"description\"\n                                id=\"description\" placeholder=\"{{ 'description' | translate }}\" rows=\"3\" ></textarea>\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('description')\"\n                              msgErro=\"{{ 'description.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'about_us' | translate }}*</label>\n                            <textarea type=\"text\" class=\"form-control\"\n                                formControlName=\"about_us\"\n                                id=\"about_us\" placeholder=\"{{ 'about_us' | translate }}\" rows=\"3\" ></textarea>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'monday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"monday\"\n                                id=\"monday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('monday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'tuesday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"tuesday\"\n                                id=\"tuesday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('tuesday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'wednesday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"wednesday\"\n                                id=\"wednesday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('wednesday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'thursday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"thursday\"\n                                id=\"thursday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('thursday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'friday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"friday\"\n                                id=\"friday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('friday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'saturday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"saturday\"\n                                id=\"saturday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('saturday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'sunday' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"sunday\"\n                                id=\"sunday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('sunday')\"\n                              msgErro=\"{{ 'time.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>Distancia máxima da entrega:*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"km_max\"\n                                id=\"km_max\" placeholder=\"Ex: 5km\" >\n                        </fieldset>\n                    </div>\n\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >{{ 'clear' | translate }}</button>\n                        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"edit()\" >{{ 'save' | translate }}</button>\n                    </div>\n                \n            </div>\n        </div>\n        </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/config/config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".size-input-file {\n  max-width: 79%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigComponent = (function () {
    function ConfigComponent(restaurantService, uploadService, toastr, formBuilder) {
        this.restaurantService = restaurantService;
        this.uploadService = uploadService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        this.initFormulario();
    };
    ConfigComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    ConfigComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    ConfigComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    ConfigComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    ConfigComponent.prototype.changeListener = function ($event, inputName) {
        this.readThis($event.target, inputName);
    };
    ConfigComponent.prototype.readThis = function (inputValue, inputName) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            var base64 = myReader.result.substring(myReader.result.indexOf(",") + 1, myReader.result.length);
            var jsonImage = {
                filename: file.name,
                type: file.type,
                size: file.size,
                base64: base64
            };
            _this.uploadService.getUrl(jsonImage).subscribe(function (result) {
                if (inputName === 'imgFile') {
                    _this.formulario.controls['img'].setValue(result.url);
                }
                else {
                    _this.formulario.controls['thumb'].setValue(result.url);
                }
            });
        };
        myReader.readAsDataURL(file);
    };
    ConfigComponent.prototype.initFormulario = function () {
        var _this = this;
        this.formulario = this.formBuilder.group({
            id: [null, []],
            img: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            thumb: [null],
            name: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)]],
            description: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)]],
            about_us: [null],
            monday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            tuesday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            wednesday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            thursday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            friday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            saturday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            sunday: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]],
            km_max: [null, []],
        });
        var restaurant = this.restaurantService.getAll();
        if (!restaurant.length) {
            this.restaurantService.populate().subscribe(function (result) {
                if (result.status) {
                    _this.populate(result.data);
                }
            });
        }
    };
    ConfigComponent.prototype.populate = function (restaurant) {
        this.formulario.setValue({
            id: restaurant.id,
            img: restaurant.img,
            thumb: restaurant.thumb,
            name: restaurant.name,
            description: restaurant.description,
            about_us: restaurant.about_us,
            monday: restaurant.monday,
            tuesday: restaurant.tuesday,
            wednesday: restaurant.wednesday,
            thursday: restaurant.thursday,
            friday: restaurant.friday,
            saturday: restaurant.saturday,
            sunday: restaurant.sunday,
            km_max: restaurant.km_max ? restaurant.km_max : ''
        });
    };
    ConfigComponent.prototype.edit = function () {
        var _this = this;
        this.restaurantService.edit(this.formulario.value).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
            }
            else {
                _this.toastr.warning('', result.message);
            }
        });
    };
    ConfigComponent.prototype.removeImg = function () {
        this.formulario.controls['img'].setValue(null);
    };
    ConfigComponent.prototype.removeThumb = function () {
        this.formulario.controls['thumb'].setValue(null);
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-config',
        template: __webpack_require__("../../../../../src/app/layout/config/config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/config/config.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_upload_service__["a" /* UploadService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _d || Object])
], ConfigComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/config/config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_component__ = __webpack_require__("../../../../../src/app/layout/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_routing_module__ = __webpack_require__("../../../../../src/app/layout/config/config-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConfigModule = (function () {
    function ConfigModule() {
    }
    return ConfigModule;
}());
ConfigModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__config_routing_module__["a" /* ConfigRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__config_component__["a" /* ConfigComponent */]]
    })
], ConfigModule);

//# sourceMappingURL=config.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map