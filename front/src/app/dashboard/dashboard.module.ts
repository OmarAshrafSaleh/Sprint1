import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
import { MainStoreComponent } from './store/main-store/main-store.component';
import { MyItemsComponent } from './store/my-items/my-items.component';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent,StoreComponent,MainStoreComponent,MyItemsComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
