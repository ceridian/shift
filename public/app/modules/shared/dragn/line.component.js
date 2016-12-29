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
var LineComponent = (function () {
    function LineComponent() {
    }
    LineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[ng-line]',
            inputs: ['line'],
            styleUrls: ['line.component.css'],
            template: "\n        <svg:line [attr.x1]=\"line.x1\"\n                    [attr.y1]=\"line.y1\"\n                    [attr.x2]=\"line.x2\" \n                    [attr.y2]=\"line.y2\"\n                    [attr.class]=\"line.class\"/>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
//# sourceMappingURL=line.component.js.map