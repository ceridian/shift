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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//services
var auth_service_1 = require('../../services/auth/auth.service');
var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = '';
        this.pass = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user, this.pass).subscribe(function (val) { return _this.userInit(val); }, function (err) { return console.log(err); });
    };
    LoginComponent.prototype.userInit = function (user) {
        /*let hold = [];
        for(let i in user.roles){
            let role = user.roles[i];
            for(let i2 in role.permissions.view){
                var per = role.permissions.view[i2];
                var page = new Page(per);
                hold.push(page);
            }
        }*/
        console.log(user);
        this.auth.setUser(user.user);
        this.auth.setPages(user.pages);
        this.auth.setToken(user.token.value);
        this.auth.setSettings(user.settings);
        var home = user.settings.home;
        this.router.navigate([home]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map