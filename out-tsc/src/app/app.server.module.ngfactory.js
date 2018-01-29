"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./app.server.module");
var i2 = require("./app.component");
var i3 = require("./home/home.component.ngfactory");
var i4 = require("./about/about.component.ngfactory");
var i5 = require("./contact/contact.component.ngfactory");
var i6 = require("./services/services.component.ngfactory");
var i7 = require("./app.component.ngfactory");
var i8 = require("@angular/http");
var i9 = require("@angular/platform-server");
var i10 = require("@angular/common/http");
var i11 = require("@angular/common");
var i12 = require("@angular/platform-browser");
var i13 = require("@angular/animations/browser");
var i14 = require("@angular/platform-browser/animations");
var i15 = require("@angular/animations");
var i16 = require("@angular/router");
var i17 = require("@angular/cdk/bidi");
var i18 = require("@angular/cdk/platform");
var i19 = require("ng2-device-detector");
var i20 = require("./home/home.component");
var i21 = require("./about/about.component");
var i22 = require("./contact/contact.component");
var i23 = require("./services/services.component");
var i24 = require("./app-routing.module");
var i25 = require("@angular/material/core");
var i26 = require("@angular/material/list");
var i27 = require("@angular/material/toolbar");
var i28 = require("./app.module");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.HomeComponentNgFactory, i4.AboutComponentNgFactory, i5.ContactComponentNgFactory, i6.ServicesComponentNgFactory, i7.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i8.BrowserXhr, i9.ɵd, []), i0.ɵmpd(4608, i8.ResponseOptions, i8.BaseResponseOptions, []), i0.ɵmpd(4608, i8.XSRFStrategy, i9.ɵe, []), i0.ɵmpd(4608, i8.XHRBackend, i8.XHRBackend, [i8.BrowserXhr, i8.ResponseOptions, i8.XSRFStrategy]), i0.ɵmpd(4608, i8.RequestOptions, i8.BaseRequestOptions, []), i0.ɵmpd(5120, i8.Http, i9.ɵf, [i8.XHRBackend, i8.RequestOptions]), i0.ɵmpd(4608, i10.HttpXsrfTokenExtractor, i10.ɵg, [i11.DOCUMENT, i0.PLATFORM_ID, i10.ɵe]), i0.ɵmpd(4608, i10.ɵh, i10.ɵh, [i10.HttpXsrfTokenExtractor, i10.ɵf]), i0.ɵmpd(5120, i10.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i10.ɵh]), i0.ɵmpd(4608, i10.XhrFactory, i9.ɵd, []), i0.ɵmpd(4608, i10.HttpXhrBackend, i10.HttpXhrBackend, [i10.XhrFactory]), i0.ɵmpd(6144, i10.HttpBackend, null, [i10.HttpXhrBackend]), i0.ɵmpd(5120, i10.HttpHandler, i9.ɵg, [i10.HttpBackend, [2, i10.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i10.HttpClient, i10.HttpClient, [i10.HttpHandler]), i0.ɵmpd(4608, i10.ɵd, i10.ɵd, []), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID, [2, i11.ɵa]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵe, [i11.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]), i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []), i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i12.ɵDomEventsPlugin(p0_0, p0_1), new i12.ɵKeyEventsPlugin(p1_0), new i12.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i11.DOCUMENT, i0.NgZone, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager, i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i9.ɵc, i9.ɵc, [i12.DOCUMENT, [2, i12.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i9.ɵc]), i0.ɵmpd(4608, i9.ɵServerRendererFactory2, i9.ɵServerRendererFactory2, [i0.NgZone, i12.DOCUMENT, i12.ɵSharedStylesHost]), i0.ɵmpd(4608, i13.AnimationDriver, i13.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i13.ɵAnimationStyleNormalizer, i14.ɵd, []), i0.ɵmpd(4608, i13.ɵAnimationEngine, i14.ɵb, [i13.AnimationDriver, i13.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i9.ɵa, [i9.ɵServerRendererFactory2, i13.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(4608, i15.AnimationBuilder, i14.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i12.DOCUMENT]), i0.ɵmpd(5120, i16.ActivatedRoute, i16.ɵf, [i16.Router]), i0.ɵmpd(4608, i16.NoPreloading, i16.NoPreloading, []), i0.ɵmpd(6144, i16.PreloadingStrategy, null, [i16.NoPreloading]), i0.ɵmpd(135680, i16.RouterPreloader, i16.RouterPreloader, [i16.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i16.PreloadingStrategy]), i0.ɵmpd(4608, i16.PreloadAllModules, i16.PreloadAllModules, []), i0.ɵmpd(5120, i16.ROUTER_INITIALIZER, i16.ɵi, [i16.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i16.ROUTER_INITIALIZER]), i0.ɵmpd(6144, i17.DIR_DOCUMENT, null, [i11.DOCUMENT]), i0.ɵmpd(4608, i17.Directionality, i17.Directionality, [[2, i17.DIR_DOCUMENT]]), i0.ɵmpd(4608, i18.Platform, i18.Platform, []), i0.ɵmpd(4608, i19.ReTree, i19.ReTree, []), i0.ɵmpd(4608, i19.Ng2DeviceService, i19.Ng2DeviceService, []), i0.ɵmpd(512, i8.HttpModule, i8.HttpModule, []), i0.ɵmpd(512, i10.HttpClientXsrfModule, i10.HttpClientXsrfModule, []), i0.ɵmpd(512, i10.HttpClientModule, i10.HttpClientModule, []), i0.ɵmpd(512, i11.CommonModule, i11.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i16.ɵb()]; }, []), i0.ɵmpd(512, i16.ɵg, i16.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "webpackc", []), i0.ɵmpd(2048, i12.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i12.ɵh(p0_0), i16.ɵh(p1_0), i12.ɵf(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i16.ɵg, i12.ɵTRANSITION_ID, i11.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]), i0.ɵmpd(512, i14.NoopAnimationsModule, i14.NoopAnimationsModule, []), i0.ɵmpd(512, i9.ServerModule, i9.ServerModule, []), i0.ɵmpd(512, i19.Ng2DeviceDetectorModule, i19.Ng2DeviceDetectorModule, []), i0.ɵmpd(1024, i16.ɵa, i16.ɵd, [[3, i16.Router]]), i0.ɵmpd(512, i16.UrlSerializer, i16.DefaultUrlSerializer, []), i0.ɵmpd(512, i16.ChildrenOutletContexts, i16.ChildrenOutletContexts, []), i0.ɵmpd(256, i16.ROUTER_CONFIGURATION, { useHash: true }, []), i0.ɵmpd(1024, i11.LocationStrategy, i16.ɵc, [i11.PlatformLocation, [2, i11.APP_BASE_HREF], i16.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i16.ROUTES, function () { return [[{ path: "", component: i20.HomeComponent }, { path: "about", component: i21.AboutComponent }, { path: "contact", component: i22.ContactComponent }, { path: "services", component: i23.ServicesComponent }]]; }, []), i0.ɵmpd(1024, i16.Router, i16.ɵe, [i0.ApplicationRef, i16.UrlSerializer, i16.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i16.ROUTES, i16.ROUTER_CONFIGURATION, [2, i16.UrlHandlingStrategy], [2, i16.RouteReuseStrategy]]), i0.ɵmpd(512, i16.RouterModule, i16.RouterModule, [[2, i16.ɵa], [2, i16.Router]]), i0.ɵmpd(512, i24.AppRoutingModule, i24.AppRoutingModule, []), i0.ɵmpd(512, i17.BidiModule, i17.BidiModule, []), i0.ɵmpd(256, i25.MATERIAL_SANITY_CHECKS, true, []), i0.ɵmpd(512, i25.MatCommonModule, i25.MatCommonModule, [[2, i25.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(512, i25.MatLineModule, i25.MatLineModule, []), i0.ɵmpd(512, i18.PlatformModule, i18.PlatformModule, []), i0.ɵmpd(512, i25.MatRippleModule, i25.MatRippleModule, []), i0.ɵmpd(512, i25.MatPseudoCheckboxModule, i25.MatPseudoCheckboxModule, []), i0.ɵmpd(512, i26.MatListModule, i26.MatListModule, []), i0.ɵmpd(512, i27.MatToolbarModule, i27.MatToolbarModule, []), i0.ɵmpd(512, i28.AppModule, i28.AppModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i10.ɵe, "XSRF-TOKEN", []), i0.ɵmpd(256, i10.ɵf, "X-XSRF-TOKEN", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;
//# sourceMappingURL=app.server.module.ngfactory.js.map