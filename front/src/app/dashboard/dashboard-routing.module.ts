import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
import { MainStoreComponent } from './store/main-store/main-store.component';
import { MyItemsComponent } from './store/my-items/my-items.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { 
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
      },
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
      },
      {
        path:'store',
        children:[{
          path:'main',
          component:MainStoreComponent
          
        },
        {
          path:'myitems',
          component:MyItemsComponent
          
        }]        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
