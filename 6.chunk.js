webpackJsonp([6],{

/***/ "../../../../../src/app/layout/payment/payment-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_component__ = __webpack_require__("../../../../../src/app/layout/payment/payment.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__payment_component__["a" /* PaymentComponent */] }
];
var PaymentRoutingModule = (function () {
    function PaymentRoutingModule() {
    }
    return PaymentRoutingModule;
}());
PaymentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PaymentRoutingModule);

//# sourceMappingURL=payment-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Formas de Pagamento'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n<form>\n    <div class=\"row\">\n        \n            <div class=\"card mb-3\">\n                <div class=\"card-block table-responsive\">\n                    <table class=\"table table-hover table-bordered\">\n                        <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Imagem</th>\n                            <th>Tipo</th>\n                            <th>Cartao</th>\n                            <th>Online</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let payment of payments\" (click)=\"changeStatus(payment)\">\n                                <td>\n                                    <input type=\"checkbox\" [checked]=\"payment.status\" >\n                                </td>\n                                <td><img src=\"{{ payment.img }}\" alt=\"\" width=\"70\" height=\"50\"></td>\n                                <td>{{payment.name}}</td>\n                                <td>{{payment.card}}</td>\n                                <td>{{payment.online == 0 ? 'SIM' : 'NÂO'}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        \n    </div>\n</form>\n\n<button *ngIf=\"payments && payments.length\" type=\"submit\" class=\"btn btn-primary\" (click)=\"updatePayment()\" >{{ 'save' | translate }}</button>\n\n\n<!-- <pre>{{updateDetailsForm.value | json}}</pre> -->"

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_payment_service__ = __webpack_require__("../../../../../src/app/shared/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentComponent = (function () {
    function PaymentComponent(paymentService, restaurantService, toastr) {
        var _this = this;
        this.paymentService = paymentService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.restaurant = {};
        this.payments = [];
        this.restaurantPayments = [];
        this.restaurantService.populate().subscribe(function (result) {
            _this.restaurant = result.data;
            _this.restaurantPayments = _this.restaurant.Payments;
            _this.paymentService.populate().subscribe(function (result) {
                _this.payments = result.data;
                _this.paymentSelectByRestaurant(_this.restaurantPayments);
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    // Seta no array as formas e pagamento que já estam selecionados pelo restaurante
    PaymentComponent.prototype.paymentSelectByRestaurant = function (restaurantPayments) {
        for (var i = 0; i < this.payments.length; i++) {
            for (var j = 0; j < restaurantPayments.length; j++) {
                if (this.payments[i].id === restaurantPayments[j].id) {
                    this.payments[i].status = true;
                    break;
                }
                else {
                    this.payments[i].status = false;
                }
            }
        }
    };
    PaymentComponent.prototype.changeStatus = function (payment) {
        payment.status = !payment.status;
    };
    // Autaliza os tipos de pagamento que o restaurante aceita
    PaymentComponent.prototype.updatePayment = function () {
        var _this = this;
        var json = {
            id: this.restaurant.id,
            addPayment: this.addPayment(),
            rmPayment: this.rmPayment()
        };
        this.paymentService.updatePayment(json).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
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
    PaymentComponent.prototype.addPayment = function () {
        var _this = this;
        var addPayment = [];
        for (var i = 0; i < this.payments.length; i++) {
            var position = this.restaurantPayments.findIndex(function (item) { return item.id === _this.payments[i].id; });
            if (position > -1 && status && !this.payments[position].status) {
                addPayment.push(this.payments[position].id);
            }
            else {
                if (this.payments[i].status && position === -1) {
                    addPayment.push(this.payments[i].id);
                }
            }
        }
        return addPayment;
    };
    PaymentComponent.prototype.rmPayment = function () {
        var _this = this;
        var rmPayment = [];
        for (var i = 0; i < this.payments.length; i++) {
            var position = this.restaurantPayments.findIndex(function (item) { return item.id === _this.payments[i].id; });
            if (position > -1 && !this.payments[position].status) {
                rmPayment.push(this.payments[position].id);
            }
        }
        return rmPayment;
    };
    PaymentComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/layout/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/payment/payment.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], PaymentComponent);

var _a, _b, _c;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_component__ = __webpack_require__("../../../../../src/app/layout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_routing_module__ = __webpack_require__("../../../../../src/app/layout/payment/payment-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PaymentModule = (function () {
    function PaymentModule() {
    }
    return PaymentModule;
}());
PaymentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__payment_routing_module__["a" /* PaymentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__payment_component__["a" /* PaymentComponent */]]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map