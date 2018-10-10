import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HorizontalLayout2Component } from 'app/layout/horizontal/layout-2/layout-2.component';

@NgModule({
    declarations: [
        HorizontalLayout2Component
    ],
    imports     : [
        RouterModule,
    ],
    exports     : [
        HorizontalLayout2Component
    ]
})
export class HorizontalLayout2Module
{
}
