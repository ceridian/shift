import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
//services
import {DragnService} from './dragn.service';
//models
import {Element} from '../../../models/element/element';
import {Action} from '../../../models/element/action';
import {Link} from '../../../models/element/link';

@Component({
    moduleId: module.id,
    selector: 'dragn',
    templateUrl: 'dragn.component.html',
    styleUrls: ['dragn.component.css'],
    directives: [DragnComponent]
})
export class DragnComponent{
    @Input() elements: Array<Element>;
    @ViewChild('svg') svgRef:ElementRef;

    private selected: Element;
    private clickHold: Element;
    private svg: any;
    private offset: any;

    private dragoffX: number;
    private dragoffY: number;

    private links: Array<Link>;

    constructor(){
        this.selected = null;
        this.clickHold = null;
        this.links = [];
    }

    ngAfterViewInit(){
        this.svg = this.svgRef.nativeElement;
        let rect = this.svg.getBoundingClientRect();

        let doc = this.svg.ownerDocument;
        let win = doc.defaultView;
        let docElem = doc.documentElement;

        this.offset = {
            y: rect.top + win.pageYOffset - docElem.clientTop,
            x: rect.left + win.pageXOffset - docElem.clientLeft
        };
        
    }

    private click(event){
        this.selected = event;
    }

    private onMouseMove(event: MouseEvent){
        if(this.selected != null){
            if(this.selected.type == 'packet'){
                let oldx = this.selected.x;
                let oldy = this.selected.y;
                this.selected.x = event.clientX - this.offset.x - this.dragoffX;
                this.selected.y = event.clientY - this.offset.y - this.dragoffY;
                for(let i in this.selected.children){
                    let offx = this.selected.children[i].x - oldx;
                    let offy = this.selected.children[i].y - oldy;
                    this.selected.children[i].x = this.selected.x + offx;
                    this.selected.children[i].y = this.selected.y + offy;
                    for(let i2 in this.selected.children[i].children){
                        this.selected.children[i].children[i2].x = this.selected.x + offx;
                        this.selected.children[i].children[i2].y = this.selected.y + offy;
                    }
                }
            }
        }
    }

/*
    -labels
    -move links with rects
    -turn off active
*/
    private setActive(el: Element){
        console.log('set active');
        if(el.type == 'action'){
            let act = new Element({
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
    }

    private onMouseDown(event){
        this.dragoffX = event.clientX - this.selected.x - this.offset.x;
        this.dragoffY = event.clientY - this.selected.y - this.offset.y;
        if(this.selected.type == 'action'){
            this.setActive(this.selected);
            if(this.clickHold == null){
                this.clickHold = this.selected;
            }else{
                let link = new Link({
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
    }

    private onMouseUp(event){
        this.selected = null;
    }


}