webpackJsonp([7],{

/***/ "../../../../../src/app/layout/orders/orders-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/layout/orders/orders.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */] }
];
var OrdersRoutingModule = (function () {
    function OrdersRoutingModule() {
    }
    return OrdersRoutingModule;
}());
OrdersRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OrdersRoutingModule);

//# sourceMappingURL=orders-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Pedidos'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n\n\n<div class=\"row\">\n  <label for=\"inputTime\" class=\"col-12\">\n    ESTIMATIVA DE ENTREGA DO PEDIDO: \n  </label>\n  <div class=\"col-2\">\n    <input id=\"inputTime\" [(ngModel)]=\"delivery_min\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"10 MIN\" >\n  </div>\n  <div class=\"col-2\">\n    <input id=\"inputTime\" [(ngModel)]=\"delivery_max\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"2 HORAS\" >\n  </div>\n  <div class=\"col-2\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"editDeliveryTime()\">Atualizar</button>\n  </div>\n</div>\n<br/>\n\n<div class=\"row\">\n  <label for=\"inputTime\" class=\"col-12\">\n    PREÇO DO FRETE: \n  </label>\n  <div class=\"col-2\">\n    <input id=\"inputTime\" [(ngModel)]=\"frete\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"10.99\" >\n  </div>\n  <div class=\"col-2\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"priceFrete()\">Atualizar</button>\n  </div>\n</div>\n\n<br/>\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['pendente'], 'btn-primary': status['pendente']}\" (click)=\"changeStatus('pendente')\">PENDENTE</button>\n<!-- <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-outline-warning': !status['naFila'], 'btn-primary': status['naFila']}\" (click)=\"changeStatus('naFila')\">NA FILA</button> -->\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['emPreparo'], 'btn-primary': status['emPreparo']}\" (click)=\"changeStatus('emPreparo')\">EM PREPARO</button>\n<!-- <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-outline-warning': !status['pronto'], 'btn-primary': status['pronto']}\" (click)=\"changeStatus('pronto')\">PRONTO</button> -->\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['saiuEntrega'\t], 'btn-primary': status['saiuEntrega']}\" (click)=\"changeStatus('saiuEntrega')\">SAIU PARA ENTREGA</button>\n\n\n<br/><br/>\n<table class=\"table table-responsive table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>{{ 'client' | translate }}</th>\n      <th>{{ 'orders' | translate }}</th>\n      <th>{{ 'status' | translate }}</th>\n      <th>{{ 'deliver' | translate }}</th>\n      <th>Horario</th>\n      <th>{{ 'orders.detail' | translate }}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders\">\n      <th (click)=\"details(modalDetails, order)\">{{order.orders.user.first_name}} {{order.orders.user.last_name}}</th>\n      <td (click)=\"details(modalDetails, order)\">{{formatItem(order.orders.items)}}</td>\n      <td (click)=\"changeOrderStatus(modalChangeOrderStatus, order)\" >{{getStatusById(order.status)}}</td>\n      <td>{{order.flag_delivery ? 'SIM' : 'NÂO'}}</td>\n      <td>{{order.createdAt | date:\"hh:mm a\"}}</td>\n      <td (click)=\"details(modalDetails, order)\"> + detalhes</td>\n    </tr>\n  </tbody>\n</table>\n\n<ng-template #modalChangeOrderStatus let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'orders.detail' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" >\n      <div class=\"list-group\">\n        <div class=\"mouse-hover\" *ngFor=\"let name of statusName; let i = index\">\n        <a class=\"list-group-item\" [ngClass]=\"{'color-selected': modalButtonSelected === i}\" *ngIf=\"!!name\" style=\"margin-bottom: 15px;\" (click)=\"setStatus(i)\" >\n          {{name}}\n        </a>\n        </div>\n      </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'cancel' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('yes')\">{{ 'change.status' | translate }}</button>\n  </div>\n</ng-template>\n\n<ng-template #modalDetails let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'orders.detail' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    \n      <div class=\"card text-center\">\n        <div class=\"card-block\">\n          {{ 'name' | translate }}: {{orderSelected.orders.user.first_name}} {{orderSelected.orders.user.last_name}} <br/>\n          {{ 'email' | translate }}: {{orderSelected.orders.user.email}}<br/>\n          {{ 'phone' | translate }}: {{orderSelected.orders.user.phone}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'orders' | translate }}</h5>\n        </div>\n      </div>\n      <br/>\n      <div *ngFor=\"let item of orderSelected.orders.items\">\n        <div class=\"media\" >\n          <div class=\"media-left\">\n            <img class=\"media-object\" src=\"{{item.thumb}}\" width=\"64\" height=\"64\">\n          </div>\n          <div class=\"media-body\" style=\"margin-left: 10px;\">\n            <h5 class=\"media-heading\">{{item.name}}</h5>\n            <div *ngIf=\"item.options && item.options.required && item.options.required.name\" style=\"color:coral\">\n              {{item.options.required.name}} - R$ {{item.options.required.price}}\n            </div>\n             {{item.ingredients}}\n            <div *ngIf=\"item.options && item.options.optional && item.options.optional.length\" style=\"color: darkgreen\">\n              <div *ngFor=\"let optional of item.options.optional\">\n                {{optional.name}} - R$ {{optional.price}}\n              </div>\n            </div>\n            <div *ngIf=\"item.description\" style=\"color: #ff0000;\">\n                Importante: {{item.description}}\n            </div>\n            <h6 class=\"media-heading\" style=\"color: #449d44; float: right;\" >Total: R$ {{item.total | number:'1.2'}}</h6>\n          </div>\n        </div>\n        <hr/>\n      </div>\n\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'deliver' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div *ngIf=\"orderSelected.flag_delivery > 0\">\n            {{ 'address' | translate }}: {{orderSelected.orders.address.street}} Nº: {{orderSelected.orders.address.number}}<br/>\n            {{ 'complement' | translate }}: {{orderSelected.orders.address.complement}}<br/>\n            {{ 'neighborhood' | translate }}: {{orderSelected.orders.address.neighborhood}} <br/>\n            {{ 'cep' | translate }}: {{orderSelected.orders.address.cep}}\n          </div>\n          <div *ngIf=\"orderSelected.flag_delivery < 1\">Cliente vai buscar</div>\n        </div>\n      </div>\n      <br *ngIf=\"orderSelected.flag_delivery > 0\"/>\n      <div class=\"card\" *ngIf=\"orderSelected.flag_delivery > 0\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'frete' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div>{{getFrete(orderSelected)}}</div>\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'form.payment' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.orders.payment.name}}  {{orderSelected.orders.payment.card}}\n        </div>\n      </div>\n      <br *ngIf=\"orderSelected.discount && orderSelected.discount > 1\"/>\n      <div class=\"card\" *ngIf=\"orderSelected.discount && orderSelected.discount > 0\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'discount' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.discount}}%\n        </div>\n      </div>\n      <br/>\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h4 class=\"media-heading\" style=\"color: #449d44;\" >Total: R$ {{getTotal(orderSelected) | number:'1.2'}}</h4>\n        </div>\n      </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mouse-hover {\n  cursor: pointer; }\n\n.list-group a:hover {\n  background-color: #31b0d5; }\n\n.color-selected {\n  background-color: #31b0d5; }\n\n.margin-btn {\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_orders_service__ = __webpack_require__("../../../../../src/app/shared/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = (function () {
    function OrdersComponent(ordersService, restaurantService, toastr, modalService) {
        var _this = this;
        this.ordersService = ordersService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.status = {
            pendente: true, emPreparo: false, saiuEntrega: false
        };
        this.indexStatus = ['', 'pendente', 'emPreparo', 'saiuEntrega', 'entregue', 'cancelado'];
        this.statusName = ['', 'PENDENTE', 'EM PREPARO', 'SAIU PARA ENTREGA', 'ENTREGUE', 'CANCELADO'];
        this.orderSelected = {};
        this.bkpOrders = this.ordersService.getAll();
        if (!this.bkpOrders || !this.bkpOrders.length) {
            this.ordersService.populate().subscribe(function (result) {
                _this.bkpOrders = result.data;
                _this.selectOrders('pendente');
                var restaurant = _this.restaurantService.getAll();
                _this.delivery_min = restaurant.delivery_min;
                _this.delivery_max = restaurant.delivery_max;
                _this.frete = restaurant.frete;
            });
        }
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ordersService.findByStatus("1").subscribe(function (result) {
                var orders = result.data;
                for (var i = 0; i < orders.length; i++) {
                    if (!_this.ordersService.contains(orders[i])) {
                        _this.ordersService.addOrder(orders[i]);
                        _this.orders.push(orders[i]);
                        _this.bkpOrders.push(orders[i]);
                    }
                }
            });
        }, 120000);
    };
    OrdersComponent.prototype.changeStatus = function (status) {
        this.bkpOrders = this.ordersService.getAll();
        if (!this.status[status]) {
            this.status[status] = !this.status[status];
            for (var key in this.status) {
                if (status !== key) {
                    this.status[key] = false;
                }
            }
        }
        this.selectOrders(status);
    };
    OrdersComponent.prototype.selectOrders = function (status) {
        var position = 0;
        for (var key in this.status) {
            position++;
            if (status === key) {
                break;
            }
        }
        this.orders = [];
        for (var i = 0; i < this.bkpOrders.length; i++) {
            if (parseInt(this.bkpOrders[i].status) === position) {
                this.orders.push(this.bkpOrders[i]);
            }
        }
    };
    OrdersComponent.prototype.formatItem = function (items) {
        if (items.length > 1) {
            return items.length + " pedidos";
        }
        else {
            return items[0].name;
        }
    };
    OrdersComponent.prototype.getStatusById = function (position) {
        return this.statusName[position];
    };
    OrdersComponent.prototype.changeOrderStatus = function (content, order) {
        var _this = this;
        this.orderSelected = order;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                var json = {
                    pushUserId: _this.orderSelected.push_user_id,
                    status: _this.statusSelected.status,
                    statusName: _this.getStatusById(_this.statusSelected.status),
                    thumb: _this.orderSelected.orders.restaurant.img,
                    restaurantName: _this.orderSelected.orders.restaurant.name,
                    id: _this.orderSelected.id
                };
                _this.ordersService.editStatus(json).subscribe(function (result) {
                    _this.changeStatus(_this.indexStatus[_this.statusSelected.status]);
                });
            }
        }, function (reason) {
        });
    };
    OrdersComponent.prototype.details = function (content, order) {
        var options = {
            size: 'lg'
        };
        this.orderSelected = order;
        this.modalService.open(content, options).result.then(function (result) {
            if (result === 'yes') {
            }
        }, function (reason) {
        });
    };
    OrdersComponent.prototype.editDeliveryTime = function () {
        var _this = this;
        var json = {
            delivery_min: this.delivery_min,
            delivery_max: this.delivery_max
        };
        this.restaurantService.editDeliveryTime(json).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
            }
            else {
                _this.toastr.warning('', result.message);
            }
        });
    };
    OrdersComponent.prototype.setStatus = function (status) {
        this.modalButtonSelected = status;
        this.statusSelected = {
            id: this.orderSelected.id,
            status: status
        };
    };
    OrdersComponent.prototype.priceFrete = function () {
        var _this = this;
        var json = {
            frete: this.frete
        };
        this.restaurantService.editPriceFrete(json).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
            }
            else {
                _this.toastr.warning('', result.message);
            }
        });
    };
    OrdersComponent.prototype.getFrete = function (orderSelected) {
        if (!parseFloat(orderSelected.orders.restaurant.frete)) {
            return 'Gratís';
        }
        else {
            return 'R$' + orderSelected.orders.restaurant.frete;
        }
    };
    OrdersComponent.prototype.getTotal = function (orderSelected) {
        if (orderSelected.flag_delivery > 0) {
            if (!parseFloat(orderSelected.orders.restaurant.frete)) {
                return parseFloat(orderSelected.total);
            }
            else {
                return parseFloat(orderSelected.total) + parseFloat(orderSelected.orders.restaurant.frete);
            }
        }
        return orderSelected.total;
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/layout/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/orders/orders.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_orders_service__["a" /* OrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object])
], OrdersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/layout/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_routing_module__ = __webpack_require__("../../../../../src/app/layout/orders/orders-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__orders_routing_module__["a" /* OrdersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */]]
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map