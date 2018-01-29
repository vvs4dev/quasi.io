"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var services_component_1 = require("./services/services.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = function () { return []; };
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map