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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OrdersRoutingModule);

//# sourceMappingURL=orders-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Pedidos'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n\n<div class=\"row\">\n  \n  <div class=\"col-4\">\n    <td (click)=\"timeDelivery(contentDelivery, item)\"><button type=\"button\" class=\"btn btn-outline-success\">{{ 'timeDelivery' | translate }}</button></td>\n  </div>\n  <div class=\"col-5\">\n    <td (click)=\"priceDeliveryModal(priceDelivery)\"><button type=\"button\" class=\"btn btn-outline-success\">PREÇO DO FRETE</button></td>  \n  </div>\n</div>\n\n\n<br/>\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['pendente'], 'btn-primary': status['pendente']}\" (click)=\"changeStatus('pendente')\">PENDENTE</button>\n<!-- <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-outline-warning': !status['naFila'], 'btn-primary': status['naFila']}\" (click)=\"changeStatus('naFila')\">NA FILA</button> -->\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['emPreparo'], 'btn-primary': status['emPreparo']}\" (click)=\"changeStatus('emPreparo')\">EM PREPARO</button>\n<!-- <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-outline-warning': !status['pronto'], 'btn-primary': status['pronto']}\" (click)=\"changeStatus('pronto')\">PRONTO</button> -->\n<button type=\"button\" class=\"btn margin-btn\" [ngClass]=\"{'btn-outline-warning': !status['saiuEntrega'\t], 'btn-primary': status['saiuEntrega']}\" (click)=\"changeStatus('saiuEntrega')\">SAIU PARA ENTREGA</button>\n\n<button type=\"button\" class=\"btn btn-success\" (click)=\"findByAguardandoAndamento(false)\">Buscar Pedidos</button>\n<br/><br/>\n<table class=\"table table-responsive table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>{{ 'orders.detail' | translate }}</th>\n      <th>{{ 'client' | translate }}</th>\n      <th>{{ 'phone' | translate }}</th>\n      <th>{{ 'status' | translate }}</th>\n      <th>{{ 'deliver' | translate }}</th>\n      <th>Horario</th>\n      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders\" style=\"cursor:pointer\">\n      <td (click)=\"details(modalDetails, order)\"><button type=\"button\" class=\"btn btn-info\"> Abrir pedido</button></td>\n      <th (click)=\"details(modalDetails, order)\">{{order.orders.user.first_name}} {{order.orders.user.last_name}}</th>\n      <td (click)=\"details(modalDetails, order)\">{{order.orders.user.phone}}</td>\n      <td (click)=\"changeOrderStatus(modalChangeOrderStatus, order)\" >{{getStatusById(order.status)}}</td>\n      <td>{{order.flag_delivery ? 'SIM' : 'NÂO'}}</td>\n      <td>{{order.createdAt | date:\"hh:mm a\"}}</td>\n      <td *ngIf=\"order.status === '1'\" style=\"border: 0px\" (click)=\"changeOrderStatus(modalChangeOrderStatus, order, 2, 'EM PREPARO')\" > <button type=\"button\" class=\"btn btn-info\">Em preparo</button></td>\n      <td *ngIf=\"order.status === '1'\" style=\"border: 0px\" (click)=\"changeOrderStatus(modalChangeOrderStatus, order, 5, 'CANCELADO')\" > <button type=\"button\" class=\"btn btn-danger\">Cancelar</button></td>\n\n      <td *ngIf=\"order.status === '2'\" style=\"border: 0px\" (click)=\"changeOrderStatus(modalChangeOrderStatus, order, 3, 'SAIU PARA ENTREGA')\" > <button type=\"button\" class=\"btn btn-info\">Sair para entrega</button></td>\n    </tr>\n  </tbody>\n</table>\n\n<ng-template #modalChangeOrderStatus let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Motivo do Cancelamento</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" >\n      <input id=\"note\" [(ngModel)]=\"orderSelected.note\" name=\"note\" class=\"form-control\" type=\"text\" placeholder=\"Observação\" >\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'cancel' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('yes')\">{{ 'change.status' | translate }}</button>\n  </div>\n</ng-template>\n\n<ng-template #modalDetails let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'orders.detail' | translate }} #{{orderSelected.id}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    \n      <div class=\"card text-center\">\n        <div class=\"card-block\">\n          {{ 'name' | translate }}: {{orderSelected.orders.user.first_name}} {{orderSelected.orders.user.last_name}} <br/>\n          {{ 'email' | translate }}: {{orderSelected.orders.user.email}}<br/>\n          {{ 'phone' | translate }}: {{orderSelected.orders.user.phone}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'orders' | translate }}</h5>\n        </div>\n      </div>\n      <br/>\n      <div *ngFor=\"let item of orderSelected.orders.items\">\n        <div class=\"media\" >\n          <div class=\"media-left\">\n            <img class=\"media-object\" *ngIf=\"item.thumb\" src=\"{{item.thumb}}\" width=\"64\" height=\"64\">\n            <img class=\"media-object\" *ngIf=\"!item.thumb\" src=\"assets/images/empty-cart.png\" width=\"64\" height=\"64\">\n          </div>\n          <div class=\"media-body\" style=\"margin-left: 10px;\">\n            <h5 class=\"media-heading\">{{item.name}} x {{item.quantity}}</h5>\n            <div *ngIf=\"item.options && item.options.required && item.options.required.name\" style=\"color:coral\">\n              {{item.options.required.name}} - R$ {{item.options.required.price}}\n            </div>\n             {{item.ingredients}}\n            <div *ngIf=\"item.options && item.options.optional && item.options.optional.length\" style=\"color: darkgreen\">\n              <div *ngFor=\"let optional of item.options.optional\">\n                {{optional.name}} - R$ {{optional.price}}\n              </div>\n            </div>\n            <div *ngIf=\"item.description\" style=\"color: #ff0000;\">\n                Importante: {{item.description}}\n            </div>\n            <h6 class=\"media-heading\" style=\"color: #449d44; float: right;\" >Total: R$ {{item.total | number:'1.2'}}</h6>\n          </div>\n        </div>\n        <hr/>\n      </div>\n\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'deliver' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div *ngIf=\"orderSelected.flag_delivery > 0\">\n            {{ 'address' | translate }}: {{orderSelected.orders.address.street}} Nº: {{orderSelected.orders.address.number}}<br/>\n            {{ 'complement' | translate }}: {{orderSelected.orders.address.complement}}<br/>\n            {{ 'neighborhood' | translate }}: {{orderSelected.orders.address.neighborhood}} <br/>\n            {{ 'cep' | translate }}: {{orderSelected.orders.address.cep}}\n          </div>\n          <div *ngIf=\"orderSelected.flag_delivery < 1\">Cliente vai buscar</div>\n        </div>\n      </div>\n      <br *ngIf=\"orderSelected.flag_delivery > 0\"/>\n      <div class=\"card\" *ngIf=\"orderSelected.flag_delivery > 0\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'frete' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div>{{getFrete(orderSelected)}}</div>\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'form.payment' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.orders.payment.name}}  {{orderSelected.orders.payment.card}}\n        </div>\n      </div>\n      <div class=\"card\" *ngIf=\"orderSelected.orders.payment.name.toUpperCase() === 'DINHEIRO'\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">Troco</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.orders.money}}\n        </div>\n      </div>\n      \n      <br *ngIf=\"validDiscount(orderSelected)\"/>\n      <div class=\"card\" *ngIf=\"validDiscount(orderSelected)\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'discount' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{getDiscountValue(orderSelected)}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h4 class=\"media-heading\" style=\"color: #449d44;\" >Total: R$ {{getTotal(orderSelected) | number:'1.2'}}</h4>\n        </div>\n      </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-success mr-auto\" (click)=\"print(orderSelected)\">{{ 'print' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('no')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>\n\n\n<ng-template #contentDelivery let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'timeDelivery' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"row\">     \n      <div class=\"col-4\">\n        <input id=\"inputTime\" [(ngModel)]=\"delivery_min\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"10 MIN\" >\n      </div>\n      <div class=\"col-4\">\n        <input id=\"inputTime\" [(ngModel)]=\"delivery_max\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"2 HORAS\" >\n      </div>\n      <div class=\"col-4\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"editDeliveryTime()\">Atualizar Entrega</button>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>\n\n<ng-template #priceDelivery let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">PREÇO DO FRETE</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <label>PREÇO DO FRETE</label>\n        <input id=\"inputTime\" [(ngModel)]=\"frete.frete\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"10.99\" >\n      </div>\n      <div class=\"col-8\">\n        <label>QUANTOS KM COM FRETE NORMAL?</label>\n        <input id=\"inputTime\" [(ngModel)]=\"frete.km_normal\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"Ex: 5KM\" >\n      </div>\n      <div class=\"col-6\">\n        <label>PREÇO POR KM EXTRA</label>\n        <input id=\"inputTime\" [(ngModel)]=\"frete.frete_km\" name=\"inputTime\" class=\"form-control\" type=\"text\" placeholder=\"10.99\" >\n      </div>\n    </div>\n\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"priceFrete()\">Atualizar Frete</button>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/orders/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mouse-hover {\n  cursor: pointer; }\n\n.list-group a:hover {\n  background-color: #31b0d5; }\n\n.color-selected {\n  background-color: #31b0d5; }\n\n.margin-btn {\n  margin: 10px; }\n\n.simple-notification svg {\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  right: 0;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  fill: #fff; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_communicator__ = __webpack_require__("../../../../../src/app/shared/services/communicator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var OrdersComponent = (function () {
    function OrdersComponent(ordersService, restaurantService, toastr, modalService, _pushNotifications) {
        var _this = this;
        this.ordersService = ordersService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.modalService = modalService;
        this._pushNotifications = _pushNotifications;
        this.status = {
            pendente: true,
            emPreparo: false,
            saiuEntrega: false
        };
        this.indexStatus = ['', 'pendente', 'emPreparo', 'saiuEntrega', 'entregue', 'cancelado'];
        this.statusName = ['', 'PENDENTE', 'EM PREPARO', 'SAIU PARA ENTREGA', 'ENTREGUE', 'CANCELADO'];
        this.frete = {};
        this.orderSelected = {};
        this.currentStatus = 'pendente';
        var orders = this.ordersService.getAll();
        if (!orders || !orders.length) {
            this.ordersService.populate().subscribe(function (result) {
                _this.selectOrders(_this.currentStatus);
                _this.updateVariables();
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
        else {
            this.updateVariables();
            this.orders = this.ordersService.getAllByStatus(1);
        }
    }
    OrdersComponent.prototype.updateVariables = function () {
        var restaurant = this.restaurantService.getAll();
        this.delivery_min = restaurant.delivery_min;
        this.delivery_max = restaurant.delivery_max;
        this.frete.frete = restaurant.frete;
        this.frete.km_normal = restaurant.km_normal;
        this.frete.frete_km = restaurant.frete_km;
    };
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // A cada 2 minutos busca na base pedidos com status 'Aguardando Aprovação'
        setInterval(function () {
            _this.findByAguardandoAndamento(true, 1);
        }, 60000);
    };
    // Alarme quando não for clicado
    OrdersComponent.prototype.findByAguardandoAndamento = function (alarme, position) {
        var _this = this;
        //
        var flag = false;
        if (!position) {
            position = this.getPositionStatus(this.currentStatus);
        }
        else {
            flag = true;
        }
        // Remove os elementos que já existem com esse status
        this.ordersService.removeOrdersByStatus(position);
        this.ordersService.findByStatus(position).subscribe(function (result) {
            var orders = result.data;
            if (orders && orders.length) {
                for (var i = 0; i < orders.length; i++) {
                    _this.ordersService.addOrder(orders[i]);
                }
                _this.orders = _this.ordersService.getAllByStatus(position);
                if (flag && position === 1) {
                    _this.changeStatus('pendente');
                }
            }
            else {
                _this.orders = [];
            }
            if (alarme && orders.length) {
                _this.alertAudio();
            }
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    // Muda o Status do Pedido
    OrdersComponent.prototype.changeStatus = function (status) {
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
        this.currentStatus = status;
        var position = this.getPositionStatus(status);
        this.orders = this.ordersService.getAllByStatus(position);
    };
    OrdersComponent.prototype.getPositionStatus = function (status) {
        var position = 0;
        for (var key in this.status) {
            position++;
            if (status === key) {
                break;
            }
        }
        return position;
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
    OrdersComponent.prototype.changeOrderStatus = function (content, order, status, statusName) {
        var _this = this;
        this.orderSelected = order;
        if (status !== 5) {
            this.updateStatus(order, status, statusName);
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                if (result === 'yes') {
                    _this.updateStatus(_this.orderSelected, status, statusName);
                }
            }, function (reason) {
            });
        }
    };
    OrdersComponent.prototype.updateStatus = function (order, status, statusName) {
        var _this = this;
        var json = {
            pushUserId: this.orderSelected.push_user_id,
            status: status,
            statusName: statusName,
            thumb: this.orderSelected.orders.restaurant.img,
            restaurantName: this.orderSelected.orders.restaurant.name,
            id: this.orderSelected.id,
            note: this.orderSelected.note
        };
        this.ordersService.editStatus(json).subscribe(function (result) {
            if (result.status) {
                _this.selectOrders(_this.currentStatus);
                _this.ordersService.populate().subscribe(function (result) {
                    _this.selectOrders(_this.currentStatus);
                    if (_this.currentStatus === 'pendente' && _this.audio && !_this.audio.paused) {
                        _this.audio.pause();
                    }
                    // Precisa dessa funcionalidade a baixo??
                    _this.updateVariables();
                    _this.toastr.success('', 'Pedido: ' + _this.statusName[_this.statusSelected.status]);
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
            else {
                _this.toastr.error('', result.message);
                _this.selectOrders(_this.currentStatus);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
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
                _this.updateVariables();
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
    OrdersComponent.prototype.setStatus = function (status) {
        this.modalButtonSelected = status;
        this.statusSelected = {
            id: this.orderSelected.id,
            status: status
        };
    };
    OrdersComponent.prototype.priceFrete = function () {
        var _this = this;
        this.restaurantService.editPriceFrete(this.frete).subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
                _this.updateVariables();
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
    OrdersComponent.prototype.getFrete = function (orderSelected) {
        if (!parseFloat(orderSelected.frete)) {
            return 'Gratís';
        }
        else {
            return 'R$' + parseFloat(orderSelected.frete).toFixed(2);
        }
    };
    OrdersComponent.prototype.getTotal = function (orderSelected) {
        var total = 0.00;
        if (orderSelected.flag_delivery > 0) {
            if (!parseFloat(orderSelected.frete)) {
                total = parseFloat(orderSelected.total);
            }
            else {
                total = parseFloat(orderSelected.total) + parseFloat(orderSelected.frete);
            }
        }
        else {
            total = parseFloat(orderSelected.total);
        }
        return total.toFixed(2);
    };
    OrdersComponent.prototype.alertAudio = function () {
        this.audio = new Audio();
        this.audio.src = "assets/audio/door-bell.mp3";
        this.audio.load();
        this.audio.play();
        this._pushNotifications.create('Pedidos', {
            body: 'Aguardando Aprovação',
            icon: 'assets/images/alarme.png'
        }).subscribe();
        //if(!this.audio || !this.audio.paused)
        //this.audio.pause();
    };
    OrdersComponent.prototype.timeDelivery = function (content) {
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) {
        });
    };
    OrdersComponent.prototype.priceDeliveryModal = function (content) {
        this.modalService.open(content).result.then(function (result) {
        }, function (reason) {
        });
    };
    /**
     * Print method
     */
    OrdersComponent.prototype.print = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var string, communicator, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        string = this.removerAcentos(JSON.stringify(order));
                        order = JSON.parse(string);
                        console.log(order);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        communicator = new __WEBPACK_IMPORTED_MODULE_5__shared_services_communicator__["a" /* Communicator */]();
                        return [4 /*yield*/, communicator.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, communicator.sendPrintMessage(order)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, communicator.close()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        //console.log(err);
                        this.toastr.warning('', 'Verifique se a impressora esta conectada.');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrdersComponent.prototype.removerAcentos = function (stringComAcento) {
        var string = stringComAcento;
        var mapaAcentosHex = {
            a: /[\xE0-\xE6]/g,
            A: /[\xC0-\xC6]/g,
            e: /[\xE8-\xEB]/g,
            E: /[\xC8-\xCB]/g,
            i: /[\xEC-\xEF]/g,
            I: /[\xCC-\xCF]/g,
            o: /[\xF2-\xF6]/g,
            O: /[\xD2-\xD6]/g,
            u: /[\xF9-\xFC]/g,
            U: /[\xD9-\xDC]/g,
            c: /\xE7/g,
            C: /\xC7/g,
            n: /\xF1/g,
            N: /\xD1/g
        };
        for (var letra in mapaAcentosHex) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace(expressaoRegular, letra);
        }
        return string;
    };
    OrdersComponent.prototype.validDiscount = function (order) {
        if (order.discount) {
            order = JSON.parse(order.discount);
            return order.status;
        }
    };
    OrdersComponent.prototype.getDiscountValue = function (order) {
        order = JSON.parse(order.discount);
        if (order.discount_type) {
            if (order.name.indexOf(order.value) > -1) {
                return order.name;
            }
            return order.name + ": " + order.value + '%';
        }
        return order.name + ": R$ " + order.value;
    };
    OrdersComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/layout/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/orders/orders.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_orders_service__["a" /* OrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["PushNotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["PushNotificationsService"]) === "function" && _e || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
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