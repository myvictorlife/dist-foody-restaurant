webpackJsonp([5],{

/***/ "../../../../../src/app/layout/product/product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_component__ = __webpack_require__("../../../../../src/app/layout/product/product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__product_component__["a" /* ProductComponent */] }
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductRoutingModule);

//# sourceMappingURL=product-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Pedidos'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>  \n  <!--list of categories-->\n  <div *ngFor=\"let cat of categories\" >\n    \n    <ol class=\"breadcrumb\">\n\t  <li class=\"breadcrumb-item category\">{{ cat.name }}</li>\n\t</ol>\t\n\t\n\t<div class=\"table-responsive\">\n    <table class=\"table \" *ngIf=\"cat.items && cat.items.length\">\n\t  <thead>\n\t    <tr>\n\t      <th>{{ 'img' | translate }}</th>\n\t      <th>{{ 'product' | translate }}</th>\n\t      <th>{{ 'ingredients' | translate }}</th>\n\t      <th>{{ 'price' | translate }}</th>\n        <th>{{ 'required' | translate }}</th>\n        <th>{{ 'additional' | translate }}</th>\n        <th>{{ 'remove' | translate }}</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody>\n\t    <tr *ngFor=\"let item of cat.items\">\n\t      <td (click)=\"editItem(content, cat, item)\"><img src=\"{{ item.thumb}}\" alt=\"\" width=\"40\" height=\"30\"></td>\n\t      <td (click)=\"editItem(content, cat, item)\">{{ item.name }}</td>\n\t      <td (click)=\"editItem(content, cat, item)\">{{ item.ingredients }}</td>\n\t      <td (click)=\"editItem(content, cat, item)\">R$ {{ item.price }}</td>\n        <td (click)=\"addRequired(contentAdditional, item, cat.id)\" ><button type=\"button\" class=\"btn btn-outline-primary\">{{ 'required' | translate }}</button></td>\n        <td (click)=\"addOptional(contentAdditional, item, cat.id)\"><button type=\"button\" class=\"btn btn-outline-primary\">{{ 'additional' | translate }}</button></td>\n        <td (click)=\"removeItem(contentRemove, item, cat.id)\"><button type=\"button\" class=\"btn btn-outline-primary\">{{ 'remove' | translate }}</button></td>\n\t    </tr>\n\t  </tbody>\n\t</table>\n\t</div>\n\t<button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block margin-button\" (click)=\"add(content, cat)\">\n\t\tAdicionar  {{cat.name}}\n\t</button>\n  </div>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n  \t<form class=\"form-horizontal\" [formGroup]=\"formulario\">\n\n  \t\t\t<div class=\"row\">\n  \t\t\t\t<div class=\"col-lg-3\">\n  \t\t\t\t</div>\n\t\t    \t<div class=\"col-lg-5\">\n\t\t    \t\t<!-- <img src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"350\" height=\"200\" > -->\n\t\t            <img *ngIf=\"!formulario.get('thumb').value\" src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"200\" height=\"150\" >\n\t\t            <img *ngIf=\"formulario.get('thumb').value\" [src]=\"formulario.get('thumb').value\" class=\"rounded float-left\" width=\"150\" height=\"150\" >\n\n\t\t    \t\t<label class=\"custom-file size-input-file\" >\n\t\t\t\t\t  <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'imgFile')\"  >\n\t\t\t\t\t  <span class=\"custom-file-control\"></span>\n\t\t\t\t\t</label>\n\t\t    \t</div> \n\t\t    </div>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'name' | translate }}</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"name\"\n                    id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('name')\"\n                  msgErro=\"{{ 'name.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'ingredients' | translate }}</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"ingredients\"\n                    id=\"l\" placeholder=\"{{ 'ingredients' | translate }}\" >\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'price' | translate }}</label>\n                <input type=\"price\" class=\"form-control\"\n                    formControlName=\"price\"\n                    id=\"l\" placeholder=\"{{ 'price' | translate }}\" >\n            </fieldset>\n        \n    </form>\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('no')\">{{ 'cancel' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('yes')\">{{ 'save' | translate }}</button>\n  </div>\n</ng-template>\n\n\n <ng-template #contentAdditional let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'additional' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <app-additional\n      item_id={{item_id}}\n      options={{options}}\n      category_id={{category_id}}\n      items=\"{{additional}}\">\n    </app-additional>\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('yes')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>\n\n\n<ng-template #contentRemove let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'product.remove' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{itemSelected.name}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'no' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'yes' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category {\n  font-size: 20px; }\n\n.margin-button {\n  margin-bottom: 20px; }\n\n.table-responsive {\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_item_service__ = __webpack_require__("../../../../../src/app/shared/services/item.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductComponent = (function () {
    function ProductComponent(formBuilder, toastr, modalService, uploadService, restaurantService, itemService, categoryService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.restaurantService = restaurantService;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.title = '';
        this.categories = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formulario = this.formBuilder.group({
            id: [null, []],
            thumb: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            name: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            ingredients: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            price: [null, []],
            restaurants_id: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            category_id: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
        });
        this.categories = this.categoryService.getAll(false);
        if (!this.categories || !this.categories.length) {
            this.categoryService.getCategories().subscribe(function (result) {
                _this.categoryService.getItems(false);
                _this.categories = _this.categoryService.getAll(false);
            });
        }
    };
    ProductComponent.prototype.add = function (content, category) {
        var _this = this;
        this.title = 'Adicionar ' + category.name;
        var values = {
            id: null,
            thumb: null,
            name: null,
            ingredients: null,
            price: '0.00',
            restaurants_id: this.restaurantService.getRestaurantId(),
            category_id: category.id
        };
        this.populate(values);
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.itemService.register(_this.formulario.value).subscribe(function (result) {
                    if (result.status) {
                        _this.categoryService.addItem(result.data);
                        _this.categories = _this.categoryService.getAll(false);
                        _this.toastr.success(result.message, '');
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
        }, function (reason) {
        });
    };
    ProductComponent.prototype.editItem = function (content, category, item) {
        var _this = this;
        this.title = 'Editar ' + category.name;
        var values = {
            id: item.id,
            thumb: item.thumb,
            name: item.name,
            ingredients: item.ingredients,
            price: item.price,
            restaurants_id: this.restaurantService.getRestaurantId(),
            category_id: category.id
        };
        this.populate(values);
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.itemService.edit(_this.formulario.value).subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.categoryService.getAll(false);
                        _this.toastr.success(result.message, '');
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
        }, function (reason) {
        });
    };
    ProductComponent.prototype.addRequired = function (contentAdditional, item, categoryId) {
        var _this = this;
        this.options = "1";
        this.item_id = item.id;
        this.category_id = categoryId;
        this.additional = JSON.stringify(item.options.required);
        this.modalService.open(contentAdditional).result.then(function (result) {
            if (result === 'yes') {
                _this.categories = _this.categoryService.getAll(true);
            }
        }, function (reason) {
        });
    };
    ProductComponent.prototype.addOptional = function (contentAdditional, item, categoryId) {
        var _this = this;
        this.additional = JSON.stringify(item.options.optional);
        this.options = "0";
        this.item_id = item.id;
        this.category_id = categoryId;
        this.modalService.open(contentAdditional).result.then(function (result) {
            if (result === 'yes') {
                _this.categories = _this.categoryService.getAll(true);
            }
        }, function (reason) {
        });
    };
    ProductComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    ProductComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    ProductComponent.prototype.readThis = function (inputValue) {
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
                _this.formulario.controls['thumb'].setValue(result.url);
            });
        };
        myReader.readAsDataURL(file);
    };
    ProductComponent.prototype.populate = function (value) {
        this.formulario.setValue({
            id: value.id,
            thumb: value.thumb,
            name: value.name,
            ingredients: value.ingredients,
            price: value.price,
            restaurants_id: value.restaurants_id,
            category_id: value.category_id
        });
    };
    ProductComponent.prototype.removeItem = function (content, item) {
        var _this = this;
        this.itemSelected = item;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.itemService.remove(item.id)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.toastr.success(result.message, '');
                        _this.categories = _this.categoryService.getAll(true);
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
        }, function (reason) {
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/layout/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/product/product.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_item_service__["a" /* ItemService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */]) === "function" && _g || Object])
], ProductComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_component__ = __webpack_require__("../../../../../src/app/layout/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_routing_module__ = __webpack_require__("../../../../../src/app/layout/product/product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__product_routing_module__["a" /* ProductRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__product_component__["a" /* ProductComponent */]]
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map