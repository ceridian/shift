import { NgModule }            from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//components
import {ForkComponent} from './fork.component';
//services
import {ForkService} from './fork.service';


@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        ForkComponent,
    ],
    providers: [
        ForkService
    ]
})

export class ForkModule { }