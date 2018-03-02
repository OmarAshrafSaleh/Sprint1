import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
@Component({
  selector: 'app-my-items',
  template: `<input #search class="search" style="backgroung:white" type="text"(keydown.enter)="onSearch(search.value)" placeholder="Search...">
   <ng2-smart-table [settings]="settings" [source]="products" (deleteConfirm)="delete($event)" (updateConfirm)="update($event)"
   (createConfirm) = "add($event)"></ng2-smart-table>`
  ,
  styleUrls: ['./my-items.component.scss'],
  providers: [MyItemsService]
})
export class MyItemsComponent implements
  OnInit {


  products;
  source: LocalDataSource;
  /*data = [
    
      this.MyItemsService.getProducts().subscribe(
        (res:any)=>{
          this.products=res.data;
        })
    
  ];*/

  constructor(private MyItemsService: MyItemsService) { }

  settings = {
    edit: {
      confirmSave: true,
    },
    add: {
      confirmCreate: true,
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'name',
        filter: false
      },
      price: {
        title: 'price',
        type: 'number',
        filter: false
      },
      username: {
        title: 'Seller Name',
        filter: false
      },
      componentNo: {
        title: 'componentNo',
        type: 'number',
        filter: false
      },
      createdAt: {
        title: 'Created At',

        type: 'date',
        filter: false
      },
      UpdatedAt: {
        title: 'Updated At',

        type: 'date',
        filter: false
      }

    }
  };


  ngOnInit() {
    this.MyItemsService.getProducts().subscribe(
      (res: any) => {
        this.products = res.data;
      }
    )

  }
  onDelete(event) {
    console.log("delete");

  }
  onDeleteConfirm(event): void {
    console.log(event.data);
    if (window.confirm("Are you sure you want to delete this item !!")) {
      event.confirm.resolve();
    }
  }
  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);

  }
  update(event) {
    var id = event.data._id
    var data = {
      name: event.newData.name,
      price: event.newData.price,
      createdAt: event.newData.createdAt,
      UpdatedAt: event.newData.UpdatedAt,
      username: event.newData.username,
      componenetNo: event.newData.componenetNo
    };
    this.MyItemsService.updateProduct(id, data).subscribe(
      res => {
        console.log(res);
        event.confirm.ressolve(event.newData)
      }
    )

  }
  add(event) {
    var data = {
      name: event.newData.name,
      price: event.newData.price,
      username: event.newData.username,
      componentNo: event.newData.componentNo,
      createdAt: new Date(),
      UpdatedAt: event.newData.UpdatedAt,

    };
    console.log(data);
    this.MyItemsService.createProduct(data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.NewData);
      }
    )

  }
  delete(event) {
    var id = event.data._id
    this.MyItemsService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.Data);
      }
    )
  }
}
