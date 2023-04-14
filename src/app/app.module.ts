import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/Routing.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './views/cart/cart.component';
import { ProductServiceService } from './services/product-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectedComponent } from './components/selected/selected.component';
import { LoadingService } from './services/loading.service';
import { AuthInterptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    LoadingComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterptor, multi: true },
    ProductServiceService,
    LoadingService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
