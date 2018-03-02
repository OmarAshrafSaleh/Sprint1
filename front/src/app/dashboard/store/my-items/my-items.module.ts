import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import{MyItemsService} from'./my-items.service';
import {HttpClientModule}from '@angular/common/http';
import{HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [MyItemsComponent],
  providers:[MyItemsService]
})
export class MyItemsModule { }
