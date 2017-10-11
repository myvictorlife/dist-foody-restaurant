webpackJsonp([13],{

/***/ "../../../../../src/app/layout/category/category-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */] }
];
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    return CategoryRoutingModule;
}());
CategoryRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CategoryRoutingModule);

//# sourceMappingURL=category-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Categorias'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n    \n<form [formGroup]=\"updateForm\">\n\t<div class=\"row\" formArrayName=\"allCategories\">\n\t    \n\t    <div class=\"col col-xl-6 col-lg-6\">\n\t    \t<div class=\"card mb-3\">\n\t            <div class=\"card-header\">\n\t                Lista de Categorias\n\t                <button style=\"float: right;\" type=\"submit\" class=\"btn btn-primary\" (click)=\"update()\" >{{ 'update' | translate }}</button>\n\t            </div>\n\t            <div class=\"card-block table-responsive\">\n\t                <table class=\"table table-hover\">\n\t                    <thead>\n\t                    <tr>\n\t                        <th>#</th>\n\t                        <th>Categoria</th>\n\t                    </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr *ngFor=\"let cat of categories; let i = index\">\n\t                        \t<td formGroupName=\"{{i}}\">\n\t                        \t\t<input type=\"checkbox\" formControlName=\"{{cat.id}}\" />\n\t                            </td>\n\t                            <td>{{cat.name}}</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t    \t</div>\n\t    </div>\n\t    <div class=\"col col-xl-2 col-lg-2\">\n\t    \t<!-- <pre>{{updateForm.value | json}}</pre> -->\n\t    </div>\n\t</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = (function () {
    function CategoryComponent(categoryService, restaurantService, toastr, formBuilder) {
        var _this = this;
        this.categoryService = categoryService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.restaurant = this.restaurantService.getAll();
        // Caso não esteja populado os dados do restaurante busca no banco de dados
        if (!this.restaurant || !this.restaurant.id) {
            this.restaurantService.populate().subscribe(function (result) {
                _this.restaurant = result.data;
                _this.categoryService.getOnlyCategory().subscribe(function (result) {
                    _this.categories = result.data;
                    _this.initForm(_this.restaurant);
                });
            });
        }
        else {
            // Busca todas as categorias cadastradas pelo administrador
            this.categoryService.getOnlyCategory().subscribe(function (result) {
                _this.categories = result.data;
                _this.initForm(_this.restaurant);
            });
        }
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.updateForm = this.formBuilder.group({
            'allCategories': []
        });
    };
    CategoryComponent.prototype.initForm = function (restaurant) {
        var allCategories = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormArray */]([]);
        for (var i = 0; i < this.categories.length; i++) {
            var fg = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({});
            var status = this.getRestaurantCategories(this.categories[i].id, restaurant);
            fg.addControl(this.categories[i].id, new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](status));
            allCategories.push(fg);
        }
        this.updateForm = this.formBuilder.group({
            'allCategories': allCategories
        });
    };
    CategoryComponent.prototype.getRestaurantCategories = function (id, restaurant) {
        var restaurantCategories = JSON.parse(restaurant.category_ids);
        for (var k in restaurantCategories) {
            var cat = restaurantCategories[k];
            if (cat === id) {
                return true;
            }
        }
        return false;
    };
    CategoryComponent.prototype.update = function () {
        var _this = this;
        var allCategories = this.updateForm.value.allCategories;
        var categories = [];
        for (var i = 0; i < allCategories.length; i++) {
            var cat = allCategories[i];
            var value = this.categories[i].id;
            if (cat[value]) {
                categories.push(value);
            }
        }
        var json = {
            id: this.restaurant.id,
            category_ids: categories
        };
        this.categoryService.updateCategories(json).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
                //Seta a categorias selecionada pelo usuário
                _this.restaurantService.setCategories(JSON.stringify(categories));
                //Busca novamente as categorias do restaurante
                _this.categoryService.initCategories();
            }
            else {
                _this.toastr.warning(result.message, '');
            }
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/layout/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/category/category.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _d || Object])
], CategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_routing_module__ = __webpack_require__("../../../../../src/app/layout/category/category-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__category_routing_module__["a" /* CategoryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */]]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ })

});
//# sourceMappingURL=13.chunk.js.map