import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
//components
import {DragnComponent} from './dragn/dragn.component'
import {DynaFormComponent} from './dyna-form/dyna-form.component';
import {PopUpComponent} from './popup/popup.component';
import {HeaderComponent} from './header/header.component';
import {ListComponent} from './list/list.component';
import {CircleComponent} from './dragn/circle.component';
import {RectComponent} from './dragn/rect.component';
import {LineComponent} from './dragn/line.component';
//services
import {DragnService} from './dragn/dragn.service';


@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        DragnComponent,
        DynaFormComponent,
        HeaderComponent,
        ListComponent,
        PopUpComponent,
        CircleComponent,
        RectComponent,
        LineComponent
    ],
    providers: [
        HttpModule,
        JsonpModule,
        DragnService
    ],
    exports: [
        CommonModule,
        FormsModule,
        DragnComponent,
        DynaFormComponent,
        HeaderComponent,
        ListComponent,
        PopUpComponent,
        CircleComponent,
        RectComponent,
        LineComponent
    ]
})

export class SharedModule { }