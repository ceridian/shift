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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//components
var dragn_component_1 = require('./dragn/dragn.component');
var dyna_form_component_1 = require('./dyna-form/dyna-form.component');
var popup_component_1 = require('./popup/popup.component');
var header_component_1 = require('./header/header.component');
var list_component_1 = require('./list/list.component');
var circle_component_1 = require('./dragn/circle.component');
var rect_component_1 = require('./dragn/rect.component');
var line_component_1 = require('./dragn/line.component');
//services
var dragn_service_1 = require('./dragn/dragn.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                dragn_component_1.DragnComponent,
                dyna_form_component_1.DynaFormComponent,
                header_component_1.HeaderComponent,
                list_component_1.ListComponent,
                popup_component_1.PopUpComponent,
                circle_component_1.CircleComponent,
                rect_component_1.RectComponent,
                line_component_1.LineComponent
            ],
            providers: [
                http_1.HttpModule,
                http_1.JsonpModule,
                dragn_service_1.DragnService
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dragn_component_1.DragnComponent,
                dyna_form_component_1.DynaFormComponent,
                header_component_1.HeaderComponent,
                list_component_1.ListComponent,
                popup_component_1.PopUpComponent,
                circle_component_1.CircleComponent,
                rect_component_1.RectComponent,
                line_component_1.LineComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map