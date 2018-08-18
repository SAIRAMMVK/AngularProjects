import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {UserComponent} from '../app/components/user.component';
import {AboutComponent} from '../app/components/about.component';

const approutes:Routes = [
    {
        path:"",
        component:UserComponent
    },
    {
        path:"about",
        component:AboutComponent
    }
];

export const routing :ModuleWithProviders = RouterModule.forRoot(approutes);
