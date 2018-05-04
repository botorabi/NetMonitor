webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getProbes = function () {
        return this.http.get("/probes");
    };
    ApiService.prototype.getProbesByTime = function (beginTime, endTime) {
        var from = Math.floor(beginTime.getTime() / 1000);
        var to = Math.floor(endTime.getTime() / 1000);
        return this.http.get("/probes/" + from + "/" + to);
    };
    ApiService.prototype.importProbes = function (file) {
        //console.log("file size: " + file.size + ", content: " + file.toString());
        var formData = new FormData();
        formData.append('file', file, file.name);
        var observable = this.http.post("/probes/import", formData);
        observable.subscribe(function (r) { });
        return observable;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <a mat-button routerLink=\"\" routerLinkActive=\"active\"><img src=\"/favicon.ico\" height=\"28\" width=\"28\"><span> NetMon</span></a>\n    <span style=\"flex: 1 1 auto;\"></span>\n    <a mat-button routerLink=\"about\" routerLinkActive=\"active\"><span>About</span></a>\n    <a mat-button routerLink=\"import\" routerLinkActive=\"active\"><span>Import Data</span></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<br>\n\n<router-outlet></router-outlet>\n\n<br>\n\n<footer>\n  <mat-toolbar color=\"primary\">\n      <a mat-button>NetMon v{{version}}, Copyright 2018</a>\n  </mat-toolbar>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        var _this = this;
        this.version = '0.2.0';
        this.countProbes = 0;
        apiService.getProbes().subscribe({
            next: function (p) {
                _this.probes = p;
            },
            complete: function () {
                _this.countProbes = _this.probes.length;
            },
            error: function (err) {
                console.log("Error getting probes: " + err);
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCard */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_chart_component__ = __webpack_require__("./src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_chart_view_chart_component__ = __webpack_require__("./src/app/view-chart/view-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__appRoutes__ = __webpack_require__("./src/app/appRoutes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_about_view_about_component__ = __webpack_require__("./src/app/view-about/view-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_import_view_import_component__ = __webpack_require__("./src/app/view-import/view-import.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__view_chart_view_chart_component__["a" /* ViewChartComponent */],
                __WEBPACK_IMPORTED_MODULE_12__view_about_view_about_component__["a" /* ViewAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__view_import_view_import_component__["a" /* ViewImportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__appRoutes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appRoutes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_chart_view_chart_component__ = __webpack_require__("./src/app/view-chart/view-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_about_view_about_component__ = __webpack_require__("./src/app/view-about/view-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_import_view_import_component__ = __webpack_require__("./src/app/view-import/view-import.component.ts");



var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__view_about_view_about_component__["a" /* ViewAboutComponent */] },
    { path: 'import', component: __WEBPACK_IMPORTED_MODULE_2__view_import_view_import_component__["a" /* ViewImportComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__view_chart_view_chart_component__["a" /* ViewChartComponent */] }
];


/***/ }),

/***/ "./src/app/chart/chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chartElement\">Loading Chart Data...</div>\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent(apiService) {
        this.apiService = apiService;
        this.graphOptions = {
            legend: 'none',
            height: 380,
            hAxis: {
                title: 'Time',
                format: 'M/d/yy',
                gridlines: { count: 15 }
            },
            vAxis: {
                title: 'Frequency'
            },
            colors: ['#C7B42C'],
            animation: {
                startup: true,
                duration: 400,
                easing: 'out'
            },
            explorer: { actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal' }
        };
        this.elementId = 'chartElement';
    }
    ChartComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.updateChart(today, today);
    };
    /**
     * Update the chart. The given dates are considered as whole days,
     * i.e. no hours and minutes are considered.
     */
    ChartComponent.prototype.updateChart = function (timeBegin, timeEnd) {
        var _this = this;
        /* round the dates to 0 o'clock */
        var begin = new Date(timeBegin.getTime());
        var end = new Date(timeEnd.getTime());
        begin.setHours(0, 0, 0);
        end.setHours(24, 0, 0);
        this.apiService.getProbesByTime(begin, end).subscribe({
            next: function (probes) {
                _this.probes = probes;
            },
            complete: function () {
                _this.setupChart();
            },
            error: function (err) {
                console.log("Error getting chart data: " + err);
            }
        });
    };
    ChartComponent.prototype.setupChart = function () {
        var _this = this;
        google.charts.load('current', { packages: ['corechart', 'line'] });
        var drawFunction = function () { return _this.drawGraph(_this.probes); };
        google.charts.setOnLoadCallback(drawFunction);
    };
    ChartComponent.prototype.drawGraph = function (probes) {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time');
        data.addColumn('number', 'Frequency');
        var rows = [];
        var lastTimeStamp = 0;
        probes.forEach(function (value, index, array) {
            if (value.timeStamp == lastTimeStamp)
                return;
            lastTimeStamp = value.timeStamp;
            var freq = 50.0 + (value.frequency / 32767.0);
            rows.push([new Date(lastTimeStamp * 1000), freq]);
        });
        data.addRows(rows);
        var chart = new google.visualization.LineChart(document.getElementById(this.elementId));
        chart.draw(data, this.graphOptions);
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("./src/app/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: modules.slice(),
            exports: modules.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/view-about/view-about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-about/view-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n  <mat-card class=\"center\">\n    <mat-card-title>About NetMon</mat-card-title>\n    <mat-card-content>\n      <div>Copyright 2018</div>\n      <br>\n      <div>Version {{version}}</div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/view-about/view-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewAboutComponent = /** @class */ (function () {
    function ViewAboutComponent(app) {
        this.version = "";
        this.version = app.version;
    }
    ViewAboutComponent.prototype.ngOnInit = function () {
    };
    ViewAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-about',
            template: __webpack_require__("./src/app/view-about/view-about.component.html"),
            styles: [__webpack_require__("./src/app/view-about/view-about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], ViewAboutComponent);
    return ViewAboutComponent;
}());



/***/ }),

/***/ "./src/app/view-chart/view-chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-chart/view-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card  class=\"center\">\n  <mat-card-title>Time Window</mat-card-title>\n  <mat-card-content>\n    <div>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerBegin\" placeholder=\"Begin\" [(formControl)]=\"timeBegin\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerBegin\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerBegin></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerEnd\" placeholder=\"End\" [(formControl)]=\"timeEnd\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerEnd></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <button mat-button color=\"primary\" (click)=\"onUpdateChart(chartComponent)\">Update Chart</button>\n  </mat-card-content>\n</mat-card>\n<br>\n<mat-card class=\"center\">\n  <div style=\"height:400px;\">\n    <app-chart #chartComponent></app-chart>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/view-chart/view-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewChartComponent = /** @class */ (function () {
    function ViewChartComponent() {
        this.timeBegin = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)));
        this.timeEnd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](new Date());
    }
    ViewChartComponent.prototype.ngOnInit = function () {
    };
    ViewChartComponent.prototype.onUpdateChart = function (chartComponent) {
        chartComponent.updateChart(this.timeBegin.value, this.timeEnd.value);
    };
    ViewChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-chart',
            template: __webpack_require__("./src/app/view-chart/view-chart.component.html"),
            styles: [__webpack_require__("./src/app/view-chart/view-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewChartComponent);
    return ViewChartComponent;
}());



/***/ }),

/***/ "./src/app/view-import/view-import.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-import/view-import.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n  <mat-card class=\"center\">\n    <mat-card-title>Import Samples</mat-card-title>\n    <mat-card-content>\n      <div>\n        <form method=\"POST\" enctype=\"multipart/form-data\" action=\"/probes/import\">\n          <div *ngIf=\"totalFiles == 0\">\n            <div>\n              Select files to import\n              <input type=\"file\" name=\"file\" (change)=\"onSelectFiles($event)\" multiple/>\n            </div>\n            <br>\n            <button mat-raised-button button color=\"primary\" (click)=\"onStartImporting($event)\">Start importing</button>\n          </div>\n          <h2 *ngIf=\"currentFile < totalFiles\"> Import Progress: {{currentFile}} / {{totalFiles}}</h2>\n          <h2 *ngIf=\"totalFiles > 0 && currentFile == totalFiles\"> All {{totalFiles}} files were imported. Elapsed time: {{elapsedTime}}</h2>\n        </form>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/view-import/view-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewImportComponent = /** @class */ (function () {
    function ViewImportComponent(apiService) {
        this.apiService = apiService;
        this.totalFiles = 0;
        this.currentFile = 0;
        this.timeBeginMSec = 0;
        this.timeEndMSec = 0;
        this.elapsedTime = "00:00:00";
    }
    ViewImportComponent.prototype.ngOnInit = function () {
    };
    ViewImportComponent.prototype.onSelectFiles = function (event) {
        this.files = event.target.files;
    };
    ViewImportComponent.prototype.onStartImporting = function () {
        var _this = this;
        this.totalFiles = this.files.length;
        this.currentFile = 0;
        this.timeBeginMSec = Date.now();
        for (var i = 0; i < this.files.length; ++i) {
            //console.log("sending file: " + this.files[i].name);
            this.apiService.importProbes(this.files[i]).subscribe(function (response) {
                _this.currentFile++;
                if (_this.currentFile == _this.totalFiles) {
                    _this.timeEndMSec = Date.now();
                    _this.elapsedTime = _this.setupElapsedTime(_this.timeBeginMSec, _this.timeEndMSec);
                }
            });
        }
    };
    ViewImportComponent.prototype.setupElapsedTime = function (timeBegin, timeEnd) {
        var tdiff = (timeEnd - timeBegin) / 1000;
        var hours = Math.floor(tdiff / 3600);
        var minutes = Math.floor((tdiff - (hours * 3600)) / 60);
        var seconds = Math.floor(tdiff) % 60;
        return "" + this.formatTimeDigits(hours) + ":" + this.formatTimeDigits(minutes) + ":" + this.formatTimeDigits(seconds);
    };
    ViewImportComponent.prototype.formatTimeDigits = function (value) {
        return "" + ((value < 9) ? ("0" + value) : value);
    };
    ViewImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-import',
            template: __webpack_require__("./src/app/view-import/view-import.component.html"),
            styles: [__webpack_require__("./src/app/view-import/view-import.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ViewImportComponent);
    return ViewImportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map