import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Element} from '../../../models/element/element';

@Component({
    moduleId: module.id,
    selector: '[ng-rect]',
    styleUrls: ['rect.component.css'],
    templateUrl: 'rect.component.html'
})
export class RectComponent {
    @Input() rect: Array<Element>;
    @Output() onClick = new EventEmitter();
    
    private click(event){
        this.onClick.emit(event);
    }
}