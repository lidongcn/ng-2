/**
 * Created by lidong on 16/9/18.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import {DashboardComponent} from "./dashboard.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroesComponent
    }
];
// 调用 forRoot 方法是因为要在应用程序根部(NgModule)提供配置好的路由
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

