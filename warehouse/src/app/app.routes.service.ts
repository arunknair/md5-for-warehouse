import {Map1Component} from './views/maps/map1/map1.component';
import {ModalsComponent} from './views/modals/modals.component';
import {BasicTableComponent} from './views/tables/basic-table/basic-table.component';
import {Profile1Component} from './views/profile/profile1/profile1.component';
import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NotFoundComponent} from './views/errors/not-found/not-found.component';
import {Dashboard1Component} from './views/dashboards/dashboard1/dashboard1.component';
import {LoginComponent} from './shared/components/login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {WhCurrentBookingsComponent} from './shared/components/wh-current-bookings/wh-current-bookings.component';
import {WhFutureBookingsComponent} from './shared/components/wh-future-bookings/wh-future-bookings.component';
import {ReferenceComponent} from './shared/components/reference/reference.component';


const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main-page',
        component: MainPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboards',
                pathMatch: 'full'
            },
            {
                path: 'dashboards',
                component: Dashboard1Component,
                children:
                    [
                        {
                            path: '',
                            redirectTo: 'warehouse-current-bookings',
                            pathMatch: 'full'
                        },
                        {
                            path: 'warehouse-current-bookings',
                            component: WhCurrentBookingsComponent
                        },
                        {
                            path: 'warehouse-future-bookings',
                            component: WhFutureBookingsComponent
                        },
                        {
                            path: 'reference',
                            component: ReferenceComponent
                        },
                    ]
            }
        ]
    },
    {
        path: 'profiles',
        children:
            [
                {
                    path: 'profile1',
                    component: Profile1Component
                },
            ]
    },
    {
        path: 'tables',
        children:
            [
                {
                    path: 'table1',
                    component: BasicTableComponent
                },
            ]
    },
    {
        path: 'maps',
        children:
            [
                {
                    path: 'map1',
                    component: Map1Component
                },
            ]
    },

    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
