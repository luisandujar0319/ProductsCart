import { Component } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';
import { Router } from '@angular/router';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private productServ: ProductServiceService,
              private router: Router,
              private loadingServ: LoadingService) {

  }

  get getCountProducts() {
    return this.productServ.getAllProductCarCountService();

  }
  get getLoading() {
    return this.loadingServ.getLoadingService();
  }

  GoToProduct() {
    this.router.navigate(['/'])
  }
  GoToCar() {
    this.router.navigate(['/cart'])
  }
}
