import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/interfaces/product.interface';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly api: string = 'https://jsonplaceholder.typicode.com/photos';
  private productsCar: Product[] = [];

  constructor(private http: HttpClient) { }

  getAllProductCarCountService() {
    return this.productsCar.length;
  }
  getAllProductCarService() {
    return this.productsCar;
  }
  AddService(product: Product) {
    let exist = this.productsCar.find(produ => produ.id === product.id);
    if (!exist) {
      this.productsCar.push(product);
    }
  }

  GetAllProductsService() {
    return this.http.get<Product[]>(`${this.api}`);
  }

  deleteProductCar(product: Product) {
    let index = this.productsCar.indexOf(product);
    this.productsCar.splice(index,1)
  }
}
