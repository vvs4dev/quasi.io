"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng2_device_detector_1 = require("ng2-device-detector");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var material_1 = require("@angular/material");
var services_component_1 = require("./services/services.component");
var contact_component_1 = require("./contact/contact.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        about_component_1.AboutComponent,
                        services_component_1.ServicesComponent,
                        contact_component_1.ContactComponent,
                        header_component_1.HeaderComponent,
                        footer_component_1.FooterComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'webpackc' }),
                        ng2_device_detector_1.Ng2DeviceDetectorModule.forRoot(),
                        app_routing_module_1.AppRoutingModule,
                        material_1.MatListModule, material_1.MatToolbarModule
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map