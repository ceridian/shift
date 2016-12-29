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
var DragnService = (function () {
    function DragnService() {
        /*this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        if (document.defaultView && document.defaultView.getComputedStyle) {
            this.padLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
            this.padTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
            this.borLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
            this.borTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
        }*/
        this.html = document.body.parentNode;
        this.htmlTop = this.html.offsetTop;
        this.htmlLeft = this.html.offsetLeft;
        this.valid = false; // when set to false, the canvas will redraw everything
        this.shapes = []; // the collection of things to be drawn
        this.dragging = false; // Keep track of when we are dragging
        // the current selected object. In the future we could turn this into an array for multiple selection
        this.selection = null;
        this.dragoffx = 0; // See mousedown and mousemove events for explanation
        this.dragoffy = 0;
        //fixes a problem where double clicking causes text to get selected on the canvas
        /*this.canvas.addEventListener('selectstart', function(e: MouseEvent) { e.preventDefault(); return false; }, false);

        // Up, down, and move are for dragging
        this.canvas.addEventListener('mousedown', function(e: MouseEvent) {
            this.dragging = true;
            console.log('down');
            console.log(e);
        });

        this.canvas.addEventListener('mousemove', function(e: MouseEvent) {
            console.log('move');
            console.log(e);
        });

        this.canvas.addEventListener('mouseup', function(e: MouseEvent) {
            this.dragging = false;
            console.log('up');
            console.log(e);
        });*/
    }
    DragnService.prototype.getMouse = function (e) {
        var offsetX = 0;
        var offsetY = 0;
        var element = this.canvas;
        if (element.offsetParrent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }
        offsetX += this.padLeft + this.borLeft + this.htmlLeft;
        offsetY += this.padTop + this.borTop + this.htmlTop;
        var mx = e.pageX - offsetX;
        var my = e.pageY - offsetY;
        return { x: mx, y: my };
    };
    DragnService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DragnService);
    return DragnService;
}());
exports.DragnService = DragnService;
//# sourceMappingURL=dragn.service.js.map