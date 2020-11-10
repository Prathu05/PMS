import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyHeaderComponent } from './layout/company-header/company-header.component';
import { ShopHeaderComponent } from './layout/shop-header/shop-header.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CatalogComponent } from './pages/company/catalog/catalog.component';
import { CategoriesComponent } from './pages/company/categories/categories.component';
import { ProductsComponent } from './pages/company/products/products.component';
import { BrandsComponent } from './pages/company/brands/brands.component';
import { DashboardComponent } from './pages/shop/dashboard/dashboard.component';
import { HomeComponent } from './pages/stores/home/home.component';
import { CartComponent } from './pages/stores/cart/cart.component';
import { CheckoutComponent } from './pages/stores/checkout/checkout.component';
import { OrdersComponent } from './pages/shop/orders/orders.component';
import { OrderDetailsComponent } from './pages/shop/order-details/order-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CompanyHeaderComponent,
    ShopHeaderComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    CategoriesComponent,
    ProductsComponent,
    BrandsComponent,
    DashboardComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
