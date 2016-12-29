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
//models
var element_1 = require('../../../models/element/element');
var link_1 = require('../../../models/element/link');
var DragnComponent = (function () {
    function DragnComponent() {
        this.selected = null;
        this.clickHold = null;
        this.links = [];
    }
    DragnComponent.prototype.ngAfterViewInit = function () {
        this.svg = this.svgRef.nativeElement;
        var rect = this.svg.getBoundingClientRect();
        var doc = this.svg.ownerDocument;
        var win = doc.defaultView;
        var docElem = doc.documentElement;
        this.offset = {
            y: rect.top + win.pageYOffset - docElem.clientTop,
            x: rect.left + win.pageXOffset - docElem.clientLeft
        };
    };
    DragnComponent.prototype.click = function (event) {
        this.selected = event;
    };
    DragnComponent.prototype.onMouseMove = function (event) {
        if (this.selected != null) {
            if (this.selected.type == 'packet') {
                var oldx = this.selected.x;
                var oldy = this.selected.y;
                this.selected.x = event.clientX - this.offset.x - this.dragoffX;
                this.selected.y = event.clientY - this.offset.y - this.dragoffY;
                for (var i in this.selected.children) {
                    var offx = this.selected.children[i].x - oldx;
                    var offy = this.selected.children[i].y - oldy;
                    this.selected.children[i].x = this.selected.x + offx;
                    this.selected.children[i].y = this.selected.y + offy;
                    for (var i2 in this.selected.children[i].children) {
                        this.selected.children[i].children[i2].x = this.selected.x + offx;
                        this.selected.children[i].children[i2].y = this.selected.y + offy;
                    }
                }
            }
        }
    };
    /*
        -labels
        -move links with rects
        -turn off active
    */
    DragnComponent.prototype.setActive = function (el) {
        console.log('set active');
        if (el.type == 'action') {
            var act = new element_1.Element({
                id: 'active',
                label: '',
                type: 'action',
                subTypes: ['active'],
                x: el.x,
                y: el.y,
                r: el.r
            });
            el.children.push(act);
        }
    };
    DragnComponent.prototype.onMouseDown = function (event) {
        this.dragoffX = event.clientX - this.selected.x - this.offset.x;
        this.dragoffY = event.clientY - this.selected.y - this.offset.y;
        if (this.selected.type == 'action') {
            this.setActive(this.selected);
            if (this.clickHold == null) {
                this.clickHold = this.selected;
            }
            else {
                var link = new link_1.Link({
                    id: this.clickHold.id + this.selected.id,
                    dest: this.clickHold.id,
                    targ: this.selected.id,
                    type: 'line',
                    x1: this.clickHold.x,
                    y1: this.clickHold.y,
                    x2: this.selected.x,
                    y2: this.selected.y
                });
                this.links.push(link);
                this.clickHold = null;
            }
        }
    };
    DragnComponent.prototype.onMouseUp = function (event) {
        this.selected = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DragnComponent.prototype, "elements", void 0);
    __decorate([
        core_1.ViewChild('svg'), 
        __metadata('design:type', core_1.ElementRef)
    ], DragnComponent.prototype, "svgRef", void 0);
    DragnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dragn',
            templateUrl: 'dragn.component.html',
            styleUrls: ['dragn.component.css'],
            directives: [DragnComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DragnComponent);
    return DragnComponent;
}());
exports.DragnComponent = DragnComponent;
//# sourceMappingURL=dragn.component.js.map