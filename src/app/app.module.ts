import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { HttpClientModule } from '@angular/common/http';
import { MyStoreComponent } from './pages/shop/my-store/my-store.component';
import { CategoryPageComponent } from './pages/company/category-page/category-page.component';
import { BrandPageComponent } from './pages/company/brand-page/brand-page.component';
import { CategoryBrandPageComponent } from './pages/company/category-brand-page/category-brand-page.component';
import { StoreCategoryPageComponent } from './pages/shop/my-store/store-category-page/store-category-page.component';
import { StoreBrandPageComponent } from './pages/shop/my-store/store-brand-page/store-brand-page.component';
import { StoreCategoryBrandPageComponent } from './pages/shop/my-store/store-category-brand-page/store-category-brand-page.component';
import { ProductDetailsComponent } from './pages/shop/my-store/product-details/product-details.component';
import { CompareComponent } from './pages/shop/my-store/compare/compare.component';


import { BottomSheet } from './pages/shop/my-store/compare/bottomsheet';
import { CreateOrderComponent } from './pages/shop/create-order/create-order.component';
import { MobileFooterComponent } from './layout/mobile-footer/mobile-footer.component';
import { OpenOrdersComponent } from './pages/shop/open-orders/open-orders.component';

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
    MyStoreComponent,
    CategoryPageComponent,
    BrandPageComponent,
    CategoryBrandPageComponent,
    StoreCategoryPageComponent,
    StoreBrandPageComponent,
    StoreCategoryBrandPageComponent,
    ProductDetailsComponent,
    CompareComponent,
    BottomSheet,
    CreateOrderComponent,
    MobileFooterComponent,
    OpenOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[BottomSheet],
  bootstrap: [AppComponent]
})
export class AppModule { }
