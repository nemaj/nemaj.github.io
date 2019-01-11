(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./src/app/modules/dashboard/api/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/dashboard/api/index.ts ***!
  \************************************************/
/*! exports provided: Api, PortfolioService, PreorderDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio/portfolio.service */ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts");
/* harmony import */ var _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preorder-dashboard/preorder-dashboard.service */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__["PortfolioService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardService", function() { return _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"]; });



var Api = [_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__["PortfolioService"], _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"]];




/***/ }),

/***/ "./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts ***!
  \*********************************************************************/
/*! exports provided: portfolioValueBuilderUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioValueBuilderUI", function() { return portfolioValueBuilderUI; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function portfolioValueBuilderUI(values) {
    return __assign({}, values);
}


/***/ }),

/***/ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/api/portfolio/portfolio.service.ts ***!
  \**********************************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _portfolio_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio.mapper */ "./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Property, Country } from './property.model';

var PortfolioService = /** @class */ (function () {
    function PortfolioService(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/api";
    }
    PortfolioService.prototype.getPortfolioValue = function (userName, params) {
        return this._http
            .post(this.baseUrl + "/" + userName + "/portfolio-value", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_portfolio_mapper__WEBPACK_IMPORTED_MODULE_4__["portfolioValueBuilderUI"]));
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts ***!
  \***************************************************************************************/
/*! exports provided: preorderDashboardBuilderUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preorderDashboardBuilderUI", function() { return preorderDashboardBuilderUI; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function preorderDashboardBuilderUI(details) {
    return __assign({}, details);
}


/***/ }),

/***/ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PreorderDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardService", function() { return PreorderDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _preorder_dashboard_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preorder-dashboard.mapper */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Property, Country } from './property.model';

var PreorderDashboardService = /** @class */ (function () {
    function PreorderDashboardService(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/api";
    }
    PreorderDashboardService.prototype.getTempDetails = function (userName) {
        return this._http
            .get(this.baseUrl + "/users/" + userName + "/temp-dashboard")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_preorder_dashboard_mapper__WEBPACK_IMPORTED_MODULE_4__["preorderDashboardBuilderUI"]));
    };
    PreorderDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PreorderDashboardService);
    return PreorderDashboardService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/layouts */ "./src/app/@pages/layouts/index.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/wallet/wallet.component */ "./src/app/modules/dashboard/pages/wallet/wallet.component.ts");
/* harmony import */ var _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/preorder-dashboard/preorder-dashboard.component */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_2__["ExecutiveLayout"],
        data: { module: 'dashboard' },
        children: [
            // { path: '', redirectTo: 'portfolio', pathMatch: 'full' }, // commented for the promo period
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            { path: 'portfolio', component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] },
            { path: 'wallet', component: _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"] },
            { path: 'details', component: _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PreorderDashboardComponent"] }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared-app.module */ "./src/app/shared/shared-app.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/pages.module */ "./src/app/@pages/pages.module.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/wallet/wallet.component */ "./src/app/modules/dashboard/pages/wallet/wallet.component.ts");
/* harmony import */ var _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/preorder-dashboard/preorder-dashboard.component */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api */ "./src/app/modules/dashboard/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_6__["SharedAppModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"]
            ],
            declarations: [
                _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_9__["WalletComponent"],
                _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["PreorderDashboardComponent"]
            ],
            providers: _api__WEBPACK_IMPORTED_MODULE_11__["Api"].slice()
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n    <div class=\"dashboard-head\">\r\n      <div\r\n        class=\"dashboard-head-left\"\r\n        [ngStyle]=\"{ paddingTop: !hasFunds ? '20px' : 'unset' }\"\r\n      >\r\n        <h3>My Porfolio</h3>\r\n        <div *ngIf=\"hasFunds && !mobileView\">\r\n          <custom-select\r\n            [SelectOptions]=\"porfolioFilters\"\r\n            [DefaultOption]=\"selectedFilter\"\r\n            (selectChanged)=\"setSelectedFilter($event)\"\r\n          ></custom-select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"dashboard-head-right\">\r\n        <div class=\"dashboard-head-right-container\">\r\n          <div id=\"icon-income-blue\"><icon-income></icon-income></div>\r\n          <div class=\"dashboard-head-wrapper\">\r\n            <div class=\"top-text\">Current Value</div>\r\n            <div class=\"middle-text\">$ 1,000.00</div>\r\n            <div class=\"bottom-text\">(Includes any funds in your wallet)</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"dashboard-head-right-container\">\r\n          <div id=\"icon-capital-blue\"><icon-capital></icon-capital></div>\r\n          <div class=\"dashboard-head-wrapper\">\r\n            <div class=\"top-text\">Current Value</div>\r\n            <div class=\"middle-text\">$ 1,000.00</div>\r\n            <div class=\"bottom-text\">(Includes any funds in your wallet)</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-bottom: 10px;\" *ngIf=\"hasFunds && mobileView\">\r\n      <div>\r\n        <custom-select\r\n          [SelectOptions]=\"porfolioFilters\"\r\n          [DefaultOption]=\"selectedFilter\"\r\n          (selectChanged)=\"setSelectedFilter($event)\"\r\n        ></custom-select>\r\n      </div>\r\n    </div>\r\n    <div class=\"portfolio-values-container\" *ngIf=\"hasFunds\">\r\n      <h3>Portfolio Value ( {{ selectedFilter }} )</h3>\r\n      <custom-chart\r\n        [ChartData]=\"portfolioValues\"\r\n        [ChartTypeId]=\"2\"\r\n        [ChartLegend]=\"false\"\r\n        *ngIf=\"!mobileView && portfolioValues\"\r\n      ></custom-chart>\r\n      <div class=\"mobile-chart-container\" *ngIf=\"mobileView && portfolioValues\">\r\n        <custom-chart\r\n          [ChartData]=\"portfolioValues\"\r\n          [ChartTypeId]=\"3\"\r\n          [ChartLegend]=\"false\"\r\n        ></custom-chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"asset-performance-container\" *ngIf=\"hasFunds\">\r\n      <div class=\"asset-performance-header\">\r\n        <div class=\"left\"><h3>Asset Performance</h3></div>\r\n        <div class=\"right\">\r\n          <div class=\"filter-btn\">\r\n            <div id=\"icon-filter\"><icon-filter></icon-filter></div>\r\n            Filters\r\n          </div>\r\n          <div class=\"add-properties-btn\">\r\n            <i class=\"fa fa-plus\"></i> Add Properties\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table asset-performance-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Asset</th>\r\n            <th>Asset Value</th>\r\n            <th>Net Income</th>\r\n            <th>Capital Growth</th>\r\n            <th>Total Return</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <div class=\"asset-col-container\">\r\n                <div class=\"asset-thumbnail\" setImage=\"{{ sampleImage }}\"></div>\r\n                <div class=\"asset-description-wrapper\">\r\n                  <div class=\"asset-title\">Palmetto Place, Bahamas</div>\r\n                  <div class=\"asset-caption\">\r\n                    Most Recent Value - <span>$340,000</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>$340.00</td>\r\n            <td>\r\n              <div>\r\n                $27.50\r\n                <div class=\"equivalent-percent\">8.33%</div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                $10.00\r\n                <div class=\"equivalent-percent\">3.03%</div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                $37.50\r\n                <div class=\"equivalent-percent\">11.36%</div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr class=\"table-total\">\r\n            <td><div>Total (Since first purchase)</div></td>\r\n            <td><div>$1,090.00</div></td>\r\n            <td><div>$90.00</div></td>\r\n            <td><div>$45.00</div></td>\r\n            <td><div>$135.00</div></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"asset-mobile-container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-asset\"><icon-asset></icon-asset></div>\r\n                <div class=\"asset-mobile-text\">Total Asset Value</div>\r\n                <div class=\"asset-mobile-value\">$1,900.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-income-v2\"><icon-income-v2></icon-income-v2></div>\r\n                <div class=\"asset-mobile-text\">Total Net Income</div>\r\n                <div class=\"asset-mobile-value\">$90.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-growth-v2\"><icon-growth-v2></icon-growth-v2></div>\r\n                <div class=\"asset-mobile-text\">Total Capital Growth</div>\r\n                <div class=\"asset-mobile-value\">$45.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-returns\"><icon-returns></icon-returns></div>\r\n                <div class=\"asset-mobile-text\">Total Returns</div>\r\n                <div class=\"asset-mobile-value\">$135.00</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"asset-property-container\">\r\n        <div class=\"asset-property-header\">\r\n          <div\r\n            class=\"asset-property-header-image\"\r\n            setImage=\"{{ sampleImage }}\"\r\n          ></div>\r\n          <div class=\"asset-property-header-text\">\r\n            <div>Palmetto Place, Bahamas</div>\r\n            <div>Most Recent Value -<span>$340,000</span></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Asset Value</div>\r\n          <div class=\"asset-property-value not-this\">$340.00</div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Net Income</div>\r\n          <div class=\"asset-property-value\">\r\n            $27.00\r\n            <div class=\"asset-property-value-percent\">8.30%</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Capital Growth</div>\r\n          <div class=\"asset-property-value\">\r\n            $10.00\r\n            <div class=\"asset-property-value-percent\">3.03%</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Total Return</div>\r\n          <div class=\"asset-property-value\">\r\n            $37.50\r\n            <div class=\"asset-property-value-percent\">11.36%</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"welcome-alert-container\" *ngIf=\"!hasFunds\">\r\n        <div class=\"left\">\r\n          <div class=\"icon-info\"><i class=\"fa fa-info\"></i></div>\r\n          Welcome Vincent! Please get started by depositing funds, so that you\r\n          have available funds to purchase parts.\r\n        </div>\r\n\r\n        <div class=\"right\"><i class=\"fa fa-plus\"></i>Add Funds</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"asset-performance-container no-funds\" *ngIf=\"!hasFunds\">\r\n      <div class=\"asset-performance-header\">\r\n        <div class=\"left\">\r\n          <h3>Asset Performance</h3>\r\n          <div class=\"sub-caption\">\r\n            Here is where you will see your property performance.\r\n          </div>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"filter-btn\">\r\n            <div id=\"icon-filter\"><icon-filter></icon-filter></div>\r\n            Filters\r\n          </div>\r\n          <div class=\"add-properties-btn\">\r\n            <i class=\"fa fa-plus\"></i> Add Properties\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table asset-performance-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Asset</th>\r\n            <th>Asset Value</th>\r\n            <th>Net Income</th>\r\n            <th>Capital Growth</th>\r\n            <th>Total Return</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <div class=\"asset-col-container\">\r\n                <div class=\"asset-thumbnail\"></div>\r\n                <div class=\"asset-description-wrapper\">\r\n                  <div class=\"asset-title\"></div>\r\n                  <div class=\"asset-caption\"></div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td><div></div></td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr class=\"table-total\">\r\n            <td>\r\n              <div><div></div></div>\r\n            </td>\r\n            <td>\r\n              <div><div></div></div>\r\n            </td>\r\n            <td>\r\n              <div><div></div></div>\r\n            </td>\r\n            <td>\r\n              <div><div></div></div>\r\n            </td>\r\n            <td>\r\n              <div><div></div></div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"asset-mobile-container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-asset-gray\"><icon-asset></icon-asset></div>\r\n                <div class=\"asset-mobile-text\">Total Asset Value</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-income-v2-gray\">\r\n                  <icon-income-v2></icon-income-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Net Income</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-growth-v2-gray\">\r\n                  <icon-growth-v2></icon-growth-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Capital Growth</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-returns-gray\"><icon-returns></icon-returns></div>\r\n                <div class=\"asset-mobile-text\">Total Returns</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-head {\n  display: inline-block;\n  width: 100%;\n  margin: 35px 0px 10px 0px; }\n  .dashboard-head > .dashboard-head-left {\n    width: 180px;\n    position: relative;\n    float: left; }\n  .dashboard-head > .dashboard-head-left > h3 {\n      font-size: 22px;\n      color: #2c2c2c;\n      font-weight: bold;\n      margin: 0 0 5px 0; }\n  .dashboard-head > .dashboard-head-right {\n    float: right;\n    display: inline-flex; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container {\n      border: 1px solid #e6e6e6;\n      border-radius: 3px;\n      padding: 10px;\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      background-color: white; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > #icon-income-blue,\n      .dashboard-head > .dashboard-head-right > .dashboard-head-right-container #icon-capital-blue {\n        margin-right: 15px; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper > .top-text {\n        font-size: 10px;\n        color: #2c2c2c;\n        font-weight: bold; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper .middle-text {\n        font-size: 20px;\n        color: #6580b6;\n        font-weight: bold; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper .bottom-text {\n        font-size: 10px;\n        color: #909090; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container:first-child {\n      margin: 0 8px 0 0; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container:last-child {\n      margin: 0 0 0 8px; }\n  .portfolio-values-container {\n  background-color: white;\n  padding: 25px 20px; }\n  .portfolio-values-container > h3 {\n    font-size: 18px;\n    color: #626262;\n    margin: 0 0 10px 0;\n    font-weight: 500;\n    font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif; }\n  .portfolio-values-container > .mobile-chart-container {\n    width: 108%;\n    margin-left: -4%; }\n  .asset-performance-container {\n  background-color: white;\n  padding: 25px 20px;\n  margin-top: 15px;\n  margin-bottom: 30px;\n  display: inline-block;\n  width: 100%; }\n  .asset-performance-container > .asset-performance-header {\n    display: inline-block;\n    width: 100%; }\n  .asset-performance-container > .asset-performance-header > .left {\n      float: left; }\n  .asset-performance-container > .asset-performance-header > .left > h3 {\n        font-size: 18px;\n        color: #626262;\n        margin: 0;\n        font-weight: bold;\n        font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif; }\n  .asset-performance-container > .asset-performance-header > .right {\n      float: right;\n      display: inline-flex;\n      align-items: center; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn {\n        border: 1px solid #e6e6e6;\n        border-radius: 2px;\n        display: inline-flex;\n        padding: 5px 15px;\n        align-items: center;\n        font-size: 12px;\n        color: #909090;\n        cursor: pointer; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn > #icon-filter {\n          display: flex;\n          padding-right: 3px; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn > #icon-filter > icon-filter {\n            display: inherit; }\n  .asset-performance-container > .asset-performance-header > .right .add-properties-btn {\n        padding: 5px 15px;\n        background: #10cfbd;\n        border-radius: 2px;\n        color: white;\n        cursor: pointer;\n        font-size: 12px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: 10px; }\n  .asset-performance-container > .asset-performance-header > .right .add-properties-btn > i {\n          font-size: 16px;\n          padding: 3px 5px 3px 0; }\n  .asset-performance-container > .asset-performance-table {\n    margin-top: 10px; }\n  .asset-performance-container > .asset-performance-table > thead > tr {\n      background-color: #6580b6; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th {\n        font-size: 14px;\n        color: #ffffff;\n        text-transform: none;\n        font-weight: initial;\n        background: #6580b6;\n        letter-spacing: 0;\n        border-left: 1px solid rgba(230, 230, 230, 0.75);\n        text-align: center; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th:first-child {\n        border-radius: 3px 0 0 3px; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th:last-child {\n        border-radius: 0 3px 3px 0; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td {\n      padding: 10px 0;\n      vertical-align: middle;\n      border-bottom: 1px solid #e6e6e6; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container {\n        display: inline-flex;\n        align-items: center;\n        vertical-align: middle; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-thumbnail {\n          height: 40px;\n          width: 40px;\n          background-color: #ddd;\n          margin: 0 15px 0 25px;\n          background-size: cover !important; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper {\n          display: inline-block; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-title {\n            font-size: 16px;\n            color: #626262;\n            font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption {\n            font-size: 12px;\n            color: #909090; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption > span {\n              color: #6580b6;\n              font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) {\n      vertical-align: middle;\n      text-align: center;\n      font-size: 16px;\n      color: #626262;\n      font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div {\n        display: inline-block;\n        padding-top: 12px; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div > .equivalent-percent {\n          font-size: 12px;\n          color: #909090;\n          font-weight: normal;\n          text-align: right; }\n  .asset-performance-container > .asset-performance-table > tbody > .table-total > td {\n      border: 0; }\n  .asset-performance-container > .asset-performance-table > tbody > .table-total > td > div {\n        padding: 10px 0;\n        background-color: #f5f8ff;\n        text-align: center;\n        font-size: 16px;\n        color: #2c2c2c;\n        font-weight: bold; }\n  .asset-performance-container > .asset-mobile-container {\n    display: none; }\n  .asset-performance-container > .asset-property-container {\n    display: none; }\n  .welcome-alert-container {\n  background-color: rgba(16, 207, 189, 0.1);\n  padding: 15px;\n  border-radius: 2px;\n  display: inline-block;\n  width: 100%; }\n  .welcome-alert-container > .left {\n    display: inline-flex;\n    align-items: center;\n    font-size: 16px;\n    color: #0a7c71;\n    padding-top: 8px; }\n  .welcome-alert-container > .left > .icon-info {\n      width: 16px;\n      height: 16px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 10px;\n      color: white;\n      background-color: #10cfbd;\n      border-radius: 2px;\n      margin-right: 10px; }\n  .welcome-alert-container .right {\n    float: right;\n    font-size: 14px;\n    color: #ffffff;\n    text-align: center;\n    font-weight: bold;\n    background-color: #10cfbd;\n    padding: 10px 25px;\n    border-radius: 2px;\n    cursor: pointer; }\n  .welcome-alert-container .right > i {\n      font-size: 16px;\n      padding: 3px 8px 3px 0; }\n  .no-funds {\n  margin-top: 0; }\n  .no-funds > .asset-performance-header > .left > h3 {\n    line-height: 22px;\n    font-weight: bold; }\n  .no-funds > .asset-performance-header > .left > .sub-caption {\n    font-size: 14px;\n    color: #626262; }\n  .no-funds > .asset-performance-header > .right {\n    padding-top: 5px; }\n  .no-funds > .asset-performance-header > .right > .filter-btn {\n      cursor: not-allowed; }\n  .no-funds > .asset-performance-header > .right > .add-properties-btn {\n      background: #fafafa;\n      border: 1px solid #e6e6e6;\n      border-radius: 2px;\n      font-size: 12px;\n      color: #909090;\n      cursor: not-allowed; }\n  .no-funds > .asset-performance-table > thead > tr {\n    background-color: #6580b6; }\n  .no-funds > .asset-performance-table > thead > tr > th {\n      background: #f0f0f0;\n      color: rgba(144, 144, 144, 0.4); }\n  .no-funds > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-thumbnail {\n    background-color: #f7f7f7; }\n  .no-funds > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-title {\n    background: #f7f7f7;\n    border-radius: 5.5px;\n    height: 12px;\n    width: 220px;\n    margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption {\n    background: #f7f7f7;\n    border-radius: 5.5px;\n    height: 12px;\n    width: 130px;\n    margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div > div {\n    background: #f7f7f7;\n    border-radius: 5.5px;\n    height: 12px;\n    width: 100px;\n    margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div > .equivalent-percent {\n    background: #f7f7f7;\n    border-radius: 5.5px;\n    height: 12px;\n    width: 50px;\n    margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > tr:not(.table-total) > td:nth-child(2) > div:first-child {\n    background: #f7f7f7;\n    border-radius: 5.5px;\n    height: 12px;\n    width: 100px;\n    margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > .table-total > td > div {\n    background: #f7f7f7;\n    text-align: center; }\n  .no-funds > .asset-performance-table > tbody > .table-total > td > div > div {\n      background: white;\n      border-radius: 5.5px;\n      height: 12px;\n      width: 100px;\n      margin: 10px 0; }\n  .no-funds > .asset-performance-table > tbody > .table-total > td:first-child > div {\n    padding: 7.5px 0; }\n  .no-funds > .asset-performance-table > tbody > .table-total > td:first-child > div > div {\n      background: white;\n      border-radius: 5.5px;\n      height: 12px;\n      width: 220px;\n      margin: 10px 0;\n      display: inline-block; }\n  @media (max-width: 426px) {\n  .dashboard-head {\n    margin-top: 0; }\n    .dashboard-head > .dashboard-head-left {\n      padding: 0; }\n      .dashboard-head > .dashboard-head-left > h3 {\n        font-size: 18px;\n        margin: 0 0 10px 0; }\n    .dashboard-head > .dashboard-head-right {\n      width: 100%; }\n      .dashboard-head > .dashboard-head-right > .dashboard-head-right-container {\n        display: block;\n        text-align: center;\n        width: 50%; }\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper > .bottom-text {\n          line-height: 12px; }\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > #icon-income-blue,\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container #icon-capital-blue {\n          margin: 0px; }\n  .portfolio-values-container {\n    padding: 10px 15px; }\n    .portfolio-values-container > h3 {\n      font-size: 14px; }\n  .asset-performance-container {\n    padding: 15px 20px; }\n    .asset-performance-container > .asset-performance-header > .left > h3 {\n      font-size: 14px; }\n    .asset-performance-container > .asset-performance-header > .left > .sub-caption {\n      font-size: 12px;\n      margin-bottom: 10px; }\n    .asset-performance-container > .asset-performance-header > .right {\n      width: 100%; }\n    .asset-performance-container > .asset-performance-table {\n      display: none; }\n    .asset-performance-container > .asset-mobile-container {\n      display: block;\n      margin: 10px 0; }\n      .asset-performance-container > .asset-mobile-container > .row {\n        margin: 0; }\n        .asset-performance-container > .asset-mobile-container > .row > div {\n          padding: 5px; }\n          .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper {\n            width: 100%;\n            background: #fafafa;\n            border-radius: 4px;\n            height: 83px;\n            display: inline-flex;\n            justify-content: center;\n            align-items: center; }\n            .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content {\n              display: block;\n              text-align: center; }\n              .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-text {\n                color: #626262;\n                font-size: 10px;\n                line-height: 15px; }\n              .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-value {\n                font-size: 16px;\n                color: #2c2c2c;\n                font-weight: bold; }\n        .asset-performance-container > .asset-mobile-container > .row > .col-6:first-child {\n          padding: 5px 5px 5px 0; }\n        .asset-performance-container > .asset-mobile-container > .row > .col-6:last-child {\n          padding: 5px 0px 5px 5px; }\n    .asset-performance-container > .asset-property-container {\n      display: inline-block;\n      width: 100%;\n      border: 1px solid #e6e6e6;\n      border-radius: 5px;\n      padding: 10px; }\n      .asset-performance-container > .asset-property-container > .asset-property-header {\n        border-bottom: 1px solid #e6e6e6;\n        padding-bottom: 5px; }\n        .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-image {\n          height: 40px;\n          width: 40px;\n          display: inline-block;\n          background-color: #ddd;\n          background-size: cover !important; }\n        .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text {\n          display: inline-block;\n          vertical-align: top;\n          padding-left: 15px; }\n          .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:first-child {\n            font-size: 14px;\n            color: #626262;\n            font-weight: bold; }\n          .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:last-child {\n            font-size: 12px; }\n            .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:last-child > span {\n              color: #48b0f7;\n              font-weight: bold; }\n      .asset-performance-container > .asset-property-container > .asset-property-content-wrapper {\n        width: 100%;\n        display: inline-block;\n        padding: 12px 0;\n        vertical-align: top; }\n        .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-name {\n          font-size: 12px;\n          color: #2c2c2c;\n          float: left; }\n        .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value {\n          font-size: 12px;\n          color: #626262;\n          font-weight: bold;\n          float: right; }\n          .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value > .asset-property-value-percent {\n            font-size: 10px;\n            color: #909090;\n            text-align: right;\n            line-height: 5px; }\n        .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value:not(.not-this) {\n          margin-top: -5.5px; }\n      .asset-performance-container > .asset-property-container > .asset-property-content-wrapper:not(:last-child) {\n        border-bottom: 1px dashed #e6e6e6; }\n  .welcome-alert-container > .left {\n    font-size: 12px;\n    line-height: 15px;\n    margin-bottom: 20px; }\n    .welcome-alert-container > .left > .icon-info {\n      padding: 8px; }\n  .welcome-alert-container .right {\n    width: 100%; }\n  .no-funds > .asset-performance-header > .left > h3 {\n    font-size: 14px; }\n  .no-funds > .asset-performance-header > .left > .sub-caption {\n    font-size: 12px;\n    margin-bottom: 10px; }\n  .no-funds > .asset-performance-header > .right {\n    width: 100%; }\n  .no-funds > .asset-performance-table {\n    display: none; }\n  .no-funds > .asset-mobile-container {\n    display: block;\n    margin: 10px 0; }\n    .no-funds > .asset-mobile-container > .row > div {\n      padding: 5px; }\n      .no-funds > .asset-mobile-container > .row > div > .asset-mobile-wrapper {\n        width: 100%;\n        background: #fafafa;\n        border-radius: 4px;\n        height: 83px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center; }\n        .no-funds > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content {\n          display: block;\n          text-align: center; }\n          .no-funds > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-text {\n            color: #d1d1d1;\n            font-size: 10px;\n            line-height: 7px; }\n          .no-funds > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .dummy-indicator {\n            background: #f0f0f0;\n            border-radius: 7px;\n            height: 14px;\n            margin-top: 8px; }\n    .no-funds > .asset-mobile-container > .row > .col-6:first-child {\n      padding: 5px 5px 5px 0; }\n    .no-funds > .asset-mobile-container > .row > .col-6:last-child {\n      padding: 5px 0px 5px 5px; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/graph-view */ "./src/app/shared/constants/graph-view.ts");
/* harmony import */ var _modules_dashboard_api_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/dashboard/api/portfolio/portfolio.service */ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(changeDetectorRef, _portfolioService) {
        this.changeDetectorRef = changeDetectorRef;
        this._portfolioService = _portfolioService;
        this.porfolioFilters = Object.values(_shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__["GRAPH_OPTIONS"]);
        this.selectedFilter = this.porfolioFilters[0];
        this.portfolioValues = [
            { month: 1, value: 3400 },
            { month: 2, value: 1400 },
            { month: 3, value: 640 },
            { month: 4, value: 3460 },
            { month: 5, value: 1400 },
            { month: 6, value: 840 },
            { month: 7, value: 900 },
            { month: 8, value: 340 },
            { month: 9, value: 408 },
            { month: 10, value: 222 },
            { month: 11, value: 1000 },
            { month: 12, value: 8000 }
        ];
        this.sampleImage = "/Docs/PropertyAsset/Properties/1/PropertyPhotos/1.jpg";
        this.hasFunds = true;
        this.tabletViewMaxSize = 768;
        this.tabletViewMinSize = 426;
    }
    PortfolioComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkViewPorts();
            _this.initIcons();
        }, 500);
    };
    PortfolioComponent.prototype.ngOnInit = function () { };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        this.initIcons();
        this.checkViewPorts();
        // this.getPortfolioValue();
    };
    PortfolioComponent.prototype.setSelectedFilter = function (evt) {
        this.selectedFilter = evt;
    };
    PortfolioComponent.prototype.initIcons = function () {
        var iconIncomeSvg = document.querySelector('#icon-income-blue')
            .firstElementChild;
        var iconIncome = iconIncomeSvg.innerHTML || '';
        iconIncome = iconIncome.replace("fill=\"#788195\"", "fill=\"#6580B6\"");
        iconIncome = iconIncome.replace("width=\"28px\"", "width=\"25px\"");
        iconIncome = iconIncome.replace("height=\"36px\"", "height=\"33px\"");
        iconIncomeSvg.innerHTML = iconIncome;
        var iconCapitalSvg = document.querySelector('#icon-capital-blue')
            .firstElementChild;
        var iconCapital = iconCapitalSvg.innerHTML || '';
        iconCapital = iconCapital.replace("fill=\"#788195\"", "fill=\"#6580B6\"");
        iconCapital = iconCapital.replace("width=\"32px\"", "width=\"28px\"");
        iconCapital = iconCapital.replace("height=\"32px\"", "height=\"28px\"");
        iconCapitalSvg.innerHTML = iconCapital;
        var iconFilterSvg = document.querySelector('#icon-filter')
            .firstElementChild;
        var iconFilter = iconFilterSvg.innerHTML || '';
        iconFilter = iconFilter.replace("fill=\"#626262\"", "fill=\"#626262\"");
        iconFilter = iconFilter.replace("width=\"35\"", "width=\"22px\"");
        iconFilter = iconFilter.replace("height=\"35\"", "height=\"22px\"");
        iconFilterSvg.innerHTML = iconFilter;
    };
    PortfolioComponent.prototype.checkViewPorts = function () {
        this.desktopView = window.outerWidth >= this.tabletViewMaxSize;
        this.tabletView =
            window.outerWidth <= this.tabletViewMaxSize &&
                window.outerWidth > this.tabletViewMinSize;
        this.mobileView = window.outerWidth <= this.tabletViewMinSize;
        if (this.changeDetectorRef['destroyed']) {
            this.changeDetectorRef.detectChanges();
        }
        if (this.mobileView) {
            this.initMobileIcons();
        }
    };
    PortfolioComponent.prototype.initMobileIcons = function () {
        if (!this.hasFunds) {
            var iconAssetSvg = document.querySelector('#icon-asset-gray')
                .firstElementChild;
            var iconAsset = iconAssetSvg.innerHTML || '';
            iconAsset = iconAsset.replace("fill=\"#2C2C2C\"", "fill=\"#D1D1D1\"");
            iconAssetSvg.innerHTML = iconAsset;
            var iconIncomeV2Svg = document.querySelector('#icon-income-v2-gray')
                .firstElementChild;
            var iconIncomeV2 = iconIncomeV2Svg.innerHTML || '';
            iconIncomeV2 = iconIncomeV2.replace("fill=\"#2C2C2C\"", "fill=\"#D1D1D1\"");
            iconIncomeV2Svg.innerHTML = iconIncomeV2;
            var iconGrowthV2Svg = document.querySelector('#icon-growth-v2-gray')
                .firstElementChild;
            var iconGrowthV2 = iconGrowthV2Svg.innerHTML || '';
            iconGrowthV2 = iconGrowthV2.replace("fill=\"#2C2C2C\"", "fill=\"#D1D1D1\"");
            iconGrowthV2Svg.innerHTML = iconGrowthV2;
            var iconReturnsSvg = document.querySelector('#icon-returns-gray')
                .firstElementChild;
            var iconReturns = iconReturnsSvg.innerHTML || '';
            iconReturns = iconReturns.replace("fill=\"#2C2C2C\"", "fill=\"#D1D1D1\"");
            iconReturns = iconReturns.replace("fill=\"#2C2C2C\"", "fill=\"#D1D1D1\"");
            iconReturns = iconReturns.replace("fill=\"#000000\"", "fill=\"#D1D1D1\"");
            iconReturnsSvg.innerHTML = iconReturns;
        }
    };
    PortfolioComponent.prototype.getPortfolioValue = function () {
        this._portfolioService
            .getPortfolioValue("minutemaid@gmail.com", { TimeFrame: "Last3Months" })
            .subscribe(function (data) {
            // console.log(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortfolioComponent.prototype, "onResize", null);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _modules_dashboard_api_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-5 pre-order-column\">\r\n      <h5>Pre-Order Details</h5>\r\n      <div\r\n        class=\"pre-order-wrapper\"\r\n        id=\"pre-order-wrapper-id\"\r\n        [ngClass]=\"{ 'mobile-pre-order-wrapper-padding': mobileView }\"\r\n      >\r\n        <div\r\n          class=\"property-name\"\r\n          [ngClass]=\"{ 'mobile-property-name': mobileView }\"\r\n          *ngIf=\"preOrderDetails\"\r\n        >\r\n          <div\r\n            class=\"thumbnail-property-photo\"\r\n            setImage=\"{{\r\n              preOrderDetails.propertyPhotos &&\r\n                preOrderDetails.propertyPhotos.length > 0 &&\r\n                preOrderDetails.propertyPhotos[0].filePath\r\n            }}\"\r\n          ></div>\r\n          <div class=\"pre-order-property\">\r\n            {{ preOrderDetails.propertyName }}\r\n          </div>\r\n        </div>\r\n        <div class=\"property-name\">\r\n          <div class=\"pre-order-options\">\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Number of Parts:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">{{ preOrderDetails.noOfParts }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Commitment Amount:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{\r\n                    preOrderDetails.commitmentAmount\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"alert alert-warning\"\r\n                *ngIf=\"preOrderDetails.commitmentAmount >= 1000\"\r\n              >\r\n                <div class=\"info-icon\"><i class=\"fa fa-info\"></i></div>\r\n                <span>\r\n                  As an <b>Early Access Club</b> member you will receive a $100\r\n                  credit and pay no transaction fees on this pre-order\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Preferred Payment Method:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{ preOrderDetails.preferredPaymentMethodName }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Funding Commitment Date:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{\r\n                    preOrderDetails.fundingCommitmentDate | date: 'dd MMM yyyy'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"alert alert-warning\">\r\n              <div class=\"info-icon\"><i class=\"fa fa-info\"></i></div>\r\n              You will be required to make payment in full within 7 days of the\r\n              commitment date or you will lose your pre-order.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-7\">\r\n      <h5>Property Photos</h5>\r\n      <div class=\"carousel-wrapper\" *ngIf=\"preOrderDetails\">\r\n        <photo-carousel\r\n          [PropertyImages]=\"preOrderDetails.propertyPhotos\"\r\n          [SlideHeight]=\"slideHeight\"\r\n          [SlideWidth]=\"slideWidth\"\r\n        ></photo-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-bottom: 25px; }\n  .container > .row > .pre-order-column > h5 {\n    font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif;\n    font-size: 18px;\n    font-weight: bold; }\n  .container > .row > .pre-order-column > .pre-order-wrapper {\n    border-radius: 5px;\n    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 5px rgba(0, 0, 0, 0.08);\n    padding: 1.15em 1.75em;\n    overflow-y: hidden;\n    transition-property: all;\n    transition-duration: 0.5s;\n    transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name {\n      font-size: 18px;\n      font-weight: bold;\n      min-height: 40px;\n      padding-bottom: 10px;\n      display: inline-flex;\n      align-items: center;\n      width: 100%; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .thumbnail-property-photo {\n        position: relative;\n        width: 35px;\n        height: 35px;\n        background-size: cover !important;\n        transition-property: all;\n        transition-duration: 0.5s;\n        transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1);\n        display: inline-block; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .hide-thumbnail {\n        width: 0px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-property {\n        line-height: 20px;\n        display: inline-block;\n        width: 100%;\n        padding-left: 10px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .mobile-pre-order-property-close {\n        width: calc(100% - 55px);\n        padding-right: 5px;\n        padding-left: 10px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .mobile-pre-order-property-open {\n        width: calc(100% - 19px);\n        padding-right: 5px;\n        padding-left: 0px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .toggle-btn {\n        width: 19px;\n        height: 19px;\n        background-color: #10cfbd;\n        color: white;\n        border-radius: 10px;\n        font-size: 12px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        float: right; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper {\n        margin: 0;\n        padding: 0.8em 0 0.65em;\n        border-bottom: 1.5px dashed rgba(0, 0, 0, 0.07);\n        font-weight: normal; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > div {\n          padding: 0;\n          font-size: 14px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > div:first-child {\n          display: flex;\n          align-items: center; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .content-value {\n          font-weight: bold;\n          display: inline-block; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .content-value > .box-value {\n            border: 1px solid rgba(120, 129, 149, 0.5);\n            height: 40px;\n            border-radius: 2px;\n            display: inline-flex;\n            width: 100%;\n            justify-content: flex-end;\n            align-items: center;\n            padding-right: 10px;\n            color: rgba(120, 129, 149, 0.9); }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .alert-warning {\n          font-size: 12px;\n          display: inline-flex;\n          align-items: baseline;\n          padding: 1em;\n          width: 100%;\n          margin: 1em 0 0 0;\n          color: #cfae45;\n          border-color: #cfae45;\n          font-weight: normal;\n          line-height: 15px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .alert-warning > .info-icon {\n            padding: 3px 6px;\n            background-color: #cfae45;\n            border-radius: 2px;\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 10px;\n            margin-right: 1em;\n            color: white; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .alert-warning {\n        font-size: 12px;\n        display: inline-flex;\n        align-items: baseline;\n        padding: 1em;\n        width: 100%;\n        margin: 1em 0;\n        color: #cfae45;\n        border-color: #cfae45;\n        font-weight: normal;\n        line-height: 15px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .alert-warning > .info-icon {\n          padding: 3px 6px;\n          background-color: #cfae45;\n          border-radius: 2px;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 10px;\n          margin-right: 1em;\n          color: white; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .mobile-property-name {\n      font-size: 16px;\n      min-height: unset;\n      padding: 10px 0; }\n  .container > .row > .pre-order-column .mobile-pre-order-wrapper-padding {\n    padding: 0 1em; }\n  .container > .row > .pre-order-column .checkbox-input + label {\n    font-size: 12px;\n    margin: 0.5em 0; }\n  .container > .row > .pre-order-column .checkbox-input + label > .line-height {\n      line-height: 15px;\n      color: #788195; }\n  .container > .row > div {\n    padding-top: 25px; }\n  .container > .row > div > h5 {\n      font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif;\n      font-size: 18px;\n      font-weight: bold; }\n  .container > .row > div > .carousel-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: calc(100% - 46px); }\n  .mobile-pre-order-wrapper-padding {\n  padding: 0 1em; }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PreorderDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardComponent", function() { return PreorderDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_dashboard_api_preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/dashboard/api/preorder-dashboard/preorder-dashboard.service */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts");
/* harmony import */ var _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/session-storage/session-storage.service */ "./src/app/shared/services/session-storage/session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreorderDashboardComponent = /** @class */ (function () {
    function PreorderDashboardComponent(changeDetectorRef, _preorderDashboardService, _sessionStorageService) {
        this.changeDetectorRef = changeDetectorRef;
        this._preorderDashboardService = _preorderDashboardService;
        this._sessionStorageService = _sessionStorageService;
        this.tabletViewMaxSize = 768;
        this.tabletViewMinSize = 426;
        this.slideHeight = "400px";
        this.slideWidth = "620px";
    }
    PreorderDashboardComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkViewPorts();
        }, 500);
    };
    PreorderDashboardComponent.prototype.ngOnInit = function () {
        this.getTempDetails();
    };
    PreorderDashboardComponent.prototype.ngAfterViewInit = function () {
        this.checkViewPorts();
    };
    PreorderDashboardComponent.prototype.checkViewPorts = function () {
        this.desktopView = window.outerWidth >= this.tabletViewMaxSize;
        this.tabletView =
            window.outerWidth <= this.tabletViewMaxSize &&
                window.outerWidth > this.tabletViewMinSize;
        this.mobileView = window.outerWidth <= this.tabletViewMinSize;
        this.updateCarouselSize();
    };
    PreorderDashboardComponent.prototype.updateCarouselSize = function () {
        console.log(this.slideHeight);
        console.log(this.desktopView);
        if (this.preOrderDetails) {
            if (this.desktopView) {
                this.slideHeight = "400px";
                this.slideWidth = "620px";
            }
            else if (this.tabletView || this.mobileView) {
                var leftWidth = document.querySelector('#pre-order-wrapper-id')
                    .clientWidth;
                this.slideHeight = leftWidth - 150 + "px";
                this.slideWidth = leftWidth + "px";
            }
            this.changeDetectorRef.detectChanges();
        }
    };
    PreorderDashboardComponent.prototype.getTempDetails = function () {
        var _this = this;
        var userName = JSON.parse(localStorage.getItem('currentUser')).username;
        this._preorderDashboardService.getTempDetails(userName).subscribe(function (data) {
            _this.preOrderDetails = data;
            console.log(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreorderDashboardComponent.prototype, "onResize", null);
    PreorderDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preorder-dashboard',
            template: __webpack_require__(/*! ./preorder-dashboard.component.html */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./preorder-dashboard.component.scss */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _modules_dashboard_api_preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"],
            _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], PreorderDashboardComponent);
    return PreorderDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wallet\">\r\n  <div class=\"container\">\r\n    <div class=\"wallet-header\">\r\n      <h3>My Wallet</h3>\r\n      <div class=\"wallet-header-info\">\r\n        <div class=\"wallet-balance\">\r\n          <icon-income-gray class=\"wallet-icon\"></icon-income-gray>\r\n          <div>\r\n            <p>Current Balance</p>\r\n            <span>$967.00</span>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success btn-cons d-none d-sm-block\">\r\n          <icon-plus-white class=\"icon-md mr-1\"></icon-plus-white> Add Funds\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wallet-table-wrapper\">\r\n      <div class=\"table-header\">\r\n        <p class=\"title\">\r\n          <icon-time class=\"icon-md-3 mr-1 mobile-icon-time\"></icon-time> Recent\r\n          Transactions\r\n        </p>\r\n        <div class=\"info\">\r\n          <span class=\"deposits\">Deposits</span>\r\n          <span class=\"outgoing\">Outgoing</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-content\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Description</th>\r\n              <th>Transaction Date</th>\r\n              <th>Amount</th>\r\n              <th>Balance</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"outgoing\">\r\n              <td>\r\n                <div class=\"desc\">\r\n                  <p>Purchase Property</p>\r\n                  <span>Bahamas, 341 Beach Rd</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">16 Nov. 2018</span></td>\r\n              <td>\r\n                <span class=\"value\">$-169.82</span>\r\n                <div class=\"mobile-value\">\r\n                  <p>$-169.82</p>\r\n                  <span>16 Nov. 2018</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">$30.18</span></td>\r\n            </tr>\r\n            <tr class=\"deposits\">\r\n              <td>\r\n                <div class=\"desc\"><p>Deposit Funds</p></div>\r\n              </td>\r\n              <td><span class=\"value\">15 Nov. 2018</span></td>\r\n              <td>\r\n                <span class=\"value\">$-169.82</span>\r\n                <div class=\"mobile-value\">\r\n                  <p>$-169.82</p>\r\n                  <span>16 Nov. 2018</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">$200.00</span></td>\r\n            </tr>\r\n            <tr class=\"outgoing\">\r\n              <td>\r\n                <div class=\"desc\">\r\n                  <p>Purchase Property</p>\r\n                  <span>Bahamas, 341 Beach Rd</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">16 Nov. 2018</span></td>\r\n              <td>\r\n                <span class=\"value\">$-169.82</span>\r\n                <div class=\"mobile-value\">\r\n                  <p>$-169.82</p>\r\n                  <span>16 Nov. 2018</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">$30.18</span></td>\r\n            </tr>\r\n            <tr class=\"deposits\">\r\n              <td>\r\n                <div class=\"desc\"><p>Deposit Funds</p></div>\r\n              </td>\r\n              <td><span class=\"value\">15 Nov. 2018</span></td>\r\n              <td>\r\n                <span class=\"value\">$+169.82</span>\r\n                <div class=\"mobile-value\">\r\n                  <p>$+169.82</p>\r\n                  <span>16 Nov. 2018</span>\r\n                </div>\r\n              </td>\r\n              <td><span class=\"value\">$200.00</span></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"table-pagination\">\r\n        <ul class=\"pagination\">\r\n          <li class=\"page-item previous\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n              <span class=\"arrow\"></span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n          <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n          <li class=\"page-item separate\">\r\n            <a class=\"page-link\" href=\"#\">...</a>\r\n          </li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n          <li class=\"page-item next\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n              <span class=\"arrow\"></span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n.wallet {\n  padding-top: 10px; }\n.wallet-header {\n    display: flex;\n    align-items: center;\n    height: 80px;\n    margin-bottom: 10px; }\n.wallet-header h3 {\n      flex-grow: 1;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 22px;\n      margin: 0; }\n.wallet-header-info {\n      float: right;\n      display: flex; }\n.wallet-header-info .btn {\n        font-weight: bold;\n        border-radius: 2px;\n        padding-right: 20px;\n        padding-left: 20px;\n        margin-right: 0; }\n.wallet-balance {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 192.8px;\n    height: 45px;\n    background: #fff;\n    border: 1px solid #e6e6e6;\n    border-radius: 2px;\n    margin-right: 20px; }\n.wallet-balance .wallet-icon {\n      margin-right: 15px; }\n.wallet-balance p {\n      font-size: 10px;\n      color: #909090;\n      margin-bottom: 0;\n      line-height: 12px; }\n.wallet-balance span {\n      font-weight: bold;\n      font-size: 20px;\n      color: #788195; }\n.wallet-table-wrapper {\n    background: #fff;\n    border-radius: 2px;\n    min-height: 20px;\n    padding: 30px 20px;\n    padding-bottom: 20px; }\n.wallet-table-wrapper .table-header {\n      display: flex;\n      margin-bottom: 15px; }\n.wallet-table-wrapper .table-header p.title {\n        flex-grow: 1;\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 18px;\n        color: #2c2c2c; }\n.wallet-table-wrapper .table-header .info .deposits {\n        font-size: 14px;\n        margin-left: 10px;\n        margin-right: 20px; }\n.wallet-table-wrapper .table-header .info .deposits:before {\n          content: '';\n          position: relative;\n          right: 10px;\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 7.5px;\n          background: #3c93ce; }\n.wallet-table-wrapper .table-header .info .outgoing {\n        font-size: 14px;\n        margin-left: 15px; }\n.wallet-table-wrapper .table-header .info .outgoing:before {\n          content: '';\n          position: relative;\n          right: 10px;\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 7.5px;\n          background: #f8d053; }\n.wallet-table-wrapper .table-content {\n      border: 1px solid #e6e6e6;\n      border-radius: 2px; }\n.wallet-table-wrapper .table-content table {\n        width: 100%;\n        color: #626262; }\n.wallet-table-wrapper .table-content table thead tr {\n          height: 58px;\n          border-bottom: 1px solid #e6e6e6; }\n.wallet-table-wrapper .table-content table thead tr th {\n            font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n            font-size: 14px;\n            text-align: center;\n            min-width: 185px; }\n.wallet-table-wrapper .table-content table thead tr th:first-child {\n              width: 100%; }\n.wallet-table-wrapper .table-content table thead tr th:nth-child(even) {\n              background: rgba(101, 128, 182, 0.1); }\n.wallet-table-wrapper .table-content table tbody tr {\n          border-bottom: 1px solid #e6e6e6;\n          height: 52px; }\n.wallet-table-wrapper .table-content table tbody tr:last-child {\n            border-bottom: 0; }\n.wallet-table-wrapper .table-content table tbody tr.outgoing {\n            border-left: 2px solid #f8d053; }\n.wallet-table-wrapper .table-content table tbody tr.deposits {\n            border-left: 2px solid #3c93ce; }\n.wallet-table-wrapper .table-content table tbody tr td {\n            text-align: center; }\n.wallet-table-wrapper .table-content table tbody tr td:first-child {\n              text-align: left;\n              padding-left: 30px; }\n.wallet-table-wrapper .table-content table tbody tr td:nth-child(even) {\n              background: rgba(243, 242, 248, 0.3); }\n.wallet-table-wrapper .table-content table tbody tr td .desc {\n              display: flex;\n              flex-direction: column;\n              justify-content: center; }\n.wallet-table-wrapper .table-content table tbody tr td .desc p {\n                font-size: 16px;\n                color: #2c2c2c;\n                margin: 0; }\n.wallet-table-wrapper .table-content table tbody tr td .desc span {\n                font-size: 14px;\n                color: #909090;\n                line-height: 15px; }\n.wallet-table-wrapper .table-content table tbody tr td .value {\n              font-size: 16px; }\n.wallet-table-wrapper .table-content table tbody tr td .mobile-value {\n              display: none; }\n.wallet-table-wrapper .table-pagination {\n      display: flex;\n      flex-flow: row-reverse;\n      margin-top: 20px; }\n.wallet-table-wrapper .table-pagination .pagination {\n        margin-bottom: 0; }\n.wallet-table-wrapper .table-pagination .pagination li {\n          height: 40px;\n          width: 36px; }\n.wallet-table-wrapper .table-pagination .pagination li.active a {\n            background: #10cfbd;\n            color: #fff; }\n.wallet-table-wrapper .table-pagination .pagination li a {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 100%;\n            background: #fafafa;\n            color: #9b9b9c;\n            opacity: 1;\n            font-size: 13px;\n            font-weight: bold;\n            border-radius: 0; }\n.wallet-table-wrapper .table-pagination .pagination li a:hover {\n              background: #40d9ca;\n              color: #fff; }\n.wallet-table-wrapper .table-pagination .pagination li a > span:before {\n              font-size: 16px;\n              font-family: FontAwesome;\n              height: auto;\n              font-weight: 300;\n              text-shadow: none;\n              position: relative;\n              transition: all 0.12s ease; }\n.wallet-table-wrapper .table-pagination .pagination li.separate a {\n            background: transparent;\n            padding-right: 10px;\n            padding-left: 10px; }\n.wallet-table-wrapper .table-pagination .pagination li.separate a:hover {\n              color: #9b9b9c; }\n.wallet-table-wrapper .table-pagination .pagination li.previous a {\n            background: #f3f3f3; }\n.wallet-table-wrapper .table-pagination .pagination li.previous a:hover {\n              color: #9b9b9c; }\n.wallet-table-wrapper .table-pagination .pagination li.previous a > span:before {\n              content: '\\f104'; }\n.wallet-table-wrapper .table-pagination .pagination li.next a {\n            background: #f3f3f3; }\n.wallet-table-wrapper .table-pagination .pagination li.next a:hover {\n              color: #9b9b9c; }\n.wallet-table-wrapper .table-pagination .pagination li.next a > span:before {\n              content: '\\f105'; }\n@media (max-width: 575px) {\n    .wallet .wallet-header {\n      display: block;\n      height: 110px; }\n      .wallet .wallet-header h3 {\n        display: block;\n        font-size: 18px; }\n      .wallet .wallet-header-info {\n        width: 100%;\n        padding-top: 10px; }\n        .wallet .wallet-header-info .wallet-balance {\n          width: 100%;\n          height: 58px;\n          margin-right: 0; }\n          .wallet .wallet-header-info .wallet-balance p {\n            line-height: 10px; }\n          .wallet .wallet-header-info .wallet-balance span {\n            font-size: 16px; }\n    .wallet .wallet-table-wrapper {\n      margin-bottom: 20px;\n      padding: 20px; }\n      .wallet .wallet-table-wrapper .table-header {\n        display: block;\n        margin-bottom: 5px; }\n        .wallet .wallet-table-wrapper .table-header .title {\n          font-size: 14px;\n          padding-bottom: 10px;\n          border-bottom: 1px solid #e6e6e6; }\n        .wallet .wallet-table-wrapper .table-header .info .outgoing,\n        .wallet .wallet-table-wrapper .table-header .info .deposits {\n          font-size: 12px; } }\n@media (max-width: 991px) {\n    .wallet .wallet-table-wrapper .table-content {\n      border: 0; }\n      .wallet .wallet-table-wrapper .table-content table {\n        border-collapse: separate;\n        border-spacing: 0px 10px; }\n        .wallet .wallet-table-wrapper .table-content table thead {\n          display: none; }\n        .wallet .wallet-table-wrapper .table-content table tbody tr {\n          border-bottom: 0;\n          height: 53px; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr.outgoing {\n            background: rgba(248, 208, 83, 0.1); }\n            .wallet .wallet-table-wrapper .table-content table tbody tr.outgoing td:first-child {\n              border-left: 1px solid #f8d053; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr.deposits {\n            background: #f7f7f7; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr.deposits td:first-child {\n              border-left: 1px solid #3c93ce; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td:first-child {\n            padding-left: 10px; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td:nth-child(even) {\n            background: unset;\n            display: none; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td .desc p {\n            font-size: 12px; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td .desc span {\n            font-size: 10px; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td .value {\n            display: none; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value {\n            display: flex;\n            flex-direction: column;\n            align-items: baseline; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value p {\n              font-size: 12px;\n              margin-bottom: 0; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value span {\n              font-size: 10px;\n              color: #909090;\n              line-height: 12px; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.ts ***!
  \********************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalletComponent = /** @class */ (function () {
    function WalletComponent() {
    }
    WalletComponent.prototype.ngOnInit = function () {
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/modules/dashboard/pages/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/modules/dashboard/pages/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/graph-view.ts":
/*!************************************************!*\
  !*** ./src/app/shared/constants/graph-view.ts ***!
  \************************************************/
/*! exports provided: GRAPH_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPH_OPTIONS", function() { return GRAPH_OPTIONS; });
var GRAPH_OPTIONS = {
    SINCE_FIRST_PURCHASE: 'Since First Purchase',
    IN_THIS_FINANCIAL_YEAR: 'In This Financial Year',
    IN_THIS_CALENDAR_YEAR: 'In This Calendar Year',
    IN_THE_LAST_3_MONTHS: 'In The Last 3 Months',
    IN_THE_LAST_6_MONTHS: 'In The Last 6 Months',
    IN_THE_LAST_12_MONTHS: 'In The Last 12 Months'
};


/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map