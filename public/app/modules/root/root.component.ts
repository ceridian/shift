import {Component} from '@angular/core';
import {Router} from '@angular/router';
//components
//import {SpinnerComponent} from '../../services/spinner/spinner.component';
import {MessageComponent} from '../../services/message/message.component';
//services
import {AuthService} from '../../services/auth/auth.service';
//models
//import {Element} from '../../models/element/element';
import {Page} from '../../models/page/page';

@Component({
    moduleId: module.id,
    selector: 'shift',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [
        MessageComponent
    ]

})
export class RootComponent {
    private user: string;
    private pages: Array<Page>;
    constructor(private router: Router, private auth: AuthService){
        this.user = '';
        this.pages = [];
        auth.username.subscribe(
            val => {
                this.user = val;
            }
        )
        auth.pages.subscribe(
            val => {this.pages = val;}
        )
    }
}
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