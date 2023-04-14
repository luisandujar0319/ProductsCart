import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/interfaces/product.interface';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCar: Product[] = [];
  constructor(private produtSev: ProductServiceService) {

  }
  ngOnInit(): void {
    this.GetAllProductCar();
  }
  GetAllProductCar() {
    this.productsCar = this.produtSev.getAllProductCarService();
  }

  delete(product: Product) {
    this.produtSev.deleteProductCar(product);
  }
}
