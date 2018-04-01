webpackJsonp([6],{

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductRoutingModule);

//# sourceMappingURL=product-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Cardapio'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>  \n  <!--list of cuisines-->\n  <div *ngFor=\"let cat of cuisines\" (click)=\"showItems(cat); $event.stopPropagation();\">\n\n    <ol class=\"breadcrumb\">\n\t  <li class=\"breadcrumb-item category\">{{ cat.name }}</li>\n    \n    <i class=\"fa fa-arrow-circle-right\" style=\"float: right; margin-top: 5px; font-size: 20px;\" aria-hidden=\"true\" *ngIf=\"!cat.showItems\" ></i>\n    <i class=\"fa fa-arrow-circle-down\" style=\"float: right; margin-top: 5px; font-size: 20px;\" aria-hidden=\"true\" *ngIf=\"cat.showItems\" ></i>\n    \n    <span class=\"amount-products\" >{{cat.Items.length}} <i class=\"fa fa-product-hunt\"></i></span>\n\t</ol>\t\n\t\n\t<div class=\"table-responsive\" *ngIf=\"cat.showItems\">\n    <table class=\"table \" *ngIf=\"cat.Items && cat.Items.length\">\n\t  <thead>\n\t    <tr>\n        <th>{{ 'sort' | translate }}</th>\n\t      <th>{{ 'img' | translate }}</th>\n\t      <th>{{ 'product' | translate }}</th>\n\t      <th>{{ 'ingredients' | translate }}</th>\n\t      <th>{{ 'price' | translate }}</th>\n        <th>{{ 'required' | translate }}</th>\n        <th>{{ 'additional' | translate }}</th>\n        <th>{{ 'remove' | translate }}</th>\n        <th>{{ 'duplicate' | translate }}</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody>\n\t    <tr *ngFor=\"let item of cat.Items\">\n\t      <td (click)=\"$event.stopPropagation();\">{{item.order_by}}</td>\n        <td *ngIf=\"item.thumb\" (click)=\"editItem(content, cat, item); $event.stopPropagation();\"><img src=\"{{ item.thumb }}\" alt=\"\" width=\"40\" height=\"30\"></td>\n        <td *ngIf=\"!item.thumb\" (click)=\"editItem(content, cat, item); $event.stopPropagation();\"><img src=\"assets/images/300x250.png\" alt=\"\" width=\"40\" height=\"30\"></td>\n\t      <td (click)=\"editItem(content, cat, item); $event.stopPropagation();\">{{ item.name }}</td>\n\t      <td (click)=\"editItem(content, cat, item); $event.stopPropagation();\">{{ item.ingredients }}</td>\n\t      <td (click)=\"editItem(content, cat, item); $event.stopPropagation();\">R$ {{ item.price }}</td>\n        <td (click)=\"addRequired(contentAdditional, item, cat.id); $event.stopPropagation();\" ><button type=\"button\" class=\"btn btn-outline-primary\">{{ 'required' | translate }}</button></td>\n        <td (click)=\"addOptional(contentAdditional, item, cat.id); $event.stopPropagation();\"><button type=\"button\" class=\"btn btn-outline-primary\">{{ 'additional' | translate }}</button></td>\n        <td (click)=\"removeItem(contentRemove, item, cat.id); $event.stopPropagation();\"><button type=\"button\" class=\"btn btn-outline-danger\">{{ 'remove' | translate }}</button></td>\n        <td (click)=\"duplicateItem(item); $event.stopPropagation();\"><button type=\"button\" class=\"btn btn-outline-success\">{{ 'duplicate' | translate }}</button></td>\n\t    </tr>\n\t  </tbody>\n\t</table>\n\t</div>\n\t<button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block margin-button\" (click)=\"add(content, cat); $event.stopPropagation();\" *ngIf=\"cat.showItems\">\n\t\tAdicionar  {{cat.name}}\n\t</button>\n  </div>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n  \t<form class=\"form-horizontal\" [formGroup]=\"formulario\">\n\n  \t\t\t<div class=\"row\">\n  \t\t\t\t<div class=\"col-lg-3\">\n  \t\t\t\t</div>\n\t\t    \t<div class=\"col-lg-5\">\n\t\t    \t\t<!-- <img src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"350\" height=\"200\" > -->\n\t\t            <img *ngIf=\"!formulario.get('thumb').value\" src=\"assets/images/300x250.png  \" class=\"rounded float-left\" width=\"200\" height=\"150\" >\n\t\t            <img *ngIf=\"formulario.get('thumb').value\" [src]=\"formulario.get('thumb').value\" class=\"rounded float-left\" width=\"150\" height=\"150\" >\n                <div style=\"cursor: pointer;\" *ngIf=\"formulario.get('thumb').value\" (click)=\"removeImg()\">Remover imagem</div>\n\n\t\t    \t\t<label class=\"custom-file size-input-file\" >\n\t\t\t\t\t  <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'imgFile')\"  >\n\t\t\t\t\t  <span class=\"custom-file-control\"></span>\n\t\t\t\t\t</label>\n\t\t    \t</div> \n\t\t    </div>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'name' | translate }}</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"name\"\n                    id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('name')\"\n                  msgErro=\"{{ 'name.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'ingredients' | translate }}</label>\n                <textarea type=\"text\" class=\"form-control\"\n                                formControlName=\"ingredients\"\n                                id=\"about_us\" placeholder=\"{{ 'ingredients' | translate }}\" rows=\"3\" ></textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'price' | translate }}</label>\n                <input type=\"price\" class=\"form-control\"\n                    formControlName=\"price\"\n                    id=\"l\" placeholder=\"{{ 'price' | translate }}\" >\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'amount' | translate }}</label>\n                <input type=\"price\" class=\"form-control\"\n                    formControlName=\"amount\"\n                    id=\"l\" placeholder=\"0\" >\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'sort' | translate }}</label>\n                <input type=\"number\" class=\"form-control\"\n                    formControlName=\"order_by\"\n                    id=\"l\" placeholder=\"0\" >\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'max_per_item' | translate }}</label>\n                <br/>\n                <label>\n                    <input type=\"checkbox\" id=\"checkbox-1\" [checked]=\"maxPerItem\" (change)=\"changeMaxPerItem()\" /> {{ 'with_limits' | translate}}\n                </label>\n\n                <input type=\"number\" class=\"form-control\"\n                    formControlName=\"max_per_item\"\n                    id=\"l\" placeholder=\"0\" *ngIf=\"maxPerItem\" >\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n                <label>{{ 'day_of_week' | translate }}</label>\n\n                <div class=\"card-block table-responsive\">\n                    <table class=\"table table-hover table-bordered\">\n                        <tr *ngFor=\"let day of dayOfWeek\" (click)=\"changeStatus(day)\">\n                            <td>\n                                <input type=\"checkbox\" [checked]=\"day.checked\" > \n                                {{day.name | translate }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </fieldset>\n\n            <fieldset class=\"form-group text-center\">\n                <label>Ativar*</label>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" formControlName=\"disponible\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                    </label> &nbsp;&nbsp;&nbsp;\n                    <label>\n                        <input type=\"radio\" formControlName=\"disponible\" id=\"optionsRadios2\" value=\"0\"> Não\n                    </label>\n                </div>\n            </fieldset>\n        \n    </form>\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('no')\">{{ 'cancel' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('yes')\">{{ 'save' | translate }}</button>\n  </div>\n</ng-template>\n\n\n <ng-template #contentAdditional let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'additional' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <app-additional\n      required={{required}}\n      cuisines_id={{cuisines_id}}\n      item_id={{item_id}}\n      >\n    </app-additional>\n    \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('yes')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>\n\n\n<ng-template #contentRemove let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'product.remove' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{itemSelected.name}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'no' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'yes' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category {\n  font-size: 20px; }\n\n.margin-button {\n  margin-bottom: 20px; }\n\n.amount-products {\n  float: right;\n  margin-right: 25px;\n  margin-top: 2px;\n  font-size: 17px; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_cuisines_service__ = __webpack_require__("../../../../../src/app/shared/services/cuisines.service.ts");
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
    function ProductComponent(formBuilder, toastr, modalService, uploadService, restaurantService, itemService, cuisinesService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.restaurantService = restaurantService;
        this.itemService = itemService;
        this.cuisinesService = cuisinesService;
        this.title = '';
        this.dayOfWeek = [
            { name: 'all_day', checked: false },
            { name: 'monday', checked: false },
            { name: 'tuesday', checked: false },
            { name: 'wednesday', checked: false },
            { name: 'thursday', checked: false },
            { name: 'friday', checked: false },
            { name: 'saturday', checked: false },
            { name: 'sunday', checked: false }
        ];
        this.cuisines = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxPerItem = false;
        this.formulario = this.formBuilder.group({
            id: [null, []],
            thumb: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            name: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            ingredients: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            price: [null, []],
            restaurants_id: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            cuisines_id: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            amount: [null],
            order_by: [null],
            max_per_item: [null],
            disponible: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]]
        });
        this.cuisines = this.cuisinesService.getAllWithItems();
        if (!this.cuisines.length) {
            var restaurant_1 = this.restaurantService.getAll();
            // Caso não esteja populado os dados do restaurante busca no banco de dados
            if (!restaurant_1 || !restaurant_1.id) {
                this.restaurantService.populate().subscribe(function (result) {
                    restaurant_1 = result.data;
                    _this.restaurantId = restaurant_1.id;
                    _this.findCuisinesWithItems();
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
            else {
                this.restaurantId = restaurant_1.id;
                this.findCuisinesWithItems();
            }
        }
    };
    ProductComponent.prototype.findCuisinesWithItems = function () {
        var _this = this;
        this.cuisinesService.getCuisinesWithItems(this.restaurantId).subscribe(function (result) {
            for (var i = 0; i < _this.cuisines.length; i++) {
                if (result.data[i].id === _this.cuisines[i].id) {
                    result.data[i].showItems = _this.cuisines[i].showItems;
                }
            }
            _this.cuisines = result.data;
        });
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
            cuisines_id: category.id,
            amount: 0,
            max_per_item: 0,
            order_by: 0,
            disponible: "1"
        };
        this.populate(values);
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.itemService.register(_this.formulario.value).subscribe(function (result) {
                    if (result.status) {
                        _this.findCuisinesWithItems();
                        _this.toastr.success(result.message, '');
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
            cuisines_id: category.id,
            amount: item.amount,
            max_per_item: item.max_per_item,
            order_by: !!item.order_by ? item.order_by : 0,
            disponible: item.disponible == 1 ? "1" : "0",
            valid_days: item.valid_days
        };
        this.maxPerItem = values.max_per_item ? true : false;
        this.populate(values);
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                var price = _this.formulario.get('price').value;
                var max_per_item = !_this.maxPerItem ? null : _this.formulario.get('max_per_item').value;
                _this.formulario.controls['max_per_item'].setValue(max_per_item);
                _this.formulario.controls['price'].setValue(price.replace(',', '.'));
                var array = [];
                for (var i = 0; i < _this.dayOfWeek.length; i++) {
                    if (_this.dayOfWeek[i].checked) {
                        array.push(_this.dayOfWeek[i].name);
                    }
                }
                var json = _this.formulario.value;
                json.valid_days = array.length > 0 ? JSON.stringify(array) : null;
                _this.itemService.edit(_this.formulario.value).subscribe(function (result) {
                    if (result.status) {
                        _this.findCuisinesWithItems();
                        _this.toastr.success(result.message, '');
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
    ProductComponent.prototype.addRequired = function (contentAdditional, cuisine, categoryId) {
        var _this = this;
        //Variaveis enviadas como parametros tela de aditional
        this.cuisines_id = cuisine.cuisines_id;
        this.required = 1;
        this.item_id = cuisine.id;
        this.modalService.open(contentAdditional).result.then(function (result) {
            if (result === 'yes') {
                _this.findCuisinesWithItems();
            }
        }, function (reason) { });
    };
    ProductComponent.prototype.showItems = function (product) {
        if (!product.showItems) {
            product.showItems = true;
        }
        else {
            product.showItems = !product.showItems;
        }
        this.cuisinesService.setCuisines(this.cuisines);
    };
    ProductComponent.prototype.addOptional = function (contentAdditional, cuisine, categoryId) {
        var _this = this;
        //Variaveis enviadas como parametros tela de aditional
        this.cuisines_id = cuisine.cuisines_id;
        this.required = 0;
        this.item_id = cuisine.id;
        this.modalService.open(contentAdditional).result.then(function (result) {
            if (result === 'yes') {
                _this.findCuisinesWithItems();
            }
        }, function (reason) {
        });
    };
    ProductComponent.prototype.removeImg = function () {
        this.formulario.controls['thumb'].setValue(null);
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
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        };
        myReader.readAsDataURL(file);
    };
    ProductComponent.prototype.populate = function (value) {
        var validDays = value.valid_days ? JSON.parse(value.valid_days) : null;
        if (validDays) {
            for (var i = 0; i < validDays.length; i++) {
                for (var j = 0; j < this.dayOfWeek.length; j++) {
                    if (this.dayOfWeek[j].name === validDays[i]) {
                        this.dayOfWeek[j].checked = true;
                        break;
                    }
                }
            }
        }
        else {
            for (var j = 0; j < this.dayOfWeek.length; j++) {
                this.dayOfWeek[j].checked = false;
            }
        }
        this.formulario.setValue({
            id: value.id,
            thumb: value.thumb,
            name: value.name,
            ingredients: value.ingredients,
            price: value.price,
            restaurants_id: value.restaurants_id,
            cuisines_id: value.cuisines_id,
            amount: value.amount,
            max_per_item: value.max_per_item,
            order_by: value.order_by,
            disponible: value.disponible
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
                        _this.findCuisinesWithItems();
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
    ProductComponent.prototype.duplicateItem = function (item) {
        var _this = this;
        var itemDuplicate = Object.assign({}, item);
        itemDuplicate.options = undefined;
        itemDuplicate.additionals = [];
        if (item.options && item.options.optional && item.options.optional.length) {
            for (var i = 0; i < item.options.optional.length; i++) {
                itemDuplicate.additionals.push(item.options.optional[i]);
            }
        }
        if (item.options && item.options.required && item.options.required.length) {
            for (var i = 0; i < item.options.required.length; i++) {
                itemDuplicate.additionals.push(item.options.required[i]);
            }
        }
        this.itemService.duplicate(itemDuplicate)
            .subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
                _this.findCuisinesWithItems();
            }
            else {
                _this.toastr.warning('', result.message);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    ProductComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    ProductComponent.prototype.changeMaxPerItem = function () {
        this.maxPerItem = !this.maxPerItem;
    };
    ProductComponent.prototype.changeStatus = function (day) {
        var status = !day.checked;
        if (day.name === 'all_day') {
            for (var i = 0; i < this.dayOfWeek.length; i++) {
                this.dayOfWeek[i].checked = status;
            }
        }
        day.checked = status;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/layout/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/product/product.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_item_service__["a" /* ItemService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_cuisines_service__["a" /* CuisinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_cuisines_service__["a" /* CuisinesService */]) === "function" && _g || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
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
//# sourceMappingURL=6.chunk.js.map