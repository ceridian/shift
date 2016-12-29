import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[ng-line]',
    inputs: ['line'],
    styleUrls: ['line.component.css'],
    template: `
        <svg:line [attr.x1]="line.x1"
                    [attr.y1]="line.y1"
                    [attr.x2]="line.x2" 
                    [attr.y2]="line.y2"
                    [attr.class]="line.class"/>
    `
})
export class LineComponent {
}