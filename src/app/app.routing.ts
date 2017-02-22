import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';


//next time if want more new routes jux put them here

//routes set to an array of objects
const appRoutes: Routes = [
    {
        path: '', //setting a root path so leave it blank
        component:UserComponent //using the user compoenent as the root
    },
    {
        path:'about',
        component: AboutComponent //no need semi-colon! in an array
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
