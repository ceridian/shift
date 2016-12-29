import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[ng-circle]',
    styleUrls: ['circle.component.css'],
    templateUrl: 'circle.component.html' 
})
export class CircleComponent {
    @Input() circle: any;
    @Output() onClick = new EventEmitter();
    
    private click(event){
        this.onClick.emit(event);
    }
}