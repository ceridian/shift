import { Injectable } from '@angular/core';
//models
import {Element} from '../../../models/element/element';
import {Action} from '../../../models/element/action';

@Injectable()
export class DragnService {
    private canvas: any;
    private ctx: any;
    private html: any;
    private selection: any;
    private shapes: Array<Element>;
    private padLeft: number;
    private padTop: number;
    private borLeft: number;
    private borTop: number;
    private htmlTop: number;
    private htmlLeft: number;
    private dragoffx: number;
    private dragoffy: number;
    private valid: boolean;
    private dragging: boolean;

    constructor(){//canvas){
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
        this.shapes = [];  // the collection of things to be drawn
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
    
    private getMouse(e: MouseEvent){
        let offsetX = 0;
        let offsetY = 0;
        let element = this.canvas;
        if(element.offsetParrent !== undefined){
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while((element = element.offsetParent));
        }

        offsetX += this.padLeft + this.borLeft + this.htmlLeft;
        offsetY += this.padTop + this.borTop + this.htmlTop;

        let mx = e.pageX - offsetX;
        let my = e.pageY - offsetY;

        return {x: mx, y: my};
    }
}