webpackJsonp([5],{

/***/ "../../../../../src/app/layout/promotion/promotion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_component__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__promotion_component__["a" /* PromotionComponent */] }
];
var PromotionRoutingModule = (function () {
    function PromotionRoutingModule() {
    }
    return PromotionRoutingModule;
}());
PromotionRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PromotionRoutingModule);

//# sourceMappingURL=promotion-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Promoções'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>  \n\n<div class=\"row\" >\n\t<div class=\"col-lg-6\" *ngFor=\"let item of promotions\">\n\t\t<div class=\"card\">\n\t\t\t<div variant=\"transparent\" class=\"open-ribbon\" *ngIf=\"isParticipating(item.id)\"><span>Participando</span></div>\n\t\t  <img class=\"card-img-top\" src=\"{{item.img}}\" >\n\t\t  <br/>\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">Promoção: {{item.name}}</h5>\n\t\t    <p class=\"card-text\">Descrição: {{item.description_restaurant}}</p>\n\t\t    <button type=\"submit\" class=\"btn btn-danger button-no\" *ngIf=\"isParticipating(item.id)\" (click)=\"noAccept(item)\" >{{ 'i.dont.want.more' | translate }}!</button>\n\t\t    <button type=\"submit\" class=\"btn btn-primary button-yes\" *ngIf=\"!isParticipating(item.id)\" (click)=\"accept(item)\" >{{ 'i.want' | translate }}!</button>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-yes {\n  float: right;\n  margin-right: 10px;\n  margin-bottom: 8px; }\n\n.button-no {\n  margin-left: 10px;\n  margin-bottom: 8px; }\n\n/* RIBBON BADGES */\n/* OPEN RESTAURANT */\n.open-ribbon {\n  position: absolute;\n  z-index: 1;\n  overflow: hidden;\n  width: 75px;\n  height: 75px;\n  text-align: right; }\n\n.open-ribbon span {\n  font-size: 10px;\n  font-weight: bold;\n  color: #FFF;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  width: 100px;\n  display: block;\n  background: #79A70A;\n  background: linear-gradient(#62C95A 0%, #228B22 100%);\n  box-shadow: 0 3px 10px -5px black;\n  position: absolute;\n  top: 19px;\n  left: -21px; }\n\n.open-ribbon span::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid #228B22;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #228B22; }\n\n.open-ribbon span::after {\n  content: \"\";\n  position: absolute;\n  right: 0px;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid transparent;\n  border-right: 3px solid #228B22;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #228B22; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_promotion_service__ = __webpack_require__("../../../../../src/app/shared/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionComponent = (function () {
    function PromotionComponent(promotionService, restaurantService, toastr) {
        var _this = this;
        this.promotionService = promotionService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.restaurant = this.restaurantService.getAll();
        // Caso não esteja populado os dados do restaurante busca no banco de dados
        if (!this.restaurant || !this.restaurant.id) {
            this.restaurantService.populate().subscribe(function (result) {
                _this.restaurant = result.data;
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
    }
    PromotionComponent.prototype.ngOnInit = function () {
        this.find();
    };
    /*
     * Busca as promoções cadastradas
     */
    PromotionComponent.prototype.find = function () {
        var _this = this;
        this.promotions = [];
        this.promotionService.populate().subscribe(function (result) {
            _this.promotions = result.data;
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    /*
     * Participar da promoção
     */
    PromotionComponent.prototype.accept = function (promotion) {
        var json = {
            id: this.restaurant.id,
            addPromotion: [promotion.id],
            rmPromotion: []
        };
        this.update(json, "add", promotion);
    };
    /*
     * Sair da promoção
     */
    PromotionComponent.prototype.noAccept = function (promotion) {
        var json = {
            id: this.restaurant.id,
            addPromotion: [],
            rmPromotion: [promotion.id]
        };
        this.update(json, "rm", promotion);
    };
    PromotionComponent.prototype.update = function (json, option, promotion) {
        var _this = this;
        this.promotionService.addOrRmPromotion(json).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
                _this.restaurantService.addOrremovePromotion(promotion, option);
                _this.restaurant = _this.restaurantService.getAll();
            }
            else {
                _this.toastr.warning(result.message, '');
            }
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    /*
     * Sair da promoção
     */
    PromotionComponent.prototype.isParticipating = function (idPromotion) {
        if (!this.restaurant || !this.restaurant.id) {
            return false;
        }
        var promotions = this.restaurant.Promotions;
        for (var i = 0; i < promotions.length; i++) {
            if (promotions[i].id === idPromotion) {
                return true;
            }
        }
        return false;
    };
    /*
     * Sair
     */
    PromotionComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return PromotionComponent;
}());
PromotionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-promotion',
        template: __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/promotion/promotion.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_promotion_service__["a" /* PromotionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], PromotionComponent);

var _a, _b, _c;
//# sourceMappingURL=promotion.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_component__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotion_routing_module__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModule", function() { return PromotionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PromotionModule = (function () {
    function PromotionModule() {
    }
    return PromotionModule;
}());
PromotionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__promotion_routing_module__["a" /* PromotionRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__promotion_component__["a" /* PromotionComponent */]]
    })
], PromotionModule);

//# sourceMappingURL=promotion.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map