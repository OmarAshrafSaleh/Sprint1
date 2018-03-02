import { Component, OnInit } from '@angular/core';
//import {StoreService} from "./store.service"
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
Products
  constructor(/*private StoreService: StoreService*/) { }

  ngOnInit() {
    /*this.StoreService.getProducts().subscribe(
    (res:any)=>{
      this.Products=res.data;
    }
  )*/
  }


}