import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MyItemsService {

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:productId');
}

getProductBelowPrice(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice/:price');
}

createProduct(body:any){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct',body);
}

updateProduct(id,body:any){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/:productId',id,body);
}

deleteProduct(id){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+id);
}

getProductsByUsername(user){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/'+user);
}

getProductsByComponent(){
  return this.http.get(environment.apiUrl + 'userproducts/getProductsByComponent/:componentNo');
}




}
