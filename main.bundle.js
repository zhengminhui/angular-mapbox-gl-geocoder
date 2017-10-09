webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #404040;\n  color: #f8f8f8;\n  font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n}\n\n* {\n  box-sizing: border-box;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-mapbox></app-mapbox>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapbox_mapbox_module__ = __webpack_require__("../../../../../src/app/mapbox/mapbox.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__mapbox_mapbox_module__["a" /* MapboxModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/mapbox/mapbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 22px;\n  margin: 0;\n  font-weight: 400;\n  line-height: 20px;\n  padding: 20px 2px;\n}\n\na {\n  color: #404040;\n  text-decoration: none;\n}\n\na:hover {\n  color: #101010;\n}\n\n.sidebar {\n  position: absolute;\n  width: 33.3333%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  border-right: 1px solid rgba(0, 0, 0, 0.25);\n}\n\n.pad2 {\n  padding: 20px;\n}\n\n.map {\n  position: absolute;\n  left: 33.3333%;\n  width: 66.6666%;\n  top: 0;\n  bottom: 0;\n}\n\n.heading {\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 10px;\n}\n\n.listings {\n  height: 100%;\n  overflow: auto;\n  padding-bottom: 60px;\n}\n\n.listings .item {\n  display: block;\n  border-bottom: 1px solid #eee;\n  padding: 10px;\n  text-decoration: none;\n}\n\n.listings .item:last-child {\n  border-bottom: none;\n}\n\n.listings .item .title {\n  display: block;\n  color: #00853e;\n  font-weight: 700;\n}\n\n.listings .item .title small {\n  font-weight: 400;\n}\n\n.listings .item.active .title,\n.listings .item .title:hover {\n  color: #8cc63f;\n}\n\n.listings .item.active {\n  background-color: #f8f8f8;\n}\n\n.marker {\n  border: none;\n  cursor: pointer;\n  height: 56px;\n  width: 56px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/marker.png") + ");\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.mapboxgl-popup {\n  padding-bottom: 50px;\n}\n\n.mapboxgl-popup-close-button {\n  display: none;\n}\n\n.mapboxgl-popup-content {\n  font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;\n  padding: 0;\n  width: 180px;\n}\n\n.mapboxgl-popup-content-wrapper {\n  padding: 1%;\n}\n\n.mapboxgl-popup-content h3 {\n  background: #91c949;\n  color: #fff;\n  margin: 0;\n  display: block;\n  padding: 10px;\n  border-radius: 3px 3px 0 0;\n  font-weight: 700;\n  margin-top: -15px;\n}\n\n.mapboxgl-popup-content h4 {\n  margin: 0;\n  display: block;\n  padding: 10px;\n  font-weight: 400;\n}\n\n.mapboxgl-popup-content div {\n  padding: 10px;\n}\n\n.mapboxgl-container .leaflet-marker-icon {\n  cursor: pointer;\n}\n\n.mapboxgl-popup-anchor-top > .mapboxgl-popup-content {\n  margin-top: 15px;\n}\n\n.mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {\n  border-bottom-color: #91c949;\n}\n\n.mapboxgl-ctrl-geocoder {\n  border: 0;\n  border-radius: 0;\n  position: relative;\n  top: 0;\n  width: 800px;\n  margin-top: 0;\n}\n\n.mapboxgl-ctrl-geocoder > div {\n  min-width: 100%;\n  margin-left: 0;\n}\n\n::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n  border-left: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-track {\n  background: none;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #00853e;\n  border-radius: 0;\n}\n\n.clearfix {\n  display: block;\n}\n\n.clearfix::after {\n  content: '.';\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mapbox/mapbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"heading\">\n    <h1>Our locations</h1>\n  </div>\n  <div id=\"listings\" class=\"listings\">\n    <div *ngFor=\"let item of storeData; let i = index\" class=\"item\" [attr.id]=\"'listing-' + i\" [class.active]=\"selectedLink === i\">\n      <a href=\"#\" class=\"title\" (click)=\"moveAndShowInfo(item, i)\">{{item.properties.address}}</a>\n      <div>\n        {{item.properties.city + ' &middot; ' + item.properties.phoneFormatted}}\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"map\" class=\"map\"></div>"

/***/ }),

/***/ "../../../../../src/app/mapbox/mapbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapbox_mapbox_gl_geocoder__ = __webpack_require__("../../../../@mapbox/mapbox-gl-geocoder/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapbox_mapbox_gl_geocoder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mapbox_mapbox_gl_geocoder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_sweetgreen__ = __webpack_require__("../../../../../src/assets/data/sweetgreen.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { distance } from '@turf/turf';
var MapboxComponent = (function () {
    function MapboxComponent() {
    }
    MapboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeData = __WEBPACK_IMPORTED_MODULE_4__assets_data_sweetgreen__["a" /* DATA */].features;
        this.selectedLink = null;
        __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"] = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapbox.accessToken;
        this.map = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-77.034084, 38.909671],
            zoom: 14,
            scrollZoom: false,
        });
        this.map.on('load', function (e) {
            _this.map.addSource('places', {
                type: 'geojson',
                data: __WEBPACK_IMPORTED_MODULE_4__assets_data_sweetgreen__["a" /* DATA */],
            });
            var geocoder = new __WEBPACK_IMPORTED_MODULE_2__mapbox_mapbox_gl_geocoder___default.a({
                accessToken: __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"],
                bbox: [-77.210763, 38.803367, -76.853675, 39.052643],
            });
            _this.map.addControl(geocoder, 'top-left');
            _this.map.addSource('single-point', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [],
                },
            });
            _this.map.addLayer({
                id: 'point',
                source: 'single-point',
                type: 'circle',
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#007cbf',
                    'circle-stroke-width': 3,
                    'circle-stroke-color': '#fff',
                },
            });
        });
        this.storeData.forEach(function (marker, index) {
            var el = document.createElement('div');
            // Add a class called 'marker' to each div
            el.className = 'marker';
            // By default the image for your custom marker will be anchored
            // by its center. Adjust the position accordingly
            // Create the custom markers, set their position, and add to map
            new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Marker"](el, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates)
                .addTo(_this.map);
            el.addEventListener('click', function (e) {
                var activeItem = document.getElementsByClassName('active');
                _this.flyToStore(marker);
                _this.createPopUp(marker);
                e.stopPropagation();
                _this.selectedLink = index;
            });
        });
    };
    MapboxComponent.prototype.flyToStore = function (currentFeature) {
        this.map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15,
        });
    };
    MapboxComponent.prototype.createPopUp = function (currentFeature) {
        console.log('createPopUp', currentFeature);
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        console.log('popUps', popUps);
        // Check if there is already a popup on the map and if so, remove it
        if (popUps[0]) {
            popUps[0].remove();
        }
        var popup = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Popup"]({ closeOnClick: false })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>Sweetgreen</h3>' + '<h4>' + currentFeature.properties.address + '</h4>')
            .addTo(this.map);
    };
    MapboxComponent.prototype.moveAndShowInfo = function (currentFeature, index) {
        this.flyToStore(currentFeature);
        this.createPopUp(currentFeature);
        this.selectedLink = index;
    };
    return MapboxComponent;
}());
MapboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-mapbox',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/mapbox/mapbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mapbox/mapbox.component.css")],
    }),
    __metadata("design:paramtypes", [])
], MapboxComponent);

//# sourceMappingURL=mapbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/mapbox/mapbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapbox_component__ = __webpack_require__("../../../../../src/app/mapbox/mapbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapbox_service__ = __webpack_require__("../../../../../src/app/mapbox/mapbox.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapboxModule = (function () {
    function MapboxModule() {
    }
    return MapboxModule;
}());
MapboxModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__mapbox_component__["a" /* MapboxComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__mapbox_component__["a" /* MapboxComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__mapbox_service__["a" /* MapboxService */]],
    })
], MapboxModule);

//# sourceMappingURL=mapbox.module.js.map

/***/ }),

/***/ "../../../../../src/app/mapbox/mapbox.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapboxService = (function () {
    function MapboxService() {
    }
    return MapboxService;
}());
MapboxService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapboxService);

//# sourceMappingURL=mapbox.service.js.map

/***/ }),

/***/ "../../../../../src/assets/data/sweetgreen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
/**
 * geojson format mock data for stores
 * downloaded from https://www.mapbox.com/help/data/examples/sweetgreen.geojson
 */
/**
 * geojson format mock data for stores
 * downloaded from https://www.mapbox.com/help/data/examples/sweetgreen.geojson
 */ var DATA = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.034084142948, 38.909671288923],
            },
            properties: {
                phoneFormatted: '(202) 234-7336',
                phone: '2022347336',
                address: '1471 P St NW',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'at 15th St NW',
                postalCode: '20005',
                state: 'D.C.',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.049766, 38.900772],
            },
            properties: {
                phoneFormatted: '(202) 507-8357',
                phone: '2025078357',
                address: '2221 I St NW',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'at 22nd St NW',
                postalCode: '20037',
                state: 'D.C.',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.043929, 38.910525],
            },
            properties: {
                phoneFormatted: '(202) 387-9338',
                phone: '2023879338',
                address: '1512 Connecticut Ave NW',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'at Dupont Circle',
                postalCode: '20036',
                state: 'D.C.',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.0672, 38.90516896],
            },
            properties: {
                phoneFormatted: '(202) 337-9338',
                phone: '2023379338',
                address: '3333 M St NW',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'at 34th St NW',
                postalCode: '20007',
                state: 'D.C.',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.002583742142, 38.887041080933],
            },
            properties: {
                phoneFormatted: '(202) 547-9338',
                phone: '2025479338',
                address: '221 Pennsylvania Ave SE',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'btwn 2nd & 3rd Sts. SE',
                postalCode: '20003',
                state: 'D.C.',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-76.933492720127, 38.99225245786],
            },
            properties: {
                address: '8204 Baltimore Ave',
                city: 'College Park',
                country: 'United States',
                postalCode: '20740',
                state: 'MD',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.097083330154, 38.980979],
            },
            properties: {
                phoneFormatted: '(301) 654-7336',
                phone: '3016547336',
                address: '4831 Bethesda Ave',
                cc: 'US',
                city: 'Bethesda',
                country: 'United States',
                postalCode: '20814',
                state: 'MD',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.359425054188, 38.958058116661],
            },
            properties: {
                phoneFormatted: '(571) 203-0082',
                phone: '5712030082',
                address: '11935 Democracy Dr',
                city: 'Reston',
                country: 'United States',
                crossStreet: 'btw Explorer & Library',
                postalCode: '20190',
                state: 'VA',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.10853099823, 38.880100922392],
            },
            properties: {
                phoneFormatted: '(703) 522-2016',
                phone: '7035222016',
                address: '4075 Wilson Blvd',
                city: 'Arlington',
                country: 'United States',
                crossStreet: 'at N Randolph St.',
                postalCode: '22203',
                state: 'VA',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-75.28784, 40.008008],
            },
            properties: {
                phoneFormatted: '(610) 642-9400',
                phone: '6106429400',
                address: '68 Coulter Ave',
                city: 'Ardmore',
                country: 'United States',
                postalCode: '19003',
                state: 'PA',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-75.20121216774, 39.954030175164],
            },
            properties: {
                phoneFormatted: '(215) 386-1365',
                phone: '2153861365',
                address: '3925 Walnut St',
                city: 'Philadelphia',
                country: 'United States',
                postalCode: '19104',
                state: 'PA',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.043959498405, 38.903883387232],
            },
            properties: {
                phoneFormatted: '(202) 331-3355',
                phone: '2023313355',
                address: '1901 L St. NW',
                city: 'Washington DC',
                country: 'United States',
                crossStreet: 'at 19th St',
                postalCode: '20036',
                state: 'D.C.',
            },
        },
    ],
};
//# sourceMappingURL=sweetgreen.js.map

/***/ }),

/***/ "../../../../../src/assets/img/marker.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAWjSURBVGiB7ZpRaBN3HMc/17TJ2qaJm22p1Fo67eqgBh0bK0HbMcteDN3DHiYoboJ7GOvEN8UJY+DmfBPWPU1wAx3zYchKijAqrKWEDmSTUJjaulJLUdp0M2namLT19pC7cj2b5H+5/1mVfSDk/7/73+//+97/7v7/+/1OUVWV55mS9XbAaUodtq8AG4EqwKv9A8wBSe1/FnDsMnJCoAt4GdgOtJAVlo8kcAu4CfwNLMt0RpF4D5YArwFvUVhULpLAb8AfwCMZTskS+ArwDlCtb0hkFlznb4SbwqOR7XcT09XxdLIqkV7wAvg8FUm/xzu3xVcbCzUHbx7ZGRr3uSuMIxcDfgVu23XMrkAF2Avs1jdEp+94j/X3dEQmRwLp5YxbxIjH5c4EG1qj5zq7BwK1W5OGXUPANWzco3YEeoD3yI4e8YfJ0sN9Z9vDY5G2xeWlsmIMlrlKF0PbgsMX9h0f9L/gXdI23wZ+BtLF2CxWoAv4EGgAGImNe0OXT+yfiN+vL8aYmUZ/3VT4/a9/aq1u0kdzEvieIh5AxQp8F9gFEB6N1B7sPX0gnp73FWMoF35PZeJi16lLoebgtLbpT+AXq3aKmejb0MSNxMa9TogDiKfnfQd7Tx8YiY3rT+RdWt+WsCrQD3RC9p4LXT6x3wlxOvH0vC90+cT++MOkPl93aj4IY1Xg22iLg8N9Z9tl3XP5mIjfrz/cd7Zdq5ZqPghjRWAdEIDsVBAeixS8XPZs3sHc0b6V+tzRvsfqezbvKNhxeCzSFp2+o1+qAc0XIawIbCM773Gsv6dDZCo4+eaBgkZF2iwuL5Ud6+/p0KoKFu5FUYElZNeVJDILrsjkSEDkoN31hUdHpA1AZHIkkMgsuLRqC4K+iwpsBMoBzt8IN4muUGSSXs64z98IN2nVcs2ngogKbNEL4dHIdou+ScPUd0vOhgZEX5c26oW7ienqfA3XwvhgWasuiqnvjTkbGhAdwZXXn3g6WZWvoZOY+hZ6JRMVuGJYf+UR4dDVM8RS8Zz7Y6k4h66eETVn7lvoRIsKLBf2wsCV0SHeuPgxV0aHLO2T6ZOowJRe8Hkqkvkamsk1SoVGdy1MfadyNjQgKnBOL/g93rl8DZ3E1LeQH6ICV87cFl9tzIpTMjH1LXQliQqc1Quh5uBNK07JxNT3bM6GBkQF3tILR3aGxj0ud8aKYzLwuNyZIztD42v5lA9RgRNoN7XPXbEcbGiNWvTPNsGG1qgh8pbSfCqIqMBHGM7Yuc7ugTJX6aI1F4unzFW6eK6ze8Cw6RaCcVMrr0vDaOG7QO3WZGhbcNjCsbYIbQsOG8KJquaLEFYE3gdWLs0L+44PNvrrpkQPPvP7j2uWC9Hor5u6sO/4oGFTVPNFCKtRNT/wKdoifSQ27t39wycfORWX8XsqE0MffPudIXy4BHwDCK8QrMZk4kC/Xmmtbkpe7Dp1ye+pTFi0UxA9bGgQh9a3peWP7bgoPJHALxQZF5US2QZHQ/ewDpFtMOUmdCQnX2CdchMrx2PKLumY02d3/p1aFUPZ+mL9RJ70mc66ZpeMPJYffKyjrzo+N9bVkwNf5LEnLT8oK4V9GxjjKczwyszRPwKuk33aPZc5+tWGFaWqvLzc39XVVVtTU7OhZ1P0mnF/973A3pmZmQe9vb3TqVQqrqqqIy/SUgUqilJJNpy3AVg9VXzZfn1V/bPB102HLwIPgFlVVedl+STlElUURQE2ab9iKQNqgBpFUe4B91QJZ9/2l06KopQAzdgTZ2YT0KzZtoWMT7leQjBGaZEqzbYtZAiskWDDMdu2HzKKorwKVNh1JAcLqqr+ZceAjBGckWDDMdsyBP6DYBDWInOabVtImQclTRNGpE0TT26iL4wjE72jSzXAB7jJii3TygAZsoIWtXLimViqPY08999s/y/wWec/5M9E6Z5VbdoAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoibWF0dHpoZW5nMjUiLCJhIjoiY2o1Y3B3YzBrMGNsZDJ3bzg1ZDBjOGxvbiJ9.HjOovjGYk7y6ExHFt3Rv2w',
    },
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map