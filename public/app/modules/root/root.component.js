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
//components
//import {SpinnerComponent} from '../../services/spinner/spinner.component';
var message_component_1 = require('../../services/message/message.component');
//services
var auth_service_1 = require('../../services/auth/auth.service');
var RootComponent = (function () {
    function RootComponent(router, auth) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.user = '';
        this.pages = [];
        auth.username.subscribe(function (val) {
            _this.user = val;
        });
        auth.pages.subscribe(function (val) { _this.pages = val; });
    }
    RootComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shift',
            templateUrl: 'root.component.html',
            styleUrls: ['root.component.css'],
            directives: [
                message_component_1.MessageComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
// old svg cordinets
/*this.width = 1000;
this.height = 500;
this.elements = [
    new Element({
        id: 's1',
        label: 'Test Source',
        type: 'packet',
        subTypes: ['source'],
        x: 25,
        y: 25,
        children: [
            {
                id: 's1o1',
                label: 'Output 1',
                type: 'action',
                subTypes: ['output'],
                x: 125,
                y: 105
            }
        ]
    }),
    new Element({
        id: 'l1',
        label: 'Loop',
        type: 'packet',
        subTypes: ['refit'],
        x: 150,
        y: 25,
        children: [
            {
                id: 'l1i1',
                label: 'Array',
                type: 'action',
                subTypes: ['input'],
                x: 150,
                y: 105
            },
            {
                id: 'l1o1',
                label: 'Object',
                type: 'action',
                subTypes: ['output'],
                x: 250,
                y: 105
            }
        ]
    }),
    new Element({
        id: 'i1',
        label: 'Test input',
        type: 'packet',
        subTypes: ['source'],
        x: 275,
        y: 25,
        children: [
            {
                id: 'i1i1',
                label: 'Object',
                type: 'action',
                subTypes: ['input'],
                x: 275,
                y: 105
            }
        ]
    })*/
/*new Element({id: 's1', label: 'source', x: 25, y: 150, w: 100, h: 150, type: 'source', actions: [
    {id: 's1o1', label: 'output', x: 125, y: 230, radius: 10,  type: 'output'}
],
links: [
    {x2: 150, y2: 205, x1: 125, y1: 230, type: 'line', dest: 'output', targ: 'input1', id: 's1l1'}
]}),
new Element({id: 'r1', label: 'refit',x: 150, y: 150, w: 100, h: 150,  type: 'refit', actions: [
    {id: 'r1i1', label: 'input1', x: 150, y: 205, radius: 10,  type: 'input'},
    {id: 'r1o1', label: 'input2', x: 150, y: 255, radius: 10, type: 'input'},
]}),*/
//];
//}
//} 
//# sourceMappingURL=root.component.js.map