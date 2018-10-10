import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector     : 'horizontal-layout-2',
    templateUrl  : './layout-2.component.html',
    styleUrls    : ['./layout-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HorizontalLayout2Component implements OnInit, OnDestroy
{

    navigation: any;

    // Private

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
      
    )
    {
        // Set the defaults
        this.navigation = navigation;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {

    }
}
