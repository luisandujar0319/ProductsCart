import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  getProdcutObserver$: Subscription;
  products: Product[] = [];
  productsPaginationTotal: number[] = [];
  skip: number = 1;
  take: number = 3;
  totalPages: number = 0;

  constructor(private produtSev: ProductServiceService) {
    this.getProdcutObserver$ = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.GetAllProduct(this.skip, this.take);
  }

  GetAllProduct(skip: number, take: number) {
    this.getProdcutObserver$ = this.produtSev.GetAllProductsService()
      .subscribe(Products => {
        this.configurationFilterPage(skip, Products);
        this.products = Products.slice((skip - 1) * take, skip * take);
      })
  }



  configurationFilterPage(Page: number, products: Product[]) {
    const Pages = Math.ceil(products.length / this.take)
    this.totalPages = Pages;
    var start = Math.max(1, Page - 2);
    var end = Math.min(start + 3, Pages);

    this.productsPaginationTotal = [];
    for (let index = start; index <= end; index++) {
      this.productsPaginationTotal.push(index)
    }
  }

  pageChange(skip: number) {
    this.skip = skip;
    this.GetAllProduct(skip, this.take)
  }

  Add(product: Product) {
    this.produtSev.AddService(product);
  }

  ngOnDestroy(): void {
    this.getProdcutObserver$.unsubscribe();
  }
}
