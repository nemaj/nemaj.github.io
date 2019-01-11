(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pre-order-pre-order-module"],{

/***/ "./src/app/modules/pre-order/api/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/pre-order/api/index.ts ***!
  \************************************************/
/*! exports provided: Api, PreOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _pre_order_pre_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-order/pre-order.service */ "./src/app/modules/pre-order/api/pre-order/pre-order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreOrderService", function() { return _pre_order_pre_order_service__WEBPACK_IMPORTED_MODULE_0__["PreOrderService"]; });


var Api = [_pre_order_pre_order_service__WEBPACK_IMPORTED_MODULE_0__["PreOrderService"]];



/***/ }),

/***/ "./src/app/modules/pre-order/pre-order-routing.modules.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pre-order/pre-order-routing.modules.ts ***!
  \****************************************************************/
/*! exports provided: routes, PreOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreOrderRoutingModule", function() { return PreOrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/partbnb-component */ "./src/app/@pages/partbnb-component/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: ':id',
        component: _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_2__["PreOrderComponent"]
    },
    { path: '**', component: _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_2__["PreOrderComponent"] }
];
var PreOrderRoutingModule = /** @class */ (function () {
    function PreOrderRoutingModule() {
    }
    PreOrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PreOrderRoutingModule);
    return PreOrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pre-order/pre-order.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/pre-order/pre-order.module.ts ***!
  \*******************************************************/
/*! exports provided: PreOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreOrderModule", function() { return PreOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/app/modules/pre-order/api/index.ts");
/* harmony import */ var _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared-app.module */ "./src/app/shared/shared-app.module.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/pages.module */ "./src/app/@pages/pages.module.ts");
/* harmony import */ var _pre_order_routing_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pre-order-routing.modules */ "./src/app/modules/pre-order/pre-order-routing.modules.ts");
/* harmony import */ var _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/partbnb-component */ "./src/app/@pages/partbnb-component/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PreOrderModule = /** @class */ (function () {
    function PreOrderModule() {
    }
    PreOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__["SharedAppModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pre_order_routing_modules__WEBPACK_IMPORTED_MODULE_8__["PreOrderRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_pages_partbnb_component__WEBPACK_IMPORTED_MODULE_9__["PreOrderComponent"]],
            providers: _api__WEBPACK_IMPORTED_MODULE_4__["Api"].slice()
        })
    ], PreOrderModule);
    return PreOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pre-order-pre-order-module.js.map