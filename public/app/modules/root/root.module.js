"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//librarys
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
//components
var root_component_1 = require('./root.component');
var login_component_1 = require('./login.component');
//modules
var shared_module_1 = require('../shared/shared.module');
//services
var auth_service_1 = require('../../services/auth/auth.service');
var util_service_1 = require('../../services/util/util.service');
var message_service_1 = require('../../services/message/message.service');
//routing
var root_routing_1 = require('./root.routing');
var RootModule = (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                shared_module_1.SharedModule,
                root_routing_1.RootRouting
            ],
            declarations: [
                root_component_1.RootComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                root_routing_1.appRoutingProviders,
                auth_service_1.AuthService,
                util_service_1.UtilService,
                message_service_1.MessageService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [root_component_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RootModule);
    return RootModule;
}());
exports.RootModule = RootModule;
//# sourceMappingURL=root.module.js.map