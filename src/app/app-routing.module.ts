import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
/* import { AuthGuard, CustomPreloadingStrategyService } from '../core'; */
import { PathNotFoundComponent, ContactUsComponent, LoginComponent, /* MessagesComponent, LoginComponent  */ } from './layout';
import { AuthGuard } from './core';

/* const extraOptions: ExtraOptions = {
    preloadingStrategy: CustomPreloadingStrategyService,
    enableTracing: true // Makes the router log all its internal events to the console.
}; */


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
        data: { title: 'Contact Us' }
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    /*    {
           path: 'messages',
           component: MessagesComponent,
           outlet: 'messages'
       }, */

    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule'
    },

    /*  {
         path: 'users',
         loadChildren: '../users/users.module#UsersModule',
         data: { preload: true, title: 'Users' }
     }, */

    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PathNotFoundComponent,
        data: { title: 'Page Not Found' }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes/* , extraOptions */)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
